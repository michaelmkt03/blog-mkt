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
<p>Hai loại này bổ trợ nhau. Một chiến dịch Performance Max dùng AI dự đoán để chọn lượt đấu giá và AI tạo sinh để tạo biến thể thành phần quảng cáo.</p>
<p>Huang và Rust (Journal of the Academy of Marketing Science, 2021) đề xuất nhìn AI theo ba tầng: <strong>cơ học</strong> (tự động hoá việc lặp lại), <strong>tư duy</strong> (xử lý dữ liệu để ra quyết định) và <strong>cảm xúc</strong> (tương tác, thấu hiểu con người). Ba tầng này tương ứng với ba giai đoạn của marketing: nghiên cứu, chiến lược và hành động.</p>`,
          res: ['dlai-genai-everyone', 'huang-rust']
        },
        {
          title: 'Mô hình ngôn ngữ lớn hoạt động thế nào', min: 55,
          body: `<p>Mô hình ngôn ngữ lớn (LLM) được huấn luyện trên lượng văn bản khổng lồ để dự đoán phần tiếp theo của một chuỗi. Vài khái niệm cần nắm:</p>
<ul><li><strong>Token:</strong> đơn vị văn bản mô hình xử lý, cỡ một từ hoặc một phần của từ. Chi phí và giới hạn được tính theo token.</li><li><strong>Cửa sổ ngữ cảnh:</strong> lượng thông tin mô hình "nhìn thấy" trong một lần làm việc, gồm chỉ dẫn, tài liệu bạn đưa vào và hội thoại. Thứ gì không nằm trong ngữ cảnh hoặc dữ liệu huấn luyện thì mô hình không biết.</li><li><strong>Mốc kiến thức:</strong> dữ liệu huấn luyện dừng ở một thời điểm. Muốn thông tin mới hơn, mô hình cần công cụ tìm kiếm hoặc tài liệu bạn cung cấp.</li><li><strong>Ảo giác (hallucination):</strong> mô hình có thể tạo ra thông tin nghe hợp lý nhưng sai, nhất là con số, trích dẫn, tên riêng. Nguyên nhân là mô hình tạo văn bản theo xác suất, không tra cứu cơ sở dữ liệu sự thật.</li><li><strong>Đa phương thức:</strong> nhiều mô hình hiện đọc được ảnh, tệp, bảng tính, âm thanh.</li><li><strong>Công cụ:</strong> mô hình có thể gọi tìm kiếm web, chạy mã, truy vấn hệ thống khác. Đây là nền tảng của tác tử AI (module 6.6).</li></ul>
<p>Hệ quả thực hành: chất lượng đầu ra phụ thuộc vào ngữ cảnh bạn cung cấp, và mọi dữ kiện quan trọng phải được kiểm chứng.</p>`,
          res: ['dlai-genai-everyone', 'elements-of-ai', 'google-skills-genai']
        },
        {
          title: 'Bằng chứng về năng suất và "đường biên răng cưa"', min: 50,
          body: `<p>Ba nghiên cứu thực nghiệm được trích dẫn nhiều nhất:</p>
<ul><li><strong>Noy và Zhang (Science, 2023):</strong> 453 chuyên viên làm bài viết nghề nghiệp. Nhóm dùng ChatGPT giảm khoảng 40% thời gian và tăng khoảng 18% chất lượng.</li><li><strong>Brynjolfsson, Li và Raymond (Quarterly Journal of Economics, 2025):</strong> trợ lý AI cho nhân viên hỗ trợ khách hàng làm năng suất tăng trung bình khoảng 14 đến 15%, tăng mạnh nhất ở người mới và người có kỹ năng thấp hơn.</li><li><strong>Dell'Acqua và cộng sự (Harvard Business School cùng BCG):</strong> 758 tư vấn viên. Với các tác vụ nằm trong khả năng của AI, nhóm dùng AI hoàn thành nhiều hơn 12,2% số việc, nhanh hơn 25,1% và chất lượng cao hơn rõ rệt. Với một tác vụ nằm ngoài khả năng của AI, nhóm dùng AI lại làm <em>kém hơn</em> nhóm không dùng.</li></ul>
<p>Nhóm tác giả gọi ranh giới này là <strong>"jagged technological frontier"</strong>: đường biên năng lực của AI lởm chởm và khó đoán. Hai việc trông khó ngang nhau có thể nằm ở hai phía của đường biên.</p>
<h4>Bài học</h4>
<ul><li>Lợi ích lớn và có thật, đặc biệt với công việc viết, tóm tắt, lên ý tưởng.</li><li>Rủi ro lớn nhất là tin tưởng mù quáng ở vùng AI làm kém.</li><li>Phải tự thử để biết đường biên nằm ở đâu với công việc của chính bạn.</li></ul>`,
          res: ['jagged-frontier', 'noy-zhang', 'brynjolfsson-genai-work']
        },
        {
          title: 'Khung năng lực AI Fluency', min: 45,
          body: `<p>Khoá <em>AI Fluency: Framework and Foundations</em> của Anthropic, phát triển cùng các giáo sư tại University College Cork và Ringling College, tổ chức năng lực làm việc với AI thành bốn chữ D:</p>
<table><tr><th>Năng lực</th><th>Câu hỏi</th><th>Trong marketing</th></tr>
<tr><td><strong>Delegation</strong> (giao việc)</td><td>Việc nào nên giao cho AI, việc nào giữ lại, việc nào làm cùng?</td><td>Giao tạo biến thể tiêu đề; giữ lại quyết định định vị</td></tr>
<tr><td><strong>Description</strong> (mô tả)</td><td>Tôi đã truyền đạt đủ mục tiêu, ngữ cảnh, tiêu chuẩn chưa?</td><td>Đưa persona, giọng thương hiệu, ví dụ mẫu vào prompt</td></tr>
<tr><td><strong>Discernment</strong> (thẩm định)</td><td>Đầu ra có đúng, hay, phù hợp không?</td><td>Kiểm tra dữ kiện, giọng văn, tuân thủ chính sách quảng cáo</td></tr>
<tr><td><strong>Diligence</strong> (trách nhiệm)</td><td>Tôi có chịu trách nhiệm và minh bạch về việc dùng AI không?</td><td>Bảo vệ dữ liệu khách hàng, gắn nhãn nội dung AI khi cần</td></tr></table>
<p>Khung này hữu ích vì nó không phụ thuộc công cụ. Công cụ thay đổi mỗi vài tháng; bốn năng lực này thì không.</p>
<p>Ethan Mollick (Wharton) đưa ra lời khuyên thực hành tương tự: luôn mời AI vào việc để hiểu nó làm được gì, giữ con người trong vòng kiểm soát, và coi AI như một cộng sự cần được hướng dẫn rõ.</p>`,
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
        { q: 'Nghiên cứu "jagged frontier" tìm thấy gì với tác vụ nằm ngoài khả năng của AI?', a: ['Nhóm dùng AI vẫn tốt hơn', 'Nhóm dùng AI làm kém hơn nhóm không dùng', 'Không có khác biệt', 'AI từ chối làm'], correct: 1, why: 'Dựa vào AI ở vùng nó làm kém khiến kết quả tệ đi.' },
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
<p>Tài liệu hướng dẫn prompt của các nhà phát triển mô hình đều thống nhất: rõ ràng và trực tiếp, giải thích lý do của yêu cầu, và cho ví dụ là ba đòn bẩy mạnh nhất.</p>`,
          res: ['anthropic-prompt-docs', 'google-prompting-essentials']
        },
        {
          title: 'Kỹ thuật nâng cao', min: 55,
          body: `<ul><li><strong>Ví dụ mẫu (few-shot):</strong> đưa 2 đến 5 cặp đầu vào và đầu ra mẫu. Mô hình bắt chước mẫu rất sát, nên ví dụ cần đa dạng để tránh đầu ra rập khuôn.</li><li><strong>Cho mô hình suy nghĩ:</strong> yêu cầu phân tích từng bước trước khi kết luận, đặc biệt với bài toán có nhiều điều kiện.</li><li><strong>Chuỗi prompt:</strong> tách việc lớn thành các bước, đầu ra bước trước là đầu vào bước sau. Ví dụ: tóm tắt nghiên cứu → rút insight → đề xuất góc tiếp cận → viết quảng cáo → tự kiểm tra theo chính sách.</li><li><strong>Phân tách bằng thẻ hoặc tiêu đề:</strong> tách rõ chỉ dẫn, tài liệu tham khảo và ví dụ để mô hình không lẫn.</li><li><strong>Mời mô hình hỏi lại:</strong> "Trước khi viết, hãy hỏi tôi những gì bạn cần biết thêm."</li><li><strong>Yêu cầu tự phê bình:</strong> "Chỉ ra ba điểm yếu của bản nháp này rồi viết lại."</li><li><strong>Lặp:</strong> phản hồi cụ thể vào bản nháp hiệu quả hơn là viết lại prompt từ đầu.</li></ul>
<p>Jules White (Đại học Vanderbilt) hệ thống hoá các mẫu này thành "prompt patterns" trong khoá Prompt Engineering for ChatGPT. Thư viện prompt của Ethan và Lilach Mollick cung cấp nhiều mẫu dùng ngay, phát hành theo giấy phép mở.</p>`,
          res: ['vanderbilt-prompt', 'mollick-prompts', 'dlai-prompting-everyone']
        },
        {
          title: 'Ngữ cảnh thương hiệu dùng lại được', min: 45,
          body: `<p>Đầu ra chung chung gần như luôn do thiếu ngữ cảnh. Hãy xây một <strong>bộ ngữ cảnh thương hiệu</strong> để dùng lại trong mọi tác vụ:</p>
<ul><li><strong>Hồ sơ thương hiệu:</strong> định vị, đề xuất giá trị, bảng thông điệp ba tầng (module 1.3).</li><li><strong>Hướng dẫn giọng văn:</strong> tính cách, nên và không nên, từ ngữ ưa dùng và từ cấm, 5 đến 10 đoạn văn mẫu tốt nhất.</li><li><strong>Chân dung khách hàng</strong> và câu JTBD, kèm ngôn ngữ thật trích từ đánh giá.</li><li><strong>Dữ kiện sản phẩm đã xác minh:</strong> thông số, giá, chính sách. Ghi rõ AI chỉ được dùng dữ kiện trong danh sách này.</li><li><strong>Quy tắc tuân thủ:</strong> chính sách quảng cáo của nền tảng, tuyên bố không được phép.</li></ul>
<p>Hầu hết công cụ AI hiện có tính năng lưu ngữ cảnh lâu dài (dự án, chỉ dẫn tuỳ chỉnh, trợ lý tuỳ biến). Đặt bộ ngữ cảnh ở đó để cả đội dùng chung và kết quả nhất quán.</p>
<p>Khi tài liệu quá lớn, hệ thống dùng kỹ thuật <strong>RAG</strong> (retrieval-augmented generation): tìm đoạn liên quan trong kho tài liệu rồi đưa vào ngữ cảnh. Chất lượng câu trả lời khi đó phụ thuộc vào chất lượng kho tài liệu.</p>`,
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
<p>Với tác vụ lặp lại, lập <strong>bộ kiểm thử</strong>: 10 đến 20 đầu vào tiêu biểu kèm tiêu chí chấm. Mỗi khi đổi prompt hoặc đổi mô hình, chạy lại và so sánh. Đây là cách duy nhất để biết một thay đổi là cải thiện thật.</p>
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
<p>Giá thầu tự động nhân các dự đoán này với mục tiêu của bạn để ra giá cho từng lượt đấu giá. Đây là lý do nó vượt trội so với đặt giá thủ công: con người không thể định giá riêng cho hàng triệu tình huống.</p>
<p>Các chiến dịch "AI" thế hệ mới mở rộng tự động hoá sang những phần trước đây do người quyết định: chọn đối tượng, chọn vị trí, khớp truy vấn, ghép và tạo sáng tạo, chọn trang đích, phân bổ ngân sách.</p>
<p>Mô hình học từ kết quả. Nó tốt đúng bằng mức dữ liệu kết quả bạn cung cấp phản ánh giá trị kinh doanh thật.</p>`,
          res: ['google-smart-bidding', 'google-ai-perf-cert']
        },
        {
          title: 'Bản đồ các sản phẩm tự động hoá', min: 50,
          body: `<table><tr><th>Sản phẩm</th><th>Tự động hoá</th><th>Rào chắn chính</th></tr>
<tr><td>Google Performance Max</td><td>Kênh, đối tượng, giá thầu, ghép thành phần, có thể tạo thành phần</td><td>Loại trừ thương hiệu, từ khoá phủ định, loại trừ vị trí, quy tắc URL, tín hiệu đối tượng</td></tr>
<tr><td>Google AI Max for Search</td><td>Mở rộng khớp truy vấn ngoài từ khoá, tuỳ biến văn bản quảng cáo, chọn URL đích</td><td>Bật tắt từng tính năng, loại trừ URL, giới hạn thương hiệu và địa điểm</td></tr>
<tr><td>Meta Advantage+</td><td>Đối tượng, vị trí, ngân sách giữa các sáng tạo, biến thể sáng tạo</td><td>Giới hạn địa lý và tuổi, định nghĩa khách hàng hiện tại, bật tắt từng cải tiến sáng tạo</td></tr>
<tr><td>TikTok Smart+</td><td>Đối tượng, sáng tạo, ngân sách</td><td>Mục tiêu, ngân sách, bộ sáng tạo đầu vào</td></tr></table>
<p>Tên và tính năng của các sản phẩm này thay đổi thường xuyên. Chứng chỉ <em>AI-Powered Performance Ads</em> trên Google Skillshop và các khoá về công cụ AI trên Meta Blueprint được cập nhật theo sản phẩm, nên là nguồn tốt nhất cho chi tiết hiện hành.</p>
<p>Điểm chung: nền tảng muốn bạn cung cấp <strong>mục tiêu, ngân sách, tín hiệu và nguyên liệu sáng tạo</strong>, phần còn lại để hệ thống quyết định.</p>`,
          res: ['google-ai-perf-cert', 'google-ai-max', 'meta-ai-creative-tools']
        },
        {
          title: 'Năm nhóm đầu vào bạn còn kiểm soát', min: 50,
          body: `<ol><li><strong>Tín hiệu chuyển đổi.</strong> Sự kiện nào, có giá trị kèm theo không, có đầy đủ không (kênh máy chủ, enhanced conversions), có phản ánh chất lượng thật không (lead đủ điều kiện, đơn không hoàn).</li><li><strong>Mục tiêu và giá trị.</strong> Mục tiêu CPA hoặc ROAS, và giá trị gán cho mỗi loại chuyển đổi. Giá trị theo <em>lợi nhuận</em> hoặc <em>LTV dự báo</em> định hướng hệ thống tốt hơn doanh thu thô.</li><li><strong>Dữ liệu bên thứ nhất.</strong> Danh sách khách hàng để loại trừ, để định nghĩa khách mới, và làm tín hiệu đối tượng.</li><li><strong>Sáng tạo và nguồn cấp.</strong> Số lượng, độ đa dạng góc tiếp cận, chất lượng. Với thương mại điện tử, chất lượng nguồn cấp sản phẩm quan trọng ngang sáng tạo.</li><li><strong>Rào chắn và cấu trúc.</strong> Loại trừ, giới hạn, cách tách chiến dịch theo biên lợi nhuận hoặc mục tiêu.</li></ol>
<h4>Giá thầu theo giá trị</h4>
<div class="formula">Mức 1: tối ưu theo số chuyển đổi → Mức 2: theo doanh thu → Mức 3: theo lợi nhuận gộp → Mức 4: theo LTV dự báo</div>
<p>Mỗi bước lên đưa mục tiêu của thuật toán gần hơn với mục tiêu kinh doanh. Điều kiện là dữ liệu giá trị đủ chính xác và đủ nhiều.</p>`,
          res: ['google-enhanced-conv', 'meta-capi-docs', 'google-pltv-paper']
        },
        {
          title: 'Kiểm chứng hộp đen', min: 45,
          body: `<p>Tự động hoá cao làm giảm khả năng quan sát. Hai rủi ro chính:</p>
<ul><li><strong>Ghi công quá mức:</strong> hệ thống được thưởng theo chuyển đổi được phân bổ, nên có động lực tìm người sắp mua sẵn: khách cũ, người tìm tên thương hiệu, người đã ở trong giỏ hàng.</li><li><strong>Mất insight:</strong> bạn không còn biết truy vấn nào, đối tượng nào, vị trí nào tạo ra kết quả.</li></ul>
<h4>Công cụ kiểm chứng</h4>
<ul><li><strong>Thử nghiệm trên nền tảng:</strong> tính năng Experiments của Google Ads, A/B test và conversion lift của Meta.</li><li><strong>Thử nghiệm địa lý</strong> cho câu hỏi lớn: chiến dịch AI có tạo doanh thu tăng thêm so với cấu trúc cũ không (module 5.5).</li><li><strong>Báo cáo phân tách:</strong> tỷ lệ khách mới so với khách cũ, tỷ trọng truy vấn thương hiệu, phân bổ theo kênh trong Performance Max.</li><li><strong>Chỉ số kinh doanh:</strong> MER, số khách mới, lợi nhuận đóng góp. Nếu ROAS nền tảng tăng mà các số này không đổi, hệ thống đang lấy công chứ không tạo thêm giá trị.</li></ul>
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
<ul><li>Một nghiên cứu của nhóm tác giả tại NYU và Emory (Lee, Todri, Adamopoulos, Ghose) về AI tạo hình ảnh trong quảng cáo ghi nhận: quảng cáo được tạo hoàn toàn bằng AI có tỷ lệ nhấp cao hơn tới khoảng 19% trong thử nghiệm của họ. Tuy nhiên <strong>khi công bố cho người xem rằng quảng cáo do AI tạo, hiệu quả giảm tới khoảng 31,5%</strong>.</li><li>Nghiên cứu "jagged frontier" ở module 6.1 cho thấy đầu ra của nhóm dùng AI có chất lượng trung bình cao hơn nhưng <strong>ít đa dạng hơn</strong>: các ý tưởng có xu hướng giống nhau.</li></ul>
<h4>Hàm ý</h4>
<ul><li>AI có thể tạo sáng tạo cạnh tranh được về chỉ số nhấp, ít nhất trong một số bối cảnh.</li><li>Người xem có thể phản ứng tiêu cực khi biết nội dung do AI tạo. Yêu cầu gắn nhãn ngày càng phổ biến, nên đây là yếu tố cần tính tới.</li><li>Nếu mọi thương hiệu dùng cùng công cụ với cùng kiểu yêu cầu, quảng cáo sẽ giống nhau. Ngữ cảnh thương hiệu và insight riêng là thứ tạo khác biệt.</li><li>Hãy tự thử nghiệm trên đối tượng của bạn thay vì dựa vào kết quả tổng quát.</li></ul>`,
          res: ['lee-genai-ads', 'jagged-frontier']
        },
        {
          title: 'Bản quyền và quyền hình ảnh', min: 50,
          body: `<p>Khung pháp lý đang hình thành và khác nhau giữa các nước. Một số mốc tham chiếu:</p>
<ul><li><strong>Cục Bản quyền Hoa Kỳ</strong>, báo cáo <em>Copyright and Artificial Intelligence</em> phần 2 (tháng 1 năm 2025): tác phẩm chỉ được bảo hộ khi có đủ đóng góp sáng tạo của con người. Nội dung do AI tạo hoàn toàn không được bảo hộ, và chỉ riêng việc viết prompt thường chưa đủ. Phần do con người sáng tạo, sắp xếp, chỉnh sửa đáng kể thì có thể được bảo hộ.</li><li>Phần 1 của báo cáo bàn về <strong>bản sao số</strong> (giọng nói, hình ảnh của người thật). Phần 3 về việc dùng tác phẩm có bản quyền để huấn luyện mô hình vẫn đang tranh luận.</li></ul>
<h4>Hệ quả thực hành cho marketer</h4>
<ul><li>Tài sản thương hiệu quan trọng (logo, nhân vật, hình ảnh chủ đạo) do AI tạo hoàn toàn có thể không bảo hộ được. Hãy để con người đóng góp sáng tạo đáng kể và lưu lại quá trình.</li><li>Không dùng AI để bắt chước phong cách nghệ sĩ còn sống, nhân vật, thương hiệu của bên khác.</li><li>Không tạo hình ảnh hoặc giọng nói của người thật khi chưa có sự đồng ý bằng văn bản.</li><li>Đọc điều khoản công cụ: ai sở hữu đầu ra, có cam kết bồi thường khi bị kiện vi phạm không.</li></ul>
<div class="callout"><b>Lưu ý:</b> đây là kiến thức định hướng, không phải tư vấn pháp lý. Với chiến dịch lớn, hãy tham vấn luật sư ở thị trường liên quan.</div>`,
          res: ['usco-ai']
        },
        {
          title: 'Gắn nhãn và minh bạch', min: 45,
          body: `<h4>Pháp luật</h4>
<ul><li><strong>Đạo luật AI của EU</strong>, Điều 50: nghĩa vụ minh bạch, gồm việc cho người dùng biết khi họ tương tác với hệ thống AI và đánh dấu nội dung tổng hợp, gắn nhãn deepfake. Các nghĩa vụ này bắt đầu áp dụng từ ngày 2 tháng 8 năm 2026.</li><li><strong>Mỹ:</strong> Uỷ ban Thương mại Liên bang áp dụng quy định hiện hành về quảng cáo gây hiểu nhầm cho nội dung AI: đánh giá giả, chứng thực giả, tuyên bố sai về năng lực AI đều bị xử lý.</li></ul>
<h4>Nền tảng</h4>
<ul><li><strong>Google Ads</strong> cập nhật yêu cầu gắn nhãn AI vào tháng 7 năm 2026: nhà quảng cáo có thể gắn nhãn quảng cáo hình ảnh, video do AI tạo, và Google tự gắn nhãn một số thành phần tạo bằng công cụ AI của chính Google. Quảng cáo bầu cử có nội dung tổng hợp có yêu cầu công bố riêng.</li><li><strong>Meta</strong> hiển thị nhãn thông tin AI cho nội dung được phát hiện hoặc được khai báo là do AI tạo hay chỉnh sửa đáng kể.</li><li><strong>TikTok</strong> yêu cầu gắn nhãn nội dung AI chân thực và có công cụ gắn nhãn cho nhà sáng tạo.</li></ul>
<p>Tiêu chuẩn kỹ thuật <strong>Content Credentials</strong> (C2PA) gắn siêu dữ liệu nguồn gốc vào tệp. Nhiều công cụ tạo ảnh và nền tảng đã hỗ trợ.</p>
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
        'Công bố nội dung do AI tạo có thể làm giảm hiệu quả, nên cần tự thử nghiệm.',
        'Nội dung do AI tạo hoàn toàn có thể không được bảo hộ bản quyền.',
        'Yêu cầu gắn nhãn đến từ cả pháp luật lẫn nền tảng và thay đổi nhanh.'
      ],
      assignment: {
        title: 'Quy tắc sáng tạo AI và thử nghiệm so sánh',
        brief: `<ol><li>Soạn bộ quy tắc dùng AI cho sáng tạo của thương hiệu bạn, tối đa hai trang, gồm sáu phần đã học.</li><li>Tạo 6 biến thể quảng cáo ảnh tĩnh cho cùng một góc tiếp cận: 3 bằng quy trình thông thường, 3 có AI hỗ trợ. Chạy từng biến thể qua bảng kiểm duyệt.</li><li>Tra chính sách gắn nhãn AI hiện hành của hai nền tảng bạn dùng nhiều nhất và tóm tắt trong nửa trang.</li><li>Thiết kế thử nghiệm so sánh hiệu quả hai nhóm biến thể.</li></ol>`,
        deliverable: 'Bộ quy tắc, 6 biến thể kèm kết quả kiểm duyệt, bản tóm tắt chính sách và thiết kế thử nghiệm.'
      },
      quiz: [
        { q: 'Theo báo cáo của Cục Bản quyền Hoa Kỳ, nội dung do AI tạo hoàn toàn có được bảo hộ bản quyền không?', a: ['Có, thuộc về người viết prompt', 'Không, cần đủ đóng góp sáng tạo của con người', 'Có, thuộc về nhà cung cấp AI', 'Chỉ khi đăng ký trong 30 ngày'], correct: 1, why: 'Bảo hộ đòi hỏi tác giả là con người với đóng góp sáng tạo đủ lớn.' },
        { q: 'Nghiên cứu của Lee và cộng sự ghi nhận điều gì khi công bố rằng quảng cáo do AI tạo?', a: ['Hiệu quả tăng', 'Hiệu quả giảm đáng kể', 'Không thay đổi', 'CPM giảm'], correct: 1, why: 'Việc công bố AI làm giảm hiệu quả tới khoảng 31,5% trong nghiên cứu này.' },
        { q: 'Điều 50 của Đạo luật AI EU quy định về gì?', a: ['Cấm mọi quảng cáo dùng AI', 'Nghĩa vụ minh bạch, gồm đánh dấu nội dung tổng hợp và deepfake', 'Thuế đối với công cụ AI', 'Giới hạn ngân sách quảng cáo'], correct: 1, why: 'Điều 50 đặt các nghĩa vụ minh bạch, áp dụng từ tháng 8 năm 2026.' },
        { q: 'Việc nào bị cấm trong mọi bộ quy tắc dùng AI hợp lý?', a: ['Tạo biến thể kích thước ảnh', 'Tạo lời chứng thực của khách hàng không có thật', 'Sinh ý tưởng tiêu đề', 'Dịch quảng cáo sang ngôn ngữ khác'], correct: 1, why: 'Chứng thực giả là quảng cáo gây hiểu nhầm, vi phạm pháp luật ở hầu hết thị trường.' },
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
          body: `<p>Các sản phẩm như AI Overviews và AI Mode của Google, ChatGPT có tìm kiếm, Perplexity, Copilot hoạt động theo cùng một mô hình chung:</p>
<ol><li><strong>Hiểu câu hỏi</strong> và tách thành nhiều truy vấn con liên quan. Kỹ thuật này thường được gọi là <em>query fan-out</em>.</li><li><strong>Truy xuất:</strong> tìm tài liệu cho từng truy vấn con từ chỉ mục tìm kiếm.</li><li><strong>Chọn đoạn:</strong> lấy những đoạn văn trả lời trực tiếp nhất.</li><li><strong>Tổng hợp:</strong> mô hình ngôn ngữ viết câu trả lời dựa trên các đoạn đó.</li><li><strong>Trích nguồn:</strong> gắn liên kết tới tài liệu đã dùng.</li></ol>
<h4>Khác biệt so với tìm kiếm truyền thống</h4>
<ul><li>Đơn vị cạnh tranh là <strong>đoạn văn</strong>, không chỉ là trang. Một trang xếp hạng thấp vẫn có thể được trích nếu có đoạn trả lời tốt nhất cho một truy vấn con.</li><li>Câu hỏi dài hơn, mang tính hội thoại, nhiều điều kiện hơn.</li><li>Kết quả không ổn định: cùng câu hỏi có thể cho câu trả lời và nguồn khác nhau giữa các lần.</li><li>Thương hiệu có thể được <strong>nhắc tên</strong> mà không có liên kết.</li></ul>
<p>Thuật ngữ: <strong>GEO</strong> (generative engine optimization), <strong>AEO</strong> (answer engine optimization), LLMO đều chỉ việc tối ưu để xuất hiện trong câu trả lời do AI tạo.</p>`,
          res: ['ipullrank-manual', 'learningaisearch']
        },
        {
          title: 'Tác động tới lưu lượng', min: 45,
          body: `<p>Dữ liệu công bố tới nay:</p>
<ul><li><strong>Pew Research Center (tháng 7 năm 2025):</strong> theo dõi hành vi duyệt web thật của người dùng Mỹ. Khi trang kết quả có tóm tắt AI, người dùng nhấp vào một kết quả ở 8% lượt truy cập, so với 15% khi không có.</li><li><strong>Ahrefs (tháng 2 năm 2026):</strong> trên 300.000 từ khoá, sự hiện diện của AI Overview tương quan với tỷ lệ nhấp của vị trí số 1 thấp hơn khoảng 58%.</li><li><strong>Seer Interactive (tháng 4 năm 2026):</strong> thương hiệu được trích dẫn trong AI Overview nhận tỷ lệ nhấp tự nhiên cao hơn nhiều so với không được trích, nhưng vẫn thấp hơn so với khi không có AI Overview.</li></ul>
<p>Lưu ý về phương pháp: nghiên cứu của Pew dựa trên bảng người dùng. Hai nghiên cứu còn lại là phân tích tương quan của các công ty trong ngành, không phải thử nghiệm.</p>
<h4>Hàm ý chiến lược</h4>
<ul><li>Truy vấn thông tin đơn giản mất lượt nhấp nhiều nhất. Truy vấn giao dịch và truy vấn cần chiều sâu ít bị ảnh hưởng hơn.</li><li>Mục tiêu dịch chuyển một phần từ <em>lượt nhấp</em> sang <em>sự hiện diện</em>: được nêu tên, được trích dẫn, được đề xuất.</li><li>Đánh giá SEO chỉ bằng lưu lượng sẽ đánh giá thấp giá trị thật. Cần thêm chỉ số về hiển thị và nhu cầu thương hiệu.</li><li>Kênh owned (email, cộng đồng, ứng dụng) càng quan trọng khi lưu lượng tìm kiếm khó đoán hơn.</li></ul>`,
          res: ['pew-ai-overviews', 'ahrefs-aio-clicks', 'seer-aio']
        },
        {
          title: 'Hướng dẫn chính thức và cơ chế kiểm soát', min: 40,
          body: `<p>Tài liệu <em>AI features and your website</em> của Google Search Central nêu rõ:</p>
<ul><li>Không cần tối ưu đặc biệt, không cần đánh dấu schema riêng hay tệp văn bản dành cho AI để xuất hiện trong AI Overviews và AI Mode. Các thực hành SEO nền tảng vẫn áp dụng.</li><li>Trang phải được lập chỉ mục và đủ điều kiện hiển thị đoạn trích.</li><li>Lưu lượng từ các tính năng AI được tính chung vào loại tìm kiếm "Web" trong Search Console.</li><li>Kiểm soát hiển thị bằng <code>nosnippet</code>, <code>max-snippet</code>, <code>data-nosnippet</code>. <code>Google-Extended</code> kiểm soát việc dùng nội dung cho các mô hình Gemini, không ảnh hưởng tới Search.</li></ul>
<h4>Trình thu thập của các công ty AI</h4>
<p>Mỗi công ty công bố tên trình thu thập để chủ website cho phép hoặc chặn trong robots.txt. Ví dụ OpenAI phân biệt <code>OAI-SearchBot</code> (phục vụ tìm kiếm), <code>GPTBot</code> (thu thập để huấn luyện) và <code>ChatGPT-User</code> (truy cập theo yêu cầu người dùng). Chặn trình thu thập phục vụ tìm kiếm nghĩa là bạn không xuất hiện trong câu trả lời của công cụ đó.</p>
<h4>llms.txt</h4>
<p>Đây là một đề xuất về tệp tóm tắt nội dung website cho mô hình ngôn ngữ. Tới nay nó vẫn là đề xuất, chưa phải tiêu chuẩn, và Google nói rõ không cần tệp văn bản AI nào. Chi phí tạo thấp, nhưng đừng kỳ vọng tác động.</p>`,
          res: ['google-ai-features', 'openai-bots']
        },
        {
          title: 'Kỹ thuật tăng khả năng được trích dẫn', min: 60,
          body: `<p>Bài báo <em>GEO: Generative Engine Optimization</em> (Aggarwal và cộng sự, Princeton, KDD 2024) thử nghiệm chín cách chỉnh sửa nội dung trên một bộ câu hỏi chuẩn. Kết quả:</p>
<ul><li>Ba cách hiệu quả nhất: <strong>thêm trích dẫn nguồn đáng tin</strong>, <strong>thêm trích lời chuyên gia</strong>, <strong>thêm số liệu thống kê</strong>. Mức hiển thị trong câu trả lời tăng tới khoảng 40%.</li><li><strong>Nhồi từ khoá</strong> không giúp gì, thậm chí làm kém đi.</li><li>Hiệu quả của từng cách thay đổi theo lĩnh vực.</li></ul>
<h4>Thực hành tổng hợp từ nghiên cứu và hướng dẫn của ngành</h4>
<ul><li><strong>Trả lời trực tiếp:</strong> mở mỗi phần bằng câu trả lời ngắn gọn cho câu hỏi của phần đó, rồi mới triển khai. Mỗi đoạn nên tự đứng được khi bị tách khỏi trang.</li><li><strong>Cụ thể và kiểm chứng được:</strong> số liệu có nguồn, ngày cập nhật, tên tác giả có chuyên môn.</li><li><strong>Bao phủ câu hỏi liên quan</strong> mà truy vấn con có thể sinh ra: so sánh, giá, ưu nhược, cách làm, dành cho ai.</li><li><strong>Thông tin gốc:</strong> dữ liệu riêng, nghiên cứu riêng, trải nghiệm thật.</li><li><strong>Hiện diện ngoài website:</strong> mô hình tổng hợp từ nhiều nguồn. Đánh giá trên nền tảng bên thứ ba, bài báo, diễn đàn, hồ sơ doanh nghiệp nhất quán đều ảnh hưởng tới việc thương hiệu được nhắc tới thế nào.</li><li><strong>Kỹ thuật:</strong> nội dung đọc được không cần chạy JavaScript phức tạp, không chặn nhầm trình thu thập, dữ liệu có cấu trúc đúng.</li></ul>
<p>Gần như mọi điểm trên cũng là thực hành SEO tốt. GEO phần lớn là SEO làm kỹ hơn, cộng thêm chú ý tới cấp độ đoạn văn và sự hiện diện ngoài website.</p>`,
          res: ['geo-paper', 'ahrefs-aeo', 'semrush-ai-search']
        },
        {
          title: 'Đo lường hiện diện trong câu trả lời AI', min: 40,
          body: `<p>Đo lường ở đây còn non trẻ và có giới hạn cố hữu: câu trả lời không ổn định, được cá nhân hoá, và không nền tảng nào cung cấp dữ liệu đầy đủ.</p>
<table><tr><th>Chỉ số</th><th>Cách thu</th><th>Hạn chế</th></tr>
<tr><td>Tỷ lệ được nhắc tên, được trích dẫn</td><td>Chạy định kỳ một bộ câu hỏi cố định trên các công cụ AI, ghi lại thương hiệu và nguồn xuất hiện</td><td>Kết quả dao động; cần chạy nhiều lần và nhìn xu hướng</td></tr>
<tr><td>Thị phần tiếng nói so với đối thủ</td><td>Cùng bộ câu hỏi, đếm tần suất từng thương hiệu</td><td>Phụ thuộc bộ câu hỏi bạn chọn</td></tr>
<tr><td>Lưu lượng giới thiệu từ công cụ AI</td><td>GA4, lọc nguồn giới thiệu theo tên miền của các công cụ AI</td><td>Nhiều lượt không truyền nguồn giới thiệu, bị tính vào direct</td></tr>
<tr><td>Hiệu quả trên Google</td><td>Search Console (gộp chung trong "Web")</td><td>Không tách riêng AI Overviews</td></tr>
<tr><td>Nhu cầu thương hiệu</td><td>Lượng tìm kiếm tên thương hiệu, lưu lượng trực tiếp</td><td>Chịu ảnh hưởng của nhiều yếu tố khác</td></tr></table>
<h4>Cách bắt đầu</h4>
<ol><li>Lập 30 đến 50 câu hỏi khách hàng thật sự hỏi, theo các giai đoạn hành trình.</li><li>Chạy hằng tháng trên 3 đến 4 công cụ, ghi vào bảng tính.</li><li>Ghi cả <em>nội dung</em> AI nói về thương hiệu: có đúng không, có lỗi thời không. Thông tin sai thường bắt nguồn từ một trang nào đó trên web mà bạn có thể sửa.</li></ol>`,
          res: ['learningaisearch', 'ahrefs-aeo']
        }
      ],
      takeaways: [
        'Công cụ AI tách câu hỏi thành truy vấn con và trích dẫn ở cấp độ đoạn văn.',
        'Lượt nhấp giảm khi có tóm tắt AI; được trích dẫn giúp giảm thiệt hại.',
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
        { q: 'Theo Pew Research, người dùng nhấp vào kết quả ở bao nhiêu phần trăm lượt truy cập khi có tóm tắt AI?', a: ['Khoảng 8%, so với 15% khi không có', 'Khoảng 30%, so với 15%', 'Khoảng 50%', 'Không thay đổi'], correct: 0, why: 'Tỷ lệ nhấp giảm gần một nửa khi trang kết quả có tóm tắt AI.' },
        { q: 'Theo tài liệu của Google, cần gì để xuất hiện trong AI Overviews?', a: ['Tệp llms.txt', 'Schema dành riêng cho AI', 'Không cần tối ưu đặc biệt; trang cần được lập chỉ mục và đủ điều kiện hiển thị đoạn trích', 'Đăng ký chương trình đối tác'], correct: 2, why: 'Google nêu rõ các thực hành SEO nền tảng là đủ.' },
        { q: 'Theo bài báo GEO, kỹ thuật nào KHÔNG cải thiện khả năng hiển thị?', a: ['Thêm trích dẫn nguồn', 'Thêm số liệu thống kê', 'Thêm trích lời chuyên gia', 'Nhồi từ khoá'], correct: 3, why: 'Nhồi từ khoá không giúp, thậm chí làm kém đi.' },
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
          body: `<p><strong>Model Context Protocol (MCP)</strong> là tiêu chuẩn mở, khởi nguồn từ Anthropic cuối năm 2024, quy định cách ứng dụng AI kết nối với công cụ và nguồn dữ liệu bên ngoài. Thay vì mỗi cặp ứng dụng và công cụ cần một tích hợp riêng, công cụ chỉ cần cung cấp một <strong>máy chủ MCP</strong>, và mọi ứng dụng AI hỗ trợ MCP đều dùng được.</p>
<h4>Trong marketing</h4>
<ul><li><strong>Meta</strong> cung cấp máy chủ MCP chính thức cho quảng cáo, gồm báo cáo, tạo và chỉnh sửa chiến dịch, danh mục, kiểm tra tín hiệu, thử nghiệm.</li><li><strong>Google</strong> phát hành máy chủ MCP mã nguồn mở cho Google Ads, tự vận hành.</li><li>Nhiều công cụ phân tích, SEO, CRM cũng có máy chủ MCP.</li></ul>
<p>Điều này có nghĩa một trợ lý AI có thể truy vấn trực tiếp tài khoản quảng cáo bằng ngôn ngữ tự nhiên: "So sánh CPA theo sáng tạo 14 ngày qua và chỉ ra ba quảng cáo đang mỏi".</p>
<h4>Trước khi kết nối</h4>
<ul><li>Chỉ dùng máy chủ chính thức hoặc đã được kiểm tra. Máy chủ MCP có quyền truy cập tài khoản của bạn.</li><li>Phân biệt công cụ <em>đọc</em> và công cụ <em>ghi</em>. Nhiều máy chủ cho phép tắt nhóm công cụ ghi.</li><li>Dùng tài khoản và mã truy cập có quyền tối thiểu.</li></ul>`,
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
<p>Khi tác tử đọc nội dung từ bên ngoài (trang web, email, bình luận, đánh giá), nội dung đó có thể chứa chỉ dẫn ẩn nhằm điều khiển tác tử. Nguyên tắc: nội dung do công cụ trả về là <em>dữ liệu</em>, không phải <em>mệnh lệnh</em>. Tác tử có quyền hành động không nên tự động thực thi chỉ dẫn tìm thấy trong nội dung nó đọc.</p>
<h4>Trách nhiệm</h4>
<p>Tác tử không chịu trách nhiệm. Mỗi quy trình tự động cần một người có tên cụ thể chịu trách nhiệm về kết quả.</p>`,
          res: ['mcp-docs', 'ms-agents-beginners', 'nist-ai-rmf']
        },
        {
          title: 'Khung quản trị và chính sách AI nội bộ', min: 50,
          body: `<h4>Các khung tham chiếu quốc tế</h4>
<table><tr><th>Khung</th><th>Nơi ban hành</th><th>Nội dung chính</th></tr>
<tr><td>Đạo luật AI</td><td>EU</td><td>Tiếp cận theo mức rủi ro: bị cấm, rủi ro cao, nghĩa vụ minh bạch, rủi ro tối thiểu. Áp dụng theo giai đoạn; nghĩa vụ minh bạch từ tháng 8 năm 2026</td></tr>
<tr><td>AI Risk Management Framework và hồ sơ cho AI tạo sinh</td><td>NIST, Mỹ</td><td>Tự nguyện. Bốn chức năng: Govern, Map, Measure, Manage</td></tr>
<tr><td>Model AI Governance Framework for Generative AI</td><td>IMDA và AI Verify Foundation, Singapore</td><td>Chín chiều, gồm trách nhiệm giải trình, dữ liệu, kiểm thử, bảo mật, nguồn gốc nội dung</td></tr>
<tr><td>Hướng dẫn về AI và bảo vệ dữ liệu</td><td>ICO, Anh</td><td>Áp dụng nguyên tắc bảo vệ dữ liệu cho hệ thống AI: cơ sở pháp lý, minh bạch, công bằng</td></tr></table>
<h4>Chính sách AI nội bộ cho đội marketing</h4>
<ol><li><strong>Công cụ được phê duyệt</strong> và quy trình đề xuất công cụ mới.</li><li><strong>Phân loại dữ liệu:</strong> loại nào được đưa vào công cụ nào. Dữ liệu cá nhân khách hàng có quy tắc riêng.</li><li><strong>Kiểm duyệt:</strong> nội dung nào cần người duyệt trước khi xuất bản, theo bảng kiểm nào.</li><li><strong>Minh bạch:</strong> khi nào cho khách hàng biết họ đang tương tác với AI, khi nào gắn nhãn nội dung.</li><li><strong>Tự động hoá:</strong> hành động nào cần phê duyệt, giới hạn nào áp dụng.</li><li><strong>Trách nhiệm:</strong> ai chịu trách nhiệm cho từng quy trình, ai xử lý sự cố.</li><li><strong>Đào tạo và rà soát</strong> định kỳ.</li></ol>
<p>Chính sách tốt ngắn gọn, cụ thể, và được cập nhật vài lần mỗi năm.</p>`,
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
