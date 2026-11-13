COURSE.levels.push({
  id: 'L4', num: 4, color: '#a8358f',
  title: 'User Acquisition và Mobile Growth',
  short: 'UA & Mobile',
  stage: 'Trung cấp đến nâng cao',
  tagline: 'Tăng trưởng ứng dụng: phân bổ trong kỷ nguyên quyền riêng tư, kênh UA, ASO, LTV và giữ chân.',
  intro: 'User Acquisition là performance marketing áp dụng cho ứng dụng di động, với những ràng buộc riêng: cửa hàng ứng dụng đứng giữa, khung quyền riêng tư của Apple giới hạn dữ liệu, và quyết định chi tiêu dựa trên giá trị vòng đời dự báo. Level 4 trang bị trọn bộ kỹ năng đó.',
  prereq: 'Hoàn thành Level 3',
  milestone: 'Chứng chỉ Apple Ads và mô hình LTV theo cohort',
  outcomes: [
    'Mô tả hệ sinh thái quảng cáo ứng dụng và vai trò của MMP, mạng quảng cáo, cửa hàng.',
    'Giải thích ATT, SKAdNetwork, AdAttributionKit và cách đo lường trên iOS, Android.',
    'Vận hành Google App campaigns, Meta Advantage+ app campaigns và Apple Ads.',
    'Tối ưu trang cửa hàng ứng dụng theo cả từ khoá lẫn tỷ lệ chuyển đổi.',
    'Xây mô hình LTV theo cohort và đặt mục tiêu ROAS theo thời gian hoàn vốn.',
    'Thiết kế chương trình giữ chân và kích hoạt lại người dùng.'
  ],
  modules: [
    {
      id: 'm4-1', hours: 6,
      title: 'Hệ sinh thái mobile và nền tảng UA',
      summary: 'Ai làm gì trong chuỗi quảng cáo ứng dụng, phễu cài đặt, bộ chỉ số UA và sự khác nhau giữa các mô hình kinh doanh app.',
      objectives: [
        'Vẽ bản đồ các bên tham gia hệ sinh thái quảng cáo ứng dụng.',
        'Tính IPM, CPI, tỷ lệ chuyển đổi cửa hàng, ROAS theo ngày và quan hệ giữa chúng.',
        'So sánh mục tiêu UA của game, ứng dụng thuê bao và ứng dụng thương mại.',
        'Giải thích quan hệ giữa cài đặt trả phí và cài đặt tự nhiên.'
      ],
      lessons: [
        {
          title: 'Bản đồ hệ sinh thái', min: 45,
          body: `<table><tr><th>Bên tham gia</th><th>Vai trò</th><th>Ví dụ</th></tr>
<tr><td>Nhà quảng cáo</td><td>Ứng dụng cần người dùng mới</td><td>Game, fintech, thương mại điện tử</td></tr>
<tr><td>Nền tảng tự phục vụ</td><td>Bán quảng cáo trên kho của chính mình</td><td>Google, Meta, TikTok, Apple Ads</td></tr>
<tr><td>Mạng quảng cáo SDK, DSP</td><td>Bán quảng cáo bên trong các ứng dụng khác</td><td>AppLovin, Unity Ads, Mintegral, Moloco, Liftoff</td></tr>
<tr><td>Nhà xuất bản</td><td>Ứng dụng hiển thị quảng cáo để kiếm tiền, thường qua lớp mediation</td><td>Game miễn phí, ứng dụng tiện ích</td></tr>
<tr><td>MMP</td><td>Bên đo lường độc lập, xác định cài đặt đến từ đâu</td><td>AppsFlyer, Adjust, Singular, Branch, Kochava</td></tr>
<tr><td>Cửa hàng</td><td>Phân phối, thanh toán, đặt quy tắc quyền riêng tư</td><td>App Store, Google Play</td></tr></table>
<p>Điểm khác biệt lớn so với web: bạn không sở hữu bước chuyển đổi. Người dùng phải đi qua trang cửa hàng do Apple hoặc Google kiểm soát, và chính hai công ty này quyết định dữ liệu nào được chia sẻ cho việc đo lường.</p>
<p>Nhiều ứng dụng vừa là nhà quảng cáo vừa là nhà xuất bản: mua người dùng bằng quảng cáo và kiếm tiền từ quảng cáo. Khi đó lợi nhuận là chênh lệch giữa giá trị vòng đời và chi phí cài đặt.</p>`,
          res: ['mdm-ua101', 'phiture-growth-stack']
        },
        {
          title: 'Phễu cài đặt và bộ chỉ số UA', min: 50,
          body: `<div class="formula">Hiển thị → Nhấp → Xem trang cửa hàng → Cài đặt → Mở lần đầu → Đăng ký → Sự kiện giá trị (mua, đăng ký thuê bao, hoàn thành màn chơi)</div>
<table><tr><th>Chỉ số</th><th>Công thức</th><th>Ý nghĩa</th></tr>
<tr><td>IPM</td><td>Cài đặt ÷ Hiển thị × 1.000</td><td>Hiệu quả tổng hợp của sáng tạo và trang cửa hàng</td></tr>
<tr><td>CPI</td><td>Chi phí ÷ Cài đặt</td><td>Giá một người dùng mới</td></tr>
<tr><td>CVR cửa hàng</td><td>Cài đặt ÷ Lượt xem trang cửa hàng</td><td>Sức thuyết phục của trang cửa hàng</td></tr>
<tr><td>Retention Dn</td><td>Người dùng quay lại vào ngày n ÷ Người cài ngày 0</td><td>Chất lượng người dùng và sản phẩm</td></tr>
<tr><td>ARPU, ARPDAU</td><td>Doanh thu ÷ Người dùng (hoặc người dùng hoạt động ngày)</td><td>Khả năng kiếm tiền</td></tr>
<tr><td>ROAS Dn</td><td>Doanh thu luỹ kế tới ngày n của cohort ÷ Chi phí của cohort</td><td>Tốc độ hoàn vốn</td></tr></table>
<div class="formula"><code>CPI = CPM ÷ IPM</code>. Với cùng CPM, sáng tạo có IPM gấp đôi cho CPI bằng một nửa.</div>
<p>CPI thấp không phải mục tiêu. Mạng quảng cáo có CPI rẻ thường mang về người dùng ít giá trị. Mục tiêu là ROAS và LTV, CPI chỉ là chỉ số trung gian.</p>`,
          res: ['mdm-ua101', 'singular-glossary']
        },
        {
          title: 'Mô hình kinh doanh và mục tiêu UA', min: 40,
          body: `<table><tr><th>Loại ứng dụng</th><th>Nguồn doanh thu</th><th>Tối ưu UA theo</th></tr>
<tr><td>Game hyper-casual, hybrid-casual</td><td>Chủ yếu quảng cáo trong app (IAA), thêm mua trong app</td><td>CPI thấp, IPM cao, ROAS D0 đến D7; hoàn vốn rất nhanh</td></tr>
<tr><td>Game casual, midcore</td><td>Mua trong app (IAP) cộng quảng cáo</td><td>ROAS D7 đến D30, tìm người trả tiền; hoàn vốn vài tháng</td></tr>
<tr><td>Ứng dụng thuê bao</td><td>Phí định kỳ</td><td>Bắt đầu dùng thử, chuyển đổi trả phí, gia hạn; hoàn vốn theo tháng hoặc năm</td></tr>
<tr><td>Thương mại, giao hàng, du lịch</td><td>Giao dịch</td><td>Đơn đầu tiên, tần suất mua lại</td></tr>
<tr><td>Fintech</td><td>Phí, lãi, giao dịch</td><td>Hoàn thành xác minh, nạp tiền lần đầu</td></tr></table>
<p>Mô hình kinh doanh quyết định sự kiện tối ưu, cửa sổ hoàn vốn chấp nhận được và kênh phù hợp. Game phụ thuộc nhiều vào mạng quảng cáo SDK và quảng cáo chơi thử. Ứng dụng thuê bao phụ thuộc vào Meta, TikTok, Apple Ads và sáng tạo dạng người dùng tự quay.</p>`,
          res: ['unity-growing-game', 'deconstructor-of-fun']
        },
        {
          title: 'Cài đặt trả phí và cài đặt tự nhiên', min: 35,
          body: `<p>Cài đặt tự nhiên đến từ tìm kiếm trong cửa hàng, bảng xếp hạng, đề xuất của cửa hàng, truyền miệng và thương hiệu. Hai hiệu ứng nối trả phí với tự nhiên:</p>
<ul><li><strong>Nâng tự nhiên (organic uplift):</strong> chiến dịch trả phí đẩy lượng cài đặt lên; nhiều người làm nghề tin rằng điều này cải thiện thứ hạng trong danh mục và từ khoá và kéo thêm cài đặt tự nhiên, nhưng các cửa hàng không công bố cơ chế đó, nên cần đo thay vì giả định.</li><li><strong>Ăn vào tự nhiên (cannibalization):</strong> một phần người cài qua quảng cáo đằng nào cũng cài. Điển hình là quảng cáo trên từ khoá thương hiệu của chính mình.</li></ul>
<p>Vì hai hiệu ứng ngược chiều nhau, nên theo dõi thêm <strong>CPI hỗn hợp</strong> (tổng chi phí ÷ tổng cài đặt) và tổng số người dùng mới, không chỉ số do MMP phân bổ cho trả phí.</p>
<p>Báo cáo chuẩn ngành hằng năm của AppsFlyer, Singular, Sensor Tower và GameAnalytics cho biết mặt bằng CPI, retention và xếp hạng nguồn media theo danh mục và quốc gia. Dùng chúng để đặt kỳ vọng ban đầu, rồi thay bằng dữ liệu của chính bạn.</p>`,
          res: ['appsflyer-reports', 'singular-roi-index', 'gameanalytics-reports']
        }
      ],
      takeaways: [
        'Trên mobile, cửa hàng ứng dụng kiểm soát bước chuyển đổi và dữ liệu đo lường.',
        '<code>CPI = CPM ÷ IPM</code>: sáng tạo tốt hơn là cách giảm CPI trực tiếp nhất.',
        'CPI là chỉ số trung gian; ROAS và LTV mới là mục tiêu.',
        'Theo dõi cả số liệu hỗn hợp để thấy tác động thật của trả phí lên tổng tăng trưởng.'
      ],
      assignment: {
        title: 'Hồ sơ UA cho một ứng dụng',
        brief: `<ol><li>Chọn một ứng dụng (của bạn hoặc một ứng dụng bạn dùng thường xuyên). Xác định mô hình kinh doanh và sự kiện giá trị chính.</li><li>Vẽ phễu từ hiển thị tới sự kiện giá trị và ước lượng tỷ lệ mỗi bước dựa trên báo cáo chuẩn ngành.</li><li>Lập bảng tính: nhập CPM, IPM, tỷ lệ sự kiện giá trị, doanh thu mỗi sự kiện và tự tính CPI, CPA, ROAS D7.</li><li>Tra chuẩn retention D1, D7, D30 của danh mục đó trong báo cáo mới nhất.</li></ol>`,
        deliverable: 'Hồ sơ một trang và bảng tính phễu UA.'
      },
      quiz: [
        { q: 'MMP làm nhiệm vụ gì?', a: ['Bán quảng cáo trong game', 'Đo lường và phân bổ cài đặt, sự kiện về nguồn quảng cáo', 'Duyệt ứng dụng lên cửa hàng', 'Xử lý thanh toán trong app'], correct: 1, why: 'Mobile Measurement Partner là bên đo lường độc lập giữa nhà quảng cáo và các nguồn media.' },
        { q: 'CPM 200.000đ, IPM 10. CPI là bao nhiêu?', a: ['2.000đ', '20.000đ', '200.000đ', '2.000.000đ'], correct: 1, why: 'CPI = CPM ÷ IPM = 200.000 ÷ 10 = 20.000đ.' },
        { q: 'Game hyper-casual thường tối ưu UA theo điều gì?', a: ['Hoàn vốn sau 12 tháng', 'CPI thấp và ROAS trong vài ngày đầu', 'Số lượt đăng ký thuê bao', 'Số lượt đánh giá 5 sao'], correct: 1, why: 'Doanh thu chủ yếu từ quảng cáo trong app với vòng đời ngắn, nên cần hoàn vốn rất nhanh.' },
        { q: 'Cannibalization trong UA nghĩa là gì?', a: ['Hai chiến dịch cạnh tranh giá thầu', 'Quảng cáo ghi nhận cài đặt của người đằng nào cũng cài', 'Người dùng gỡ ứng dụng', 'Đối thủ sao chép sáng tạo'], correct: 1, why: 'Đó là phần cài đặt trả phí thực chất lấy từ nguồn tự nhiên.' },
        { q: 'Vì sao CPI thấp chưa chắc tốt?', a: ['Vì cửa hàng phạt CPI thấp', 'Vì nguồn rẻ có thể mang về người dùng ít giá trị, ROAS thấp', 'Vì CPI thấp làm tăng CPM', 'Vì MMP không đo được'], correct: 1, why: 'Giá trị người dùng quyết định hiệu quả, không phải giá cài đặt.' }
      ],
      readings: ['sensortower-resources', 'lennys-newsletter']
    },
    {
      id: 'm4-2', hours: 7,
      title: 'Phân bổ và quyền riêng tư trên mobile',
      summary: 'Cách MMP phân bổ cài đặt, ATT, SKAdNetwork, AdAttributionKit, tình hình trên Android và cách đo lường khi dữ liệu bị giới hạn.',
      objectives: [
        'Giải thích cơ chế phân bổ cài đặt và các loại gian lận phổ biến.',
        'Mô tả ATT và cách SKAdNetwork trả dữ liệu: postback, conversion value, ngưỡng ẩn danh.',
        'Nêu vai trò của AdAttributionKit và hướng chuyển đổi từ SKAdNetwork.',
        'Trình bày tình trạng đo lường trên Android sau khi Privacy Sandbox bị ngừng.',
        'Thiết kế sơ đồ conversion value và cách ra quyết định với dữ liệu tổng hợp.'
      ],
      lessons: [
        {
          title: 'MMP và cơ chế phân bổ', min: 45,
          body: `<p>SDK của MMP trong ứng dụng ghi nhận lần mở đầu tiên và các sự kiện sau đó. MMP đối chiếu với dữ liệu nhấp và hiển thị từ các nguồn media để xác định nguồn của cài đặt, thường theo quy tắc <strong>điểm chạm cuối</strong> trong một <strong>cửa sổ phân bổ</strong> (ví dụ 7 ngày sau nhấp, 1 ngày sau xem).</p>
<h4>Vì sao cần bên thứ ba</h4>
<p>Mỗi nền tảng đều muốn nhận công. Nếu cộng số tự báo cáo của các nền tảng, tổng sẽ vượt số cài đặt thật. MMP khử trùng lặp và cho một nguồn số thống nhất.</p>
<h4>Gian lận quảng cáo ứng dụng</h4>
<ul><li><strong>Click flooding:</strong> bắn lượng nhấp giả khổng lồ để "trúng" cài đặt tự nhiên.</li><li><strong>Click injection, install hijacking:</strong> chèn lượt nhấp ngay trước khi cài đặt hoàn tất để cướp công.</li><li><strong>Bot và trang trại thiết bị:</strong> cài đặt giả.</li></ul>
<p>Dấu hiệu nhận biết: tỷ lệ nhấp trên cài đặt bất thường, thời gian từ nhấp tới cài quá ngắn hoặc phân bố kỳ lạ, retention gần bằng không.</p>
<p><strong>Deep link</strong> và <strong>deferred deep link</strong> đưa người dùng tới đúng nội dung trong ứng dụng, kể cả khi họ phải cài đặt trước. Điều này quan trọng với trải nghiệm lẫn tỷ lệ chuyển đổi.</p>`,
          res: ['mdm-ua101', 'singular-glossary']
        },
        {
          title: 'iOS: ATT và SKAdNetwork', min: 60,
          body: `<p>Từ iOS 14.5 (tháng 4 năm 2021), <strong>App Tracking Transparency</strong> yêu cầu ứng dụng xin phép trước khi theo dõi người dùng qua ứng dụng và website của công ty khác. Tỷ lệ người dùng đồng ý khác nhau rất nhiều theo loại ứng dụng và thị trường (các MMP công bố số liệu hằng năm), nên mã định danh quảng cáo IDFA chỉ còn sẵn cho một phần lượt cài.</p>
<p><strong>SKAdNetwork (SKAN)</strong> là khung phân bổ bảo vệ quyền riêng tư của Apple: xác nhận cài đặt đến từ chiến dịch nào mà không tiết lộ danh tính người dùng.</p>
<h4>Cơ chế chính (SKAN 4)</h4>
<ul><li><strong>Postback:</strong> thông báo ẩn danh, có độ trễ ngẫu nhiên, gửi tới mạng quảng cáo. Tối đa ba postback cho ba cửa sổ: ngày 0 đến 2, ngày 3 đến 7, ngày 8 đến 35.</li><li><strong>Conversion value:</strong> giá trị chi tiết 6 bit (0 đến 63) hoặc giá trị thô (thấp, trung bình, cao) mô tả hành vi sau cài.</li><li><strong>Crowd anonymity:</strong> lượng cài đặt càng nhỏ, dữ liệu trả về càng ít chi tiết. Chiến dịch nhỏ có thể chỉ nhận giá trị thô hoặc không có.</li><li><strong>Không có dữ liệu cấp người dùng</strong> và có giới hạn về số chiều chiến dịch.</li></ul>
<p>Hệ quả: tín hiệu chậm hơn, thô hơn, và việc phân mảnh thành nhiều chiến dịch nhỏ bị trừng phạt bằng mất dữ liệu.</p>`,
          res: ['apple-skan-docs', 'mdm-blog']
        },
        {
          title: 'AdAttributionKit và hướng đi của Apple', min: 40,
          body: `<p><strong>AdAttributionKit (AAK)</strong> là khung kế nhiệm, xây trên nền SKAdNetwork và tương tác được với nó. Tài liệu SKAdNetwork của Apple hiện hướng dẫn dùng AdAttributionKit cho chiến dịch quảng cáo ứng dụng trên App Store và các chợ ứng dụng thay thế.</p>
<h4>Điểm bổ sung so với SKAN</h4>
<ul><li>Hỗ trợ <strong>chợ ứng dụng thay thế</strong> (xuất hiện ở EU theo Đạo luật Thị trường số).</li><li>Hỗ trợ đo <strong>kích hoạt lại</strong> (re-engagement), không chỉ cài đặt mới.</li><li>Các bản cập nhật tiếp tục mở rộng linh hoạt về cửa sổ và cấu hình.</li></ul>
<p>Apple chưa công bố ngày ngừng toàn bộ SKAdNetwork, nhưng hướng đi đã rõ. Với người làm UA, điều cần làm là: bảo đảm MMP và các mạng quảng cáo đã hỗ trợ AAK, và theo dõi ghi chú phát hành của Apple mỗi kỳ WWDC.</p>
<div class="callout"><b>Về "probabilistic attribution":</b> chính sách của Apple cấm fingerprinting, tức suy ra danh tính thiết bị từ các tín hiệu như địa chỉ IP và cấu hình máy khi người dùng không cho phép theo dõi. Hãy hỏi rõ đối tác đo lường về phương pháp họ dùng.</div>`,
          res: ['apple-aak-docs', 'apple-skan-docs']
        },
        {
          title: 'Android và bối cảnh pháp lý', min: 35,
          body: `<p>Trên Android, phân bổ dựa trên <strong>Google Advertising ID (GAID)</strong> và <strong>Google Play Install Referrer</strong>. Người dùng có thể xoá mã quảng cáo, nhưng mặc định vẫn có nên dữ liệu đầy đủ hơn iOS nhiều.</p>
<p>Google từng phát triển <strong>Privacy Sandbox trên Android</strong> (Attribution Reporting API, Topics, Protected Audience, SDK Runtime) như một lộ trình thay thế GAID. Tháng 10 năm 2025, Google thông báo ngừng phần lớn các công nghệ Privacy Sandbox, gồm các công nghệ nêu trên, trên cả Chrome lẫn Android (một số thành phần như CHIPS, FedCM và Private State Tokens được giữ lại). Vì vậy cơ chế phân bổ trên Android về cơ bản không đổi, và tài liệu nào dạy Attribution Reporting API của Sandbox đã lỗi thời.</p>
<h4>Pháp lý</h4>
<ul><li><strong>EU, Anh:</strong> GDPR và ePrivacy yêu cầu sự đồng ý; Đạo luật Thị trường số buộc các nền tảng lớn chỉ dùng dữ liệu khi có tín hiệu đồng ý. Google yêu cầu nhà quảng cáo truyền tín hiệu này (Consent Mode và các tham số tương ứng trong SDK).</li><li><strong>ATT</strong> vẫn có hiệu lực, dù bị cơ quan cạnh tranh ở Pháp, Ý, Đức xử lý: theo thông cáo chính thức, Pháp phạt Apple 150 triệu euro (3/2025), Ý phạt khoảng 98,6 triệu euro (12/2025), còn Đức khép vụ việc bằng cam kết ràng buộc (8/2026), buộc Apple sửa cách xin đồng ý.</li></ul>`,
          res: ['privacy-sandbox-update', 'google-consent-mode']
        },
        {
          title: 'Đo lường thực tế khi dữ liệu bị giới hạn', min: 50,
          body: `<p><strong>Thiết kế sơ đồ conversion value</strong> là quyết định chiến lược: bạn chỉ có 64 giá trị để mã hoá hành vi đầu đời của người dùng. Cách phổ biến:</p>
<ul><li>Dành các bit cho <strong>khoảng doanh thu</strong> (hữu ích cho tối ưu theo ROAS).</li><li>Hoặc mã hoá <strong>cột mốc phễu</strong> (đăng ký, dùng thử, mua lần đầu) với ứng dụng thuê bao.</li><li>Chọn tín hiệu sớm có tương quan mạnh nhất với LTV dài hạn.</li></ul>
<h4>Bộ công cụ ra quyết định</h4>
<ul><li><strong>Dữ liệu SKAN, AAK</strong> cho tối ưu trong kênh trên iOS.</li><li><strong>Chuyển đổi được mô hình hoá</strong> do nền tảng và MMP ước lượng.</li><li><strong>Số liệu hỗn hợp:</strong> tổng chi, tổng cài đặt, tổng doanh thu theo ngày và quốc gia.</li><li><strong>Thử nghiệm tăng thêm</strong> theo địa lý và <strong>mô hình media mix</strong> để phân bổ ngân sách giữa các kênh (Level 5).</li></ul>
<p>Hợp nhất chiến dịch để vượt ngưỡng ẩn danh, và chấp nhận rằng trên iOS bạn quản lý theo tổng thể nhiều hơn là theo từng người dùng.</p>`,
          res: ['mdm-blog', 'appsflyer-reports']
        }
      ],
      takeaways: [
        'MMP cho một nguồn số thống nhất và phát hiện gian lận.',
        'SKAN trả dữ liệu chậm, tổng hợp và phụ thuộc quy mô chiến dịch.',
        'AdAttributionKit là hướng đi của Apple; Privacy Sandbox trên Android đã bị ngừng.',
        'Sơ đồ conversion value phải mã hoá tín hiệu sớm dự báo tốt LTV.'
      ],
      assignment: {
        title: 'Thiết kế sơ đồ conversion value',
        brief: `<ol><li>Với ứng dụng đã chọn, liệt kê 6 đến 8 sự kiện đầu đời (48 giờ đầu) có khả năng dự báo giá trị dài hạn.</li><li>Thiết kế sơ đồ 64 giá trị: phân bit cho doanh thu, cột mốc hoặc kết hợp. Giải thích lựa chọn.</li><li>Xác định giá trị thô (thấp, trung bình, cao) cho cửa sổ postback thứ hai và thứ ba.</li><li>Viết một trang tóm tắt cho lãnh đạo: trên iOS ta đo được gì, không đo được gì, và ra quyết định ngân sách bằng cách nào.</li></ol>`,
        deliverable: 'Bảng sơ đồ conversion value và bản tóm tắt một trang.'
      },
      quiz: [
        { q: 'ATT yêu cầu ứng dụng làm gì?', a: ['Trả phí cho Apple theo mỗi cài đặt', 'Xin phép người dùng trước khi theo dõi họ qua ứng dụng và website của công ty khác', 'Tắt toàn bộ quảng cáo', 'Mã hoá toàn bộ dữ liệu'], correct: 1, why: 'App Tracking Transparency buộc ứng dụng hiển thị lời xin phép theo dõi.' },
        { q: 'Giá trị chuyển đổi chi tiết của SKAdNetwork có bao nhiêu mức?', a: ['3', '10', '64', '256'], correct: 2, why: 'Giá trị chi tiết dài 6 bit, từ 0 đến 63.' },
        { q: 'Vì sao chiến dịch iOS nhỏ lẻ nhận ít dữ liệu hơn?', a: ['Vì Apple tính phí theo dữ liệu', 'Vì ngưỡng ẩn danh theo quy mô khiến chiến dịch ít cài đặt chỉ nhận dữ liệu thô hoặc không có', 'Vì MMP không hỗ trợ', 'Vì quảng cáo không được duyệt'], correct: 1, why: 'Crowd anonymity giảm độ chi tiết khi lượng cài đặt thấp.' },
        { q: 'Tình trạng Privacy Sandbox trên Android tính đến cuối 2025?', a: ['Đã thay thế hoàn toàn GAID', 'Google thông báo ngừng; phân bổ vẫn dựa trên GAID và install referrer', 'Bắt buộc với mọi ứng dụng', 'Chỉ áp dụng tại EU'], correct: 1, why: 'Google ngừng các công nghệ Privacy Sandbox vào tháng 10 năm 2025.' },
        { q: 'AdAttributionKit bổ sung điều gì so với SKAdNetwork?', a: ['Dữ liệu cấp người dùng', 'Hỗ trợ chợ ứng dụng thay thế và đo kích hoạt lại', 'Bỏ độ trễ postback', 'Cho phép fingerprinting'], correct: 1, why: 'AAK mở rộng sang chợ thay thế và re-engagement, vẫn giữ nguyên tắc bảo vệ quyền riêng tư.' }
      ],
      readings: ['singular-roi-index', 'gordon-close-enough']
    },
    {
      id: 'm4-3', hours: 8,
      title: 'Các kênh UA chính',
      summary: 'Google App campaigns, Meta Advantage+ app campaigns, Apple Ads, mạng quảng cáo SDK và sáng tạo cho ứng dụng.',
      objectives: [
        'Thiết lập Google App campaigns với mục tiêu và sự kiện phù hợp.',
        'Vận hành chiến dịch ứng dụng trên Meta trong điều kiện iOS.',
        'Xây cấu trúc tài khoản Apple Ads theo nhóm từ khoá.',
        'Đánh giá vai trò của mạng quảng cáo SDK, DSP và quảng cáo chơi thử.',
        'Phân bổ ngân sách giữa các kênh theo chất lượng người dùng.'
      ],
      lessons: [
        {
          title: 'Google App campaigns', min: 50,
          body: `<p>App campaigns chạy trên Search, Google Play, YouTube, Discover và mạng hiển thị. Bạn không chọn từ khoá hay vị trí; hệ thống tự ghép thành phần quảng cáo và tự phân phối.</p>
<h4>Ba loại chiến dịch</h4>
<ul><li><strong>Cài đặt:</strong> tối ưu theo số cài đặt (tCPI) hoặc theo người dùng có khả năng thực hiện hành động trong app (tCPA), hoặc theo giá trị (tROAS).</li><li><strong>Tương tác:</strong> đưa người đã cài quay lại thực hiện hành động.</li><li><strong>Đăng ký trước</strong> (Android): tạo nhu cầu trước khi phát hành.</li></ul>
<h4>Đòn bẩy bạn kiểm soát</h4>
<ul><li><strong>Sự kiện tối ưu</strong> gửi từ Firebase, GA4 hoặc MMP. Chọn sự kiện đủ sâu để phản ánh giá trị và đủ nhiều để hệ thống học.</li><li><strong>Thành phần:</strong> văn bản, ảnh, video nhiều tỷ lệ, HTML5. Thay các thành phần có hiệu quả kém theo báo cáo thành phần của Google Ads (tên nhãn đánh giá có thể thay đổi, kiểm tra tài liệu hiện hành).</li><li><strong>Ngân sách và mục tiêu giá thầu.</strong> Google khuyến nghị ngân sách ngày gấp nhiều lần giá thầu mục tiêu để hệ thống đủ dữ liệu.</li></ul>
<p>Lộ trình thường thấy: bắt đầu bằng tCPI để có lượng, chuyển sang tCPA khi sự kiện đủ dữ liệu, rồi tROAS khi có dữ liệu doanh thu.</p>`,
          res: ['google-app-campaigns-help', 'google-apps-cert']
        },
        {
          title: 'Meta Advantage+ app campaigns', min: 45,
          body: `<p>Chiến dịch ứng dụng trên Meta tự động hoá đối tượng, vị trí và phân bổ sáng tạo, tương tự chiến dịch bán hàng Advantage+ ở Level 3.</p>
<ul><li><strong>Tối ưu theo:</strong> cài đặt, sự kiện trong app, hoặc giá trị.</li><li><strong>Tín hiệu:</strong> SDK của Meta hoặc tích hợp qua MMP; trên iOS dùng thêm SKAdNetwork và Aggregated Event Measurement.</li><li><strong>Sáng tạo:</strong> đa dạng về góc tiếp cận và định dạng là đòn bẩy chính, vì hệ thống dựa vào sáng tạo để tìm các nhóm người dùng khác nhau.</li></ul>
<p>Trên iOS, dữ liệu phân bổ về chậm và thô hơn, và Meta đặt một số giới hạn cấu hình riêng cho chiến dịch ứng dụng iOS (kiểm tra tài liệu hiện hành). Hai thói quen cần bỏ: chia nhỏ theo từng đối tượng, và ra quyết định theo số liệu một ngày.</p>
<p>Với ứng dụng thuê bao, sáng tạo dạng người dùng tự quay cho thấy sản phẩm đang được dùng và nêu rõ kết quả thường hiệu quả nhất. Nhớ tách báo cáo iOS và Android vì cách đo khác nhau, số liệu không so trực tiếp được.</p>`,
          res: ['meta-app-campaigns', 'meta-blueprint']
        },
        {
          title: 'Apple Ads', min: 55,
          body: `<p>Apple Search Ads đã đổi tên thành <strong>Apple Ads</strong>. Quảng cáo xuất hiện ở bốn nhóm vị trí trong App Store: tab Today, tab Search, kết quả tìm kiếm và trang sản phẩm khi người dùng duyệt (số khe quảng cáo trong kết quả tìm kiếm có thể thay đổi theo thời gian).</p>
<p>Quảng cáo trong kết quả tìm kiếm bắt ý định cao nhất của cả hệ sinh thái: người dùng đang gõ tìm một ứng dụng. Cấu trúc tài khoản phổ biến theo bốn nhóm:</p>
<table><tr><th>Chiến dịch</th><th>Từ khoá</th><th>Vai trò</th></tr>
<tr><td>Brand</td><td>Tên ứng dụng của bạn</td><td>Phòng thủ; CPA rẻ nhưng tính tăng thêm thấp</td></tr>
<tr><td>Category</td><td>Từ mô tả danh mục, chức năng</td><td>Mở rộng chính</td></tr>
<tr><td>Competitor</td><td>Tên ứng dụng đối thủ</td><td>Giành người dùng đang cân nhắc</td></tr>
<tr><td>Discovery</td><td>Broad match và Search Match</td><td>Tìm từ khoá mới, rồi chuyển sang exact</td></tr></table>
<p><strong>Custom product pages</strong> cho phép dẫn mỗi nhóm từ khoá tới một phiên bản trang sản phẩm khớp ý định, giúp tăng tỷ lệ chuyển đổi.</p>
<p>Dữ liệu từ khoá của Apple Ads cũng là nguồn nghiên cứu tốt nhất cho ASO. Apple có chương trình <strong>chứng chỉ Apple Ads miễn phí</strong>, gồm các bài học ngắn và một bài thi.</p>`,
          res: ['apple-ads-cert', 'mobileaction-university']
        },
        {
          title: 'Mạng quảng cáo SDK, DSP và quảng cáo chơi thử', min: 45,
          body: `<p>Các mạng như AppLovin, Unity Ads, Mintegral và DSP như Moloco, Liftoff phân phối quảng cáo bên trong ứng dụng khác, chủ yếu là game. Đây là nguồn chủ lực của UA cho game.</p>
<h4>Định dạng</h4>
<ul><li><strong>Video có thưởng (rewarded):</strong> người chơi chọn xem để nhận phần thưởng, mức chú ý cao.</li><li><strong>Xen kẽ (interstitial):</strong> toàn màn hình giữa các phiên.</li><li><strong>Chơi thử (playable):</strong> bản demo tương tác ngắn. Người cài sau khi chơi thử thường có chất lượng cao hơn vì đã biết lối chơi.</li><li><strong>Thẻ kết thúc (end card):</strong> màn hình cuối sau video, ảnh hưởng lớn tới IPM.</li></ul>
<p>Các mạng này dùng học máy tối ưu theo ROAS dựa trên dữ liệu doanh thu bạn gửi về. Chất lượng giữa các nguồn chênh nhau rất nhiều, nên phải đánh giá bằng ROAS và retention theo cohort, đồng thời theo dõi gian lận.</p>
<p>Báo cáo sáng tạo hằng năm của Liftoff và AppsFlyer, cùng các bài phân tích trên Deconstructor of Fun, cho thấy định dạng và mô-típ nào đang hiệu quả theo từng thể loại.</p>`,
          res: ['liftoff-resources', 'unity-growing-game', 'deconstructor-of-fun']
        },
        {
          title: 'Phối hợp kênh và phân bổ ngân sách', min: 40,
          body: `<p>Thứ tự mở kênh thường gặp với ứng dụng mới:</p>
<ol><li><strong>Apple Ads</strong> (brand và category) cùng <strong>ASO</strong>: bắt nhu cầu sẵn có.</li><li><strong>Meta</strong> và <strong>Google App campaigns:</strong> quy mô lớn, học nhanh.</li><li><strong>TikTok:</strong> khi đã có năng lực sản xuất video.</li><li><strong>Mạng SDK và DSP:</strong> khi cần mở rộng tiếp, đặc biệt với game.</li></ol>
<h4>Phân bổ theo chất lượng</h4>
<ul><li>So các kênh bằng <strong>ROAS theo cohort tại cùng mốc ngày</strong> và retention, không so bằng CPI.</li><li>Áp dụng nguyên tắc ROAS biên ở module 3.6 cho từng kênh.</li><li>Kênh bắt nhu cầu (tìm kiếm thương hiệu) có ROAS đẹp nhưng tính tăng thêm thấp. Kiểm chứng bằng cách tạm dừng có kiểm soát.</li></ul>
<p>Mỗi kênh mới làm tăng độ phức tạp đo lường. Chỉ thêm kênh khi kênh hiện tại đã chạm lợi suất giảm dần.</p>`,
          res: ['tiktok-academy', 'singular-roi-index']
        }
      ],
      takeaways: [
        'Với App campaigns và Advantage+, sự kiện tối ưu và sáng tạo là hai đòn bẩy chính.',
        'Apple Ads bắt ý định cao nhất và là nguồn dữ liệu từ khoá cho ASO.',
        'Quảng cáo chơi thử mang về người dùng đã hiểu sản phẩm.',
        'So sánh kênh bằng ROAS và retention theo cohort, không bằng CPI.'
      ],
      assignment: {
        title: 'Kế hoạch kênh UA và chứng chỉ Apple Ads',
        brief: `<ol><li>Thiết kế cấu trúc Apple Ads bốn chiến dịch cho ứng dụng của bạn, mỗi chiến dịch 10 từ khoá và kiểu khớp.</li><li>Lập kế hoạch Google App campaigns: loại chiến dịch, sự kiện tối ưu, lộ trình giá thầu, danh sách thành phần cần sản xuất.</li><li>Viết 3 ý tưởng sáng tạo cho Meta và 1 ý tưởng quảng cáo chơi thử.</li><li>Hoàn thành chứng chỉ Apple Ads.</li></ol>`,
        deliverable: 'Kế hoạch kênh UA và chứng chỉ Apple Ads.'
      },
      quiz: [
        { q: 'Trong Google App campaigns, nhà quảng cáo kiểm soát trực tiếp điều gì?', a: ['Từng từ khoá', 'Từng vị trí hiển thị', 'Sự kiện tối ưu, thành phần quảng cáo, ngân sách và mục tiêu giá thầu', 'Thứ hạng trên Google Play'], correct: 2, why: 'Phân phối và ghép quảng cáo được tự động hoá; bạn điều khiển tín hiệu, thành phần và mục tiêu.' },
        { q: 'Chiến dịch Discovery trong Apple Ads dùng để làm gì?', a: ['Phòng thủ từ khoá thương hiệu', 'Tìm từ khoá mới bằng broad match và Search Match', 'Chạy trên tab Today', 'Loại trừ đối thủ'], correct: 1, why: 'Discovery khai phá truy vấn mới, từ khoá tốt được chuyển sang exact match.' },
        { q: 'Vì sao người cài sau quảng cáo chơi thử thường có chất lượng cao hơn?', a: ['Vì quảng cáo chơi thử rẻ hơn', 'Vì họ đã trải nghiệm lối chơi trước khi cài', 'Vì cửa hàng ưu tiên', 'Vì không bị giới hạn bởi ATT'], correct: 1, why: 'Người dùng tự chọn sau khi đã thử sản phẩm.' },
        { q: 'So sánh hiệu quả giữa các kênh UA nên dùng chỉ số nào?', a: ['CPI', 'CTR', 'ROAS và retention theo cohort tại cùng mốc ngày', 'Số lượt hiển thị'], correct: 2, why: 'Chỉ ROAS và retention theo cohort phản ánh giá trị người dùng từ mỗi nguồn.' },
        { q: 'Custom product pages giúp gì cho Apple Ads?', a: ['Giảm phí cửa hàng', 'Dẫn mỗi nhóm từ khoá tới trang sản phẩm khớp ý định, tăng tỷ lệ chuyển đổi', 'Bỏ qua duyệt ứng dụng', 'Tăng giới hạn ngân sách'], correct: 1, why: 'Trang khớp ý định tìm kiếm chuyển đổi tốt hơn trang mặc định.' }
      ],
      readings: ['google-play-academy', 'reddit-ads-formula']
    },
    {
      id: 'm4-4', hours: 6,
      title: 'ASO: tối ưu cửa hàng ứng dụng',
      summary: 'Hai trụ của ASO là khả năng được tìm thấy và tỷ lệ chuyển đổi, cùng các công cụ thử nghiệm của Apple và Google.',
      objectives: [
        'Phân biệt cách App Store và Google Play lập chỉ mục từ khoá.',
        'Nghiên cứu từ khoá và viết metadata tối ưu.',
        'Tối ưu biểu tượng, ảnh chụp màn hình, video và đánh giá.',
        'Dùng các công cụ thử nghiệm trang sản phẩm của hai cửa hàng.',
        'Đo lường hiệu quả ASO.'
      ],
      lessons: [
        {
          title: 'Hai trụ của ASO và khác biệt giữa hai cửa hàng', min: 45,
          body: `<p>ASO có hai mục tiêu: <strong>được tìm thấy</strong> (thứ hạng từ khoá, đề xuất, bảng xếp hạng) và <strong>được chọn</strong> (tỷ lệ chuyển đổi của trang sản phẩm).</p>
<table><tr><th></th><th>App Store (iOS)</th><th>Google Play</th></tr>
<tr><td>Trường văn bản được lập chỉ mục</td><td>Tên (30 ký tự), phụ đề (30), trường từ khoá ẩn (100 byte theo trang thông số của App Store Connect, trang tìm kiếm của Apple ghi 100 ký tự; với chữ có dấu, số byte vượt số ký tự) và danh mục ứng dụng</td><td>Tên (30), mô tả ngắn (80), mô tả dài (4.000)</td></tr>
<tr><td>Mô tả dài</td><td>Không ảnh hưởng tìm kiếm</td><td>Được lập chỉ mục</td></tr>
<tr><td>Cập nhật metadata</td><td>Tên, phụ đề, từ khoá cần gửi phiên bản mới để duyệt; văn bản quảng bá (promotional text) sửa được không cần phiên bản mới</td><td>Linh hoạt hơn</td></tr>
<tr><td>Thử nghiệm</td><td>Product Page Optimization, Custom Product Pages</td><td>Store listing experiments, Custom store listings</td></tr></table>
<p>Ngoài văn bản, cả hai cửa hàng đều tính tới tín hiệu hành vi: tốc độ cài đặt, tỷ lệ chuyển đổi, đánh giá, mức gắn bó và tỷ lệ gỡ. Sản phẩm tốt và UA có chất lượng vì thế cũng là ASO.</p>`,
          res: ['phiture-aso-stack', 'apple-appstore-marketing']
        },
        {
          title: 'Nghiên cứu từ khoá và metadata', min: 45,
          body: `<ol><li><strong>Thu thập:</strong> chức năng chính, vấn đề người dùng muốn giải quyết, tên danh mục, từ đối thủ đang xếp hạng, gợi ý tìm kiếm của cửa hàng, dữ liệu Apple Ads.</li><li><strong>Đánh giá:</strong> mức liên quan, lượng tìm, độ cạnh tranh. Ứng dụng mới nên bắt đầu với cụm dài, cạnh tranh thấp.</li><li><strong>Phân bổ:</strong> từ quan trọng nhất vào tên, kế tiếp vào phụ đề hoặc mô tả ngắn, phần còn lại vào trường từ khoá (iOS) hoặc mô tả dài (Android).</li></ol>
<h4>Quy tắc cho trường từ khoá iOS</h4>
<ul><li>Phân tách bằng dấu phẩy, không khoảng trắng.</li><li>Không lặp từ đã có trong tên và phụ đề.</li><li>Thông lệ là dùng từ đơn vì hệ thống tự ghép từ giữa tên, phụ đề và trường từ khoá thành cụm; đây là quy ước thực hành, không phải yêu cầu của Apple.</li></ul>
<p>Trên Google Play, viết mô tả tự nhiên, đưa từ khoá chính vào vài lần ở vị trí hợp lý. Nhồi từ khoá vi phạm chính sách.</p>
<p><strong>Bản địa hoá</strong> metadata cho từng thị trường thường là cách tăng độ phủ từ khoá nhanh nhất.</p>`,
          res: ['apptweak-blog', 'mobileaction-university']
        },
        {
          title: 'Tối ưu chuyển đổi trang sản phẩm', min: 50,
          body: `<p>Phần lớn người dùng quyết định trong vài giây, chỉ dựa trên những gì thấy ở màn hình đầu: biểu tượng, tên, điểm đánh giá và hai đến ba ảnh đầu tiên.</p>
<ul><li><strong>Biểu tượng:</strong> đơn giản, nhận ra được ở kích thước nhỏ, khác biệt trong danh mục.</li><li><strong>Ảnh chụp màn hình:</strong> mỗi ảnh một lợi ích kèm chú thích ngắn. Ảnh đầu mang đề xuất giá trị mạnh nhất.</li><li><strong>Video xem trước:</strong> cho thấy trải nghiệm thật trong vài giây đầu.</li><li><strong>Đánh giá:</strong> điểm trung bình ảnh hưởng mạnh tới chuyển đổi. Xin đánh giá bằng API chính thức, vào thời điểm người dùng vừa đạt kết quả tốt. Phản hồi đánh giá tiêu cực.</li></ul>
<h4>Công cụ thử nghiệm</h4>
<ul><li><strong>Apple Product Page Optimization:</strong> thử biểu tượng, ảnh, video trên lưu lượng tự nhiên.</li><li><strong>Apple Custom Product Pages:</strong> nhiều phiên bản trang, mỗi phiên bản có URL riêng dùng cho quảng cáo.</li><li><strong>Google Play store listing experiments:</strong> thử hình ảnh và văn bản, kể cả theo từng ngôn ngữ.</li></ul>`,
          res: ['apple-appstore-marketing', 'google-play-academy']
        },
        {
          title: 'Sự kiện trong app, đề xuất và ASO kết hợp trả phí', min: 35,
          body: `<p><strong>In-app events</strong> (App Store) và <strong>promotional content</strong> (Google Play) cho phép quảng bá sự kiện, nội dung mới, ưu đãi ngay trên cửa hàng. Chúng xuất hiện trong kết quả tìm kiếm và các tab biên tập, giúp tiếp cận cả người dùng mới lẫn người đã gỡ.</p>
<p><strong>Được cửa hàng đề xuất (featuring)</strong> có thể mang lượng cài đặt lớn. Cả Apple và Google có biểu mẫu để nhà phát triển đề cử. Điều kiện ngầm: chất lượng sản phẩm cao, dùng công nghệ mới của nền tảng, bản địa hoá tốt.</p>
<h4>ASO và trả phí bổ trợ nhau</h4>
<ul><li>Dữ liệu từ khoá Apple Ads cho biết từ nào thật sự chuyển đổi, giúp ưu tiên metadata.</li><li>Trang sản phẩm chuyển đổi tốt hơn làm giảm CPI của mọi kênh trả phí, vì mọi lượt nhấp đều đi qua đó.</li><li>Nhiều người làm nghề cho rằng lượng cài đặt trả phí cải thiện thứ hạng từ khoá và danh mục; cửa hàng không xác nhận, nên đừng dựa vào giả định này để biện minh chi tiêu.</li></ul>`,
          res: ['apple-appstore-marketing', 'phiture-aso-stack']
        },
        {
          title: 'Đo lường ASO', min: 30,
          body: `<table><tr><th>Câu hỏi</th><th>Chỉ số</th><th>Nguồn</th></tr>
<tr><td>Có được tìm thấy không?</td><td>Lượt hiển thị, thứ hạng từ khoá</td><td>App Store Connect, Play Console, công cụ ASO</td></tr>
<tr><td>Có được nhấp không?</td><td>Lượt xem trang sản phẩm ÷ Lượt hiển thị</td><td>App Store Connect</td></tr>
<tr><td>Có được cài không?</td><td>Cài đặt ÷ Lượt xem trang sản phẩm, tách theo nguồn</td><td>App Store Connect, Play Console</td></tr>
<tr><td>Người cài có giá trị không?</td><td>Retention, doanh thu của người dùng tự nhiên</td><td>Công cụ phân tích sản phẩm</td></tr></table>
<p>Tách nguồn lưu lượng khi đọc tỷ lệ chuyển đổi: người đến từ tìm kiếm thương hiệu chuyển đổi rất cao, người đến từ duyệt (browse) thấp hơn nhiều. Tỷ lệ tổng thay đổi có thể chỉ do cơ cấu nguồn thay đổi.</p>
<p>Ghi nhật ký mọi thay đổi metadata và hình ảnh kèm ngày, để đối chiếu với biến động về sau.</p>`,
          res: ['apptweak-blog']
        }
      ],
      takeaways: [
        'ASO gồm được tìm thấy và được chọn; cả hai đều cần.',
        'App Store và Google Play lập chỉ mục khác nhau, nên metadata phải viết riêng.',
        'Màn hình đầu của trang sản phẩm quyết định phần lớn chuyển đổi.',
        'Trang sản phẩm tốt hơn làm mọi kênh trả phí rẻ hơn.'
      ],
      assignment: {
        title: 'Audit ASO và đề xuất thử nghiệm',
        brief: `<ol><li>Audit trang sản phẩm của ứng dụng trên cả hai cửa hàng so với 3 đối thủ: tên, phụ đề, ảnh, video, điểm đánh giá.</li><li>Lập danh sách 40 từ khoá và viết lại tên, phụ đề, trường từ khoá (iOS), mô tả ngắn (Android).</li><li>Thiết kế phác thảo bộ 5 ảnh chụp màn hình mới.</li><li>Đề xuất 2 thử nghiệm trang sản phẩm: giả thuyết, biến thể, chỉ số.</li></ol>`,
        deliverable: 'Báo cáo audit, metadata mới, phác thảo ảnh và kế hoạch thử nghiệm.'
      },
      quiz: [
        { q: 'Trên App Store, mô tả dài của ứng dụng có ảnh hưởng tới thứ hạng tìm kiếm không?', a: ['Có, mạnh nhất', 'Không, chỉ tên, phụ đề và trường từ khoá được lập chỉ mục', 'Chỉ 100 ký tự đầu', 'Chỉ khi có từ khoá in đậm'], correct: 1, why: 'App Store không lập chỉ mục mô tả dài; Google Play thì có.' },
        { q: 'Quy tắc nào đúng với trường từ khoá iOS?', a: ['Lặp lại từ trong tên để tăng trọng số', 'Phân tách bằng dấu phẩy, không khoảng trắng, không lặp từ đã có trong tên', 'Viết thành câu hoàn chỉnh', 'Thêm tên đối thủ càng nhiều càng tốt'], correct: 1, why: 'Lặp từ và khoảng trắng lãng phí giới hạn 100 byte của trường từ khoá.' },
        { q: 'Thời điểm tốt nhất để xin đánh giá?', a: ['Ngay khi mở ứng dụng lần đầu', 'Khi người dùng vừa đạt một kết quả tốt', 'Khi ứng dụng gặp lỗi', 'Mỗi lần mở ứng dụng'], correct: 1, why: 'Người dùng vừa có trải nghiệm tích cực dễ cho đánh giá cao.' },
        { q: 'Vì sao cải thiện tỷ lệ chuyển đổi trang sản phẩm làm giảm CPI trả phí?', a: ['Vì cửa hàng giảm phí', 'Vì mọi lượt nhấp quảng cáo đều qua trang sản phẩm trước khi cài', 'Vì CPM giảm', 'Vì ATT không áp dụng'], correct: 1, why: 'Cùng số lượt nhấp cho nhiều cài đặt hơn, nên chi phí mỗi cài đặt giảm.' },
        { q: 'Tỷ lệ chuyển đổi tổng của trang sản phẩm giảm. Cần kiểm tra gì trước?', a: ['Đổi biểu tượng ngay', 'Cơ cấu nguồn lưu lượng có thay đổi không', 'Giảm giá ứng dụng', 'Xoá đánh giá xấu'], correct: 1, why: 'Tỷ trọng lưu lượng duyệt tăng có thể kéo tỷ lệ tổng xuống dù trang không tệ đi.' }
      ],
      readings: ['mobileaction-university', 'sensortower-resources']
    },
    {
      id: 'm4-5', hours: 8,
      title: 'LTV, cohort và mô hình kiếm tiền',
      summary: 'Phân tích cohort, đường cong giữ chân, các mô hình doanh thu, cách dự báo LTV và đặt mục tiêu ROAS theo thời gian hoàn vốn.',
      objectives: [
        'Đọc bảng cohort và đường cong giữ chân.',
        'So sánh các mô hình IAP, IAA, thuê bao và hybrid.',
        'Dự báo LTV bằng phương pháp đường cong giữ chân nhân doanh thu ngày.',
        'Suy ra mục tiêu ROAS sớm từ đường cong LTV và giới hạn hoàn vốn.',
        'Nêu ý tưởng chính của các mô hình xác suất về giá trị khách hàng.'
      ],
      lessons: [
        {
          title: 'Phân tích cohort và đường cong giữ chân', min: 50,
          body: `<p><strong>Cohort</strong> là nhóm người dùng có chung thời điểm bắt đầu, thường là ngày cài đặt. Phân tích theo cohort tách hiệu ứng của người dùng mới khỏi người dùng cũ, điều mà số tổng không làm được.</p>
<p><strong>Retention Dn</strong> là tỷ lệ người của cohort hoạt động vào đúng ngày thứ n. Vẽ theo thời gian, ta có <strong>đường cong giữ chân</strong>: rơi nhanh những ngày đầu rồi phẳng dần.</p>
<ul><li>Đường cong <strong>thoải dần và còn một nhóm người dùng lõi ở lại lâu</strong> (thường thấy rõ từ khoảng D30 trở đi): đây là dấu hiệu sản phẩm có product-market fit.</li><li>Đường cong <strong>tiến về không</strong>: mọi người dùng rồi cũng rời đi. Mua thêm người dùng lúc này chỉ như đổ nước vào xô thủng.</li></ul>
<p>Đường cong giữ chân thường khớp tốt với hàm luỹ thừa:</p>
<div class="formula"><code>Retention(t) ≈ a × t<sup>−b</sup></code></div>
<p>Hàm này chỉ dùng cho t từ 1 trở đi (D0 luôn là 100%) và không có điểm phẳng, nên chỉ có giá trị tới chân trời mà dữ liệu hỗ trợ. Khớp nó trên dữ liệu các ngày đầu cho phép ngoại suy gần đúng retention tới ngày 90, 180, có thể xa hơn nếu bạn đối chiếu được với cohort cũ. Luôn so sánh cohort theo nguồn, quốc gia, nền tảng và phiên bản.</p>`,
          res: ['mdm-ltv201', 'gameanalytics-reports']
        },
        {
          title: 'Các mô hình kiếm tiền', min: 45,
          body: `<table><tr><th>Mô hình</th><th>Chỉ số chính</th><th>Đặc điểm</th></tr>
<tr><td>IAP (mua trong app)</td><td>Tỷ lệ người trả tiền, ARPPU</td><td>Doanh thu tập trung ở số ít người trả nhiều; phân phối rất lệch</td></tr>
<tr><td>IAA (quảng cáo trong app)</td><td>eCPM, số lượt hiển thị mỗi người dùng ngày, ARPDAU</td><td>Doanh thu đều trên mọi người dùng, phụ thuộc thị trường quảng cáo</td></tr>
<tr><td>Thuê bao</td><td>Tỷ lệ bắt đầu dùng thử, chuyển đổi trả phí, tỷ lệ gia hạn, churn</td><td>Doanh thu dự báo được, LTV phụ thuộc mạnh vào tỷ lệ gia hạn</td></tr>
<tr><td>Hybrid</td><td>Kết hợp các chỉ số trên</td><td>Xu hướng chủ đạo ở game; kiếm tiền từ cả người trả và không trả</td></tr></table>
<div class="formula"><code>ARPDAU = Doanh thu ngày ÷ Số người dùng hoạt động ngày</code><br><code>Doanh thu IAA ngày ≈ DAU × Lượt hiển thị mỗi người × eCPM ÷ 1.000</code></div>
<p>Phí cửa hàng (thường từ 15 đến 30% tuỳ chương trình, quy mô doanh thu và loại giao dịch; kiểm tra bảng phí hiện hành của Apple và Google) phải được trừ ra khi tính LTV. Tính LTV trên doanh thu gộp trước phí là lỗi rất phổ biến.</p>`,
          res: ['unity-growing-game', 'freemium-economics', 'appsflyer-reports']
        },
        {
          title: 'Dự báo LTV', min: 60,
          body: `<p>Phương pháp đơn giản và được dùng rộng rãi, do Eric Seufert trình bày:</p>
<div class="formula"><code>LTV(T) ≈ ARPDAU(0) + Σ<sub>t=1..T</sub> Retention(t) × ARPDAU(t)</code><br><em>(ngày cài đặt D0 tính riêng vì retention bằng 100%; ARPDAU có thể thay đổi theo tuổi người dùng, không nhất thiết là hằng số)</em></div>
<p>Các bước: (1) lấy retention thật của vài ngày đầu, (2) khớp đường cong và ngoại suy tới chân trời T, (3) nhân với ARPDAU, (4) cộng dồn, (5) trừ phí cửa hàng.</p>
<p>Với thuê bao, LTV được tính theo chuỗi gia hạn:</p>
<div class="formula"><code>LTV ≈ Giá × (1 − phí) × (1 + r<sub>1</sub> + r<sub>1</sub>r<sub>2</sub> + …)</code>, với r<sub>i</sub> là tỷ lệ gia hạn kỳ i. Đây là giá trị của <em>một người đã trả tiền</em>; LTV trên mỗi lượt cài đặt bằng giá trị này nhân với tỷ lệ từ cài đặt sang trả phí.</div>
<h4>Các mô hình nâng cao</h4>
<ul><li><strong>BG/NBD</strong> (Fader, Hardie và Lee, 2005, đề xuất như một lựa chọn dễ dùng hơn Pareto/NBD): mô hình xác suất cho bối cảnh mua không theo hợp đồng, ước lượng xác suất khách còn "sống" và số giao dịch tương lai.</li><li><strong>pLTV bằng học máy:</strong> dự báo giá trị từng người dùng từ hành vi vài ngày đầu. Bài báo của Google về hàm mất mát zero-inflated lognormal xử lý việc đa số người dùng có giá trị bằng không còn số ít có giá trị rất lớn.</li></ul>
<div class="callout"><b>Kỷ luật dự báo:</b> luôn đối chiếu dự báo với giá trị thật của cohort cũ (backtest), báo cáo khoảng tin cậy, và giới hạn chân trời. LTV 365 ngày ngoại suy từ 7 ngày dữ liệu rất không chắc chắn.</div>`,
          res: ['mdm-ltv201', 'bgnbd-paper', 'google-pltv-paper']
        },
        {
          title: 'Mục tiêu ROAS và thời gian hoàn vốn', min: 50,
          body: `<p>Bạn không thể chờ 180 ngày để biết một chiến dịch có lãi không. Cách làm chuẩn là suy ra <strong>mục tiêu ROAS sớm</strong> từ hình dạng đường cong LTV.</p>
<div class="formula">Nếu doanh thu luỹ kế ngày 7 thường bằng 30% doanh thu luỹ kế ngày 180, thì để hoà vốn ở ngày 180 cần:<br><code>ROAS D7 mục tiêu ≥ 30%</code><br><em>(chỉ đúng khi tỷ lệ doanh thu sớm trên dài hạn ổn định và mục tiêu hoà vốn ở D180 là 100% chi phí; ứng dụng thuê bao có dùng thử 7 ngày chưa có doanh thu ở D7 nên cần đặt mục tiêu trên tín hiệu khác như bắt đầu dùng thử hoặc ROAS D14)</em></div>
<p>Tỷ lệ doanh thu sớm trên doanh thu dài hạn (đôi khi gọi là hệ số nhân LTV) khác nhau theo thể loại, quốc gia, nền tảng và nguồn. Tính riêng cho từng phân đoạn chính.</p>
<h4>Chọn giới hạn hoàn vốn</h4>
<ul><li>Hoàn vốn ngắn (dưới 30 ngày): an toàn về dòng tiền, hạn chế quy mô.</li><li>Hoàn vốn dài (6 đến 12 tháng): mở rộng được nhiều hơn, cần vốn và dự báo đáng tin.</li></ul>
<p>Mỗi tuần, đối chiếu ROAS thật của cohort tại các mốc D0, D3, D7, D14, D30 với đường mục tiêu. Cohort nằm dưới đường mục tiêu ở các mốc sớm hiếm khi tự đuổi kịp.</p>`,
          res: ['mdm-ltv201', 'a16z-metrics']
        },
        {
          title: 'Từ mô hình tới quyết định', min: 35,
          body: `<p>Bảng điều khiển tối thiểu của một đội UA:</p>
<ul><li><strong>Bảng cohort theo tuần cài đặt:</strong> chi phí, cài đặt, CPI, retention D1, D7, D30, ROAS D0, D7, D30, ROAS dự báo tại mốc hoàn vốn.</li><li><strong>Phân tách</strong> theo kênh, quốc gia, nền tảng, và chiến dịch lớn.</li><li><strong>So với mục tiêu:</strong> tô màu cohort trên hoặc dưới đường ROAS mục tiêu.</li></ul>
<h4>Quy tắc hành động</h4>
<ul><li>Cohort vượt mục tiêu ổn định qua vài tuần: tăng ngân sách hoặc nới mục tiêu giá thầu.</li><li>Cohort dưới mục tiêu: kiểm tra sáng tạo, quốc gia, sự kiện tối ưu trước khi cắt.</li><li>Retention giảm trên mọi nguồn: vấn đề nằm ở sản phẩm hoặc bản phát hành, không phải ở UA.</li></ul>
<p>Khoá Customer Analytics của Wharton giải thích nền tảng của tư duy định giá khách hàng theo xác suất mà toàn bộ module này dựa vào.</p>`,
          res: ['wharton-customer-analytics', 'singular-roi-index']
        }
      ],
      takeaways: [
        'Đường cong giữ chân phẳng lại ở mức dương là điều kiện để UA có ý nghĩa.',
        'LTV bằng tổng của retention nhân doanh thu ngày, sau khi trừ phí cửa hàng.',
        'Mục tiêu ROAS sớm được suy ra từ hình dạng đường cong LTV.',
        'Luôn backtest dự báo LTV và giới hạn chân trời.'
      ],
      assignment: {
        title: 'Mô hình LTV theo cohort',
        brief: `<ol><li>Tải bảng tính mẫu trong bài LTV của MDM, hoặc tự dựng: nhập retention D1, D3, D7, D14, D30 (dữ liệu thật hoặc chuẩn ngành).</li><li>Khớp hàm luỹ thừa và ngoại suy retention tới ngày 180.</li><li>Nhập ARPDAU, phí cửa hàng và tính LTV tại D7, D30, D90, D180.</li><li>Với giới hạn hoàn vốn 180 ngày, suy ra ROAS D7 mục tiêu và CPI tối đa.</li><li>Phân tích độ nhạy: nếu retention D30 giảm 20% thì CPI tối đa thay đổi thế nào?</li></ol>`,
        deliverable: 'Bảng tính LTV có phân tích độ nhạy và một trang nhận xét.'
      },
      quiz: [
        { q: 'Đường cong giữ chân tiến dần về không cho thấy điều gì?', a: ['Sản phẩm có product-market fit mạnh', 'Mọi người dùng cuối cùng đều rời đi; mua thêm người dùng không bền', 'UA đang hiệu quả', 'Cần tăng giá'], correct: 1, why: 'Không có nhóm lõi ở lại thì tăng trưởng trả phí chỉ bù phần rò rỉ.' },
        { q: 'Doanh thu luỹ kế D7 thường bằng 25% doanh thu D180. Muốn hoà vốn ở D180, ROAS D7 tối thiểu là bao nhiêu?', a: ['100%', '75%', '25%', '4%'], correct: 2, why: 'Nếu D7 thu về 25% chi phí thì theo tỷ lệ thông thường D180 sẽ thu đủ 100%.' },
        { q: 'Lỗi phổ biến khi tính LTV cho ứng dụng là gì?', a: ['Trừ phí cửa hàng', 'Dùng doanh thu gộp trước phí cửa hàng', 'Phân tách theo quốc gia', 'Dùng dữ liệu cohort'], correct: 1, why: 'Phí cửa hàng 15 đến 30% không thuộc về nhà phát triển, phải trừ ra.' },
        { q: 'Mô hình BG/NBD dùng cho bối cảnh nào?', a: ['Thuê bao có hợp đồng', 'Mua hàng lặp lại không theo hợp đồng, khi không quan sát trực tiếp được lúc khách rời bỏ', 'Đấu giá quảng cáo', 'Phân bổ đa điểm chạm'], correct: 1, why: 'BG/NBD ước lượng xác suất khách còn hoạt động và số giao dịch tương lai trong bối cảnh không hợp đồng.' },
        { q: 'Retention giảm đồng loạt trên mọi nguồn UA sau một ngày cụ thể. Nguyên nhân nhiều khả năng nhất?', a: ['Một kênh UA kém chất lượng', 'Thay đổi ở sản phẩm hoặc bản phát hành', 'CPM tăng', 'Sáng tạo mỏi'], correct: 1, why: 'Thay đổi đồng loạt trên mọi nguồn chỉ ra nguyên nhân chung nằm ở sản phẩm.' }
      ],
      readings: ['freemium-economics', 'fader-customer-centricity']
    },
    {
      id: 'm4-6', hours: 6,
      title: 'Giữ chân, vòng đời và kích hoạt lại',
      summary: 'Kích hoạt người dùng mới, xây thói quen, kênh CRM trong ứng dụng, kích hoạt lại và giữ chân người dùng thuê bao.',
      objectives: [
        'Xác định khoảnh khắc "aha" và thiết kế luồng onboarding dẫn tới nó.',
        'Dùng push, tin nhắn trong app và email theo vòng đời người dùng.',
        'Lập chương trình kích hoạt lại bằng kênh owned và trả phí.',
        'Phân biệt các cách đo retention và chỉ số độ gắn bó.',
        'Giảm churn cho ứng dụng thuê bao.'
      ],
      lessons: [
        {
          title: 'Kích hoạt và khoảnh khắc "aha"', min: 45,
          body: `<p>Giữ chân bắt đầu từ phiên đầu tiên. <strong>Kích hoạt (activation)</strong> là lúc người dùng mới lần đầu nhận được giá trị cốt lõi của sản phẩm, thường gọi là khoảnh khắc "aha".</p>
<h4>Cách tìm chỉ số kích hoạt</h4>
<ol><li>So sánh hành vi tuần đầu của nhóm còn ở lại sau 30 ngày với nhóm đã rời đi.</li><li>Tìm hành động có tương quan mạnh nhất với việc ở lại (ví dụ: hoàn thành 3 bài học, thêm 5 người bạn, đặt đơn đầu tiên trong 7 ngày).</li><li>Kiểm chứng bằng thử nghiệm: thúc đẩy hành động đó có làm tăng retention không? Tương quan chưa phải nhân quả.</li></ol>
<h4>Nguyên tắc onboarding</h4>
<ul><li>Đưa người dùng tới giá trị nhanh nhất có thể; hoãn mọi thứ không cần thiết, kể cả đăng ký tài khoản nếu được.</li><li>Xin quyền (thông báo, vị trí, theo dõi) đúng lúc người dùng hiểu lợi ích, có màn hình giải thích trước hộp thoại hệ thống.</li><li>Cá nhân hoá theo mục tiêu người dùng tự chọn.</li></ul>`,
          res: ['amplitude-north-star', 'lennys-newsletter']
        },
        {
          title: 'Kênh CRM trong ứng dụng', min: 45,
          body: `<table><tr><th>Kênh</th><th>Mạnh ở</th><th>Lưu ý</th></tr>
<tr><td>Push notification</td><td>Kéo người dùng quay lại ngay</td><td>Cần quyền; gửi quá nhiều dẫn tới tắt thông báo hoặc gỡ ứng dụng</td></tr>
<tr><td>Tin nhắn trong app</td><td>Hướng dẫn, giới thiệu tính năng khi đang dùng</td><td>Chỉ tới người đang mở ứng dụng</td></tr>
<tr><td>Email</td><td>Nội dung dài, tóm tắt, kích hoạt lại</td><td>Cần địa chỉ email và sự đồng ý</td></tr>
<tr><td>Live activities, widget</td><td>Hiện diện thường trực trên màn hình</td><td>Phù hợp một số loại ứng dụng</td></tr></table>
<p>Chuỗi vòng đời tương tự email ở module 2.4: chào mừng và onboarding → khuyến khích hành động kích hoạt → xây thói quen → mở rộng sử dụng → cảnh báo sắp rời bỏ → kích hoạt lại.</p>
<p>Thông điệp theo hành vi (kích hoạt bởi một hành động hoặc sự vắng mặt của nó) hiệu quả hơn thông điệp gửi hàng loạt theo lịch. Đặt giới hạn tần suất cho mỗi người dùng và luôn có nhóm đối chứng không nhận tin để đo tác động thật.</p>`,
          res: ['phiture-growth-stack']
        },
        {
          title: 'Kích hoạt lại và remarketing', min: 40,
          body: `<p>Người dùng ngủ đông là nguồn tăng trưởng rẻ hơn người dùng mới, vì họ đã biết sản phẩm.</p>
<ul><li><strong>Kênh owned:</strong> push (nếu còn quyền), email, in-app events trên cửa hàng.</li><li><strong>Remarketing trả phí:</strong> chiến dịch tương tác trên Google, Meta, TikTok và DSP nhắm người đã cài. Trên iOS, khả năng này bị giới hạn bởi ATT; AdAttributionKit đã bổ sung đo lường kích hoạt lại.</li><li><strong>Deep link</strong> đưa người dùng thẳng tới nội dung liên quan, không về màn hình chính.</li></ul>
<h4>Phân khúc theo lý do rời đi</h4>
<ul><li>Chưa từng kích hoạt → đưa lại lời hứa giá trị và đường tắt tới "aha".</li><li>Từng dùng nhiều rồi dừng → nội dung mới, tính năng mới.</li><li>Từng trả tiền rồi huỷ → ưu đãi quay lại.</li></ul>
<div class="callout"><b>Đo tính tăng thêm:</b> remarketing rất dễ ghi công cho người đằng nào cũng quay lại. Luôn chạy với nhóm đối chứng bị giữ lại không tiếp cận.</div>`,
          res: ['google-app-campaigns-help', 'apple-aak-docs']
        },
        {
          title: 'Đo lường giữ chân và độ gắn bó', min: 35,
          body: `<table><tr><th>Cách đo</th><th>Định nghĩa</th><th>Dùng khi</th></tr>
<tr><td>N-day (classic)</td><td>Hoạt động đúng vào ngày n</td><td>Ứng dụng dùng hằng ngày, game</td></tr>
<tr><td>Rolling (unbounded)</td><td>Hoạt động vào ngày n hoặc bất kỳ ngày nào sau đó</td><td>Ước lượng số người chưa rời bỏ hẳn</td></tr>
<tr><td>Bracket (theo tuần, tháng)</td><td>Hoạt động trong khoảng thời gian</td><td>Ứng dụng dùng theo tuần hoặc tháng</td></tr></table>
<p>Chọn cách đo khớp với <strong>tần suất sử dụng tự nhiên</strong> của sản phẩm. Ứng dụng đặt phòng du lịch không thể đo bằng retention D1.</p>
<div class="formula"><code>Stickiness = DAU trung bình trong kỳ ÷ MAU của kỳ đó</code></div>
<p>Tỷ lệ này cho biết trung bình người dùng tháng hoạt động bao nhiêu phần số ngày. Nó hữu ích để theo dõi xu hướng của chính mình, ít ý nghĩa khi so giữa các loại ứng dụng khác nhau.</p>
<p>Bộ Mobile Growth Stack của Phiture xếp toàn bộ các hoạt động thu hút, gắn bó và kiếm tiền vào một khung chung, hữu ích để rà xem đội của bạn còn bỏ trống mảng nào.</p>`,
          res: ['phiture-growth-stack', 'gameanalytics-reports']
        },
        {
          title: 'Giữ chân người dùng thuê bao', min: 40,
          body: `<p>Với ứng dụng thuê bao, mỗi điểm phần trăm tỷ lệ gia hạn tác động trực tiếp tới LTV.</p>
<h4>Hai loại churn</h4>
<ul><li><strong>Chủ động:</strong> người dùng quyết định huỷ. Giải pháp nằm ở giá trị sản phẩm, onboarding, nhắc nhở lợi ích trước kỳ gia hạn, phương án tạm dừng hoặc hạ gói.</li><li><strong>Thụ động:</strong> thanh toán thất bại (thẻ hết hạn, không đủ số dư). Giải pháp: thời gian ân hạn, thử lại thanh toán, nhắc cập nhật thẻ. Cả hai cửa hàng đều có cơ chế hỗ trợ.</li></ul>
<h4>Đòn bẩy doanh thu</h4>
<ul><li><strong>Thử nghiệm paywall:</strong> vị trí, thời điểm, thiết kế, thông điệp.</li><li><strong>Cấu trúc gói:</strong> tỷ trọng gói năm cao hơn thường cải thiện dòng tiền sớm; tác động tới giữ chân khác nhau theo ứng dụng nên cần thử nghiệm.</li><li><strong>Dùng thử:</strong> độ dài và hình thức ảnh hưởng cả tỷ lệ bắt đầu lẫn tỷ lệ chuyển sang trả phí.</li><li><strong>Ưu đãi quay lại</strong> cho người đã huỷ.</li></ul>
<p>Quy định về gia hạn tự động và huỷ dễ dàng ngày càng chặt ở Mỹ, EU và Anh. Ở nhiều thị trường, luồng huỷ minh bạch là yêu cầu pháp lý hoặc đang trở thành yêu cầu (quy định thay đổi theo từng nước và theo thời gian, nên kiểm tra), và dù sao nó cũng bảo vệ đánh giá và uy tín của ứng dụng.</p>`,
          res: ['apple-appstore-marketing', 'lennys-newsletter']
        }
      ],
      takeaways: [
        'Giữ chân bắt đầu từ việc đưa người dùng tới giá trị cốt lõi nhanh nhất.',
        'Thông điệp theo hành vi thắng thông điệp hàng loạt; luôn có nhóm đối chứng.',
        'Chọn cách đo retention theo tần suất sử dụng tự nhiên của sản phẩm.',
        'Churn thụ động do thanh toán thất bại là phần dễ thu hồi nhất.'
      ],
      assignment: {
        title: 'Chương trình vòng đời người dùng',
        brief: `<ol><li>Đề xuất chỉ số kích hoạt cho ứng dụng của bạn và cách kiểm chứng nó.</li><li>Vẽ luồng onboarding hiện tại, đánh dấu các bước có thể bỏ hoặc hoãn.</li><li>Thiết kế chuỗi vòng đời 30 ngày đầu: kênh, điều kiện kích hoạt, nội dung, giới hạn tần suất, nhóm đối chứng.</li><li>Thiết kế chương trình kích hoạt lại cho ba phân khúc theo lý do rời đi.</li></ol>`,
        deliverable: 'Tài liệu chương trình vòng đời gồm sơ đồ luồng và bảng thông điệp.'
      },
      quiz: [
        { q: 'Khoảnh khắc "aha" là gì?', a: ['Lúc người dùng cài ứng dụng', 'Lúc người dùng lần đầu nhận được giá trị cốt lõi của sản phẩm', 'Lúc người dùng trả tiền', 'Lúc người dùng đánh giá 5 sao'], correct: 1, why: 'Đó là điểm người dùng hiểu vì sao sản phẩm có ích với họ.' },
        { q: 'Tìm được hành động tương quan mạnh với retention. Bước tiếp theo đúng là gì?', a: ['Ép mọi người dùng thực hiện ngay', 'Kiểm chứng bằng thử nghiệm xem thúc đẩy hành động đó có làm tăng retention không', 'Bỏ qua vì tương quan vô nghĩa', 'Đổi chỉ số North Star'], correct: 1, why: 'Tương quan chưa chứng minh nhân quả; cần thử nghiệm.' },
        { q: 'Vì sao chương trình CRM cần nhóm đối chứng không nhận tin?', a: ['Để tiết kiệm chi phí gửi', 'Để đo tác động tăng thêm thật của thông điệp', 'Vì quy định pháp luật', 'Để giảm tỷ lệ gỡ ứng dụng'], correct: 1, why: 'Không có nhóm đối chứng thì không biết người dùng có quay lại nhờ thông điệp hay không.' },
        { q: 'Ứng dụng đặt vé máy bay nên đo retention theo cách nào?', a: ['N-day, theo từng ngày', 'Theo khoảng thời gian dài (tháng, quý) khớp tần suất dùng tự nhiên', 'Chỉ đo D1', 'Không cần đo'], correct: 1, why: 'Sản phẩm dùng thưa không thể đánh giá bằng retention theo ngày.' },
        { q: 'Thẻ hết hạn khiến thuê bao không gia hạn được thuộc loại churn nào?', a: ['Chủ động', 'Thụ động', 'Tự nhiên', 'Theo mùa'], correct: 1, why: 'Churn thụ động xảy ra do thanh toán thất bại, không do ý định của người dùng.' }
      ],
      readings: ['reforge-growth-loops', 'balfour-four-fits']
    }
  ]
});
