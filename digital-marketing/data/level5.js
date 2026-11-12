COURSE.levels.push({
  id: 'L5', num: 5, color: '#2a7d3a',
  title: 'Analytics, đo lường và thử nghiệm',
  short: 'Đo lường',
  stage: 'Nâng cao',
  tagline: 'Từ thu thập dữ liệu đến chứng minh nhân quả: attribution, A/B testing, incrementality, MMM.',
  intro: 'Level 5 trả lời câu hỏi khó nhất của marketing: khoản chi này có thật sự tạo ra kết quả không. Bạn học cách thu thập dữ liệu đúng, truy vấn dữ liệu, hiểu giới hạn của attribution, thiết kế thử nghiệm và dùng mô hình media mix. Phần lớn tài liệu ở đây là nghiên cứu học thuật và tài liệu kỹ thuật gốc.',
  prereq: 'Hoàn thành Level 3. Biết Excel ở mức thành thạo',
  milestone: 'Chứng chỉ Google Analytics và một bản thiết kế thử nghiệm incrementality',
  outcomes: [
    'Thiết kế kế hoạch đo lường gồm tag, sự kiện, consent và kênh máy chủ.',
    'Viết SQL để phân tích dữ liệu marketing và dựng bảng điều khiển.',
    'Giải thích các mô hình attribution và vì sao chúng không đo được nhân quả.',
    'Thiết kế và đọc đúng kết quả một thử nghiệm A/B.',
    'Lập thử nghiệm incrementality theo người dùng và theo địa lý.',
    'Hiểu nguyên lý MMM và cách kết hợp ba phương pháp đo.'
  ],
  modules: [
    {
      id: 'm5-1', hours: 9,
      title: 'Thu thập dữ liệu: GA4, Tag Manager, consent, server-side',
      summary: 'Nền móng của mọi phép đo. Dữ liệu sai ở đây thì mọi phân tích phía sau đều sai.',
      objectives: [
        'Lập kế hoạch đo lường và thiết kế sự kiện GA4 có tham số.',
        'Dùng Google Tag Manager với data layer, trigger và biến.',
        'Giải thích Consent Mode và cách mô hình hoá dữ liệu thiếu.',
        'Mô tả kiến trúc tagging phía máy chủ và API chuyển đổi.',
        'Kiểm thử và giám sát chất lượng dữ liệu.'
      ],
      lessons: [
        {
          title: 'Kế hoạch đo lường và thiết kế sự kiện', min: 55,
          body: `<p>Trước khi cài bất kỳ tag nào, viết <strong>kế hoạch đo lường</strong>: câu hỏi kinh doanh → KPI → sự kiện và tham số cần thu → nơi dữ liệu được dùng.</p>
<p>GA4 có bốn nhóm sự kiện: tự động thu, đo lường nâng cao (cuộn, nhấp ra ngoài, tìm kiếm trong trang, xem video, tải tệp), <strong>sự kiện đề xuất</strong> (tên và tham số do Google quy định, ví dụ <code>add_to_cart</code>, <code>begin_checkout</code>, <code>purchase</code>, <code>generate_lead</code>) và sự kiện tuỳ chỉnh.</p>
<h4>Nguyên tắc thiết kế</h4>
<ul><li>Ưu tiên sự kiện đề xuất, vì chúng kích hoạt báo cáo dựng sẵn và tương thích với Google Ads.</li><li>Một tên sự kiện cho một loại hành động; khác biệt đưa vào tham số.</li><li>Quy ước đặt tên thống nhất: chữ thường, gạch dưới.</li><li>Tham số muốn dùng trong báo cáo phải đăng ký thành custom dimension hoặc metric.</li><li>Đánh dấu key event cho hành động có giá trị kinh doanh, không đánh dấu tràn lan.</li></ul>
<p>Lộ trình chính thức để học GA4 là bốn khoá của Analytics Academy trên Skillshop (101, 102, 201, 301), kết thúc bằng bài thi chứng chỉ miễn phí.</p>`,
          res: ['ga4-skillshop', 'ga-certification']
        },
        {
          title: 'Google Tag Manager', min: 60,
          body: `<p>GTM là lớp quản lý tag: bạn cài một đoạn mã container duy nhất, mọi tag về sau được cấu hình trên giao diện.</p>
<ul><li><strong>Tag:</strong> đoạn mã gửi dữ liệu đi (GA4, Google Ads, Meta Pixel).</li><li><strong>Trigger:</strong> điều kiện kích hoạt tag (xem trang, nhấp, gửi biểu mẫu, sự kiện tuỳ chỉnh).</li><li><strong>Variable:</strong> giá trị động dùng trong tag và trigger.</li><li><strong>Data layer:</strong> đối tượng JavaScript nơi website đẩy thông tin có cấu trúc để GTM đọc.</li></ul>
<div class="formula"><code>dataLayer.push({ event: 'purchase', ecommerce: { transaction_id: 'T123', value: 1250000, currency: 'VND', items: [...] } });</code></div>
<p>Dựa vào data layer bền hơn nhiều so với việc đọc nội dung trang bằng bộ chọn CSS, vì nó không vỡ khi giao diện thay đổi. Hãy thống nhất đặc tả data layer với đội phát triển.</p>
<h4>Quy trình làm việc an toàn</h4>
<ol><li>Cấu hình trong workspace.</li><li>Kiểm tra bằng chế độ Preview và DebugView của GA4.</li><li>Đặt tên phiên bản, ghi chú thay đổi rồi mới xuất bản.</li></ol>`,
          res: ['gtm-analyticsmania', 'measureschool']
        },
        {
          title: 'Consent Mode và mô hình hoá', min: 45,
          body: `<p><strong>Consent Mode</strong> truyền lựa chọn đồng ý của người dùng tới các tag của Google. Phiên bản 2 có bốn tham số: <code>ad_storage</code>, <code>analytics_storage</code>, <code>ad_user_data</code>, <code>ad_personalization</code>.</p>
<ul><li><strong>Chế độ cơ bản:</strong> tag không chạy cho tới khi người dùng đồng ý.</li><li><strong>Chế độ nâng cao:</strong> tag gửi tín hiệu ẩn danh không dùng cookie khi người dùng từ chối. Google dùng tín hiệu này để mô hình hoá phần chuyển đổi và hành vi bị thiếu.</li></ul>
<p>Với người dùng ở Khu vực kinh tế châu Âu và Anh, Google yêu cầu nhà quảng cáo truyền tín hiệu đồng ý để tiếp tục dùng các tính năng cá nhân hoá và đo lường. Bạn cần một nền tảng quản lý đồng ý (CMP) tích hợp với Consent Mode.</p>
<p><strong>Dữ liệu mô hình hoá</strong> là ước lượng thống kê, không phải quan sát trực tiếp. Điều này có nghĩa con số trong báo cáo ngày càng là sự pha trộn giữa dữ liệu đo được và dữ liệu ước tính, và sẽ thay đổi nhẹ theo thời gian khi mô hình cập nhật.</p>
<div class="callout"><b>Lưu ý:</b> yêu cầu pháp lý về đồng ý khác nhau theo quốc gia. Hãy làm việc với bộ phận pháp lý, không tự suy diễn từ tài liệu kỹ thuật.</div>`,
          res: ['google-consent-mode']
        },
        {
          title: 'Tagging phía máy chủ và API chuyển đổi', min: 55,
          body: `<p>Với tagging phía trình duyệt, mỗi nhà cung cấp chạy mã riêng trên thiết bị người dùng. Với <strong>tagging phía máy chủ</strong>, trình duyệt gửi một luồng dữ liệu tới máy chủ của bạn (ví dụ container máy chủ của GTM), rồi máy chủ chuyển tiếp tới từng nhà cung cấp.</p>
<table><tr><th>Lợi ích</th><th>Chi phí</th></tr>
<tr><td>Ít mã bên thứ ba hơn, trang nhanh hơn</td><td>Phải vận hành hạ tầng máy chủ</td></tr>
<tr><td>Kiểm soát chính xác dữ liệu nào được gửi cho ai</td><td>Cấu hình và gỡ lỗi phức tạp hơn</td></tr>
<tr><td>Cookie bên thứ nhất bền hơn, ít bị trình duyệt cắt ngắn</td><td>Vẫn phải tôn trọng lựa chọn đồng ý của người dùng</td></tr></table>
<p><strong>API chuyển đổi</strong> của các nền tảng (Meta Conversions API, enhanced conversions của Google, TikTok Events API) nhận sự kiện trực tiếp từ máy chủ hoặc CRM của bạn. Chúng cho phép gửi cả sự kiện ngoại tuyến như lead đủ điều kiện hay đơn hoàn tất.</p>
<p>Khi dùng song song kênh trình duyệt và kênh máy chủ, phải khử trùng lặp bằng mã sự kiện chung. Server-side không phải cách lách quy định quyền riêng tư: mọi nghĩa vụ về đồng ý vẫn giữ nguyên.</p>`,
          res: ['google-sgtm', 'meta-capi-docs', 'simo-ahava']
        },
        {
          title: 'Kiểm thử và giám sát chất lượng dữ liệu', min: 40,
          body: `<h4>Kiểm thử trước khi phát hành</h4>
<ul><li>Dùng Preview của GTM, DebugView của GA4 và công cụ kiểm tra sự kiện của từng nền tảng.</li><li>Đi qua toàn bộ luồng chuyển đổi trên máy tính và di động, với cả hai trạng thái đồng ý và từ chối.</li><li>Kiểm tra giá trị, đơn vị tiền tệ, mã giao dịch và trường hợp tải lại trang cảm ơn (dễ gây đếm trùng).</li></ul>
<h4>Giám sát thường xuyên</h4>
<ul><li>So số giao dịch và doanh thu trong GA4 với hệ thống đơn hàng. Chênh lệch nhỏ là bình thường; chênh lệch thay đổi đột ngột là sự cố.</li><li>Theo dõi tỷ lệ lưu lượng <code>(not set)</code>, <code>direct</code> tăng bất thường, dấu hiệu của UTM lỗi hoặc mất nguồn giới thiệu.</li><li>Đặt cảnh báo khi số sự kiện chính rơi về không.</li></ul>
<p>Ghi <strong>nhật ký thay đổi đo lường</strong>: ngày, thay đổi, người thực hiện. Khi con số nhảy bất thường sau ba tháng, nhật ký này tiết kiệm rất nhiều thời gian điều tra.</p>`,
          res: ['gtm-analyticsmania', 'ga4-skillshop']
        }
      ],
      takeaways: [
        'Kế hoạch đo lường đi trước việc cài tag.',
        'Data layer là hợp đồng giữa marketing và đội phát triển.',
        'Một phần dữ liệu ngày nay là ước lượng mô hình, không phải quan sát.',
        'Server-side tăng kiểm soát, không miễn trừ nghĩa vụ về đồng ý.'
      ],
      assignment: {
        title: 'Kế hoạch đo lường và đặc tả data layer',
        brief: `<ol><li>Viết kế hoạch đo lường cho website hoặc ứng dụng của bạn: 5 câu hỏi kinh doanh, KPI, danh sách sự kiện kèm tham số.</li><li>Viết đặc tả data layer cho 4 sự kiện chính của phễu.</li><li>Tạo một container GTM thử nghiệm, cấu hình GA4 và ít nhất 2 sự kiện tuỳ chỉnh, kiểm tra bằng Preview và DebugView.</li><li>Học bốn khoá Analytics Academy và thi chứng chỉ Google Analytics.</li></ol>`,
        deliverable: 'Kế hoạch đo lường, đặc tả data layer, ảnh chụp kết quả kiểm thử và chứng chỉ GA.'
      },
      quiz: [
        { q: 'Vì sao nên ưu tiên sự kiện đề xuất của GA4?', a: ['Vì chúng miễn phí', 'Vì chúng kích hoạt báo cáo dựng sẵn và tương thích với Google Ads', 'Vì sự kiện tuỳ chỉnh bị cấm', 'Vì chúng không cần tham số'], correct: 1, why: 'Tên và tham số chuẩn giúp dữ liệu dùng được ngay trong báo cáo và tích hợp.' },
        { q: 'Data layer là gì?', a: ['Máy chủ lưu dữ liệu GA4', 'Đối tượng JavaScript nơi website đẩy thông tin có cấu trúc cho Tag Manager', 'Một loại cookie', 'Bảng trong BigQuery'], correct: 1, why: 'Data layer là lớp trung gian có cấu trúc giữa website và GTM.' },
        { q: 'Consent Mode v2 bổ sung hai tham số nào?', a: ['ad_storage và analytics_storage', 'ad_user_data và ad_personalization', 'user_id và client_id', 'utm_source và utm_medium'], correct: 1, why: 'Hai tham số mới kiểm soát việc gửi dữ liệu người dùng cho quảng cáo và cá nhân hoá quảng cáo.' },
        { q: 'Nhận định nào đúng về tagging phía máy chủ?', a: ['Cho phép bỏ qua lựa chọn từ chối của người dùng', 'Tăng kiểm soát dữ liệu và hiệu năng trang, vẫn phải tôn trọng đồng ý', 'Không cần Tag Manager', 'Chỉ dùng cho ứng dụng di động'], correct: 1, why: 'Server-side thay đổi nơi xử lý, không thay đổi nghĩa vụ pháp lý.' },
        { q: 'Doanh thu GA4 đột ngột cao gấp đôi hệ thống đơn hàng. Nguyên nhân nên kiểm tra đầu tiên?', a: ['Mùa cao điểm', 'Sự kiện purchase bị gửi trùng, ví dụ khi tải lại trang cảm ơn', 'Tỷ giá', 'Consent Mode'], correct: 1, why: 'Đếm trùng sự kiện mua là nguyên nhân phổ biến nhất của chênh lệch dạng này.' }
      ],
      readings: ['simo-ahava', 'kaushik-wa2']
    },
    {
      id: 'm5-2', hours: 9,
      title: 'Kho dữ liệu marketing: SQL, BigQuery, bảng điều khiển',
      summary: 'Thoát khỏi giới hạn của giao diện báo cáo: truy vấn dữ liệu thô, ghép nguồn và dựng bảng điều khiển phục vụ quyết định.',
      objectives: [
        'Viết truy vấn SQL với SELECT, WHERE, GROUP BY, JOIN và hàm cửa sổ cơ bản.',
        'Mô tả cấu trúc dữ liệu GA4 xuất sang BigQuery.',
        'Ghép dữ liệu chi phí quảng cáo với dữ liệu doanh thu.',
        'Thiết kế bảng điều khiển theo người dùng và quyết định.',
        'Áp dụng nguyên tắc trực quan hoá dữ liệu.'
      ],
      lessons: [
        {
          title: 'SQL cho marketer', min: 90,
          body: `<p>SQL là kỹ năng phân tích có lợi suất cao nhất với marketer: nó cho phép tự trả lời câu hỏi mà giao diện báo cáo không hỗ trợ.</p>
<div class="formula"><code>SELECT source, COUNT(DISTINCT user_id) AS users, SUM(revenue) AS revenue<br>FROM orders<br>WHERE order_date BETWEEN '2026-10-01' AND '2026-10-31'<br>GROUP BY source<br>ORDER BY revenue DESC;</code></div>
<h4>Lộ trình học</h4>
<ol><li><strong>Cơ bản:</strong> SELECT, WHERE, ORDER BY, hàm tổng hợp, GROUP BY, HAVING.</li><li><strong>Ghép bảng:</strong> INNER JOIN, LEFT JOIN. Hiểu vì sao ghép sai làm nhân bản dòng.</li><li><strong>Trung cấp:</strong> CASE WHEN, truy vấn con, CTE (mệnh đề WITH), xử lý ngày tháng.</li><li><strong>Hàm cửa sổ:</strong> ROW_NUMBER, LAG, SUM() OVER để tính luỹ kế, thứ tự mua, khoảng cách giữa hai lần mua.</li></ol>
<p>Những bài toán marketing kinh điển giải bằng SQL: bảng cohort retention, phễu chuyển đổi theo bước, RFM, đơn hàng đầu tiên theo nguồn, LTV theo tháng gia nhập.</p>
<p>Khoá Intro to SQL của Kaggle dạy trực tiếp trên BigQuery; hướng dẫn SQL của ThoughtSpot (trước đây là Mode) đi sâu hơn về phân tích.</p>`,
          res: ['kaggle-sql', 'thoughtspot-sql']
        },
        {
          title: 'GA4 trong BigQuery', min: 60,
          body: `<p>GA4 cho phép xuất dữ liệu sự kiện thô sang BigQuery. Mỗi ngày tạo một bảng <code>events_YYYYMMDD</code>, mỗi dòng là một sự kiện.</p>
<h4>Cấu trúc cần biết</h4>
<ul><li><code>event_name</code>, <code>event_timestamp</code>, <code>user_pseudo_id</code>.</li><li><code>event_params</code>: mảng lồng các cặp khoá và giá trị. Cần <code>UNNEST</code> để truy cập.</li><li><code>items</code>: mảng sản phẩm trong sự kiện thương mại.</li><li>Các trường về nguồn lưu lượng, thiết bị, địa lý.</li></ul>
<div class="formula"><code>SELECT event_date, COUNT(*) AS purchases,<br>SUM((SELECT value.double_value FROM UNNEST(event_params) WHERE key = 'value')) AS revenue<br>FROM \`project.analytics_123.events_*\`<br>WHERE event_name = 'purchase' AND _TABLE_SUFFIX BETWEEN '20261001' AND '20261031'<br>GROUP BY event_date;</code></div>
<h4>Vì sao dùng dữ liệu thô</h4>
<ul><li>Không bị lấy mẫu, không bị ngưỡng ẩn dữ liệu của giao diện.</li><li>Tự định nghĩa phiên, phễu, mô hình phân bổ.</li><li>Ghép với CRM, đơn hàng, chi phí quảng cáo.</li></ul>
<p>Lưu ý: số trong BigQuery không khớp hoàn toàn với giao diện GA4, vì giao diện có dữ liệu mô hình hoá và cách tính người dùng riêng.</p>`,
          res: ['ga4-bigquery-export', 'google-skills-bigquery']
        },
        {
          title: 'Ghép chi phí và doanh thu', min: 50,
          body: `<p>Câu hỏi "mỗi kênh tốn bao nhiêu và mang về bao nhiêu" đòi hỏi ghép ít nhất ba nguồn: chi phí từ các nền tảng quảng cáo, hành vi từ GA4 hoặc MMP, và doanh thu thật từ hệ thống đơn hàng hoặc CRM.</p>
<h4>Kiến trúc tối giản</h4>
<ol><li><strong>Nạp:</strong> chuyển dữ liệu từ các nguồn về kho (BigQuery). Google Ads và GA4 có kết nối sẵn; nguồn khác dùng công cụ kết nối hoặc tệp xuất định kỳ.</li><li><strong>Chuẩn hoá:</strong> thống nhất tên kênh, chiến dịch, đơn vị tiền tệ, múi giờ. Đây là lúc quy ước đặt tên và UTM ở các level trước phát huy tác dụng.</li><li><strong>Mô hình:</strong> bảng tổng hợp theo ngày × kênh × chiến dịch gồm chi phí, lượt nhấp, phiên, đơn, doanh thu, lợi nhuận.</li><li><strong>Trình bày:</strong> bảng điều khiển đọc từ bảng tổng hợp.</li></ol>
<p>Khoá chung để ghép thường là ngày cộng tên chiến dịch (qua UTM) hoặc mã nhấp. Nếu quy ước đặt tên không nhất quán, bước chuẩn hoá sẽ chiếm phần lớn công sức.</p>
<p>Với doanh nghiệp nhỏ, Google Sheets cộng dữ liệu xuất thủ công hằng tuần vẫn là điểm khởi đầu hợp lý. Chỉ xây kho dữ liệu khi khối lượng và tần suất đòi hỏi.</p>`,
          res: ['google-skills-bigquery', 'meta-marketing-analytics-cert']
        },
        {
          title: 'Thiết kế bảng điều khiển', min: 50,
          body: `<p>Công cụ trực quan hoá miễn phí của Google là <strong>Data Studio</strong> (từng mang tên Looker Studio, đổi lại tên cũ vào năm 2026). Nguyên tắc thiết kế dưới đây áp dụng cho mọi công cụ.</p>
<h4>Bắt đầu từ người dùng và quyết định</h4>
<table><tr><th>Người xem</th><th>Câu hỏi</th><th>Nội dung</th></tr>
<tr><td>Lãnh đạo</td><td>Ta có đạt mục tiêu không?</td><td>5 đến 7 KPI so với mục tiêu và cùng kỳ, xu hướng</td></tr>
<tr><td>Trưởng nhóm marketing</td><td>Kênh nào cần điều chỉnh?</td><td>Hiệu quả theo kênh, chi tiêu so kế hoạch, MER, CAC</td></tr>
<tr><td>Chuyên viên kênh</td><td>Chiến dịch, quảng cáo nào cần sửa?</td><td>Chi tiết theo chiến dịch, sáng tạo, từ khoá</td></tr></table>
<h4>Nguyên tắc trực quan hoá</h4>
<ul><li>Mỗi biểu đồ trả lời một câu hỏi; viết câu hỏi hoặc kết luận làm tiêu đề.</li><li>Đường cho xu hướng thời gian, cột cho so sánh, bảng cho tra cứu chi tiết. Tránh biểu đồ tròn nhiều lát.</li><li>Luôn có điểm so sánh: mục tiêu, kỳ trước, cùng kỳ.</li><li>Bớt mọi thứ không mang thông tin.</li></ul>
<p>Bảng điều khiển tốt dẫn tới hành động. Nếu không ai thay đổi quyết định nào sau khi xem, hãy xoá nó.</p>`,
          res: ['data-studio-docs', 'kaushik-occam']
        },
        {
          title: 'Thống kê nền tảng cho phân tích', min: 60,
          body: `<p>Trước khi sang thử nghiệm, cần vững vài khái niệm:</p>
<ul><li><strong>Trung bình và trung vị:</strong> dữ liệu doanh thu rất lệch, trung bình bị kéo bởi vài giá trị lớn. Xem cả hai.</li><li><strong>Phương sai, độ lệch chuẩn:</strong> mức dao động. Chỉ số dao động càng mạnh càng cần nhiều dữ liệu để phát hiện thay đổi.</li><li><strong>Mẫu và tổng thể:</strong> mọi con số đo được là ước lượng có sai số.</li><li><strong>Khoảng tin cậy:</strong> khoảng giá trị hợp lý của đại lượng thật. Báo cáo khoảng, không chỉ báo cáo điểm.</li><li><strong>Tương quan và hồi quy:</strong> mô tả quan hệ giữa các biến; không tự chứng minh nhân quả.</li><li><strong>Hồi quy về trung bình:</strong> kết quả cực đoan thường được theo sau bởi kết quả gần trung bình hơn. Chiến dịch tệ nhất tuần này dễ "cải thiện" tuần sau dù bạn không làm gì.</li></ul>
<p>Khoá Marketing Analytics của Darden (Đại học Virginia) áp dụng hồi quy và thử nghiệm vào các bài toán marketing cụ thể như giá trị thương hiệu và giá trị vòng đời khách hàng.</p>`,
          res: ['darden-marketing-analytics', 'google-data-analytics-cert']
        }
      ],
      takeaways: [
        'SQL cho phép tự trả lời câu hỏi mà giao diện báo cáo không hỗ trợ.',
        'Dữ liệu thô GA4 trong BigQuery không bị lấy mẫu và ghép được với nguồn khác.',
        'Quy ước đặt tên nhất quán quyết định chi phí ghép dữ liệu.',
        'Bảng điều khiển phải gắn với một người xem và một quyết định.'
      ],
      assignment: {
        title: 'Phân tích bằng SQL và bảng điều khiển',
        brief: `<ol><li>Hoàn thành khoá Intro to SQL của Kaggle.</li><li>Dùng bộ dữ liệu mẫu GA4 công khai trong BigQuery (hoặc dữ liệu của bạn), viết 5 truy vấn: doanh thu theo ngày, top nguồn lưu lượng theo số đơn, phễu 4 bước, tỷ lệ người mua lặp lại, bảng cohort theo tuần.</li><li>Dựng bảng điều khiển một trang trong Data Studio cho trưởng nhóm marketing, tối đa 8 thành phần.</li><li>Viết nửa trang: bảng điều khiển này phục vụ quyết định nào.</li></ol>`,
        deliverable: 'Tệp truy vấn SQL, liên kết bảng điều khiển và ghi chú mục đích.'
      },
      quiz: [
        { q: 'Trong BigQuery, cần gì để đọc một tham số trong event_params của GA4?', a: ['JOIN với bảng users', 'UNNEST mảng event_params', 'Hàm PIVOT', 'Không cần gì'], correct: 1, why: 'event_params là mảng lồng nhau, phải UNNEST để lấy giá trị theo khoá.' },
        { q: 'Loại JOIN nào giữ mọi dòng của bảng bên trái kể cả khi không có dòng khớp bên phải?', a: ['INNER JOIN', 'LEFT JOIN', 'CROSS JOIN', 'SELF JOIN'], correct: 1, why: 'LEFT JOIN giữ toàn bộ bảng trái, phần không khớp nhận giá trị NULL.' },
        { q: 'Vì sao số liệu BigQuery không khớp hoàn toàn với giao diện GA4?', a: ['Vì BigQuery bị lấy mẫu', 'Vì giao diện có dữ liệu mô hình hoá và cách tính riêng', 'Vì múi giờ luôn sai', 'Vì BigQuery thiếu sự kiện purchase'], correct: 1, why: 'Giao diện áp dụng mô hình hoá và các quy tắc xử lý mà bảng thô không có.' },
        { q: 'Chiến dịch tệ nhất tuần trước tự tốt lên tuần này dù không ai chỉnh sửa. Hiện tượng thống kê nào giải thích?', a: ['Hồi quy về trung bình', 'Nghịch lý Simpson', 'Sai lệch chọn mẫu', 'Đa cộng tuyến'], correct: 0, why: 'Kết quả cực đoan thường được theo sau bởi kết quả gần mức trung bình hơn.' },
        { q: 'Dấu hiệu của một bảng điều khiển nên bị xoá?', a: ['Có ít hơn 10 biểu đồ', 'Không ai thay đổi quyết định nào sau khi xem', 'Dùng biểu đồ đường', 'Có so sánh với mục tiêu'], correct: 1, why: 'Bảng điều khiển tồn tại để hỗ trợ quyết định.' }
      ],
      readings: ['lean-analytics', 'emory-marketing-analytics']
    },
    {
      id: 'm5-3', hours: 6,
      title: 'Attribution: mô hình phân bổ và giới hạn',
      summary: 'Các mô hình phân bổ hoạt động thế nào, vì sao mỗi nền tảng cho một con số khác nhau, và vì sao attribution không phải nhân quả.',
      objectives: [
        'So sánh mô hình theo quy tắc và mô hình dựa trên dữ liệu.',
        'Giải thích ý tưởng của phân bổ theo Shapley và chuỗi Markov.',
        'Lý giải chênh lệch số liệu giữa GA4, Google Ads, Meta và MMP.',
        'Nêu các lý do attribution không đo được tác động tăng thêm.',
        'Dùng attribution đúng phạm vi của nó.'
      ],
      lessons: [
        {
          title: 'Các mô hình phân bổ', min: 45,
          body: `<p>Attribution chia công của một chuyển đổi cho các điểm chạm trước đó.</p>
<table><tr><th>Mô hình</th><th>Cách chia</th><th>Thiên lệch</th></tr>
<tr><td>Last click</td><td>100% cho điểm chạm cuối</td><td>Ưu ái kênh bắt nhu cầu (search thương hiệu, remarketing)</td></tr>
<tr><td>First click</td><td>100% cho điểm chạm đầu</td><td>Ưu ái kênh tạo nhận biết</td></tr>
<tr><td>Linear, time decay, position-based</td><td>Chia theo quy tắc cố định</td><td>Quy tắc tuỳ ý, không dựa trên dữ liệu</td></tr>
<tr><td>Data-driven (DDA)</td><td>Chia theo đóng góp ước tính từ dữ liệu hành trình</td><td>Hộp đen; chỉ thấy điểm chạm đo được</td></tr></table>
<p>GA4 đã bỏ các mô hình first click, linear, time decay và position-based từ cuối năm 2023. Hiện chỉ còn data-driven và hai biến thể last click. Google Ads cũng dùng data-driven làm mặc định.</p>
<p><strong>Data-driven attribution</strong> so sánh các hành trình có và không có một điểm chạm để ước lượng điểm chạm đó làm thay đổi xác suất chuyển đổi bao nhiêu. Ý tưởng nền là giá trị <strong>Shapley</strong> trong lý thuyết trò chơi: đóng góp biên trung bình của một "người chơi" qua mọi tổ hợp. Cách tiếp cận <strong>chuỗi Markov</strong> đo "hiệu ứng loại bỏ": xác suất chuyển đổi giảm bao nhiêu nếu gỡ một kênh khỏi đồ thị hành trình.</p>`,
          res: ['ga4-attribution', 'gads-dda', 'shapley-paper']
        },
        {
          title: 'Vì sao mỗi nền tảng một con số', min: 40,
          body: `<p>Cộng chuyển đổi do Google Ads, Meta và TikTok tự báo cáo, tổng thường vượt xa số đơn thật. Nguyên nhân:</p>
<ul><li><strong>Mỗi nền tảng chỉ thấy điểm chạm của mình</strong> và nhận toàn bộ công khi có mặt trong hành trình.</li><li><strong>Cửa sổ phân bổ khác nhau:</strong> 7 ngày sau nhấp, 1 ngày sau xem, 30 ngày sau nhấp.</li><li><strong>Chuyển đổi sau xem</strong> được tính ở nền tảng này mà không ở nền tảng khác.</li><li><strong>Ngày ghi nhận:</strong> theo ngày nhấp (Google Ads) hay ngày chuyển đổi (GA4).</li><li><strong>Định danh:</strong> nền tảng có đăng nhập nối được nhiều thiết bị; GA4 dựa chủ yếu vào cookie.</li><li><strong>Mô hình hoá</strong> phần dữ liệu thiếu khác nhau ở mỗi bên.</li></ul>
<p>Không có con số nào "đúng" trong số này. Mỗi con số trả lời một câu hỏi hơi khác nhau. Điều cần làm là: chọn một nguồn làm chuẩn cho báo cáo kinh doanh (hệ thống đơn hàng), hiểu vì sao các nguồn khác lệch, và theo dõi tỷ lệ lệch theo thời gian.</p>`,
          res: ['ga4-attribution', 'meta-capi-docs']
        },
        {
          title: 'Attribution không phải nhân quả', min: 50,
          body: `<p>Attribution trả lời "điểm chạm nào xuất hiện trước chuyển đổi". Câu hỏi kinh doanh là "chuyển đổi nào sẽ <em>không xảy ra</em> nếu không có quảng cáo". Hai câu hỏi này khác nhau.</p>
<h4>Bằng chứng học thuật</h4>
<ul><li><strong>Blake, Nosko, Tadelis (Econometrica, 2015):</strong> eBay tắt quảng cáo tìm kiếm thương hiệu trong một thử nghiệm. Lưu lượng gần như không đổi vì người dùng chuyển sang nhấp kết quả tự nhiên. ROAS theo last click rất cao, tác động thật gần bằng không.</li><li><strong>Gordon, Zettelmeyer và cộng sự (Marketing Science, 2019)</strong> và nghiên cứu tiếp nối <em>Close Enough?</em>: so các phương pháp quan sát với thử nghiệm ngẫu nhiên trên hàng loạt chiến dịch Facebook. Các phương pháp quan sát, kể cả với dữ liệu rất phong phú, thường ước lượng sai lớn so với thử nghiệm.</li></ul>
<h4>Cơ chế gây sai lệch</h4>
<ul><li><strong>Chọn lọc:</strong> thuật toán hiển thị quảng cáo cho người có xác suất mua cao sẵn. Họ mua, và quảng cáo nhận công.</li><li><strong>Kênh cuối phễu</strong> chặn đầu người đã quyết định.</li><li><strong>Điểm chạm không đo được</strong> (truyền miệng, TV, ngoài trời, xem mà không nhấp) không có trong dữ liệu.</li></ul>`,
          res: ['blake-nosko-tadelis', 'gordon-close-enough']
        },
        {
          title: 'Dùng attribution đúng chỗ', min: 35,
          body: `<p>Attribution vẫn hữu ích khi dùng đúng phạm vi:</p>
<table><tr><th>Dùng tốt cho</th><th>Không dùng cho</th></tr>
<tr><td>Tối ưu trong một kênh: so sáng tạo, từ khoá, đối tượng với nhau</td><td>Quyết định chia ngân sách giữa các kênh</td></tr>
<tr><td>Tín hiệu hằng ngày cho giá thầu tự động</td><td>Chứng minh ROI của marketing với ban lãnh đạo</td></tr>
<tr><td>Hiểu hành trình: kênh nào thường mở đầu, kênh nào thường kết thúc</td><td>So sánh kênh bắt nhu cầu với kênh tạo nhu cầu</td></tr></table>
<p>Một cách làm thực dụng là <strong>hiệu chỉnh</strong>: chạy thử nghiệm tăng thêm cho từng kênh lớn, tính hệ số giữa kết quả thử nghiệm và số attribution, rồi áp hệ số đó vào báo cáo hằng ngày cho tới lần thử nghiệm kế tiếp.</p>
<div class="formula"><code>Hệ số tăng thêm = Chuyển đổi tăng thêm (từ thử nghiệm) ÷ Chuyển đổi được phân bổ (từ nền tảng)</code><br>Ví dụ: hệ số 0,6 nghĩa là cứ 10 chuyển đổi nền tảng báo cáo thì khoảng 6 là do quảng cáo tạo ra.</div>`,
          res: ['twg-measurement-playbook', 'haus-blog']
        }
      ],
      takeaways: [
        'Mọi mô hình attribution đều chỉ chia công giữa các điểm chạm đo được.',
        'Số của mỗi nền tảng trả lời một câu hỏi khác nhau và không cộng lại được.',
        'Thử nghiệm ngẫu nhiên cho thấy phương pháp quan sát thường sai lớn.',
        'Dùng attribution để tối ưu trong kênh, dùng thử nghiệm và MMM để chia ngân sách giữa các kênh.'
      ],
      assignment: {
        title: 'Bảng đối chiếu số liệu',
        brief: `<ol><li>Lấy số chuyển đổi và doanh thu của cùng một tháng từ: hệ thống đơn hàng, GA4, Google Ads, Meta Ads (hoặc dữ liệu giả định hợp lý nếu chưa có quyền truy cập).</li><li>Lập bảng đối chiếu và ghi cài đặt phân bổ của từng nguồn.</li><li>Giải thích từng khoản chênh lệch bằng các nguyên nhân đã học.</li><li>Đọc phần tóm tắt và kết luận của bài báo eBay. Viết một trang: bài học áp dụng cho doanh nghiệp của bạn là gì, bạn sẽ kiểm chứng thế nào.</li></ol>`,
        deliverable: 'Bảng đối chiếu có chú giải và bài viết một trang.'
      },
      quiz: [
        { q: 'GA4 hiện còn những mô hình phân bổ nào?', a: ['Linear và time decay', 'Data-driven và các biến thể last click', 'First click và position-based', 'Chỉ last click'], correct: 1, why: 'Các mô hình theo quy tắc khác đã bị bỏ từ cuối năm 2023.' },
        { q: 'Thử nghiệm của eBay về quảng cáo tìm kiếm thương hiệu cho thấy điều gì?', a: ['Tắt quảng cáo làm mất phần lớn doanh thu', 'Tắt quảng cáo gần như không làm giảm lưu lượng vì người dùng nhấp kết quả tự nhiên', 'Quảng cáo thương hiệu có ROAS thấp theo last click', 'CPC thương hiệu quá cao'], correct: 1, why: 'Người tìm tên thương hiệu vẫn đến qua kết quả tự nhiên, nên tác động tăng thêm rất nhỏ.' },
        { q: 'Vì sao tổng chuyển đổi các nền tảng tự báo cáo thường vượt số đơn thật?', a: ['Do gian lận', 'Mỗi nền tảng nhận công cho mọi chuyển đổi mà nó có điểm chạm, với cửa sổ riêng', 'Do GA4 đếm thiếu', 'Do tỷ giá'], correct: 1, why: 'Cùng một đơn có thể được nhiều nền tảng cùng ghi nhận.' },
        { q: 'Sai lệch chọn lọc trong đo lường quảng cáo là gì?', a: ['Chọn sai KPI', 'Quảng cáo được hiển thị cho người vốn đã có xác suất mua cao, nên nhận công không xứng đáng', 'Chọn sai đối tượng', 'Mẫu quá nhỏ'], correct: 1, why: 'Thuật toán nhắm vào người sắp mua, làm tương quan giữa xem quảng cáo và mua cao hơn tác động thật.' },
        { q: 'Hệ số tăng thêm 0,5 có nghĩa gì?', a: ['Quảng cáo lỗ 50%', 'Khoảng một nửa số chuyển đổi nền tảng báo cáo thật sự do quảng cáo tạo ra', 'ROAS là 0,5', 'Một nửa ngân sách bị gian lận'], correct: 1, why: 'Hệ số này so chuyển đổi tăng thêm đo bằng thử nghiệm với chuyển đổi được phân bổ.' }
      ],
      readings: ['lewis-rao', 'recast-blog']
    },
    {
      id: 'm5-4', hours: 8,
      title: 'Thử nghiệm A/B',
      summary: 'Phương pháp chuẩn vàng để suy luận nhân quả: thiết kế, thống kê và những cái bẫy thường gặp, theo giáo trình của Kohavi, Tang và Xu.',
      objectives: [
        'Viết giả thuyết và chọn chỉ số đánh giá tổng thể.',
        'Giải thích p-value, mức ý nghĩa, lực kiểm định và sai lầm loại I, II.',
        'Tính cỡ mẫu và thời lượng thử nghiệm.',
        'Nhận diện các bẫy: nhìn trộm, lệch tỷ lệ mẫu, so sánh nhiều lần, hiệu ứng mới lạ.',
        'Ra quyết định và ghi nhận kết quả thử nghiệm.'
      ],
      lessons: [
        {
          title: 'Vì sao thử nghiệm ngẫu nhiên', min: 45,
          body: `<p>Thử nghiệm đối chứng ngẫu nhiên chia người dùng một cách ngẫu nhiên thành nhóm đối chứng và nhóm thử. Vì việc chia là ngẫu nhiên, hai nhóm giống nhau về mọi mặt ngoại trừ thay đổi đang thử. Khác biệt về kết quả vì thế là do thay đổi đó gây ra.</p>
<p>Kohavi, Tang và Xu, những người từng dẫn dắt nền tảng thử nghiệm ở Microsoft, Google và LinkedIn, tổng kết trong <em>Trustworthy Online Controlled Experiments</em>:</p>
<ul><li>Phần lớn ý tưởng không cải thiện được chỉ số mục tiêu. Ở các công ty lớn, chỉ khoảng một phần ba ý tưởng có kết quả tích cực, và tỷ lệ này thấp hơn ở sản phẩm đã tối ưu nhiều.</li><li>Trực giác của chuyên gia dự đoán kết quả kém. Đây là lý do cần thử.</li><li>Thay đổi nhỏ đôi khi tạo tác động lớn và ngược lại.</li></ul>
<h4>Thành phần của một thử nghiệm</h4>
<ul><li><strong>Giả thuyết</strong> viết trước khi chạy.</li><li><strong>Đơn vị ngẫu nhiên hoá:</strong> thường là người dùng.</li><li><strong>OEC</strong> (overall evaluation criterion): một chỉ số chính đại diện cho mục tiêu dài hạn.</li><li><strong>Chỉ số rào chắn (guardrail):</strong> những thứ không được làm xấu đi, ví dụ tốc độ trang, tỷ lệ hoàn đơn.</li></ul>`,
          res: ['kohavi-book', 'udacity-ab']
        },
        {
          title: 'Thống kê của thử nghiệm', min: 70,
          body: `<ul><li><strong>Giả thuyết không (H0):</strong> hai phiên bản không khác nhau.</li><li><strong>p-value:</strong> xác suất thấy khác biệt lớn như đã quan sát (hoặc hơn) <em>nếu H0 đúng</em>. Đây không phải xác suất H0 đúng, cũng không phải xác suất phiên bản mới tốt hơn.</li><li><strong>Mức ý nghĩa α</strong> (thường 5%): ngưỡng p-value để bác bỏ H0. Cũng là tỷ lệ dương tính giả bạn chấp nhận.</li><li><strong>Lực kiểm định</strong> (power, thường 80%): xác suất phát hiện được tác động nếu nó tồn tại.</li><li><strong>MDE</strong> (minimum detectable effect): mức thay đổi nhỏ nhất thử nghiệm đủ sức phát hiện.</li></ul>
<table><tr><th></th><th>Thực tế không khác</th><th>Thực tế có khác</th></tr>
<tr><td>Kết luận có khác</td><td>Sai lầm loại I (dương tính giả)</td><td>Đúng</td></tr>
<tr><td>Kết luận không khác</td><td>Đúng</td><td>Sai lầm loại II (âm tính giả)</td></tr></table>
<p>Hãy luôn báo cáo <strong>khoảng tin cậy</strong> của mức thay đổi. "Tăng 4%, khoảng tin cậy 95% từ 0,5% đến 7,5%" hữu ích hơn nhiều so với "có ý nghĩa thống kê".</p>
<p><strong>Ý nghĩa thống kê không đồng nghĩa ý nghĩa kinh doanh.</strong> Với mẫu rất lớn, mức tăng 0,1% cũng có ý nghĩa thống kê nhưng có thể không đáng chi phí triển khai.</p>`,
          res: ['kohavi-book', 'evanmiller-ab']
        },
        {
          title: 'Cỡ mẫu và thời lượng', min: 45,
          body: `<p>Cỡ mẫu cần thiết phụ thuộc vào: tỷ lệ cơ sở, MDE, mức ý nghĩa và lực kiểm định. Công thức gần đúng thường dùng cho mỗi nhóm:</p>
<div class="formula"><code>n ≈ 16 × σ² ÷ δ²</code><br>với σ² là phương sai của chỉ số và δ là mức thay đổi tuyệt đối muốn phát hiện (α = 5%, power = 80%).</div>
<p>Điều quan trọng nhất cần nhớ: <strong>cỡ mẫu tỷ lệ nghịch với bình phương của MDE</strong>. Muốn phát hiện thay đổi nhỏ bằng một nửa thì cần mẫu gấp bốn.</p>
<p>Ví dụ: tỷ lệ chuyển đổi cơ sở 3%, muốn phát hiện mức tăng tương đối 10% (lên 3,3%) cần khoảng 50.000 người dùng mỗi nhóm. Website có 20.000 người dùng mỗi tháng không thể chạy thử nghiệm này trong thời gian hợp lý.</p>
<h4>Thời lượng</h4>
<ul><li>Chạy trọn số tuần (ít nhất 1 đến 2 tuần) để bao phủ chu kỳ ngày trong tuần.</li><li>Quyết định thời lượng trước, và không dừng sớm.</li><li>Lưu lượng thấp thì thử thay đổi lớn hơn, dùng chỉ số gần hơn (tỷ lệ nhấp thay vì tỷ lệ mua), hoặc dùng phương pháp nghiên cứu khác.</li></ul>`,
          res: ['evanmiller-ab', 'exp-platform']
        },
        {
          title: 'Những cái bẫy', min: 55,
          body: `<ul><li><strong>Nhìn trộm (peeking):</strong> kiểm tra kết quả liên tục và dừng khi thấy có ý nghĩa làm tỷ lệ dương tính giả tăng vọt, có thể từ 5% lên trên 30%. Giải pháp: cố định cỡ mẫu trước, hoặc dùng phương pháp kiểm định tuần tự được thiết kế cho việc theo dõi liên tục.</li><li><strong>Lệch tỷ lệ mẫu (SRM):</strong> bạn chia 50/50 nhưng thực tế là 50,8/49,2 với mẫu lớn. Đây là dấu hiệu có lỗi trong việc chia nhóm hoặc ghi nhận dữ liệu. Kết quả của thử nghiệm có SRM không đáng tin, dù trông đẹp đến đâu.</li><li><strong>So sánh nhiều lần:</strong> thử 20 chỉ số thì trung bình 1 chỉ số sẽ "có ý nghĩa" do ngẫu nhiên. Chọn một chỉ số chính từ trước.</li><li><strong>Cắt lát sau thử nghiệm:</strong> tìm phân đoạn có kết quả đẹp sau khi kết quả chung không như ý. Phát hiện kiểu này chỉ là giả thuyết cho thử nghiệm tiếp theo.</li><li><strong>Hiệu ứng mới lạ:</strong> người dùng phản ứng với cái mới rồi quen dần. Xem kết quả theo thời gian.</li><li><strong>Nhiễu giữa các nhóm:</strong> trong sàn giao dịch hoặc mạng xã hội, nhóm thử ảnh hưởng tới nhóm đối chứng.</li></ul>
<div class="callout"><b>Luật Twyman:</b> con số nào trông thú vị hoặc khác thường thì nhiều khả năng là sai. Kết quả quá tốt cần được kiểm tra lỗi trước khi ăn mừng.</div>`,
          res: ['exp-platform', 'kohavi-book']
        },
        {
          title: 'Từ kết quả tới quyết định', min: 35,
          body: `<h4>Khung quyết định</h4>
<table><tr><th>Kết quả</th><th>Hành động</th></tr>
<tr><td>Khoảng tin cậy nằm hẳn trên ngưỡng có ý nghĩa kinh doanh</td><td>Triển khai</td></tr>
<tr><td>Khoảng tin cậy nằm hẳn dưới không</td><td>Không triển khai, ghi nhận bài học</td></tr>
<tr><td>Khoảng tin cậy hẹp quanh không</td><td>Không có tác động đáng kể; quyết định theo chi phí và lý do khác</td></tr>
<tr><td>Khoảng tin cậy rộng, chứa cả giá trị âm lẫn dương lớn</td><td>Thử nghiệm thiếu lực; chạy lại với mẫu lớn hơn hoặc thay đổi mạnh hơn</td></tr></table>
<p>"Không có ý nghĩa thống kê" không có nghĩa là "không có tác động". Nó có nghĩa là thử nghiệm không đủ bằng chứng.</p>
<h4>Thư viện thử nghiệm</h4>
<p>Ghi lại mỗi thử nghiệm: giả thuyết, thiết kế, ảnh chụp các phiên bản, kết quả kèm khoảng tin cậy, quyết định và bài học. Sau một năm, thư viện này cho thấy loại ý tưởng nào hay thắng ở doanh nghiệp của bạn, và ngăn việc thử lại những điều đã biết.</p>
<p>Tổ chức có văn hoá thử nghiệm chấp nhận rằng phần lớn ý tưởng sẽ thua, và đo thành công bằng tốc độ học.</p>`,
          res: ['growthbook', 'kohavi-book']
        }
      ],
      takeaways: [
        'Ngẫu nhiên hoá là thứ biến tương quan thành nhân quả.',
        'p-value không phải xác suất phiên bản mới tốt hơn.',
        'Cỡ mẫu tăng theo bình phương khi muốn phát hiện thay đổi nhỏ hơn.',
        'Kiểm tra SRM và không nhìn trộm; kết quả quá đẹp thường là lỗi.'
      ],
      assignment: {
        title: 'Thiết kế một thử nghiệm A/B hoàn chỉnh',
        brief: `<ol><li>Chọn giả thuyết đứng đầu từ bài tập module 2.5.</li><li>Viết tài liệu thiết kế: giả thuyết, đơn vị ngẫu nhiên hoá, OEC, chỉ số rào chắn, MDE, mức ý nghĩa, lực kiểm định.</li><li>Dùng công cụ của Evan Miller tính cỡ mẫu và thời lượng dựa trên lưu lượng thật. Nếu không khả thi, điều chỉnh thiết kế và giải thích.</li><li>Viết trước quy tắc quyết định cho bốn kịch bản kết quả.</li><li>Đọc chương 1 (miễn phí) của sách Kohavi và tóm tắt ba ý quan trọng nhất.</li></ol>`,
        deliverable: 'Tài liệu thiết kế thử nghiệm hai trang.'
      },
      quiz: [
        { q: 'p-value 0,03 có nghĩa gì?', a: ['Có 97% khả năng phiên bản mới tốt hơn', 'Nếu thật sự không có khác biệt, xác suất thấy kết quả cực đoan như vậy là 3%', 'Phiên bản mới tốt hơn 3%', 'Có 3% khả năng giả thuyết không đúng'], correct: 1, why: 'p-value là xác suất của dữ liệu với điều kiện giả thuyết không đúng, không phải xác suất của giả thuyết.' },
        { q: 'Muốn phát hiện mức thay đổi nhỏ bằng một nửa, cỡ mẫu cần thay đổi thế nào?', a: ['Gấp đôi', 'Gấp bốn', 'Giảm một nửa', 'Không đổi'], correct: 1, why: 'Cỡ mẫu tỷ lệ nghịch với bình phương của mức thay đổi cần phát hiện.' },
        { q: 'Thử nghiệm chia 50/50 nhưng thực nhận 52/48 với mẫu rất lớn. Đây là gì và nên làm gì?', a: ['Bình thường, tiếp tục phân tích', 'Lệch tỷ lệ mẫu; kết quả không đáng tin, cần tìm lỗi', 'Hiệu ứng mới lạ; chờ thêm', 'So sánh nhiều lần; đổi chỉ số'], correct: 1, why: 'SRM cho thấy cơ chế chia nhóm hoặc ghi nhận dữ liệu có lỗi.' },
        { q: 'Vì sao dừng thử nghiệm ngay khi đạt ý nghĩa thống kê là sai?', a: ['Vì tốn chi phí', 'Vì kiểm tra lặp lại làm tỷ lệ dương tính giả tăng mạnh', 'Vì người dùng sẽ phản đối', 'Vì công cụ không cho phép'], correct: 1, why: 'Mỗi lần nhìn là một cơ hội để ngẫu nhiên vượt ngưỡng.' },
        { q: 'Kết quả "không có ý nghĩa thống kê" với khoảng tin cậy rất rộng nên được hiểu thế nào?', a: ['Thay đổi không có tác động', 'Thử nghiệm thiếu lực, chưa đủ bằng chứng để kết luận', 'Phiên bản mới kém hơn', 'Nên triển khai'], correct: 1, why: 'Khoảng tin cậy rộng nghĩa là tác động thật có thể lớn theo cả hai hướng.' }
      ],
      readings: ['exp-platform', 'brave-true']
    },
    {
      id: 'm5-5', hours: 8,
      title: 'Incrementality và suy luận nhân quả',
      summary: 'Đo tác động tăng thêm của quảng cáo bằng thử nghiệm theo người dùng, thử nghiệm theo địa lý và các phương pháp bán thực nghiệm.',
      objectives: [
        'Định nghĩa incrementality, lift và iROAS.',
        'Mô tả cách hoạt động của conversion lift trên nền tảng.',
        'Thiết kế thử nghiệm theo địa lý với nhóm đối chứng tổng hợp.',
        'Giải thích difference-in-differences và mô hình chuỗi thời gian nhân quả.',
        'Nêu vì sao đo hiệu quả quảng cáo khó về mặt thống kê.'
      ],
      lessons: [
        {
          title: 'Khái niệm incrementality', min: 40,
          body: `<p><strong>Incrementality</strong> là phần kết quả do quảng cáo gây ra, tức phần sẽ không xảy ra nếu không quảng cáo.</p>
<div class="formula"><code>Chuyển đổi tăng thêm = Chuyển đổi nhóm thử − Chuyển đổi nhóm đối chứng (đã quy đổi cùng quy mô)</code><br><code>Lift = Chuyển đổi tăng thêm ÷ Chuyển đổi nhóm đối chứng</code><br><code>iROAS = Doanh thu tăng thêm ÷ Chi phí quảng cáo</code><br><code>CPIA = Chi phí ÷ Chuyển đổi tăng thêm</code></div>
<p>Câu hỏi cốt lõi là <strong>phản thực tế (counterfactual)</strong>: điều gì sẽ xảy ra với chính những người này nếu họ không thấy quảng cáo? Ta không quan sát được điều đó trực tiếp, nên cần một nhóm đối chứng đủ giống.</p>
<h4>Ba cấp độ bằng chứng</h4>
<ol><li><strong>Thử nghiệm ngẫu nhiên theo người dùng:</strong> mạnh nhất.</li><li><strong>Thử nghiệm theo địa lý:</strong> ngẫu nhiên hoá ở cấp vùng, không cần dữ liệu cấp người dùng.</li><li><strong>Bán thực nghiệm trên dữ liệu quan sát:</strong> yếu hơn, phụ thuộc giả định.</li></ol>
<p>Thường thì iROAS thấp hơn ROAS do nền tảng báo cáo, đôi khi thấp hơn nhiều với remarketing và tìm kiếm thương hiệu. Đôi khi nó cao hơn, với các kênh đầu phễu mà attribution bỏ sót.</p>`,
          res: ['twg-measurement-playbook', 'haus-blog']
        },
        {
          title: 'Conversion lift trên nền tảng', min: 45,
          body: `<p>Meta và Google có công cụ <strong>conversion lift</strong>: nền tảng chia ngẫu nhiên người dùng đủ điều kiện thành nhóm được thấy quảng cáo và nhóm bị giữ lại (holdout), rồi so tỷ lệ chuyển đổi.</p>
<h4>Ưu điểm</h4>
<ul><li>Ngẫu nhiên hoá thật ở cấp người dùng.</li><li>Dùng định danh đăng nhập của nền tảng nên nối được nhiều thiết bị.</li><li>Chi phí thiết lập thấp.</li></ul>
<h4>Hạn chế</h4>
<ul><li>Chỉ đo được trong phạm vi một nền tảng.</li><li>Phụ thuộc tín hiệu chuyển đổi nền tảng nhận được; trên iOS tín hiệu bị hạn chế.</li><li>Cần đủ ngân sách và lượng chuyển đổi để có lực kiểm định. Thử nghiệm của Google Ads không mở cho mọi tài khoản.</li><li>Bạn tin vào cách nền tảng tự thực hiện và tự báo cáo.</li></ul>
<p>Cách đơn giản nhất nhưng thô hơn là <strong>thử nghiệm tắt bật</strong> có kiểm soát: tạm dừng một kênh hoặc một loại chiến dịch ở một số thị trường và quan sát tổng doanh thu. Phù hợp để kiểm tra các nghi vấn lớn như tìm kiếm thương hiệu hay remarketing.</p>`,
          res: ['meta-conversion-lift', 'google-conversion-lift']
        },
        {
          title: 'Thử nghiệm theo địa lý', min: 60,
          body: `<p>Khi không thể ngẫu nhiên hoá theo người dùng (nhiều kênh, không có định danh, kênh ngoại tuyến), ta ngẫu nhiên hoá theo <strong>vùng địa lý</strong>: tăng, giảm hoặc tắt quảng cáo ở một số vùng và so với các vùng còn lại.</p>
<h4>Các bước</h4>
<ol><li><strong>Chọn đơn vị địa lý</strong> mà nền tảng nhắm được và doanh thu ghi nhận được (tỉnh, thành phố, vùng).</li><li><strong>Dữ liệu lịch sử:</strong> doanh thu theo vùng theo ngày hoặc tuần, càng dài càng tốt.</li><li><strong>Chọn vùng thử và vùng đối chứng</strong> sao cho trước thử nghiệm chúng biến động giống nhau. Phương pháp <strong>đối chứng tổng hợp (synthetic control)</strong> ghép có trọng số nhiều vùng đối chứng để mô phỏng vùng thử.</li><li><strong>Phân tích lực kiểm định</strong> bằng mô phỏng trên dữ liệu lịch sử: cần bao nhiêu vùng, bao lâu, thay đổi chi tiêu lớn cỡ nào để phát hiện được lift.</li><li><strong>Chạy</strong>, thường 2 đến 6 tuần, cộng thêm thời gian theo dõi sau đó.</li><li><strong>Ước lượng</strong> chênh lệch giữa thực tế ở vùng thử và phản thực tế do mô hình dựng.</li></ol>
<p>Google công bố phương pháp từ năm 2011 (Vaver và Koehler) và hồi quy theo thời gian (Kerman và cộng sự, 2017). Meta phát hành <strong>GeoLift</strong>, gói mã nguồn mở thực hiện toàn bộ quy trình trên, gồm cả phân tích lực kiểm định.</p>`,
          res: ['geolift', 'google-geo-experiments']
        },
        {
          title: 'Phương pháp bán thực nghiệm', min: 55,
          body: `<p>Khi không thể làm thử nghiệm, một số phương pháp giúp tiến gần tới nhân quả, với điều kiện giả định của chúng đúng.</p>
<ul><li><strong>Difference-in-differences (DiD):</strong> so thay đổi trước và sau của nhóm bị tác động với thay đổi của nhóm không bị tác động. Giả định chính: nếu không có tác động, hai nhóm sẽ đi theo xu hướng song song.</li><li><strong>CausalImpact</strong> (Google): mô hình chuỗi thời gian cấu trúc Bayes. Dùng các chuỗi không bị ảnh hưởng để dự báo chuỗi mục tiêu sẽ ra sao nếu không có can thiệp, rồi so với thực tế.</li><li><strong>Đối chứng tổng hợp:</strong> đã nêu ở bài trước.</li><li><strong>Regression discontinuity, biến công cụ:</strong> dùng khi có ngưỡng hoặc nguồn biến thiên ngẫu nhiên tự nhiên.</li></ul>
<h4>Điều kiện để tin kết quả</h4>
<ul><li>Không có sự kiện khác xảy ra đồng thời (khuyến mãi, thay đổi giá, mùa vụ lệch).</li><li>Nhóm so sánh không bị ảnh hưởng bởi can thiệp.</li><li>Mô hình dự báo tốt trong giai đoạn trước can thiệp.</li></ul>
<p>Hai giáo trình miễn phí rất tốt: <em>Causal Inference for the Brave and True</em> (Python) và <em>Causal Inference: The Mixtape</em> (R, Stata).</p>`,
          res: ['causalimpact', 'brave-true', 'mixtape']
        },
        {
          title: 'Vì sao đo hiệu quả quảng cáo lại khó', min: 40,
          body: `<p>Lewis và Rao (Quarterly Journal of Economics, 2015) phân tích 25 thử nghiệm quảng cáo quy mô lớn và chỉ ra một vấn đề nền tảng: <strong>tác động của quảng cáo nhỏ so với độ nhiễu của hành vi mua</strong>.</p>
<p>Chi tiêu của từng người dao động rất mạnh, trong khi một chiến dịch chỉ làm thay đổi nó chút ít. Để phân biệt một chiến dịch có ROI dương với một chiến dịch lỗ, cần hàng triệu người dùng mỗi nhóm. Nhiều thử nghiệm ngoài thực tế vì thế thiếu lực kiểm định và cho khoảng tin cậy rất rộng.</p>
<h4>Hệ quả thực hành</h4>
<ul><li>Kỳ vọng thực tế: một thử nghiệm thường cho biết kênh "rõ ràng có tác dụng", "rõ ràng không" hoặc "chưa đủ bằng chứng", ít khi cho con số chính xác.</li><li>Thử những khác biệt lớn (tắt hẳn, gấp đôi ngân sách) để tăng tín hiệu.</li><li>Dùng chỉ số ít nhiễu hơn khi phù hợp (số chuyển đổi thay vì doanh thu).</li><li>Lặp lại thử nghiệm định kỳ và gộp bằng chứng qua thời gian.</li><li>Cẩn trọng với nhà cung cấp hứa đo chính xác ROI của mọi kênh chỉ bằng dữ liệu quan sát.</li></ul>`,
          res: ['lewis-rao', 'gordon-close-enough']
        }
      ],
      takeaways: [
        'Incrementality so với phản thực tế, không so với con số trước đó.',
        'Conversion lift mạnh nhưng chỉ trong một nền tảng; thử nghiệm địa lý dùng được xuyên kênh.',
        'Bán thực nghiệm chỉ đáng tin khi giả định của nó đứng vững.',
        'Tác động quảng cáo nhỏ so với nhiễu, nên thử nghiệm cần quy mô lớn và khác biệt lớn.'
      ],
      assignment: {
        title: 'Thiết kế thử nghiệm incrementality theo địa lý',
        brief: `<ol><li>Chọn một kênh hoặc loại chiến dịch bạn nghi ngờ về tính tăng thêm (ví dụ tìm kiếm thương hiệu, remarketing).</li><li>Liệt kê các vùng địa lý có thể dùng và nguồn dữ liệu doanh thu theo vùng.</li><li>Viết thiết kế: vùng thử, vùng đối chứng, loại can thiệp (tắt, giảm, tăng), thời lượng, chỉ số, rủi ro gây nhiễu.</li><li>Nếu biết R hoặc Python, chạy ví dụ mẫu của GeoLift hoặc CausalImpact. Nếu không, đọc tài liệu hướng dẫn và mô tả các bước bằng lời.</li><li>Viết trước: kết quả nào sẽ khiến bạn cắt, giữ hoặc tăng ngân sách.</li></ol>`,
        deliverable: 'Bản thiết kế thử nghiệm địa lý hai trang.'
      },
      quiz: [
        { q: 'iROAS được tính thế nào?', a: ['Doanh thu nền tảng ghi nhận ÷ chi phí', 'Doanh thu tăng thêm ÷ chi phí quảng cáo', 'Tổng doanh thu ÷ tổng chi phí', 'Lợi nhuận ÷ doanh thu'], correct: 1, why: 'iROAS chỉ tính phần doanh thu do quảng cáo gây ra.' },
        { q: 'Khi nào thử nghiệm theo địa lý phù hợp hơn conversion lift của nền tảng?', a: ['Khi chỉ chạy một nền tảng', 'Khi cần đo xuyên nhiều kênh hoặc không có định danh cấp người dùng', 'Khi ngân sách rất nhỏ', 'Khi cần kết quả trong một ngày'], correct: 1, why: 'Thử nghiệm địa lý không phụ thuộc định danh người dùng và đo được tổng tác động.' },
        { q: 'Giả định chính của difference-in-differences là gì?', a: ['Hai nhóm có cùng quy mô', 'Nếu không có can thiệp, hai nhóm sẽ theo xu hướng song song', 'Dữ liệu phân phối chuẩn', 'Không có mùa vụ'], correct: 1, why: 'DiD dựa vào giả định xu hướng song song.' },
        { q: 'Kết luận chính của Lewis và Rao là gì?', a: ['Quảng cáo không có tác dụng', 'Tác động quảng cáo nhỏ so với độ nhiễu của hành vi mua, nên đo ROI chính xác cần mẫu khổng lồ', 'Last click là mô hình tốt nhất', 'Thử nghiệm địa lý không đáng tin'], correct: 1, why: 'Bài báo cho thấy giới hạn thống kê của việc đo lợi suất quảng cáo.' },
        { q: 'Đối chứng tổng hợp (synthetic control) là gì?', a: ['Nhóm người dùng giả', 'Tổ hợp có trọng số của nhiều vùng đối chứng để mô phỏng vùng thử', 'Dữ liệu do AI sinh ra', 'Nhóm đối chứng chọn ngẫu nhiên'], correct: 1, why: 'Phương pháp này dựng phản thực tế từ các đơn vị không bị tác động.' }
      ],
      readings: ['google-geo-experiments', 'blake-nosko-tadelis']
    },
    {
      id: 'm5-6', hours: 8,
      title: 'Marketing Mix Modeling và khung đo lường hợp nhất',
      summary: 'Nguyên lý MMM, các công cụ mã nguồn mở Meridian, Robyn, PyMC-Marketing và cách kết hợp MMM, attribution, thử nghiệm.',
      objectives: [
        'Giải thích MMM đo gì và cần dữ liệu gì.',
        'Mô tả hiệu ứng tồn lưu (adstock) và bão hoà.',
        'Nêu vai trò của tiên nghiệm Bayes và hiệu chỉnh bằng thử nghiệm.',
        'So sánh Meridian, Robyn và PyMC-Marketing.',
        'Xây khung đo lường tam giác cho một doanh nghiệp.'
      ],
      lessons: [
        {
          title: 'MMM là gì', min: 45,
          body: `<p><strong>Marketing mix modeling</strong> là mô hình hồi quy trên dữ liệu chuỗi thời gian tổng hợp, ước lượng đóng góp của từng kênh marketing và các yếu tố khác vào doanh số.</p>
<div class="formula"><code>Doanh số(t) = Nền + Σ Đóng góp kênh i(t) + Mùa vụ + Giá, khuyến mãi + Yếu tố bên ngoài + Sai số</code></div>
<h4>Vì sao MMM quay trở lại</h4>
<ul><li>Không cần dữ liệu cấp người dùng, nên không bị ảnh hưởng bởi thay đổi quyền riêng tư.</li><li>Bao phủ cả kênh ngoại tuyến (TV, ngoài trời) và yếu tố phi marketing.</li><li>Công cụ mã nguồn mở từ Google và Meta làm giảm mạnh chi phí thực hiện.</li></ul>
<h4>Dữ liệu cần có</h4>
<ul><li>Thường 2 đến 3 năm dữ liệu theo tuần.</li><li>Biến kết quả: doanh thu, đơn hàng, cài đặt.</li><li>Biến media: chi tiêu và lượt hiển thị theo kênh.</li><li>Biến kiểm soát: giá, khuyến mãi, mùa vụ, ngày lễ, phân phối, hoạt động đối thủ, yếu tố vĩ mô.</li></ul>
<p>MMM trả lời câu hỏi chiến lược: kênh nào đóng góp bao nhiêu, lợi suất biên mỗi kênh ra sao, nên chuyển ngân sách thế nào. Nó không dùng để tối ưu từng quảng cáo hằng ngày.</p>`,
          res: ['twg-measurement-playbook', 'recast-blog']
        },
        {
          title: 'Tồn lưu và bão hoà', min: 50,
          body: `<p>Hai biến đổi làm MMM khác hồi quy tuyến tính thông thường:</p>
<p><strong>Adstock (hiệu ứng tồn lưu):</strong> quảng cáo tuần này còn tác động tới các tuần sau. Dạng đơn giản nhất là suy giảm hình học:</p>
<div class="formula"><code>Adstock(t) = Chi tiêu(t) + λ × Adstock(t−1)</code>, với 0 ≤ λ &lt; 1 là tỷ lệ lưu giữ</div>
<p>λ cao (TV, video thương hiệu) nghĩa là tác động kéo dài. λ thấp (tìm kiếm) nghĩa là tác động gần như tức thời.</p>
<p><strong>Bão hoà (lợi suất giảm dần):</strong> chi gấp đôi không mang về gấp đôi. Thường dùng hàm Hill hoặc đường cong chữ S:</p>
<div class="formula"><code>Hiệu ứng = x<sup>s</sup> ÷ (x<sup>s</sup> + K<sup>s</sup>)</code>, với K là điểm đạt một nửa hiệu ứng tối đa</div>
<p>Từ đường cong bão hoà của mỗi kênh, ta có <strong>đường cong phản ứng</strong>: mỗi mức chi tiêu mang về bao nhiêu. Độ dốc tại mức chi hiện tại chính là ROAS biên, đại lượng dùng để tối ưu phân bổ ngân sách ở module 3.6.</p>
<p>Bài báo của Jin và cộng sự (Google, 2017) là tài liệu gốc mô tả cách ước lượng đồng thời hai hiệu ứng này bằng phương pháp Bayes.</p>`,
          res: ['jin-mmm-paper', 'pymc-marketing']
        },
        {
          title: 'Thách thức và hiệu chỉnh bằng thử nghiệm', min: 50,
          body: `<p>Chan và Perry (Google, 2017) liệt kê các thách thức cố hữu của MMM:</p>
<ul><li><strong>Ít dữ liệu:</strong> ba năm theo tuần chỉ có khoảng 150 điểm, trong khi phải ước lượng hàng chục tham số.</li><li><strong>Đa cộng tuyến:</strong> các kênh thường tăng giảm ngân sách cùng lúc, khó tách tác động riêng.</li><li><strong>Thiên lệch chọn lọc:</strong> ngân sách được tăng khi nhu cầu cao (mùa lễ). Mô hình dễ nhầm nhu cầu tự nhiên thành tác động quảng cáo. Tìm kiếm trả phí đặc biệt dễ bị đánh giá quá cao.</li><li><strong>Biến thiên thấp:</strong> kênh có chi tiêu ổn định qua thời gian thì không ước lượng được.</li></ul>
<h4>Cách giảm thiểu</h4>
<ul><li><strong>Tiên nghiệm Bayes:</strong> đưa hiểu biết sẵn có vào mô hình, ví dụ ROI của một kênh nằm trong khoảng hợp lý nào.</li><li><strong>Hiệu chỉnh bằng thử nghiệm:</strong> dùng kết quả thử nghiệm incrementality làm tiên nghiệm hoặc ràng buộc. Đây là thực hành quan trọng nhất của MMM hiện đại.</li><li><strong>Dữ liệu theo vùng địa lý</strong> thay vì chỉ toàn quốc, để tăng số quan sát.</li><li><strong>Chủ động tạo biến thiên</strong> trong ngân sách.</li><li><strong>Kiểm tra ngoài mẫu:</strong> mô hình có dự báo đúng giai đoạn chưa từng thấy không.</li></ul>`,
          res: ['chan-perry-mmm', 'recast-blog']
        },
        {
          title: 'Công cụ mã nguồn mở', min: 50,
          body: `<table><tr><th>Công cụ</th><th>Tổ chức</th><th>Ngôn ngữ</th><th>Đặc điểm</th></tr>
<tr><td><strong>Meridian</strong></td><td>Google</td><td>Python</td><td>Bayes, mô hình phân cấp theo vùng địa lý, hỗ trợ độ phủ và tần suất, hiệu chỉnh bằng thử nghiệm. Kế nhiệm LightweightMMM (đã lưu trữ đầu 2026)</td></tr>
<tr><td><strong>Robyn</strong></td><td>Meta Marketing Science</td><td>R</td><td>Hồi quy ridge, tối ưu siêu tham số đa mục tiêu, cho nhiều mô hình ứng viên để chọn, có hiệu chỉnh bằng thử nghiệm</td></tr>
<tr><td><strong>PyMC-Marketing</strong></td><td>PyMC Labs</td><td>Python</td><td>Bayes, linh hoạt cao, gồm cả mô hình CLV; tài liệu có lộ trình học MMM</td></tr></table>
<p>Cả ba đều miễn phí. Chi phí thật nằm ở việc thu thập và làm sạch dữ liệu, kiến thức thống kê để chẩn đoán mô hình và thời gian diễn giải.</p>
<h4>Lộ trình cho người mới</h4>
<ol><li>Đọc tài liệu khái niệm của Meridian hoặc lộ trình MMM của PyMC-Marketing.</li><li>Chạy sổ tay mẫu với dữ liệu mô phỏng đi kèm.</li><li>Thử với dữ liệu thật của bạn; chú ý phần chẩn đoán (hội tụ, độ khớp, tính hợp lý của ROI).</li><li>So kết quả với thử nghiệm đã có.</li></ol>
<p>Nếu chưa có năng lực nội bộ, vẫn nên hiểu nguyên lý để đặt câu hỏi đúng cho nhà cung cấp MMM.</p>`,
          res: ['meridian', 'robyn', 'pymc-marketing']
        },
        {
          title: 'Khung đo lường tam giác', min: 45,
          body: `<p>Không phương pháp nào đủ một mình. Thực hành tốt nhất hiện nay, được Google trình bày trong <em>Modern Measurement Playbook</em> và nhiều tổ chức khác chia sẻ, là kết hợp ba phương pháp:</p>
<table><tr><th></th><th>Attribution</th><th>Thử nghiệm incrementality</th><th>MMM</th></tr>
<tr><td>Trả lời</td><td>Điểm chạm nào đi trước chuyển đổi</td><td>Kênh này có gây ra kết quả không</td><td>Chia ngân sách giữa các kênh thế nào</td></tr>
<tr><td>Độ chi tiết</td><td>Quảng cáo, từ khoá</td><td>Kênh, chiến dịch</td><td>Kênh</td></tr>
<tr><td>Tần suất</td><td>Hằng ngày</td><td>Vài lần mỗi năm cho mỗi kênh</td><td>Hằng quý, hằng tháng</td></tr>
<tr><td>Điểm yếu</td><td>Không nhân quả</td><td>Tốn kém, một thời điểm</td><td>Thô, phụ thuộc giả định</td></tr></table>
<h4>Cách chúng bổ trợ nhau</h4>
<ul><li>Thử nghiệm <strong>hiệu chỉnh</strong> MMM và tạo hệ số tăng thêm cho attribution.</li><li>MMM <strong>chỉ ra</strong> kênh nào đáng thử nghiệm tiếp, và phân bổ ngân sách cấp chiến lược.</li><li>Attribution đã hiệu chỉnh <strong>điều hành</strong> tối ưu hằng ngày.</li></ul>
<p>Nghiên cứu Profit Ability 2 của Thinkbox (Anh) dùng kinh tế lượng trên dữ liệu nhiều thương hiệu, cho thấy phần lớn lợi nhuận từ quảng cáo đến sau tuần đầu tiên, điều mà đo lường ngắn hạn bỏ sót.</p>`,
          res: ['twg-measurement-playbook', 'thinkbox-profit-ability', 'ipa-making-effectiveness-work']
        }
      ],
      takeaways: [
        'MMM dùng dữ liệu tổng hợp nên bền vững trước thay đổi quyền riêng tư.',
        'Adstock và bão hoà là hai khái niệm lõi; đường cong phản ứng cho ROAS biên.',
        'MMM không hiệu chỉnh bằng thử nghiệm dễ đánh giá quá cao kênh cuối phễu.',
        'Kết hợp attribution, thử nghiệm và MMM; mỗi phương pháp sửa điểm yếu của phương pháp kia.'
      ],
      assignment: {
        title: 'Khung đo lường cho doanh nghiệp của bạn',
        brief: `<ol><li>Kiểm kê dữ liệu: bạn có bao nhiêu tuần dữ liệu doanh thu, chi tiêu theo kênh, khuyến mãi, giá? Thiếu gì?</li><li>Với hai kênh, tự tính adstock (thử λ = 0,3 và 0,7) trong bảng tính và vẽ so với chi tiêu gốc.</li><li>Chạy một sổ tay mẫu của Meridian hoặc PyMC-Marketing trên dữ liệu mô phỏng (tuỳ chọn, cần Python).</li><li>Viết khung đo lường một trang: phương pháp nào cho quyết định nào, tần suất, người chịu trách nhiệm, lộ trình 12 tháng.</li></ol>`,
        deliverable: 'Bảng kiểm kê dữ liệu, bảng tính adstock và khung đo lường một trang.'
      },
      quiz: [
        { q: 'Adstock mô hình hoá điều gì?', a: ['Chi phí tồn kho', 'Tác động của quảng cáo kéo dài sang các kỳ sau', 'Số quảng cáo đang chạy', 'Tỷ lệ gian lận'], correct: 1, why: 'Adstock thể hiện hiệu ứng tồn lưu của quảng cáo theo thời gian.' },
        { q: 'Vì sao MMM không bị ảnh hưởng nhiều bởi thay đổi quyền riêng tư?', a: ['Vì dùng fingerprinting', 'Vì dùng dữ liệu tổng hợp theo thời gian, không cần dữ liệu cấp người dùng', 'Vì chỉ đo kênh ngoại tuyến', 'Vì được Apple cho phép'], correct: 1, why: 'MMM làm việc trên chuỗi thời gian tổng hợp.' },
        { q: 'Vì sao MMM dễ đánh giá quá cao tìm kiếm trả phí?', a: ['Vì CPC cao', 'Vì chi tiêu tìm kiếm tăng cùng nhu cầu tự nhiên, mô hình nhầm nhu cầu thành tác động quảng cáo', 'Vì tìm kiếm có adstock cao', 'Vì thiếu dữ liệu'], correct: 1, why: 'Đây là thiên lệch chọn lọc do ngân sách đi theo nhu cầu.' },
        { q: 'Công cụ nào do Google phát triển và kế nhiệm LightweightMMM?', a: ['Robyn', 'Meridian', 'PyMC-Marketing', 'GeoLift'], correct: 1, why: 'Meridian là thư viện MMM mã nguồn mở hiện hành của Google.' },
        { q: 'Trong khung tam giác, phương pháp nào phù hợp nhất để tối ưu từng quảng cáo hằng ngày?', a: ['MMM', 'Thử nghiệm địa lý', 'Attribution đã hiệu chỉnh', 'Khảo sát thương hiệu'], correct: 2, why: 'Attribution có độ chi tiết và tần suất cần cho tối ưu trong kênh.' }
      ],
      readings: ['ipa-effectiveness-context', 'lewis-rao']
    }
  ]
});
