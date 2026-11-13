COURSE.levels.push({
  id: 'L6', num: 6, color: '#6f47d9',
  title: 'AI trong Marketing',
  short: 'AI',
  stage: 'Nâng cao',
  tagline: 'Hiểu AI tạo sinh, làm việc hiệu quả với nó, và ứng dụng vào quảng cáo, sáng tạo, tìm kiếm, tự động hoá.',
  intro: 'AI đã ở trong marketing từ lâu dưới dạng giá thầu tự động và hệ thống đề xuất. AI tạo sinh mở thêm một lớp mới: nội dung, phân tích, tìm kiếm và tác tử tự động. Level 6 dạy bạn hiểu công nghệ ở mức đủ để ra quyết định, dùng nó có kỷ luật và nhận biết giới hạn cũng như rủi ro pháp lý.',
  prereq: 'Hoàn thành Level 3. Nên học sau Level 5',
  milestone: 'Chứng chỉ AI Fluency và một quy trình làm việc có AI được tài liệu hoá',
  outcomes: [
    'Giải thích cách mô hình ngôn ngữ lớn hoạt động, điểm mạnh và giới hạn của chúng.',
    'Viết prompt có cấu trúc và xây quy trình làm việc có kiểm soát chất lượng.',
    'Vận hành các chiến dịch do AI điều khiển với đầu vào và rào chắn phù hợp.',
    'Dùng AI trong sản xuất sáng tạo mà vẫn tuân thủ bản quyền và quy định gắn nhãn.',
    'Tối ưu khả năng hiển thị thương hiệu trong các công cụ tìm kiếm bằng AI.',
    'Thiết kế tự động hoá và tác tử AI an toàn, kèm chính sách quản trị nội bộ.'
  ],
  modules: [
    {
      id: 'm6-1', hours: 6,
      title: 'Nền tảng AI và AI tạo sinh cho marketer',
      summary: 'Phân biệt các loại AI, hiểu cách mô hình ngôn ngữ lớn vận hành, bằng chứng về năng suất và khung năng lực AI Fluency.',
      objectives: [
        'Phân biệt AI dự đoán với AI tạo sinh và nêu ví dụ trong marketing.',
        'Giải thích token, cửa sổ ngữ cảnh, ảo giác và mốc kiến thức.',
        'Tóm tắt bằng chứng nghiên cứu về tác động của AI tạo sinh tới năng suất.',
        'Áp dụng khung 4D của AI Fluency.',
        'Chọn trường hợp sử dụng AI theo giá trị, tính khả thi và rủi ro.'
      ],
      lessons: [
        {
          title: 'AI dự đoán và AI tạo sinh', min: 40,
          body: `<table><tr><th></th><th>AI dự đoán (học máy truyền thống)</th><th>AI tạo sinh</th></tr>
<tr><td>Làm gì</td><td>Dự đoán một con số hoặc một nhãn từ dữ liệu</td><td>Tạo nội dung mới: văn bản, ảnh, video, âm thanh, mã</td></tr>
<tr><td>Trong marketing</td><td>Giá thầu tự động, dự đoán xác suất nhấp và mua, đối tượng tương tự, đề xuất sản phẩm, dự báo LTV, chấm điểm lead</td><td>Viết và biến thể nội dung, tạo hình ảnh quảng cáo, tóm tắt nghiên cứu, phân tích dữ liệu bằng ngôn ngữ tự nhiên, trợ lý hội thoại</td></tr>
<tr><td>Đã có từ</td><td>Hơn một thập kỷ trong các nền tảng quảng cáo</td><td>Phổ biến từ cuối năm 2022</td></tr></table>
<p>Hai loại này bổ trợ nhau. Một chiến dịch Performance Max dùng AI dự đoán để đặt giá thầu cho từng phiên đấu giá, và nếu bạn bật tính năng tương ứng, dùng AI tạo sinh để tạo thêm văn bản hoặc video từ thành phần bạn cung cấp. Câu hỏi kiểm soát vẫn là: đầu ra là con số so được với thực tế, hay là nội dung cần người đọc duyệt?</p>
<p>Huang và Rust (Journal of the Academy of Marketing Science, 2021) đề xuất nhìn AI theo ba tầng: <strong>cơ học</strong> (tự động hoá việc lặp lại), <strong>tư duy</strong> (xử lý dữ liệu để ra quyết định) và <strong>cảm xúc</strong> (tương tác, thấu hiểu con người). Các tác giả xét cả ba loại AI ở từng giai đoạn của marketing (nghiên cứu, chiến lược, hành động), tức một ma trận 3 × 3, chứ không gán mỗi loại cho một giai đoạn. Chính hai tác giả cũng nói chưa có AI cảm xúc thật sự; hiện nay chủ yếu là dùng AI tư duy để phân tích dữ liệu cảm xúc.</p>`,
          res: ['dlai-genai-everyone', 'huang-rust']
        },
        {
          title: 'Mô hình ngôn ngữ lớn hoạt động thế nào', min: 55,
          body: `<p>Mô hình ngôn ngữ lớn (LLM) được huấn luyện trên lượng văn bản khổng lồ để dự đoán phần tiếp theo của một chuỗi. Vài khái niệm cần nắm:</p>
<ul><li><strong>Token:</strong> đơn vị văn bản nhỏ nhất mô hình xử lý, có thể là một từ, một phần của từ hay một ký tự; số ký tự mỗi token tuỳ mô hình và ngôn ngữ. Chi phí API và giới hạn độ dài thường tính theo token.</li><li><strong>Cửa sổ ngữ cảnh:</strong> lượng thông tin mô hình "nhìn thấy" trong một lần làm việc, gồm chỉ dẫn, tài liệu bạn đưa vào và hội thoại. Thứ gì không nằm trong ngữ cảnh hoặc dữ liệu huấn luyện thì mô hình không biết. Kích thước cửa sổ khác nhau theo mô hình và thay đổi theo thời gian, nên đừng học thuộc một con số.</li><li><strong>Mốc kiến thức:</strong> dữ liệu huấn luyện dừng ở một thời điểm. Muốn thông tin mới hơn, mô hình cần công cụ tìm kiếm hoặc tài liệu bạn cung cấp.</li><li><strong>Ảo giác (hallucination):</strong> mô hình có thể tạo ra thông tin nghe hợp lý nhưng sai, nhất là con số, trích dẫn, tên riêng. Nguyên nhân là mô hình tạo văn bản theo xác suất, không tra cứu cơ sở dữ liệu sự thật.</li><li><strong>Đa phương thức:</strong> nhiều mô hình hiện đọc được ảnh, tệp, bảng tính, âm thanh.</li><li><strong>Công cụ:</strong> mô hình có thể gọi tìm kiếm web, chạy mã, truy vấn hệ thống khác. Đây là nền tảng của tác tử AI (module 6.6).</li></ul>
<p>Hệ quả thực hành: chất lượng đầu ra phụ thuộc vào ngữ cảnh bạn cung cấp, và mọi dữ kiện quan trọng phải được kiểm chứng.</p>`,
          res: ['dlai-genai-everyone', 'elements-of-ai', 'google-skills-genai']
        },
        {
          title: 'Bằng chứng về năng suất và "đường biên răng cưa"', min: 50,
          body: `<p>Ba nghiên cứu thực nghiệm được trích dẫn nhiều nhất:</p>
<ul><li><strong>Noy và Zhang (Science, 2023):</strong> 453 chuyên viên làm bài viết nghề nghiệp. Nhóm dùng ChatGPT giảm khoảng 40% thời gian và tăng khoảng 18% chất lượng.</li><li><strong>Brynjolfsson, Li và Raymond (Quarterly Journal of Economics, 2025):</strong> trợ lý AI cho nhân viên hỗ trợ khách hàng làm năng suất tăng trung bình khoảng 15% theo bản đăng trên QJE (bản NBER 2023 ghi 14%), tăng mạnh nhất ở người mới và người có kỹ năng thấp hơn.</li><li><strong>Dell'Acqua và cộng sự (Harvard Business School cùng BCG):</strong> 758 tư vấn viên. Theo bản working paper 2023, với các tác vụ nằm trong khả năng của AI, nhóm dùng AI hoàn thành nhiều hơn 12,2% số việc, nhanh hơn 25,1% và chất lượng cao hơn trên 40% (bản đăng trên <em>Organization Science</em> năm 2026 được HBS tóm tắt ở mức khoảng 32%). Với một tác vụ nằm ngoài khả năng của AI, nhóm dùng AI lại làm <em>kém hơn</em>: khả năng ra lời giải đúng thấp hơn 19 điểm phần trăm.</li></ul>
<p>Cả ba nghiên cứu dùng công cụ AI có từ trước năm 2024, và cùng thấy người yếu hơn hoặc ít kinh nghiệm hơn được lợi nhiều hơn. Khi trích số, ghi rõ bạn dùng bản nào.</p>
<p>Nhóm tác giả gọi ranh giới này là <strong>"jagged technological frontier"</strong>: đường biên năng lực của AI lởm chởm và khó đoán. Hai việc trông khó ngang nhau có thể nằm ở hai phía của đường biên.</p>
<h4>Bài học</h4>
<ul><li>Lợi ích lớn và có thật, đặc biệt với công việc viết, tóm tắt, lên ý tưởng.</li><li>Rủi ro lớn nhất là tin tưởng mù quáng ở vùng AI làm kém.</li><li>Phải tự thử để biết đường biên nằm ở đâu với công việc của chính bạn.</li></ul>`,
          res: ['jagged-frontier', 'noy-zhang', 'brynjolfsson-genai-work']
        },
        {
          title: 'Khung năng lực AI Fluency', min: 45,
          body: `<p>Khung AI Fluency do giáo sư Rick Dakan (Ringling College of Art and Design) và Joseph Feller (University College Cork) phát triển cùng Anthropic; khoá <em>AI Fluency: Framework &amp; Foundations</em> miễn phí trên Anthropic Academy, có chứng chỉ sau bài đánh giá. Khung tổ chức năng lực làm việc với AI thành bốn chữ D:</p>
<table><tr><th>Năng lực</th><th>Câu hỏi</th><th>Trong marketing</th></tr>
<tr><td><strong>Delegation</strong> (giao việc)</td><td>Mục tiêu là gì? Có nên dùng AI không, khi nào, phần nào giữ lại?</td><td>Giao tạo biến thể tiêu đề; giữ lại quyết định định vị</td></tr>
<tr><td><strong>Description</strong> (mô tả)</td><td>Tôi đã truyền đạt đủ mục tiêu, ngữ cảnh, tiêu chuẩn chưa?</td><td>Đưa persona, giọng thương hiệu, ví dụ mẫu vào prompt</td></tr>
<tr><td><strong>Discernment</strong> (thẩm định)</td><td>Đầu ra có đúng, hay, phù hợp không?</td><td>Kiểm tra dữ kiện, giọng văn, tuân thủ chính sách quảng cáo</td></tr>
<tr><td><strong>Diligence</strong> (trách nhiệm)</td><td>Tôi có chịu trách nhiệm và minh bạch về việc dùng AI không?</td><td>Bảo vệ dữ liệu khách hàng, gắn nhãn nội dung AI khi cần</td></tr></table>
<p>Khung này hữu ích vì nó không phụ thuộc công cụ. Công cụ thay đổi mỗi vài tháng; bốn năng lực này thì không.</p>`,
          res: ['anthropic-ai-fluency', 'mollick-prompts']
        },
        {
          title: 'Chọn trường hợp sử dụng', min: 35,
          body: `<p>Chấm mỗi ý tưởng ứng dụng theo ba tiêu chí:</p>
<ul><li><strong>Giá trị:</strong> tiết kiệm bao nhiêu thời gian, hoặc cải thiện kết quả bao nhiêu? Việc này lặp lại bao nhiêu lần?</li><li><strong>Khả thi:</strong> nằm trong hay ngoài đường biên năng lực? Có đủ ngữ cảnh và dữ liệu để đưa cho AI không?</li><li><strong>Rủi ro:</strong> sai thì hậu quả thế nào? Có dữ liệu cá nhân không? Có yêu cầu pháp lý không?</li></ul>
<table><tr><th>Nên bắt đầu</th><th>Cần thận trọng</th></tr>
<tr><td>Tóm tắt và phân loại đánh giá khách hàng</td><td>Nội dung y tế, tài chính, pháp lý</td></tr>
<tr><td>Biến thể tiêu đề và mô tả quảng cáo</td><td>Số liệu, trích dẫn, tuyên bố so sánh</td></tr>
<tr><td>Dàn ý và bản nháp đầu của bài viết</td><td>Trả lời khách hàng hoàn toàn tự động</td></tr>
<tr><td>Phân tích báo cáo cụm từ tìm kiếm</td><td>Quyết định ngân sách không có người duyệt</td></tr>
<tr><td>Viết và giải thích công thức, truy vấn SQL</td><td>Xử lý dữ liệu cá nhân bằng công cụ chưa được phê duyệt</td></tr></table>
<p>Báo cáo AI Index hằng năm của Stanford HAI là nguồn tham chiếu đáng tin về tiến bộ kỹ thuật, mức độ áp dụng trong doanh nghiệp và chính sách.</p>`,
          res: ['stanford-ai-index', 'hubspot-ai-marketing']
        }
      ],
      takeaways: [
        'AI dự đoán đã vận hành quảng cáo từ lâu; AI tạo sinh bổ sung khả năng tạo nội dung và phân tích.',
        'Đầu ra của LLM phụ thuộc ngữ cảnh và có thể sai một cách tự tin.',
        'Lợi ích năng suất có thật, nhưng đường biên năng lực lởm chởm.',
        'Bốn năng lực giao việc, mô tả, thẩm định, trách nhiệm bền hơn bất kỳ công cụ nào.'
      ],
      assignment: {
        title: 'Bản đồ ứng dụng AI cho công việc của bạn',
        brief: `<ol><li>Liệt kê 15 tác vụ bạn làm trong một tuần điển hình. Ước lượng thời gian mỗi tác vụ.</li><li>Chấm từng tác vụ theo giá trị, khả thi, rủi ro (1 đến 5). Chọn 3 tác vụ ưu tiên.</li><li>Với mỗi tác vụ, thử làm với AI và không có AI. Ghi thời gian, chất lượng và những chỗ AI sai.</li><li>Hoàn thành khoá AI Fluency: Framework and Foundations và Generative AI for Everyone.</li></ol>`,
        deliverable: 'Bảng chấm 15 tác vụ, nhật ký thử nghiệm 3 tác vụ và chứng chỉ.'
      },
      quiz: [
        { q: 'Giá thầu tự động trong Google Ads là ví dụ của loại AI nào?', a: ['AI tạo sinh', 'AI dự đoán', 'Tác tử AI', 'Không phải AI'], correct: 1, why: 'Giá thầu tự động dự đoán xác suất chuyển đổi cho từng lượt đấu giá.' },
        { q: 'Ảo giác của mô hình ngôn ngữ là gì?', a: ['Mô hình từ chối trả lời', 'Mô hình tạo thông tin nghe hợp lý nhưng sai', 'Mô hình trả lời chậm', 'Mô hình sao chép nguyên văn dữ liệu huấn luyện'], correct: 1, why: 'Mô hình tạo văn bản theo xác suất nên có thể bịa dữ kiện một cách trôi chảy.' },
        { q: 'Nghiên cứu "jagged frontier" tìm thấy gì với tác vụ nằm ngoài khả năng của AI?', a: ['Nhóm dùng AI vẫn tốt hơn', 'Nhóm dùng AI làm kém hơn nhóm không dùng', 'Không có khác biệt', 'AI từ chối làm'], correct: 1, why: 'Ở tác vụ ngoài đường biên, khả năng ra lời giải đúng của nhóm dùng AI thấp hơn 19 điểm phần trăm (bản working paper 2023).' },
        { q: 'Trong khung 4D, "Discernment" là gì?', a: ['Quyết định việc nào giao cho AI', 'Truyền đạt yêu cầu rõ ràng', 'Thẩm định chất lượng và độ đúng của đầu ra', 'Chịu trách nhiệm và minh bạch'], correct: 2, why: 'Discernment là năng lực đánh giá đầu ra của AI.' },
        { q: 'Ứng dụng nào nên bắt đầu trước?', a: ['Tự động trả lời khiếu nại pháp lý', 'Tóm tắt và phân loại 500 đánh giá của khách hàng', 'Tự động điều chỉnh ngân sách không cần duyệt', 'Viết tuyên bố về hiệu quả y tế của sản phẩm'], correct: 1, why: 'Giá trị cao, nằm trong khả năng của AI, rủi ro thấp và dễ kiểm tra.' }
      ],
      readings: ['peres-chatgpt', 'google-ai-essentials', 'smarterx-intro-ai']
    },
    {
      id: 'm6-2', hours: 7,
      title: 'Prompting và quy trình làm việc với AI',
      summary: 'Viết yêu cầu có cấu trúc, đưa ngữ cảnh thương hiệu vào, xây quy trình nhiều bước và kiểm soát chất lượng.',
      objectives: [
        'Viết prompt gồm ngữ cảnh, nhiệm vụ, ràng buộc, định dạng và ví dụ.',
        'Dùng ví dụ mẫu, chuỗi prompt và yêu cầu suy luận từng bước.',
        'Xây bộ ngữ cảnh thương hiệu dùng lại được.',
        'Thiết kế quy trình AI cho nghiên cứu, nội dung và phân tích.',
        'Lập tiêu chí đánh giá và thư viện prompt cho đội.'
      ],
      lessons: [
        {
          title: 'Cấu trúc của một yêu cầu tốt', min: 50,
          body: `<p>Hãy hình dung bạn giao việc cho một cộng sự rất giỏi nhưng chưa biết gì về công ty bạn. Họ cần:</p>
<ol><li><strong>Ngữ cảnh:</strong> bạn là ai, sản phẩm gì, cho ai, việc này phục vụ mục tiêu gì.</li><li><strong>Nhiệm vụ:</strong> cụ thể cần làm gì, mức độ sâu tới đâu.</li><li><strong>Ràng buộc:</strong> giọng văn, độ dài, điều không được nói, yêu cầu tuân thủ.</li><li><strong>Định dạng đầu ra:</strong> bảng, danh sách, số lượng phương án, cấu trúc.</li><li><strong>Ví dụ:</strong> một vài mẫu về kết quả bạn coi là tốt.</li></ol>
<div class="formula"><strong>Kém:</strong> "Viết quảng cáo Facebook cho khách sạn."<br><strong>Tốt:</strong> "Chúng tôi là khách sạn boutique 4 sao ở trung tâm Quận 1, khách chính là cặp đôi 28 đến 40 tuổi từ Úc và Singapore đi nghỉ 3 đến 4 đêm. Điểm khác biệt: hồ bơi tầng thượng nhìn ra thành phố, cách chợ Bến Thành 5 phút đi bộ. Hãy viết 5 phương án văn bản chính cho quảng cáo Meta, mỗi phương án theo một góc tiếp cận khác nhau (vị trí, lãng mạn, giá trị, đánh giá của khách, khẩn cấp theo mùa). Tiếng Anh, tối đa 125 ký tự, không dùng từ 'luxury', không hứa giá cụ thể. Trình bày dạng bảng: góc tiếp cận, văn bản, lý do."</div>
<p>Hướng dẫn của Anthropic, Google (khoá Google Prompting Essentials: task, context, references, evaluate, iterate) và OpenAI diễn đạt khác nhau nhưng hội tụ ở vài ý: nói rõ ngữ cảnh và nhiệm vụ, giải thích lý do của yêu cầu, đưa ví dụ, rồi đánh giá đầu ra và sửa tiếp. Prompt đầu tiên hiếm khi là prompt cuối.</p>`,
          res: ['anthropic-prompt-docs', 'google-prompting-essentials']
        },
        {
          title: 'Kỹ thuật nâng cao', min: 55,
          body: `<ul><li><strong>Ví dụ mẫu (few-shot):</strong> đưa vài cặp đầu vào và đầu ra mẫu (tài liệu của Anthropic khuyến nghị khoảng 3 đến 5). Mô hình bắt chước mẫu rất sát, nên ví dụ cần đa dạng để tránh đầu ra rập khuôn.</li><li><strong>Cho mô hình suy nghĩ:</strong> yêu cầu phân tích từng bước trước khi kết luận, đặc biệt với bài toán có nhiều điều kiện.</li><li><strong>Chuỗi prompt:</strong> tách việc lớn thành các bước, đầu ra bước trước là đầu vào bước sau. Ví dụ: tóm tắt nghiên cứu → rút insight → đề xuất góc tiếp cận → viết quảng cáo → tự kiểm tra theo chính sách.</li><li><strong>Phân tách bằng thẻ hoặc tiêu đề:</strong> tách rõ chỉ dẫn, tài liệu tham khảo và ví dụ để mô hình không lẫn.</li><li><strong>Mời mô hình hỏi lại:</strong> "Trước khi viết, hãy hỏi tôi những gì bạn cần biết thêm."</li><li><strong>Yêu cầu tự phê bình:</strong> "Chỉ ra ba điểm yếu của bản nháp này rồi viết lại."</li><li><strong>Lặp:</strong> sửa đúng phần còn thiếu trong prompt thay vì viết lại toàn bộ sau mỗi lần không ưng.</li></ul>
<p>Jules White (Đại học Vanderbilt) hệ thống hoá nhiều mẫu có tên riêng (Persona, Flipped Interaction, Question Refinement, Fact Check List...) trong khoá Prompt Engineering for ChatGPT. Thư viện prompt của Ethan và Lilach Mollick cung cấp nhiều mẫu dùng ngay, phát hành theo giấy phép Creative Commons Attribution 4.0.</p>`,
          res: ['vanderbilt-prompt', 'mollick-prompts', 'dlai-prompting-everyone']
        },
        {
          title: 'Ngữ cảnh thương hiệu dùng lại được', min: 45,
          body: `<p>Đầu ra chung chung thường là lỗi giao việc, phần lớn do thiếu ngữ cảnh. Hãy xây một <strong>bộ ngữ cảnh thương hiệu</strong> để dùng lại trong mọi tác vụ:</p>
<ul><li><strong>Hồ sơ thương hiệu:</strong> định vị, đề xuất giá trị, bảng thông điệp ba tầng (module 1.3).</li><li><strong>Hướng dẫn giọng văn:</strong> tính cách, nên và không nên, từ ngữ ưa dùng và từ cấm, 5 đến 10 đoạn văn mẫu tốt nhất.</li><li><strong>Chân dung khách hàng</strong> và câu JTBD, kèm ngôn ngữ thật trích từ đánh giá.</li><li><strong>Dữ kiện sản phẩm đã xác minh:</strong> thông số, giá, chính sách. Ghi rõ AI chỉ được dùng dữ kiện trong danh sách này.</li><li><strong>Quy tắc tuân thủ:</strong> chính sách quảng cáo của nền tảng, tuyên bố không được phép.</li></ul>
<p>Phần lớn công cụ AI phổ biến có chỗ lưu ngữ cảnh lâu dài (dự án, chỉ dẫn tuỳ chỉnh, trợ lý tuỳ biến); tên và giới hạn khác nhau theo sản phẩm. Giữ một bản gốc duy nhất có người phụ trách và số phiên bản, đặt bản sao vào công cụ để cả đội dùng chung, và không đưa dữ liệu cá nhân của khách vào bộ ngữ cảnh.</p>
<p>Khi tài liệu quá lớn, hệ thống dùng kỹ thuật <strong>RAG</strong> (retrieval-augmented generation, tạo sinh có truy xuất): tìm đoạn liên quan trong kho tài liệu rồi đưa vào ngữ cảnh. Hiệu quả của RAG phụ thuộc vào chất lượng và mức liên quan của kho tài liệu: kho sai thì câu trả lời sai, chỉ là sai có trích nguồn.</p>`,
          res: ['anthropic-claude-101', 'anthropic-prompt-docs']
        },
        {
          title: 'Quy trình AI cho các tác vụ marketing', min: 60,
          body: `<table><tr><th>Tác vụ</th><th>Quy trình gợi ý</th><th>Điểm con người kiểm soát</th></tr>
<tr><td>Khai thác đánh giá khách hàng</td><td>Nạp đánh giá → phân loại chủ đề, cảm xúc → đếm tần suất → trích câu tiêu biểu → đề xuất thông điệp</td><td>Kiểm tra mẫu phân loại, đối chiếu số đếm</td></tr>
<tr><td>Sản xuất bài viết</td><td>Brief → dàn ý → duyệt dàn ý → bản nháp từng phần → biên tập → kiểm tra dữ kiện</td><td>Duyệt dàn ý, thêm trải nghiệm và dữ liệu riêng, kiểm tra mọi con số</td></tr>
<tr><td>Biến thể quảng cáo</td><td>Ma trận góc tiếp cận (do người quyết định) → sinh biến thể theo từng góc → lọc theo chính sách → chọn</td><td>Chọn góc tiếp cận, duyệt cuối</td></tr>
<tr><td>Phân tích dữ liệu</td><td>Tải tệp → mô tả cột → đặt câu hỏi → yêu cầu hiển thị cách tính → kiểm chứng</td><td>Xác nhận cách tính, kiểm tra chéo với nguồn gốc</td></tr>
<tr><td>Nghiên cứu đối thủ</td><td>Dùng công cụ có tìm kiếm web → yêu cầu trích nguồn → mở nguồn để xác minh</td><td>Xác minh từng nguồn</td></tr></table>
<p>Nguyên tắc chung: <strong>con người quyết định hướng đi và duyệt kết quả, AI tăng tốc phần giữa</strong>. Bài viết hoàn toàn do AI tạo, không có trải nghiệm hay dữ liệu riêng, khó đạt tiêu chí nội dung hữu ích ở module 2.1 và dễ lẫn vào hàng triệu bài tương tự.</p>`,
          res: ['hubspot-ai-marketing', 'darden-ai-marketing']
        },
        {
          title: 'Đánh giá, kiểm soát chất lượng và bảo mật', min: 45,
          body: `<h4>Bảng kiểm trước khi dùng đầu ra</h4>
<ul><li><strong>Dữ kiện:</strong> mọi con số, tên riêng, trích dẫn, tuyên bố đã được xác minh với nguồn gốc chưa?</li><li><strong>Thương hiệu:</strong> đúng giọng, đúng định vị, không dùng từ cấm?</li><li><strong>Tuân thủ:</strong> đúng chính sách quảng cáo, quy định ngành, quyền sở hữu trí tuệ?</li><li><strong>Giá trị:</strong> có điều gì riêng của bạn mà đối thủ không viết được không?</li></ul>
<h4>Đánh giá có hệ thống</h4>
<p>Trước khi sửa prompt, viết ra tiêu chí thành công cụ thể và đo được. Với tác vụ lặp lại, lập <strong>bộ kiểm thử</strong>: khoảng 10 đến 20 đầu vào tiêu biểu, gồm cả ca khó, kèm tiêu chí chấm. Mỗi khi đổi prompt hoặc đổi mô hình, chạy lại và so sánh, xem cả ca nào đổi kết quả chứ không chỉ tổng điểm. Với bộ nhỏ, chênh vài điểm có thể chỉ là ngẫu nhiên, nên chạy mỗi phiên bản vài lần và mở rộng bộ kiểm thử dần.</p>
<h4>Thư viện prompt của đội</h4>
<p>Lưu prompt đã kiểm chứng kèm: mục đích, ngữ cảnh cần có, ví dụ đầu ra tốt, giới hạn đã biết, người phụ trách.</p>
<h4>Bảo mật dữ liệu</h4>
<ul><li>Không dán dữ liệu cá nhân của khách hàng, dữ liệu tài chính chưa công bố hay bí mật kinh doanh vào công cụ chưa được công ty phê duyệt.</li><li>Kiểm tra điều khoản: dữ liệu có được dùng để huấn luyện mô hình không, lưu ở đâu, bao lâu.</li><li>Ẩn danh hoá dữ liệu trước khi phân tích khi có thể.</li></ul>`,
          res: ['anthropic-ai-fluency', 'ico-ai']
        }
      ],
      takeaways: [
        'Giao việc cho AI như giao cho một cộng sự giỏi chưa biết gì về công ty bạn.',
        'Ví dụ mẫu và ngữ cảnh thương hiệu là hai đòn bẩy lớn nhất.',
        'Con người quyết định hướng và duyệt cuối; AI tăng tốc phần giữa.',
        'Không có bộ kiểm thử thì không biết prompt mới tốt hơn hay tệ hơn.'
      ],
      assignment: {
        title: 'Bộ ngữ cảnh thương hiệu và ba quy trình AI',
        brief: `<ol><li>Soạn bộ ngữ cảnh thương hiệu gồm năm phần đã học, tối đa 4 trang.</li><li>Xây ba prompt hoàn chỉnh cho ba tác vụ ưu tiên ở module 6.1, mỗi prompt có ngữ cảnh, nhiệm vụ, ràng buộc, định dạng, ví dụ.</li><li>Lập bộ kiểm thử 10 đầu vào cho một prompt và chấm đầu ra theo bảng tiêu chí. Sửa prompt ít nhất hai vòng, ghi lại thay đổi điểm.</li><li>Viết tài liệu quy trình một trang cho mỗi tác vụ, nêu rõ điểm con người kiểm soát.</li></ol>`,
        deliverable: 'Bộ ngữ cảnh thương hiệu, ba prompt, bảng kết quả kiểm thử và ba tài liệu quy trình.'
      },
      quiz: [
        { q: 'Thành phần nào thường thiếu khi đầu ra của AI chung chung?', a: ['Dấu chấm câu', 'Ngữ cảnh về thương hiệu, khách hàng và mục tiêu', 'Từ "làm ơn"', 'Độ dài prompt dưới 10 từ'], correct: 1, why: 'Thiếu ngữ cảnh, mô hình chỉ có thể trả về nội dung trung bình.' },
        { q: 'Few-shot prompting là gì?', a: ['Hỏi cùng câu nhiều lần', 'Đưa vài ví dụ mẫu về đầu vào và đầu ra mong muốn', 'Dùng prompt thật ngắn', 'Dùng nhiều mô hình cùng lúc'], correct: 1, why: 'Ví dụ mẫu giúp mô hình hiểu chính xác kết quả bạn muốn.' },
        { q: 'Vì sao ví dụ mẫu cần đa dạng?', a: ['Để prompt dài hơn', 'Vì mô hình bắt chước mẫu rất sát, ví dụ giống nhau cho đầu ra rập khuôn', 'Vì quy định của nhà cung cấp', 'Để tiết kiệm token'], correct: 1, why: 'Mô hình khái quát hoá từ mẫu; mẫu hẹp cho kết quả hẹp.' },
        { q: 'Cách đúng để biết một prompt sửa đổi có tốt hơn không?', a: ['Cảm nhận từ một lần chạy', 'Chạy lại trên bộ kiểm thử cố định và so điểm theo tiêu chí', 'Hỏi AI xem prompt nào tốt hơn', 'Chọn prompt dài hơn'], correct: 1, why: 'Bộ kiểm thử cố định cho phép so sánh công bằng giữa các phiên bản.' },
        { q: 'Việc nào vi phạm nguyên tắc bảo mật khi dùng AI?', a: ['Dán danh sách email và số điện thoại khách hàng vào công cụ chưa được phê duyệt', 'Yêu cầu AI viết lại một đoạn văn công khai', 'Tải lên báo cáo đã ẩn danh', 'Nhờ AI giải thích công thức'], correct: 0, why: 'Dữ liệu cá nhân không được đưa vào công cụ chưa qua phê duyệt.' }
      ],
      readings: ['vanderbilt-prompt', 'openai-academy']
    },
    {
      id: 'm6-3', hours: 6,
      title: 'AI trong các nền tảng quảng cáo',
      summary: 'Hiểu những gì các chiến dịch AI tự động hoá, những đòn bẩy còn lại trong tay bạn và cách kiểm chứng kết quả.',
      objectives: [
        'Mô tả vai trò của mô hình dự đoán trong đấu giá và phân phối.',
        'So sánh mức tự động hoá của Performance Max, AI Max, Advantage+ và Smart+.',
        'Xác định năm nhóm đầu vào mà nhà quảng cáo còn kiểm soát.',
        'Thiết lập giá thầu theo giá trị với dữ liệu bên thứ nhất.',
        'Lập quy trình kiểm chứng và rào chắn cho chiến dịch AI.'
      ],
      lessons: [
        {
          title: 'Học máy đằng sau mỗi lượt hiển thị', min: 40,
          body: `<p>Mỗi lần có cơ hội hiển thị, nền tảng chạy hàng loạt mô hình dự đoán trong vài mili giây:</p>
<ul><li><strong>pCTR:</strong> xác suất người này nhấp vào quảng cáo này.</li><li><strong>pCVR:</strong> xác suất chuyển đổi sau khi nhấp.</li><li><strong>Giá trị dự đoán:</strong> chuyển đổi đó đáng giá bao nhiêu.</li><li><strong>Chất lượng và trải nghiệm:</strong> khả năng người dùng ẩn, báo cáo hoặc hài lòng với quảng cáo.</li></ul>
<p>Giá thầu tự động (Smart Bidding của Google gọi là auction-time bidding, đặt giá tại thời điểm đấu giá) kết hợp các dự đoán này với mục tiêu CPA hoặc ROAS của bạn và hàng chục tín hiệu (thiết bị, vị trí, giờ, danh sách remarketing, truy vấn thật...) để ra giá cho từng lượt. Google không công bố công thức; để hình dung, giá thầu tối đa ≈ pCVR × giá trị dự đoán ÷ ROAS mục tiêu. Đây là lý do tự động hoá thường thắng đặt giá tay: con người không thể định giá riêng cho hàng chục nghìn lượt mỗi ngày.</p>
<p>Các chiến dịch "AI" thế hệ mới mở rộng tự động hoá sang những phần trước đây do người quyết định: chọn đối tượng, chọn vị trí, khớp truy vấn, ghép và tạo sáng tạo, chọn trang đích, phân bổ ngân sách.</p>
<p>Mô hình học từ kết quả. Nó tốt đúng bằng mức dữ liệu kết quả bạn cung cấp phản ánh giá trị kinh doanh thật. Google cũng khuyên đánh giá chiến lược giá thầu trên khoảng thời gian có ít nhất 30 chuyển đổi (50 với Target ROAS). Và nhớ: mô hình dự đoán <em>xác suất chuyển đổi</em>, không dự đoán <em>chuyển đổi tăng thêm</em>.</p>`,
          res: ['google-smart-bidding', 'google-ai-perf-cert']
        },
        {
          title: 'Bản đồ các sản phẩm tự động hoá', min: 50,
          body: `<table><tr><th>Sản phẩm</th><th>Tự động hoá</th><th>Rào chắn chính</th></tr>
<tr><td>Google Performance Max</td><td>Kênh, đối tượng, giá thầu, ghép thành phần, có thể tạo thành phần</td><td>Loại trừ thương hiệu, từ khoá phủ định, loại trừ vị trí, quy tắc URL, tín hiệu đối tượng</td></tr>
<tr><td>Google AI Max for Search</td><td>Mở rộng khớp truy vấn ngoài từ khoá, tuỳ biến văn bản quảng cáo, chọn URL đích</td><td>Bật tắt từng tính năng, loại trừ URL, giới hạn thương hiệu và địa điểm</td></tr>
<tr><td>Meta Advantage+</td><td>Đối tượng, vị trí, ngân sách, các "điểm cải thiện" sáng tạo (mở rộng ảnh, tạo nền, tạo chữ, hoạt ảnh...)</td><td>Mục tiêu, ngân sách, định nghĩa khách hàng hiện có, tắt từng điểm cải thiện (một số có thể được bật theo mặc định); bản xem trước chỉ là ví dụ, không phải toàn bộ biến thể</td></tr>
<tr><td>TikTok Smart+</td><td>Ghép video và chữ, dồn ngân sách cho tổ hợp tốt, vị trí tự động, tạo tài sản bằng AI</td><td>Mục tiêu, ngân sách, bộ sáng tạo đầu vào; bản nâng cấp (trang cập nhật tháng 10/2026, có thể chưa có ở mọi tài khoản) cho chọn tự động toàn phần, một phần hay thủ công, kèm tuỳ chọn đối tượng, vị trí và CPA mục tiêu</td></tr></table>
<p>Tên và tính năng của các sản phẩm này thay đổi thường xuyên. Chứng chỉ <em>AI-Powered Performance Ads</em> trên Google Skillshop và các khoá về công cụ AI trên Meta Blueprint được cập nhật theo sản phẩm, nên là nguồn tốt nhất cho chi tiết hiện hành.</p>
<p>Điểm chung: nền tảng muốn bạn cung cấp <strong>mục tiêu, ngân sách, tín hiệu và nguyên liệu sáng tạo</strong>, phần còn lại để hệ thống quyết định.</p>`,
          res: ['google-ai-perf-cert', 'google-ai-max', 'meta-ai-creative-tools']
        },
        {
          title: 'Năm nhóm đầu vào bạn còn kiểm soát', min: 50,
          body: `<ol><li><strong>Tín hiệu chuyển đổi.</strong> Sự kiện nào, có giá trị kèm theo không, có đầy đủ không (gửi từ máy chủ như Conversions API của Meta, enhanced conversions của Google gửi email, số điện thoại đã băm để khớp chính xác hơn), có phản ánh chất lượng thật không (lead đủ điều kiện, đơn không hoàn).</li><li><strong>Mục tiêu và giá trị.</strong> Mục tiêu CPA hoặc ROAS, và giá trị gán cho mỗi loại chuyển đổi. Giá trị theo <em>lợi nhuận</em> hoặc <em>LTV dự báo</em> định hướng hệ thống tốt hơn doanh thu thô.</li><li><strong>Dữ liệu bên thứ nhất.</strong> Danh sách khách hàng để loại trừ, để định nghĩa khách mới, và làm tín hiệu đối tượng.</li><li><strong>Sáng tạo và nguồn cấp.</strong> Số lượng, độ đa dạng góc tiếp cận, chất lượng. Với thương mại điện tử, chất lượng nguồn cấp sản phẩm quan trọng ngang sáng tạo.</li><li><strong>Rào chắn và cấu trúc.</strong> Loại trừ, giới hạn, cách tách chiến dịch theo biên lợi nhuận hoặc mục tiêu.</li></ol>
<h4>Giá thầu theo giá trị</h4>
<div class="formula">Mức 1: tối ưu theo số chuyển đổi → Mức 2: theo doanh thu → Mức 3: theo lợi nhuận gộp → Mức 4: theo LTV dự báo</div>
<p>Mỗi bước lên đưa mục tiêu của thuật toán gần hơn với mục tiêu kinh doanh. Điều kiện là dữ liệu giá trị đủ chính xác và đủ nhiều: sửa tín hiệu (khử đếm trùng, enhanced conversions, CAPI) trước khi leo thang. Khi đổi giá trị gửi lên, nhớ đổi luôn ROAS mục tiêu tương ứng, nếu không bạn sẽ đặt mục tiêu quá chặt.</p>`,
          res: ['google-enhanced-conv', 'meta-capi-docs', 'google-pltv-paper']
        },
        {
          title: 'Kiểm chứng hộp đen', min: 45,
          body: `<p>Tự động hoá cao làm giảm khả năng quan sát. Hai rủi ro chính:</p>
<ul><li><strong>Ghi công quá mức:</strong> hệ thống được thưởng theo chuyển đổi được phân bổ, nên có động lực tìm người sắp mua sẵn: khách cũ, người tìm tên thương hiệu, người đã ở trong giỏ hàng.</li><li><strong>Mất insight:</strong> bạn không còn biết truy vấn nào, đối tượng nào, vị trí nào tạo ra kết quả.</li></ul>
<h4>Công cụ kiểm chứng</h4>
<ul><li><strong>Thử nghiệm trên nền tảng:</strong> Performance Max experiments của Google (loại uplift đo phần tăng thêm, loại optimization thử thay đổi thiết lập), A/B test và lift test của Meta. Kết quả vẫn dựa trên tín hiệu nền tảng nhận được.</li><li><strong>Thử nghiệm địa lý</strong> cho câu hỏi lớn: chiến dịch AI có tạo doanh thu tăng thêm so với cấu trúc cũ không (module 5.5). Đo bằng dữ liệu bán hàng của bạn, không bằng số nền tảng, và xem khoảng tin cậy chứ không chỉ ước lượng điểm.</li><li><strong>Báo cáo phân tách:</strong> tỷ lệ khách mới so với khách cũ, tỷ trọng truy vấn thương hiệu, phân bổ theo kênh trong Performance Max.</li><li><strong>Chỉ số kinh doanh:</strong> MER, số khách mới, lợi nhuận đóng góp. Nếu ROAS nền tảng tăng mà các số này không đổi, hệ thống đang lấy công chứ không tạo thêm giá trị.</li></ul>
<p>Thái độ đúng là hợp tác có kiểm chứng: dùng tự động hoá vì nó thường tốt hơn, và định kỳ kiểm tra xem nó có thật sự tốt hơn với doanh nghiệp của bạn không.</p>`,
          res: ['gordon-close-enough', 'twg-measurement-playbook']
        },
        {
          title: 'Quy trình vận hành trong kỷ nguyên tự động hoá', min: 35,
          body: `<p>Vai trò của người chạy quảng cáo dịch chuyển từ điều khiển sang định hướng và giám sát.</p>
<table><tr><th>Trước đây</th><th>Hiện nay</th></tr>
<tr><td>Chọn từ khoá, đặt giá từng từ</td><td>Thiết kế tín hiệu và giá trị chuyển đổi</td></tr>
<tr><td>Chia nhỏ đối tượng</td><td>Xây chiến lược sáng tạo theo góc tiếp cận</td></tr>
<tr><td>Chọn vị trí hiển thị</td><td>Quản lý nguồn cấp và trang đích</td></tr>
<tr><td>Báo cáo theo số nền tảng</td><td>Thiết kế thử nghiệm và đo tính tăng thêm</td></tr>
<tr><td>Tối ưu hằng ngày bằng tay</td><td>Đặt rào chắn, theo dõi bất thường, ra quyết định ngân sách</td></tr></table>
<h4>Bảng kiểm hằng tháng cho chiến dịch AI</h4>
<ul><li>Tín hiệu: số chuyển đổi nền tảng ghi nhận có khớp hệ thống đơn hàng không?</li><li>Sáng tạo: có bổ sung góc tiếp cận mới không, thành phần nào bị xếp hạng thấp?</li><li>Rào chắn: danh sách loại trừ còn cập nhật không?</li><li>Thành phần do hệ thống tự tạo: đã xem và duyệt chưa?</li><li>Kết quả kinh doanh: tỷ lệ khách mới, MER, lợi nhuận.</li></ul>`,
          res: ['google-ai-perf-cert', 'tiktok-academy']
        }
      ],
      takeaways: [
        'Chiến dịch AI tốt đúng bằng chất lượng tín hiệu và giá trị bạn cung cấp.',
        'Năm đòn bẩy còn lại: tín hiệu, mục tiêu giá trị, dữ liệu bên thứ nhất, sáng tạo và nguồn cấp, rào chắn.',
        'ROAS nền tảng tăng mà chỉ số kinh doanh đứng yên là dấu hiệu ghi công quá mức.',
        'Vai trò chuyển từ điều khiển sang định hướng, giám sát và kiểm chứng.'
      ],
      assignment: {
        title: 'Rà soát mức sẵn sàng cho chiến dịch AI',
        brief: `<ol><li>Chấm tài khoản quảng cáo của bạn (hoặc một tài khoản mẫu) theo năm nhóm đầu vào, thang 1 đến 5, kèm bằng chứng.</li><li>Xác định bạn đang ở mức nào trên thang giá thầu theo giá trị và việc cần làm để lên mức kế tiếp.</li><li>Liệt kê các rào chắn hiện có và còn thiếu cho từng chiến dịch tự động.</li><li>Thiết kế một thử nghiệm so sánh chiến dịch AI với cấu trúc hiện tại: giả thuyết, thiết kế, chỉ số, thời lượng.</li><li>Học và thi chứng chỉ AI-Powered Performance Ads.</li></ol>`,
        deliverable: 'Bảng chấm mức sẵn sàng, kế hoạch nâng cấp, thiết kế thử nghiệm và chứng chỉ.'
      },
      quiz: [
        { q: 'pCVR là gì?', a: ['Giá mỗi chuyển đổi', 'Xác suất dự đoán người dùng chuyển đổi sau khi nhấp', 'Tỷ lệ chuyển đổi trung bình của ngành', 'Phần trăm ngân sách đã chi'], correct: 1, why: 'Đây là một trong các dự đoán nền tảng dùng để định giá mỗi lượt hiển thị.' },
        { q: 'Mức nào trên thang giá thầu theo giá trị gần mục tiêu kinh doanh nhất?', a: ['Tối ưu theo số chuyển đổi', 'Tối ưu theo doanh thu', 'Tối ưu theo lợi nhuận gộp', 'Tối ưu theo LTV dự báo'], correct: 3, why: 'LTV dự báo phản ánh giá trị dài hạn của khách hàng, với điều kiện dữ liệu đủ tin cậy.' },
        { q: 'ROAS của Performance Max tăng, nhưng số khách mới và MER không đổi. Giải thích hợp lý nhất?', a: ['Chiến dịch đang rất hiệu quả', 'Hệ thống đang ghi công cho khách cũ và truy vấn thương hiệu thay vì tạo thêm giá trị', 'Lỗi theo dõi', 'Mùa cao điểm'], correct: 1, why: 'Không có thay đổi ở chỉ số kinh doanh cho thấy chuyển đổi được phân bổ không phải là chuyển đổi tăng thêm.' },
        { q: 'Đầu vào nào KHÔNG thuộc năm nhóm nhà quảng cáo còn kiểm soát?', a: ['Tín hiệu chuyển đổi', 'Sáng tạo và nguồn cấp', 'Giá thầu cho từng lượt đấu giá riêng lẻ', 'Rào chắn và loại trừ'], correct: 2, why: 'Giá thầu từng lượt đấu giá do hệ thống tự tính.' },
        { q: 'Vì sao nên xem trước các thành phần do hệ thống tự tạo?', a: ['Vì chúng tốn phí', 'Vì chúng có thể thay đổi cách thương hiệu xuất hiện hoặc đưa ra tuyên bố không phù hợp', 'Vì nền tảng yêu cầu ký duyệt', 'Vì chúng làm giảm CTR'], correct: 1, why: 'Nhà quảng cáo vẫn chịu trách nhiệm về nội dung quảng cáo mang tên mình.' }
      ],
      readings: ['wharton-ai-business', 'davenport-ai-marketing']
    },
    {
      id: 'm6-4', hours: 6,
      title: 'AI trong sản xuất sáng tạo: hiệu quả, bản quyền, gắn nhãn',
      summary: 'Dùng AI tạo sinh để tăng tốc và mở rộng sản xuất sáng tạo, đồng thời hiểu bằng chứng về hiệu quả và các ràng buộc pháp lý.',
      objectives: [
        'Thiết kế quy trình sản xuất sáng tạo có AI với các điểm kiểm soát của con người.',
        'Tóm tắt bằng chứng nghiên cứu về hiệu quả của quảng cáo do AI tạo.',
        'Giải thích quan điểm về bản quyền đối với nội dung do AI tạo.',
        'Áp dụng yêu cầu gắn nhãn của nền tảng và của pháp luật.',
        'Lập quy tắc dùng AI cho sáng tạo của thương hiệu.'
      ],
      lessons: [
        {
          title: 'AI làm được gì trong chuỗi sáng tạo', min: 40,
          body: `<table><tr><th>Giai đoạn</th><th>AI hỗ trợ</th><th>Con người giữ</th></tr>
<tr><td>Nghiên cứu</td><td>Tổng hợp đánh giá, phân tích quảng cáo đối thủ, phát hiện mẫu hình</td><td>Chọn insight đáng theo đuổi</td></tr>
<tr><td>Ý tưởng</td><td>Sinh hàng chục góc tiếp cận, hook, tiêu đề</td><td>Chọn và kết hợp, bảo đảm đúng chiến lược</td></tr>
<tr><td>Sản xuất</td><td>Tạo và chỉnh ảnh, mở rộng khung hình, đổi nền, tạo video ngắn, lồng tiếng, phụ đề, bản địa hoá</td><td>Chỉ đạo nghệ thuật, kiểm tra chân thực của sản phẩm</td></tr>
<tr><td>Biến thể</td><td>Nhân bản theo kích thước, ngôn ngữ, ưu đãi</td><td>Duyệt, loại biến thể lệch thương hiệu</td></tr>
<tr><td>Phân tích</td><td>Gắn thẻ sáng tạo theo đặc điểm, tìm yếu tố tương quan với hiệu quả</td><td>Diễn giải, quyết định hướng thử tiếp</td></tr></table>
<p>Có hai nhóm công cụ: công cụ <strong>tích hợp trong nền tảng quảng cáo</strong> (tạo biến thể văn bản, mở rộng ảnh, tạo nền, chuyển ảnh thành video) và công cụ <strong>độc lập</strong> về văn bản, hình ảnh, video, giọng nói.</p>
<p>Giá trị lớn nhất hiện nay nằm ở tốc độ và số lượng biến thể, tức phần "thử lặp" ở module 3.5. Bước nhảy về hiệu quả vẫn đến từ góc tiếp cận mới, và góc tiếp cận xuất phát từ hiểu biết về khách hàng.</p>`,
          res: ['meta-ai-creative-tools', 'hubspot-ai-marketing']
        },
        {
          title: 'Bằng chứng về hiệu quả', min: 40,
          body: `<p>Nghiên cứu về quảng cáo do AI tạo còn mới và phần lớn ở dạng bản thảo chưa qua bình duyệt, nên cần đọc thận trọng.</p>
<ul><li>Bản thảo trên SSRN của Lee, Todri, Adamopoulos và Ghose về AI tạo hình ảnh trong quảng cáo (chưa thấy thông tin đã qua bình duyệt) ghi nhận: trong bối cảnh thực địa, quảng cáo được tạo hoàn toàn bằng AI có tỷ lệ nhấp cao hơn <em>tới</em> 19% so với quảng cáo do chuyên gia làm. "Tới" là mức cao nhất, không phải mức điển hình. Quảng cáo do người làm rồi dùng AI chỉnh sửa thì không cải thiện đáng kể. Và <strong>khi công bố cho người xem rằng quảng cáo dùng AI, tỷ lệ nhấp giảm tới khoảng 31,5%</strong>.</li><li>Nghiên cứu "jagged frontier" ở module 6.1, ở tác vụ sáng tạo ý tưởng sản phẩm, thấy ý tưởng của nhóm dùng AI có chất lượng cao hơn nhưng <strong>độ biến thiên giảm rõ rệt</strong>: các ý tưởng có xu hướng giống nhau hơn.</li></ul>
<h4>Hàm ý</h4>
<ul><li>AI có thể tạo sáng tạo cạnh tranh được về tỷ lệ nhấp, ít nhất trong một số bối cảnh. Nhưng CTR không phải doanh thu; thước đo chính nên là lượt mua hoặc lượt bắt đầu mua.</li><li>Người xem có thể phản ứng tiêu cực khi biết nội dung do AI tạo. Khi nhãn là bắt buộc theo luật hoặc nền tảng, câu hỏi thử nghiệm đúng là "biến thể có nhãn nào hiệu quả nhất", không phải "bỏ nhãn có lợi hơn không".</li><li>Nếu mọi thương hiệu dùng cùng công cụ với cùng kiểu yêu cầu, quảng cáo sẽ giống nhau. Ngữ cảnh thương hiệu và insight riêng là thứ tạo khác biệt.</li><li>Hãy tự thử nghiệm trên đối tượng của bạn thay vì dựa vào kết quả tổng quát, và tính cỡ mẫu trước: với CTR nền thấp, muốn thấy chênh lệch vài chục phần trăm thường cần hàng chục nghìn lượt hiển thị mỗi nhóm.</li></ul>`,
          res: ['lee-genai-ads', 'jagged-frontier']
        },
        {
          title: 'Bản quyền và quyền hình ảnh', min: 50,
          body: `<p>Khung pháp lý đang hình thành và khác nhau giữa các nước. Một số mốc tham chiếu:</p>
<ul><li><strong>Cục Bản quyền Hoa Kỳ</strong>, báo cáo <em>Copyright and Artificial Intelligence</em> phần 2 (29/1/2025): dùng AI để hỗ trợ chứ không thay thế sáng tạo của con người không ảnh hưởng tới khả năng được bảo hộ. Nội dung hoàn toàn do AI tạo, hoặc khi con người không kiểm soát đủ các yếu tố biểu đạt, thì không được bảo hộ; với công nghệ phổ biến hiện nay, prompt tự nó chưa đủ. Phần biểu đạt của con người còn nhận ra được, việc chọn lọc, sắp xếp sáng tạo và chỉnh sửa sáng tạo đầu ra thì có thể được bảo hộ. Mức đóng góp đủ hay chưa phải xét từng trường hợp.</li><li>Phần 1 (31/7/2024) bàn về <strong>bản sao số</strong> (digital replicas: giọng nói, hình ảnh của người thật do AI tạo). Phần 3 về việc huấn luyện AI tạo sinh bằng tác phẩm có bản quyền đã có bản trước khi xuất bản (9/5/2025); Cục cho biết bản cuối sẽ ra sau.</li></ul>
<h4>Hệ quả thực hành cho marketer</h4>
<ul><li>Tài sản thương hiệu quan trọng (logo, nhân vật, hình ảnh chủ đạo) do AI tạo hoàn toàn có thể không bảo hộ được. Hãy để con người đóng góp sáng tạo đáng kể và lưu lại quá trình.</li><li>Không dùng AI để bắt chước phong cách nghệ sĩ còn sống, nhân vật, thương hiệu của bên khác.</li><li>Không tạo hình ảnh hoặc giọng nói của người thật khi chưa có sự đồng ý bằng văn bản.</li><li>Đọc điều khoản công cụ: ai sở hữu đầu ra, có cam kết bồi thường khi bị kiện vi phạm không.</li></ul>
<div class="callout"><b>Lưu ý:</b> đây là kiến thức định hướng, không phải tư vấn pháp lý. Với chiến dịch lớn, hãy tham vấn luật sư ở thị trường liên quan.</div>`,
          res: ['usco-ai']
        },
        {
          title: 'Gắn nhãn và minh bạch', min: 45,
          body: `<h4>Pháp luật</h4>
<ul><li><strong>Đạo luật AI của EU</strong>, Điều 50: nghĩa vụ minh bạch, chia theo vai trò. <em>Nhà cung cấp</em> (provider, bên làm ra hệ thống AI) phải cho người dùng biết họ đang trò chuyện với AI và đánh dấu đầu ra tổng hợp ở dạng máy đọc được. <em>Bên triển khai</em> (deployer, gồm doanh nghiệp dùng AI làm quảng cáo) phải công bố nội dung deepfake là nhân tạo. Điều 50 áp dụng từ 2/8/2026; theo phân tích của hãng luật Gibson Dunn về gói sửa đổi Digital Omnibus, nghĩa vụ đánh dấu máy đọc được (khoản 2) có hạn tới 2/12/2026 cho hệ thống đã ra thị trường trước 2/8/2026 (hãy kiểm tra văn bản chính thức).</li><li><strong>Mỹ:</strong> FTC (Uỷ ban Thương mại Liên bang) công bố quy tắc cấm đánh giá và lời chứng thực giả ngày 14/8/2024, gồm cả đánh giá do AI tạo, và mở đợt xử lý Operation AI Comply (9/2024) với các công ty dùng AI để lừa dối hoặc thổi phồng năng lực AI. Sắc thái: lệnh năm 2024 với Rytr (công cụ viết đánh giá bằng AI) đã bị FTC huỷ ngày 22/12/2025, nhưng đánh giá giả vẫn là vi phạm, dù viết tay hay bằng AI.</li></ul>
<h4>Nền tảng</h4>
<ul><li><strong>Google Ads</strong> cập nhật chính sách về nhãn AI vào tháng 7 năm 2026 (đây là quyền và một cài đặt, không phải bảo đảm tuân thủ pháp luật): nhà quảng cáo có thể gắn nhãn quảng cáo hình ảnh, video do AI tạo, và Google tự gắn nhãn một số thành phần tạo bằng công cụ AI của chính Google. Quảng cáo bầu cử có nội dung tổng hợp có yêu cầu công bố riêng.</li><li><strong>Meta</strong> gắn nhãn AI cho ảnh, video quảng cáo được chỉnh sửa đáng kể bằng công cụ AI của Meta, và tự phát hiện quảng cáo dùng công cụ AI bên thứ ba qua tín hiệu chuẩn ngành để gắn nhãn "AI info" trong mục "About this ad".</li><li><strong>TikTok</strong> (chính sách quảng cáo cập nhật tháng 4/2026): nội dung AI hoặc chỉnh sửa đáng kể được phép nếu dùng nhãn AIGC của TikTok hoặc tự thêm chú thích, watermark rõ ràng; nội dung AI không khai báo sẽ bị từ chối hoặc hạn chế. Không chắc thì nên gắn nhãn.</li></ul>
<p><strong>C2PA</strong> là tiêu chuẩn mở ghi nguồn gốc và lịch sử chỉnh sửa của nội dung số; <strong>Content Credentials</strong> là cách triển khai nó. Nó cho biết nội dung từ đâu và đã sửa gì, không phán xét đúng sai.</p>
<p>Chính sách thay đổi nhanh. Trước mỗi chiến dịch có nội dung AI, hãy đối chiếu trang chính sách hiện hành của từng nền tảng.</p>`,
          res: ['eu-ai-act', 'google-ai-labeling', 'ftc-endorsements']
        },
        {
          title: 'Quy tắc dùng AI cho sáng tạo thương hiệu', min: 35,
          body: `<p>Một bộ quy tắc nội bộ gọn nên trả lời:</p>
<ul><li><strong>Được dùng cho gì:</strong> ý tưởng, bản nháp, biến thể, chỉnh sửa, bản địa hoá.</li><li><strong>Không được dùng cho gì:</strong> hình ảnh người thật khi chưa có đồng ý; hình sản phẩm sai lệch so với thực tế; đánh giá và lời chứng thực giả; nội dung bắt chước bên thứ ba.</li><li><strong>Công cụ được phê duyệt</strong> và loại dữ liệu được phép đưa vào.</li><li><strong>Duyệt:</strong> ai duyệt, theo bảng kiểm nào, trước khi xuất bản.</li><li><strong>Gắn nhãn:</strong> khi nào và ở đâu.</li><li><strong>Lưu vết:</strong> lưu prompt, phiên bản và phần đóng góp của con người cho tài sản quan trọng.</li></ul>
<h4>Bảng kiểm duyệt sáng tạo AI</h4>
<ul><li>Sản phẩm, giá, ưu đãi trong hình có đúng thực tế không?</li><li>Có chi tiết lỗi không (bàn tay, chữ trong ảnh, logo méo)?</li><li>Có vô tình giống thương hiệu, nhân vật, người thật nào không?</li><li>Có định kiến hoặc khuôn mẫu về giới, tuổi, sắc tộc không?</li><li>Có đúng nhận diện và giọng thương hiệu không?</li><li>Có cần gắn nhãn không?</li></ul>
<p>Với ngành dịch vụ như lưu trú và ăn uống, hình ảnh AI mô tả sai cơ sở vật chất thật vừa là rủi ro pháp lý về quảng cáo gây hiểu nhầm, vừa trực tiếp dẫn tới đánh giá xấu.</p>`,
          res: ['imda-genai', 'nist-ai-rmf']
        }
      ],
      takeaways: [
        'AI mạnh nhất ở tốc độ và số lượng biến thể; góc tiếp cận vẫn đến từ insight.',
        'Trong một nghiên cứu chưa qua bình duyệt, công bố quảng cáo dùng AI làm giảm tỷ lệ nhấp; hãy tự thử nghiệm, nhưng không dùng kết quả đó để né nghĩa vụ gắn nhãn.',
        'Nội dung do AI tạo hoàn toàn có thể không được bảo hộ bản quyền.',
        'Yêu cầu gắn nhãn đến từ cả pháp luật lẫn nền tảng và thay đổi nhanh.'
      ],
      assignment: {
        title: 'Quy tắc sáng tạo AI và thử nghiệm so sánh',
        brief: `<ol><li>Soạn bộ quy tắc dùng AI cho sáng tạo của thương hiệu bạn, tối đa hai trang, gồm sáu phần đã học.</li><li>Tạo 6 biến thể quảng cáo ảnh tĩnh cho cùng một góc tiếp cận: 3 bằng quy trình thông thường, 3 có AI hỗ trợ. Chạy từng biến thể qua bảng kiểm duyệt.</li><li>Tra chính sách gắn nhãn AI hiện hành của hai nền tảng bạn dùng nhiều nhất và tóm tắt trong nửa trang.</li><li>Thiết kế thử nghiệm so sánh hiệu quả hai nhóm biến thể.</li></ol>`,
        deliverable: 'Bộ quy tắc, 6 biến thể kèm kết quả kiểm duyệt, bản tóm tắt chính sách và thiết kế thử nghiệm.'
      },
      quiz: [
        { q: 'Theo báo cáo của Cục Bản quyền Hoa Kỳ, nội dung do AI tạo hoàn toàn có được bảo hộ bản quyền không?', a: ['Có, thuộc về người viết prompt', 'Không, cần đủ đóng góp sáng tạo của con người', 'Có, thuộc về nhà cung cấp AI', 'Chỉ khi đăng ký trong 30 ngày'], correct: 1, why: 'Phần 2 của báo cáo (1/2025): bản quyền bảo vệ phần biểu đạt của tác giả là con người; prompt tự nó chưa đủ, và mức đóng góp được xét từng trường hợp.' },
        { q: 'Nghiên cứu của Lee và cộng sự ghi nhận điều gì khi công bố rằng quảng cáo do AI tạo?', a: ['Hiệu quả tăng', 'Hiệu quả giảm đáng kể', 'Không thay đổi', 'CPM giảm'], correct: 1, why: 'Việc công bố AI làm tỷ lệ nhấp giảm tới khoảng 31,5% trong bản thảo nghiên cứu này.' },
        { q: 'Điều 50 của Đạo luật AI EU quy định về gì?', a: ['Cấm mọi quảng cáo dùng AI', 'Nghĩa vụ minh bạch, gồm đánh dấu nội dung tổng hợp và deepfake', 'Thuế đối với công cụ AI', 'Giới hạn ngân sách quảng cáo'], correct: 1, why: 'Điều 50 đặt các nghĩa vụ minh bạch, áp dụng từ 2/8/2026; riêng nghĩa vụ đánh dấu máy đọc được có hạn chuyển tiếp tới 2/12/2026 cho hệ thống đã ra thị trường trước đó.' },
        { q: 'Việc nào bị cấm trong mọi bộ quy tắc dùng AI hợp lý?', a: ['Tạo biến thể kích thước ảnh', 'Tạo lời chứng thực của khách hàng không có thật', 'Sinh ý tưởng tiêu đề', 'Dịch quảng cáo sang ngôn ngữ khác'], correct: 1, why: 'Chứng thực giả là quảng cáo gây hiểu nhầm; ví dụ ở Mỹ, quy tắc năm 2024 của FTC cấm rõ đánh giá và lời chứng thực giả, kể cả do AI tạo.' },
        { q: 'Vì sao nên lưu lại prompt, phiên bản và phần chỉnh sửa của con người?', a: ['Để tính phí công cụ', 'Để chứng minh đóng góp sáng tạo của con người khi cần bảo hộ hoặc khi có tranh chấp', 'Vì nền tảng yêu cầu nộp', 'Để tăng điểm chất lượng quảng cáo'], correct: 1, why: 'Hồ sơ quá trình sáng tạo là bằng chứng về phần đóng góp của con người.' }
      ],
      readings: ['ico-ai', 'stanford-ai-index']
    },
    {
      id: 'm6-5', hours: 7,
      title: 'Tìm kiếm bằng AI: GEO và AEO',
      summary: 'Cách các công cụ trả lời bằng AI chọn nguồn, tác động tới lưu lượng và cách tối ưu khả năng được trích dẫn.',
      objectives: [
        'Mô tả cách công cụ tìm kiếm AI truy xuất và tổng hợp câu trả lời.',
        'Tóm tắt dữ liệu về tác động của AI Overviews tới lượt nhấp.',
        'Nêu hướng dẫn chính thức của Google và các cơ chế kiểm soát thu thập dữ liệu.',
        'Áp dụng các kỹ thuật tăng khả năng được trích dẫn có bằng chứng nghiên cứu.',
        'Đo lường mức hiện diện trong câu trả lời AI.'
      ],
      lessons: [
        {
          title: 'Tìm kiếm bằng AI hoạt động thế nào', min: 50,
          body: `<p>Các sản phẩm như AI Overviews và AI Mode của Google, ChatGPT có tìm kiếm, Perplexity, Copilot có thể hình dung theo một mô hình chung, dù mỗi sản phẩm có chỉ mục và cách chọn nguồn riêng, và không bên nào công bố đầy đủ chi tiết:</p>
<ol><li><strong>Hiểu câu hỏi</strong> và tách thành nhiều truy vấn con liên quan. Tài liệu của Google gọi kỹ thuật này là <em>query fan-out</em> (toả truy vấn) và cho biết AI Overviews lẫn AI Mode có thể dùng nó.</li><li><strong>Truy xuất:</strong> tìm tài liệu cho từng truy vấn con từ chỉ mục tìm kiếm.</li><li><strong>Chọn đoạn:</strong> lấy những đoạn văn trả lời trực tiếp nhất.</li><li><strong>Tổng hợp:</strong> mô hình ngôn ngữ viết câu trả lời dựa trên các đoạn đó.</li><li><strong>Trích nguồn:</strong> gắn liên kết tới tài liệu đã dùng. Pew Research Center ghi nhận 88% tóm tắt AI trong mẫu của họ trích từ ba nguồn trở lên, nên bạn thường chia chỗ với vài trang khác.</li></ol>
<h4>Khác biệt so với tìm kiếm truyền thống</h4>
<ul><li>Đơn vị cạnh tranh là <strong>đoạn văn</strong>, không chỉ là trang. Một trang xếp hạng thấp vẫn có thể được trích nếu có đoạn trả lời tốt nhất cho một truy vấn con.</li><li>Câu hỏi dài hơn, mang tính hội thoại, nhiều điều kiện hơn. Theo Pew (dữ liệu tháng 3/2025), truy vấn một hai từ có tóm tắt AI ở 8% lượt tìm, truy vấn từ 10 từ trở lên ở 53%.</li><li>Kết quả không ổn định: cùng câu hỏi có thể cho câu trả lời và nguồn khác nhau giữa các lần.</li><li>Thương hiệu có thể được <strong>nhắc tên</strong> mà không có liên kết.</li></ul>
<p>Thuật ngữ: <strong>GEO</strong> (generative engine optimization), <strong>AEO</strong> (answer engine optimization), LLMO đều chỉ việc tối ưu để xuất hiện trong câu trả lời do AI tạo.</p>`,
          res: ['ipullrank-manual', 'learningaisearch']
        },
        {
          title: 'Tác động tới lưu lượng', min: 45,
          body: `<p>Dữ liệu công bố tới nay:</p>
<ul><li><strong>Pew Research Center (22/7/2025):</strong> dữ liệu duyệt web thật của 900 người trưởng thành ở Mỹ trong tháng 3/2025, 68.879 lượt tìm kiếm Google. Khi trang kết quả có tóm tắt AI, người dùng nhấp vào một kết quả truyền thống ở 8% lượt truy cập, so với 15% khi không có. Chỉ 1% lượt truy cập có nhấp vào liên kết nằm trong tóm tắt AI.</li><li><strong>Ahrefs (4/2/2026):</strong> trên 300.000 từ khoá, dữ liệu Search Console chỉ trên desktop, so tháng 12/2023 với 12/2025: sự hiện diện của AI Overview tương quan với tỷ lệ nhấp của vị trí số 1 thấp hơn khoảng 58% so với mức dự báo.</li><li><strong>Seer Interactive (24/4/2026):</strong> 53 thương hiệu, khoảng 5,47 triệu truy vấn. Với truy vấn thông tin, thương hiệu được trích trong AI Overview có CTR tự nhiên 2,07%, so với 0,94% khi không được trích (khoảng 120% lượt nhấp nhiều hơn), nhưng vẫn thấp hơn khoảng 38% so với mức 3,35% khi không có AI Overview.</li></ul>
<p>Lưu ý về phương pháp: nghiên cứu của Pew dựa trên bảng người dùng (chỉ Mỹ, chỉ Google, một tháng). Hai nghiên cứu còn lại là phân tích tương quan của các công ty trong ngành, không phải thử nghiệm; chính Ahrefs và Seer ghi không chứng minh được nhân quả.</p>
<h4>Hàm ý chiến lược</h4>
<ul><li>Truy vấn thông tin là nơi AI Overview xuất hiện nhiều nhất (theo Seer: 36% truy vấn thông tin, 8% truy vấn thương mại, 5% truy vấn giao dịch). Truy vấn giao dịch ít bị phủ hơn, nhưng ở những truy vấn giao dịch có AI Overview, Seer vẫn thấy CTR của nhóm không được trích giảm khoảng 48% trong năm 2025.</li><li>Mục tiêu dịch chuyển một phần từ <em>lượt nhấp</em> sang <em>sự hiện diện</em>: được nêu tên, được trích dẫn, được đề xuất.</li><li>Đánh giá SEO chỉ bằng lưu lượng sẽ đánh giá thấp giá trị thật. Cần thêm chỉ số về hiển thị và nhu cầu thương hiệu.</li><li>Kênh owned (email, cộng đồng, ứng dụng) càng quan trọng khi lưu lượng tìm kiếm khó đoán hơn.</li></ul>`,
          res: ['pew-ai-overviews', 'ahrefs-aio-clicks', 'seer-aio']
        },
        {
          title: 'Hướng dẫn chính thức và cơ chế kiểm soát', min: 40,
          body: `<p>Tài liệu <em>AI features and your website</em> của Google Search Central nêu rõ:</p>
<ul><li>Không cần tối ưu đặc biệt, không cần đánh dấu schema riêng hay tệp văn bản dành cho AI để xuất hiện trong AI Overviews và AI Mode. Các thực hành SEO nền tảng vẫn áp dụng.</li><li>Trang phải được lập chỉ mục và đủ điều kiện hiển thị kèm đoạn trích. Đủ điều kiện không có nghĩa chắc chắn được hiển thị.</li><li>Lưu lượng từ các tính năng AI được tính chung vào loại tìm kiếm "Web" trong báo cáo Hiệu suất của Search Console.</li><li>Kiểm soát hiển thị bằng <code>nosnippet</code>, <code>data-nosnippet</code>, <code>max-snippet</code> hoặc <code>noindex</code>; ba cách đầu cũng làm giảm cơ hội được dùng trong câu trả lời AI.</li><li><code>Google-Extended</code> không phải một bot riêng mà là một token trong robots.txt. Nó kiểm soát việc dùng nội dung để huấn luyện các thế hệ mô hình Gemini và để làm căn cứ (grounding) trong ứng dụng Gemini, Vertex AI; nó không ảnh hưởng tới Google Search, nên chặn nó <em>không</em> đưa bạn ra khỏi AI Overviews.</li></ul>
<h4>Trình thu thập của các công ty AI</h4>
<p>Mỗi công ty công bố tên trình thu thập để chủ website cho phép hoặc chặn trong robots.txt. Ví dụ OpenAI phân biệt <code>OAI-SearchBot</code> (phục vụ tìm kiếm), <code>GPTBot</code> (thu thập để huấn luyện) và <code>ChatGPT-User</code> (truy cập theo yêu cầu người dùng; OpenAI ghi robots.txt có thể không áp dụng). Chặn <code>OAI-SearchBot</code> thì trang không được dùng trong câu trả lời tìm kiếm của ChatGPT, dù vẫn có thể hiện dưới dạng liên kết điều hướng. Lưu ý thêm: mỗi trình thu thập chỉ theo một nhóm quy tắc khớp cụ thể nhất, nên nhóm riêng cho một bot phải lặp lại các quy tắc của nhóm <code>*</code> mà bạn vẫn muốn áp dụng.</p>
<h4>llms.txt</h4>
<p>Đây là đề xuất của Jeremy Howard (9/2024) về một tệp Markdown tóm tắt nội dung website cho mô hình ngôn ngữ. Tới nay nó vẫn là đề xuất, chưa phải tiêu chuẩn, và Google nói rõ không cần tệp văn bản AI nào. Chi phí tạo thấp, nhưng đừng kỳ vọng tác động.</p>`,
          res: ['google-ai-features', 'openai-bots']
        },
        {
          title: 'Kỹ thuật tăng khả năng được trích dẫn', min: 60,
          body: `<p>Bài báo <em>GEO: Generative Engine Optimization</em> (Aggarwal và cộng sự, KDD 2024) thử nghiệm chín cách chỉnh sửa nội dung trên một bộ câu hỏi chuẩn. Kết quả:</p>
<ul><li>Ba cách hiệu quả nhất: <strong>thêm trích dẫn nguồn</strong> (Cite Sources), <strong>thêm trích lời</strong> (Quotation Addition), <strong>thêm số liệu thống kê</strong> (Statistics Addition). Mức hiển thị tăng tương đối khoảng 30 đến 40% trên thước đo Position-Adjusted Word Count của bài báo.</li><li><strong>Nhồi từ khoá</strong> cho kết quả kém hơn mức gốc.</li><li>Trang ở thứ hạng thấp hưởng lợi nhiều hơn trang ở thứ hạng cao.</li><li>Hiệu quả của từng cách thay đổi theo lĩnh vực.</li><li>Đây là thử nghiệm trên bộ câu hỏi chuẩn và công cụ của giai đoạn 2023 đến 2024: nó cho bạn <em>hướng</em>, không phải tỷ lệ chắc chắn trên AI Overviews hay ChatGPT hôm nay.</li></ul>
<h4>Thực hành tổng hợp từ nghiên cứu và hướng dẫn của ngành</h4>
<ul><li><strong>Trả lời trực tiếp:</strong> mở mỗi phần bằng câu trả lời ngắn gọn cho câu hỏi của phần đó, rồi mới triển khai. Mỗi đoạn nên tự đứng được khi bị tách khỏi trang.</li><li><strong>Cụ thể và kiểm chứng được:</strong> số liệu có nguồn, ngày cập nhật, lời trích của người có chuyên môn thật (có tên, vai trò, đã đồng ý). Tuyệt đối không bịa số liệu hay lời chứng thực.</li><li><strong>Bao phủ câu hỏi liên quan</strong> mà truy vấn con có thể sinh ra: so sánh, giá, ưu nhược, cách làm, dành cho ai.</li><li><strong>Thông tin gốc:</strong> dữ liệu riêng, nghiên cứu riêng, trải nghiệm thật.</li><li><strong>Hiện diện ngoài website:</strong> mô hình tổng hợp từ nhiều nguồn. Đánh giá trên nền tảng bên thứ ba, bài báo, diễn đàn, hồ sơ doanh nghiệp nhất quán đều ảnh hưởng tới việc thương hiệu được nhắc tới thế nào.</li><li><strong>Kỹ thuật:</strong> nội dung đọc được không cần chạy JavaScript phức tạp, không chặn nhầm trình thu thập, dữ liệu có cấu trúc đúng.</li></ul>
<p>Gần như mọi điểm trên cũng là thực hành SEO tốt. GEO phần lớn là SEO làm kỹ hơn, cộng thêm chú ý tới cấp độ đoạn văn và sự hiện diện ngoài website.</p>`,
          res: ['geo-paper', 'ahrefs-aeo', 'semrush-ai-search']
        },
        {
          title: 'Đo lường hiện diện trong câu trả lời AI', min: 40,
          body: `<p>Đo lường ở đây còn non trẻ và có giới hạn cố hữu: câu trả lời không ổn định, được cá nhân hoá, và không nền tảng nào cung cấp dữ liệu đầy đủ.</p>
<table><tr><th>Chỉ số</th><th>Cách thu</th><th>Hạn chế</th></tr>
<tr><td>Tỷ lệ được nhắc tên, được trích dẫn</td><td>Chạy định kỳ một bộ câu hỏi cố định trên các công cụ AI, ghi lại thương hiệu và nguồn xuất hiện</td><td>Kết quả dao động; cần chạy nhiều lần và nhìn xu hướng</td></tr>
<tr><td>Thị phần tiếng nói so với đối thủ</td><td>Cùng bộ câu hỏi, đếm tần suất từng thương hiệu</td><td>Phụ thuộc bộ câu hỏi bạn chọn</td></tr>
<tr><td>Lưu lượng giới thiệu từ công cụ AI</td><td>GA4, lọc nguồn giới thiệu theo tên miền của các công cụ AI (OpenAI cho biết liên kết từ ChatGPT tự gắn <code>utm_source=chatgpt.com</code>)</td><td>Nhiều lượt không truyền nguồn giới thiệu, bị tính vào direct</td></tr>
<tr><td>Hiệu quả trên Google</td><td>Search Console (gộp chung trong "Web")</td><td>Không tách riêng AI Overviews</td></tr>
<tr><td>Số lần được trích trên Bing, Copilot</td><td>Báo cáo AI Performance trong Bing Webmaster Tools (public preview từ 10/2/2026)</td><td>Là tần suất được trích, không phải thứ hạng hay lượt nhấp</td></tr>
<tr><td>Nhu cầu thương hiệu</td><td>Lượng tìm kiếm tên thương hiệu, lưu lượng trực tiếp</td><td>Chịu ảnh hưởng của nhiều yếu tố khác</td></tr></table>
<h4>Cách bắt đầu</h4>
<ol><li>Lập 30 đến 50 câu hỏi khách hàng thật sự hỏi, theo các giai đoạn hành trình.</li><li>Chạy hằng tháng trên 3 đến 4 công cụ, mỗi câu 3 lần ở phiên mới, không đăng nhập tài khoản cá nhân nếu có thể. Ghi vào bảng tính và giữ nguyên bộ câu hỏi ít nhất một quý để thấy xu hướng.</li><li>Ghi cả <em>nội dung</em> AI nói về thương hiệu: có đúng không, có lỗi thời không. Thông tin sai thường bắt nguồn từ một trang nào đó trên web mà bạn có thể sửa.</li></ol>`,
          res: ['learningaisearch', 'ahrefs-aeo']
        }
      ],
      takeaways: [
        'Công cụ AI tách câu hỏi thành truy vấn con và trích dẫn ở cấp độ đoạn văn.',
        'Lượt nhấp giảm khi có tóm tắt AI; dữ liệu tương quan cho thấy được trích dẫn giúp giảm thiệt hại nhưng không lấy lại mức cũ.',
        'Google không yêu cầu tối ưu đặc biệt nào; llms.txt vẫn chỉ là đề xuất.',
        'Trích nguồn, số liệu và lời chuyên gia là các kỹ thuật có bằng chứng; nhồi từ khoá thì không.'
      ],
      assignment: {
        title: 'Audit hiện diện AI và tối ưu một trang',
        brief: `<ol><li>Lập bộ 30 câu hỏi khách hàng của bạn có thể hỏi một trợ lý AI.</li><li>Chạy trên ít nhất ba công cụ. Ghi: thương hiệu có được nhắc không, nguồn nào được trích, đối thủ nào xuất hiện, thông tin có đúng không.</li><li>Kiểm tra robots.txt của website với các trình thu thập AI chính.</li><li>Chọn một trang quan trọng và viết lại theo các kỹ thuật đã học: câu trả lời trực tiếp ở đầu mỗi phần, số liệu có nguồn, trích lời chuyên gia, phần hỏi đáp.</li><li>Hoàn thành khoá AEO của Ahrefs.</li></ol>`,
        deliverable: 'Bảng audit 30 câu hỏi, ghi chú robots.txt và trang đã viết lại (trước và sau).'
      },
      quiz: [
        { q: 'Query fan-out là gì?', a: ['Gửi cùng một truy vấn tới nhiều công cụ', 'Tách câu hỏi của người dùng thành nhiều truy vấn con để truy xuất', 'Mở rộng từ khoá trong Google Ads', 'Kỹ thuật chặn trình thu thập'], correct: 1, why: 'Hệ thống tìm tài liệu cho từng truy vấn con rồi tổng hợp.' },
        { q: 'Theo Pew Research, người dùng nhấp vào kết quả ở bao nhiêu phần trăm lượt truy cập khi có tóm tắt AI?', a: ['Khoảng 8%, so với 15% khi không có', 'Khoảng 30%, so với 15%', 'Khoảng 50%', 'Không thay đổi'], correct: 0, why: 'Tỷ lệ nhấp vào kết quả truyền thống giảm khoảng một nửa khi trang kết quả có tóm tắt AI (người dùng Mỹ, dữ liệu tháng 3/2025).' },
        { q: 'Theo tài liệu của Google, cần gì để xuất hiện trong AI Overviews?', a: ['Tệp llms.txt', 'Schema dành riêng cho AI', 'Không cần tối ưu đặc biệt; trang cần được lập chỉ mục và đủ điều kiện hiển thị đoạn trích', 'Đăng ký chương trình đối tác'], correct: 2, why: 'Google nêu rõ không cần tệp, schema hay tối ưu đặc biệt; các thực hành SEO nền tảng vẫn áp dụng, và đủ điều kiện không có nghĩa chắc chắn được hiển thị.' },
        { q: 'Theo bài báo GEO, kỹ thuật nào KHÔNG cải thiện khả năng hiển thị?', a: ['Thêm trích dẫn nguồn', 'Thêm số liệu thống kê', 'Thêm trích lời chuyên gia', 'Nhồi từ khoá'], correct: 3, why: 'Trong thử nghiệm của bài báo, nhồi từ khoá cho kết quả kém hơn mức gốc.' },
        { q: 'Vì sao phải chạy bộ câu hỏi nhiều lần khi đo hiện diện AI?', a: ['Vì công cụ tính phí theo lượt', 'Vì câu trả lời không ổn định, cần nhìn xu hướng thay vì một lần chạy', 'Vì quy định của nền tảng', 'Để tăng thứ hạng'], correct: 1, why: 'Kết quả của mô hình tạo sinh dao động giữa các lần chạy.' }
      ],
      readings: ['ipullrank-manual', 'google-helpful-content']
    },
    {
      id: 'm6-6', hours: 7,
      title: 'Tác tử AI, tự động hoá và quản trị',
      summary: 'Từ trợ lý trả lời sang tác tử hành động: kết nối công cụ marketing, thiết kế an toàn và khung quản trị AI.',
      objectives: [
        'Phân biệt trợ lý hội thoại, quy trình tự động và tác tử AI.',
        'Giải thích Model Context Protocol và cách nó kết nối AI với nền tảng quảng cáo.',
        'Chọn tác vụ marketing phù hợp để tự động hoá.',
        'Thiết kế quyền hạn, phê duyệt và ghi nhật ký cho tác tử.',
        'Soạn chính sách sử dụng AI dựa trên các khung quản trị quốc tế.'
      ],
      lessons: [
        {
          title: 'Từ trợ lý tới tác tử', min: 40,
          body: `<table><tr><th>Hình thức</th><th>Cách hoạt động</th><th>Ví dụ marketing</th></tr>
<tr><td>Trợ lý hội thoại</td><td>Người hỏi, AI trả lời, người thực hiện</td><td>Nhờ viết biến thể quảng cáo rồi tự dán vào trình quản lý</td></tr>
<tr><td>Quy trình tự động (workflow)</td><td>Chuỗi bước cố định do người thiết kế; AI xử lý một số bước</td><td>Mỗi sáng lấy dữ liệu chi tiêu, AI viết tóm tắt, gửi vào kênh chat của đội</td></tr>
<tr><td>Tác tử (agent)</td><td>AI tự lập kế hoạch, gọi công cụ, xem kết quả và lặp lại cho tới khi đạt mục tiêu</td><td>"Tìm chiến dịch có CPA tăng trên 30% tuần này, chẩn đoán nguyên nhân và đề xuất thay đổi"</td></tr></table>
<p>Một tác tử gồm bốn phần: <strong>mô hình</strong> (suy luận), <strong>công cụ</strong> (hành động được phép), <strong>ngữ cảnh và bộ nhớ</strong> (hiểu biết về nhiệm vụ) và <strong>vòng lặp</strong> (hành động, quan sát, điều chỉnh).</p>
<p>Tự chủ càng cao thì linh hoạt càng lớn và rủi ro càng lớn. Phần lớn nhu cầu marketing hiện nay được giải quyết tốt bằng quy trình tự động có AI ở vài bước. Chỉ dùng tác tử khi nhiệm vụ thật sự cần lập kế hoạch linh hoạt.</p>`,
          res: ['dlai-agentic', 'hf-agents']
        },
        {
          title: 'Model Context Protocol và kết nối nền tảng quảng cáo', min: 50,
          body: `<p><strong>Model Context Protocol (MCP)</strong> là tiêu chuẩn mở do Anthropic công bố mã nguồn ngày 25/11/2024, quy định cách ứng dụng AI (host) kết nối với công cụ và nguồn dữ liệu bên ngoài (server). Server có thể cung cấp dữ liệu (resources), mẫu prompt (prompts) và hàm để mô hình gọi (tools). Thay vì mỗi cặp ứng dụng và công cụ cần một tích hợp riêng, công cụ chỉ cần cung cấp một <strong>máy chủ MCP</strong>, và mọi ứng dụng AI hỗ trợ MCP đều dùng được.</p>
<h4>Trong marketing</h4>
<ul><li><strong>Meta</strong> vận hành máy chủ MCP từ xa cho quảng cáo (Ads MCP server), gồm báo cáo, tạo và chỉnh sửa chiến dịch, danh mục sản phẩm, kiểm tra tín hiệu, A/B test và conversion lift, lịch sử thay đổi tài khoản. Tức là có cả quyền đọc lẫn quyền ghi.</li><li><strong>Google Ads</strong> có kho mã nguồn mở <code>googleads/google-ads-mcp</code> để bạn tự vận hành máy chủ MCP làm việc với Google Ads API; nhóm công cụ ghi có thể tắt để chạy chỉ đọc. Danh sách công cụ thay đổi theo phiên bản, hãy đọc README trước khi cài.</li><li>Nhiều công cụ phân tích, SEO, CRM cũng có máy chủ MCP.</li></ul>
<p>Điều này có nghĩa một trợ lý AI có thể truy vấn trực tiếp tài khoản quảng cáo bằng ngôn ngữ tự nhiên: "So sánh CPA theo sáng tạo 14 ngày qua và chỉ ra ba quảng cáo đang mỏi".</p>
<h4>Trước khi kết nối</h4>
<ul><li>Chỉ dùng máy chủ chính thức hoặc đã được kiểm tra. Máy chủ MCP có quyền truy cập tài khoản của bạn.</li><li>Phân biệt công cụ <em>đọc</em> và công cụ <em>ghi</em>. Một số máy chủ (như máy chủ Google Ads ở trên) cho phép tắt nhóm công cụ ghi.</li><li>Dùng tài khoản và mã truy cập có quyền tối thiểu. Đừng bấm "luôn cho phép" mọi tool ngay lần đầu.</li><li>Đặc tả MCP yêu cầu host xin đồng ý rõ ràng trước khi gọi tool, nhưng cũng nói giao thức tự nó không cưỡng chế được các nguyên tắc an toàn. Trách nhiệm nằm ở người xây và người dùng.</li></ul>`,
          res: ['mcp-docs', 'meta-ads-mcp', 'google-ads-mcp']
        },
        {
          title: 'Chọn tác vụ để tự động hoá', min: 45,
          body: `<p>Tác vụ phù hợp có bốn đặc điểm: lặp lại thường xuyên, có quy tắc tương đối rõ, có dữ liệu truy cập được, và sai sót phát hiện, sửa được.</p>
<table><tr><th>Mức rủi ro</th><th>Tác vụ</th><th>Chế độ</th></tr>
<tr><td>Thấp (chỉ đọc)</td><td>Báo cáo hằng ngày, tuần; phát hiện bất thường về chi tiêu và CPA; tổng hợp cụm từ tìm kiếm; gắn thẻ và phân loại sáng tạo; theo dõi hiện diện AI</td><td>Tự động hoàn toàn</td></tr>
<tr><td>Trung bình (đề xuất)</td><td>Đề xuất từ khoá phủ định; đề xuất điều chỉnh ngân sách; bản nháp biến thể quảng cáo; bản nháp trả lời đánh giá</td><td>AI đề xuất, người duyệt</td></tr>
<tr><td>Cao (hành động)</td><td>Thay đổi ngân sách và giá thầu; bật tắt chiến dịch; xuất bản quảng cáo; gửi email cho khách hàng</td><td>Phê duyệt từng hành động, có giới hạn cứng</td></tr></table>
<p>Lộ trình hợp lý: bắt đầu với tác vụ chỉ đọc để xây niềm tin và phát hiện lỗi, chuyển sang chế độ đề xuất, rồi mới cho phép hành động trong phạm vi hẹp.</p>
<p>Các nền tảng tự động hoá quy trình như n8n, Zapier, Make cho phép ghép nguồn dữ liệu, mô hình AI và kênh thông báo mà không cần lập trình nhiều. Google Ads scripts và API của các nền tảng là lựa chọn cho đội có kỹ năng kỹ thuật.</p>`,
          res: ['n8n-courses', 'kaggle-agents']
        },
        {
          title: 'Thiết kế an toàn', min: 50,
          body: `<ul><li><strong>Quyền tối thiểu:</strong> tác tử chỉ có đúng quyền cần cho nhiệm vụ. Tác tử báo cáo không cần quyền chỉnh sửa.</li><li><strong>Phê duyệt của con người</strong> cho mọi hành động tiêu tiền, gửi ra ngoài, hoặc khó đảo ngược.</li><li><strong>Giới hạn cứng</strong> đặt ở phía hệ thống, không chỉ trong lời dặn: trần ngân sách ngày ở cấp tài khoản, mức thay đổi tối đa mỗi lần, danh sách chiến dịch được phép chạm vào.</li><li><strong>Nhật ký:</strong> ghi lại tác tử đã đọc gì, quyết định gì, làm gì, để kiểm tra và truy vết.</li><li><strong>Kiểm thử:</strong> chạy trên tài khoản thử hoặc ở chế độ chỉ đề xuất trong vài tuần, so quyết định của tác tử với quyết định của người.</li><li><strong>Nút dừng:</strong> cách tắt nhanh và quy trình khôi phục.</li></ul>
<h4>Tấn công chèn lệnh (prompt injection)</h4>
<p>Khi tác tử đọc nội dung từ bên ngoài (trang web, email, bình luận, đánh giá), nội dung đó có thể chứa chỉ dẫn ẩn nhằm điều khiển tác tử. OWASP xếp prompt injection là rủi ro số một (LLM01:2025) trong Top 10 cho ứng dụng LLM, và lưu ý chưa rõ có cách phòng tuyệt đối nào. Nguyên tắc: nội dung do công cụ trả về là <em>dữ liệu</em>, không phải <em>mệnh lệnh</em>. Tác tử có quyền hành động không nên tự động thực thi chỉ dẫn tìm thấy trong nội dung nó đọc, và thiết kế phải giả định có lúc chèn lệnh thành công: hành động không được phép thì không cấp công cụ, thay vì cấp rồi dặn "đừng dùng".</p>
<h4>Trách nhiệm</h4>
<p>Tác tử không chịu trách nhiệm. Mỗi quy trình tự động cần một người có tên cụ thể chịu trách nhiệm về kết quả.</p>`,
          res: ['mcp-docs', 'ms-agents-beginners', 'nist-ai-rmf']
        },
        {
          title: 'Khung quản trị và chính sách AI nội bộ', min: 50,
          body: `<h4>Các khung tham chiếu quốc tế</h4>
<table><tr><th>Khung</th><th>Nơi ban hành</th><th>Nội dung chính</th></tr>
<tr><td>Đạo luật AI</td><td>EU</td><td>Tiếp cận theo mức rủi ro: bị cấm, rủi ro cao, nghĩa vụ minh bạch, rủi ro tối thiểu. Có hiệu lực 1/8/2024, áp dụng theo giai đoạn: lệnh cấm và yêu cầu hiểu biết AI từ 2/2/2025, quy tắc cho mô hình AI đa dụng từ 2/8/2025, nghĩa vụ minh bạch Điều 50 từ 2/8/2026 (đánh dấu máy đọc được cho hệ thống đã ra thị trường trước đó: hạn 2/12/2026). Sau gói sửa đổi Digital Omnibus (đăng Công báo EU 24/7/2026), nghĩa vụ với hệ thống rủi ro cao lùi tới 2/12/2027 (Phụ lục III) và 2/8/2028 (Phụ lục I)</td></tr>
<tr><td>AI Risk Management Framework 1.0 (26/1/2023) và hồ sơ cho AI tạo sinh NIST AI 600-1 (26/7/2024)</td><td>NIST, Mỹ</td><td>Tự nguyện. Bốn chức năng: Govern, Map, Measure, Manage. Khung 1.0 đang được sửa đổi</td></tr>
<tr><td>Model AI Governance Framework for Generative AI (30/5/2024) và for Agentic AI (22/1/2026)</td><td>IMDA và AI Verify Foundation, Singapore</td><td>Khung cho AI tạo sinh có chín chiều, gồm trách nhiệm giải trình, dữ liệu, báo cáo sự cố, kiểm thử, bảo mật, nguồn gốc nội dung. Khung cho tác tử nhấn mạnh khoanh vùng rủi ro từ đầu và con người chịu trách nhiệm thực chất</td></tr>
<tr><td>Hướng dẫn về AI và bảo vệ dữ liệu</td><td>ICO, Anh</td><td>Áp dụng nguyên tắc bảo vệ dữ liệu cho hệ thống AI: cơ sở pháp lý, minh bạch, công bằng (cập nhật lần cuối 15/3/2023, đang được ICO rà soát do thay đổi từ Data (Use and Access) Act)</td></tr>
<tr><td>Luật Trí tuệ nhân tạo</td><td>Việt Nam</td><td>Quốc hội thông qua 10/12/2025, hiệu lực từ 1/3/2026, 8 chương 35 điều, tiếp cận theo mức rủi ro; nghĩa vụ chi tiết hướng dẫn bằng văn bản dưới luật</td></tr></table>
<h4>Chính sách AI nội bộ cho đội marketing</h4>
<ol><li><strong>Công cụ được phê duyệt</strong> và quy trình đề xuất công cụ mới.</li><li><strong>Phân loại dữ liệu:</strong> loại nào được đưa vào công cụ nào. Dữ liệu cá nhân khách hàng có quy tắc riêng.</li><li><strong>Kiểm duyệt:</strong> nội dung nào cần người duyệt trước khi xuất bản, theo bảng kiểm nào.</li><li><strong>Minh bạch:</strong> khi nào cho khách hàng biết họ đang tương tác với AI, khi nào gắn nhãn nội dung.</li><li><strong>Tự động hoá:</strong> hành động nào cần phê duyệt, giới hạn nào áp dụng.</li><li><strong>Trách nhiệm:</strong> ai chịu trách nhiệm cho từng quy trình, ai xử lý sự cố.</li><li><strong>Đào tạo và rà soát</strong> định kỳ.</li></ol>
<p>Chính sách tốt ngắn gọn, cụ thể, và được rà soát định kỳ (ví dụ sáu tháng một lần) hoặc ngay khi luật thay đổi. Đây là kiến thức định hướng, không phải tư vấn pháp lý.</p>`,
          res: ['eu-ai-act', 'imda-genai', 'ico-ai']
        }
      ],
      takeaways: [
        'Phần lớn nhu cầu marketing giải quyết được bằng quy trình tự động; tác tử dành cho việc cần linh hoạt.',
        'MCP cho phép trợ lý AI làm việc trực tiếp với tài khoản quảng cáo, nên quyền hạn phải được kiểm soát chặt.',
        'Bắt đầu chỉ đọc, rồi đề xuất, rồi mới hành động trong phạm vi hẹp.',
        'Nội dung tác tử đọc được là dữ liệu, không phải mệnh lệnh. Con người luôn chịu trách nhiệm.'
      ],
      assignment: {
        title: 'Thiết kế một quy trình tự động và chính sách AI',
        brief: `<ol><li>Chọn một tác vụ chỉ đọc lặp lại hằng tuần (ví dụ báo cáo hiệu suất hoặc phát hiện bất thường). Vẽ sơ đồ quy trình: nguồn dữ liệu, bước AI xử lý, đầu ra, người nhận.</li><li>Viết prompt cho bước AI, kèm định dạng đầu ra cố định.</li><li>Xây nguyên mẫu bằng công cụ bạn có (trợ lý AI với tệp dữ liệu xuất, hoặc nền tảng tự động hoá). Chạy thử ba tuần liên tiếp và so với báo cáo làm tay.</li><li>Lập bảng quyền hạn và phê duyệt nếu quy trình này được nâng lên chế độ đề xuất và hành động.</li><li>Soạn chính sách AI nội bộ hai trang theo bảy mục đã học.</li></ol>`,
        deliverable: 'Sơ đồ quy trình, prompt, kết quả chạy thử, bảng quyền hạn và chính sách AI.'
      },
      quiz: [
        { q: 'Điểm khác biệt giữa tác tử AI và quy trình tự động là gì?', a: ['Tác tử rẻ hơn', 'Tác tử tự lập kế hoạch và chọn hành động trong vòng lặp; quy trình đi theo các bước cố định', 'Quy trình không dùng AI', 'Tác tử không cần công cụ'], correct: 1, why: 'Mức tự chủ trong việc quyết định bước tiếp theo là khác biệt cốt lõi.' },
        { q: 'Model Context Protocol giải quyết vấn đề gì?', a: ['Tăng tốc độ mô hình', 'Chuẩn hoá cách ứng dụng AI kết nối với công cụ và dữ liệu bên ngoài', 'Mã hoá dữ liệu quảng cáo', 'Thay thế API của nền tảng'], correct: 1, why: 'MCP là giao thức chung giữa ứng dụng AI và các công cụ.' },
        { q: 'Tác vụ nào nên tự động hoá đầu tiên?', a: ['Tự động tăng ngân sách chiến dịch', 'Báo cáo hằng ngày và phát hiện bất thường (chỉ đọc)', 'Tự động gửi email khuyến mãi', 'Tự động xuất bản quảng cáo mới'], correct: 1, why: 'Tác vụ chỉ đọc có rủi ro thấp và giúp xây niềm tin vào hệ thống.' },
        { q: 'Nguyên tắc nào chống lại tấn công chèn lệnh?', a: ['Dùng mô hình lớn hơn', 'Coi nội dung công cụ trả về là dữ liệu, không tự động thực thi chỉ dẫn trong đó', 'Tắt nhật ký', 'Cho tác tử toàn quyền để nó tự xử lý'], correct: 1, why: 'Chỉ dẫn hợp lệ đến từ người dùng, không đến từ nội dung tác tử đọc được.' },
        { q: 'Bốn chức năng của khung NIST AI RMF là gì?', a: ['Plan, Do, Check, Act', 'Govern, Map, Measure, Manage', 'Build, Test, Deploy, Monitor', 'Identify, Protect, Detect, Respond'], correct: 1, why: 'NIST AI RMF tổ chức quản trị rủi ro AI theo bốn chức năng này.' }
      ],
      readings: ['anthropic-mcp-course', 'stanford-ai-index']
    }
  ]
});
