COURSE.levels.push({
  id: 'L7', num: 7, color: '#a3690a',
  title: 'Chiến lược tăng trưởng và lãnh đạo marketing',
  short: 'Chiến lược',
  stage: 'Chuyên gia',
  tagline: 'Ghép mọi thứ lại: mô hình tăng trưởng, cân bằng thương hiệu và hiệu suất, lãnh đạo đội ngũ, dự án tốt nghiệp.',
  intro: 'Level 7 chuyển từ kỹ năng kênh sang tư duy hệ thống. Bạn học cách xây mô hình tăng trưởng, phân bổ ngân sách giữa xây thương hiệu và kích hoạt bán hàng, làm việc với ban lãnh đạo, và kết thúc bằng một kế hoạch tăng trưởng hoàn chỉnh cho một doanh nghiệp thật.',
  prereq: 'Hoàn thành Level 3 và Level 5',
  milestone: 'Dự án tốt nghiệp: kế hoạch tăng trưởng 12 tháng',
  outcomes: [
    'Phân tích một doanh nghiệp theo khung bốn độ tương thích và vòng lặp tăng trưởng.',
    'Chọn North Star Metric và xây mô hình tăng trưởng định lượng.',
    'Lập luận về phân bổ ngân sách giữa thương hiệu và hiệu suất dựa trên bằng chứng.',
    'Trình bày kế hoạch và kết quả marketing bằng ngôn ngữ tài chính.',
    'Tổ chức đội ngũ, quy trình thử nghiệm và quan hệ với đối tác.',
    'Hoàn thành kế hoạch tăng trưởng 12 tháng có mô hình, ngân sách và khung đo lường.'
  ],
  modules: [
    {
      id: 'm7-1', hours: 8,
      title: 'Chiến lược tăng trưởng: độ tương thích, vòng lặp, North Star',
      summary: 'Các khung tư duy của giới growth tại Thung lũng Silicon, từ Brian Balfour, Reforge, Amplitude và Sean Ellis.',
      objectives: [
        'Đánh giá doanh nghiệp theo bốn độ tương thích của Brian Balfour.',
        'Vẽ vòng lặp tăng trưởng và phân biệt với phễu.',
        'Chọn North Star Metric và các chỉ số đầu vào.',
        'Xây mô hình tăng trưởng định lượng trên bảng tính.',
        'Vận hành quy trình thử nghiệm tăng trưởng liên chức năng.'
      ],
      lessons: [
        {
          title: 'Bốn độ tương thích', min: 55,
          body: `<p>Brian Balfour (cựu phó chủ tịch tăng trưởng của HubSpot, sáng lập Reforge) lập luận rằng sản phẩm tốt chưa đủ để thành công ty lớn. Cần bốn độ tương thích cùng lúc:</p>
<table><tr><th>Độ tương thích</th><th>Câu hỏi</th></tr>
<tr><td><strong>Market–Product</strong></td><td>Sản phẩm có giải quyết vấn đề thật của một thị trường đủ lớn không?</td></tr>
<tr><td><strong>Product–Channel</strong></td><td>Sản phẩm có được thiết kế phù hợp với kênh phân phối không? Kênh đặt ra luật chơi; sản phẩm phải uốn theo kênh.</td></tr>
<tr><td><strong>Channel–Model</strong></td><td>Kênh có phù hợp với mô hình doanh thu không? Doanh thu mỗi khách thấp cần kênh có CAC thấp (lan truyền, nội dung, SEO). Doanh thu mỗi khách cao cho phép kênh đắt (đội bán hàng, quảng cáo B2B).</td></tr>
<tr><td><strong>Model–Market</strong></td><td>Với mức doanh thu mỗi khách đó, thị trường có đủ số khách để đạt mục tiêu doanh thu không?</td></tr></table>
<h4>Ba hệ quả</h4>
<ul><li>Bốn độ tương thích phụ thuộc lẫn nhau. Đổi một thứ (ví dụ tăng giá) có thể phá vỡ thứ khác (kênh không còn phù hợp).</li><li>Các công ty lớn thường có một hoặc hai kênh áp đảo, không phải mười kênh ngang nhau.</li><li>Kênh thay đổi theo thời gian, nên độ tương thích phải được xem lại định kỳ.</li></ul>
<p>Với doanh nghiệp đã vận hành lâu, khung này giúp trả lời vì sao một kênh "ai cũng dùng" lại không hiệu quả với mình.</p>`,
          res: ['balfour-four-fits']
        },
        {
          title: 'Vòng lặp tăng trưởng', min: 50,
          body: `<p>Phễu là mô hình tuyến tính: đổ vào đầu trên, lấy ra đầu dưới, rồi phải đổ tiếp. Bài viết <em>Growth Loops are the New Funnels</em> của Reforge đề xuất nhìn tăng trưởng như <strong>vòng lặp</strong>: đầu ra của một chu kỳ trở thành đầu vào của chu kỳ sau.</p>
<table><tr><th>Loại vòng lặp</th><th>Cơ chế</th></tr>
<tr><td>Lan truyền</td><td>Người dùng mời người khác trong quá trình dùng sản phẩm → người mới tham gia → họ lại mời</td></tr>
<tr><td>Nội dung do người dùng tạo</td><td>Người dùng tạo nội dung (đánh giá, bài đăng, hồ sơ) → công cụ tìm kiếm lập chỉ mục → người tìm thấy và đăng ký → họ tạo thêm nội dung</td></tr>
<tr><td>Nội dung do công ty tạo</td><td>Doanh thu → đầu tư nội dung → lưu lượng tự nhiên → khách hàng → doanh thu</td></tr>
<tr><td>Trả phí</td><td>Khách hàng tạo doanh thu → tái đầu tư vào quảng cáo → khách hàng mới. Tốc độ quay phụ thuộc thời gian hoàn vốn</td></tr>
<tr><td>Bán hàng</td><td>Doanh thu → tuyển thêm người bán → thêm hợp đồng</td></tr></table>
<h4>Vì sao cách nhìn này hữu ích</h4>
<ul><li>Vòng lặp có tính <strong>cộng dồn</strong>: mỗi vòng xây trên vòng trước.</li><li>Buộc marketing, sản phẩm và doanh thu nhìn chung một hệ thống.</li><li>Chỉ ra điểm nghẽn: cải thiện mắt xích yếu nhất làm cả vòng quay nhanh hơn.</li></ul>
<p>Vòng lặp trả phí là vòng dễ sao chép nhất, nên ít tạo lợi thế bền nhất. Các doanh nghiệp bền thường có ít nhất một vòng lặp phi trả phí mạnh.</p>`,
          res: ['reforge-growth-loops', 'andrew-chen']
        },
        {
          title: 'North Star Metric', min: 45,
          body: `<p><strong>North Star Metric</strong> là một chỉ số duy nhất thể hiện giá trị cốt lõi sản phẩm mang lại cho khách hàng, và nhờ đó dự báo doanh thu dài hạn. Theo <em>North Star Playbook</em> của Amplitude, một North Star tốt:</p>
<ul><li>Thể hiện <strong>giá trị khách hàng nhận được</strong>, không chỉ là giá trị công ty thu về.</li><li>Phản ánh chiến lược sản phẩm.</li><li>Là chỉ số dẫn dắt của kết quả kinh doanh.</li><li>Đo được, hiểu được, và đội ngũ tác động được.</li></ul>
<table><tr><th>Loại hình</th><th>Ví dụ North Star</th></tr>
<tr><td>Lưu trú, du lịch</td><td>Số đêm phòng được đặt</td></tr>
<tr><td>Thương mại điện tử</td><td>Số khách mua hàng mỗi tuần</td></tr>
<tr><td>Phần mềm làm việc nhóm</td><td>Số nhóm hoạt động hằng tuần</td></tr>
<tr><td>Nội dung, giải trí</td><td>Tổng thời gian xem</td></tr></table>
<p>North Star được tách thành 3 đến 5 <strong>chỉ số đầu vào</strong> mà từng đội chịu trách nhiệm. Ví dụ với số đêm phòng được đặt: số người tìm kiếm có ngày cụ thể, tỷ lệ tìm kiếm thành đặt phòng, số đêm trung bình mỗi lượt đặt, tỷ lệ khách quay lại.</p>
<div class="callout"><b>Tránh:</b> chọn doanh thu làm North Star. Doanh thu là kết quả, không cho đội ngũ biết phải tạo giá trị gì cho khách.</div>`,
          res: ['amplitude-north-star']
        },
        {
          title: 'Mô hình tăng trưởng định lượng', min: 70,
          body: `<p>Mô hình tăng trưởng là một bảng tính nối các đầu vào bạn kiểm soát với kết quả kinh doanh. Cấu trúc tối giản theo tháng:</p>
<div class="formula"><code>Khách mới(t) = Σ theo kênh [Ngân sách ÷ CAC] + Khách tự nhiên + Khách từ giới thiệu</code><br><code>Khách hoạt động(t) = Khách mới(t) + Σ các cohort trước × Tỷ lệ giữ chân theo tuổi cohort</code><br><code>Doanh thu(t) = Khách hoạt động(t) × Tần suất mua × Giá trị đơn</code><br><code>Lợi nhuận đóng góp(t) = Doanh thu × Biên gộp − Chi phí marketing</code></div>
<h4>Cách dùng mô hình</h4>
<ul><li><strong>Phân tích độ nhạy:</strong> thay đổi từng đầu vào 10% và xem kết quả 12 tháng thay đổi bao nhiêu. Đầu vào nào có đòn bẩy lớn nhất là nơi nên tập trung. Thường thì giữ chân có đòn bẩy lớn hơn thu hút, vì nó cộng dồn qua mọi cohort.</li><li><strong>Tìm ràng buộc:</strong> điều gì đang giới hạn tăng trưởng: lưu lượng, chuyển đổi, giữ chân, hay công suất phục vụ?</li><li><strong>Kịch bản:</strong> điều gì xảy ra nếu CAC tăng 20% mỗi năm (kỳ vọng hợp lý theo quy luật suy giảm kênh)?</li><li><strong>Đặt mục tiêu:</strong> mục tiêu tăng trưởng đòi hỏi những đầu vào nào, có khả thi không?</li></ul>
<p>Mô hình đơn giản mà cả đội hiểu có ích hơn mô hình phức tạp chỉ một người đọc được. Đây là phần lõi của dự án tốt nghiệp.</p>`,
          res: ['a16z-metrics', 'yc-startup-school']
        },
        {
          title: 'Quy trình thử nghiệm tăng trưởng', min: 45,
          body: `<p>Sean Ellis và Morgan Brown trong <em>Hacking Growth</em> mô tả chu trình bốn bước lặp lại hằng tuần:</p>
<ol><li><strong>Phân tích:</strong> dữ liệu và nghiên cứu định tính chỉ ra cơ hội.</li><li><strong>Lên ý tưởng:</strong> mọi thành viên đóng góp ý tưởng theo mẫu chuẩn (giả thuyết, chỉ số, cách thử).</li><li><strong>Ưu tiên:</strong> chấm ICE (Impact, Confidence, Ease).</li><li><strong>Thử nghiệm:</strong> chạy, đo, ghi nhận bài học, đưa vào kho kiến thức.</li></ol>
<h4>Đội tăng trưởng liên chức năng</h4>
<p>Gồm marketing, sản phẩm, kỹ thuật, dữ liệu, thiết kế. Lý do: phần lớn đòn bẩy tăng trưởng nằm ở giao điểm, như onboarding, trang đích, giá, luồng giới thiệu. Một phòng marketing đứng riêng không chạm được vào những thứ đó.</p>
<h4>Chỉ số của quy trình</h4>
<ul><li><strong>Nhịp thử nghiệm:</strong> số thử nghiệm có kết luận mỗi tháng.</li><li><strong>Tỷ lệ thắng:</strong> thường thấp, chỉ khoảng 10 đến 30%.</li><li><strong>Tác động tích luỹ</strong> lên North Star.</li></ul>
<p>Điều kiện tiên quyết theo Ellis: sản phẩm phải thật sự được khách hàng cần trước khi tăng tốc. Phép thử của ông: nếu dưới 40% người dùng nói họ sẽ "rất thất vọng" khi không còn được dùng sản phẩm, hãy sửa sản phẩm trước.</p>`,
          res: ['hacking-growth', 'lennys-newsletter']
        }
      ],
      takeaways: [
        'Sản phẩm, kênh, mô hình doanh thu và thị trường phải khớp nhau cùng lúc.',
        'Vòng lặp cộng dồn; phễu thì phải đổ lại từ đầu.',
        'North Star đo giá trị khách hàng nhận được, không phải doanh thu.',
        'Mô hình tăng trưởng cho thấy đòn bẩy lớn nhất, thường là giữ chân.'
      ],
      assignment: {
        title: 'Phân tích chiến lược tăng trưởng',
        brief: `<ol><li>Đánh giá doanh nghiệp của bạn theo bốn độ tương thích. Độ tương thích nào yếu nhất, bằng chứng là gì?</li><li>Vẽ các vòng lặp tăng trưởng hiện có. Đánh dấu mắt xích yếu nhất của mỗi vòng.</li><li>Đề xuất một North Star Metric và 4 chỉ số đầu vào. Giải thích theo các tiêu chí của Amplitude.</li><li>Dựng mô hình tăng trưởng 12 tháng trên bảng tính và chạy phân tích độ nhạy cho 5 đầu vào.</li></ol>`,
        deliverable: 'Bản phân tích ba trang và bảng tính mô hình tăng trưởng. Đây là đầu vào của dự án tốt nghiệp.'
      },
      quiz: [
        { q: 'Theo Balfour, sản phẩm có doanh thu mỗi khách thấp cần loại kênh nào?', a: ['Đội bán hàng trực tiếp', 'Kênh có CAC thấp như lan truyền, nội dung, SEO', 'Quảng cáo B2B đắt tiền', 'Sự kiện ngoại tuyến'], correct: 1, why: 'Đây là độ tương thích Channel–Model: kênh phải khớp mức doanh thu mỗi khách.' },
        { q: 'Điểm khác biệt cốt lõi giữa vòng lặp tăng trưởng và phễu?', a: ['Vòng lặp có nhiều bước hơn', 'Trong vòng lặp, đầu ra của một chu kỳ trở thành đầu vào của chu kỳ sau', 'Phễu chỉ dùng cho B2B', 'Vòng lặp không đo được'], correct: 1, why: 'Tính tái đầu tư tạo ra hiệu ứng cộng dồn.' },
        { q: 'Vì sao doanh thu không phải North Star Metric tốt?', a: ['Vì khó đo', 'Vì nó là kết quả, không thể hiện giá trị khách hàng nhận được và không định hướng hành động', 'Vì thay đổi quá chậm', 'Vì bộ phận tài chính đã theo dõi'], correct: 1, why: 'North Star phải nắm bắt giá trị cốt lõi cho khách hàng, từ đó dẫn tới doanh thu.' },
        { q: 'Trong mô hình tăng trưởng, vì sao giữ chân thường có đòn bẩy lớn hơn thu hút?', a: ['Vì rẻ hơn', 'Vì cải thiện giữ chân cộng dồn qua mọi cohort theo thời gian', 'Vì dễ đo hơn', 'Vì không cần ngân sách'], correct: 1, why: 'Mỗi cohort giữ lại nhiều hơn, và hiệu ứng tích luỹ qua từng tháng.' },
        { q: 'Phép thử 40% của Sean Ellis đo điều gì?', a: ['Tỷ lệ chuyển đổi tối thiểu', 'Tỷ lệ người dùng sẽ rất thất vọng nếu không còn sản phẩm, dấu hiệu của product-market fit', 'Biên lợi nhuận gộp', 'Tỷ lệ ngân sách cho thử nghiệm'], correct: 1, why: 'Dưới 40% cho thấy sản phẩm chưa đủ cần thiết để tăng tốc.' }
      ],
      readings: ['traction-book', 'cold-start-problem']
    },
    {
      id: 'm7-2', hours: 7,
      title: 'Thương hiệu và hiệu suất: phân bổ ngân sách',
      summary: 'Bằng chứng về hiệu quả dài hạn, cách đo thương hiệu và phương pháp phân bổ ngân sách toàn phễu.',
      objectives: [
        'Giải thích quan hệ giữa tạo nhu cầu và bắt nhu cầu.',
        'Tóm tắt bằng chứng kinh tế lượng về hiệu quả dài hạn của quảng cáo.',
        'Đo sức khoẻ thương hiệu bằng chỉ số có sẵn và chi phí thấp.',
        'Áp dụng các nguyên tắc phân bổ ngân sách giữa mục tiêu và kênh.',
        'Lập kế hoạch truyền thông toàn phễu.'
      ],
      lessons: [
        {
          title: 'Tạo nhu cầu và bắt nhu cầu', min: 45,
          body: `<p>Tại bất kỳ thời điểm nào, chỉ một phần nhỏ khách hàng tiềm năng đang có nhu cầu mua. Giáo sư John Dawes (Viện Ehrenberg-Bass) gọi đây là quy tắc <strong>95-5</strong> trong bối cảnh B2B: khoảng 95% người mua tiềm năng không ở trong thị trường tại một thời điểm.</p>
<ul><li><strong>Bắt nhu cầu</strong> nhắm tới phần nhỏ đang mua. Hiệu suất đo được cao, nhưng bạn cạnh tranh trực tiếp về giá với mọi đối thủ, và quy mô bị giới hạn.</li><li><strong>Tạo nhu cầu</strong> tiếp cận phần lớn chưa mua, để khi họ có nhu cầu thì thương hiệu của bạn được nghĩ tới đầu tiên. Kết quả đến chậm và khó quy về từng quảng cáo.</li></ul>
<p>Performance marketing chủ yếu bắt nhu cầu. Nó hiệu quả đến đâu phụ thuộc vào lượng nhu cầu mà thương hiệu đã tạo ra trước đó. Dấu hiệu của việc bắt nhu cầu quá mức mà không tạo nhu cầu:</p>
<ul><li>CAC tăng đều dù tối ưu liên tục.</li><li>Tỷ trọng doanh thu từ truy vấn thương hiệu và khách cũ tăng, khách mới giảm.</li><li>Phải khuyến mãi sâu hơn để giữ doanh số.</li><li>Lượng tìm kiếm tên thương hiệu đi ngang hoặc giảm.</li></ul>`,
          res: ['linkedin-b2b-5principles', 'sharp-hbg']
        },
        {
          title: 'Bằng chứng về hiệu quả dài hạn', min: 50,
          body: `<ul><li><strong>Binet và Field, IPA (Anh):</strong> các chiến dịch thiên về xây thương hiệu tạo hiệu quả kinh doanh dài hạn (thị phần, lợi nhuận, khả năng định giá) lớn hơn. Chiến dịch thiên về kích hoạt tạo hiệu quả ngắn hạn mạnh nhưng không tích luỹ. Báo cáo <em>Effectiveness in Context</em> cho thấy tỷ lệ tối ưu thay đổi theo ngành, quy mô thương hiệu, mức độ trực tuyến và giai đoạn phát triển.</li><li><strong>Profit Ability 2, Thinkbox (Anh, 2024):</strong> phân tích kinh tế lượng trên dữ liệu rất nhiều thương hiệu. Phần lớn lợi nhuận từ quảng cáo phát sinh sau ba tháng đầu. Đo lường chỉ nhìn ngắn hạn bỏ sót hơn một nửa giá trị.</li><li><strong>Ehrenberg-Bass:</strong> thương hiệu ngừng quảng cáo thường mất thị phần dần qua các năm, và tốc độ mất nhanh hơn với thương hiệu nhỏ.</li><li><strong>Nghiên cứu về ROI ngắn hạn</strong> (Lewis và Rao, Gordon và cộng sự ở Level 5) cho thấy hiệu quả của kích hoạt cũng thường bị đo cao hơn thực tế.</li></ul>
<p>Hai điều này cộng lại tạo thành một thiên lệch hệ thống: <strong>ngắn hạn bị đánh giá quá cao, dài hạn bị đánh giá quá thấp</strong>. Công ty chỉ nhìn bảng điều khiển của nền tảng sẽ dần chuyển ngân sách về cuối phễu, cho tới khi cạn nhu cầu.</p>
<div class="callout"><b>Giới hạn của bằng chứng:</b> dữ liệu IPA đến từ các chiến dịch tự đề cử dự giải, chủ yếu ở Anh. Hãy coi các tỷ lệ như 60/40 là điểm tham chiếu, không phải quy luật, và kiểm chứng bằng dữ liệu của chính bạn.</div>`,
          res: ['ipa-effectiveness-context', 'thinkbox-profit-ability', 'binet-field-long-short']
        },
        {
          title: 'Đo sức khoẻ thương hiệu', min: 40,
          body: `<table><tr><th>Chỉ số</th><th>Nguồn</th><th>Ý nghĩa</th></tr>
<tr><td>Lượng tìm kiếm tên thương hiệu</td><td>Search Console, Google Trends, Google Ads</td><td>Nhu cầu trực tiếp với thương hiệu; miễn phí và cập nhật liên tục</td></tr>
<tr><td>Share of search</td><td>Lượng tìm kiếm thương hiệu của bạn ÷ tổng của cả nhóm đối thủ</td><td>Nghiên cứu của Les Binet cho thấy chỉ số này tương quan với thị phần và có xu hướng đi trước thị phần</td></tr>
<tr><td>Lưu lượng trực tiếp</td><td>GA4</td><td>Người đã biết và chủ động tìm đến</td></tr>
<tr><td>Nhận biết, cân nhắc</td><td>Khảo sát theo dõi thương hiệu định kỳ</td><td>Thước đo chuẩn, tốn chi phí hơn</td></tr>
<tr><td>Brand lift</td><td>Nghiên cứu trên nền tảng (Google, Meta, TikTok)</td><td>Tác động của một chiến dịch lên nhận biết, ghi nhớ, ý định</td></tr>
<tr><td>Tỷ lệ khách mới</td><td>CRM, hệ thống đơn hàng</td><td>Thương hiệu có đang mở rộng tệp khách không</td></tr></table>
<p>Jenni Romaniuk (Ehrenberg-Bass) nhấn mạnh vai trò của <strong>tài sản thương hiệu đặc trưng</strong>: màu sắc, logo, nhân vật, âm thanh, kiểu chữ giúp người xem nhận ra thương hiệu ngay lập tức. Quảng cáo hiệu suất không gắn tài sản đặc trưng sẽ không tích luỹ được gì cho thương hiệu, dù có thể bán được hàng trong ngắn hạn.</p>`,
          res: ['ehrenberg-bass', 'google-trends']
        },
        {
          title: 'Nguyên tắc phân bổ ngân sách', min: 55,
          body: `<p>Phân bổ diễn ra ở ba cấp:</p>
<ol><li><strong>Tổng ngân sách marketing.</strong> Xuất phát từ mục tiêu tăng trưởng và mô hình tăng trưởng ở module 7.1. Cách lấy phần trăm doanh thu năm trước chỉ nên dùng để kiểm tra chéo.</li><li><strong>Giữa xây thương hiệu và kích hoạt.</strong> Điểm tham chiếu từ nghiên cứu của IPA là khoảng 60/40, điều chỉnh theo bối cảnh: thương hiệu mới hoặc nhỏ và doanh nghiệp bán hoàn toàn trực tuyến thường cần tỷ trọng kích hoạt cao hơn ở giai đoạn đầu, rồi tăng dần phần thương hiệu khi lớn lên.</li><li><strong>Giữa các kênh.</strong> Theo ROAS biên: chuyển tiền từ kênh có lợi suất biên thấp sang kênh có lợi suất biên cao (module 3.6), dùng đường cong phản ứng từ MMM và hệ số tăng thêm từ thử nghiệm (Level 5).</li></ol>
<h4>Dành ngân sách cho việc học</h4>
<p>Một quy tắc thực hành phổ biến là 70/20/10: khoảng 70% cho kênh và cách làm đã chứng minh, 20% cho mở rộng những thứ đang có triển vọng, 10% cho thử nghiệm mới. Phần 10% này là cách duy nhất để tìm ra kênh và sáng tạo của năm sau.</p>
<h4>Quy trình hằng quý</h4>
<ul><li>Cập nhật MMM hoặc đường cong phản ứng.</li><li>Xem lại kết quả thử nghiệm incrementality.</li><li>Đề xuất chuyển dịch ngân sách, kèm dự báo tác động.</li><li>Giữ một phần ngân sách linh hoạt để phản ứng với cơ hội.</li></ul>`,
          res: ['twg-measurement-playbook', 'ipa-making-effectiveness-work']
        },
        {
          title: 'Kế hoạch truyền thông toàn phễu', min: 40,
          body: `<table><tr><th>Tầng</th><th>Mục tiêu</th><th>Kênh điển hình</th><th>Chỉ số</th></tr>
<tr><td>Tạo nhu cầu</td><td>Độ phủ rộng trong nhóm người mua tiềm năng, xây liên tưởng</td><td>Video trực tuyến, TV kết nối, mạng xã hội theo độ phủ, nhà sáng tạo, PR</td><td>Độ phủ, tần suất, brand lift, share of search</td></tr>
<tr><td>Cân nhắc</td><td>Hiện diện khi khách khám phá và đánh giá</td><td>Nội dung, SEO, đánh giá, so sánh, email nuôi dưỡng</td><td>Lưu lượng có chất lượng, đăng ký, tương tác</td></tr>
<tr><td>Bắt nhu cầu</td><td>Chuyển đổi người đang mua</td><td>Tìm kiếm, mua sắm, retail media, remarketing</td><td>CPA, ROAS, iROAS</td></tr>
<tr><td>Giữ chân</td><td>Mua lại, giới thiệu</td><td>Email, ứng dụng, cộng đồng, chăm sóc khách hàng</td><td>Tỷ lệ mua lại, LTV, NPS</td></tr></table>
<h4>Nguyên tắc tích hợp</h4>
<ul><li><strong>Một ý tưởng xuyên suốt</strong>, thể hiện khác nhau theo tầng, cùng bộ tài sản đặc trưng.</li><li><strong>Độ phủ trước, tần suất sau</strong> ở tầng trên; tránh nhắm quá hẹp.</li><li><strong>Liên tục thay vì dồn đợt</strong>: hiện diện đều thường hiệu quả hơn những đợt bùng nổ ngắn rồi im lặng.</li><li><strong>Đo từng tầng bằng chỉ số của tầng đó</strong>. Đừng chấm video thương hiệu bằng ROAS last click.</li></ul>`,
          res: ['minimba-marketing', 'system1-reports']
        }
      ],
      takeaways: [
        'Performance marketing gặt nhu cầu mà thương hiệu đã gieo.',
        'Đo lường thông thường đánh giá quá cao ngắn hạn và quá thấp dài hạn.',
        'Share of search là thước đo sức khoẻ thương hiệu rẻ và sớm.',
        'Phân bổ theo lợi suất biên, và dành phần cố định cho thử nghiệm.'
      ],
      assignment: {
        title: 'Đề xuất phân bổ ngân sách',
        brief: `<ol><li>Tính share of search của thương hiệu bạn so với 4 đối thủ trong 24 tháng bằng Google Trends. Nhận xét xu hướng.</li><li>Phân loại toàn bộ chi tiêu marketing hiện tại vào bốn tầng và vào hai nhóm thương hiệu, kích hoạt.</li><li>Kiểm tra bốn dấu hiệu bắt nhu cầu quá mức trên dữ liệu của bạn.</li><li>Đề xuất phân bổ cho 12 tháng tới theo ba cấp, kèm lập luận và rủi ro.</li><li>Viết phần "điều chúng ta chưa biết" và kế hoạch thử nghiệm để trả lời.</li></ol>`,
        deliverable: 'Đề xuất phân bổ ngân sách ba trang kèm biểu đồ share of search.'
      },
      quiz: [
        { q: 'Quy tắc 95-5 nói gì?', a: ['95% ngân sách nên cho hiệu suất', 'Tại một thời điểm, phần lớn người mua tiềm năng không ở trong thị trường', '95% quảng cáo không hiệu quả', '5% khách tạo 95% doanh thu'], correct: 1, why: 'Chỉ một phần nhỏ người mua tiềm năng đang có nhu cầu tại một thời điểm.' },
        { q: 'Dấu hiệu nào cho thấy doanh nghiệp bắt nhu cầu quá mức mà không tạo nhu cầu?', a: ['CAC giảm đều', 'Tỷ lệ khách mới tăng', 'CAC tăng đều, tỷ trọng doanh thu từ truy vấn thương hiệu và khách cũ tăng', 'Lượng tìm kiếm thương hiệu tăng mạnh'], correct: 2, why: 'Đây là các triệu chứng của việc nguồn nhu cầu mới đang cạn.' },
        { q: 'Share of search được tính thế nào?', a: ['Số từ khoá xếp hạng ÷ tổng từ khoá', 'Lượng tìm kiếm tên thương hiệu của bạn ÷ tổng lượng tìm kiếm tên các thương hiệu trong nhóm', 'Ngân sách tìm kiếm ÷ tổng ngân sách', 'Lượt nhấp ÷ lượt hiển thị'], correct: 1, why: 'Đây là phần của thương hiệu trong tổng nhu cầu tìm kiếm thương hiệu của ngành.' },
        { q: 'Trong quy tắc 70/20/10, phần 10% dành cho gì?', a: ['Dự phòng rủi ro', 'Thử nghiệm kênh và cách làm mới', 'Chi phí agency', 'Remarketing'], correct: 1, why: 'Phần này tài trợ cho việc tìm nguồn tăng trưởng tương lai.' },
        { q: 'Vì sao không nên chấm video thương hiệu bằng ROAS last click?', a: ['Vì video không có lượt nhấp', 'Vì tác động của nó chủ yếu dài hạn và không nằm ở điểm chạm cuối', 'Vì nền tảng không cho phép', 'Vì ROAS chỉ dùng cho ứng dụng'], correct: 1, why: 'Mỗi tầng cần được đo bằng chỉ số khớp với vai trò của nó.' }
      ],
      readings: ['kotler-marketing-6', 'sharp-hbg', 'lewis-rao']
    },
    {
      id: 'm7-3', hours: 6,
      title: 'Lãnh đạo marketing: đội ngũ, tài chính, đối tác',
      summary: 'Tổ chức đội, nói ngôn ngữ của ban lãnh đạo, xây văn hoá thử nghiệm, quản lý agency và lộ trình học tiếp.',
      objectives: [
        'So sánh các mô hình tổ chức đội marketing.',
        'Trình bày kế hoạch và kết quả bằng ngôn ngữ tài chính.',
        'Xây văn hoá thử nghiệm và hệ thống lưu giữ kiến thức.',
        'Thiết lập quan hệ lành mạnh với agency và nhà cung cấp.',
        'Lập kế hoạch phát triển năng lực cá nhân và đội.'
      ],
      lessons: [
        {
          title: 'Tổ chức đội marketing', min: 40,
          body: `<table><tr><th>Mô hình</th><th>Ưu điểm</th><th>Nhược điểm</th></tr>
<tr><td>Theo kênh (SEO, paid, social, email)</td><td>Chuyên môn sâu</td><td>Mỗi kênh tối ưu chỉ số riêng, thiếu nhìn tổng thể hành trình</td></tr>
<tr><td>Theo giai đoạn hành trình (thu hút, kích hoạt, giữ chân)</td><td>Gắn với kết quả khách hàng</td><td>Chuyên môn kênh bị phân tán</td></tr>
<tr><td>Nhóm liên chức năng (pod) theo sản phẩm hoặc thị trường</td><td>Nhanh, tự chủ, chịu trách nhiệm trọn vẹn</td><td>Trùng lặp nguồn lực, cần đội nền tảng hỗ trợ</td></tr></table>
<p>Nhiều tổ chức dùng mô hình lai: các nhóm theo mục tiêu, cộng một nhóm nền tảng dùng chung (dữ liệu và đo lường, sáng tạo, công cụ).</p>
<h4>Năng lực hình chữ T</h4>
<p>Mỗi người có hiểu biết rộng trên nhiều lĩnh vực (thanh ngang) và chuyên sâu ở một đến hai lĩnh vực (thanh dọc). Lộ trình bảy cấp độ của khoá học này xây thanh ngang; bạn chọn thanh dọc theo sở thích và nhu cầu của tổ chức.</p>
<h4>Làm trong nhà hay thuê ngoài</h4>
<ul><li><strong>Giữ trong nhà:</strong> chiến lược, dữ liệu và đo lường, hiểu biết khách hàng, quyền sở hữu tài khoản.</li><li><strong>Có thể thuê ngoài:</strong> vận hành kênh chuyên sâu, sản xuất sáng tạo số lượng lớn, năng lực chuyên biệt dùng không thường xuyên.</li></ul>
<p>AI đang thay đổi cân bằng này: nhiều việc vận hành trước đây cần agency nay làm được trong nhà với đội nhỏ hơn.</p>`,
          res: ['minimba-marketing', 'lennys-newsletter']
        },
        {
          title: 'Nói ngôn ngữ của ban lãnh đạo', min: 50,
          body: `<p>Giám đốc tài chính không quan tâm tới CTR. Họ quan tâm tới tăng trưởng, lợi nhuận, dòng tiền và rủi ro.</p>
<table><tr><th>Thay vì nói</th><th>Hãy nói</th></tr>
<tr><td>ROAS tăng từ 3,2 lên 3,8</td><td>Lợi nhuận đóng góp sau marketing tăng 18%, thời gian hoàn vốn giảm từ 5 xuống 4 tháng</td></tr>
<tr><td>Cần thêm ngân sách cho Meta</td><td>Ở mức chi hiện tại, lợi suất biên của kênh này là X. Thêm Y sẽ mang về khoảng Z lợi nhuận, với khoảng tin cậy như sau</td></tr>
<tr><td>Chiến dịch thương hiệu đạt 5 triệu lượt xem</td><td>Share of search tăng 2 điểm, và mô hình cho thấy chi phí thu hút khách mới sẽ giảm trong hai quý tới</td></tr></table>
<h4>Cấu trúc một bản trình bày ngân sách</h4>
<ol><li><strong>Mục tiêu kinh doanh</strong> mà kế hoạch phục vụ.</li><li><strong>Mô hình:</strong> đầu vào nào dẫn tới kết quả nào.</li><li><strong>Bằng chứng:</strong> dữ liệu lịch sử, thử nghiệm, chuẩn ngành.</li><li><strong>Kịch bản:</strong> thận trọng, cơ sở, lạc quan.</li><li><strong>Rủi ro và giả định</strong> nêu rõ.</li><li><strong>Cột mốc kiểm tra:</strong> khi nào xem lại, tiêu chí điều chỉnh.</li></ol>
<p>Trung thực về độ bất định xây niềm tin. Báo cáo <em>Making Effectiveness Work</em> của IPA mô tả cách các tổ chức đưa văn hoá hiệu quả vào quan hệ giữa marketing và tài chính.</p>`,
          res: ['ipa-making-effectiveness-work', 'a16z-metrics']
        },
        {
          title: 'Văn hoá thử nghiệm và học hỏi', min: 40,
          body: `<p>Kohavi và cộng sự mô tả các mức trưởng thành về thử nghiệm của một tổ chức: bò, đi, chạy, bay. Tiến từ mức này sang mức kia cần ba thứ:</p>
<ul><li><strong>Hạ tầng:</strong> công cụ để chạy thử nghiệm dễ dàng và đáng tin.</li><li><strong>Quy trình:</strong> mẫu thiết kế thử nghiệm, rà soát trước khi chạy, quy tắc quyết định viết trước.</li><li><strong>Văn hoá:</strong> lãnh đạo chấp nhận bị dữ liệu bác bỏ, thất bại có bài học được ghi nhận như thành công, không ai bị phạt vì thử nghiệm thua.</li></ul>
<h4>Kho kiến thức</h4>
<p>Mỗi thử nghiệm, chiến dịch lớn và phân tích quan trọng cần một bản ghi ngắn: bối cảnh, giả thuyết, điều đã làm, kết quả kèm độ tin cậy, bài học, bước tiếp theo. Đặt ở nơi mọi người tìm được.</p>
<p>Tổ chức không có kho kiến thức sẽ thử lại cùng một ý tưởng mỗi khi đổi nhân sự. AI làm kho này có giá trị hơn: trợ lý AI có thể tra cứu, tóm tắt và gợi ý dựa trên lịch sử của chính tổ chức.</p>
<h4>Nhịp họp gợi ý</h4>
<ul><li><strong>Hằng tuần:</strong> kết quả, bài học, kế hoạch thử nghiệm.</li><li><strong>Hằng tháng:</strong> hiệu quả kinh doanh, ngân sách.</li><li><strong>Hằng quý:</strong> chiến lược, phân bổ, đo lường, năng lực đội.</li></ul>`,
          res: ['kohavi-book', 'hacking-growth']
        },
        {
          title: 'Làm việc với agency và nhà cung cấp', min: 40,
          body: `<h4>Nguyên tắc không thương lượng</h4>
<ul><li><strong>Bạn sở hữu tài khoản và dữ liệu.</strong> Tài khoản quảng cáo, analytics, tag manager phải thuộc về doanh nghiệp, agency được cấp quyền truy cập.</li><li><strong>Minh bạch chi phí:</strong> tách rõ chi phí media và phí dịch vụ.</li><li><strong>Quyền truy cập đầy đủ</strong> vào báo cáo gốc của nền tảng, không chỉ báo cáo đã qua tay agency.</li></ul>
<h4>Thiết kế động lực</h4>
<p>Phí tính theo phần trăm chi tiêu tạo động lực tăng chi tiêu. Phí theo ROAS nền tảng tạo động lực dồn về kênh cuối phễu và remarketing. Phí cố định cộng thưởng theo kết quả kinh doanh thật (khách mới, lợi nhuận, kết quả tăng thêm) thường lành mạnh hơn.</p>
<h4>Brief tốt</h4>
<p>Gồm mục tiêu kinh doanh, đối tượng, insight, thông điệp, ngân sách, chỉ số thành công, ràng buộc, thời hạn. Chất lượng đầu ra của agency hiếm khi vượt chất lượng brief.</p>
<h4>Đánh giá nhà cung cấp đo lường và công nghệ</h4>
<ul><li>Phương pháp có được giải thích rõ không, hay là hộp đen?</li><li>Kết quả có được kiểm chứng bằng thử nghiệm không?</li><li>Nhà cung cấp có xung đột lợi ích không (vừa bán media vừa đo media)?</li><li>Bạn có giữ được dữ liệu khi ngừng hợp đồng không?</li></ul>`,
          res: ['ipa-making-effectiveness-work']
        },
        {
          title: 'Lộ trình học tiếp và chương trình nâng cao', min: 35,
          body: `<p>Ngành này thay đổi liên tục. Cách cập nhật hiệu quả là theo dõi một số ít nguồn chất lượng cao:</p>
<ul><li><strong>Tài liệu và ghi chú phát hành của nền tảng:</strong> nguồn gốc cho mọi thay đổi sản phẩm.</li><li><strong>Nghiên cứu:</strong> Think with Google, IPA, Ehrenberg-Bass, Stanford AI Index, các bài báo trên arXiv và NBER.</li><li><strong>Chuyên gia thực hành:</strong> MDM của Eric Seufert (mobile và quyền riêng tư), Occam's Razor của Avinash Kaushik (analytics), Lenny's Newsletter (tăng trưởng sản phẩm), Simo Ahava (tagging).</li></ul>
<h4>Chương trình trả phí đáng cân nhắc sau lộ trình này</h4>
<table><tr><th>Chương trình</th><th>Nơi</th><th>Phù hợp khi</th></tr>
<tr><td>MiniMBA in Marketing (Mark Ritson)</td><td>Anh</td><td>Muốn củng cố nền tảng chiến lược marketing ở mức MBA</td></tr>
<tr><td>Chứng chỉ CIM</td><td>Anh</td><td>Cần bằng cấp nghề nghiệp được công nhận quốc tế</td></tr>
<tr><td>DMI Pro</td><td>Ireland, toàn cầu</td><td>Cần chứng chỉ digital marketing tổng quát có kiểm định</td></tr>
<tr><td>Digital Marketing Strategy and AI (HBS Online)</td><td>Mỹ</td><td>Muốn học theo phương pháp tình huống của Harvard</td></tr>
<tr><td>Chương trình điều hành của NUS, SMU</td><td>Singapore</td><td>Muốn mạng lưới và góc nhìn Đông Nam Á</td></tr>
<tr><td>Reforge, CXL</td><td>Mỹ</td><td>Muốn đào sâu tăng trưởng sản phẩm hoặc tối ưu chuyển đổi</td></tr></table>
<p>Không chương trình nào thay được việc tự làm. Bằng chứng năng lực thuyết phục nhất là danh mục các dự án bạn đã thực hiện, có số liệu và bài học.</p>`,
          res: ['minimba-marketing', 'cim-quals', 'hbs-dms-ai', 'nus-exec-dm']
        }
      ],
      takeaways: [
        'Giữ chiến lược, dữ liệu và quyền sở hữu tài khoản trong nhà.',
        'Trình bày bằng lợi nhuận, hoàn vốn và rủi ro, không bằng chỉ số kênh.',
        'Kho kiến thức ngăn tổ chức học lại cùng một bài học.',
        'Cách tính phí quyết định hành vi của agency.'
      ],
      assignment: {
        title: 'Hồ sơ lãnh đạo marketing',
        brief: `<ol><li>Vẽ sơ đồ tổ chức đội marketing hiện tại và đề xuất cấu trúc mục tiêu, kèm lý do.</li><li>Tự đánh giá năng lực hình chữ T của bạn theo bảy cấp độ của khoá học. Chọn hai lĩnh vực sẽ đào sâu trong 12 tháng tới.</li><li>Viết lại báo cáo marketing tháng gần nhất thành bản một trang cho giám đốc tài chính.</li><li>Lập mẫu bản ghi thử nghiệm và mẫu brief cho agency.</li><li>Nếu đang làm việc với agency, rà soát theo các nguyên tắc không thương lượng.</li></ol>`,
        deliverable: 'Sơ đồ tổ chức, kế hoạch phát triển cá nhân, báo cáo một trang và hai mẫu tài liệu.'
      },
      quiz: [
        { q: 'Hạn chế chính của tổ chức đội theo kênh là gì?', a: ['Thiếu chuyên môn sâu', 'Mỗi kênh tối ưu chỉ số riêng, thiếu cái nhìn tổng thể về hành trình khách hàng', 'Chi phí cao', 'Không đo lường được'], correct: 1, why: 'Chuyên môn hoá theo kênh dễ dẫn tới tối ưu cục bộ.' },
        { q: 'Nguyên tắc nào là không thương lượng khi làm việc với agency?', a: ['Agency sở hữu tài khoản quảng cáo', 'Doanh nghiệp sở hữu tài khoản và dữ liệu', 'Phí tính theo phần trăm chi tiêu', 'Chỉ nhận báo cáo tổng hợp'], correct: 1, why: 'Quyền sở hữu tài khoản và dữ liệu bảo vệ doanh nghiệp khi đổi đối tác.' },
        { q: 'Phí agency tính theo phần trăm chi tiêu media tạo động lực gì?', a: ['Giảm chi tiêu', 'Tăng chi tiêu, bất kể hiệu quả biên', 'Tăng chất lượng sáng tạo', 'Tập trung vào giữ chân'], correct: 1, why: 'Thu nhập của agency tăng theo ngân sách, không theo kết quả.' },
        { q: 'Cách trình bày nào phù hợp nhất với giám đốc tài chính?', a: ['CTR tăng 0,4 điểm', 'Lợi nhuận đóng góp sau marketing tăng 18%, thời gian hoàn vốn giảm một tháng', 'Đạt 5 triệu lượt hiển thị', 'Điểm chất lượng tăng lên 8'], correct: 1, why: 'Lợi nhuận và hoàn vốn là ngôn ngữ của tài chính.' },
        { q: 'Vì sao cần kho kiến thức về thử nghiệm?', a: ['Để đáp ứng kiểm toán', 'Để tổ chức không thử lại những điều đã biết và tích luỹ hiểu biết qua thời gian', 'Để tăng số thử nghiệm', 'Để thay thế báo cáo tháng'], correct: 1, why: 'Kiến thức không được ghi lại sẽ mất khi nhân sự thay đổi.' }
      ],
      readings: ['dmi-pro', 'smu-dm', 'reforge-growth-loops']
    },
    {
      id: 'm7-4', hours: 20,
      title: 'Dự án tốt nghiệp: kế hoạch tăng trưởng 12 tháng',
      summary: 'Tổng hợp toàn bộ lộ trình thành một kế hoạch hoàn chỉnh cho một doanh nghiệp thật, đủ chất lượng để trình ban lãnh đạo.',
      objectives: [
        'Chẩn đoán tình hình doanh nghiệp bằng dữ liệu và nghiên cứu khách hàng.',
        'Xây chiến lược và mô hình tăng trưởng định lượng.',
        'Lập kế hoạch kênh, sáng tạo và ngân sách có dự báo.',
        'Thiết kế khung đo lường và quy trình làm việc có AI.',
        'Trình bày và bảo vệ kế hoạch trước người phản biện.'
      ],
      lessons: [
        {
          title: 'Bước 1: Chẩn đoán', min: 240,
          body: `<p>Chọn doanh nghiệp bạn đang làm việc, hoặc một doanh nghiệp bạn tiếp cận được dữ liệu. Phần chẩn đoán gồm:</p>
<ul><li><strong>Thị trường và đối thủ:</strong> quy mô, xu hướng, 3 đến 5 đối thủ chính, share of search.</li><li><strong>Khách hàng:</strong> phân khúc, persona, JTBD, hành trình. Dựa trên ít nhất 5 phỏng vấn và phân tích đánh giá.</li><li><strong>Hiệu quả hiện tại:</strong> phễu, unit economics (CAC, LTV, biên gộp, hoàn vốn), hiệu quả theo kênh, retention theo cohort.</li><li><strong>Tài sản:</strong> kiểm kê Paid, Owned, Earned; audit SEO, trang đích, tài khoản quảng cáo, hệ thống đo lường.</li><li><strong>Bốn độ tương thích</strong> và các vòng lặp tăng trưởng hiện có.</li></ul>
<p>Kết thúc bằng một trang <strong>"Ba vấn đề lớn nhất và ba cơ hội lớn nhất"</strong>, mỗi mục có bằng chứng.</p>
<p><strong>Dùng lại:</strong> bài tập của các module 1.1 đến 1.4, 2.1, 2.5, 4.5, 5.3, 7.1.</p>`,
          res: []
        },
        {
          title: 'Bước 2: Chiến lược và mô hình tăng trưởng', min: 240,
          body: `<ul><li><strong>Mục tiêu 12 tháng:</strong> 1 mục tiêu kinh doanh, 2 đến 3 mục tiêu marketing SMART.</li><li><strong>Lựa chọn chiến lược:</strong> phân khúc ưu tiên, định vị, đề xuất giá trị. Nêu rõ điều bạn chọn <em>không</em> làm.</li><li><strong>North Star Metric</strong> và 3 đến 5 chỉ số đầu vào.</li><li><strong>Mô hình tăng trưởng</strong> trên bảng tính theo tháng: khách mới theo kênh, giữ chân, doanh thu, lợi nhuận đóng góp. Ba kịch bản.</li><li><strong>Phân tích độ nhạy:</strong> ba đòn bẩy lớn nhất.</li><li><strong>Giả định then chốt:</strong> liệt kê và xếp theo mức độ bất định.</li></ul>
<p>Tiêu chí chất lượng: một người đọc lạ có thể lần theo mô hình từ đầu vào tới mục tiêu và hiểu vì sao mục tiêu khả thi.</p>
<p><strong>Dùng lại:</strong> bài tập module 1.1, 3.6, 4.5, 7.1.</p>`,
          res: []
        },
        {
          title: 'Bước 3: Kế hoạch kênh, sáng tạo và ngân sách', min: 300,
          body: `<ul><li><strong>Kế hoạch toàn phễu:</strong> vai trò của từng kênh ở từng tầng, kèm chỉ số riêng.</li><li><strong>Kế hoạch owned:</strong> SEO và nội dung (cụm chủ đề, lịch biên tập), email và CRM (chuỗi vòng đời), cải tiến trang đích.</li><li><strong>Kế hoạch paid:</strong> cấu trúc tài khoản, chiến lược giá thầu, tín hiệu chuyển đổi cho từng nền tảng. Nếu có ứng dụng: kế hoạch UA và ASO.</li><li><strong>Chiến lược sáng tạo:</strong> ma trận góc tiếp cận, 6 khái niệm ưu tiên, nhịp sản xuất và thử nghiệm.</li><li><strong>Ngân sách:</strong> phân bổ theo ba cấp (tổng, thương hiệu và kích hoạt, kênh), theo tháng, kèm lập luận về lợi suất biên. Dành riêng phần thử nghiệm.</li><li><strong>Lộ trình:</strong> việc gì làm trong 30, 90, 180, 365 ngày. Ai chịu trách nhiệm.</li></ul>
<p><strong>Dùng lại:</strong> bài tập module 2.2 đến 2.5, toàn bộ Level 3, module 4.3, 4.4, 7.2.</p>`,
          res: []
        },
        {
          title: 'Bước 4: Khung đo lường và quy trình AI', min: 240,
          body: `<h4>Khung đo lường</h4>
<ul><li><strong>Kế hoạch thu thập dữ liệu:</strong> sự kiện, tag, consent, kênh máy chủ.</li><li><strong>Bảng điều khiển:</strong> phác thảo ba cấp (lãnh đạo, trưởng nhóm, chuyên viên).</li><li><strong>Tam giác đo lường:</strong> attribution dùng cho gì, thử nghiệm incrementality nào sẽ chạy và khi nào, có làm MMM không.</li><li><strong>Lịch thử nghiệm 12 tháng:</strong> ít nhất 6 thử nghiệm có giả thuyết và thiết kế sơ bộ.</li></ul>
<h4>Kế hoạch AI</h4>
<ul><li>3 đến 5 quy trình có AI sẽ triển khai, xếp theo giá trị và rủi ro.</li><li>Mức sẵn sàng cho chiến dịch AI trên nền tảng quảng cáo và việc cần làm.</li><li>Kế hoạch hiện diện trên tìm kiếm AI.</li><li>Chính sách AI nội bộ.</li></ul>
<h4>Rủi ro</h4>
<p>Bảng rủi ro gồm: mô tả, khả năng xảy ra, tác động, dấu hiệu cảnh báo sớm, phương án ứng phó. Tối thiểu phải có: phụ thuộc kênh, thay đổi quyền riêng tư hoặc chính sách nền tảng, CAC tăng, sai lệch đo lường.</p>
<p><strong>Dùng lại:</strong> bài tập module 5.1, 5.4 đến 5.6, toàn bộ Level 6.</p>`,
          res: []
        },
        {
          title: 'Bước 5: Trình bày và phản biện', min: 180,
          body: `<h4>Sản phẩm cuối</h4>
<ol><li><strong>Tóm tắt điều hành một trang:</strong> tình hình, mục tiêu, ba lựa chọn chiến lược, ngân sách, kết quả kỳ vọng, rủi ro chính.</li><li><strong>Tài liệu kế hoạch</strong> 15 đến 25 trang.</li><li><strong>Bảng tính</strong> mô hình tăng trưởng và ngân sách.</li><li><strong>Bài trình bày</strong> 15 phút.</li></ol>
<h4>Tự chấm theo thang điểm</h4>
<table><tr><th>Tiêu chí</th><th>Trọng số</th><th>Câu hỏi kiểm tra</th></tr>
<tr><td>Chẩn đoán dựa trên bằng chứng</td><td>20%</td><td>Mỗi nhận định có dữ liệu hoặc nghiên cứu khách hàng đi kèm không?</td></tr>
<tr><td>Chiến lược rõ ràng</td><td>20%</td><td>Có nêu điều không làm không? Định vị có khác biệt không?</td></tr>
<tr><td>Mô hình và ngân sách</td><td>20%</td><td>Lần được từ đầu vào tới mục tiêu không? Có tính lợi suất biên không?</td></tr>
<tr><td>Kế hoạch thực thi</td><td>15%</td><td>Có đủ cụ thể để bắt đầu vào thứ Hai tới không?</td></tr>
<tr><td>Đo lường và học hỏi</td><td>15%</td><td>Có cách biết kế hoạch sai và sửa không?</td></tr>
<tr><td>Trình bày</td><td>10%</td><td>Người không chuyên có hiểu trong 5 phút đầu không?</td></tr></table>
<p>Trình bày cho ít nhất hai người: một người làm marketing và một người làm tài chính hoặc điều hành. Yêu cầu họ tìm ba điểm yếu nhất. Sửa kế hoạch theo phản biện và ghi lại những gì đã thay đổi.</p>
<p>Kế hoạch này, cùng các bài tập và chứng chỉ trên đường học, tạo thành danh mục năng lực của bạn.</p>`,
          res: []
        }
      ],
      takeaways: [
        'Kế hoạch tốt bắt đầu bằng chẩn đoán có bằng chứng và nêu rõ điều không làm.',
        'Mọi mục tiêu phải lần ngược được về đầu vào trong mô hình.',
        'Kế hoạch phải chứa cách phát hiện mình sai.',
        'Phản biện từ người làm tài chính là phép thử thực tế nhất.'
      ],
      assignment: {
        title: 'Nộp dự án tốt nghiệp',
        brief: `<p>Hoàn thành năm bước ở trên. Trước khi đánh dấu hoàn thành, kiểm tra:</p><ul><li>Tóm tắt điều hành dài đúng một trang.</li><li>Bảng tính chạy được và có ba kịch bản.</li><li>Đã trình bày cho ít nhất hai người và ghi nhận phản biện.</li><li>Đã tự chấm theo thang điểm, đạt từ 75% trở lên.</li></ul>`,
        deliverable: 'Tóm tắt điều hành, tài liệu kế hoạch, bảng tính, bài trình bày và ghi chú phản biện.'
      },
      quiz: [
        { q: 'Phần nào phải có trước khi viết chiến lược?', a: ['Kế hoạch sáng tạo', 'Chẩn đoán dựa trên dữ liệu và nghiên cứu khách hàng', 'Ngân sách theo kênh', 'Lịch đăng bài'], correct: 1, why: 'Chiến lược không có chẩn đoán là phỏng đoán.' },
        { q: 'Dấu hiệu của một lựa chọn chiến lược rõ ràng là gì?', a: ['Liệt kê thật nhiều kênh', 'Nêu rõ điều sẽ không làm', 'Ngân sách lớn', 'Dùng nhiều thuật ngữ'], correct: 1, why: 'Chiến lược là lựa chọn; không có gì bị loại thì chưa có lựa chọn.' },
        { q: 'Phân bổ ngân sách giữa các kênh nên dựa trên điều gì?', a: ['ROAS trung bình do nền tảng báo cáo', 'Lợi suất biên, có hiệu chỉnh bằng thử nghiệm tăng thêm', 'Số người theo dõi', 'Thói quen năm trước'], correct: 1, why: 'Lợi suất biên cho biết đồng tiếp theo nên đi đâu.' },
        { q: 'Vì sao kế hoạch cần lịch thử nghiệm?', a: ['Để tăng khối lượng công việc', 'Để kiểm chứng các giả định then chốt và điều chỉnh kế hoạch', 'Vì nền tảng yêu cầu', 'Để thay thế báo cáo'], correct: 1, why: 'Mọi kế hoạch dựa trên giả định; thử nghiệm cho biết giả định nào sai.' },
        { q: 'Rủi ro nào bắt buộc phải có trong bảng rủi ro của kế hoạch tăng trưởng?', a: ['Thay đổi logo', 'Phụ thuộc vào một kênh và thay đổi chính sách nền tảng', 'Thời tiết', 'Đổi văn phòng'], correct: 1, why: 'Phụ thuộc kênh và thay đổi chính sách là rủi ro cấu trúc của mọi kế hoạch digital.' }
      ],
      readings: ['yc-startup-school', 'kotler-mm', 'kohavi-book']
    }
  ]
});
