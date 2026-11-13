COURSE.levels.push({
  id: 'L3', num: 3, color: '#d1541f',
  title: 'Performance Marketing: quảng cáo trả phí',
  short: 'Performance',
  stage: 'Trung cấp',
  tagline: 'Hiểu cơ chế đấu giá, vận hành Google, Meta, TikTok và quản lý ngân sách theo lợi nhuận.',
  intro: 'Level 3 dạy cách mua lưu lượng có kỷ luật. Bạn học cơ chế đấu giá và giá thầu tự động, cách vận hành từng nền tảng lớn, chiến lược sáng tạo quảng cáo và cách quyết định ngân sách dựa trên lợi nhuận biên thay vì ROAS do nền tảng báo cáo.',
  prereq: 'Hoàn thành Level 1 và module 2.5',
  milestone: 'Chứng chỉ Google Ads Search và một kế hoạch media có dự báo',
  outcomes: [
    'Giải thích cơ chế đấu giá của Google và Meta và hệ quả với cách đặt giá thầu.',
    'Thiết kế cấu trúc tài khoản và chọn chiến lược giá thầu phù hợp với lượng tín hiệu.',
    'Triển khai và tối ưu chiến dịch Search, Performance Max, Advantage+ và TikTok.',
    'Xây ma trận góc tiếp cận sáng tạo và quy trình thử nghiệm quảng cáo.',
    'Lập dự báo ngân sách, tính ROAS biên và quyết định mở rộng hay cắt giảm.'
  ],
  modules: [
    {
      id: 'm3-1', hours: 7,
      title: 'Nền tảng paid media: đấu giá, giá thầu, tín hiệu',
      summary: 'Những cơ chế chung cho mọi nền tảng quảng cáo. Nắm phần này, bạn học nền tảng mới chỉ còn là học giao diện.',
      objectives: [
        'Mô tả cách Ad Rank của Google và tổng giá trị của Meta quyết định quảng cáo thắng đấu giá.',
        'So sánh các mô hình mua và chiến lược giá thầu tự động.',
        'Chọn sự kiện tối ưu phù hợp với lượng dữ liệu chuyển đổi.',
        'Thiết kế cấu trúc tài khoản gọn, đủ dữ liệu cho thuật toán học.',
        'Xây nhịp vận hành hằng ngày, tuần, tháng.'
      ],
      lessons: [
        {
          title: 'Đấu giá quảng cáo hoạt động thế nào', min: 55,
          body: `<p>Về mặt lịch sử, đấu giá quảng cáo tìm kiếm phát triển từ mô hình <strong>đấu giá giá nhì tổng quát (GSP)</strong>: người thắng trả mức vừa đủ để vượt người xếp ngay dưới. Hai bài báo kinh điển năm 2007 của Hal Varian (khi đó là kinh tế trưởng của Google) và của Edelman, Ostrovsky, Schwarz phân tích mô hình này. Ngày nay Google không công bố công thức chi tiết; tài liệu chính thức chỉ nêu các yếu tố của Ad Rank, và người xếp hạng cao hơn không nhất thiết trả nhiều hơn.</p>
<p>Ngày nay <strong>Google</strong> xếp hạng bằng <strong>Ad Rank</strong>, tính lại ở mỗi lượt đấu giá từ: giá thầu, chất lượng quảng cáo và trang đích (CTR kỳ vọng, mức liên quan, trải nghiệm trang đích), ngưỡng Ad Rank, mức cạnh tranh, bối cảnh tìm kiếm và tác động kỳ vọng của các thành phần mở rộng.</p>
<p><strong>Meta</strong> chọn quảng cáo có <strong>tổng giá trị</strong> cao nhất:</p>
<div class="formula">Tổng giá trị ≈ Giá thầu × Tỷ lệ hành động ước tính + Chất lượng quảng cáo<br><em>(cách mô tả đơn giản hoá; Meta nêu ba thành phần này nhưng không công bố nguyên văn một phương trình)</em></div>
<h4>Ba hệ quả thực hành</h4>
<ul><li>Quảng cáo liên quan và chất lượng cao thắng với giá thấp hơn. Cải thiện sáng tạo và trang đích là cách giảm giá bền nhất.</li><li>Bạn cạnh tranh với mọi nhà quảng cáo muốn tiếp cận cùng người dùng, không chỉ đối thủ cùng ngành. CPM vì thế tăng theo mùa cao điểm.</li><li>Giá thầu chỉ là một đầu vào. Hệ thống dự đoán xác suất hành động cho từng lượt hiển thị, nên chất lượng tín hiệu chuyển đổi quyết định độ chính xác.</li></ul>`,
          res: ['google-ads-auction', 'meta-auction']
        },
        {
          title: 'Mô hình mua và chiến lược giá thầu', min: 50,
          body: `<p>Bạn thường <strong>trả tiền</strong> theo lượt hiển thị hoặc lượt nhấp, nhưng <strong>tối ưu</strong> theo một mục tiêu sâu hơn. Nền tảng quy đổi mục tiêu thành giá thầu cho từng lượt đấu giá.</p>
<table><tr><th>Mục tiêu</th><th>Google Ads</th><th>Meta Ads</th><th>Dùng khi</th></tr>
<tr><td>Tối đa kết quả trong ngân sách</td><td>Maximize conversions</td><td>Highest volume</td><td>Mới bắt đầu, chưa biết CPA hợp lý</td></tr>
<tr><td>Giữ chi phí mỗi kết quả</td><td>Target CPA (từ tháng 6/2026 nhãn này thay cho "Maximize conversions with a Target CPA")</td><td>Cost per result goal</td><td>Đã có CPA mục tiêu rõ</td></tr>
<tr><td>Tối đa giá trị</td><td>Maximize conversion value</td><td>Highest value</td><td>Giá trị đơn chênh lệch lớn</td></tr>
<tr><td>Giữ hiệu suất doanh thu</td><td>Target ROAS</td><td>ROAS goal</td><td>Đủ dữ liệu giá trị, cần kiểm soát lợi nhuận</td></tr>
<tr><td>Kiểm soát giá tối đa</td><td>Manual CPC, giới hạn giá thầu</td><td>Bid cap</td><td>Trường hợp đặc biệt, người dùng có kinh nghiệm</td></tr></table>
<p>Đặt mục tiêu quá chặt (CPA quá thấp, ROAS quá cao) làm hệ thống bỏ qua phần lớn lượt đấu giá và chiến dịch không tiêu được ngân sách. Hãy bắt đầu gần mức thực tế đang đạt rồi siết dần.</p>`,
          res: ['google-smart-bidding', 'google-ads-certs']
        },
        {
          title: 'Tín hiệu chuyển đổi: nhiên liệu của thuật toán', min: 45,
          body: `<p>Giá thầu tự động học từ các chuyển đổi bạn gửi về. Ba quyết định quan trọng:</p>
<ul><li><strong>Tối ưu theo sự kiện nào.</strong> Sự kiện càng gần doanh thu càng tốt, với điều kiện đủ số lượng. Meta nêu mốc khoảng 50 sự kiện tối ưu mỗi tuần cho một ad set để ra khỏi giai đoạn học. Nếu lượt mua quá ít, tạm tối ưu theo sự kiện nông hơn (thêm giỏ, bắt đầu thanh toán) rồi chuyển dần.</li><li><strong>Gửi giá trị.</strong> Khi mỗi chuyển đổi có giá trị khác nhau, hãy gửi kèm doanh thu để dùng chiến lược theo giá trị.</li><li><strong>Độ đầy đủ.</strong> Kết hợp tag trên trình duyệt với kênh máy chủ (Conversions API của Meta, enhanced conversions của Google) để bù phần dữ liệu mất do trình duyệt chặn và do người dùng không đồng ý theo dõi.</li></ul>
<div class="callout"><b>Nguyên tắc:</b> thuật toán tối ưu đúng thứ bạn yêu cầu. Nếu bạn tối ưu theo lead rẻ, bạn sẽ nhận lead rẻ, kể cả lead rác. Hãy đưa tín hiệu chất lượng (lead đủ điều kiện, đơn đã thanh toán) về nền tảng.</div>`,
          res: ['meta-learning-phase', 'google-enhanced-conv', 'meta-capi-docs']
        },
        {
          title: 'Cấu trúc tài khoản', min: 40,
          body: `<p>Thời kỳ điều khiển thủ công khuyến khích chia nhỏ tài khoản. Với giá thầu tự động, chia nhỏ làm mỗi phần thiếu dữ liệu để học. Nguyên tắc hiện nay là <strong>hợp nhất</strong>: ít chiến dịch hơn, mỗi chiến dịch nhiều dữ liệu hơn.</p>
<h4>Chỉ tách chiến dịch khi có lý do thật</h4>
<ul><li>Mục tiêu hoặc sự kiện tối ưu khác nhau.</li><li>Cần kiểm soát ngân sách riêng (thị trường, dòng sản phẩm, thương hiệu và không thương hiệu).</li><li>Biên lợi nhuận khác nhau nên mục tiêu ROAS khác nhau.</li><li>Ngôn ngữ hoặc trang đích khác nhau.</li></ul>
<p><strong>Quy ước đặt tên</strong> giúp phân tích về sau, ví dụ: <code>VN_Search_NonBrand_Booking_tCPA</code> cho chiến dịch và <code>UGC_Hook2_PainPoint_9x16_v3</code> cho quảng cáo. Thống nhất quy ước này với UTM ở module 1.4.</p>`,
          res: ['cu-boulder-perf']
        },
        {
          title: 'Nhịp vận hành và chẩn đoán', min: 40,
          body: `<table><tr><th>Nhịp</th><th>Việc cần làm</th></tr>
<tr><td>Hằng ngày</td><td>Kiểm tra chi tiêu so với kế hoạch, lỗi từ chối quảng cáo, biến động bất thường. Không chỉnh sửa theo dao động một ngày.</td></tr>
<tr><td>Hằng tuần</td><td>Đánh giá theo cửa sổ 7 ngày: CPA, ROAS, quảng cáo mới và quảng cáo mỏi, truy vấn tìm kiếm, điều chỉnh ngân sách.</td></tr>
<tr><td>Hằng tháng</td><td>Xem lại cấu trúc, mục tiêu giá thầu, kết quả thử nghiệm, so với dữ liệu kinh doanh thật.</td></tr></table>
<p>Mỗi chỉnh sửa lớn (ngân sách, giá thầu, đối tượng, sáng tạo) có thể đưa chiến dịch trở lại giai đoạn học. Gom thay đổi lại và chờ đủ dữ liệu trước khi kết luận.</p>
<p>Khi kết quả xấu đi, dùng chuỗi chẩn đoán ở Level 1: <code>CPA = CPM ÷ (1.000 × CTR × CVR)</code>. Xác định mắt xích nào thay đổi trước khi hành động: CPM (cạnh tranh, mùa vụ, đối tượng hẹp), CTR (sáng tạo mỏi, lệch thông điệp) hay CVR (trang đích, giá, tồn kho, lỗi theo dõi).</p>`,
          res: ['meta-blueprint', 'google-ads-certs']
        }
      ],
      takeaways: [
        'Quảng cáo chất lượng cao hơn thắng đấu giá với giá thấp hơn.',
        'Thuật toán tối ưu đúng thứ được yêu cầu, nên chất lượng tín hiệu là việc của bạn.',
        'Hợp nhất cấu trúc để mỗi chiến dịch đủ dữ liệu học.',
        'Đánh giá theo tuần, không phản ứng theo ngày.'
      ],
      assignment: {
        title: 'Bản thiết kế tài khoản quảng cáo',
        brief: `<ol><li>Vẽ cấu trúc tài khoản Google Ads và Meta Ads cho sản phẩm của bạn, tối đa 6 chiến dịch mỗi nền tảng. Ghi lý do tách cho từng chiến dịch.</li><li>Với mỗi chiến dịch: sự kiện tối ưu, chiến lược giá thầu, lượng chuyển đổi dự kiến mỗi tuần. Có đủ để ra khỏi giai đoạn học không?</li><li>Viết quy ước đặt tên cho chiến dịch, nhóm quảng cáo và quảng cáo.</li><li>Lập bảng kiểm vận hành ngày, tuần, tháng.</li></ol>`,
        deliverable: 'Sơ đồ cấu trúc, bảng chiến lược giá thầu, quy ước đặt tên và bảng kiểm vận hành.'
      },
      quiz: [
        { q: 'Trong ba thành phần Meta nêu cho "tổng giá trị" của một quảng cáo, đâu KHÔNG phải thành phần?', a: ['Giá thầu của nhà quảng cáo', 'Tỷ lệ hành động ước tính', 'Chất lượng quảng cáo', 'Tổng ngân sách tài khoản'], correct: 3, why: 'Meta nêu giá thầu, tỷ lệ hành động ước tính và chất lượng quảng cáo. Tổng ngân sách tài khoản không phải thành phần của giá trị mỗi lượt hiển thị.' },
        { q: 'Ad set chỉ có 8 lượt mua mỗi tuần và không ra khỏi giai đoạn học. Hướng xử lý hợp lý?', a: ['Tách thành nhiều ad set nhỏ hơn', 'Gộp ad set hoặc tạm tối ưu theo sự kiện nông hơn có nhiều dữ liệu', 'Giảm ngân sách xuống một nửa', 'Đổi sang trả tiền theo lượt hiển thị'], correct: 1, why: 'Cần tăng lượng tín hiệu cho mỗi đơn vị tối ưu, bằng cách hợp nhất hoặc chọn sự kiện có nhiều dữ liệu hơn.' },
        { q: 'Đặt Target ROAS cao hơn nhiều so với mức đang đạt thường dẫn tới điều gì?', a: ['Chiến dịch tiêu nhanh hơn', 'Chiến dịch bỏ qua phần lớn lượt đấu giá và không tiêu hết ngân sách', 'Chất lượng quảng cáo tăng', 'CPM giảm ngay'], correct: 1, why: 'Mục tiêu quá chặt khiến hệ thống chỉ tham gia rất ít lượt đấu giá.' },
        { q: 'Lý do nào KHÔNG đủ để tách thành chiến dịch riêng?', a: ['Biên lợi nhuận khác nhau', 'Ngôn ngữ khác nhau', 'Muốn mỗi từ khoá có một chiến dịch để dễ nhìn', 'Cần kiểm soát ngân sách theo thị trường'], correct: 2, why: 'Chia nhỏ để dễ nhìn làm phân mảnh dữ liệu mà không có lợi ích về tối ưu.' },
        { q: 'CPA tăng, CPM và CVR không đổi. Nguyên nhân nhiều khả năng nhất?', a: ['Trang đích chậm', 'CTR giảm do quảng cáo mỏi', 'Cạnh tranh đấu giá tăng', 'Lỗi thanh toán'], correct: 1, why: 'Theo chuỗi CPA, nếu CPM và CVR giữ nguyên thì CTR đã giảm.' }
      ],
      readings: ['varian-position-auctions', 'eos-gsp']
    },
    {
      id: 'm3-2', hours: 9,
      title: 'Google Ads: Search, Performance Max, Demand Gen',
      summary: 'Từ từ khoá và quảng cáo tìm kiếm đến các loại chiến dịch do AI điều khiển, theo dõi chuyển đổi và tối ưu.',
      objectives: [
        'Xây chiến dịch Search với từ khoá, kiểu khớp và từ khoá phủ định hợp lý.',
        'Viết quảng cáo tìm kiếm thích ứng và cải thiện Điểm chất lượng.',
        'Giải thích vai trò của Performance Max, AI Max for Search và Demand Gen.',
        'Thiết lập theo dõi chuyển đổi gồm enhanced conversions và nhập chuyển đổi ngoại tuyến.',
        'Tối ưu bằng báo cáo cụm từ tìm kiếm, tỷ lệ hiển thị và thử nghiệm.'
      ],
      lessons: [
        {
          title: 'Từ khoá, kiểu khớp và từ khoá phủ định', min: 55,
          body: `<table><tr><th>Kiểu khớp</th><th>Hiển thị khi</th><th>Đặc điểm</th></tr>
<tr><td>Exact</td><td>Truy vấn cùng nghĩa hoặc cùng ý định với từ khoá</td><td>Kiểm soát cao, quy mô thấp</td></tr>
<tr><td>Phrase</td><td>Truy vấn bao gồm ý nghĩa của từ khoá</td><td>Cân bằng</td></tr>
<tr><td>Broad</td><td>Truy vấn liên quan tới từ khoá, dùng thêm tín hiệu về người dùng và trang đích</td><td>Quy mô lớn, cần giá thầu tự động theo chuyển đổi</td></tr></table>
<p>Google khuyến nghị kết hợp broad match với Smart Bidding. Điều này chỉ hợp lý khi theo dõi chuyển đổi đã chính xác. Nếu chưa, broad match sẽ tiêu tiền cho truy vấn không liên quan.</p>
<p><strong>Từ khoá phủ định</strong> loại truy vấn không mong muốn ("miễn phí", "tuyển dụng", "là gì" với chiến dịch bán hàng). Xem <strong>báo cáo cụm từ tìm kiếm</strong> hằng tuần để thêm từ phủ định và phát hiện từ khoá mới.</p>
<p>Tách chiến dịch <strong>thương hiệu</strong> và <strong>không thương hiệu</strong>. Truy vấn thương hiệu có ROAS rất cao nhưng phần lớn người tìm đằng nào cũng đến. Nghiên cứu của Blake, Nosko và Tadelis tại eBay cho thấy quảng cáo từ khoá thương hiệu gần như không tạo thêm doanh số. Bạn sẽ học cách tự kiểm chứng ở Level 5.</p>`,
          res: ['google-ads-certs', 'blake-nosko-tadelis']
        },
        {
          title: 'Quảng cáo tìm kiếm thích ứng và Điểm chất lượng', min: 50,
          body: `<p><strong>Responsive Search Ad (RSA)</strong> nhận tối đa 15 tiêu đề và 4 mô tả. Hệ thống tự ghép và học tổ hợp nào hiệu quả với từng truy vấn.</p>
<h4>Nguyên tắc viết</h4>
<ul><li>Mỗi tiêu đề mang một ý riêng: từ khoá, lợi ích, bằng chứng, ưu đãi, lời kêu gọi. Tiêu đề trùng ý làm giảm số tổ hợp có nghĩa.</li><li>Đưa từ khoá chính vào ít nhất vài tiêu đề để tăng mức liên quan.</li><li>Chỉ ghim (pin) khi bắt buộc, vì ghim làm giảm khả năng học.</li><li>Thêm đủ thành phần mở rộng: liên kết trang, chú thích, đoạn nội dung có cấu trúc, hình ảnh, giá.</li></ul>
<p><strong>Điểm chất lượng</strong> (1 đến 10) là công cụ chẩn đoán ở cấp từ khoá, gồm ba thành phần: CTR kỳ vọng, mức liên quan của quảng cáo và trải nghiệm trang đích. Điểm này không trực tiếp tham gia đấu giá, nhưng các thành phần của nó phản ánh những yếu tố chất lượng trong Ad Rank. Thành phần nào "dưới trung bình" thì sửa thành phần đó.</p>`,
          res: ['google-ads-auction', 'google-ads-certs']
        },
        {
          title: 'Các loại chiến dịch do AI điều khiển', min: 60,
          body: `<table><tr><th>Loại</th><th>Phạm vi</th><th>Bạn cung cấp</th></tr>
<tr><td><strong>Performance Max</strong></td><td>Toàn bộ kho của Google Ads: YouTube, Display, Search, Discover, Gmail, Maps</td><td>Mục tiêu chuyển đổi, ngân sách, nhóm thành phần (văn bản, ảnh, video), tín hiệu đối tượng, nguồn cấp sản phẩm</td></tr>
<tr><td><strong>AI Max for Search</strong></td><td>Chiến dịch Search, mở rộng khớp truy vấn vượt ngoài danh sách từ khoá</td><td>Từ khoá, trang đích, nội dung; hệ thống tự mở rộng truy vấn, tuỳ biến văn bản và chọn URL đích</td></tr>
<tr><td><strong>Demand Gen</strong></td><td>YouTube (gồm Shorts), Discover, Gmail, Maps, mạng Display và đối tác video của Google (kiểm tra tài liệu hiện hành)</td><td>Sáng tạo hình ảnh và video, đối tượng; dùng để tạo nhu cầu</td></tr>
<tr><td><strong>Shopping</strong></td><td>Kết quả mua sắm</td><td>Nguồn cấp sản phẩm trong Merchant Center</td></tr></table>
<p>Với các loại chiến dịch này, bạn không còn điều khiển từng từ khoá hay vị trí. Đòn bẩy chuyển sang: <strong>chất lượng tín hiệu chuyển đổi</strong>, <strong>chất lượng và độ đa dạng của sáng tạo</strong>, <strong>nguồn cấp sản phẩm</strong>, <strong>mục tiêu giá trị</strong> và <strong>các rào chắn</strong> (loại trừ thương hiệu, từ khoá phủ định, loại trừ vị trí, quy tắc URL).</p>
<div class="callout"><b>Lưu ý:</b> Performance Max có thể lấy công của truy vấn thương hiệu và remarketing, khiến ROAS trông cao hơn giá trị tăng thêm thật. Hãy dùng loại trừ thương hiệu và theo dõi báo cáo theo kênh.</div>`,
          res: ['google-pmax-help', 'google-ai-max', 'google-ai-perf-cert']
        },
        {
          title: 'Theo dõi chuyển đổi và giá trị', min: 50,
          body: `<p>Thứ tự thiết lập chuẩn:</p>
<ol><li><strong>Google tag</strong> trên toàn website, lý tưởng là qua Google Tag Manager.</li><li><strong>Hành động chuyển đổi</strong> được định nghĩa rõ. Phân biệt chuyển đổi <em>chính</em> (dùng cho giá thầu) và <em>phụ</em> (chỉ để quan sát).</li><li><strong>Enhanced conversions:</strong> gửi dữ liệu bên thứ nhất đã băm (email, số điện thoại) để khớp chuyển đổi chính xác hơn khi cookie bị hạn chế.</li><li><strong>Consent mode:</strong> truyền trạng thái đồng ý của người dùng; trong một số điều kiện, phần chuyển đổi không quan sát được sẽ được mô hình hoá.</li><li><strong>Nhập chuyển đổi ngoại tuyến</strong> cho lead: đưa kết quả thật từ CRM (lead đủ điều kiện, hợp đồng) về Google Ads.</li><li><strong>Giá trị chuyển đổi</strong> động, và quy tắc giá trị nếu một số nhóm khách đáng giá hơn.</li></ol>
<p>Kiểm tra định kỳ: số chuyển đổi trong Google Ads có khớp tương đối với hệ thống đơn hàng không. Chênh lệch lớn thường do đếm trùng, thiếu tag ở một bước, hoặc cửa sổ phân bổ khác nhau.</p>`,
          res: ['google-enhanced-conv', 'google-consent-mode']
        },
        {
          title: 'Tối ưu chiến dịch Google Ads', min: 45,
          body: `<h4>Các chỉ số riêng của Search</h4>
<ul><li><strong>Search impression share:</strong> tỷ lệ lượt hiển thị bạn nhận được trên tổng số đủ điều kiện.</li><li><strong>Lost IS (budget):</strong> mất do ngân sách. Nếu chiến dịch có lãi, đây là tín hiệu cân nhắc tăng ngân sách, sau khi kiểm tra mục tiêu giá thầu (từ 17/8/2026 chiến dịch Target CPA hoặc Target ROAS bị giới hạn ngân sách tiến về đúng mục tiêu, xem bài giảng).</li><li><strong>Lost IS (rank):</strong> mất do Ad Rank thấp. Cải thiện chất lượng hoặc giá thầu.</li></ul>
<h4>Vòng tối ưu</h4>
<ol><li>Khai thác báo cáo cụm từ tìm kiếm: thêm phủ định, thêm từ khoá.</li><li>Xem báo cáo thành phần của RSA, thay thành phần hiệu suất thấp bằng ý mới.</li><li>Điều chỉnh mục tiêu CPA hoặc ROAS từng bước nhỏ (khoảng 10 đến 20% mỗi lần là kinh nghiệm thực hành của người làm nghề, không phải quy định của Google).</li><li>Kiểm tra trang đích của nhóm có CVR thấp.</li><li>Dùng tính năng <strong>Experiments</strong> để thử thay đổi lớn trên một phần lưu lượng trước khi áp dụng toàn bộ.</li></ol>
<p>Báo cáo <strong>Auction insights</strong> cho biết ai đang cạnh tranh cùng bạn và tần suất họ xếp trên. Dùng nó để giải thích biến động CPC, không để chạy đua giá thầu.</p>`,
          res: ['google-ads-certs', 'cu-boulder-perf']
        }
      ],
      takeaways: [
        'Broad match và các chiến dịch AI chỉ tốt khi tín hiệu chuyển đổi chính xác.',
        'Tách thương hiệu và không thương hiệu, và nghi ngờ ROAS của truy vấn thương hiệu.',
        'Với chiến dịch AI, đòn bẩy là tín hiệu, sáng tạo, nguồn cấp và rào chắn.',
        'Lost IS do ngân sách và do thứ hạng dẫn tới hai hành động khác nhau.'
      ],
      assignment: {
        title: 'Dựng chiến dịch Search hoàn chỉnh trên giấy',
        brief: `<ol><li>Từ bản đồ từ khoá ở Level 2, chọn 3 nhóm quảng cáo. Mỗi nhóm 5 đến 10 từ khoá kèm kiểu khớp và danh sách 15 từ khoá phủ định.</li><li>Viết 1 RSA đủ 15 tiêu đề và 4 mô tả cho mỗi nhóm, mỗi tiêu đề ghi rõ vai trò.</li><li>Liệt kê hành động chuyển đổi chính và phụ, cách đo và giá trị gán.</li><li>Học và thi chứng chỉ Google Ads Search trên Skillshop.</li></ol>`,
        deliverable: 'Bảng từ khoá, 3 RSA, kế hoạch theo dõi chuyển đổi và chứng chỉ Search.'
      },
      quiz: [
        { q: 'Kiểu khớp nào cần đi kèm giá thầu tự động theo chuyển đổi để hoạt động tốt?', a: ['Exact', 'Phrase', 'Broad', 'Negative'], correct: 2, why: 'Broad match mở rộng mạnh, cần Smart Bidding để lọc lượt đấu giá có giá trị.' },
        { q: 'Một RSA nhận tối đa bao nhiêu tiêu đề và mô tả?', a: ['3 tiêu đề, 2 mô tả', '10 tiêu đề, 4 mô tả', '15 tiêu đề, 4 mô tả', '20 tiêu đề, 5 mô tả'], correct: 2, why: 'RSA nhận tối đa 15 tiêu đề và 4 mô tả.' },
        { q: 'Chiến dịch Search có lãi và "Lost IS (budget)" là 40%. Nên làm gì?', a: ['Giảm giá thầu', 'Tăng ngân sách', 'Viết lại quảng cáo', 'Thêm từ khoá phủ định'], correct: 1, why: 'Đang mất 40% lượt hiển thị vì thiếu ngân sách trong khi chiến dịch có lãi.' },
        { q: 'Điểm khác biệt chính của Performance Max so với Search truyền thống?', a: ['Chỉ chạy trên YouTube', 'Chạy trên toàn bộ kho của Google và tự phân bổ theo mục tiêu chuyển đổi', 'Không cần theo dõi chuyển đổi', 'Chỉ dành cho ứng dụng'], correct: 1, why: 'PMax phủ mọi kênh của Google và tối ưu theo mục tiêu chuyển đổi bạn đặt.' },
        { q: 'Vì sao nên nhập chuyển đổi ngoại tuyến với chiến dịch lead?', a: ['Để tăng số chuyển đổi hiển thị', 'Để thuật toán tối ưu theo lead chất lượng thay vì lead rẻ', 'Để giảm CPC ngay', 'Vì Google bắt buộc'], correct: 1, why: 'Đưa kết quả thật từ CRM về giúp giá thầu tự động hướng tới lead có giá trị.' }
      ],
      readings: ['google-app-campaigns-help', 'ms-learning-lab']
    },
    {
      id: 'm3-3', hours: 8,
      title: 'Meta Ads: Facebook và Instagram',
      summary: 'Cấu trúc chiến dịch, đối tượng trong kỷ nguyên Advantage+, Pixel và Conversions API, cách đọc số và mở rộng.',
      objectives: [
        'Chọn mục tiêu chiến dịch và sự kiện tối ưu phù hợp.',
        'Giải thích vì sao nhắm rộng kết hợp sáng tạo đa dạng thay thế nhắm chi tiết.',
        'Thiết lập Pixel, Conversions API và khử trùng lặp sự kiện.',
        'Đọc các chỉ số phân phối và sáng tạo để chẩn đoán.',
        'Mở rộng ngân sách mà không phá vỡ hiệu suất.'
      ],
      lessons: [
        {
          title: 'Cấu trúc và mục tiêu chiến dịch', min: 45,
          body: `<p>Ba tầng của Meta Ads:</p>
<ul><li><strong>Campaign:</strong> chọn mục tiêu (Awareness, Traffic, Engagement, Leads, App promotion, Sales) và có thể đặt ngân sách ở cấp chiến dịch để hệ thống tự phân bổ.</li><li><strong>Ad set:</strong> đối tượng, vị trí hiển thị, lịch, sự kiện tối ưu, cài đặt phân bổ.</li><li><strong>Ad:</strong> sáng tạo, văn bản, đích đến.</li></ul>
<p>Mục tiêu quyết định hệ thống tìm loại người nào. Chọn Traffic sẽ nhận người hay nhấp, không phải người hay mua. Nếu bạn muốn đơn hàng, hãy chọn Sales và tối ưu theo sự kiện mua.</p>
<p>Về vị trí hiển thị, <strong>Advantage+ placements</strong> cho hệ thống nhiều kho hơn để tìm lượt hiển thị rẻ; mức tiết kiệm cụ thể chưa kiểm chứng được, kiểm tra tài liệu hiện hành của Meta. Điều kiện là creative có đủ tỷ lệ khung hình (dọc 9:16, vuông 1:1 hoặc 4:5).</p>`,
          res: ['meta-blueprint', 'meta-smm-cert']
        },
        {
          title: 'Đối tượng: từ nhắm chi tiết đến nhắm rộng', min: 50,
          body: `<p>Sau các thay đổi về quyền riêng tư (đặc biệt là App Tracking Transparency năm 2021), dữ liệu sở thích của bên thứ ba kém chính xác hơn, còn mô hình dự đoán của Meta mạnh lên. Thực hành hiện nay nghiêng về:</p>
<ul><li><strong>Nhắm rộng</strong> (chỉ giới hạn địa lý, tuổi tối thiểu, ngôn ngữ) và để hệ thống tìm người theo tín hiệu chuyển đổi.</li><li><strong>Advantage+ audience:</strong> bạn đưa gợi ý, hệ thống được phép vượt ra ngoài gợi ý đó.</li><li><strong>Đối tượng tuỳ chỉnh</strong> từ dữ liệu bên thứ nhất (khách hàng, người truy cập) dùng để loại trừ, để chăm sóc lại, và làm hạt giống cho đối tượng tương tự.</li></ul>
<p>Trong bối cảnh này, <strong>sáng tạo đảm nhận vai trò nhắm mục tiêu</strong>. Một video nói về vấn đề của người mới làm cha mẹ sẽ được phân phối tới người mới làm cha mẹ vì họ là người dừng lại xem. Muốn tiếp cận phân khúc khác, hãy làm sáng tạo khác.</p>
<p>Với danh mục quảng cáo đặc biệt của Meta (nhà ở, việc làm, sản phẩm và dịch vụ tài chính, vấn đề xã hội, bầu cử, chính trị), tuỳ chọn nhắm mục tiêu bị giới hạn theo chính sách.</p>`,
          res: ['meta-blueprint', 'meta-certifications']
        },
        {
          title: 'Pixel, Conversions API và phân bổ', min: 55,
          body: `<p><strong>Meta Pixel</strong> gửi sự kiện từ trình duyệt. <strong>Conversions API (CAPI)</strong> gửi sự kiện từ máy chủ. Dùng cả hai và <strong>khử trùng lặp</strong> bằng cùng <code>event_name</code> và <code>event_id</code> để một hành động không bị đếm hai lần.</p>
<p><strong>Event Match Quality</strong> cho biết sự kiện máy chủ có đủ thông tin (email, số điện thoại đã băm, địa chỉ IP, mã nhấp) để khớp với tài khoản người dùng hay không. Điểm cao hơn giúp phân bổ và tối ưu tốt hơn.</p>
<p><strong>Cài đặt phân bổ</strong> mặc định cho ad set mới là 7 ngày sau nhấp và 1 ngày sau xem. Meta đã điều chỉnh các cửa sổ phân bổ: từ 12/1/2026, Ads Insights API không còn trả về cửa sổ 7 ngày và 28 ngày sau xem. Hãy kiểm tra cài đặt hiện hành trong tài khoản. Chuyển đổi sau xem (view-through) dễ ghi công cho quảng cáo ở những người đằng nào cũng mua. Khi so sánh với GA4 hoặc nền tảng khác, hãy nhớ mỗi bên dùng cửa sổ và quy tắc khác nhau, nên con số sẽ không khớp.</p>
<div class="callout"><b>Cập nhật:</b> các quy định về giới hạn và ưu tiên sự kiện của Aggregated Event Measurement đã thay đổi nhiều lần kể từ 2021; trang trợ giúp hiện hành nói bạn không còn phải xếp ưu tiên 8 sự kiện cho mỗi tên miền. Luôn đối chiếu tài liệu hiện hành của Meta thay vì hướng dẫn cũ.</div>`,
          res: ['meta-capi-docs', 'meta-learning-phase']
        },
        {
          title: 'Advantage+ và quảng cáo danh mục', min: 45,
          body: `<p><strong>Advantage+</strong> là bộ tự động hoá của Meta. Với mục tiêu bán hàng, chiến dịch Advantage+ sales (trước đây gọi là Advantage+ shopping) gộp tìm khách mới và chăm sóc lại vào một chiến dịch, tự động hoá đối tượng, vị trí và phân bổ ngân sách giữa các sáng tạo. Bạn điều khiển bằng: ngân sách, mục tiêu chi phí hoặc ROAS, danh sách khách hiện có để loại trừ (tuỳ chọn giới hạn ngân sách cho khách hiện có không còn khả dụng, theo trang trợ giúp hiện hành của Meta), và trên hết là bộ sáng tạo.</p>
<p><strong>Quảng cáo danh mục (catalog ads)</strong> lấy sản phẩm từ nguồn cấp và tự chọn sản phẩm hiển thị cho từng người. Chất lượng nguồn cấp (tiêu đề, ảnh, giá, tồn kho, thuộc tính) ảnh hưởng trực tiếp tới hiệu quả, tương tự Shopping của Google.</p>
<p>Meta cũng cung cấp các công cụ AI tạo sinh trong trình tạo quảng cáo: tạo biến thể văn bản, mở rộng ảnh, tạo nền, chuyển ảnh thành video. Hãy xem trước từng biến thể được bật, vì các tuỳ chọn tự động có thể thay đổi cách thương hiệu xuất hiện.</p>`,
          res: ['meta-ai-creative-tools', 'meta-blueprint']
        },
        {
          title: 'Đọc số và mở rộng', min: 50,
          body: `<table><tr><th>Chỉ số</th><th>Cách tính</th><th>Cho biết</th></tr>
<tr><td>Hook rate</td><td>Lượt xem 3 giây ÷ Lượt hiển thị (tỷ số người làm quảng cáo tự tính, không phải cột có sẵn của Meta)</td><td>Mở đầu có giữ được người xem không</td></tr>
<tr><td>Hold rate</td><td>Lượt xem hết hoặc ThruPlay ÷ Lượt xem 3 giây</td><td>Nội dung có giữ chân không</td></tr>
<tr><td>CTR (link)</td><td>Lượt nhấp liên kết ÷ Lượt hiển thị</td><td>Thông điệp có tạo ý định không</td></tr>
<tr><td>Frequency</td><td>Lượt hiển thị ÷ Số người tiếp cận</td><td>Mức lặp lại. Tăng dần kèm CTR giảm là dấu hiệu mỏi</td></tr></table>
<p><strong>Hiệu ứng phân tích (breakdown effect):</strong> khi xem theo vị trí hoặc độ tuổi, một phân đoạn có CPA trung bình cao hơn không có nghĩa nên tắt nó. Hệ thống tối ưu theo chi phí của kết quả <em>tiếp theo</em>, và phân đoạn đó có thể đang cung cấp những kết quả rẻ nhất ở biên.</p>
<p><strong>Mở rộng:</strong> tăng ngân sách từng bước vừa phải (nhiều người làm nghề dùng mốc khoảng 20% mỗi lần) để tránh đưa chiến dịch về giai đoạn học. Con số này là kinh nghiệm thực hành, không phải quy định của Meta. Mở rộng bền vững đến từ sáng tạo mới và đề xuất mới nhiều hơn là từ việc tăng ngân sách trên sáng tạo cũ.</p>`,
          res: ['meta-certifications', 'ctc-coachs-corner']
        }
      ],
      takeaways: [
        'Mục tiêu chiến dịch quyết định loại người hệ thống tìm.',
        'Nhắm rộng cộng với sáng tạo đa dạng là cách nhắm mục tiêu hiện nay.',
        'Pixel và CAPI phải chạy cùng nhau và được khử trùng lặp.',
        'Đừng tắt phân đoạn chỉ vì CPA trung bình cao; hệ thống tối ưu theo chi phí biên.'
      ],
      assignment: {
        title: 'Kế hoạch chiến dịch Meta và kiểm tra tín hiệu',
        brief: `<ol><li>Thiết kế 1 chiến dịch tìm khách mới và 1 chiến dịch chăm sóc lại: mục tiêu, sự kiện tối ưu, đối tượng, loại trừ, ngân sách.</li><li>Lập danh sách sự kiện cần gửi (ViewContent, AddToCart, InitiateCheckout, Purchase hoặc Lead) kèm tham số, và mô tả cách khử trùng lặp giữa Pixel và CAPI.</li><li>Vào Thư viện quảng cáo của Meta, thu thập 15 quảng cáo đang chạy của 3 đối thủ. Phân loại theo góc tiếp cận và định dạng.</li><li>Hoàn thành ít nhất 3 khoá miễn phí trên Meta Blueprint về thiết lập chiến dịch và Conversions API.</li></ol>`,
        deliverable: 'Bản kế hoạch chiến dịch, bảng sự kiện và bảng phân tích quảng cáo đối thủ.'
      },
      quiz: [
        { q: 'Bạn muốn đơn hàng nhưng chọn mục tiêu Traffic. Điều gì sẽ xảy ra?', a: ['Nhận nhiều đơn hơn vì CPC rẻ', 'Hệ thống tìm người hay nhấp, không phải người hay mua', 'Không khác gì mục tiêu Sales', 'Quảng cáo không được duyệt'], correct: 1, why: 'Hệ thống tối ưu đúng theo mục tiêu được chọn.' },
        { q: 'Pixel và CAPI cùng gửi một sự kiện mua. Cần gì để không bị đếm hai lần?', a: ['Tắt Pixel', 'Cùng event_name và event_id để khử trùng lặp', 'Gửi cách nhau 24 giờ', 'Dùng hai tài khoản quảng cáo'], correct: 1, why: 'Meta khử trùng lặp dựa trên tên sự kiện và mã sự kiện trùng nhau.' },
        { q: 'Hook rate đo điều gì?', a: ['Tỷ lệ người xem hết video', 'Tỷ lệ lượt xem 3 giây trên lượt hiển thị', 'Tỷ lệ nhấp trên lượt xem', 'Tỷ lệ mua trên lượt nhấp'], correct: 1, why: 'Hook rate cho biết phần mở đầu có giữ người xem lại không.' },
        { q: 'Vì sao nhắm rộng ngày càng được ưa dùng trên Meta?', a: ['Vì rẻ hơn theo quy định', 'Vì dữ liệu sở thích kém chính xác hơn sau thay đổi quyền riêng tư, còn mô hình dự đoán mạnh lên', 'Vì Meta đã xoá hết tuỳ chọn nhắm mục tiêu', 'Vì nhắm rộng không cần Pixel'], correct: 1, why: 'Tín hiệu chuyển đổi và sáng tạo giờ dẫn đường tốt hơn danh sách sở thích thủ công.' },
        { q: 'Phân đoạn vị trí A có CPA trung bình cao hơn B. Kết luận đúng theo hiệu ứng phân tích?', a: ['Tắt ngay A', 'A luôn kém hơn B', 'Không thể kết luận nên tắt A, vì hệ thống tối ưu theo chi phí kết quả tiếp theo', 'Chuyển toàn bộ ngân sách sang B'], correct: 2, why: 'CPA trung bình theo phân đoạn không phản ánh chi phí biên mà hệ thống đang tối ưu.' }
      ],
      readings: ['meta-ads-library', 'gordon-close-enough']
    },
    {
      id: 'm3-4', hours: 7,
      title: 'TikTok, retail media và programmatic',
      summary: 'Mở rộng ra ngoài Google và Meta: TikTok, Microsoft, LinkedIn, Amazon và quảng cáo lập trình.',
      objectives: [
        'Mô tả đặc thù của quảng cáo TikTok và các loại chiến dịch chính.',
        'Đánh giá khi nào Microsoft Advertising và LinkedIn Ads phù hợp.',
        'Giải thích retail media và các chỉ số ACOS, TACOS.',
        'Trình bày chuỗi cung ứng programmatic: DSP, SSP, sàn giao dịch.',
        'Xây khung quyết định thử kênh mới.'
      ],
      lessons: [
        {
          title: 'TikTok Ads', min: 50,
          body: `<p>TikTok là nền tảng giải trí theo sở thích. Quảng cáo hiệu quả ở đây trông giống nội dung tự nhiên: quay dọc, có người thật, nhịp nhanh, dùng âm thanh.</p>
<ul><li><strong>Spark Ads:</strong> quảng cáo bằng chính bài đăng tự nhiên của thương hiệu hoặc nhà sáng tạo (cần mã uỷ quyền). Tương tác được cộng dồn vào bài gốc.</li><li><strong>Smart+:</strong> chiến dịch tự động hoá đối tượng, sáng tạo và ngân sách, tương đương Advantage+ của Meta.</li><li><strong>TikTok Shop:</strong> mua hàng ngay trong ứng dụng; theo TikTok, từ tháng 7 năm 2025 GMV Max (tối ưu theo tổng doanh thu gian hàng) là loại chiến dịch mặc định và duy nhất cho quảng cáo TikTok Shop.</li><li><strong>Theo dõi:</strong> TikTok Pixel kết hợp Events API, cùng nguyên tắc với Meta.</li></ul>
<p>Sáng tạo trên TikTok mỏi nhanh hơn các nền tảng khác, nên cần nhịp sản xuất cao hơn. <strong>TikTok Creative Center</strong> cho xem quảng cáo hiệu quả theo ngành và quốc gia, xu hướng âm thanh và hashtag. Đây là nguồn nghiên cứu miễn phí rất có giá trị.</p>`,
          res: ['tiktok-academy', 'tiktok-creative-center']
        },
        {
          title: 'Microsoft Advertising và LinkedIn Ads', min: 40,
          body: `<p><strong>Microsoft Advertising</strong> bán quảng cáo tìm kiếm trên Bing và mạng đối tác của Microsoft. Lượng tìm thấp hơn Google nhiều trên hầu hết thị trường; các nhận định phổ biến như CPC thấp hơn hay người dùng lớn tuổi hơn chưa kiểm chứng được, hãy xem dữ liệu của chính bạn. Công cụ nhập của Microsoft cho phép nhập chiến dịch từ Google Ads (tới 10 tài khoản mỗi lần, có lịch đồng bộ), nên chi phí thử thấp.</p>
<p><strong>LinkedIn Ads</strong> có khả năng nhắm theo chức danh, cấp bậc, ngành, quy mô và tên công ty mà không nền tảng nào khác có. Đổi lại CPC cao. Phù hợp khi giá trị hợp đồng lớn và chu kỳ bán dài. Các định dạng hay dùng: Sponsored Content, Lead Gen Forms, Conversation Ads và quảng cáo từ bài của cá nhân lãnh đạo (Thought Leader Ads).</p>
<p>Với B2B, đo theo pipeline và doanh thu trong CRM. Chi phí mỗi lead trên LinkedIn gần như luôn cao, nhưng chất lượng lead mới là thứ quyết định.</p>`,
          res: ['ms-learning-lab', 'linkedin-marketing-labs']
        },
        {
          title: 'Retail media và sàn thương mại điện tử', min: 45,
          body: `<p><strong>Retail media</strong> là quảng cáo trên nền tảng của nhà bán lẻ, ngay tại điểm mua. Điểm mạnh: người dùng đang có ý định mua, và nền tảng có dữ liệu mua hàng thật để đo khép kín.</p>
<p>Amazon Ads là mô hình tham chiếu:</p>
<ul><li><strong>Sponsored Products:</strong> quảng cáo sản phẩm trong kết quả tìm kiếm và trang chi tiết.</li><li><strong>Sponsored Brands:</strong> tiêu đề thương hiệu kèm nhiều sản phẩm.</li><li><strong>Display ads (trước đây là Sponsored Display) và Amazon DSP:</strong> tiếp cận trong và ngoài Amazon.</li><li><strong>Amazon Marketing Cloud:</strong> clean room (phòng dữ liệu sạch) xây trên AWS Clean Rooms để phân tích hành trình.</li></ul>
<div class="formula"><code>ACOS = Chi phí quảng cáo ÷ Doanh thu từ quảng cáo</code> (nghịch đảo của ROAS)<br><code>TACOS = Chi phí quảng cáo ÷ Tổng doanh thu</code> (gồm cả doanh thu tự nhiên)</div>
<p>ACOS là chỉ số Amazon dùng; TACOS là chỉ số giới bán hàng tự tính. TACOS giảm dần trong khi doanh thu tăng có thể cho thấy quảng cáo đang kéo thứ hạng tự nhiên lên, nhưng mùa vụ hay khuyến mãi cũng gây ra được, nên cần thêm bằng chứng. Các sàn ở Đông Nam Á như Shopee, Lazada, TikTok Shop có sản phẩm quảng cáo theo cùng logic.</p>`,
          res: ['amazon-ads-academy']
        },
        {
          title: 'Quảng cáo lập trình (programmatic)', min: 50,
          body: `<p>Programmatic là mua bán quảng cáo tự động trên web mở, ứng dụng, TV kết nối và âm thanh số.</p>
<ul><li><strong>DSP</strong> (demand-side platform): công cụ của bên mua, ví dụ The Trade Desk, DV360, Amazon DSP.</li><li><strong>SSP</strong> (supply-side platform): công cụ của nhà xuất bản để bán kho quảng cáo.</li><li><strong>Ad exchange:</strong> nơi cung và cầu gặp nhau qua đấu giá thời gian thực (RTB).</li><li><strong>Hình thức giao dịch:</strong> đấu giá mở, chợ riêng (PMP), mua bảo đảm (programmatic guaranteed).</li></ul>
<h4>Rủi ro cần quản lý</h4>
<ul><li><strong>Gian lận quảng cáo:</strong> lượt hiển thị và nhấp giả.</li><li><strong>Khả năng được nhìn thấy (viewability):</strong> quảng cáo có thật sự vào tầm mắt không.</li><li><strong>An toàn thương hiệu:</strong> quảng cáo xuất hiện cạnh nội dung nào.</li></ul>
<p>Về định danh: Google đã quyết định giữ cookie bên thứ ba trong Chrome và cho ngừng phần lớn công nghệ Privacy Sandbox vào tháng 10 năm 2025. Dù vậy Safari chặn cookie bên thứ ba theo mặc định (từ 2020) và Firefox bản máy tính tách cookie theo từng website (từ 2022), nên theo dõi dựa vào cookie bên thứ ba vẫn kém tin cậy; dữ liệu bên thứ nhất và nhắm theo ngữ cảnh vẫn là hướng đi bền vững.</p>`,
          res: ['ttd-edge-academy', 'cu-boulder-programmatic', 'privacy-sandbox-update']
        },
        {
          title: 'Khung quyết định thử kênh mới', min: 35,
          body: `<p>Brian Balfour gọi sự tương thích giữa sản phẩm và kênh là <strong>product-channel fit</strong>: sản phẩm được định hình để hợp với kênh, không phải ngược lại. Sản phẩm giá thấp, mua bốc đồng hợp với TikTok và Meta. Sản phẩm giá trị cao, cần cân nhắc hợp với Search và LinkedIn.</p>
<h4>Trước khi thử một kênh</h4>
<ol><li><strong>Khách hàng có ở đó không</strong>, và họ ở trạng thái nào (tìm kiếm, giải trí, mua sắm)?</li><li><strong>Bạn có sáng tạo phù hợp định dạng</strong> của kênh không?</li><li><strong>Đo được không?</strong> Theo dõi chuyển đổi đã sẵn sàng chưa?</li><li><strong>Ngân sách thử đủ không?</strong> Ước lượng tối thiểu: CPA mục tiêu × khoảng 50 chuyển đổi mỗi tuần (mốc Meta dùng cho giai đoạn học) × số tuần thử.</li><li><strong>Tiêu chí dừng hoặc mở rộng</strong> được viết ra trước khi chạy.</li></ol>
<p>Thử từng kênh một, mỗi lần 3 đến 4 tuần. Đừng dàn mỏng ngân sách nhỏ trên năm kênh: không kênh nào đủ dữ liệu để học, và bạn không rút ra kết luận nào.</p>`,
          res: ['balfour-four-fits', 'reddit-ads-formula', 'pinterest-academy']
        }
      ],
      takeaways: [
        'TikTok cần sáng tạo giống nội dung tự nhiên và nhịp làm mới cao.',
        'LinkedIn đắt theo lead, phải đo theo pipeline.',
        'TACOS cho thấy tác động của quảng cáo lên tổng doanh thu trên sàn.',
        'Thử từng kênh một với ngân sách đủ lớn và tiêu chí dừng viết sẵn.'
      ],
      assignment: {
        title: 'Đề xuất thử nghiệm một kênh mới',
        brief: `<ol><li>Chọn một kênh doanh nghiệp bạn chưa chạy. Trả lời năm câu hỏi trong khung quyết định.</li><li>Dùng TikTok Creative Center hoặc thư viện quảng cáo tương ứng, thu thập 10 quảng cáo tham chiếu trong ngành.</li><li>Viết đề xuất một trang: giả thuyết, ngân sách, thời gian, cấu trúc chiến dịch, chỉ số thành công, tiêu chí dừng.</li><li>Học phần Programmatic 101 trên Edge Academy và ghi lại sơ đồ chuỗi cung ứng bằng lời của bạn.</li></ol>`,
        deliverable: 'Đề xuất thử kênh một trang kèm bộ quảng cáo tham chiếu và sơ đồ programmatic.'
      },
      quiz: [
        { q: 'Spark Ads trên TikTok là gì?', a: ['Quảng cáo banner tĩnh', 'Quảng cáo chạy từ bài đăng tự nhiên của thương hiệu hoặc nhà sáng tạo', 'Quảng cáo chỉ hiển thị trong TikTok Shop', 'Quảng cáo âm thanh'], correct: 1, why: 'Spark Ads khuếch đại bài đăng tự nhiên có sẵn, tương tác cộng vào bài gốc.' },
        { q: 'TACOS khác ACOS ở điểm nào?', a: ['TACOS chỉ tính chi phí Sponsored Brands', 'TACOS chia chi phí quảng cáo cho tổng doanh thu, gồm cả doanh thu tự nhiên', 'TACOS là nghịch đảo của ROAS', 'TACOS không gồm thuế'], correct: 1, why: 'TACOS đặt chi phí quảng cáo trên toàn bộ doanh thu, cho thấy ảnh hưởng tổng thể.' },
        { q: 'Trong programmatic, nền tảng nào phục vụ bên mua quảng cáo?', a: ['SSP', 'DSP', 'CDN', 'CMS'], correct: 1, why: 'DSP là nền tảng phía cầu, dùng để mua quảng cáo.' },
        { q: 'Tình trạng cookie bên thứ ba trên Chrome tính đến cuối 2025 là gì?', a: ['Đã bị xoá hoàn toàn', 'Google giữ lại cookie và cho ngừng phần lớn Privacy Sandbox', 'Chỉ còn trên di động', 'Bị thay bằng Topics API bắt buộc'], correct: 1, why: 'Google công bố giữ cookie bên thứ ba và ngừng phần lớn công nghệ Privacy Sandbox vào tháng 10 năm 2025.' },
        { q: 'Vì sao không nên chia ngân sách nhỏ cho năm kênh cùng lúc?', a: ['Vì vi phạm chính sách nền tảng', 'Vì không kênh nào đủ dữ liệu để thuật toán học và để bạn kết luận', 'Vì CPM sẽ tăng', 'Vì khách hàng bị trùng lặp'], correct: 1, why: 'Mỗi kênh cần đủ chuyển đổi để ra khỏi giai đoạn học và để kết quả có ý nghĩa.' }
      ],
      readings: ['demand-curve-playbooks', 'traction-book']
    },
    {
      id: 'm3-5', hours: 7,
      title: 'Chiến lược sáng tạo và thử nghiệm quảng cáo',
      summary: 'Khi nhắm mục tiêu được tự động hoá, sáng tạo là đòn bẩy lớn nhất còn lại trong tay marketer.',
      objectives: [
        'Trình bày bằng chứng về đóng góp của sáng tạo vào hiệu quả quảng cáo.',
        'Xây ma trận góc tiếp cận từ insight khách hàng.',
        'Viết kịch bản video quảng cáo theo cấu trúc móc, thân, bằng chứng, kêu gọi.',
        'Thiết kế quy trình thử nghiệm sáng tạo có kiểm soát.',
        'Nhận diện quảng cáo mỏi và duy trì nhịp sản xuất.'
      ],
      lessons: [
        {
          title: 'Vì sao sáng tạo quan trọng nhất', min: 35,
          body: `<p>Phân tích năm 2017 của Nielsen Catalina Solutions trên gần 500 chiến dịch hàng tiêu dùng ước tính <strong>sáng tạo đóng góp khoảng 47%</strong> phần doanh số tăng thêm do quảng cáo, nhiều hơn độ phủ (22%), thương hiệu (15%), nhắm mục tiêu (9%), mức gần đây (5%) và bối cảnh (2%). Đây là một nghiên cứu về hàng tiêu dùng năm 2017, không phải quy luật cho mọi ngành; bài giảng nêu cả giới hạn của nó.</p>
<p>System1 (Anh) định nghĩa quảng cáo "nhàm chán" là quảng cáo chỉ gây phản ứng cảm xúc trung tính, và ghi nhận loại này cần ngân sách media cao hơn nhiều để đạt cùng kết quả so với quảng cáo gây được cảm xúc.</p>
<p>Trên nền tảng tự động, điều này càng đúng. Bạn không còn chọn đối tượng hay vị trí chi tiết, nên sáng tạo là thứ:</p>
<ul><li>Quyết định ai dừng lại xem, tức là quyết định quảng cáo được phân phối cho ai.</li><li>Ảnh hưởng tới điểm chất lượng và tỷ lệ hành động ước tính, tức là ảnh hưởng tới giá.</li><li>Mang thông điệp, thứ duy nhất khách hàng thật sự nhìn thấy.</li></ul>`,
          res: ['nielsen-creative', 'system1-reports']
        },
        {
          title: 'Ma trận góc tiếp cận', min: 50,
          body: `<p>Một <strong>góc tiếp cận (angle)</strong> là lý do cụ thể khiến một nhóm người quan tâm. Cùng một sản phẩm có thể có hàng chục góc. Xây ma trận từ ba trục:</p>
<ul><li><strong>Ai:</strong> persona hoặc "job" từ module 1.3.</li><li><strong>Động cơ:</strong> nỗi đau cần tránh, kết quả mong muốn, bản sắc muốn thể hiện, phản đối cần gỡ.</li><li><strong>Mức nhận biết</strong> (theo Eugene Schwartz): chưa biết vấn đề → biết vấn đề → biết giải pháp → biết sản phẩm → sẵn sàng mua.</li></ul>
<p>Người chưa biết vấn đề cần câu chuyện và sự đồng cảm. Người đã biết sản phẩm cần bằng chứng và ưu đãi. Dùng nhầm thông điệp cho mức nhận biết là lỗi rất phổ biến.</p>
<p>Sau đó nhân với <strong>định dạng</strong>: video người dùng tự quay, trước và sau, so sánh, hướng dẫn, lời chứng thực, người sáng lập kể chuyện, ảnh tĩnh nêu một lợi ích, băng chuyền.</p>
<p>Nguồn ý tưởng tốt nhất vẫn là ngôn ngữ thật của khách hàng trong đánh giá và phỏng vấn.</p>`,
          res: ['demand-curve-playbooks', 'meta-ads-library']
        },
        {
          title: 'Cấu trúc một quảng cáo video hiệu quả', min: 45,
          body: `<ol><li><strong>Hook (0 đến 3 giây):</strong> hình ảnh và câu nói khiến đúng đối tượng dừng lại. Gọi tên vấn đề, đưa kết quả, hoặc phá vỡ kỳ vọng.</li><li><strong>Vấn đề hoặc lợi ích:</strong> làm rõ vì sao điều này quan trọng với người xem.</li><li><strong>Giải pháp và minh hoạ:</strong> cho thấy sản phẩm đang được dùng.</li><li><strong>Bằng chứng:</strong> đánh giá, con số, trước và sau, chứng nhận.</li><li><strong>Ưu đãi và kêu gọi:</strong> làm gì tiếp theo và vì sao nên làm ngay.</li></ol>
<h4>Nguyên tắc sản xuất được nền tảng khuyến nghị</h4>
<ul><li>Thiết kế cho màn hình dọc 9:16 và có phụ đề hoặc chữ trên màn hình (TikTok khuyến nghị rõ; Meta khuyến nghị 9:16 cho Reels).</li><li>Đưa thương hiệu và sản phẩm vào sớm.</li><li>Ngắn gọn; nếu dài, mỗi vài giây phải có thay đổi hình ảnh.</li><li>Trông tự nhiên theo chuẩn của nền tảng.</li></ul>
<p>Một kịch bản thân bài có thể ghép với nhiều hook khác nhau. Đây là cách tạo nhiều biến thể với chi phí thấp.</p>`,
          res: ['tiktok-creative-center', 'meta-blueprint']
        },
        {
          title: 'Quy trình thử nghiệm sáng tạo', min: 50,
          body: `<p>Hai cấp độ thử:</p>
<ul><li><strong>Thử khái niệm:</strong> so các góc tiếp cận hoặc định dạng khác hẳn nhau. Đây là nơi có bước nhảy lớn.</li><li><strong>Thử lặp:</strong> trên khái niệm đã thắng, thử hook, tiêu đề, ảnh bìa, lời kêu gọi.</li></ul>
<h4>Thiết kế thử nghiệm</h4>
<ul><li>Một chiến dịch thử riêng, cùng đối tượng, cùng sự kiện tối ưu, để khác biệt đến từ sáng tạo.</li><li>Mỗi sáng tạo cần đủ chi tiêu để có kết luận. Mốc thực hành: ít nhất 1 đến 2 lần CPA mục tiêu trước khi loại, và cần nhiều chuyển đổi hơn nhiều trước khi tuyên bố thắng.</li><li>Chỉ số: hook rate và hold rate để hiểu <em>vì sao</em>, CPA hoặc ROAS để quyết định.</li><li>Sáng tạo thắng được chuyển sang chiến dịch chính.</li></ul>
<p>Hệ thống phân phối thường dồn chi tiêu rất sớm cho một sáng tạo. Điều đó có nghĩa hệ thống dự đoán nó tốt, chưa có nghĩa các sáng tạo khác kém. Nếu cần so sánh công bằng, dùng công cụ thử A/B của nền tảng.</p>
<p>Ghi <strong>nhật ký học hỏi</strong>: giả thuyết, kết quả, bài học. Sau sáu tháng, đây là tài sản quý nhất của đội.</p>`,
          res: ['meta-certifications', 'ctc-coachs-corner']
        },
        {
          title: 'Quảng cáo mỏi và nhịp sản xuất', min: 35,
          body: `<p><strong>Dấu hiệu mỏi:</strong> frequency tăng, CTR và hook rate giảm dần, CPM và CPA tăng trong khi không có thay đổi nào khác. Đối tượng càng nhỏ và ngân sách càng lớn thì mỏi càng nhanh.</p>
<h4>Cách ứng phó</h4>
<ul><li>Có sẵn sáng tạo mới trước khi sáng tạo cũ mỏi, không đợi hiệu suất rơi.</li><li>Làm mới theo tầng: đổi hook trước (rẻ nhất), rồi đổi định dạng, rồi đổi góc tiếp cận.</li><li>Sáng tạo từng thắng có thể quay lại sau vài tháng.</li></ul>
<p><strong>Nhịp sản xuất</strong> nên tỷ lệ với chi tiêu. Tài khoản càng lớn càng cần nhiều sáng tạo mới mỗi tuần. Tổ chức theo chu trình: nghiên cứu → ý tưởng → sản xuất → thử → học → lặp lại.</p>
<p>Công cụ AI tạo sinh giúp tăng số biến thể rất nhanh. Chúng không thay thế được insight và góc tiếp cận, và cần kiểm duyệt trước khi chạy. Chủ đề này được học ở Level 6.</p>`,
          res: ['system1-reports']
        }
      ],
      takeaways: [
        'Trong nghiên cứu Nielsen Catalina 2017 về hàng tiêu dùng, sáng tạo là yếu tố đóng góp lớn nhất vào doanh số tăng thêm do quảng cáo; đây là một nghiên cứu, không phải quy luật chung.',
        'Góc tiếp cận xuất phát từ insight; định dạng chỉ là vỏ.',
        'Thử khái niệm tạo bước nhảy, thử lặp tạo cải thiện nhỏ.',
        'Nhật ký học hỏi về sáng tạo là tài sản tích luỹ của đội.'
      ],
      assignment: {
        title: 'Bộ sáng tạo và kế hoạch thử nghiệm',
        brief: `<ol><li>Lập ma trận 3 persona × 4 động cơ. Chọn 6 ô triển vọng nhất và viết góc tiếp cận cho mỗi ô.</li><li>Viết kịch bản 3 video (mỗi video 3 hook thay thế) và 3 quảng cáo ảnh tĩnh.</li><li>Sản xuất ít nhất 2 video bằng điện thoại.</li><li>Viết kế hoạch thử: cấu trúc chiến dịch, ngân sách mỗi sáng tạo, chỉ số, tiêu chí thắng thua, mẫu nhật ký học hỏi.</li></ol>`,
        deliverable: 'Ma trận góc tiếp cận, 6 kịch bản, 2 video và kế hoạch thử nghiệm.'
      },
      quiz: [
        { q: 'Theo phân tích của Nielsen Catalina Solutions (2017), yếu tố nào đóng góp nhiều nhất vào doanh số tăng thêm do quảng cáo?', a: ['Nhắm mục tiêu', 'Độ phủ', 'Sáng tạo', 'Bối cảnh hiển thị'], correct: 2, why: 'Sáng tạo được ước tính đóng góp khoảng 47%.' },
        { q: 'Người xem đã biết sản phẩm nhưng chưa mua. Thông điệp nào phù hợp nhất?', a: ['Câu chuyện dài về vấn đề', 'Bằng chứng và ưu đãi', 'Giải thích danh mục sản phẩm', 'Nội dung giải trí không nhắc sản phẩm'], correct: 1, why: 'Ở mức nhận biết sản phẩm, người xem cần lý do tin và lý do hành động.' },
        { q: 'Thử khái niệm khác thử lặp thế nào?', a: ['Thử khái niệm so góc tiếp cận hoặc định dạng khác hẳn nhau; thử lặp tinh chỉnh trên khái niệm đã thắng', 'Thử khái niệm rẻ hơn', 'Thử lặp chỉ áp dụng cho ảnh tĩnh', 'Không khác nhau'], correct: 0, why: 'Thử khái niệm tìm hướng đi mới, thử lặp tối ưu hướng đã chứng minh.' },
        { q: 'Dấu hiệu nào cho thấy quảng cáo đang mỏi?', a: ['Frequency giảm, CTR tăng', 'Frequency tăng, CTR giảm, CPA tăng', 'CPM giảm', 'Hook rate tăng'], correct: 1, why: 'Lặp lại nhiều hơn, ít người phản hồi hơn và chi phí tăng là dấu hiệu điển hình.' },
        { q: 'Cách làm mới sáng tạo rẻ nhất là gì?', a: ['Đổi toàn bộ góc tiếp cận', 'Quay lại từ đầu với diễn viên mới', 'Thay hook cho phần thân đã có', 'Đổi nền tảng'], correct: 2, why: 'Đổi vài giây mở đầu tạo biến thể mới với chi phí thấp nhất.' }
      ],
      readings: ['contagious-berger', 'made-to-stick', 'lee-genai-ads']
    },
    {
      id: 'm3-6', hours: 7,
      title: 'Ngân sách, lợi nhuận và mở rộng',
      summary: 'Từ ROAS của nền tảng đến lợi nhuận thật: MER, ROAS biên, lợi nhuận đóng góp, dự báo và quản trị rủi ro.',
      objectives: [
        'Phân biệt ROAS nền tảng, MER và hiệu quả tăng thêm.',
        'Tính ROAS biên và xác định điểm dừng mở rộng.',
        'Lập mô hình lợi nhuận đóng góp theo đơn hàng và theo khách hàng.',
        'Dự báo ngân sách ngược từ mục tiêu doanh thu.',
        'Nhận diện rủi ro phụ thuộc kênh và suy giảm hiệu quả.'
      ],
      lessons: [
        {
          title: 'Ba cách nhìn hiệu quả', min: 45,
          body: `<table><tr><th>Góc nhìn</th><th>Công thức</th><th>Ưu điểm</th><th>Hạn chế</th></tr>
<tr><td>ROAS nền tảng</td><td>Doanh thu nền tảng ghi nhận ÷ Chi phí trên nền tảng</td><td>Chi tiết tới từng quảng cáo, dùng để tối ưu hằng ngày</td><td>Mỗi nền tảng tự chấm điểm mình; cộng lại vượt doanh thu thật</td></tr>
<tr><td>MER (blended ROAS)</td><td>Tổng doanh thu ÷ Tổng chi phí marketing</td><td>Không phụ thuộc phân bổ, khớp sổ sách</td><td>Không cho biết kênh nào tạo ra kết quả</td></tr>
<tr><td>Tăng thêm (incremental)</td><td>Doanh thu sẽ không có nếu không quảng cáo ÷ Chi phí</td><td>Là sự thật cần biết</td><td>Phải làm thử nghiệm mới đo được (Level 5)</td></tr></table>
<p>Tương tự, a16z phân biệt <strong>blended CAC</strong> (tổng chi phí ÷ tổng khách mới, gồm cả khách tự nhiên) và <strong>paid CAC</strong> (chi phí trả phí ÷ khách đến từ trả phí). Blended CAC đẹp có thể che một paid CAC đang xấu đi.</p>
<p>Cách dùng thực tế: quản trị doanh nghiệp bằng MER và lợi nhuận, tối ưu trong kênh bằng số của nền tảng, và hiệu chỉnh cả hai bằng thử nghiệm tăng thêm.</p>`,
          res: ['a16z-metrics', 'ctc-coachs-corner']
        },
        {
          title: 'Lợi suất giảm dần và ROAS biên', min: 50,
          body: `<p>Mỗi kênh có <strong>lợi suất giảm dần</strong>: những đồng đầu tiên tiếp cận người dễ chuyển đổi nhất, những đồng sau phải tiếp cận người khó hơn với giá cao hơn.</p>
<div class="formula"><code>ROAS biên = Doanh thu tăng thêm ÷ Chi phí tăng thêm</code><br>Ví dụ: tăng chi từ 100 lên 130 triệu, doanh thu từ 400 lên 460 triệu. ROAS trung bình = 3,54. ROAS biên = 60 ÷ 30 = 2,0.</div>
<p>Nếu ROAS hoà vốn là 2,5 thì 30 triệu tăng thêm đang lỗ, dù ROAS trung bình vẫn đẹp. <strong>Quyết định mở rộng phải dựa vào ROAS biên, không dựa vào ROAS trung bình.</strong></p>
<p>Quy tắc phân bổ tối ưu: chuyển ngân sách từ kênh có ROAS biên thấp sang kênh có ROAS biên cao, cho tới khi ROAS biên giữa các kênh xấp xỉ nhau và bằng mức hoà vốn mong muốn.</p>
<p>Ước lượng ROAS biên bằng cách thay đổi ngân sách có chủ đích từng bước, ghi lại kết quả và vẽ đường cong chi tiêu so với doanh thu cho từng kênh.</p>`,
          res: ['ctc-coachs-corner', 'andrew-chen']
        },
        {
          title: 'Lợi nhuận đóng góp và thời gian hoàn vốn', min: 45,
          body: `<div class="formula"><code>Lợi nhuận đóng góp mỗi đơn = AOV − Giá vốn − Vận chuyển, đóng gói − Phí thanh toán, hoa hồng − Chi phí quảng cáo mỗi đơn</code></div>
<p>Hai chế độ vận hành:</p>
<ul><li><strong>Có lãi ngay đơn đầu:</strong> an toàn về dòng tiền, phù hợp sản phẩm mua một lần hoặc doanh nghiệp ít vốn. CPA tối đa bằng lợi nhuận đóng góp (trước quảng cáo) của đơn đầu.</li><li><strong>Dựa trên LTV:</strong> chấp nhận lỗ đơn đầu để lấy khách, thu hồi qua các lần mua sau. Cần dữ liệu mua lại đáng tin và đủ vốn để chờ.</li></ul>
<p><strong>Thời gian hoàn vốn</strong> là số tháng để lợi nhuận đóng góp tích luỹ từ một khách bù được CAC. Thời gian này càng ngắn, doanh nghiệp càng tái đầu tư nhanh. Đặt giới hạn hoàn vốn (ví dụ 3, 6 hoặc 12 tháng) là quyết định tài chính, cần thống nhất với bộ phận tài chính.</p>
<div class="callout"><b>Cảnh giác:</b> LTV dự báo quá lạc quan là cách phổ biến nhất để biện minh cho CAC quá cao. Tính LTV trên biên lợi nhuận đóng góp (đã trừ các chi phí biến đổi theo đơn), như a16z khuyến nghị, dùng nhóm khách thật theo thời gian (cohort), và giới hạn chân trời tính toán.</div>`,
          res: ['a16z-metrics', 'wharton-customer-analytics']
        },
        {
          title: 'Dự báo và điều tiết ngân sách', min: 45,
          body: `<p>Lập kế hoạch ngược từ mục tiêu:</p>
<div class="formula">Doanh thu mục tiêu → trừ doanh thu tự nhiên và khách cũ dự kiến → doanh thu cần từ trả phí → ÷ AOV = số đơn → ÷ CVR = số lượt nhấp → × CPC = ngân sách</div>
<p>Kiểm tra chéo bằng công suất kênh: lượng tìm kiếm có đủ không, quy mô đối tượng có đủ không, ở mức chi đó ROAS biên còn trên hoà vốn không.</p>
<h4>Những điều cần đưa vào dự báo</h4>
<ul><li><strong>Mùa vụ:</strong> CPM và CVR đều thay đổi theo mùa. Dùng dữ liệu cùng kỳ năm trước.</li><li><strong>Độ trễ chuyển đổi:</strong> doanh thu của chi tiêu hôm nay có thể về sau nhiều ngày.</li><li><strong>Ba kịch bản:</strong> thận trọng, cơ sở, lạc quan.</li></ul>
<p><strong>Điều tiết (pacing):</strong> so chi tiêu và kết quả luỹ kế với kế hoạch mỗi tuần. Lệch quá 10 đến 15% thì tìm nguyên nhân và điều chỉnh, đừng đợi cuối tháng.</p>`,
          res: ['cu-boulder-perf']
        },
        {
          title: 'Mở rộng và quản trị rủi ro', min: 40,
          body: `<ul><li><strong>Mở rộng theo chiều dọc:</strong> tăng ngân sách trên chiến dịch đang tốt, cho tới khi ROAS biên chạm mức hoà vốn.</li><li><strong>Mở rộng theo chiều ngang:</strong> sáng tạo mới, góc tiếp cận mới, sản phẩm và ưu đãi mới, thị trường mới, kênh mới.</li></ul>
<p>Andrew Chen mô tả <strong>"Law of Shitty Clickthroughs"</strong>: theo thời gian, tỷ lệ nhấp của mọi chiến lược marketing đều đi xuống, vì người dùng quen dần, đối thủ bắt chước, và càng mở rộng càng gặp người khó thuyết phục hơn. Hệ quả: CAC có xu hướng tăng, và đội marketing phải liên tục tìm đòn bẩy mới.</p>
<h4>Rủi ro cần theo dõi</h4>
<ul><li><strong>Phụ thuộc một kênh:</strong> thay đổi chính sách hoặc khoá tài khoản có thể làm doanh thu rơi ngay.</li><li><strong>Phụ thuộc trả phí:</strong> tỷ trọng doanh thu từ trả phí tăng dần cho thấy thương hiệu và kênh owned đang yếu đi.</li><li><strong>Sai lệch đo lường:</strong> tối ưu theo một con số không phản ánh giá trị tăng thêm.</li></ul>
<p>Báo cáo hằng tuần cho lãnh đạo nên gồm: chi tiêu, doanh thu, MER, CAC khách mới, tỷ lệ khách mới, lợi nhuận đóng góp, và ba việc sẽ làm tuần tới.</p>`,
          res: ['andrew-chen', 'hacking-growth']
        }
      ],
      takeaways: [
        'Quản trị bằng MER và lợi nhuận, tối ưu bằng số nền tảng, hiệu chỉnh bằng thử nghiệm.',
        'Mở rộng theo ROAS biên. ROAS trung bình đẹp vẫn có thể che phần chi đang lỗ.',
        'LTV lạc quan là cái bẫy; đặt giới hạn hoàn vốn cùng bộ phận tài chính.',
        'Mọi kênh đều suy giảm, nên luôn cần nguồn tăng trưởng mới.'
      ],
      assignment: {
        title: 'Mô hình ngân sách và báo cáo tuần',
        brief: `<ol><li>Dựng bảng tính lợi nhuận đóng góp mỗi đơn cho sản phẩm của bạn và tính CPA tối đa ở hai chế độ: lãi đơn đầu và hoàn vốn 6 tháng.</li><li>Lập dự báo 3 tháng ngược từ mục tiêu doanh thu, với ba kịch bản.</li><li>Từ dữ liệu thật hoặc giả định có lý do, vẽ đường cong chi tiêu và doanh thu cho một kênh, tính ROAS biên ở ba mức chi.</li><li>Thiết kế mẫu báo cáo tuần một trang cho lãnh đạo.</li></ol>`,
        deliverable: 'Bảng tính mô hình ngân sách và mẫu báo cáo tuần.'
      },
      quiz: [
        { q: 'MER được tính thế nào?', a: ['Doanh thu nền tảng ghi nhận ÷ chi phí nền tảng', 'Tổng doanh thu ÷ tổng chi phí marketing', 'Lợi nhuận ÷ doanh thu', 'Chi phí ÷ số khách mới'], correct: 1, why: 'MER nhìn tổng thể, không phụ thuộc mô hình phân bổ của nền tảng nào.' },
        { q: 'Tăng chi từ 200 lên 250 triệu, doanh thu từ 800 lên 900 triệu. ROAS biên là bao nhiêu?', a: ['3,6', '4,0', '2,0', '0,5'], correct: 2, why: 'ROAS biên = (900 − 800) ÷ (250 − 200) = 2,0.' },
        { q: 'ROAS hoà vốn là 2,5. Với kết quả ở câu trên, quyết định đúng là gì?', a: ['Tiếp tục tăng ngân sách vì ROAS trung bình 3,6', 'Phần chi tăng thêm đang lỗ, nên dừng mở rộng hoặc cải thiện hiệu suất trước', 'Tắt toàn bộ kênh', 'Không đủ thông tin'], correct: 1, why: 'ROAS biên 2,0 thấp hơn mức hoà vốn 2,5, nên 50 triệu tăng thêm không sinh lời.' },
        { q: 'Blended CAC đẹp có thể che giấu điều gì?', a: ['Tỷ lệ chuyển đổi cao', 'Paid CAC đang xấu đi nhưng được khách tự nhiên kéo trung bình xuống', 'Doanh thu giảm', 'Biên lợi nhuận tăng'], correct: 1, why: 'Blended CAC gồm cả khách tự nhiên, nên không phản ánh riêng hiệu quả kênh trả phí.' },
        { q: '"Law of Shitty Clickthroughs" nói gì?', a: ['CTR luôn dưới 1%', 'Mọi kênh marketing đều giảm hiệu quả theo thời gian', 'Quảng cáo xấu có CTR cao', 'CTR không liên quan tới doanh thu'], correct: 1, why: 'Người dùng quen dần và cạnh tranh tăng khiến hiệu quả của mọi kênh suy giảm.' }
      ],
      readings: ['binet-field-long-short', 'cxl-institute']
    }
  ]
});
