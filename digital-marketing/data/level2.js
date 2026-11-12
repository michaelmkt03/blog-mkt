COURSE.levels.push({
  id: 'L2', num: 2, color: '#0b8a8a',
  title: 'Các kênh cốt lõi: SEO, Content, Social, Email, Website',
  short: 'Kênh cốt lõi',
  stage: 'Cơ bản',
  tagline: 'Làm chủ các kênh owned và earned trước khi trả tiền mua lưu lượng.',
  intro: 'Level 2 đi qua năm năng lực mà mọi marketer digital cần có: tối ưu tìm kiếm, nội dung, mạng xã hội, email và trang đích. Đây là những tài sản bạn sở hữu. Chúng quyết định mỗi đồng quảng cáo ở Level 3 sinh lời hay bị lãng phí.',
  prereq: 'Hoàn thành Level 1',
  milestone: 'Chứng chỉ HubSpot Content hoặc Inbound, cùng một bản audit SEO và trang đích',
  outcomes: [
    'Thực hiện nghiên cứu từ khoá, tối ưu on-page và audit kỹ thuật cơ bản cho một website.',
    'Xây chiến lược nội dung theo cụm chủ đề và lịch biên tập ba tháng.',
    'Lập chiến lược mạng xã hội tự nhiên có mục tiêu, trụ nội dung và cách đo.',
    'Thiết kế chuỗi email vòng đời và đảm bảo khả năng vào hộp thư.',
    'Đánh giá và cải thiện một trang đích dựa trên nguyên tắc UX và dữ liệu hành vi.'
  ],
  modules: [
    {
      id: 'm2-1', hours: 9,
      title: 'SEO: tối ưu công cụ tìm kiếm',
      summary: 'Cách công cụ tìm kiếm hoạt động, nghiên cứu từ khoá, on-page, kỹ thuật, liên kết và đo lường bằng Search Console.',
      objectives: [
        'Giải thích ba giai đoạn thu thập, lập chỉ mục và xếp hạng của Google.',
        'Nghiên cứu từ khoá và phân loại theo ý định tìm kiếm.',
        'Tối ưu tiêu đề, cấu trúc nội dung và liên kết nội bộ của một trang.',
        'Đọc được Core Web Vitals và phát hiện lỗi kỹ thuật phổ biến.',
        'Đánh giá chất lượng nội dung theo khung E-E-A-T.',
        'Dùng Search Console để theo dõi hiệu quả tìm kiếm tự nhiên.'
      ],
      lessons: [
        {
          title: 'Công cụ tìm kiếm hoạt động thế nào', min: 45,
          body: `<p>Google mô tả ba giai đoạn trong tài liệu chính thức:</p>
<ol><li><strong>Crawling:</strong> Googlebot tìm và tải trang qua liên kết và sitemap.</li><li><strong>Indexing:</strong> phân tích nội dung, xác định trang chuẩn (canonical) và lưu vào chỉ mục.</li><li><strong>Serving:</strong> với mỗi truy vấn, hệ thống xếp hạng các trang phù hợp theo hàng trăm tín hiệu về mức liên quan, chất lượng, khả năng sử dụng và bối cảnh người tìm.</li></ol>
<p>Một trang không được thu thập hoặc không vào chỉ mục thì không thể xếp hạng, dù nội dung tốt đến đâu. Vì vậy kiểm tra kỹ thuật luôn đi trước tối ưu nội dung.</p>
<p><strong>Search Essentials</strong> của Google gồm ba phần: yêu cầu kỹ thuật tối thiểu, chính sách chống spam và các thực hành tốt. Đây là nguồn gốc. Phần lớn "bí quyết SEO" trên mạng là suy diễn từ đây.</p>`,
          res: ['google-seo-starter', 'ahrefs-seo-course']
        },
        {
          title: 'Nghiên cứu từ khoá và ý định tìm kiếm', min: 60,
          body: `<p>Từ khoá là cách người dùng diễn đạt nhu cầu. Mỗi truy vấn mang một <strong>ý định</strong>:</p>
<table><tr><th>Ý định</th><th>Ví dụ</th><th>Loại trang phù hợp</th></tr>
<tr><td>Thông tin</td><td>"cách chọn khách sạn gần chợ Bến Thành"</td><td>Bài hướng dẫn, blog</td></tr>
<tr><td>Điều hướng</td><td>"tên thương hiệu + đăng nhập"</td><td>Trang chủ, trang thương hiệu</td></tr>
<tr><td>Thương mại</td><td>"khách sạn boutique quận 1 tốt nhất"</td><td>Bài so sánh, danh sách</td></tr>
<tr><td>Giao dịch</td><td>"đặt phòng khách sạn quận 1"</td><td>Trang sản phẩm, trang đặt</td></tr></table>
<p>Quy trình: thu thập từ khoá hạt giống → mở rộng bằng công cụ và gợi ý tìm kiếm → đánh giá theo lượng tìm, độ khó và giá trị kinh doanh → gom nhóm theo chủ đề → gán mỗi nhóm cho một trang duy nhất để tránh các trang tự cạnh tranh nhau (keyword cannibalization).</p>
<p>Cách nhanh nhất để hiểu ý định là xem trang kết quả thật: Google đang xếp hạng loại nội dung nào cho truy vấn đó thì đó là loại nội dung người tìm muốn.</p>`,
          res: ['ahrefs-seo-course', 'semrush-academy', 'google-trends']
        },
        {
          title: 'On-page và chất lượng nội dung', min: 60,
          body: `<p><strong>Yếu tố on-page cốt lõi:</strong> thẻ tiêu đề mô tả đúng nội dung và chứa chủ đề chính, mô tả meta thuyết phục người nhấp, một thẻ H1, cấu trúc đề mục rõ ràng, URL ngắn, ảnh có văn bản thay thế, liên kết nội bộ với anchor text mô tả.</p>
<p>Về chất lượng, Google khuyến nghị nội dung <strong>hữu ích, đáng tin cậy, viết cho con người</strong>. Bộ hướng dẫn dành cho người đánh giá chất lượng tìm kiếm dùng khung <strong>E-E-A-T</strong>:</p>
<ul><li><strong>Experience:</strong> người viết có trải nghiệm thật với chủ đề.</li><li><strong>Expertise:</strong> có chuyên môn.</li><li><strong>Authoritativeness:</strong> được công nhận là nguồn uy tín.</li><li><strong>Trust:</strong> chính xác, minh bạch, an toàn. Đây là yếu tố quan trọng nhất.</li></ul>
<p>E-E-A-T không phải một điểm số kỹ thuật mà là mô tả loại nội dung hệ thống xếp hạng hướng tới. Với chủ đề ảnh hưởng tới sức khoẻ, tài chính, an toàn (YMYL), yêu cầu này cao hơn nhiều.</p>`,
          res: ['google-helpful-content', 'google-qrg', 'backlinko-hub']
        },
        {
          title: 'SEO kỹ thuật và Core Web Vitals', min: 60,
          body: `<p>Danh sách kiểm tra kỹ thuật tối thiểu:</p>
<ul><li><strong>Khả năng thu thập:</strong> robots.txt không chặn nhầm, sitemap XML cập nhật, không có chuỗi chuyển hướng dài.</li><li><strong>Khả năng lập chỉ mục:</strong> thẻ canonical đúng, không dùng noindex nhầm, xử lý nội dung trùng lặp.</li><li><strong>Mã trạng thái:</strong> 200 cho trang hợp lệ, 301 khi chuyển vĩnh viễn, 404 hoặc 410 cho trang đã xoá.</li><li><strong>Thân thiện di động và HTTPS.</strong></li><li><strong>Dữ liệu có cấu trúc</strong> (Schema.org) để đủ điều kiện hiển thị kết quả nhiều định dạng.</li></ul>
<p><strong>Core Web Vitals</strong> đo trải nghiệm tải trang trên dữ liệu người dùng thật:</p>
<table><tr><th>Chỉ số</th><th>Đo điều gì</th><th>Ngưỡng tốt</th></tr>
<tr><td>LCP</td><td>Thời gian hiển thị phần tử nội dung lớn nhất</td><td>≤ 2,5 giây</td></tr>
<tr><td>INP</td><td>Độ trễ phản hồi khi người dùng tương tác</td><td>≤ 200 ms</td></tr>
<tr><td>CLS</td><td>Mức xê dịch bố cục ngoài ý muốn</td><td>≤ 0,1</td></tr></table>`,
          res: ['webdev-cwv', 'screamingfrog-learn', 'pagespeed-insights']
        },
        {
          title: 'Liên kết, độ uy tín và SEO địa phương', min: 45,
          body: `<p>Liên kết từ website khác vẫn là tín hiệu về độ uy tín. Chất lượng quan trọng hơn số lượng: một liên kết biên tập từ nguồn liên quan và có uy tín đáng giá hơn hàng trăm liên kết từ thư mục rác. Mua liên kết và trao đổi liên kết quy mô lớn vi phạm chính sách spam của Google.</p>
<p>Các cách kiếm liên kết bền vững: nội dung gốc có dữ liệu riêng, công cụ miễn phí, quan hệ báo chí số (digital PR), hợp tác với đối tác trong ngành.</p>
<p>Với doanh nghiệp có địa điểm, <strong>SEO địa phương</strong> xoay quanh Google Business Profile: thông tin tên, địa chỉ, số điện thoại thống nhất, danh mục đúng, ảnh thật, và đặc biệt là số lượng, chất lượng và độ mới của đánh giá.</p>`,
          res: ['learningseo', 'google-spam-policies']
        },
        {
          title: 'Đo lường SEO và bối cảnh tìm kiếm bằng AI', min: 45,
          body: `<p><strong>Google Search Console</strong> là nguồn dữ liệu gốc về tìm kiếm tự nhiên: lượt hiển thị, lượt nhấp, CTR và vị trí trung bình theo truy vấn và theo trang, cùng báo cáo lập chỉ mục và Core Web Vitals. Ba phân tích nên làm hằng tháng:</p>
<ul><li>Truy vấn có nhiều lượt hiển thị nhưng CTR thấp → viết lại tiêu đề và mô tả.</li><li>Trang đang ở vị trí 5 đến 15 → cơ hội cải thiện nhanh nhất.</li><li>Trang mất lượt nhấp so với kỳ trước → kiểm tra nội dung lỗi thời hoặc đối thủ mới.</li></ul>
<p>Từ 2024, Google hiển thị <strong>AI Overviews</strong> và sau đó là <strong>AI Mode</strong>, các câu trả lời tổng hợp có trích nguồn. Tài liệu của Google nêu rõ không cần đánh dấu đặc biệt nào để xuất hiện trong các tính năng này; các thực hành SEO nền tảng vẫn áp dụng, và lưu lượng từ đó được tính chung trong Search Console. Tác động tới lượt nhấp và kỹ thuật tối ưu cho công cụ AI được học riêng ở Level 6.</p>`,
          res: ['gsc-start', 'google-ai-features']
        }
      ],
      takeaways: [
        'Không vào chỉ mục thì không có thứ hạng. Kỹ thuật đi trước nội dung.',
        'Mỗi nhóm từ khoá một trang, loại trang phải khớp ý định tìm kiếm.',
        'E-E-A-T mô tả nội dung mà hệ thống hướng tới, trong đó độ tin cậy là trung tâm.',
        'Search Console là nguồn sự thật về tìm kiếm tự nhiên, hãy đọc nó hằng tháng.'
      ],
      assignment: {
        title: 'Audit SEO mini và bản đồ từ khoá',
        brief: `<ol><li>Chọn một website (của bạn hoặc một doanh nghiệp nhỏ). Chạy PageSpeed Insights cho ba trang quan trọng nhất và ghi lại LCP, INP, CLS.</li><li>Kiểm tra robots.txt, sitemap, thẻ tiêu đề, H1 và canonical của 10 trang. Ghi lỗi vào bảng theo mức ưu tiên.</li><li>Lập bản đồ 30 từ khoá: từ khoá, ý định, lượng tìm ước tính, trang đích được gán.</li><li>Viết lại tiêu đề và mô tả meta cho 5 trang có tiềm năng nhất.</li></ol>`,
        deliverable: 'Bảng audit có xếp hạng ưu tiên và bản đồ từ khoá.'
      },
      quiz: [
        { q: 'Trang không xuất hiện trong chỉ mục của Google. Việc nào nên kiểm tra đầu tiên?', a: ['Mật độ từ khoá', 'Số liên kết ngoài trỏ về', 'Robots.txt, thẻ noindex và canonical', 'Độ dài bài viết'], correct: 2, why: 'Vấn đề lập chỉ mục thường đến từ chặn thu thập, noindex hoặc canonical sai.' },
        { q: 'Truy vấn "so sánh máy lọc không khí tốt nhất 2026" mang ý định gì?', a: ['Điều hướng', 'Thương mại (đang cân nhắc)', 'Giao dịch', 'Thông tin thuần tuý'], correct: 1, why: 'Người tìm đang so sánh lựa chọn trước khi mua, đây là ý định thương mại.' },
        { q: 'Chỉ số Core Web Vitals nào đo độ phản hồi khi người dùng tương tác?', a: ['LCP', 'CLS', 'INP', 'TTFB'], correct: 2, why: 'INP (Interaction to Next Paint) đo độ trễ phản hồi tương tác, ngưỡng tốt là 200 ms trở xuống.' },
        { q: 'Trong E-E-A-T, yếu tố nào được coi là trung tâm?', a: ['Experience', 'Expertise', 'Authoritativeness', 'Trust'], correct: 3, why: 'Hướng dẫn đánh giá chất lượng của Google xem Trust là yếu tố quan trọng nhất.' },
        { q: 'Trang có nhiều lượt hiển thị, vị trí trung bình 3 nhưng CTR rất thấp. Hành động hợp lý nhất?', a: ['Xây thêm liên kết', 'Viết lại tiêu đề và mô tả meta', 'Xoá trang', 'Tăng tốc độ tải'], correct: 1, why: 'Vị trí đã tốt nhưng ít người nhấp cho thấy đoạn hiển thị trên trang kết quả chưa hấp dẫn.' }
      ],
      readings: ['ucdavis-seo', 'moz-beginners', 'google-search-essentials']
    },
    {
      id: 'm2-2', hours: 7,
      title: 'Content marketing và Inbound',
      summary: 'Phương pháp inbound, chiến lược nội dung theo cụm chủ đề, kỹ thuật viết và cách phân phối, đo lường nội dung.',
      objectives: [
        'Trình bày phương pháp inbound và mô hình bánh đà.',
        'Thiết kế cụm chủ đề gồm trang trụ và các bài vệ tinh.',
        'Áp dụng các khung viết AIDA, PAS và nguyên tắc nội dung dễ nhớ.',
        'Lập lịch biên tập và kế hoạch phân phối, tái sử dụng nội dung.',
        'Chọn chỉ số đo nội dung theo từng giai đoạn hành trình.'
      ],
      lessons: [
        {
          title: 'Phương pháp inbound và bánh đà', min: 40,
          body: `<p><strong>Inbound marketing</strong>, khái niệm do HubSpot phổ biến, thu hút khách hàng bằng nội dung và trải nghiệm có ích thay vì ngắt quãng họ. Ba giai đoạn:</p>
<ul><li><strong>Attract:</strong> đưa đúng người tới bằng nội dung giải quyết vấn đề của họ.</li><li><strong>Engage:</strong> cung cấp giải pháp và thông tin phù hợp để họ sẵn sàng mua.</li><li><strong>Delight:</strong> hỗ trợ để khách thành công và trở thành người giới thiệu.</li></ul>
<p>HubSpot thay hình phễu bằng <strong>bánh đà (flywheel)</strong>: khách hàng hài lòng tạo lực đẩy cho vòng quay tiếp theo qua giới thiệu và đánh giá, còn ma sát (quy trình rườm rà, bàn giao kém giữa các đội) làm bánh đà chậm lại.</p>
<p>Inbound và outbound không loại trừ nhau. Inbound có chi phí biên thấp và tích luỹ, nhưng cần 6 đến 12 tháng để thấy kết quả rõ.</p>`,
          res: ['hubspot-inbound']
        },
        {
          title: 'Chiến lược nội dung và cụm chủ đề', min: 50,
          body: `<p>Chiến lược nội dung trả lời bốn câu hỏi: viết cho ai, giải quyết vấn đề gì, khác gì so với nội dung đã có, và dẫn tới hành động kinh doanh nào.</p>
<p>Mô hình <strong>topic cluster</strong> tổ chức nội dung thành:</p>
<ul><li><strong>Trang trụ (pillar page):</strong> bao quát toàn diện một chủ đề rộng.</li><li><strong>Bài vệ tinh (cluster content):</strong> đi sâu từng khía cạnh, từng câu hỏi cụ thể.</li><li><strong>Liên kết nội bộ:</strong> bài vệ tinh trỏ về trang trụ và ngược lại.</li></ul>
<p>Cách này giúp người đọc lẫn công cụ tìm kiếm thấy bạn bao phủ chủ đề có chiều sâu. Nó cũng buộc đội nội dung ưu tiên: thà làm chủ ba chủ đề còn hơn viết rải rác ba mươi chủ đề.</p>
<p>Gắn nội dung với hành trình: nội dung nhận biết (vấn đề là gì), cân nhắc (các giải pháp, so sánh), quyết định (bằng chứng, giá, câu hỏi thường gặp).</p>`,
          res: ['hubspot-content', 'google-dme-attract']
        },
        {
          title: 'Kỹ thuật viết: rõ, cụ thể, dễ nhớ', min: 50,
          body: `<p>Hai khung viết thuyết phục phổ biến:</p>
<ul><li><strong>AIDA:</strong> Attention (thu hút) → Interest (quan tâm) → Desire (mong muốn) → Action (hành động).</li><li><strong>PAS:</strong> Problem (nêu vấn đề) → Agitate (làm rõ hệ quả) → Solution (giải pháp).</li></ul>
<p>Chip và Dan Heath (Stanford, Duke) trong <em>Made to Stick</em> tổng kết sáu đặc điểm của ý tưởng dễ nhớ, viết tắt <strong>SUCCESs</strong>: Simple, Unexpected, Concrete, Credible, Emotional, Stories.</p>
<h4>Nguyên tắc biên tập thực dụng</h4>
<ul><li>Mở bằng điều người đọc quan tâm, không mở bằng giới thiệu về công ty.</li><li>Một bài, một ý chính, một lời kêu gọi hành động.</li><li>Cụ thể thắng trừu tượng: "nhận phòng trong 3 phút" tốt hơn "dịch vụ nhanh chóng".</li><li>Viết cho người đọc lướt: đề mục rõ, đoạn ngắn, ý chính ở đầu đoạn.</li></ul>`,
          res: ['made-to-stick', 'everybody-writes', 'nng-writing-web']
        },
        {
          title: 'Lịch biên tập, phân phối và tái sử dụng', min: 40,
          body: `<p>Nội dung không được phân phối là nội dung chưa hoàn thành. Một quy tắc thực hành: dành ít nhất ngang thời gian sản xuất cho việc phân phối.</p>
<p><strong>Lịch biên tập</strong> cần có: chủ đề, từ khoá mục tiêu, giai đoạn hành trình, định dạng, người phụ trách, ngày xuất bản, kênh phân phối và chỉ số đo.</p>
<p><strong>Tái sử dụng (repurposing):</strong> một nghiên cứu hoặc bài dài có thể tách thành chuỗi bài mạng xã hội, video ngắn, email, infographic và bài trình bày. Cách làm này tăng độ phủ với chi phí sản xuất thấp và giữ thông điệp nhất quán.</p>
<p>Đừng bỏ quên việc <strong>cập nhật nội dung cũ</strong>. Làm mới một bài đang có thứ hạng thường cho kết quả nhanh hơn viết bài mới.</p>`,
          res: ['hubspot-content']
        },
        {
          title: 'Đo lường hiệu quả nội dung', min: 35,
          body: `<table><tr><th>Giai đoạn</th><th>Câu hỏi</th><th>Chỉ số</th></tr>
<tr><td>Tiếp cận</td><td>Có đúng người tìm thấy không?</td><td>Lượt hiển thị và nhấp từ tìm kiếm, người dùng mới theo nguồn</td></tr>
<tr><td>Tương tác</td><td>Họ có đọc không?</td><td>Thời gian tương tác, tỷ lệ cuộn, tỷ lệ phiên có tương tác</td></tr>
<tr><td>Chuyển đổi</td><td>Nội dung có dẫn tới hành động không?</td><td>Key event theo trang đích, đăng ký, lead</td></tr>
<tr><td>Kinh doanh</td><td>Có tạo doanh thu không?</td><td>Doanh thu hoặc pipeline có nội dung tham gia hành trình</td></tr></table>
<p>Nội dung thường là điểm chạm đầu chứ ít khi là điểm chạm cuối, nên đánh giá bằng mô hình last-click sẽ đánh giá thấp nó. Hãy xem cả báo cáo đường dẫn chuyển đổi và key event hỗ trợ.</p>`,
          res: ['google-dme-attract', 'ga4-skillshop']
        }
      ],
      takeaways: [
        'Inbound tích luỹ theo thời gian, cần kiên nhẫn 6 đến 12 tháng.',
        'Làm chủ ít chủ đề có chiều sâu tốt hơn rải rác nhiều chủ đề.',
        'Cụ thể, đơn giản và có câu chuyện giúp nội dung được nhớ.',
        'Phân phối và cập nhật quan trọng ngang với sản xuất.'
      ],
      assignment: {
        title: 'Chiến lược nội dung ba tháng',
        brief: `<ol><li>Chọn hai chủ đề trụ từ bản đồ từ khoá ở module 2.1. Với mỗi chủ đề, phác thảo một trang trụ và sáu bài vệ tinh.</li><li>Lập lịch biên tập 12 tuần với đủ các cột đã học.</li><li>Viết hoàn chỉnh một bài vệ tinh 800 đến 1.200 từ theo khung PAS hoặc AIDA.</li><li>Lập kế hoạch tái sử dụng bài đó thành ít nhất bốn định dạng khác.</li></ol>`,
        deliverable: 'Sơ đồ cụm chủ đề, lịch biên tập, một bài viết hoàn chỉnh và kế hoạch tái sử dụng.'
      },
      quiz: [
        { q: 'Ba giai đoạn của phương pháp inbound là gì?', a: ['Awareness, Interest, Action', 'Attract, Engage, Delight', 'Plan, Create, Publish', 'Reach, Act, Convert'], correct: 1, why: 'Inbound gồm Attract, Engage và Delight.' },
        { q: 'Trong mô hình topic cluster, trang trụ có vai trò gì?', a: ['Trang bán hàng chính', 'Trang bao quát chủ đề rộng và liên kết với các bài đi sâu', 'Trang liên hệ', 'Trang chỉ dành cho quảng cáo'], correct: 1, why: 'Trang trụ bao quát chủ đề, liên kết hai chiều với các bài vệ tinh.' },
        { q: 'Chữ A trong khung PAS là gì?', a: ['Action', 'Attention', 'Agitate', 'Audience'], correct: 2, why: 'PAS là Problem, Agitate, Solution.' },
        { q: 'Vì sao đo nội dung bằng last-click thường đánh giá thấp nội dung?', a: ['Vì nội dung không tạo chuyển đổi', 'Vì nội dung thường là điểm chạm đầu của hành trình', 'Vì GA4 không đo được blog', 'Vì nội dung chỉ dành cho SEO'], correct: 1, why: 'Nội dung hay mở đầu hành trình, còn last-click ghi công cho điểm chạm cuối.' },
        { q: 'Cách diễn đạt nào theo đúng nguyên tắc "cụ thể thắng trừu tượng"?', a: ['Dịch vụ đẳng cấp hàng đầu', 'Trải nghiệm tuyệt vời cho mọi khách hàng', 'Giao trong 2 giờ nội thành, trễ hoàn 100% phí', 'Chất lượng vượt trội'], correct: 2, why: 'Chỉ lựa chọn này nêu cam kết đo được.' }
      ],
      readings: ['contagious-berger', 'google-helpful-content']
    },
    {
      id: 'm2-3', hours: 7,
      title: 'Social media marketing',
      summary: 'Vai trò của từng nền tảng, cách thuật toán phân phối nội dung, chiến lược, cộng đồng, nhà sáng tạo và đo lường.',
      objectives: [
        'Mô tả cách thuật toán đề xuất phân phối nội dung và hệ quả với thương hiệu.',
        'Xây chiến lược mạng xã hội gồm mục tiêu, đối tượng, trụ nội dung và giọng thương hiệu.',
        'Thiết kế nội dung video ngắn có móc mở đầu và cấu trúc giữ chân.',
        'Tổ chức quản trị cộng đồng và lắng nghe mạng xã hội.',
        'Đo hiệu quả bằng chỉ số gắn với mục tiêu thay vì lượt thích.'
      ],
      lessons: [
        {
          title: 'Từ mạng bạn bè đến mạng đề xuất', min: 40,
          body: `<p>Các nền tảng đã chuyển từ phân phối theo quan hệ theo dõi (social graph) sang phân phối theo sở thích (interest graph). TikTok là ví dụ rõ nhất, và Reels, Shorts đi theo cùng hướng: nội dung được đưa tới người chưa theo dõi nếu tín hiệu ban đầu cho thấy họ sẽ quan tâm.</p>
<p>Các tín hiệu thuật toán thường dùng: thời gian xem và tỷ lệ xem hết, xem lại, chia sẻ, lưu, bình luận, và phản hồi tiêu cực như lướt qua nhanh hoặc ẩn.</p>
<h4>Hệ quả</h4>
<ul><li>Số người theo dõi ít quan trọng hơn trước; chất lượng từng nội dung quyết định độ phủ.</li><li>Tầm với tự nhiên của trang thương hiệu trên Facebook, Instagram thấp, nên organic và paid phải phối hợp.</li><li>Mỗi nền tảng có vai trò riêng: TikTok, Reels cho khám phá; Instagram cho hình ảnh thương hiệu; Facebook cho cộng đồng và nhóm tuổi lớn hơn; LinkedIn cho B2B; YouTube cho nội dung dài và tìm kiếm.</li></ul>`,
          res: ['meta-smm-cert', 'northwestern-smm']
        },
        {
          title: 'Chiến lược mạng xã hội', min: 45,
          body: `<p>Một chiến lược gọn gồm sáu phần:</p>
<ol><li><strong>Mục tiêu</strong> nối về mục tiêu marketing (nhận biết, cân nhắc, chăm sóc khách, bán hàng).</li><li><strong>Đối tượng</strong> và nền tảng họ thật sự dùng.</li><li><strong>Trụ nội dung</strong> (content pillars): 3 đến 5 chủ đề lặp lại, ví dụ giáo dục, hậu trường, bằng chứng từ khách hàng, sản phẩm.</li><li><strong>Giọng thương hiệu:</strong> cách nói, điều nên và không nên.</li><li><strong>Nhịp đăng và nguồn lực:</strong> thà ít mà đều.</li><li><strong>Cách đo.</strong></li></ol>
<p>Tỷ lệ nội dung thường được khuyến nghị nghiêng về giá trị cho người xem (giải trí, hữu ích) hơn là quảng bá trực tiếp. Jonah Berger (Wharton) trong <em>Contagious</em> chỉ ra sáu yếu tố khiến nội dung được chia sẻ, viết tắt <strong>STEPPS</strong>: Social currency, Triggers, Emotion, Public, Practical value, Stories.</p>`,
          res: ['hubspot-social', 'contagious-berger']
        },
        {
          title: 'Video ngắn: móc, giữ chân, kêu gọi', min: 45,
          body: `<p>Video ngắn là định dạng có độ phủ tự nhiên cao nhất hiện nay. Cấu trúc ba phần:</p>
<ul><li><strong>Hook (1 đến 3 giây đầu):</strong> lý do để không lướt qua. Có thể là câu hỏi, kết quả gây tò mò, hoặc một hình ảnh bất thường.</li><li><strong>Thân:</strong> trao giá trị đã hứa, nhịp nhanh, đổi khung hình thường xuyên, có phụ đề vì nhiều người xem tắt tiếng.</li><li><strong>Kết:</strong> một hành động rõ ràng, hoặc vòng lặp khiến người xem xem lại.</li></ul>
<p>Nguyên tắc sản xuất: quay dọc 9:16, trông tự nhiên như nội dung của người dùng hơn là quảng cáo truyền hình, đưa thương hiệu hoặc sản phẩm vào sớm, và thử nhiều phiên bản mở đầu cho cùng một nội dung.</p>
<p>Những nguyên tắc này sẽ được dùng lại khi học sáng tạo quảng cáo ở Level 3.</p>`,
          res: ['tiktok-creative-center', 'meta-blueprint']
        },
        {
          title: 'Cộng đồng, lắng nghe và nhà sáng tạo', min: 45,
          body: `<p><strong>Quản trị cộng đồng:</strong> đặt chuẩn thời gian phản hồi, kịch bản cho câu hỏi thường gặp, quy trình xử lý khiếu nại (ghi nhận công khai, giải quyết riêng) và quy tắc leo thang khi có khủng hoảng.</p>
<p><strong>Social listening</strong> theo dõi thương hiệu, đối thủ và chủ đề ngành được nhắc đến thế nào. Đây là nguồn insight liên tục, bổ sung cho nghiên cứu ở module 1.3.</p>
<p><strong>Nhà sáng tạo và influencer:</strong> chọn theo mức phù hợp với đối tượng và độ tin cậy, không chỉ theo số người theo dõi. Nhà sáng tạo nhỏ thường có tỷ lệ tương tác cao hơn. Nội dung do người dùng tạo (UGC) vừa là bằng chứng xã hội vừa là nguồn chất liệu quảng cáo.</p>
<div class="callout"><b>Minh bạch:</b> nội dung được tài trợ phải được gắn nhãn rõ ràng. Cơ quan quản lý ở Mỹ (FTC), Anh (ASA, CMA) và nhiều thị trường khác đều yêu cầu điều này; các nền tảng có công cụ gắn nhãn "paid partnership".</div>`,
          res: ['northwestern-smm', 'ftc-endorsements']
        },
        {
          title: 'Đo lường mạng xã hội', min: 35,
          body: `<table><tr><th>Mục tiêu</th><th>Chỉ số chính</th></tr>
<tr><td>Nhận biết</td><td>Số người tiếp cận, lượt xem video, tỷ lệ xem hết</td></tr>
<tr><td>Tương tác</td><td>Tỷ lệ tương tác trên lượt tiếp cận, lượt lưu và chia sẻ</td></tr>
<tr><td>Lưu lượng</td><td>Lượt nhấp liên kết, phiên từ social trong GA4 (qua UTM)</td></tr>
<tr><td>Chuyển đổi</td><td>Lead, đơn hàng, doanh thu từ social</td></tr>
<tr><td>Chăm sóc khách</td><td>Thời gian phản hồi, tỷ lệ giải quyết, cảm xúc bình luận</td></tr></table>
<p>Lượt lưu và chia sẻ thường là tín hiệu mạnh hơn lượt thích vì chúng thể hiện giá trị thật với người xem. Khi so sánh các bài, dùng tỷ lệ trên lượt tiếp cận thay vì số tuyệt đối.</p>`,
          res: ['google-dme-likes-leads', 'meta-smm-cert']
        }
      ],
      takeaways: [
        'Thuật toán đề xuất khiến chất lượng từng nội dung quan trọng hơn số người theo dõi.',
        'Ba giây đầu quyết định số phận của video.',
        'Tầm với tự nhiên có giới hạn, organic và paid cần đi cùng nhau.',
        'Đo bằng chỉ số gắn mục tiêu; lưu và chia sẻ đáng giá hơn lượt thích.'
      ],
      assignment: {
        title: 'Chiến lược và bộ nội dung mẫu',
        brief: `<ol><li>Phân tích ba đối thủ hoặc thương hiệu tham chiếu trên một nền tảng: trụ nội dung, nhịp đăng, 5 bài hiệu quả nhất và lý do.</li><li>Viết chiến lược một trang gồm sáu phần đã học.</li><li>Lên kịch bản 5 video ngắn, mỗi video có ba phương án hook.</li><li>Sản xuất và đăng ít nhất 2 video, ghi lại số liệu sau 7 ngày và rút nhận xét.</li></ol>`,
        deliverable: 'Bảng phân tích đối thủ, chiến lược một trang, 5 kịch bản và báo cáo kết quả 2 video.'
      },
      quiz: [
        { q: 'Phân phối theo "interest graph" nghĩa là gì?', a: ['Chỉ hiển thị cho người đã theo dõi', 'Nội dung được đề xuất theo sở thích và hành vi, kể cả với người chưa theo dõi', 'Chỉ hiển thị cho bạn bè', 'Phân phối theo thứ tự thời gian'], correct: 1, why: 'Interest graph phân phối dựa trên tín hiệu sở thích, không phụ thuộc quan hệ theo dõi.' },
        { q: 'Phần nào của video ngắn ảnh hưởng nhiều nhất tới việc người xem có ở lại không?', a: ['Phần kết', 'Phần mô tả', '1 đến 3 giây đầu', 'Hashtag'], correct: 2, why: 'Hook trong vài giây đầu quyết định người xem có lướt qua hay không.' },
        { q: 'STEPPS của Jonah Berger mô tả điều gì?', a: ['Các bước chạy quảng cáo', 'Sáu yếu tố khiến nội dung được chia sẻ', 'Quy trình xử lý khủng hoảng', 'Các loại định dạng video'], correct: 1, why: 'STEPPS gồm Social currency, Triggers, Emotion, Public, Practical value, Stories.' },
        { q: 'Khi so sánh hiệu quả tương tác giữa các bài đăng, nên dùng chỉ số nào?', a: ['Tổng lượt thích', 'Tỷ lệ tương tác trên lượt tiếp cận', 'Số người theo dõi', 'Số bình luận tuyệt đối'], correct: 1, why: 'Tỷ lệ trên lượt tiếp cận loại bỏ ảnh hưởng của khác biệt về độ phủ.' },
        { q: 'Nội dung được nhà sáng tạo đăng theo hợp đồng tài trợ cần gì?', a: ['Không cần gì nếu nội dung trung thực', 'Gắn nhãn tài trợ rõ ràng', 'Chỉ cần gắn hashtag thương hiệu', 'Chỉ cần báo cho nền tảng'], correct: 1, why: 'Quy định về chứng thực yêu cầu công khai quan hệ tài trợ một cách rõ ràng.' }
      ],
      readings: ['meta-cdma', 'linkedin-marketing-labs']
    },
    {
      id: 'm2-4', hours: 6,
      title: 'Email marketing và CRM',
      summary: 'Xây danh sách có sự đồng ý, phân khúc, chuỗi email vòng đời, khả năng vào hộp thư và đo lường.',
      objectives: [
        'Xây danh sách email tuân thủ nguyên tắc đồng ý và quy định dữ liệu cá nhân.',
        'Phân khúc danh sách theo hành vi và giá trị (RFM).',
        'Thiết kế các chuỗi tự động: chào mừng, nuôi dưỡng, bỏ giỏ, kích hoạt lại.',
        'Cấu hình SPF, DKIM, DMARC ở mức khái niệm và duy trì uy tín người gửi.',
        'Đo hiệu quả email bằng chỉ số đáng tin cậy.'
      ],
      lessons: [
        {
          title: 'Sự đồng ý và xây danh sách', min: 40,
          body: `<p>Email là kênh owned có hiệu quả chi phí cao, với điều kiện người nhận đã đồng ý. Danh sách mua hoặc cào về gây hại cho uy tín người gửi và vi phạm pháp luật ở hầu hết thị trường.</p>
<h4>Khung pháp lý cần biết</h4>
<ul><li><strong>GDPR</strong> (EU, Anh): cần cơ sở pháp lý, thường là sự đồng ý rõ ràng; người dùng có quyền truy cập và xoá dữ liệu.</li><li><strong>CAN-SPAM</strong> (Mỹ): bắt buộc có cách huỷ đăng ký hoạt động, địa chỉ người gửi thật, tiêu đề không gây hiểu nhầm.</li><li><strong>Việt Nam:</strong> Luật Bảo vệ dữ liệu cá nhân và các quy định về chống thư rác yêu cầu sự đồng ý và quyền từ chối của người nhận.</li></ul>
<p><strong>Cách xây danh sách:</strong> biểu mẫu đăng ký ở vị trí hợp lý, tài liệu có giá trị để đổi lấy email (lead magnet), ưu đãi lần mua đầu, thu thập tại điểm bán. Double opt-in giảm số lượng đăng ký nhưng tăng chất lượng danh sách.</p>
<div class="callout"><b>Lưu ý:</b> bài học này không phải tư vấn pháp lý. Hãy kiểm tra quy định hiện hành của thị trường bạn gửi tới.</div>`,
          res: ['hubspot-email', 'ftc-canspam']
        },
        {
          title: 'Phân khúc và mô hình RFM', min: 40,
          body: `<p>Gửi cùng một email cho toàn bộ danh sách là cách nhanh nhất làm giảm tương tác. Phân khúc theo:</p>
<ul><li><strong>Vòng đời:</strong> người đăng ký mới, khách mua lần đầu, khách mua lặp lại, khách ngủ đông.</li><li><strong>Hành vi:</strong> trang đã xem, sản phẩm đã mua, email đã mở và nhấp.</li><li><strong>Sở thích tự khai báo.</strong></li></ul>
<p>Mô hình <strong>RFM</strong> chấm điểm khách hàng theo ba chiều:</p>
<div class="formula"><strong>R</strong>ecency: lần mua gần nhất cách đây bao lâu · <strong>F</strong>requency: mua bao nhiêu lần · <strong>M</strong>onetary: tổng chi tiêu</div>
<p>RFM đơn giản nhưng có sức dự báo tốt. Nhóm R cao, F cao là khách trung thành nên được chăm sóc và mời giới thiệu. Nhóm F cao nhưng R thấp là khách giá trị đang rời đi, cần chiến dịch kích hoạt lại. Khoá Customer Analytics của Wharton giải thích nền tảng thống kê của cách tiếp cận này.</p>`,
          res: ['wharton-customer-analytics', 'google-dme-email']
        },
        {
          title: 'Chuỗi email vòng đời và tự động hoá', min: 50,
          body: `<table><tr><th>Chuỗi</th><th>Kích hoạt</th><th>Mục đích</th></tr>
<tr><td>Chào mừng</td><td>Đăng ký mới</td><td>Giới thiệu giá trị, đặt kỳ vọng, thúc đẩy lần mua đầu</td></tr>
<tr><td>Nuôi dưỡng</td><td>Tải tài liệu, quan tâm sản phẩm</td><td>Giáo dục, xử lý băn khoăn</td></tr>
<tr><td>Bỏ giỏ, bỏ xem</td><td>Thêm giỏ nhưng chưa mua</td><td>Nhắc và gỡ rào cản</td></tr>
<tr><td>Sau mua</td><td>Đơn hàng hoàn tất</td><td>Hướng dẫn dùng, xin đánh giá, bán chéo</td></tr>
<tr><td>Kích hoạt lại</td><td>Không tương tác 60 đến 90 ngày</td><td>Đưa quay lại hoặc dọn danh sách</td></tr></table>
<p>Email tự động theo hành vi thường mang lại doanh thu trên mỗi email cao hơn nhiều so với email gửi hàng loạt, vì chúng đến đúng lúc người nhận có ý định. Thứ tự triển khai hợp lý: chào mừng → bỏ giỏ → sau mua → kích hoạt lại.</p>
<p><strong>Nội dung một email tốt:</strong> tiêu đề rõ lợi ích, một mục tiêu, một lời kêu gọi chính, hiển thị tốt trên di động và ở chế độ tối.</p>`,
          res: ['hubspot-email', 'mailchimp-resources']
        },
        {
          title: 'Khả năng vào hộp thư (deliverability)', min: 40,
          body: `<p>Email không vào hộp thư đến thì mọi nỗ lực khác vô nghĩa. Ba chuẩn xác thực:</p>
<ul><li><strong>SPF:</strong> khai báo máy chủ nào được phép gửi thay tên miền của bạn.</li><li><strong>DKIM:</strong> chữ ký số chứng minh email không bị sửa.</li><li><strong>DMARC:</strong> chính sách xử lý khi SPF hoặc DKIM thất bại, kèm báo cáo.</li></ul>
<p>Từ năm 2024, Gmail và Yahoo yêu cầu người gửi số lượng lớn phải xác thực đủ ba chuẩn trên, có nút huỷ đăng ký một lần nhấp và giữ tỷ lệ bị báo spam thấp (Google khuyến nghị dưới 0,1% và không được chạm 0,3%).</p>
<p><strong>Giữ uy tín người gửi:</strong> chỉ gửi cho người đã đồng ý, loại địa chỉ hỏng và người không tương tác lâu ngày, tăng lượng gửi từ từ khi dùng tên miền mới, giữ nhịp gửi đều.</p>`,
          res: ['google-sender-guidelines']
        },
        {
          title: 'Đo lường email', min: 30,
          body: `<p>Từ khi Apple ra Mail Privacy Protection (2021), <strong>tỷ lệ mở bị thổi phồng</strong> vì Apple Mail tự tải nội dung email. Tỷ lệ mở chỉ nên dùng để so sánh tương đối, không dùng làm KPI chính.</p>
<h4>Chỉ số đáng tin hơn</h4>
<ul><li><strong>Tỷ lệ nhấp</strong> (clicks ÷ email được gửi tới).</li><li><strong>Tỷ lệ chuyển đổi</strong> và <strong>doanh thu trên mỗi người nhận</strong>.</li><li><strong>Tỷ lệ huỷ đăng ký</strong> và <strong>tỷ lệ báo spam</strong>.</li><li><strong>Tốc độ tăng danh sách</strong> và tỷ lệ danh sách còn hoạt động.</li></ul>
<p>Email là kênh dễ thử nghiệm A/B nhất: thử tiêu đề, thời điểm gửi, lời kêu gọi, độ dài. Mỗi lần chỉ thử một biến và quyết định bằng tỷ lệ nhấp hoặc doanh thu.</p>`,
          res: ['google-dme-email']
        }
      ],
      takeaways: [
        'Không có sự đồng ý thì không có email marketing bền vững.',
        'RFM là cách phân khúc đơn giản mà hiệu quả.',
        'Bốn chuỗi tự động chào mừng, bỏ giỏ, sau mua, kích hoạt lại nên có trước mọi thứ khác.',
        'Dùng tỷ lệ nhấp và doanh thu trên mỗi người nhận, không dựa vào tỷ lệ mở.'
      ],
      assignment: {
        title: 'Thiết kế hệ thống email vòng đời',
        brief: `<ol><li>Vẽ sơ đồ bốn chuỗi tự động cho doanh nghiệp của bạn: điều kiện kích hoạt, số email, khoảng cách, mục tiêu từng email.</li><li>Viết đầy đủ chuỗi chào mừng 3 email, gồm tiêu đề, dòng xem trước, nội dung, lời kêu gọi.</li><li>Nếu có dữ liệu đơn hàng, chấm RFM và mô tả ba phân khúc cùng thông điệp cho mỗi nhóm.</li><li>Kiểm tra SPF, DKIM, DMARC của tên miền bằng công cụ miễn phí và ghi kết quả.</li></ol>`,
        deliverable: 'Sơ đồ tự động hoá, chuỗi chào mừng hoàn chỉnh, bảng RFM và báo cáo kiểm tra xác thực.'
      },
      quiz: [
        { q: 'Vì sao tỷ lệ mở email không còn đáng tin làm KPI chính?', a: ['Vì người dùng ít mở email hơn', 'Vì Apple Mail Privacy Protection tự tải nội dung, làm số lượt mở bị thổi phồng', 'Vì Gmail chặn theo dõi lượt nhấp', 'Vì luật cấm đo lượt mở'], correct: 1, why: 'Mail Privacy Protection tải trước nội dung nên lượt mở không còn phản ánh hành vi thật.' },
        { q: 'Trong RFM, khách có F cao nhưng R thấp là nhóm nào?', a: ['Khách mới', 'Khách trung thành đang hoạt động', 'Khách giá trị đang có nguy cơ rời bỏ', 'Khách chưa từng mua'], correct: 2, why: 'Từng mua nhiều nhưng lâu rồi không quay lại, cần được kích hoạt lại.' },
        { q: 'Chuẩn nào quy định cách xử lý email khi xác thực thất bại?', a: ['SPF', 'DKIM', 'DMARC', 'SMTP'], correct: 2, why: 'DMARC đặt chính sách và báo cáo dựa trên kết quả SPF và DKIM.' },
        { q: 'Chuỗi tự động nào nên triển khai đầu tiên?', a: ['Kích hoạt lại', 'Chào mừng', 'Sinh nhật', 'Khảo sát hằng năm'], correct: 1, why: 'Chuỗi chào mừng đến lúc người đăng ký quan tâm nhất và đặt nền cho quan hệ.' },
        { q: 'Cách nào làm tổn hại uy tín người gửi nhiều nhất?', a: ['Dùng double opt-in', 'Loại người không tương tác', 'Gửi cho danh sách mua từ bên thứ ba', 'Gửi đều hằng tuần'], correct: 2, why: 'Danh sách mua có nhiều địa chỉ hỏng và người không đồng ý, dẫn tới báo spam cao.' }
      ],
      readings: ['fader-customer-centricity', 'meta-cdma']
    },
    {
      id: 'm2-5', hours: 7,
      title: 'Website, trang đích và CRO căn bản',
      summary: 'Cấu trúc trang đích, nguyên tắc khả dụng, nghiên cứu chuyển đổi, tối ưu biểu mẫu và thanh toán, tốc độ trang.',
      objectives: [
        'Phân tích cấu trúc một trang đích và nguyên tắc khớp thông điệp.',
        'Đánh giá giao diện theo 10 nguyên tắc khả dụng của Nielsen.',
        'Dùng dữ liệu định lượng và định tính để tìm điểm nghẽn chuyển đổi.',
        'Tối ưu biểu mẫu và luồng thanh toán theo bằng chứng nghiên cứu.',
        'Lập danh sách giả thuyết cải tiến có xếp hạng ưu tiên.'
      ],
      lessons: [
        {
          title: 'Cấu trúc trang đích và khớp thông điệp', min: 45,
          body: `<p>Trang đích (landing page) là nơi lưu lượng biến thành kết quả. Các thành phần chính:</p>
<ul><li><strong>Tiêu đề</strong> nêu lợi ích chính, khớp với quảng cáo hoặc truy vấn đã đưa người dùng tới.</li><li><strong>Hình ảnh hoặc video</strong> cho thấy sản phẩm trong bối cảnh sử dụng.</li><li><strong>Lợi ích</strong> trước, tính năng sau.</li><li><strong>Bằng chứng:</strong> đánh giá, số liệu, logo khách hàng, chứng nhận.</li><li><strong>Xử lý băn khoăn:</strong> câu hỏi thường gặp, chính sách hoàn huỷ, bảo mật.</li><li><strong>Lời kêu gọi hành động</strong> duy nhất, lặp lại ở các điểm hợp lý.</li></ul>
<p><strong>Message match:</strong> lời hứa trên quảng cáo phải xuất hiện ngay ở màn hình đầu của trang đích. Người dùng mất vài giây để quyết định mình đã đến đúng nơi chưa. Lệch thông điệp là nguyên nhân phổ biến nhất khiến tỷ lệ thoát cao.</p>
<p>Để tham chiếu: báo cáo của Unbounce trên hàng chục nghìn trang đích ghi nhận tỷ lệ chuyển đổi trung vị khoảng 6,6%, và dao động mạnh giữa các ngành.</p>`,
          res: ['unbounce-benchmark', 'cxl-blog']
        },
        {
          title: 'Nguyên tắc khả dụng', min: 45,
          body: `<p>Jakob Nielsen (Nielsen Norman Group) đưa ra 10 nguyên tắc đánh giá giao diện vẫn được dùng làm chuẩn. Những nguyên tắc ảnh hưởng trực tiếp tới chuyển đổi:</p>
<ul><li><strong>Hiển thị trạng thái hệ thống:</strong> người dùng luôn biết điều gì đang xảy ra (đang tải, đã thêm vào giỏ, bước 2 trên 3).</li><li><strong>Khớp với thế giới thật:</strong> dùng ngôn ngữ của người dùng, không dùng thuật ngữ nội bộ.</li><li><strong>Phòng ngừa lỗi</strong> tốt hơn thông báo lỗi.</li><li><strong>Nhận ra thay vì nhớ lại:</strong> hiển thị lựa chọn, đừng bắt người dùng nhớ.</li><li><strong>Thiết kế tối giản:</strong> mỗi yếu tố thừa cạnh tranh sự chú ý với yếu tố quan trọng.</li></ul>
<p>Steve Krug tóm lại trong tên sách: <em>Don't Make Me Think</em>. Người dùng lướt chứ không đọc, chọn phương án đầu tiên có vẻ ổn chứ không chọn phương án tối ưu. Thiết kế phải hiển nhiên.</p>
<p>Kiểm thử khả dụng với 5 người dùng thường đủ để phát hiện phần lớn vấn đề nghiêm trọng.</p>`,
          res: ['nng-heuristics', 'krug-dmmt']
        },
        {
          title: 'Nghiên cứu chuyển đổi: tìm điểm nghẽn', min: 50,
          body: `<p>Tối ưu chuyển đổi (CRO) bắt đầu bằng nghiên cứu, không bắt đầu bằng ý tưởng thay màu nút.</p>
<table><tr><th>Nguồn</th><th>Cho biết</th></tr>
<tr><td>Phân tích phễu trong GA4</td><td>Người dùng rời đi ở bước nào, trên thiết bị nào</td></tr>
<tr><td>Bản đồ nhiệt, bản đồ cuộn</td><td>Phần nào được chú ý, phần nào bị bỏ qua</td></tr>
<tr><td>Ghi lại phiên</td><td>Hành vi cụ thể: nhấp hụt, quay lui, do dự</td></tr>
<tr><td>Khảo sát tại trang</td><td>Lý do chưa mua, thông tin còn thiếu</td></tr>
<tr><td>Kiểm thử người dùng</td><td>Điều gây khó hiểu khi thực hiện tác vụ</td></tr></table>
<p>Từ các phát hiện, viết <strong>giả thuyết</strong> theo mẫu:</p>
<div class="formula">Vì chúng tôi quan sát thấy <em>[dữ liệu]</em>, chúng tôi tin rằng <em>[thay đổi]</em> cho <em>[đối tượng]</em> sẽ dẫn tới <em>[kết quả]</em>, đo bằng <em>[chỉ số]</em>.</div>
<p>Xếp ưu tiên bằng khung <strong>ICE</strong> (Impact, Confidence, Ease) hoặc <strong>PIE</strong> (Potential, Importance, Ease).</p>`,
          res: ['cxl-blog', 'clarity-tool']
        },
        {
          title: 'Biểu mẫu, thanh toán và tốc độ', min: 45,
          body: `<p>Viện Baymard tổng hợp hàng chục nghiên cứu và ghi nhận tỷ lệ bỏ giỏ trung bình vào khoảng 70%. Các lý do hàng đầu có thể khắc phục:</p>
<ul><li>Chi phí phát sinh (phí, thuế, vận chuyển) chỉ lộ ra ở bước cuối.</li><li>Bắt buộc tạo tài khoản.</li><li>Quy trình dài hoặc phức tạp.</li><li>Không tin tưởng trang khi nhập thông tin thanh toán.</li><li>Thiếu phương thức thanh toán mong muốn.</li></ul>
<h4>Nguyên tắc biểu mẫu</h4>
<ul><li>Chỉ hỏi những gì thật sự cần. Mỗi trường thêm vào là một lý do rời đi.</li><li>Nhãn đặt phía trên ô nhập, báo lỗi ngay tại ô và nói rõ cách sửa.</li><li>Dùng đúng loại bàn phím trên di động, hỗ trợ tự điền.</li></ul>
<p><strong>Tốc độ</strong> ảnh hưởng trực tiếp tới chuyển đổi, nhất là trên di động. Các việc thường mang lại cải thiện lớn: nén và dùng định dạng ảnh hiện đại, trì hoãn tải script bên thứ ba, giảm số tag marketing không còn dùng.</p>`,
          res: ['baymard', 'webdev-cwv']
        },
        {
          title: 'Giới thiệu thử nghiệm A/B', min: 35,
          body: `<p>Thử nghiệm A/B chia ngẫu nhiên người dùng vào phiên bản gốc và phiên bản thay đổi, rồi so sánh chỉ số mục tiêu. Việc chia ngẫu nhiên là thứ cho phép kết luận nhân quả.</p>
<h4>Ba nguyên tắc tối thiểu</h4>
<ul><li><strong>Tính cỡ mẫu trước khi chạy</strong> và không dừng sớm khi thấy kết quả đẹp.</li><li><strong>Chạy trọn chu kỳ tuần</strong> để tránh sai lệch theo ngày.</li><li><strong>Một chỉ số chính</strong> được chọn từ trước.</li></ul>
<p>Website có ít lưu lượng thường không đủ mẫu để thử những thay đổi nhỏ. Khi đó nên ưu tiên thay đổi lớn dựa trên nghiên cứu, và kiểm chứng bằng kiểm thử người dùng.</p>
<p>Google Optimize đã ngừng từ tháng 9 năm 2023. Các lựa chọn hiện nay gồm công cụ mã nguồn mở như GrowthBook và các nền tảng thương mại. Thống kê thử nghiệm được học kỹ ở Level 5.</p>`,
          res: ['growthbook', 'evanmiller-ab']
        }
      ],
      takeaways: [
        'Khớp thông điệp giữa quảng cáo và trang đích là đòn bẩy rẻ nhất.',
        'Thiết kế hiển nhiên thắng thiết kế thông minh.',
        'CRO là nghiên cứu, giả thuyết, ưu tiên rồi mới thử nghiệm.',
        'Minh bạch chi phí và cho phép mua không cần tài khoản giảm bỏ giỏ rõ rệt.'
      ],
      assignment: {
        title: 'Audit trang đích và danh sách giả thuyết',
        brief: `<ol><li>Chọn trang đích quan trọng nhất. Chấm theo 10 nguyên tắc của Nielsen, ghi bằng chứng cho từng vi phạm.</li><li>Cài một công cụ bản đồ nhiệt và ghi phiên miễn phí (ví dụ Microsoft Clarity). Xem ít nhất 20 phiên và ghi mẫu hành vi lặp lại.</li><li>Mời 3 người thử hoàn thành tác vụ chính trên di động, quan sát và ghi lại chỗ họ vướng.</li><li>Viết 8 giả thuyết theo mẫu và chấm ICE. Thiết kế phác thảo cho 2 giả thuyết đứng đầu.</li></ol>`,
        deliverable: 'Báo cáo audit, bảng giả thuyết có điểm ICE và hai bản phác thảo.'
      },
      quiz: [
        { q: 'Message match nghĩa là gì?', a: ['Màu trang đích giống màu logo', 'Lời hứa trên quảng cáo xuất hiện ngay ở phần đầu trang đích', 'Trang đích có cùng độ dài với quảng cáo', 'Dùng cùng một ảnh cho mọi kênh'], correct: 1, why: 'Người dùng cần thấy ngay điều đã khiến họ nhấp, để biết mình đến đúng nơi.' },
        { q: 'Theo tổng hợp của Baymard, lý do bỏ giỏ hàng đầu có thể khắc phục là gì?', a: ['Màu nút không nổi bật', 'Chi phí phát sinh lộ ra ở bước cuối', 'Trang có quá ít ảnh', 'Thiếu chatbot'], correct: 1, why: 'Phí, thuế, vận chuyển bất ngờ là lý do được ghi nhận nhiều nhất.' },
        { q: 'Bước đầu tiên của một quy trình CRO đúng là gì?', a: ['Đổi màu nút kêu gọi', 'Nghiên cứu để tìm điểm nghẽn', 'Chạy thật nhiều thử nghiệm A/B', 'Thiết kế lại toàn bộ website'], correct: 1, why: 'Nghiên cứu cho biết nên thử điều gì; thiếu nó, thử nghiệm chỉ là đoán mò.' },
        { q: 'Vì sao không nên dừng thử nghiệm A/B ngay khi thấy kết quả có ý nghĩa?', a: ['Vì công cụ tính phí theo ngày', 'Vì nhìn kết quả liên tục và dừng sớm làm tăng mạnh tỷ lệ kết luận sai', 'Vì người dùng sẽ phát hiện', 'Vì Google phạt'], correct: 1, why: 'Dừng sớm theo kết quả tạm thời làm tăng xác suất dương tính giả.' },
        { q: 'ICE dùng để làm gì?', a: ['Đo tốc độ trang', 'Xếp ưu tiên các giả thuyết cải tiến', 'Tính cỡ mẫu', 'Phân khúc khách hàng'], correct: 1, why: 'ICE chấm Impact, Confidence, Ease để chọn giả thuyết nên làm trước.' }
      ],
      readings: ['nng-articles', 'google-dme-ecommerce']
    }
  ]
});
