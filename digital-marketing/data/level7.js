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
<ul><li>Bốn độ tương thích phụ thuộc lẫn nhau. Đổi một thứ (ví dụ tăng giá) có thể phá vỡ thứ khác (kênh không còn phù hợp).</li><li>Làm chủ một kênh thường tốt hơn chắp vá "mỗi kênh một ít": bài Channel–Model của Balfour cảnh báo chiến lược chắp vá khó thực thi và tăng chậm hơn. Đây là tinh thần chung, không phải một thống kê.</li><li>Kênh và các độ tương thích thay đổi theo thời gian, nên phải xem lại định kỳ.</li></ul>
<p>Loạt bài gốc <em>Four Fits For $100M+ Growth</em> viết cho startup công nghệ nhắm mốc 100 triệu đô; khi áp cho doanh nghiệp của bạn, hãy thay mốc đó bằng mục tiêu của chính mình.</p>
<p>Với doanh nghiệp đã vận hành lâu, khung này giúp trả lời vì sao một kênh "ai cũng dùng" lại không hiệu quả với mình.</p>`,
          res: ['balfour-four-fits']
        },
        {
          title: 'Vòng lặp tăng trưởng', min: 50,
          body: `<p>Phễu là mô hình tuyến tính: đổ vào đầu trên, lấy ra đầu dưới, rồi phải đổ tiếp. Bài viết <em>Growth Loops are the New Funnels</em> (blog Reforge, 2018, do Brian Balfour, Casey Winters, Kevin Kwok và Andrew Chen viết) đề xuất nhìn tăng trưởng như <strong>vòng lặp</strong>: đầu ra của một chu kỳ trở thành đầu vào của chu kỳ sau.</p>
<table><tr><th>Loại vòng lặp</th><th>Cơ chế</th></tr>
<tr><td>Lan truyền</td><td>Người dùng mời người khác trong quá trình dùng sản phẩm → người mới tham gia → họ lại mời</td></tr>
<tr><td>Nội dung do người dùng tạo</td><td>Người dùng tạo nội dung (đánh giá, bài đăng, hồ sơ) → công cụ tìm kiếm lập chỉ mục → người tìm thấy và đăng ký → họ tạo thêm nội dung</td></tr>
<tr><td>Nội dung do công ty tạo</td><td>Doanh thu → đầu tư nội dung → lưu lượng tự nhiên → khách hàng → doanh thu</td></tr>
<tr><td>Trả phí</td><td>Khách hàng tạo doanh thu → tái đầu tư vào quảng cáo → khách hàng mới. Tốc độ quay phụ thuộc thời gian hoàn vốn</td></tr>
<tr><td>Bán hàng</td><td>Doanh thu → tuyển thêm người bán → thêm hợp đồng</td></tr></table>
<p><em>Bảng năm loại trên là cách phân loại phổ biến trong giới growth. Bài gốc của Reforge chỉ phân tích kỹ ví dụ Pinterest, không mô tả chi tiết vòng trả phí hay vòng bán hàng.</em></p>
<h4>Vì sao cách nhìn này hữu ích</h4>
<ul><li>Vòng lặp <strong>tái đầu tư</strong> đầu ra: mỗi vòng xây trên vòng trước. Lưu ý: phần lớn vòng lặp ngoài đời có hệ số k (mỗi đầu ra sinh thêm bao nhiêu đầu ra) nhỏ hơn 1, nên chúng không tự chạy mãi mà đóng vai trò hệ số nhân cho mọi khách bạn mang về.</li><li>Buộc marketing, sản phẩm và doanh thu nhìn chung một hệ thống.</li><li>Chỉ ra điểm nghẽn: cải thiện mắt xích yếu nhất làm cả vòng quay nhanh hơn.</li></ul>
<p>Vòng lặp trả phí là vòng dễ sao chép nhất, và theo <em>Law of Shitty Clickthroughs</em> của Andrew Chen, mọi chiến lược marketing đều mòn hiệu quả theo thời gian (tính mới phai, đối thủ bắt chước, mở rộng tới người ít phù hợp hơn); vòng trả phí chịu đủ cả ba lực, nên ít tạo lợi thế bền nhất. Bài của Reforge cũng nhận xét sản phẩm tăng nhanh nhất thường chạy bằng một hoặc hai vòng lặp chính, và vòng lặp gắn với sản phẩm thì khó bị sao chép hơn. Vì vậy, hãy xây ít nhất một vòng lặp phi trả phí.</p>`,
          res: ['reforge-growth-loops', 'andrew-chen']
        },
        {
          title: 'North Star Metric', min: 45,
          body: `<p><strong>North Star Metric</strong> (chỉ số Sao Bắc Đẩu) là một chỉ số duy nhất nắm bắt rõ nhất giá trị khách hàng nhận được từ sản phẩm, và là chỉ số dẫn dắt (leading indicator) của doanh thu. Theo <em>North Star Playbook</em> của Amplitude, một North Star tốt:</p>
<ul><li>Thể hiện <strong>giá trị khách hàng nhận được</strong>, không chỉ là giá trị công ty thu về.</li><li>Phản ánh tầm nhìn và chiến lược.</li><li>Là chỉ số dẫn dắt của thành công.</li><li>Hành động được, đo được, người không chuyên kỹ thuật cũng hiểu.</li><li>Không phải vanity metric (chỉ số cho đẹp) như lượt tải, lượt xem trang, số người đăng ký.</li></ul>
<p>Playbook cũng khuyên xác định "trò chơi" của doanh nghiệp trước: attention (khách càng dùng lâu càng hài lòng), transaction (khách hoàn tất giao dịch dễ dàng) hay productivity (khách dùng sản phẩm để làm xong việc). Bảng dưới là ví dụ minh hoạ:</p>
<table><tr><th>Loại hình</th><th>Ví dụ North Star</th></tr>
<tr><td>Lưu trú, du lịch</td><td>Số đêm phòng được đặt</td></tr>
<tr><td>Thương mại điện tử</td><td>Số khách mua hàng mỗi tuần</td></tr>
<tr><td>Phần mềm làm việc nhóm</td><td>Số nhóm hoạt động hằng tuần</td></tr>
<tr><td>Nội dung, giải trí</td><td>Tổng thời gian xem</td></tr></table>
<p>North Star được tách thành các <strong>chỉ số đầu vào</strong> (input metric), theo Amplitude thường là ba đến năm yếu tố mà đội tác động trực tiếp được, nghĩ theo bốn chiều: độ rộng, độ sâu, tần suất, hiệu quả. Mỗi nhánh có một người chịu trách nhiệm. Ví dụ với số đêm phòng được đặt: số người tìm kiếm có ngày cụ thể, tỷ lệ tìm kiếm thành đặt phòng, số đêm trung bình mỗi lượt đặt, tỷ lệ khách quay lại.</p>
<div class="callout"><b>Tránh:</b> chọn doanh thu làm North Star. Theo Amplitude, các chỉ số như doanh thu cho biết điều đã xảy ra chứ không dự báo tương lai, và không cho đội biết phải tạo giá trị gì cho khách. Nên kèm một <strong>chỉ số bảo vệ</strong> (guardrail) để đội không đẩy North Star bằng cách hy sinh trải nghiệm hay lợi nhuận. North Star đầu tiên thực chất là một giả thuyết, sẽ được chỉnh khi bạn học thêm.</div>`,
          res: ['amplitude-north-star']
        },
        {
          title: 'Mô hình tăng trưởng định lượng', min: 70,
          body: `<p>Mô hình tăng trưởng là một bảng tính nối các đầu vào bạn kiểm soát với kết quả kinh doanh. Cấu trúc tối giản theo tháng:</p>
<div class="formula"><code>Khách mới(t) = Σ theo kênh [Ngân sách ÷ CAC] + Khách tự nhiên + Khách từ giới thiệu</code><br><code>Khách hoạt động(t) = Khách mới(t) + Σ các cohort trước × Tỷ lệ giữ chân theo tuổi cohort</code><br><code>Doanh thu(t) = Khách hoạt động(t) × Tần suất mua × Giá trị đơn</code><br><code>Lợi nhuận đóng góp(t) = Doanh thu × Biên gộp − Chi phí marketing</code></div>
<h4>Cách dùng mô hình</h4>
<ul><li><strong>Phân tích độ nhạy:</strong> thay đổi từng đầu vào 10% và xem kết quả 12 tháng thay đổi bao nhiêu. Đầu vào nào có đòn bẩy lớn nhất là nơi nên tập trung. Với sản phẩm dùng lặp lại (phần mềm thuê bao, thương mại điện tử hàng tiêu dùng), giữ chân thường có đòn bẩy lớn hơn thu hút vì nó cộng dồn qua mọi cohort. Nhưng với doanh nghiệp khách mua thưa, như khách sạn ở điểm đến xa, mô hình mẫu trong bài giảng cho thấy tỷ lệ chuyển đổi mới là đòn bẩy lớn nhất. Hãy để mô hình của chính bạn trả lời. Và luôn ghép bảng độ nhạy với chi phí để kéo từng đầu vào.</li><li><strong>Tìm ràng buộc:</strong> điều gì đang giới hạn tăng trưởng: lưu lượng, chuyển đổi, giữ chân, hay công suất phục vụ?</li><li><strong>Kịch bản:</strong> điều gì xảy ra nếu CPC hay CAC tăng dần theo thời gian? Đừng giữ chúng cố định suốt 12 tháng, vì hiệu quả kênh thường mòn dần.</li><li><strong>Đặt mục tiêu:</strong> mục tiêu tăng trưởng đòi hỏi những đầu vào nào, có khả thi không?</li></ul>
<p>Bước kiểm tra đầu tiên: mô hình phải tái tạo được tháng hiện tại; không tái tạo được hiện tại thì đừng tin nó về tương lai. Mô hình đơn giản mà cả đội hiểu có ích hơn mô hình phức tạp chỉ một người đọc được. Đây là phần lõi của dự án tốt nghiệp.</p>`,
          res: ['a16z-metrics', 'yc-startup-school']
        },
        {
          title: 'Quy trình thử nghiệm tăng trưởng', min: 45,
          body: `<p><em>Hacking Growth</em> của Sean Ellis và Morgan Brown (2017) xây phương pháp quanh đội liên chức năng và thử nghiệm với nhịp nhanh (high-tempo testing). Các bản tóm tắt sách thường mô tả chu trình bốn bước lặp lại liên tục; nhiều đội chạy theo tuần, nhưng hãy chọn nhịp hợp với lưu lượng của bạn:</p>
<ol><li><strong>Phân tích:</strong> dữ liệu và nghiên cứu định tính chỉ ra cơ hội.</li><li><strong>Lên ý tưởng:</strong> cả đội đóng góp ý tưởng, ghi rõ giả thuyết, chỉ số và cách thử.</li><li><strong>Ưu tiên:</strong> chấm ICE (Impact, Confidence, Ease: tác động, độ tin, độ dễ). ICE nhanh nhưng chủ quan; chấm Confidence dựa trên bằng chứng có sẵn, không dựa trên độ hào hứng.</li><li><strong>Thử nghiệm:</strong> chạy, đo, ghi nhận bài học, đưa vào kho kiến thức.</li></ol>
<h4>Đội tăng trưởng liên chức năng</h4>
<p>Gồm marketing, sản phẩm, kỹ thuật, dữ liệu, thiết kế. Lý do: phần lớn đòn bẩy tăng trưởng nằm ở giao điểm, như onboarding, trang đích, giá, luồng giới thiệu. Một phòng marketing đứng riêng không chạm được vào những thứ đó.</p>
<h4>Chỉ số của quy trình</h4>
<ul><li><strong>Nhịp thử nghiệm:</strong> số thử nghiệm có kết luận mỗi quý, kể cả kết luận "không có tác động".</li><li><strong>Tỷ lệ thắng của đội bạn:</strong> thường thấp; con số hay được dẫn dao động từ khoảng một phần ba (Microsoft) xuống dưới 10% ở sản phẩm đã tối ưu kỹ (module 5.4). Hãy đo của chính đội mình.</li><li><strong>Tác động tích luỹ</strong> lên North Star, có trừ hao vì hiệu ứng đo trong thử nghiệm thường lớn hơn khi triển khai rộng.</li></ul>
<p>Doanh nghiệp nhỏ cần lưu ý: một A/B test chuyển đổi có thể cần hàng chục nghìn phiên mỗi nhánh. "Nhịp nhanh" với bạn nghĩa là chọn chỉ số gần hành vi, nhiều lượt hơn, và chỉ thử thay đổi đủ lớn.</p>
<p>Điều kiện tiên quyết theo Ellis: sản phẩm phải thật sự được khách hàng cần trước khi tăng tốc. Phép thử của ông hỏi người dùng sẽ thấy thế nào nếu không còn được dùng sản phẩm. Từ khảo sát gần một trăm startup, Ellis thấy dưới mốc 40% trả lời "rất thất vọng", công ty thường chật vật để tăng trưởng, nên hãy sửa sản phẩm trước. 40% là mốc rút ra từ quan sát, không phải định luật.</p>`,
          res: ['hacking-growth', 'lennys-newsletter']
        }
      ],
      takeaways: [
        'Sản phẩm, kênh, mô hình doanh thu và thị trường phải khớp nhau cùng lúc.',
        'Vòng lặp tái đầu tư đầu ra thành đầu vào và nhân mọi kênh khác; phễu thì phải đổ lại từ đầu.',
        'North Star đo giá trị khách hàng nhận được, không phải doanh thu, và cần một chỉ số bảo vệ đi kèm.',
        'Mô hình tăng trưởng cho thấy đòn bẩy lớn nhất. Đừng mặc định đó là giữ chân; hãy kiểm tra với tần suất mua của ngành bạn.'
      ],
      assignment: {
        title: 'Phân tích chiến lược tăng trưởng',
        brief: `<ol><li>Đánh giá doanh nghiệp của bạn theo bốn độ tương thích. Độ tương thích nào yếu nhất, bằng chứng là gì?</li><li>Vẽ các vòng lặp tăng trưởng hiện có. Đánh dấu mắt xích yếu nhất của mỗi vòng.</li><li>Đề xuất một North Star Metric và 4 chỉ số đầu vào. Giải thích theo các tiêu chí của Amplitude.</li><li>Dựng mô hình tăng trưởng 12 tháng trên bảng tính và chạy phân tích độ nhạy cho 5 đầu vào.</li></ol>`,
        deliverable: 'Bản phân tích ba trang và bảng tính mô hình tăng trưởng. Đây là đầu vào của dự án tốt nghiệp.'
      },
      quiz: [
        { q: 'Theo Balfour, sản phẩm có doanh thu mỗi khách thấp cần loại kênh nào?', a: ['Đội bán hàng trực tiếp', 'Kênh có CAC thấp như lan truyền, nội dung, SEO', 'Quảng cáo B2B đắt tiền', 'Sự kiện ngoại tuyến'], correct: 1, why: 'Đây là độ tương thích Channel–Model: kênh phải khớp mức doanh thu mỗi khách (ARPU). Vùng giữa phổ, quá đắt cho kênh rẻ mà quá rẻ để nuôi đội bán hàng, được Balfour gọi là ARPU-CAC danger zone.' },
        { q: 'Điểm khác biệt cốt lõi giữa vòng lặp tăng trưởng và phễu?', a: ['Vòng lặp có nhiều bước hơn', 'Trong vòng lặp, đầu ra của một chu kỳ trở thành đầu vào của chu kỳ sau', 'Phễu chỉ dùng cho B2B', 'Vòng lặp không đo được'], correct: 1, why: 'Tính tái đầu tư tạo ra hiệu ứng cộng dồn; ngay cả khi hệ số k nhỏ hơn 1, vòng lặp vẫn nhân thêm khách từ mọi kênh khác.' },
        { q: 'Vì sao doanh thu không phải North Star Metric tốt?', a: ['Vì khó đo', 'Vì nó là chỉ số trễ, không thể hiện giá trị khách hàng nhận được và không định hướng hành động', 'Vì thay đổi quá chậm', 'Vì bộ phận tài chính đã theo dõi'], correct: 1, why: 'Theo Amplitude, doanh thu cho biết điều đã xảy ra chứ không dự báo tương lai. North Star phải nắm bắt giá trị cốt lõi cho khách hàng, từ đó dẫn tới doanh thu.' },
        { q: 'Với sản phẩm dùng lặp lại như phần mềm thuê bao, vì sao giữ chân thường có đòn bẩy lớn hơn thu hút?', a: ['Vì rẻ hơn', 'Vì cải thiện giữ chân cộng dồn qua mọi cohort theo thời gian', 'Vì dễ đo hơn', 'Vì không cần ngân sách'], correct: 1, why: 'Mỗi cohort giữ lại nhiều hơn, và hiệu ứng tích luỹ qua từng tháng. Với ngành khách mua thưa (như khách sạn ở điểm đến xa), điều này có thể không đúng; mô hình của chính bạn mới trả lời được.' },
        { q: 'Phép thử 40% của Sean Ellis đo điều gì?', a: ['Tỷ lệ chuyển đổi tối thiểu', 'Tỷ lệ người dùng sẽ rất thất vọng nếu không còn sản phẩm, dấu hiệu của product-market fit', 'Biên lợi nhuận gộp', 'Tỷ lệ ngân sách cho thử nghiệm'], correct: 1, why: 'Ellis quan sát rằng dưới mốc 40%, công ty thường chật vật để tăng trưởng. Đây là mốc kinh nghiệm, không phải định luật.' }
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
          body: `<p>Tại bất kỳ thời điểm nào, chỉ một phần nhỏ khách hàng tiềm năng đang có nhu cầu mua. Giáo sư John Dawes (Viện Ehrenberg-Bass) đưa ra quy tắc <strong>95-5</strong> trong bối cảnh B2B (LinkedIn B2B Institute đưa vào bộ tài liệu <em>How B2B Brands Grow</em>): tại một thời điểm, chỉ khoảng 5% người mua B2B đang ở trong thị trường (in-market), khoảng 95% còn lại chưa có nhu cầu mua lúc này. Đây là mô hình tư duy; tỷ lệ cụ thể thay đổi theo ngành, nên bạn cần tự ước lượng cho doanh nghiệp mình (tần suất mua càng thưa, cửa sổ quyết định càng ngắn thì tỷ lệ in-market càng nhỏ).</p>
<ul><li><strong>Bắt nhu cầu</strong> nhắm tới phần nhỏ đang mua. Hiệu suất đo được cao, nhưng bạn cạnh tranh trực tiếp về giá với mọi đối thủ, và quy mô bị giới hạn.</li><li><strong>Tạo nhu cầu</strong> tiếp cận phần lớn chưa mua, để khi họ có nhu cầu thì thương hiệu của bạn được nghĩ tới đầu tiên. Kết quả đến chậm và khó quy về từng quảng cáo.</li></ul>
<p>Performance marketing chủ yếu bắt nhu cầu. Nó hiệu quả đến đâu phụ thuộc vào lượng nhu cầu mà thương hiệu đã tạo ra trước đó. Dấu hiệu của việc bắt nhu cầu quá mức mà không tạo nhu cầu:</p>
<ul><li>CAC tăng đều dù tối ưu liên tục.</li><li>Tỷ trọng doanh thu từ truy vấn thương hiệu và khách cũ tăng, khách mới giảm.</li><li>Phải khuyến mãi sâu hơn để giữ doanh số.</li><li>Lượng tìm kiếm tên thương hiệu đi ngang hoặc giảm.</li></ul>
<p>Đây là dấu hiệu, không phải bằng chứng nhân quả: CPC tăng có thể do đối thủ mới vào đấu giá, giảm giá sâu có thể do cả thị trường yếu. Hãy so với nhóm đối thủ (share of search) và đo incrementality (Level 5) trước khi kết luận.</p>`,
          res: ['linkedin-b2b-5principles', 'sharp-hbg']
        },
        {
          title: 'Bằng chứng về hiệu quả dài hạn', min: 50,
          body: `<ul><li><strong>Binet và Field, IPA (Anh):</strong> các chiến dịch thiên về xây thương hiệu tạo hiệu quả kinh doanh dài hạn (thị phần, lợi nhuận, khả năng định giá) lớn hơn. Chiến dịch thiên về kích hoạt tạo hiệu quả ngắn hạn mạnh nhưng không tích luỹ. Báo cáo <em>Effectiveness in Context</em> (trình bày năm 2018) cho thấy quy tắc thay đổi theo ngành, mô hình kinh doanh, giai đoạn và quy mô thương hiệu. Nguyên tắc dẫn đường của Binet và Field: dồn thêm vào <strong>việc khó hơn</strong>.</li><li><strong>Profit Ability 2, Thinkbox (Anh, công bố 30/5/2024):</strong> 141 thương hiệu, 14 ngành, chiến dịch 2021 đến 2023. Lợi nhuận ngắn hạn (tới 13 tuần) trung bình 1,87 bảng mỗi bảng chi; tính cả hiệu ứng tới 24 tháng là 4,11 bảng. Nghĩa là trong mẫu này, khoảng 54,5% lợi nhuận đến sau 13 tuần đầu: đo chỉ nhìn ngắn hạn bỏ sót hơn một nửa. Lưu ý: dữ liệu Anh, và nghiên cứu do tổ chức của ngành TV chủ trì.</li><li><strong>Ehrenberg-Bass:</strong> nghiên cứu 57 trường hợp thương hiệu hàng tiêu dùng ở Úc ngừng quảng cáo đại chúng từ một năm trở lên (<em>Journal of Advertising Research</em>): doanh số trung bình giảm 16% sau một năm và 25% sau hai năm; thương hiệu nhỏ thường giảm mạnh hơn.</li><li><strong>Nghiên cứu đo lường ở Level 5:</strong> Gordon và cộng sự cho thấy phương pháp quan sát thường không tái tạo được kết quả thử nghiệm và hay cho mức tác động cao hơn; Lewis và Rao cho thấy lợi nhuận quảng cáo rất khó đo chính xác. Hiệu quả của kích hoạt vì thế dễ bị đo cao hơn thực tế.</li></ul>
<p>Hai điều này cộng lại tạo thành một thiên lệch hệ thống: <strong>ngắn hạn bị đánh giá quá cao, dài hạn bị đánh giá quá thấp</strong>. Công ty chỉ nhìn bảng điều khiển của nền tảng sẽ dần chuyển ngân sách về cuối phễu, cho tới khi cạn nhu cầu.</p>
<div class="callout"><b>Giới hạn của bằng chứng:</b> dữ liệu IPA đến từ các chiến dịch tự đề cử dự giải, chủ yếu ở Anh. Hãy coi các tỷ lệ như 60/40 là điểm tham chiếu, không phải quy luật, và kiểm chứng bằng dữ liệu của chính bạn. Quy tắc ESOV (excess share of voice, phần chênh giữa share of voice và thị phần) hay được trích là 10% ESOV mang lại khoảng 0,5% tăng thị phần; đây là quy tắc kinh nghiệm, nguồn gốc và khung thời gian chưa kiểm chứng được, nên đừng trích như con số chính xác.</div>`,
          res: ['ipa-effectiveness-context', 'thinkbox-profit-ability', 'binet-field-long-short']
        },
        {
          title: 'Đo sức khoẻ thương hiệu', min: 40,
          body: `<table><tr><th>Chỉ số</th><th>Nguồn</th><th>Ý nghĩa</th></tr>
<tr><td>Lượng tìm kiếm tên thương hiệu</td><td>Search Console, Google Trends, Google Ads</td><td>Nhu cầu trực tiếp với thương hiệu; miễn phí và cập nhật liên tục</td></tr>
<tr><td>Share of search</td><td>Lượng tìm kiếm thương hiệu của bạn ÷ tổng của cả nhóm đối thủ</td><td>Les Binet trình bày tại EffWorks Global của IPA (2020): ở ba ngành ô tô, năng lượng, điện thoại di động, chỉ số này tương quan với thị phần và đi trước thị phần. Không phải viên đạn bạc: giá và tin xấu cũng làm lệch nó</td></tr>
<tr><td>Lưu lượng trực tiếp</td><td>GA4</td><td>Người đã biết và chủ động tìm đến</td></tr>
<tr><td>Nhận biết, cân nhắc</td><td>Khảo sát theo dõi thương hiệu định kỳ</td><td>Thước đo chuẩn, tốn chi phí hơn</td></tr>
<tr><td>Brand lift</td><td>Nghiên cứu trên nền tảng (Google, Meta, TikTok)</td><td>Tác động của một chiến dịch lên nhận biết, ghi nhớ, ý định</td></tr>
<tr><td>Tỷ lệ khách mới</td><td>CRM, hệ thống đơn hàng</td><td>Thương hiệu có đang mở rộng tệp khách không</td></tr></table>
<p>Khi dùng Google Trends, đưa mọi thương hiệu vào cùng một lần so sánh (để chung một thang), gộp các cách viết tên, tách riêng từng quốc gia, và lấy trung bình theo quý để giảm nhiễu. Trends chỉ cho tỷ lệ tương đối, không cho số lượt tìm tuyệt đối.</p>
<p>Jenni Romaniuk (Ehrenberg-Bass) nhấn mạnh vai trò của <strong>tài sản thương hiệu đặc trưng</strong> (distinctive brand assets) như màu sắc, logo, nhân vật, âm thanh. Một tài sản cần hai điều: <strong>độc nhất</strong> (chỉ gợi tới thương hiệu bạn) và <strong>nổi tiếng</strong> (ai thấy cũng nghĩ tới bạn); trong đó độc nhất quan trọng hơn. Quảng cáo hiệu suất không gắn tài sản đặc trưng khó tích luỹ được gì cho thương hiệu, dù có thể bán được hàng trong ngắn hạn.</p>`,
          res: ['ehrenberg-bass', 'google-trends']
        },
        {
          title: 'Nguyên tắc phân bổ ngân sách', min: 55,
          body: `<p>Phân bổ diễn ra ở ba cấp:</p>
<ol><li><strong>Tổng ngân sách marketing.</strong> Xuất phát từ mục tiêu tăng trưởng và mô hình tăng trưởng ở module 7.1. Cách lấy phần trăm doanh thu năm trước chỉ nên dùng để kiểm tra chéo.</li><li><strong>Giữa xây thương hiệu và kích hoạt.</strong> Điểm tham chiếu từ nghiên cứu của Binet và Field cho IPA là khoảng 60/40, điều chỉnh theo bối cảnh. Thương hiệu bán trực tuyến thực ra nên nghiêng về thương hiệu nhiều hơn (khoảng 75:25), không phải ít hơn, vì kích hoạt trực tuyến đã dễ. Nhận định "thương hiệu mới hoặc nhỏ cần nhiều kích hoạt hơn lúc đầu" chưa kiểm chứng được trong các nguồn đã đối chiếu; còn nghiên cứu ngừng quảng cáo của Ehrenberg-Bass cho thấy chính thương hiệu nhỏ mất nhiều nhất khi im lặng. Nếu đang ở xa điểm tham chiếu, hãy dịch dần theo quý, có điều kiện dừng, thay vì nhảy một bước.</li><li><strong>Giữa các kênh.</strong> Theo ROAS biên: chuyển tiền từ kênh có lợi suất biên thấp sang kênh có lợi suất biên cao (module 3.6), dùng đường cong phản ứng từ MMM và hệ số tăng thêm từ thử nghiệm (Level 5).</li></ol>
<h4>Dành ngân sách cho việc học</h4>
<p>Một quy tắc thực hành phổ biến là 70/20/10: khoảng 70% cho kênh và cách làm đã chứng minh, 20% cho mở rộng những thứ đang có triển vọng, 10% cho thử nghiệm mới. Nguồn gốc của quy tắc này chưa kiểm chứng được, nên hãy coi nó là quy ước, không phải kết quả nghiên cứu. Phần 10% là cách có chủ đích để tìm ra kênh và sáng tạo của năm sau. Để ý: 70/20/10 là trục <em>độ chắc chắn</em>, còn thương hiệu và kích hoạt là trục <em>vai trò</em>; một khoản thương hiệu có thể nằm trong phần 10% thử nghiệm.</p>
<h4>Quy trình hằng quý</h4>
<ul><li>Cập nhật MMM hoặc đường cong phản ứng.</li><li>Xem lại kết quả thử nghiệm incrementality.</li><li>Đọc chỉ số thương hiệu: share of search, lượng tìm tên thương hiệu.</li><li>Đề xuất chuyển dịch ngân sách, kèm dự báo tác động và điều kiện dừng.</li><li>Giữ một phần ngân sách linh hoạt để phản ứng với cơ hội.</li></ul>`,
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
        'Share of search là thước đo sức khoẻ thương hiệu rẻ và sớm, nhưng chỉ là chỉ báo đi trước có sai số, không phải thị phần.',
        'Phân bổ theo lợi suất biên, dịch dần có điều kiện dừng, và dành phần cố định cho thử nghiệm.'
      ],
      assignment: {
        title: 'Đề xuất phân bổ ngân sách',
        brief: `<ol><li>Tính share of search của thương hiệu bạn so với 4 đối thủ trong 24 tháng bằng Google Trends. Nhận xét xu hướng.</li><li>Phân loại toàn bộ chi tiêu marketing hiện tại vào bốn tầng và vào hai nhóm thương hiệu, kích hoạt.</li><li>Kiểm tra bốn dấu hiệu bắt nhu cầu quá mức trên dữ liệu của bạn.</li><li>Đề xuất phân bổ cho 12 tháng tới theo ba cấp, kèm lập luận và rủi ro.</li><li>Viết phần "điều chúng ta chưa biết" và kế hoạch thử nghiệm để trả lời.</li></ol>`,
        deliverable: 'Đề xuất phân bổ ngân sách ba trang kèm biểu đồ share of search.'
      },
      quiz: [
        { q: 'Quy tắc 95-5 nói gì?', a: ['95% ngân sách nên cho hiệu suất', 'Tại một thời điểm, phần lớn người mua tiềm năng không ở trong thị trường', '95% quảng cáo không hiệu quả', '5% khách tạo 95% doanh thu'], correct: 1, why: 'Quy tắc của John Dawes (Ehrenberg-Bass) cho B2B: tại một thời điểm chỉ khoảng 5% người mua đang ở trong thị trường. Tỷ lệ cụ thể thay đổi theo ngành.' },
        { q: 'Dấu hiệu nào cho thấy doanh nghiệp bắt nhu cầu quá mức mà không tạo nhu cầu?', a: ['CAC giảm đều', 'Tỷ lệ khách mới tăng', 'CAC tăng đều, tỷ trọng doanh thu từ truy vấn thương hiệu và khách cũ tăng', 'Lượng tìm kiếm thương hiệu tăng mạnh'], correct: 2, why: 'Đây là các dấu hiệu nguồn nhu cầu mới đang cạn. Chúng chưa phải bằng chứng nhân quả, nên cần so với đối thủ và đo incrementality.' },
        { q: 'Share of search được tính thế nào?', a: ['Số từ khoá xếp hạng ÷ tổng từ khoá', 'Lượng tìm kiếm tên thương hiệu của bạn ÷ tổng lượng tìm kiếm tên các thương hiệu trong nhóm', 'Ngân sách tìm kiếm ÷ tổng ngân sách', 'Lượt nhấp ÷ lượt hiển thị'], correct: 1, why: 'Đây là phần của thương hiệu trong tổng nhu cầu tìm kiếm thương hiệu của ngành.' },
        { q: 'Trong quy tắc 70/20/10, phần 10% dành cho gì?', a: ['Dự phòng rủi ro', 'Thử nghiệm kênh và cách làm mới', 'Chi phí agency', 'Remarketing'], correct: 1, why: 'Phần này tài trợ cho việc tìm nguồn tăng trưởng tương lai. 70/20/10 là quy ước thực hành, không phải kết quả nghiên cứu.' },
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
<p>AI giúp làm nháp và biến thể nhanh hơn, nên vài việc trước phải thuê ngoài vì khối lượng giờ có thể đưa về trong nhà. Nhưng phần duyệt và chịu trách nhiệm không giảm (chính sách AI, module 6.6). Quyền sở hữu tài khoản và dữ liệu thì không bao giờ thuê ngoài.</p>`,
          res: ['minimba-marketing', 'lennys-newsletter']
        },
        {
          title: 'Nói ngôn ngữ của ban lãnh đạo', min: 50,
          body: `<p>Giám đốc tài chính không quan tâm tới CTR. Họ quan tâm tới tăng trưởng, lợi nhuận, dòng tiền và rủi ro.</p>
<table><tr><th>Thay vì nói</th><th>Hãy nói</th></tr>
<tr><td>ROAS tăng từ 3,2 lên 3,8 (số liệu minh hoạ)</td><td>Lợi nhuận đóng góp sau marketing tăng 18%, thời gian hoàn vốn giảm từ 5 xuống 4 tháng</td></tr>
<tr><td>Cần thêm ngân sách cho Meta</td><td>Ở mức chi hiện tại, lợi suất biên của kênh này là X. Thêm Y sẽ mang về khoảng Z lợi nhuận, với khoảng tin cậy như sau</td></tr>
<tr><td>Chiến dịch thương hiệu đạt 5 triệu lượt xem</td><td>Share of search tăng 2 điểm, và mô hình cho thấy chi phí thu hút khách mới sẽ giảm trong hai quý tới</td></tr></table>
<h4>Cấu trúc một bản trình bày ngân sách</h4>
<ol><li><strong>Mục tiêu kinh doanh</strong> mà kế hoạch phục vụ.</li><li><strong>Mô hình:</strong> đầu vào nào dẫn tới kết quả nào.</li><li><strong>Bằng chứng:</strong> dữ liệu lịch sử, thử nghiệm, chuẩn ngành.</li><li><strong>Kịch bản:</strong> thận trọng, cơ sở, lạc quan.</li><li><strong>Rủi ro và giả định</strong> nêu rõ.</li><li><strong>Cột mốc kiểm tra:</strong> khi nào xem lại, tiêu chí điều chỉnh.</li></ol>
<p>Trung thực về độ bất định xây niềm tin. CFO không cần bạn chắc chắn; họ cần biết bạn đã nghĩ tới trường hợp mình sai. Báo cáo miễn phí <em>Making Effectiveness Work</em> của IPA hướng dẫn cách phối hợp MMM, thử nghiệm và attribution, đề xuất cách tiếp cận đặt văn hoá lên trước với "learning agenda" (danh sách câu hỏi cần trả lời bằng bằng chứng), và quy trình MESI (Model, Experiment, Simulate, Implement).</p>`,
          res: ['ipa-making-effectiveness-work', 'a16z-metrics']
        },
        {
          title: 'Văn hoá thử nghiệm và học hỏi', min: 40,
          body: `<p>Aleksander Fabijan và cộng sự (hội nghị ICSE 2017; đồng tác giả Pavel Dmitriev khi đó làm ở Microsoft) mô tả "Experimentation Evolution Model" với bốn mức trưởng thành về thử nghiệm: bò, đi, chạy, bay (crawl, walk, run, fly), theo ba chiều kỹ thuật, tổ chức và kinh doanh. Lưu ý: mô hình này của nhóm Fabijan, không phải của Kohavi; sách <em>Trustworthy Online Controlled Experiments</em> của Kohavi, Tang và Xu (2020) là tài liệu nền nên đọc song song. Trong thực hành, để tiến từ mức này sang mức kia, bạn cần ba thứ:</p>
<ul><li><strong>Hạ tầng:</strong> công cụ để chạy thử nghiệm dễ dàng và đáng tin.</li><li><strong>Quy trình:</strong> mẫu thiết kế thử nghiệm, rà soát trước khi chạy, quy tắc quyết định viết trước.</li><li><strong>Văn hoá:</strong> lãnh đạo chấp nhận bị dữ liệu bác bỏ, thất bại có bài học được ghi nhận như thành công, không ai bị phạt vì thử nghiệm thua.</li></ul>
<h4>Kho kiến thức</h4>
<p>Mỗi thử nghiệm, chiến dịch lớn và phân tích quan trọng cần một bản ghi ngắn: bối cảnh, giả thuyết, điều đã làm, kết quả kèm độ tin cậy, bài học, bước tiếp theo. Đặt ở nơi mọi người tìm được.</p>
<p>Ghi cả kết quả "không có ý nghĩa thống kê", kèm power thực. Tổ chức không có kho kiến thức sẽ thử lại cùng một ý tưởng mỗi khi đổi nhân sự. Khi kho đủ sạch, trợ lý AI có thể tra cứu và tóm tắt lịch sử cho người mới; nhưng AI chỉ tốt bằng bản ghi: bản ghi thiếu khoảng tin cậy thì bản tóm tắt cũng sẽ tự tin quá mức.</p>
<h4>Nhịp họp gợi ý</h4>
<ul><li><strong>Hằng tuần:</strong> kết quả, bài học, kế hoạch thử nghiệm.</li><li><strong>Hằng tháng:</strong> hiệu quả kinh doanh, ngân sách.</li><li><strong>Hằng quý:</strong> chiến lược, phân bổ, đo lường, năng lực đội.</li></ul>`,
          res: ['kohavi-book', 'hacking-growth']
        },
        {
          title: 'Làm việc với agency và nhà cung cấp', min: 40,
          body: `<h4>Nguyên tắc không thương lượng</h4>
<ul><li><strong>Bạn sở hữu tài khoản và dữ liệu.</strong> Tài khoản quảng cáo, analytics, tag manager phải thuộc về doanh nghiệp, agency được cấp quyền truy cập.</li><li><strong>Minh bạch chi phí:</strong> tách rõ chi phí media và phí dịch vụ.</li><li><strong>Quyền truy cập đầy đủ</strong> vào báo cáo gốc của nền tảng, không chỉ báo cáo đã qua tay agency.</li></ul>
<h4>Thiết kế động lực</h4>
<p>Phí tính theo phần trăm chi tiêu tạo động lực tăng chi tiêu. Phí theo ROAS nền tảng tạo động lực dồn về kênh cuối phễu và remarketing. Phí cố định (retainer) tạo động lực làm ít giờ hơn cho cùng mức phí. Retainer thấp cộng thưởng theo kết quả kinh doanh thật thường gắn động lực tốt hơn, nhưng kết quả kinh doanh còn chịu tác động của giá, website, mùa vụ mà agency không kiểm soát. Công bằng hơn là thưởng theo kết quả thử nghiệm tăng thêm đã thống nhất thiết kế từ trước, hoặc theo chỉ số agency kiểm soát phần lớn mà vẫn nối với kinh doanh, đối chiếu với sổ sách.</p>
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
<table><tr><th>Chương trình</th><th>Hình thức</th><th>Phù hợp khi</th></tr>
<tr><td>MiniMBA in Marketing (Mark Ritson)</td><td>Trực tuyến, 10 module học theo yêu cầu</td><td>Muốn củng cố nền tảng chiến lược marketing</td></tr>
<tr><td>Chứng chỉ CIM (Anh)</td><td>Học bán thời gian, nhiều cấp từ Level 3 tới Level 7</td><td>Cần bằng cấp nghề nghiệp có thang bậc rõ</td></tr>
<tr><td>DMI Pro (Digital Marketing Institute)</td><td>Trực tuyến; Professional Diploma được Scottish Qualifications Authority xếp tín chỉ</td><td>Cần chứng chỉ digital marketing tổng quát có kiểm định</td></tr>
<tr><td>Digital Marketing Strategy and AI (HBS Online)</td><td>Trực tuyến, giảng viên Sunil Gupta</td><td>Muốn học theo phương pháp tình huống của Harvard</td></tr>
<tr><td>NUS (qua đối tác Emeritus), SMU Academy</td><td>Singapore, có khoá trực tuyến</td><td>Muốn góc nhìn Đông Nam Á</td></tr>
<tr><td>Reforge, CXL</td><td>Trực tuyến</td><td>Muốn đào sâu tăng trưởng sản phẩm hoặc tối ưu chuyển đổi</td></tr></table>
<p>Học phí, thời lượng và lịch khai giảng thay đổi thường xuyên: hãy kiểm tra trang chính thức trước khi đăng ký.</p>
<p>Không chương trình nào thay được việc tự làm. Bằng chứng năng lực thuyết phục nhất là danh mục các dự án bạn đã thực hiện, có số liệu và bài học.</p>`,
          res: ['minimba-marketing', 'cim-quals', 'hbs-dms-ai', 'nus-exec-dm']
        }
      ],
      takeaways: [
        'Giữ chiến lược, dữ liệu và quyền sở hữu tài khoản trong nhà.',
        'Trình bày bằng lợi nhuận, hoàn vốn và rủi ro, không bằng chỉ số kênh.',
        'Kho kiến thức ngăn tổ chức học lại cùng một bài học.',
        'Cách tính phí định hình động lực của agency; hãy chấm agency bằng số liệu sổ sách, không bằng báo cáo của chính họ.'
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
        { q: 'Cách trình bày nào phù hợp nhất với giám đốc tài chính?', a: ['CTR tăng 0,4 điểm', 'Lợi nhuận đóng góp sau marketing tăng 18%, thời gian hoàn vốn giảm một tháng', 'Đạt 5 triệu lượt hiển thị', 'Điểm chất lượng tăng lên 8'], correct: 1, why: 'Lợi nhuận, hoàn vốn, dòng tiền và rủi ro là ngôn ngữ của tài chính.' },
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
<p>Để ý: chẩn đoán tốt thường cho thấy vấn đề không nằm ở chỗ "cần thêm ngân sách quảng cáo". Đối chiếu số liệu nền tảng với sổ sách trước khi dùng ROAS làm bằng chứng.</p>
<p><strong>Dùng lại:</strong> bài tập của các module 1.1, 1.3, 1.4, 2.1, 2.5, 4.5, 5.3, 5.4, 7.1.</p>`,
          res: []
        },
        {
          title: 'Bước 2: Chiến lược và mô hình tăng trưởng', min: 240,
          body: `<ul><li><strong>Mục tiêu 12 tháng:</strong> 1 mục tiêu kinh doanh, 2 đến 3 mục tiêu marketing SMART.</li><li><strong>Lựa chọn chiến lược:</strong> phân khúc ưu tiên, định vị, đề xuất giá trị. Nêu rõ điều bạn chọn <em>không</em> làm.</li><li><strong>North Star Metric</strong> và 3 đến 5 chỉ số đầu vào.</li><li><strong>Mô hình tăng trưởng</strong> trên bảng tính theo tháng: khách mới theo kênh, giữ chân, doanh thu, lợi nhuận đóng góp. Ba kịch bản.</li><li><strong>Phân tích độ nhạy:</strong> ba đòn bẩy lớn nhất.</li><li><strong>Giả định then chốt:</strong> liệt kê và xếp theo mức độ bất định.</li></ul>
<p>Tiêu chí chất lượng: một người đọc lạ có thể lần theo mô hình từ đầu vào tới mục tiêu và hiểu vì sao mục tiêu khả thi. Nếu lần ngược mà mục tiêu không khép được chỉ bằng đòn bẩy marketing, hãy nói thẳng khoảng trống và đề xuất ai sở hữu phần còn lại (ví dụ giá, công suất).</p>
<p><strong>Dùng lại:</strong> bài tập module 1.1, 1.2, 1.3, 3.6, 4.5, 7.1.</p>`,
          res: []
        },
        {
          title: 'Bước 3: Kế hoạch kênh, sáng tạo và ngân sách', min: 300,
          body: `<ul><li><strong>Kế hoạch toàn phễu:</strong> vai trò của từng kênh ở từng tầng, kèm chỉ số riêng.</li><li><strong>Kế hoạch owned:</strong> SEO và nội dung (cụm chủ đề, lịch biên tập), email và CRM (chuỗi vòng đời), cải tiến trang đích.</li><li><strong>Kế hoạch paid:</strong> cấu trúc tài khoản, chiến lược giá thầu, tín hiệu chuyển đổi cho từng nền tảng. Nếu có ứng dụng: kế hoạch UA và ASO.</li><li><strong>Chiến lược sáng tạo:</strong> ma trận góc tiếp cận, 6 khái niệm ưu tiên, nhịp sản xuất và thử nghiệm.</li><li><strong>Ngân sách:</strong> phân bổ theo ba cấp (tổng, thương hiệu và kích hoạt, kênh), theo tháng, kèm lập luận về lợi suất biên. Dành riêng phần thử nghiệm.</li><li><strong>Lộ trình:</strong> việc gì làm trong 30, 90, 180, 365 ngày. Ai chịu trách nhiệm.</li></ul>
<p><strong>Dùng lại:</strong> bài tập module 2.1 đến 2.5, toàn bộ Level 3 (đặc biệt 3.5 và 3.6), module 4.3, 4.4, 7.2.</p>`,
          res: []
        },
        {
          title: 'Bước 4: Khung đo lường và quy trình AI', min: 240,
          body: `<h4>Khung đo lường</h4>
<ul><li><strong>Kế hoạch thu thập dữ liệu:</strong> sự kiện, tag, consent, kênh máy chủ.</li><li><strong>Bảng điều khiển:</strong> phác thảo ba cấp (lãnh đạo, trưởng nhóm, chuyên viên).</li><li><strong>Tam giác đo lường:</strong> attribution dùng cho gì, thử nghiệm incrementality nào sẽ chạy và khi nào, có làm MMM không. Doanh nghiệp nhỏ thường chưa đủ dữ liệu cho MMM; nếu không làm, ghi rõ lý do và điều kiện xem lại.</li><li><strong>Lịch thử nghiệm 12 tháng:</strong> ít nhất 6 thử nghiệm có giả thuyết và thiết kế sơ bộ, mỗi thử nghiệm nối với một giả định then chốt ở bước 2. Ghi trước sẽ làm gì khi kết quả "chưa đủ bằng chứng".</li></ul>
<h4>Kế hoạch AI</h4>
<ul><li>3 đến 5 quy trình có AI sẽ triển khai, xếp theo giá trị và rủi ro.</li><li>Mức sẵn sàng cho chiến dịch AI trên nền tảng quảng cáo và việc cần làm.</li><li>Kế hoạch hiện diện trên tìm kiếm AI.</li><li>Chính sách AI nội bộ.</li></ul>
<h4>Rủi ro</h4>
<p>Bảng rủi ro gồm: mô tả, khả năng xảy ra, tác động, dấu hiệu cảnh báo sớm, phương án ứng phó. Tối thiểu phải có: phụ thuộc kênh, thay đổi quyền riêng tư hoặc chính sách nền tảng, CAC tăng, sai lệch đo lường.</p>
<p><strong>Dùng lại:</strong> bài tập module 5.1, 5.3 đến 5.6, toàn bộ Level 6 (đặc biệt 6.6 chính sách AI).</p>`,
          res: []
        },
        {
          title: 'Bước 5: Trình bày và phản biện', min: 180,
          body: `<h4>Sản phẩm cuối</h4>
<ol><li><strong>Tóm tắt điều hành một trang:</strong> tình hình, mục tiêu, ba lựa chọn chiến lược, ngân sách, kết quả kỳ vọng, rủi ro chính.</li><li><strong>Tài liệu kế hoạch</strong> 15 đến 25 trang.</li><li><strong>Bảng tính</strong> mô hình tăng trưởng và ngân sách.</li><li><strong>Bài trình bày</strong> 15 phút.</li></ol>
<h4>Tự chấm theo thang điểm</h4>
<p>Chấm mỗi tiêu chí từ 1 tới 5, nhân trọng số, rồi quy ra phần trăm. Đừng nâng điểm cho đủ ngưỡng.</p>
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
