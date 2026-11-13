(function () {
  'use strict';
  var C = window.COURSE;
  // Chạy được cả trong trình duyệt lẫn trong Node (tools/pack.js dùng để dựng sẵn trang tĩnh cho SEO).
  var IS_NODE = typeof document === 'undefined';
  var app = IS_NODE ? null : document.getElementById('app');

  /* ---------- đường dẫn ----------
     path: đường dẫn thật /…/module/m1-1/ (khi chạy trên web, mỗi trang có tệp HTML dựng sẵn)
     hash: #/module/m1-1 (khi mở tệp trực tiếp từ máy bằng file://)
     rel : dùng khi dựng trang tĩnh, liên kết tương đối theo độ sâu của trang */
  var MODE = 'hash', BASE = '/', PREFIX = '';
  if (!IS_NODE) {
    var me = document.currentScript && document.currentScript.src;
    if (location.protocol !== 'file:' && me) { MODE = 'path'; BASE = new URL('../', me).pathname; }
  }
  function link(r) {
    r = r || '';
    if (MODE === 'hash') return '#/' + r;
    if (MODE === 'rel') return (PREFIX || './') + (r ? r + '/' : '');
    return BASE + (r ? r + '/' : '');
  }

  var KIND = { course: 'Khoá học', cert: 'Chứng chỉ', spec: 'Chuỗi khoá học', book: 'Sách', paper: 'Nghiên cứu', article: 'Bài viết', docs: 'Tài liệu gốc', tool: 'Công cụ', report: 'Báo cáo', video: 'Video', blog: 'Blog chuyên gia' };
  var COST = { free: 'Miễn phí', audit: 'Miễn phí (audit)', mixed: 'Một phần miễn phí', paid: 'Trả phí' };
  var KEY = 'gp_progress_v1';

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }
  function fmtH(h) { return (Math.round(h * 10) / 10).toString().replace('.', ',') + ' giờ'; }
  function fmtMin(n) { return n >= 120 ? fmtH(n / 60) : n + ' phút'; }
  // Thời gian đọc ghi chú tính từ số chữ (khoảng 220 tiếng mỗi phút); tổng thời gian là ước tính gồm cả nguồn gốc.
  function lessonTime(l) {
    var words = ((l.lecture || '') + ' ' + l.body).replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length;
    var read = (l.lecture ? 'Đọc bài giảng ' : 'Đọc ghi chú ') + Math.max(1, Math.round(words / 220)) + ' phút';
    if (!l.min) return read;
    return read + ' · ' + (l.res && l.res.length ? 'cả nguồn gốc ~' : 'thực hành ~') + fmtMin(l.min);
  }

  /* ---------- state ---------- */
  var blank = { lessons: {}, quiz: {}, assign: {}, notes: {}, last: null, pace: 6 };
  var state = (function () {
    try { return Object.assign({}, blank, JSON.parse(localStorage.getItem(KEY) || '{}')); }
    catch (e) { return Object.assign({}, blank); }
  })();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ } }

  /* ---------- index ---------- */
  var MODS = {}, ORDER = [];
  C.levels.sort(function (a, b) { return a.num - b.num; });
  C.levels.forEach(function (lv) {
    lv.modules.forEach(function (m, i) {
      m.level = lv; m.code = lv.num + '.' + (i + 1);
      var lec = C.lectures && C.lectures[m.id];
      m.lessons.forEach(function (l, j) { l.id = m.id + '-l' + (j + 1); if (lec && lec[j]) l.lecture = lec[j]; });
      m.full = m.lessons.every(function (l) { return !!l.lecture; });
      MODS[m.id] = m; ORDER.push(m);
    });
  });
  // Gắn level cho từng tài liệu dựa trên nơi nó được dùng
  Object.keys(C.res).forEach(function (k) { C.res[k].lv = C.res[k].lv || []; });
  function tag(k, n) {
    var r = C.res[k];
    if (!r) { console.warn('[Growth Path] Thiếu tài liệu:', k); return; }
    if (r.lv.indexOf(n) < 0) r.lv.push(n);
  }
  ORDER.forEach(function (m) {
    m.lessons.forEach(function (l) { (l.res || []).forEach(function (k) { tag(k, m.level.num); }); });
    (m.readings || []).forEach(function (k) { tag(k, m.level.num); });
  });

  /* ---------- progress ---------- */
  function quizPassed(m) {
    var q = state.quiz[m.id];
    return !!(q && q.total && q.score / q.total >= C.meta.passRate);
  }
  function modProg(m) {
    var total = m.lessons.length + (m.quiz && m.quiz.length ? 1 : 0) + (m.assignment ? 1 : 0), done = 0;
    m.lessons.forEach(function (l) { if (state.lessons[l.id]) done++; });
    if (m.quiz && m.quiz.length && quizPassed(m)) done++;
    if (m.assignment && state.assign[m.id]) done++;
    return { done: done, total: total, pct: total ? Math.round(done / total * 100) : 0 };
  }
  function sumProg(mods) {
    var d = 0, t = 0;
    mods.forEach(function (m) { var p = modProg(m); d += p.done; t += p.total; });
    return { done: d, total: t, pct: t ? Math.round(d / t * 100) : 0 };
  }
  function lvHours(lv) { return lv.modules.reduce(function (s, m) { return s + (m.hours || 0); }, 0); }
  function refreshTop() {
    var p = sumProg(ORDER);
    document.getElementById('topBar').style.width = p.pct + '%';
    document.getElementById('topPct').textContent = p.pct + '%';
  }

  /* ---------- components ---------- */
  function resCard(k, withLv) {
    var r = C.res[k];
    if (!r) return '';
    var lv = withLv ? '<span class="lv-tags">' + r.lv.slice().sort().map(function (n) { return '<span>L' + n + '</span>'; }).join('') + '</span>' : '';
    return '<a class="res" href="' + esc(r.url) + '" target="_blank" rel="noopener noreferrer">' +
      '<span class="res-kind k-' + esc(r.kind) + '">' + esc(KIND[r.kind] || r.kind) + '</span>' +
      '<span class="res-main"><strong>' + esc(r.t) + '</strong>' +
      '<span class="res-meta">' + esc(r.p) + (r.c ? ' · ' + esc(r.c) : '') + (r.time ? ' · ' + esc(r.time) : '') + (r.cert ? ' · Có chứng chỉ' : '') + '</span>' +
      (r.note ? '<span class="res-note">' + esc(r.note) + '</span>' : '') + '</span>' + lv +
      '<span class="res-cost c-' + esc(r.cost) + '">' + esc(COST[r.cost] || '') + ' ↗</span></a>';
  }
  function outline(activeId) {
    var h = '';
    C.levels.forEach(function (lv) {
      h += '<h4 style="--lv:' + lv.color + '">Level ' + lv.num + ' · ' + esc(lv.short || lv.title) + '</h4>';
      lv.modules.forEach(function (m) {
        var p = modProg(m), cls = p.pct >= 100 ? 'done' : (p.pct > 0 ? 'part' : '');
        h += '<a href="' + link('module/' + m.id) + '" class="' + (m.id === activeId ? 'on' : '') + '" style="--lv:' + lv.color + '">' +
          '<span class="dot ' + cls + '" style="--p:' + p.pct + '%">' + (cls === 'done' ? '✓' : '') + '</span>' +
          '<span>' + m.code + ' ' + esc(m.title) + '</span></a>';
      });
    });
    return h;
  }
  function shell(activeId, inner, color) {
    return '<div class="wrap" style="--lv:' + color + '"><button class="btn ghost sm side-toggle" data-act="side" type="button">☰ Mục lục khoá học</button>' +
      '<div class="course"><aside class="side card" id="side">' + outline(activeId) + '</aside><div>' + inner + '</div></div></div>';
  }

  /* ---------- pages ---------- */
  function home() {
    var p = sumProg(ORDER), lessons = 0, hours = 0;
    ORDER.forEach(function (m) { lessons += m.lessons.length; hours += m.hours || 0; });
    var next = state.last && MODS[state.last] ? MODS[state.last] : ORDER[0];
    var providers = {};
    Object.keys(C.res).forEach(function (k) { providers[C.res[k].p] = (providers[C.res[k].p] || 0) + 1; });
    var top = Object.keys(providers).sort(function (a, b) { return providers[b] - providers[a]; }).slice(0, 28);

    var h = '<div class="wrap"><section class="hero">' +
      '<div class="eyebrow">Lộ trình tự học miễn phí · 7 cấp độ</div>' +
      '<h1>Từ nền tảng Digital Marketing đến Performance, User Acquisition và AI</h1>' +
      '<p>Một chương trình học hoàn chỉnh, sắp xếp theo trình tự từ các khoá học và tài liệu học thuật được đánh giá cao của Mỹ, Anh, Singapore. Mỗi module có mục tiêu, ghi chú bài giảng, nguồn học gốc, bài tập thực hành và bài kiểm tra.</p>' +
      '<div class="cta"><a class="btn" href="' + link('module/' + next.id) + '">' + (p.done ? 'Tiếp tục học: ' + next.code + ' ' + esc(next.title) : 'Bắt đầu Level 1') + ' →</a>' +
      '<a class="btn ghost" href="' + link('plan') + '">Xem kế hoạch học</a></div></section>' +
      '<div class="stats">' +
      '<div class="stat card"><b>' + C.levels.length + '</b><span>cấp độ</span></div>' +
      '<div class="stat card"><b>' + ORDER.length + '</b><span>module</span></div>' +
      '<div class="stat card"><b>' + lessons + '</b><span>bài học</span></div>' +
      '<div class="stat card"><b>~' + Math.round(hours) + '</b><span>giờ học</span></div>' +
      '<div class="stat card"><b>' + Object.keys(C.res).length + '</b><span>khoá học &amp; tài liệu</span></div>' +
      '<div class="stat card"><b>' + p.pct + '%</b><span>bạn đã hoàn thành</span></div></div>' +
      '<div class="section-head"><div><h2>Lộ trình 7 cấp độ</h2><p>Học tuần tự từ trên xuống. Mỗi cấp độ xây trên kiến thức của cấp trước; nếu đã có kinh nghiệm, làm bài kiểm tra của module để quyết định có bỏ qua hay không.</p></div></div>' +
      '<div class="roadmap">';
    C.levels.forEach(function (lv) {
      var lp = sumProg(lv.modules);
      h += '<a class="lv-card card" href="' + link('level/' + lv.id) + '" style="--lv:' + lv.color + '">' +
        '<div class="lv-num">' + lv.num + '</div><div><h3>' + esc(lv.title) + '</h3><p class="tag">' + esc(lv.tagline) + '</p>' +
        '<div class="lv-meta"><span class="pill lv">' + esc(lv.stage) + '</span><span class="pill">' + lv.modules.length + ' module</span><span class="pill">~' + Math.round(lvHours(lv)) + ' giờ</span></div></div>' +
        '<div class="lv-prog"><b>' + lp.pct + '%</b><div class="bar"><span style="width:' + lp.pct + '%"></span></div></div></a>';
    });
    h += '</div>' +
      '<div class="section-head"><div><h2>Cách học hiệu quả</h2><p>Mỗi module được thiết kế theo cùng một nhịp, giống một khoá học chính quy.</p></div></div>' +
      '<div class="how">' +
      '<div class="card"><div class="n">1</div><h3>Đọc ghi chú bài giảng</h3><p class="muted small">Phần tóm lược bằng tiếng Việt giúp bạn nắm khung kiến thức, công thức và thuật ngữ trước khi vào nguồn gốc tiếng Anh.</p></div>' +
      '<div class="card"><div class="n">2</div><h3>Học từ nguồn gốc</h3><p class="muted small">Mỗi bài dẫn tới khoá học, chương sách hoặc nghiên cứu cụ thể. Ưu tiên nguồn miễn phí; nguồn trả phí được ghi rõ.</p></div>' +
      '<div class="card"><div class="n">3</div><h3>Làm bài tập thực hành</h3><p class="muted small">Áp dụng ngay vào sản phẩm hoặc doanh nghiệp bạn đang làm. Sản phẩm bài tập gộp lại thành portfolio.</p></div>' +
      '<div class="card"><div class="n">4</div><h3>Kiểm tra và ghi chú</h3><p class="muted small">Đạt từ ' + Math.round(C.meta.passRate * 100) + '% bài kiểm tra để hoàn thành module. Tiến độ và ghi chú lưu ngay trên trình duyệt của bạn.</p></div></div>' +
      '<div class="section-head"><div><h2>Nguồn học được tổng hợp</h2><p>Các tổ chức và tác giả có nhiều tài liệu nhất trong lộ trình.</p></div><a class="btn ghost sm" href="' + link('library') + '">Mở thư viện đầy đủ</a></div>' +
      '<div class="chips">' + top.map(function (n) { return '<span class="chip">' + esc(n) + '</span>'; }).join('') + '</div></div>';
    return h;
  }

  function levelPage(id) {
    var lv = C.levels.filter(function (l) { return l.id === id; })[0];
    if (!lv) return notFound();
    var lp = sumProg(lv.modules);
    var inner = '<div class="crumbs"><a href="' + link('') + '">Lộ trình</a> / Level ' + lv.num + '</div>' +
      '<div class="page-head card"><span class="pill lv">Level ' + lv.num + ' · ' + esc(lv.stage) + '</span><h1 style="margin-top:10px">' + esc(lv.title) + '</h1>' +
      '<p class="lead">' + esc(lv.intro) + '</p><div class="meta"><span class="pill">' + lv.modules.length + ' module</span><span class="pill">~' + Math.round(lvHours(lv)) + ' giờ</span>' +
      (lv.prereq ? '<span class="pill">Yêu cầu: ' + esc(lv.prereq) + '</span>' : '') + '<span class="pill ok">' + lp.pct + '% hoàn thành</span></div></div>' +
      '<div class="block card"><h2><span class="ic">★</span>Sau level này bạn làm được gì</h2><ul class="outcomes">' +
      lv.outcomes.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="mod-list">' + lv.modules.map(function (m) {
        var p = modProg(m);
        return '<a class="mod-card card" href="' + link('module/' + m.id) + '"><span class="code">' + m.code + '</span><div><h3>' + esc(m.title) + '</h3><p>' + esc(m.summary) + '</p></div>' +
          '<div class="r">' + m.lessons.length + ' bài · ' + fmtH(m.hours) + '<br><b style="color:' + (p.pct >= 100 ? 'var(--ok)' : 'inherit') + '">' + p.pct + '%</b></div></a>';
      }).join('') + '</div>';
    return shell(null, inner, lv.color);
  }

  function modulePage(id) {
    var m = MODS[id];
    if (!m) return notFound();
    var lv = m.level, idx = ORDER.indexOf(m), prev = ORDER[idx - 1], next = ORDER[idx + 1];
    if (!IS_NODE) { state.last = m.id; save(); }

    var h = '<div class="crumbs"><a href="' + link('') + '">Lộ trình</a> / <a href="' + link('level/' + lv.id) + '">Level ' + lv.num + '</a> / Module ' + m.code + '</div>' +
      '<div class="page-head card"><span class="pill lv">Module ' + m.code + '</span><h1 style="margin-top:10px">' + esc(m.title) + '</h1><p class="lead">' + esc(m.summary) + '</p>' +
      '<div class="meta"><span class="pill">' + m.lessons.length + ' bài học</span><span class="pill" title="Gồm đọc ghi chú, học nguồn gốc, bài tập và kiểm tra">Tổng ~' + fmtH(m.hours) + '</span><span class="pill">' + (m.quiz ? m.quiz.length : 0) + ' câu kiểm tra</span>' + (m.full ? '<span class="pill lv">Bài giảng đầy đủ</span>' : '') + '<span class="pill ok" id="modPct">' + modProg(m).pct + '% hoàn thành</span></div></div>';

    h += '<div class="block card"><h2><span class="ic">◎</span>Mục tiêu học tập</h2><ul class="obj">' + m.objectives.map(function (o) { return '<li><span>' + esc(o) + '</span></li>'; }).join('') + '</ul></div>';

    h += '<div class="block card"><h2><span class="ic">▶</span>Bài học</h2>' +
      '<p class="muted small">Mỗi bài ghi hai mốc thời gian: thời gian đọc nội dung trên trang, và tổng thời gian ước tính khi học cả các nguồn gốc bên dưới. ' +
      (m.full ? 'Module này có bài giảng đầy đủ; nguồn gốc dùng để đào sâu và đối chiếu.' : 'Module này hiện có ghi chú tóm lược; phần lớn kiến thức nằm ở nguồn gốc.') + '</p>';
    m.lessons.forEach(function (l, i) {
      var done = !!state.lessons[l.id];
      h += '<details class="lesson' + (done ? ' done' : '') + '" id="' + l.id + '"' + (i === 0 ? ' open' : '') + '><summary><span class="no">' + (done ? '✓' : (i + 1)) + '</span><span class="t">' + esc(l.title) + '<small class="min">' + lessonTime(l) + '</small></span></summary><div class="lesson-body">' +
        (l.lecture ? '<div class="lecture">' + l.lecture + '</div><div class="recap"><div class="src-title">Tóm lược bài học</div>' + l.body + '</div>' : l.body) +
        (l.res && l.res.length ? '<div class="src-title">Học từ nguồn gốc</div><div class="res-list">' + l.res.map(function (k) { return resCard(k); }).join('') + '</div>' : '') +
        '<label class="check"><input type="checkbox" data-lesson="' + l.id + '"' + (done ? ' checked' : '') + '> Đánh dấu đã học xong bài này</label></div></details>';
    });
    h += '</div>';

    if (m.takeaways && m.takeaways.length) {
      h += '<div class="block card takeaways"><h2><span class="ic">✦</span>Điểm cốt lõi cần nhớ</h2><ul>' + m.takeaways.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul></div>';
    }
    if (m.assignment) {
      h += '<div class="block card"><h2><span class="ic">✎</span>Bài tập thực hành: ' + esc(m.assignment.title) + '</h2>' + m.assignment.brief +
        (m.assignment.deliverable ? '<p><strong>Sản phẩm nộp:</strong> ' + esc(m.assignment.deliverable) + '</p>' : '') +
        '<label class="check"><input type="checkbox" data-assign="' + m.id + '"' + (state.assign[m.id] ? ' checked' : '') + '> Tôi đã hoàn thành bài tập</label></div>';
    }
    if (m.quiz && m.quiz.length) {
      var best = state.quiz[m.id];
      h += '<div class="block card"><h2><span class="ic">?</span>Kiểm tra cuối module</h2><p class="muted small">Chọn một đáp án cho mỗi câu. Đạt từ ' + Math.round(C.meta.passRate * 100) + '% để hoàn thành.</p><form id="quiz" data-mod="' + m.id + '">';
      m.quiz.forEach(function (q, qi) {
        h += '<div class="q"><p class="qt">Câu ' + (qi + 1) + '. ' + esc(q.q) + '</p>' + q.a.map(function (o, oi) {
          return '<label class="opt"><input type="radio" name="q' + qi + '" value="' + oi + '"><span>' + esc(o) + '</span></label>';
        }).join('') + '<div class="why"><strong>Giải thích:</strong> ' + esc(q.why) + '</div></div>';
      });
      h += '<div class="quiz-foot"><button class="btn" type="submit">Nộp bài</button><button class="btn ghost" type="button" data-act="retry">Làm lại</button><span class="score" id="score">' +
        (best ? 'Kết quả tốt nhất: ' + best.score + '/' + best.total : '') + '</span></div></form></div>';
    }
    if (m.readings && m.readings.length) {
      h += '<div class="block card"><h2><span class="ic">▤</span>Đọc thêm và tài liệu học thuật</h2><div class="res-list">' + m.readings.map(function (k) { return resCard(k); }).join('') + '</div></div>';
    }
    h += '<div class="block card"><h2><span class="ic">✐</span>Ghi chú của tôi</h2><textarea class="notes" id="notes" data-mod="' + m.id + '" placeholder="Ghi lại ý chính, câu hỏi, ý tưởng áp dụng. Ghi chú được lưu trên trình duyệt này.">' + esc(state.notes[m.id] || '') + '</textarea></div>';

    h += '<div class="pager">' +
      (prev ? '<a class="card" href="' + link('module/' + prev.id) + '"><small>← Module trước</small>' + prev.code + ' ' + esc(prev.title) + '</a>' : '<span></span>') +
      (next ? '<a class="card next" href="' + link('module/' + next.id) + '"><small>Module tiếp theo →</small>' + next.code + ' ' + esc(next.title) + '</a>' : '<a class="card next" href="' + link('plan') + '"><small>Hoàn thành lộ trình →</small>Xem lại kế hoạch và chứng chỉ</a>') + '</div>';

    return shell(m.id, h, lv.color);
  }

  var libState = { q: '', lv: '', kind: '', cost: '', c: '' };
  function libraryPage() {
    var keys = Object.keys(C.res), kinds = {}, countries = {};
    keys.forEach(function (k) { kinds[C.res[k].kind] = 1; if (C.res[k].c) countries[C.res[k].c] = 1; });
    function opt(v, label, cur) { return '<option value="' + esc(v) + '"' + (String(cur) === String(v) ? ' selected' : '') + '>' + esc(label) + '</option>'; }
    var h = '<div class="wrap"><h1>Thư viện khoá học và tài liệu</h1><p class="muted" style="max-width:760px">Toàn bộ nguồn được dùng trong lộ trình, gồm khoá học, chứng chỉ, sách, nghiên cứu học thuật và tài liệu chính thức của nền tảng. Nhãn L1–L7 cho biết tài liệu thuộc cấp độ nào.</p>' +
      '<div class="filters card"><input id="fq" type="search" placeholder="Tìm theo tên, tổ chức, chủ đề…" value="' + esc(libState.q) + '">' +
      '<select id="flv">' + opt('', 'Mọi cấp độ', libState.lv) + C.levels.map(function (l) { return opt(l.num, 'Level ' + l.num + ' · ' + (l.short || l.title), libState.lv); }).join('') + '</select>' +
      '<select id="fkind">' + opt('', 'Mọi loại', libState.kind) + Object.keys(kinds).sort().map(function (k) { return opt(k, KIND[k] || k, libState.kind); }).join('') + '</select>' +
      '<select id="fcost">' + opt('', 'Mọi mức phí', libState.cost) + Object.keys(COST).map(function (k) { return opt(k, COST[k], libState.cost); }).join('') + '</select>' +
      '<select id="fc">' + opt('', 'Mọi quốc gia', libState.c) + Object.keys(countries).sort().map(function (k) { return opt(k, k, libState.c); }).join('') + '</select></div>' +
      '<p class="count" id="libCount">' + libList().count + '</p><div class="res-list lib" id="libList">' + libList().html + '</div></div>';
    return h;
  }
  function drawLib() { var r = libList(); document.getElementById('libCount').textContent = r.count; document.getElementById('libList').innerHTML = r.html; }
  function libList() {
    var q = libState.q.toLowerCase();
    var keys = Object.keys(C.res).filter(function (k) {
      var r = C.res[k];
      if (libState.lv && r.lv.indexOf(Number(libState.lv)) < 0) return false;
      if (libState.kind && r.kind !== libState.kind) return false;
      if (libState.cost && r.cost !== libState.cost) return false;
      if (libState.c && r.c !== libState.c) return false;
      if (q && (r.t + ' ' + r.p + ' ' + (r.note || '')).toLowerCase().indexOf(q) < 0) return false;
      return true;
    }).sort(function (a, b) {
      var x = C.res[a], y = C.res[b];
      return (Math.min.apply(null, x.lv.concat(9)) - Math.min.apply(null, y.lv.concat(9))) || x.t.localeCompare(y.t);
    });
    return { count: keys.length + ' / ' + Object.keys(C.res).length + ' tài liệu', html: keys.length ? keys.map(function (k) { return resCard(k, true); }).join('') : '<div class="empty card">Không có tài liệu phù hợp bộ lọc.</div>' };
  }

  var glossQ = '';
  function glossaryPage() {
    return '<div class="wrap"><h1>Thuật ngữ</h1><p class="muted" style="max-width:760px">Các thuật ngữ và chỉ số xuất hiện xuyên suốt lộ trình, giữ nguyên tên tiếng Anh vì đó là cách ngành sử dụng hằng ngày.</p>' +
      '<div class="filters card"><input id="gq" type="search" placeholder="Tìm thuật ngữ, ví dụ: ROAS, LTV, incrementality…" value="' + esc(glossQ) + '"></div><div class="gloss" id="glossList">' + glossList() + '</div></div>';
  }
  function drawGloss() { document.getElementById('glossList').innerHTML = glossList(); }
  function glossList() {
    var q = glossQ.toLowerCase();
    var list = C.glossary.slice().sort(function (a, b) { return a.term.localeCompare(b.term); }).filter(function (g) {
      return !q || (g.term + ' ' + (g.full || '') + ' ' + g.def).toLowerCase().indexOf(q) >= 0;
    });
    return list.length ? list.map(function (g) {
      return '<div class="card"><h3>' + esc(g.term) + '</h3><p class="full">' + esc(g.full || '') + '</p><p>' + esc(g.def) + '</p></div>';
    }).join('') : '<div class="empty card">Không tìm thấy thuật ngữ.</div>';
  }

  function planPage() {
    var pace = Number(state.pace) || 6, wk = 0, rows = '', total = 0;
    C.levels.forEach(function (lv) {
      var hrs = lvHours(lv), weeks = Math.max(1, Math.ceil(hrs / pace)), from = wk + 1; wk += weeks; total += hrs;
      var lp = sumProg(lv.modules);
      rows += '<tr><td><a href="' + link('level/' + lv.id) + '"><strong>Level ' + lv.num + '</strong></a><br><span class="muted small">' + esc(lv.title) + '</span></td>' +
        '<td>' + lv.modules.map(function (m) { return m.code + ' ' + esc(m.title); }).join('<br>') + '</td>' +
        '<td>~' + Math.round(hrs) + ' giờ</td><td>Tuần ' + from + (weeks > 1 ? '–' + wk : '') + '</td><td>' + esc(lv.milestone || '') + '</td><td><b>' + lp.pct + '%</b></td></tr>';
    });
    var certRows = C.certs.map(function (c) {
      var r = C.res[c.key]; if (!r) return '';
      return '<tr><td><span class="pill">Level ' + c.lv + '</span></td><td><a href="' + esc(r.url) + '" target="_blank" rel="noopener noreferrer"><strong>' + esc(r.t) + '</strong></a><br><span class="muted small">' + esc(r.p) + '</span></td><td>' + esc(COST[r.cost] || '') + '</td><td>' + esc(c.why) + '</td></tr>';
    }).join('');
    return '<div class="wrap"><h1>Kế hoạch học</h1><p class="muted" style="max-width:760px">Lịch học được tính theo số giờ bạn dành ra mỗi tuần. Thời lượng gồm cả thời gian đọc ghi chú, học nguồn gốc, làm bài tập và kiểm tra.</p>' +
      '<div class="filters card"><label class="small" style="align-self:center;font-weight:600">Tôi học được mỗi tuần:</label><select id="pace">' +
      [4, 6, 8, 10, 15, 20].map(function (n) { return '<option value="' + n + '"' + (n === pace ? ' selected' : '') + '>' + n + ' giờ</option>'; }).join('') + '</select>' +
      '<span class="small muted" style="align-self:center">Tổng ~' + Math.round(total) + ' giờ → khoảng <b>' + wk + ' tuần</b> (' + (Math.round(wk / 4.345 * 10) / 10).toString().replace('.', ',') + ' tháng)</span></div>' +
      '<div class="card table-scroll"><table class="plan"><thead><tr><th>Cấp độ</th><th>Module</th><th>Thời lượng</th><th>Lịch</th><th>Cột mốc</th><th>Tiến độ</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<div class="section-head"><div><h2>Chứng chỉ nên lấy trên đường học</h2><p>Chứng chỉ không thay thế năng lực, nhưng là mốc kiểm tra khách quan và có giá trị trên hồ sơ. Danh sách ưu tiên chứng chỉ miễn phí của chính nền tảng.</p></div></div>' +
      '<div class="card table-scroll"><table class="plan"><thead><tr><th>Khi nào</th><th>Chứng chỉ</th><th>Chi phí</th><th>Vì sao nên lấy</th></tr></thead><tbody>' + certRows + '</tbody></table></div>' +
      '<div class="section-head"><div><h2>Dữ liệu học tập</h2><p>Tiến độ, điểm kiểm tra và ghi chú chỉ lưu trên trình duyệt này.</p></div><button class="btn ghost sm" data-act="reset" type="button">Xoá toàn bộ tiến độ</button></div></div>';
  }

  function notFound() { return '<div class="wrap"><div class="empty card">Không tìm thấy trang. <a href="' + link('') + '">Về lộ trình</a></div></div>'; }

  /* ---------- tiêu đề tab theo trang (giúp tab trình duyệt và lịch sử dễ nhận biết) ---------- */
  var SITE = 'Growth Path';
  function pageTitle(parts, nav) {
    if (parts[0] === 'module' && MODS[parts[1]]) return MODS[parts[1]].code + ' ' + MODS[parts[1]].title + ' | ' + SITE;
    if (parts[0] === 'level') {
      var lv = C.levels.filter(function (l) { return l.id === parts[1]; })[0];
      if (lv) return 'Level ' + lv.num + ': ' + lv.title + ' | ' + SITE;
    }
    var names = { library: 'Thư viện khoá học và tài liệu', glossary: 'Thuật ngữ digital marketing', plan: 'Kế hoạch học và chứng chỉ' };
    if (names[nav]) return names[nav] + ' | ' + SITE;
    return SITE + ': Khoá học Digital Marketing, Performance, UA & AI';
  }

  // Mô tả ngắn cho thẻ meta description của từng trang (khoảng 155 ký tự, cắt ở ranh giới từ).
  function clip(s, n) {
    s = String(s || '').replace(/\s+/g, ' ').trim();
    if (s.length <= n) return s;
    s = s.slice(0, n - 1); return s.slice(0, s.lastIndexOf(' ')).replace(/[,;:.\s]+$/, '') + '…';
  }
  function pageDesc(parts, nav) {
    var m = parts[0] === 'module' && MODS[parts[1]];
    if (m) return clip('Module ' + m.code + ': ' + m.summary, 158);
    var lv = parts[0] === 'level' && C.levels.filter(function (l) { return l.id === parts[1]; })[0];
    if (lv) return clip('Level ' + lv.num + ': ' + lv.intro, 158);
    var d = {
      library: 'Thư viện ' + Object.keys(C.res).length + ' khoá học, chứng chỉ, sách và nghiên cứu về digital marketing, performance, UA và AI, lọc theo cấp độ, loại và chi phí.',
      glossary: 'Giải thích ' + C.glossary.length + ' thuật ngữ và chỉ số digital marketing, performance, UA và AI bằng tiếng Việt: ROAS, CPA, LTV, incrementality, MMM…',
      plan: 'Lập kế hoạch học Growth Path theo số giờ mỗi tuần, kèm danh sách chứng chỉ miễn phí nên lấy ở từng cấp độ.'
    };
    return d[nav] || '';
  }

  /* ---------- router ---------- */
  function render(r) {
    var parts = String(r || '').replace(/^\/+|\/+$/g, '').split('/'), nav = 'home', html;
    if (parts[0] === 'level') html = levelPage(parts[1]);
    else if (parts[0] === 'module') html = modulePage(parts[1]);
    else if (parts[0] === 'library') { nav = 'library'; html = libraryPage(); }
    else if (parts[0] === 'glossary') { nav = 'glossary'; html = glossaryPage(); }
    else if (parts[0] === 'plan') { nav = 'plan'; html = planPage(); }
    else html = home();
    return { html: html, nav: nav, title: pageTitle(parts, nav), desc: pageDesc(parts, nav) };
  }
  function allRoutes() {
    return [''].concat(C.levels.map(function (l) { return 'level/' + l.id; }), ORDER.map(function (m) { return 'module/' + m.id; }), ['library', 'glossary', 'plan']);
  }

  if (IS_NODE) {
    // Dùng cho tools/pack.js: dựng HTML từng trang với liên kết tương đối.
    window.GP = {
      routes: allRoutes,
      render: function (r, prefix) { MODE = 'rel'; PREFIX = prefix || ''; return render(r); }
    };
    return;
  }

  function currentRoute() {
    if (MODE === 'hash') return location.hash.replace(/^#\/?/, '');
    var p = decodeURI(location.pathname);
    if (p.indexOf(BASE) === 0) p = p.slice(BASE.length);
    return p.replace(/(^|\/)index\.html$/, '').replace(/\/+$/, '');
  }
  function route(keepScroll) {
    var out = render(currentRoute());
    app.innerHTML = out.html;
    document.title = out.title;
    Array.prototype.forEach.call(document.querySelectorAll('.nav a'), function (a) { a.classList.toggle('on', a.getAttribute('data-nav') === out.nav); });
    var act = document.querySelector('.side a.on');
    if (act && act.scrollIntoView) act.scrollIntoView({ block: 'nearest' });
    refreshTop();
    if (!keepScroll) window.scrollTo(0, 0);
  }
  function go(url) { history.pushState(null, '', url); route(); }

  /* ---------- events ---------- */
  function afterProgress(modId) {
    refreshTop();
    var side = document.getElementById('side');
    if (side) { var open = side.classList.contains('open'), st = side.scrollTop; side.innerHTML = outline(modId); side.scrollTop = st; if (open) side.classList.add('open'); }
    var pct = document.getElementById('modPct');
    if (pct && MODS[modId]) pct.textContent = modProg(MODS[modId]).pct + '% hoàn thành';
  }
  app.addEventListener('change', function (e) {
    var t = e.target;
    if (t.matches('[data-lesson]')) {
      var id = t.getAttribute('data-lesson');
      if (t.checked) state.lessons[id] = 1; else delete state.lessons[id];
      save();
      var box = document.getElementById(id), no = box.querySelector('.no');
      box.classList.toggle('done', t.checked);
      no.textContent = t.checked ? '✓' : (Array.prototype.indexOf.call(box.parentNode.querySelectorAll('.lesson'), box) + 1);
      afterProgress(id.replace(/-l\d+$/, ''));
      if (t.checked) { var nx = box.nextElementSibling; if (nx && nx.classList.contains('lesson')) { box.open = false; nx.open = true; nx.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }
    } else if (t.matches('[data-assign]')) {
      var mid = t.getAttribute('data-assign');
      if (t.checked) state.assign[mid] = 1; else delete state.assign[mid];
      save(); afterProgress(mid);
    } else if (t.id === 'flv' || t.id === 'fkind' || t.id === 'fcost' || t.id === 'fc') {
      libState.lv = document.getElementById('flv').value; libState.kind = document.getElementById('fkind').value;
      libState.cost = document.getElementById('fcost').value; libState.c = document.getElementById('fc').value; drawLib();
    } else if (t.id === 'pace') { state.pace = Number(t.value); save(); app.innerHTML = planPage(); }
  });
  var noteTimer;
  app.addEventListener('input', function (e) {
    var t = e.target;
    if (t.id === 'fq') { libState.q = t.value; drawLib(); }
    else if (t.id === 'gq') { glossQ = t.value; drawGloss(); }
    else if (t.id === 'notes') {
      clearTimeout(noteTimer);
      noteTimer = setTimeout(function () { state.notes[t.getAttribute('data-mod')] = t.value; save(); }, 300);
    }
  });
  app.addEventListener('submit', function (e) {
    if (e.target.id !== 'quiz') return;
    e.preventDefault();
    var f = e.target, m = MODS[f.getAttribute('data-mod')], score = 0, missing = 0;
    m.quiz.forEach(function (q, qi) { if (!f.querySelector('input[name="q' + qi + '"]:checked')) missing++; });
    var out = document.getElementById('score');
    if (missing) { out.className = 'score fail'; out.textContent = 'Còn ' + missing + ' câu chưa trả lời.'; return; }
    m.quiz.forEach(function (q, qi) {
      var opts = f.querySelectorAll('input[name="q' + qi + '"]');
      Array.prototype.forEach.call(opts, function (inp, oi) {
        var lab = inp.parentNode; lab.classList.remove('right', 'wrong');
        if (oi === q.correct) lab.classList.add('right');
        else if (inp.checked) lab.classList.add('wrong');
        if (inp.checked && oi === q.correct) score++;
      });
    });
    f.classList.add('graded');
    var prevBest = state.quiz[m.id];
    if (!prevBest || score > prevBest.score) { state.quiz[m.id] = { score: score, total: m.quiz.length }; save(); }
    var pass = score / m.quiz.length >= C.meta.passRate;
    out.className = 'score ' + (pass ? 'pass' : 'fail');
    out.textContent = 'Bạn đúng ' + score + '/' + m.quiz.length + (pass ? ' · Đạt' : ' · Chưa đạt, xem giải thích rồi làm lại');
    afterProgress(m.id);
  });
  app.addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]');
    if (!b) return;
    var act = b.getAttribute('data-act');
    if (act === 'side') document.getElementById('side').classList.toggle('open');
    else if (act === 'retry') {
      var f = document.getElementById('quiz'); f.reset(); f.classList.remove('graded');
      Array.prototype.forEach.call(f.querySelectorAll('.opt'), function (o) { o.classList.remove('right', 'wrong'); });
      document.getElementById('score').textContent = '';
    } else if (act === 'reset') {
      if (window.confirm('Xoá toàn bộ tiến độ, điểm kiểm tra và ghi chú trên trình duyệt này?')) {
        state = Object.assign({}, blank, { lessons: {}, quiz: {}, assign: {}, notes: {} }); save(); route();
      }
    }
  });
  document.getElementById('themeBtn').addEventListener('click', function () {
    var cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', cur);
    try { localStorage.setItem('gp_theme', cur); } catch (e) { /* ignore */ }
  });

  document.getElementById('reviewed').textContent = C.meta.reviewed;

  // Liên kết trên thanh menu: đổi theo chế độ đường dẫn đang dùng.
  Array.prototype.forEach.call(document.querySelectorAll('.topbar a[data-nav], .topbar a.brand'), function (a) {
    var n = a.getAttribute('data-nav');
    a.setAttribute('href', link(!n || n === 'home' ? '' : n));
  });

  if (MODE === 'path') {
    // Liên kết cũ dạng #/module/m1-1 vẫn mở đúng trang, rồi đổi sang đường dẫn mới.
    if (/^#\//.test(location.hash)) history.replaceState(null, '', link(location.hash.replace(/^#\/?/, '').replace(/\/+$/, '')));
    // Bấm liên kết nội bộ thì đổi trang ngay, không tải lại.
    document.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest('a[href]');
      if (!a || a.target || a.hasAttribute('download') || a.origin !== location.origin) return;
      if (a.pathname.indexOf(BASE) !== 0 || /\.[a-z0-9]+$/i.test(a.pathname)) return;
      if (a.pathname === location.pathname && a.hash) return;
      e.preventDefault();
      go(a.pathname + a.hash);
    });
    window.addEventListener('popstate', function () { route(true); });
  } else {
    window.addEventListener('hashchange', function () { route(); });
  }
  route(true);
})();
