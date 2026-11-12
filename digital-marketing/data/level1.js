COURSE.levels.push({
  id: 'L1', num: 1, color: '#3147d4',
  title: 'Nền tảng Marketing và Digital',
  short: 'Nền tảng',
  stage: 'Người mới bắt đầu',
  tagline: 'Hiểu marketing vận hành thế nào trước khi chạm vào bất kỳ công cụ nào.',
  intro: 'Level 1 xây phần móng: tư duy chiến lược marketing, bản đồ các kênh digital, cách hiểu khách hàng và bộ chỉ số nền tảng. Người học kênh trước, chiến lược sau thường tối ưu rất giỏi một thứ không quan trọng. Level này giúp bạn tránh điều đó.',
  prereq: 'Không cần kinh nghiệm',
  milestone: 'Kế hoạch digital marketing một trang cho một sản phẩm thật',
  outcomes: [
    'Giải thích được STP, 4P, phễu marketing và cách chúng liên kết với mục tiêu kinh doanh.',
    'Phân biệt xây thương hiệu dài hạn với kích hoạt bán hàng ngắn hạn, dựa trên bằng chứng nghiên cứu.',
    'Vẽ được bản đồ kênh Paid, Owned, Earned và vai trò của từng kênh trong hành trình khách hàng.',
    'Xây chân dung khách hàng và thông điệp giá trị từ dữ liệu nghiên cứu, không từ phỏng đoán.',
    'Tính và diễn giải đúng CTR, CVR, CPA, ROAS, CAC, LTV và điểm hoà vốn.',
    'Đọc được các báo cáo cơ bản trong Google Analytics 4.'
  ],
  modules: [
    {
      id: 'm1-1', hours: 6,
      title: 'Tư duy marketing và chiến lược',
      summary: 'Marketing không phải là quảng cáo. Module này đặt lại nền tảng: giá trị, phân khúc, định vị và cách thương hiệu thật sự tăng trưởng.',
      objectives: [
        'Định nghĩa marketing theo quan điểm tạo và trao đổi giá trị, phân biệt với truyền thông và bán hàng.',
        'Áp dụng quy trình STP để chọn khách hàng mục tiêu và viết tuyên bố định vị.',
        'Trình bày các quy luật tăng trưởng thương hiệu của Byron Sharp và hệ quả với việc chọn đối tượng.',
        'Giải thích nguyên tắc cân bằng dài hạn và ngắn hạn của Binet và Field.',
        'Chuyển mục tiêu kinh doanh thành mục tiêu marketing đo được.'
      ],
      lessons: [
        {
          title: 'Marketing là gì và marketer chịu trách nhiệm điều gì', min: 40,
          body: `<p>Hiệp hội Marketing Hoa Kỳ (AMA) định nghĩa marketing là hoạt động tạo ra, truyền thông, phân phối và trao đổi những thứ có giá trị với khách hàng và xã hội. Trọng tâm của định nghĩa là <strong>giá trị</strong>, còn quảng cáo chỉ là một phần của chữ "truyền thông".</p>
<p>Khung kinh điển để mô tả phạm vi công việc là <strong>4P</strong>: Product (sản phẩm), Price (giá), Place (phân phối), Promotion (xúc tiến). Với dịch vụ, người ta mở rộng thành 7P bằng cách thêm People, Process và Physical evidence. Một marketer giỏi nhìn cả bốn chữ P. Nếu sản phẩm sai hoặc giá sai, không ngân sách quảng cáo nào bù được.</p>
<h4>Ba câu hỏi mọi kế hoạch phải trả lời</h4>
<ul><li><strong>Chẩn đoán:</strong> thị trường, khách hàng và đối thủ đang ở đâu?</li><li><strong>Chiến lược:</strong> ta phục vụ ai, định vị ra sao, mục tiêu là gì?</li><li><strong>Chiến thuật:</strong> dùng 4P thế nào để đạt mục tiêu đó?</li></ul>
<div class="callout"><b>Lỗi phổ biến:</b> nhảy thẳng vào chiến thuật (chạy quảng cáo gì, đăng bài gì) khi chưa có chẩn đoán và chiến lược.</div>`,
          res: ['wharton-intro-marketing', 'kotler-mm']
        },
        {
          title: 'STP: phân khúc, chọn mục tiêu, định vị', min: 50,
          body: `<p><strong>Segmentation</strong> chia thị trường thành các nhóm có nhu cầu khác nhau theo nhân khẩu học, địa lý, hành vi hoặc nhu cầu. Phân khúc tốt phải đo được, đủ lớn, tiếp cận được và phản ứng khác nhau với cùng một đề xuất.</p>
<p><strong>Targeting</strong> là quyết định nhóm nào đáng đầu tư, dựa trên quy mô, khả năng sinh lời và mức độ phù hợp với năng lực doanh nghiệp.</p>
<p><strong>Positioning</strong> là vị trí bạn muốn chiếm trong tâm trí khách hàng so với lựa chọn thay thế. Một tuyên bố định vị gọn thường có dạng:</p>
<div class="formula">Dành cho <em>[khách hàng mục tiêu]</em> đang cần <em>[nhu cầu]</em>, <em>[thương hiệu]</em> là <em>[loại sản phẩm]</em> mang lại <em>[lợi ích chính]</em>, vì <em>[lý do để tin]</em>.</div>
<p>Trong khoá Introduction to Marketing của Wharton, giáo sư Barbara Kahn nhấn mạnh ba yếu tố của định vị mạnh: điểm khác biệt (points of difference), điểm tương đồng bắt buộc (points of parity) và khung tham chiếu (frame of reference).</p>`,
          res: ['wharton-intro-marketing', 'openstax-principles']
        },
        {
          title: 'Thương hiệu tăng trưởng thế nào: các quy luật của Byron Sharp', min: 45,
          body: `<p>Viện Ehrenberg-Bass (Đại học South Australia) phân tích dữ liệu mua hàng của hàng trăm ngành và rút ra các quy luật lặp lại, được Byron Sharp tổng hợp trong <em>How Brands Grow</em>:</p>
<ul><li><strong>Tăng trưởng đến chủ yếu từ độ phủ (penetration)</strong>, tức có thêm người mua, nhiều hơn là từ việc làm khách cũ mua thường xuyên hơn.</li><li><strong>Double jeopardy:</strong> thương hiệu nhỏ vừa ít người mua hơn, vừa có mức trung thành thấp hơn một chút.</li><li>Phần lớn người mua là <strong>người mua nhẹ</strong>, mua bạn rất thưa. Bỏ qua họ là bỏ qua nguồn tăng trưởng chính.</li><li>Cần xây <strong>mental availability</strong> (dễ được nghĩ tới trong tình huống mua) và <strong>physical availability</strong> (dễ được mua).</li></ul>
<p>Hệ quả thực tế: nhắm mục tiêu quá hẹp vào "khách hàng lý tưởng" có thể tối ưu hiệu suất ngắn hạn nhưng giới hạn tăng trưởng. Quan điểm này gây tranh luận với trường phái định vị truyền thống. Bạn nên hiểu cả hai để dùng đúng bối cảnh.</p>`,
          res: ['sharp-hbg', 'ehrenberg-bass']
        },
        {
          title: 'Dài hạn và ngắn hạn: bằng chứng từ Binet và Field', min: 45,
          body: `<p>Les Binet và Peter Field phân tích gần một nghìn chiến dịch trong cơ sở dữ liệu IPA (Anh) và công bố <em>The Long and the Short of It</em>. Kết luận chính:</p>
<ul><li><strong>Kích hoạt bán hàng</strong> (sales activation) tạo đỉnh doanh số nhanh nhưng hiệu ứng tắt sớm.</li><li><strong>Xây thương hiệu</strong> tác động chậm, bằng cảm xúc và độ phủ rộng, nhưng tích luỹ theo thời gian và giảm độ nhạy về giá.</li><li>Tỷ lệ ngân sách hiệu quả nhất trung bình khoảng <strong>60% thương hiệu, 40% kích hoạt</strong>, thay đổi theo ngành và giai đoạn.</li></ul>
<p>Một khái niệm liên quan là <strong>ESOV</strong> (extra share of voice): thương hiệu có thị phần tiếng nói cao hơn thị phần doanh số có xu hướng tăng thị phần.</p>
<div class="callout"><b>Liên hệ với performance marketing:</b> gần như toàn bộ những gì bạn học ở Level 3 và 4 thuộc nhóm kích hoạt. Chúng đo dễ nên dễ bị đầu tư quá mức. Level 5 và 7 sẽ quay lại câu hỏi này bằng công cụ đo lường tăng trưởng thực.</div>`,
          res: ['ipa-effectiveness-context', 'binet-field-long-short']
        },
        {
          title: 'Từ mục tiêu kinh doanh đến mục tiêu marketing', min: 35,
          body: `<p>Mục tiêu marketing chỉ có nghĩa khi nối được về mục tiêu kinh doanh. Chuỗi logic chuẩn:</p>
<div class="formula">Mục tiêu kinh doanh (doanh thu, lợi nhuận) → Mục tiêu marketing (số khách mới, tần suất, giá trị đơn) → Mục tiêu truyền thông (nhận biết, cân nhắc, chuyển đổi) → KPI theo kênh</div>
<p>Phễu marketing (nhận biết → cân nhắc → chuyển đổi → trung thành) là cách đơn giản để phân bổ mục tiêu theo giai đoạn. Hãy viết mục tiêu theo chuẩn <strong>SMART</strong>: cụ thể, đo được, khả thi, liên quan, có thời hạn.</p>
<p>Ví dụ kém: "Tăng nhận diện thương hiệu". Ví dụ tốt: "Tăng số lượt đặt trực tiếp qua website từ 80 lên 100 mỗi tháng trước 30/6, với chi phí mỗi lượt đặt không vượt 12% giá trị đơn".</p>`,
          res: ['google-dme-foundations']
        }
      ],
      takeaways: [
        'Marketing bắt đầu từ chẩn đoán và chiến lược; chiến thuật đến sau.',
        'STP quyết định bạn nói với ai và nói điều gì. 4P là cách bạn thực thi.',
        'Tăng trưởng chủ yếu đến từ việc có thêm người mua, nên độ phủ quan trọng không kém độ chính xác.',
        'Ngắn hạn dễ đo, dài hạn tạo phần lớn lợi nhuận. Cần cả hai.'
      ],
      assignment: {
        title: 'Hồ sơ chiến lược một trang',
        brief: `<p>Chọn một sản phẩm hoặc doanh nghiệp thật (nơi bạn làm việc là tốt nhất). Viết một trang gồm:</p><ol><li>Ba phân khúc khách hàng chính và tiêu chí phân khúc bạn dùng.</li><li>Phân khúc mục tiêu ưu tiên, kèm lý do bằng số liệu nếu có.</li><li>Tuyên bố định vị theo mẫu trong bài 2.</li><li>Một mục tiêu kinh doanh và hai mục tiêu marketing SMART tương ứng.</li><li>Ước lượng tỷ lệ ngân sách hiện tại giữa xây thương hiệu và kích hoạt. Theo bạn có hợp lý không?</li></ol>`,
        deliverable: 'Tài liệu một trang (Google Docs hoặc PDF). Bạn sẽ dùng lại ở module 1.2 và 1.3.'
      },
      quiz: [
        { q: 'Theo cách tiếp cận chẩn đoán → chiến lược → chiến thuật, việc nào thuộc về chiến lược?', a: ['Chọn định dạng quảng cáo video 15 giây', 'Quyết định phân khúc mục tiêu và định vị', 'Viết lịch đăng bài mạng xã hội', 'Cài mã theo dõi chuyển đổi'], correct: 1, why: 'Chiến lược trả lời câu hỏi phục vụ ai và định vị ra sao. Các lựa chọn còn lại là chiến thuật.' },
        { q: 'Quy luật double jeopardy nói điều gì?', a: ['Thương hiệu nhỏ có ít người mua hơn và mức trung thành cũng thấp hơn một chút', 'Thương hiệu lớn luôn có giá cao hơn', 'Giảm giá hai lần sẽ làm mất khách', 'Khách trung thành mua gấp đôi khách mới'], correct: 0, why: 'Double jeopardy mô tả việc thương hiệu nhỏ chịu thiệt hai lần: ít người mua hơn và người mua cũng kém trung thành hơn.' },
        { q: 'Theo Binet và Field, đặc điểm nào đúng với hoạt động xây thương hiệu?', a: ['Tác động nhanh, tắt nhanh', 'Chỉ hiệu quả với khách hàng hiện tại', 'Tác động chậm nhưng tích luỹ và giảm độ nhạy về giá', 'Không thể đo lường'], correct: 2, why: 'Xây thương hiệu có hiệu ứng tích luỹ dài hạn và giúp thương hiệu ít phụ thuộc vào khuyến mãi.' },
        { q: 'Mục tiêu nào đạt chuẩn SMART?', a: ['Tăng tương tác trên mạng xã hội', 'Trở thành thương hiệu được yêu thích nhất', 'Tăng 20% số đơn hàng online trong quý 3 với CPA dưới 150.000đ', 'Chạy thêm quảng cáo để có nhiều khách hơn'], correct: 2, why: 'Chỉ lựa chọn này cụ thể, đo được, có giới hạn chi phí và thời hạn.' },
        { q: 'Mental availability nghĩa là gì?', a: ['Sản phẩm có mặt ở nhiều điểm bán', 'Thương hiệu dễ được nghĩ tới trong tình huống mua hàng', 'Khách hàng nhớ chính xác slogan', 'Ngân sách quảng cáo cao hơn đối thủ'], correct: 1, why: 'Mental availability là xác suất thương hiệu xuất hiện trong tâm trí người mua khi phát sinh nhu cầu.' }
      ],
      readings: ['kotler-marketing-6', 'mit-ocw-marketing', 'minimba-marketing']
    },
    {
      id: 'm1-2', hours: 7,
      title: 'Hệ sinh thái Digital Marketing',
      summary: 'Bản đồ toàn cảnh: các nhóm kênh, hành trình khách hàng số, cách nền tảng quảng cáo vận hành và cách ghép chúng thành một kế hoạch.',
      objectives: [
        'Phân loại kênh theo mô hình Paid, Owned, Earned và nêu vai trò của từng nhóm.',
        'So sánh mô hình phễu, hành trình quyết định của McKinsey và "messy middle" của Google.',
        'Mô tả thế mạnh, hạn chế và mục tiêu phù hợp của từng kênh digital chính.',
        'Giải thích ở mức khái niệm cách nền tảng quảng cáo đấu giá và theo dõi chuyển đổi.',
        'Lập kế hoạch digital marketing một trang.'
      ],
      lessons: [
        {
          title: 'Paid, Owned, Earned: ba nhóm tài sản truyền thông', min: 35,
          body: `<table><tr><th>Nhóm</th><th>Ví dụ</th><th>Điểm mạnh</th><th>Điểm yếu</th></tr>
<tr><td><strong>Paid</strong></td><td>Google Ads, Meta Ads, TikTok Ads, KOL trả phí</td><td>Nhanh, kiểm soát được quy mô và đối tượng</td><td>Dừng chi là dừng kết quả</td></tr>
<tr><td><strong>Owned</strong></td><td>Website, app, email, CRM, blog</td><td>Chủ động, chi phí biên thấp, tích luỹ dữ liệu</td><td>Cần thời gian xây dựng</td></tr>
<tr><td><strong>Earned</strong></td><td>Báo chí, đánh giá, truyền miệng, thứ hạng tự nhiên</td><td>Độ tin cậy cao</td><td>Khó kiểm soát</td></tr></table>
<p>Ba nhóm bổ trợ nhau: paid kéo lưu lượng về owned, owned chuyển đổi và giữ chân, trải nghiệm tốt tạo ra earned. Doanh nghiệp phụ thuộc hoàn toàn vào paid thường có biên lợi nhuận mỏng và dễ tổn thương khi giá quảng cáo tăng.</p>`,
          res: ['google-dme-foundations', 'hubspot-digital-marketing']
        },
        {
          title: 'Hành trình khách hàng số: từ phễu đến "messy middle"', min: 45,
          body: `<p><strong>Phễu tuyến tính</strong> (AIDA) hữu ích để lập kế hoạch nhưng không mô tả đúng hành vi thật. Năm 2009, McKinsey đề xuất <strong>Consumer Decision Journey</strong>: một vòng lặp gồm cân nhắc ban đầu, đánh giá chủ động, mua, và trải nghiệm sau mua, trong đó số thương hiệu được cân nhắc có thể tăng lên trong quá trình đánh giá.</p>
<p>Năm 2020, nhóm nghiên cứu của Google công bố <strong>The Messy Middle</strong>: giữa tác nhân kích hoạt và quyết định mua, người dùng lặp qua lại hai trạng thái <em>khám phá</em> (mở rộng lựa chọn) và <em>đánh giá</em> (thu hẹp lựa chọn). Sáu thiên kiến ảnh hưởng mạnh nhất: gợi ý danh mục, sức mạnh của "ngay bây giờ", bằng chứng xã hội, sự khan hiếm, thẩm quyền, và sức mạnh của miễn phí.</p>
<p>Ứng dụng: thay vì hỏi "kênh này thuộc tầng phễu nào", hãy hỏi "ở thời điểm khách đang khám phá hoặc đánh giá, thương hiệu có hiện diện và có đủ lý do để được chọn không".</p>`,
          res: ['twg-messy-middle', 'mckinsey-cdj']
        },
        {
          title: 'Tổng quan các kênh digital chính', min: 60,
          body: `<table><tr><th>Kênh</th><th>Bản chất</th><th>Hợp nhất với</th></tr>
<tr><td>Search (SEO, SEM)</td><td>Bắt nhu cầu đã có, người dùng chủ động tìm</td><td>Chuyển đổi, cân nhắc</td></tr>
<tr><td>Social (organic, paid)</td><td>Tạo nhu cầu, phân phối theo sở thích và hành vi</td><td>Nhận biết, cân nhắc, remarketing</td></tr>
<tr><td>Video, Display</td><td>Độ phủ rộng, tác động thị giác</td><td>Nhận biết, xây thương hiệu</td></tr>
<tr><td>Email, CRM</td><td>Giao tiếp trực tiếp với người đã cho phép</td><td>Giữ chân, bán lại</td></tr>
<tr><td>Affiliate, Influencer</td><td>Mượn độ tin cậy và tệp của bên thứ ba</td><td>Cân nhắc, chuyển đổi</td></tr>
<tr><td>Marketplace, Retail media</td><td>Quảng cáo ngay tại điểm mua</td><td>Chuyển đổi</td></tr></table>
<p>Phân biệt quan trọng nhất ở cấp độ này là <strong>bắt nhu cầu</strong> (demand capture) và <strong>tạo nhu cầu</strong> (demand generation). Search bắt nhu cầu nên hiệu suất đo được cao, nhưng quy mô bị giới hạn bởi số người đang tìm. Social và video tạo nhu cầu nên khó đo hơn, đổi lại mở rộng được thị trường.</p>`,
          res: ['google-dme-cert', 'illinois-digital-world']
        },
        {
          title: 'Nền tảng quảng cáo vận hành thế nào', min: 45,
          body: `<p>Hầu hết quảng cáo digital được bán qua <strong>đấu giá theo thời gian thực</strong>. Mỗi khi có một lượt hiển thị, nền tảng chọn quảng cáo thắng dựa trên một điểm tổng hợp, không chỉ giá thầu:</p>
<div class="formula">Giá trị xếp hạng ≈ Giá thầu × Xác suất hành động dự đoán + Chất lượng, mức liên quan</div>
<p>Vì vậy quảng cáo liên quan hơn có thể thắng với giá thấp hơn. Bạn sẽ học chi tiết ở Level 3.</p>
<p>Để tối ưu, nền tảng cần biết điều gì xảy ra sau cú nhấp. Dữ liệu này đến từ <strong>pixel hoặc tag</strong> trên website, <strong>SDK</strong> trong app và <strong>API chuyển đổi</strong> phía máy chủ. Các thay đổi về quyền riêng tư (App Tracking Transparency của Apple, quy định đồng ý cookie, trình duyệt chặn theo dõi) làm tín hiệu này kém đầy đủ hơn, nên nền tảng dùng mô hình thống kê để ước lượng phần thiếu.</p>
<p>Google, Meta, TikTok, Amazon là các <strong>walled garden</strong>: họ sở hữu cả người dùng, kho quảng cáo lẫn hệ thống đo lường, nên số liệu mỗi nền tảng tự báo cáo không cộng lại được với nhau.</p>`,
          res: ['google-ads-auction', 'meta-auction']
        },
        {
          title: 'Lập kế hoạch digital marketing một trang', min: 45,
          body: `<p>Một khung gọn và được dùng rộng rãi là <strong>SOSTAC</strong> của PR Smith:</p>
<ul><li><strong>S</strong>ituation: ta đang ở đâu (dữ liệu, đối thủ, khách hàng)?</li><li><strong>O</strong>bjectives: ta muốn tới đâu (SMART)?</li><li><strong>S</strong>trategy: bằng cách nào (STP, định vị, tổ hợp kênh)?</li><li><strong>T</strong>actics: công cụ và nội dung cụ thể theo từng kênh.</li><li><strong>A</strong>ction: ai làm gì, khi nào.</li><li><strong>C</strong>ontrol: đo bằng gì, xem lại khi nào.</li></ul>
<p>Với kế hoạch một trang, hãy giới hạn ở: một mục tiêu chính, một đối tượng ưu tiên, ba kênh trọng tâm kèm vai trò của từng kênh, ngân sách chia theo kênh, ba KPI và lịch rà soát. Kế hoạch dài hơn hiếm khi được thực thi tốt hơn.</p>`,
          res: ['google-dme-cert', 'hubspot-digital-marketing']
        }
      ],
      takeaways: [
        'Paid mua tốc độ, owned tạo lợi thế tích luỹ, earned tạo niềm tin.',
        'Hành trình thật là vòng lặp khám phá và đánh giá, không phải đường thẳng.',
        'Phân biệt bắt nhu cầu với tạo nhu cầu trước khi so sánh hiệu suất giữa các kênh.',
        'Số liệu của từng nền tảng là góc nhìn của nền tảng đó, không phải sự thật duy nhất.'
      ],
      assignment: {
        title: 'Bản đồ kênh và kế hoạch một trang',
        brief: `<p>Tiếp tục với sản phẩm ở module 1.1:</p><ol><li>Liệt kê toàn bộ điểm chạm digital hiện có và xếp vào ba cột Paid, Owned, Earned.</li><li>Vẽ hành trình của một khách hàng điển hình từ lúc phát sinh nhu cầu đến sau mua. Đánh dấu thời điểm khám phá, đánh giá và điểm mà thương hiệu đang vắng mặt.</li><li>Viết kế hoạch một trang theo SOSTAC cho ba tháng tới.</li></ol>`,
        deliverable: 'Một bảng kiểm kê kênh, một sơ đồ hành trình và kế hoạch SOSTAC một trang.'
      },
      quiz: [
        { q: 'Danh sách email khách hàng thuộc nhóm tài sản nào?', a: ['Paid', 'Owned', 'Earned', 'Shared'], correct: 1, why: 'Email và CRM là kênh doanh nghiệp sở hữu và kiểm soát trực tiếp.' },
        { q: 'Theo nghiên cứu "messy middle", người dùng lặp qua lại giữa hai trạng thái nào?', a: ['Nhận biết và trung thành', 'Khám phá và đánh giá', 'Nhấp và chuyển đổi', 'Tìm kiếm và mua lại'], correct: 1, why: 'Mô hình mô tả vòng lặp giữa khám phá (mở rộng lựa chọn) và đánh giá (thu hẹp lựa chọn).' },
        { q: 'Vì sao quảng cáo tìm kiếm thường có tỷ lệ chuyển đổi cao hơn quảng cáo mạng xã hội?', a: ['Vì giá mỗi lượt nhấp rẻ hơn', 'Vì nó bắt nhu cầu đã tồn tại của người đang chủ động tìm', 'Vì thuật toán của Google tốt hơn', 'Vì người dùng tin quảng cáo tìm kiếm hơn'], correct: 1, why: 'Search bắt nhu cầu có sẵn. Social chủ yếu tạo nhu cầu nên chuyển đổi tức thì thấp hơn.' },
        { q: 'Trong đấu giá quảng cáo, yếu tố nào ngoài giá thầu ảnh hưởng tới việc thắng?', a: ['Số năm tài khoản hoạt động', 'Chất lượng và xác suất hành động dự đoán của quảng cáo', 'Số nhân viên của nhà quảng cáo', 'Số lượng chiến dịch đang chạy'], correct: 1, why: 'Nền tảng xếp hạng theo giá trị tổng hợp gồm giá thầu, xác suất hành động dự đoán và chất lượng.' },
        { q: 'Chữ C trong SOSTAC là gì?', a: ['Content', 'Channel', 'Control', 'Customer'], correct: 2, why: 'Control là phần đo lường và rà soát kết quả.' }
      ],
      readings: ['google-fdm', 'ou-marcomms-digital', 'meta-blueprint', 'dmi-pro']
    },
    {
      id: 'm1-3', hours: 6,
      title: 'Thấu hiểu khách hàng và thông điệp',
      summary: 'Nghiên cứu khách hàng, persona, Jobs To Be Done, tâm lý học thuyết phục và cách viết đề xuất giá trị.',
      objectives: [
        'Chọn phương pháp nghiên cứu định tính hoặc định lượng phù hợp với câu hỏi.',
        'Xây persona dựa trên dữ liệu và mô tả nhu cầu theo khung Jobs To Be Done.',
        'Nhận diện các nguyên tắc thuyết phục của Cialdini trong thực tế.',
        'Viết đề xuất giá trị và hệ thống thông điệp cho một phân khúc.'
      ],
      lessons: [
        {
          title: 'Nghiên cứu khách hàng: hỏi gì, lấy dữ liệu ở đâu', min: 45,
          body: `<p><strong>Định tính</strong> (phỏng vấn sâu, quan sát, đọc đánh giá) trả lời câu hỏi <em>tại sao</em>. <strong>Định lượng</strong> (khảo sát, dữ liệu hành vi, dữ liệu tìm kiếm) trả lời <em>bao nhiêu</em>. Thứ tự hợp lý là định tính trước để tìm giả thuyết, định lượng sau để kiểm tra độ phổ biến.</p>
<h4>Nguồn dữ liệu miễn phí thường bị bỏ quên</h4>
<ul><li><strong>Đánh giá của khách</strong> trên Google, sàn thương mại điện tử, app store: ngôn ngữ thật của khách hàng.</li><li><strong>Dữ liệu tìm kiếm:</strong> Google Trends, Search Console, gợi ý tìm kiếm cho biết nhu cầu và cách diễn đạt.</li><li><strong>Hội thoại bán hàng và chăm sóc khách hàng:</strong> các câu hỏi và lý do từ chối lặp lại.</li><li><strong>Dữ liệu nội bộ:</strong> ai mua nhiều, mua gì đầu tiên, rời bỏ khi nào.</li></ul>
<p>Năm cuộc phỏng vấn tốt thường đủ để lộ ra phần lớn các mẫu hình chính. Câu hỏi nên xoay quanh hành vi đã xảy ra ("lần gần nhất bạn đặt… bạn đã làm gì?") thay vì ý định tương lai.</p>`,
          res: ['nng-research-methods', 'google-trends']
        },
        {
          title: 'Persona và Jobs To Be Done', min: 45,
          body: `<p><strong>Persona</strong> là chân dung đại diện cho một phân khúc: bối cảnh, mục tiêu, rào cản, kênh thông tin, tiêu chí lựa chọn. Persona có ích khi dựa trên dữ liệu thật; persona bịa chỉ hợp thức hoá định kiến của đội ngũ.</p>
<p><strong>Jobs To Be Done</strong> (Clayton Christensen, Harvard Business School) đổi câu hỏi từ "khách hàng là ai" sang "khách hàng thuê sản phẩm để hoàn thành việc gì". Một "job" có ba lớp: chức năng, cảm xúc, xã hội. Mẫu câu thường dùng:</p>
<div class="formula">Khi <em>[tình huống]</em>, tôi muốn <em>[động cơ]</em>, để tôi có thể <em>[kết quả mong đợi]</em>.</div>
<p>Hai người cùng nhân khẩu học có thể có "job" khác hẳn nhau, và hai người rất khác nhau có thể chung một "job". Vì thế JTBD thường cho thông điệp sắc hơn persona nhân khẩu học, và hai công cụ nên dùng cùng nhau.</p>`,
          res: ['hbr-jtbd', 'hubspot-inbound']
        },
        {
          title: 'Tâm lý học thuyết phục', min: 45,
          body: `<p>Robert Cialdini (Đại học Arizona State) tổng hợp các nguyên tắc ảnh hưởng đã được kiểm chứng bằng thực nghiệm:</p>
<table><tr><th>Nguyên tắc</th><th>Ứng dụng trong digital</th></tr>
<tr><td>Đáp trả (reciprocity)</td><td>Tặng nội dung, công cụ, dùng thử trước khi đề nghị mua</td></tr>
<tr><td>Cam kết và nhất quán</td><td>Bước nhỏ trước (đăng ký nhận tin) rồi tới bước lớn</td></tr>
<tr><td>Bằng chứng xã hội</td><td>Đánh giá, số người dùng, nội dung do khách tạo</td></tr>
<tr><td>Thẩm quyền</td><td>Chứng nhận, giải thưởng, chuyên gia xác nhận</td></tr>
<tr><td>Thiện cảm</td><td>Giọng thương hiệu gần gũi, người đại diện tương đồng</td></tr>
<tr><td>Khan hiếm</td><td>Số lượng hoặc thời gian giới hạn, khi là sự thật</td></tr>
<tr><td>Đồng nhất (unity)</td><td>Cảm giác thuộc về một cộng đồng</td></tr></table>
<div class="callout"><b>Ranh giới đạo đức:</b> khan hiếm giả, đếm ngược giả, đánh giá giả là các "dark pattern". Chúng vi phạm quy định bảo vệ người tiêu dùng ở nhiều thị trường và phá huỷ niềm tin dài hạn.</div>`,
          res: ['cialdini-influence', 'twg-messy-middle']
        },
        {
          title: 'Đề xuất giá trị và hệ thống thông điệp', min: 45,
          body: `<p><strong>Value proposition</strong> trả lời câu hỏi: vì sao khách hàng mục tiêu nên chọn bạn thay vì lựa chọn khác, kể cả lựa chọn không làm gì. Value Proposition Canvas (Strategyzer) ghép hai nửa:</p>
<ul><li><strong>Hồ sơ khách hàng:</strong> việc cần làm, nỗi đau, lợi ích mong đợi.</li><li><strong>Bản đồ giá trị:</strong> sản phẩm, cách giảm nỗi đau, cách tạo lợi ích.</li></ul>
<p>Từ đó xây <strong>hệ thống thông điệp</strong> ba tầng: một thông điệp chủ đạo, ba trụ lợi ích, mỗi trụ có lý do để tin (số liệu, chứng nhận, đánh giá). Mọi quảng cáo, trang đích và email về sau đều rút ra từ bảng này, nhờ vậy thông điệp nhất quán giữa các kênh.</p>
<p>Phép thử nhanh: nếu thay tên đối thủ vào câu thông điệp mà vẫn đúng, câu đó chưa có điểm khác biệt.</p>`,
          res: ['strategyzer-vpc', 'wharton-intro-marketing']
        }
      ],
      takeaways: [
        'Hỏi về hành vi đã xảy ra, không hỏi về ý định.',
        'Persona cho biết khách là ai, JTBD cho biết họ cần hoàn thành việc gì.',
        'Các nguyên tắc thuyết phục chỉ bền khi dựa trên sự thật.',
        'Một bảng thông điệp tốt là nguồn của mọi nội dung về sau.'
      ],
      assignment: {
        title: 'Bộ hồ sơ khách hàng',
        brief: `<ol><li>Thu thập ít nhất 50 đánh giá của khách hàng (của bạn hoặc đối thủ). Phân loại theo chủ đề khen và chê, đếm tần suất.</li><li>Phỏng vấn 3 khách hàng hoặc người thuộc phân khúc mục tiêu, mỗi người 20 phút, tập trung vào lần mua gần nhất.</li><li>Viết 1 persona và 3 câu JTBD.</li><li>Điền Value Proposition Canvas và lập bảng thông điệp ba tầng.</li></ol>`,
        deliverable: 'Bảng phân loại đánh giá, ghi chú phỏng vấn, persona, canvas và bảng thông điệp.'
      },
      quiz: [
        { q: 'Câu hỏi phỏng vấn nào cho dữ liệu đáng tin nhất?', a: ['Bạn có sẵn sàng trả thêm cho tính năng này không?', 'Lần gần nhất bạn mua sản phẩm loại này, bạn đã tìm hiểu thế nào?', 'Bạn thấy thương hiệu chúng tôi thế nào?', 'Bạn có định mua lại không?'], correct: 1, why: 'Câu hỏi về hành vi đã xảy ra đáng tin hơn câu hỏi về ý định hoặc ý kiến chung.' },
        { q: 'Khung Jobs To Be Done tập trung vào điều gì?', a: ['Độ tuổi và thu nhập của khách hàng', 'Việc khách hàng cần hoàn thành trong một tình huống cụ thể', 'Tính năng sản phẩm so với đối thủ', 'Kênh truyền thông khách hàng sử dụng'], correct: 1, why: 'JTBD xem sản phẩm là thứ được "thuê" để hoàn thành một việc trong bối cảnh nhất định.' },
        { q: 'Hiển thị "1.240 người đã đặt trong tháng này" là ứng dụng nguyên tắc nào?', a: ['Đáp trả', 'Thẩm quyền', 'Bằng chứng xã hội', 'Cam kết'], correct: 2, why: 'Con số người khác đã chọn là bằng chứng xã hội.' },
        { q: 'Thứ tự nghiên cứu hợp lý khi bắt đầu tìm hiểu một phân khúc mới là gì?', a: ['Định lượng trước, định tính sau', 'Định tính trước để tìm giả thuyết, định lượng sau để kiểm chứng', 'Chỉ cần định lượng', 'Chỉ cần định tính'], correct: 1, why: 'Định tính giúp phát hiện giả thuyết, định lượng kiểm tra độ phổ biến của giả thuyết đó.' },
        { q: 'Phép thử nào cho thấy thông điệp thiếu điểm khác biệt?', a: ['Thông điệp dài hơn 10 từ', 'Thay tên đối thủ vào thì câu vẫn đúng', 'Thông điệp không có con số', 'Thông điệp không nhắc tên sản phẩm'], correct: 1, why: 'Nếu đối thủ dùng được nguyên câu, thông điệp chưa nêu điều riêng có của bạn.' }
      ],
      readings: ['christensen-competing-luck', 'kahneman-tfs']
    },
    {
      id: 'm1-4', hours: 7,
      title: 'Chỉ số và đo lường căn bản',
      summary: 'Ngôn ngữ số của marketing: từ mô hình đo lường, bộ chỉ số cốt lõi, unit economics đến những báo cáo đầu tiên trong GA4.',
      objectives: [
        'Xây mô hình đo lường nối mục tiêu kinh doanh với KPI và ngưỡng mục tiêu.',
        'Tính và diễn giải CTR, CPC, CPM, CVR, CPA, ROAS, AOV.',
        'Tính CAC, LTV, thời gian hoàn vốn và ROAS hoà vốn.',
        'Mô tả mô hình dữ liệu theo sự kiện của GA4 và gắn UTM đúng chuẩn.',
        'Phân biệt chỉ số phù phiếm với chỉ số dẫn tới hành động.'
      ],
      lessons: [
        {
          title: 'Mô hình đo lường: từ mục tiêu đến KPI', min: 40,
          body: `<p>Avinash Kaushik (cựu Digital Marketing Evangelist của Google) đề xuất <strong>Digital Marketing and Measurement Model</strong> gồm năm bước:</p>
<ol><li>Xác định <strong>mục tiêu kinh doanh</strong>.</li><li>Xác định <strong>mục tiêu cụ thể</strong> (goals) cho từng mục tiêu kinh doanh.</li><li>Chọn <strong>KPI</strong> cho mỗi mục tiêu cụ thể.</li><li>Đặt <strong>ngưỡng mục tiêu</strong> (target) cho mỗi KPI.</li><li>Xác định <strong>phân đoạn</strong> (segment) cần phân tích: nguồn, thiết bị, loại khách.</li></ol>
<p>Bước 4 thường bị bỏ qua. Không có ngưỡng thì không biết con số tốt hay xấu. Bước 5 quyết định bạn có tìm ra nguyên nhân hay không, vì số tổng gần như không bao giờ gợi ý hành động.</p>`,
          res: ['kaushik-dmmm']
        },
        {
          title: 'Bộ chỉ số cốt lõi', min: 50,
          body: `<table><tr><th>Chỉ số</th><th>Công thức</th><th>Ý nghĩa</th></tr>
<tr><td>CTR</td><td>Lượt nhấp ÷ Lượt hiển thị</td><td>Mức hấp dẫn của quảng cáo với đối tượng</td></tr>
<tr><td>CPM</td><td>Chi phí ÷ Lượt hiển thị × 1.000</td><td>Giá mua sự chú ý</td></tr>
<tr><td>CPC</td><td>Chi phí ÷ Lượt nhấp</td><td>Giá một lượt ghé thăm</td></tr>
<tr><td>CVR</td><td>Chuyển đổi ÷ Lượt nhấp (hoặc phiên)</td><td>Hiệu quả của trang đích và đề xuất</td></tr>
<tr><td>CPA</td><td>Chi phí ÷ Chuyển đổi</td><td>Giá một kết quả</td></tr>
<tr><td>AOV</td><td>Doanh thu ÷ Số đơn</td><td>Giá trị đơn trung bình</td></tr>
<tr><td>ROAS</td><td>Doanh thu ÷ Chi phí quảng cáo</td><td>Doanh thu trên mỗi đồng quảng cáo</td></tr></table>
<p>Các chỉ số này liên hệ với nhau theo chuỗi:</p>
<div class="formula"><code>CPA = CPC ÷ CVR = CPM ÷ (1.000 × CTR × CVR)</code><br><code>ROAS = AOV ÷ CPA</code></div>
<p>Chuỗi này là công cụ chẩn đoán. Khi CPA tăng, hãy tách xem do CPM tăng (cạnh tranh, mùa vụ), CTR giảm (quảng cáo mỏi) hay CVR giảm (trang đích, giá, tồn kho).</p>`,
          res: ['google-dme-measure', 'meta-blueprint']
        },
        {
          title: 'Unit economics: CAC, LTV và điểm hoà vốn', min: 50,
          body: `<p><strong>CAC</strong> (customer acquisition cost) là tổng chi phí marketing và bán hàng chia cho số khách mới. <strong>LTV</strong> (lifetime value) là lợi nhuận gộp kỳ vọng từ một khách hàng trong suốt thời gian họ còn mua.</p>
<div class="formula"><code>LTV ≈ AOV × Tần suất mua mỗi năm × Số năm giữ chân × Biên lợi nhuận gộp</code><br><code>Thời gian hoàn vốn = CAC ÷ Lợi nhuận gộp mỗi tháng từ một khách</code></div>
<p>Tỷ lệ LTV : CAC khoảng 3 : 1 là mốc tham chiếu phổ biến trong giới đầu tư. Đây là kinh nghiệm thực hành, không phải quy luật, và phụ thuộc vào dòng tiền của từng doanh nghiệp.</p>
<p>ROAS cao chưa chắc có lãi. Mức ROAS tối thiểu để không lỗ trên đơn đầu tiên:</p>
<div class="formula"><code>ROAS hoà vốn = 1 ÷ Biên lợi nhuận gộp</code><br>Ví dụ: biên gộp 40% → ROAS hoà vốn = 2,5. ROAS 2,0 nghĩa là đang lỗ trên đơn đầu.</div>`,
          res: ['wharton-customer-analytics', 'darden-marketing-analytics']
        },
        {
          title: 'Google Analytics 4 căn bản và UTM', min: 60,
          body: `<p>GA4 ghi nhận mọi tương tác dưới dạng <strong>sự kiện</strong> (event) kèm tham số. Một số sự kiện được thu tự động (<code>page_view</code>, <code>session_start</code>, <code>first_visit</code>), số khác bạn tự cấu hình. Sự kiện quan trọng với kinh doanh được đánh dấu là <strong>key event</strong> (trước đây gọi là conversion).</p>
<h4>Ba nhóm báo cáo cần đọc được</h4>
<ul><li><strong>Acquisition:</strong> người dùng và phiên đến từ đâu.</li><li><strong>Engagement:</strong> họ làm gì, trang nào, sự kiện nào.</li><li><strong>Monetization:</strong> doanh thu, sản phẩm, hành vi mua.</li></ul>
<p>Để GA4 biết nguồn của lưu lượng không tự nhận diện được, gắn <strong>tham số UTM</strong> vào liên kết:</p>
<div class="formula"><code>?utm_source=facebook&amp;utm_medium=paid_social&amp;utm_campaign=summer_2026&amp;utm_content=video_a</code></div>
<p>Quy ước đặt tên phải thống nhất (chữ thường, không dấu, không khoảng trắng). Sai quy ước UTM là nguyên nhân hàng đầu khiến báo cáo nguồn lưu lượng bị vỡ vụn.</p>`,
          res: ['ga4-skillshop', 'ga4-demo', 'campaign-url-builder']
        },
        {
          title: 'Đọc số liệu có phê phán', min: 35,
          body: `<p><strong>Chỉ số phù phiếm</strong> (vanity metric) tăng lên trông đẹp nhưng không dẫn tới quyết định nào: lượt thích, tổng lượt xem trang, số người theo dõi. <strong>Chỉ số hành động</strong> gắn với một quyết định cụ thể. Croll và Yoskovitz trong <em>Lean Analytics</em> đưa phép thử: "Nếu chỉ số này thay đổi, tôi sẽ làm gì khác đi?"</p>
<h4>Bốn thói quen đọc số</h4>
<ul><li><strong>So sánh:</strong> một con số chỉ có nghĩa khi đặt cạnh kỳ trước, mục tiêu hoặc chuẩn ngành.</li><li><strong>Phân đoạn:</strong> tách theo nguồn, thiết bị, khách mới và khách cũ.</li><li><strong>Tỷ lệ thay cho số tuyệt đối</strong> khi đánh giá hiệu quả.</li><li><strong>Tương quan không phải nhân quả:</strong> doanh số tăng cùng lúc tăng ngân sách chưa chứng minh quảng cáo tạo ra doanh số. Level 5 dạy cách kiểm chứng.</li></ul>`,
          res: ['lean-analytics', 'kaushik-occam']
        }
      ],
      takeaways: [
        'KPI không có ngưỡng mục tiêu và phân đoạn thì không dùng để ra quyết định được.',
        '<code>CPA = CPM ÷ (1.000 × CTR × CVR)</code> là công thức chẩn đoán quan trọng nhất của performance marketing.',
        'ROAS phải so với ROAS hoà vốn, và CAC phải so với LTV.',
        'UTM nhất quán là điều kiện để mọi báo cáo về sau có nghĩa.'
      ],
      assignment: {
        title: 'Mô hình đo lường và bảng tính unit economics',
        brief: `<ol><li>Lập mô hình đo lường năm bước của Kaushik cho sản phẩm của bạn: 1 mục tiêu kinh doanh, 3 mục tiêu cụ thể, mỗi mục tiêu 1 đến 2 KPI có ngưỡng.</li><li>Tạo bảng tính nhập CPM, CTR, CVR, AOV, biên gộp và tự tính CPC, CPA, ROAS, ROAS hoà vốn. Thử ba kịch bản: xấu, trung bình, tốt.</li><li>Mở tài khoản demo GA4 của Google. Tìm ba nguồn lưu lượng có tỷ lệ key event cao nhất trong 28 ngày và ghi nhận xét.</li><li>Viết quy ước UTM một trang cho đội của bạn.</li></ol>`,
        deliverable: 'Mô hình đo lường, bảng tính kịch bản, ghi chú GA4 và tài liệu quy ước UTM.'
      },
      quiz: [
        { q: 'CPM 100.000đ, CTR 2%, CVR 5%. CPA là bao nhiêu?', a: ['50.000đ', '100.000đ', '200.000đ', '1.000.000đ'], correct: 1, why: '1.000 hiển thị cho 20 lượt nhấp, 20 lượt nhấp cho 1 chuyển đổi. Chi 100.000đ cho 1 chuyển đổi.' },
        { q: 'Biên lợi nhuận gộp 25%. ROAS hoà vốn trên đơn đầu tiên là bao nhiêu?', a: ['1,25', '2,5', '4', '25'], correct: 2, why: 'ROAS hoà vốn = 1 ÷ 0,25 = 4.' },
        { q: 'Trong GA4, hành động quan trọng với kinh doanh được đánh dấu là gì?', a: ['Goal', 'Key event', 'Hit', 'Dimension'], correct: 1, why: 'GA4 gọi các sự kiện chuyển đổi quan trọng là key event.' },
        { q: 'CPA tăng trong khi CPM và CTR không đổi. Nguyên nhân nằm ở đâu?', a: ['Cạnh tranh đấu giá tăng', 'Quảng cáo kém hấp dẫn hơn', 'Tỷ lệ chuyển đổi sau cú nhấp giảm', 'Ngân sách giảm'], correct: 2, why: 'CPA = CPM ÷ (1.000 × CTR × CVR). Nếu CPM và CTR giữ nguyên thì CVR đã giảm.' },
        { q: 'Chỉ số nào là chỉ số phù phiếm điển hình?', a: ['Tỷ lệ chuyển đổi theo nguồn', 'Tổng số người theo dõi trang', 'Chi phí mỗi khách hàng mới', 'Tỷ lệ mua lại sau 90 ngày'], correct: 1, why: 'Số người theo dõi hiếm khi dẫn tới một quyết định cụ thể.' }
      ],
      readings: ['kaushik-wa2', 'fader-customer-centricity', 'ga-certification']
    }
  ]
});
