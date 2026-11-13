/* Bài giảng đầy đủ Level 3, module 3.5 (chiến lược sáng tạo và thử nghiệm quảng cáo) và 3.6 (ngân sách, lợi nhuận và mở rộng).
   Tình huống "khách sạn An Nhiên" là ví dụ giả định; số liệu trong tình huống chỉ để minh hoạ cách phân tích. */

COURSE.lectures['m3-5'] = [

/* 3.5 bài 1 */
`<p>Khi nền tảng đã tự chọn đối tượng, vị trí và phần lớn bid, thứ marketer còn nắm trong tay gói lại còn hai: ngân sách và creative (nội dung quảng cáo). Ngân sách thì ai cũng chỉnh được. Creative mới là chỗ làm hai tài khoản chi cùng số tiền ra kết quả khác nhau. Bài này xem bằng chứng cho nhận định đó, giới hạn của bằng chứng, và cơ chế khiến creative tác động thẳng lên chi phí mỗi lượt đặt phòng.</p>
<h4>Nielsen Catalina Solutions: con số 47% thực sự nói gì</h4>
<p>Năm 2017, Nielsen Catalina Solutions (NCS) công bố phân tích gần 500 chiến dịch hàng tiêu dùng đóng gói (CPG) chạy từ năm 2016 đến quý I/2017 trên TV (truyền thống và addressable), kỹ thuật số và video trực tuyến, di động, tạp chí và radio. Họ chia <em>phần đóng góp vào doanh số mà quảng cáo tạo ra</em> cho sáu yếu tố. Theo bản tóm tắt được nhiều trang tin ngành dẫn lại (trang gốc của Nielsen không truy cập được khi biên soạn):</p>
<table><tr><th>Yếu tố</th><th>Phần đóng góp</th><th>Nghĩa là</th></tr>
<tr><td>Sáng tạo</td><td>47%</td><td>Chất lượng và thông điệp của quảng cáo</td></tr>
<tr><td>Độ phủ</td><td>22%</td><td>Bao nhiêu người trong thị trường được tiếp cận</td></tr>
<tr><td>Thương hiệu</td><td>15%</td><td>Đặc điểm sẵn có của thương hiệu như quy mô, giá, mức độ thâm nhập</td></tr>
<tr><td>Nhắm mục tiêu</td><td>9%</td><td>Chọn đúng nhóm người</td></tr>
<tr><td>Độ gần thời điểm mua</td><td>5%</td><td>Quảng cáo xuất hiện gần lúc mua</td></tr>
<tr><td>Bối cảnh hiển thị</td><td>2%</td><td>Quảng cáo nằm cạnh nội dung nào</td></tr></table>
<p>Tài liệu năm 2023 của chính NCS trình bày lại kết quả 2017 theo năm yếu tố, gộp sáng tạo và bối cảnh thành 49%. Ba cách đọc sai thường gặp, và cách đọc đúng:</p>
<ul><li><strong>47% không phải là 47% doanh số.</strong> Đó là phần của lượng doanh số <em>do quảng cáo tạo ra</em>, được quy cho sáng tạo.</li><li><strong>Mẫu là hàng tiêu dùng đóng gói, trong giai đoạn 2016 đến 2017.</strong> Sản phẩm mua lặp lại, giá thấp. Phòng khách sạn mua thưa, giá trị cao, cân nhắc lâu. Hướng kết luận có thể đúng, nhưng đừng bê nguyên con số sang ngành khác.</li><li><strong>Đây là một ước lượng của một nghiên cứu.</strong> Cách chia phần do người làm nghiên cứu định nghĩa, và các yếu tố không độc lập: sáng tạo tốt đặt sai nơi vẫn không tới người cần. Kết luận an toàn là trong dữ liệu đó, sáng tạo là yếu tố đơn lẻ lớn nhất, gấp hơn năm lần nhắm mục tiêu. Điều đó không có nghĩa nhắm mục tiêu hay độ phủ vô nghĩa.</li></ul>
<h4>System1 và IPA: nhàm chán là lãng phí</h4>
<p>System1 (Anh) đo phản ứng cảm xúc của người xem quảng cáo bằng công cụ Test Your Ad. Trong báo cáo <em>The Extraordinary Cost of Dull</em>, trình bày tại Cannes Lions 2024 và làm cùng Adam Morgan (eatbigfish) và Peter Field, quảng cáo "nhàm" được đo bằng tỷ lệ người xem phản ứng trung tính. Báo cáo dựa trên cơ sở dữ liệu hơn 100.000 quảng cáo của System1 (phần Mỹ dùng hơn 57.000 quảng cáo TV) cùng số liệu chi tiêu TV. Lập luận chính: quảng cáo nhàm không hẳn làm hại thương hiệu, nó <strong>làm lãng phí tiền media</strong>, vì cần chi nhiều hơn để đạt cùng kết quả. System1 ước tính trung bình 52% phản ứng với quảng cáo TV ở Anh và 47% ở Mỹ là trung tính. Các ước tính chi phí của báo cáo (khoảng 13,29 tỷ bảng ở Anh và 189 tỷ đô la ở Mỹ chi thêm cho quảng cáo nhàm) là của chính System1, hãy coi là minh hoạ quy mô.</p>
<p>Cùng hướng là <em>The Long and the Short of It</em> (IPA, 2013) của Les Binet và Peter Field, phân tích 996 chiến dịch trong kho dữ liệu hiệu quả của IPA. Hạn chế: dữ liệu thiên về thương hiệu lớn và thời TV thống trị. Với khách sạn 60 phòng, hãy lấy nguyên tắc (sáng tạo khơi được phản ứng thật thì đỡ tốn tiền media), không lấy con số.</p>
<h4>Vì sao sáng tạo tác động thẳng vào giá bạn trả</h4>
<p>Ở module 3.1 bạn đã học rằng phiên đấu giá xếp hạng quảng cáo không chỉ theo giá thầu mà còn theo khả năng người xem hành động và chất lượng trải nghiệm. Sáng tạo đi vào đúng chỗ đó, qua ba đường:</p>
<ol><li><strong>Quyết định ai dừng lại.</strong> Khi đối tượng được mở rộng (module 3.3), hệ thống học từ những người phản ứng với quảng cáo của bạn rồi tìm thêm người giống họ. Video nói về một khoảng lặng giữa thành phố và video nói về đêm sôi động sẽ kéo hai nhóm người khác nhau. Sáng tạo vì thế là một dạng nhắm mục tiêu.</li><li><strong>Ảnh hưởng tỷ lệ hành động ước tính, tức ảnh hưởng giá.</strong> Quảng cáo được phản hồi tốt thì cùng một mức giá thầu giành được nhiều lượt hiển thị hơn, hoặc cùng lượng hiển thị thì rẻ hơn.</li><li><strong>Mang thông điệp.</strong> Khách chỉ thấy quảng cáo, không thấy chiến lược của bạn.</li></ol>
<p>Hãy nối lại với chuỗi chẩn đoán ở module 1.4:</p>
<div class="formula"><code>CPA = CPM ÷ (1.000 × CTR × CVR)</code><br>(Số liệu minh hoạ.) CPM 50.000đ, CVR 1,25%. Nếu quảng cáo cũ có CTR 0,8%: CPA = 50.000 ÷ (1.000 × 0,008 × 0,0125) = 500.000đ. Nếu quảng cáo mới nâng CTR lên 1,2% mà CVR giữ nguyên: CPA = 50.000 ÷ (1.000 × 0,012 × 0,0125) ≈ 333.000đ.</div>
<p>Với 15 triệu đồng, CPA 500.000đ mua 30 lượt đặt, CPA 333.000đ mua 45 lượt: hơn 50%. Để có thêm 15 lượt đó bằng cách tăng ngân sách ở CPA 500.000đ, bạn phải chi thêm 7,5 triệu. Cải thiện sáng tạo vì thế thường rẻ hơn mua thêm lượt hiển thị.</p>
<div class="callout"><b>Lưu ý:</b> ví dụ trên giả định CVR không đổi. Quảng cáo gây tò mò có thể tăng CTR và kéo CVR xuống, vì người nhấp không phải người muốn đặt. Sáng tạo tốt là sáng tạo thu hút <em>đúng người</em>, không phải nhiều người.</div>
<div class="case"><b>Tình huống: An Nhiên nhìn lại bộ quảng cáo hiện có</b>
<p>Quảng cáo mạng xã hội của An Nhiên hiện gồm bốn ảnh phòng và hồ bơi, kèm dòng chữ "Đặt trực tiếp để có giá tốt nhất", dùng chung cho mọi đối tượng. Đối chiếu với bảng thông điệp ở module 1.3: không quảng cáo nào dùng ba trụ (đi bộ được tới mọi nơi, có người lo cho bạn, một khoảng lặng giữa thành phố), không có người, không có đánh giá thật, không phân biệt cặp đôi Úc đang lên kế hoạch với cặp đôi Singapore đang so sánh khách sạn.</p>
<p><strong>Quyết định:</strong> trước khi xin thêm ngân sách để nâng tỷ trọng đặt trực tiếp từ 22% lên 30%, An Nhiên dành quý này cho sáng tạo. Hai bài tới xây ma trận góc tiếp cận và kịch bản video; bài 4 đặt kế hoạch thử, vì mỗi chiến dịch chỉ có vài chục lượt đặt mỗi tháng nên không có chỗ cho thử nghiệm tuỳ tiện.</p></div>
<div class="pitfall"><b>Sai lầm thường gặp</b><ul><li>Dẫn "sáng tạo chiếm 47%" như một quy luật chung, không nói đó là hàng tiêu dùng đóng gói năm 2016 đến 2017.</li><li>Đồng nhất sáng tạo với "đẹp". Một quảng cáo xấu mà nói đúng điều người xem đang lo có thể thắng quảng cáo bóng bẩy.</li><li>Tối ưu theo CTR đơn thuần, dẫn tới quảng cáo gây tò mò kéo sai người.</li><li>Chọn quảng cáo theo gu của đội thay vì theo dữ liệu.</li></ul></div>
<div class="think"><b>Dừng lại và tự hỏi</b><ol><li>Nếu bạn nâng CTR của quảng cáo chính thêm một phần ba mà CVR giữ nguyên, CPA của bạn đổi thế nào? Tự tính bằng chuỗi CPM, CTR, CVR.</li><li>Quảng cáo hiện tại của bạn nói với ai? Nếu che logo đi, đối thủ có dùng được nguyên văn không?</li><li>Bạn đang đo sáng tạo bằng chỉ số nào: CTR, CPA, hay cảm giác của cả đội?</li></ol></div>`,

/* 3.5 bài 2 */
`<p>Ý tưởng quảng cáo thường bắt đầu từ câu hỏi "làm video gì?". Đó là điểm xuất phát sai. Câu hỏi đúng là: ai đang nghĩ gì, ở giai đoạn nào của quyết định, và điều gì khiến họ dừng lại? Ma trận góc tiếp cận biến câu hỏi đó thành một bảng có thể điền, kiểm tra và xếp ưu tiên, thay cho buổi họp ý tưởng tuỳ hứng.</p>
<h4>Góc tiếp cận, định dạng và biến thể: ba tầng khác nhau</h4>
<ul><li><strong>Góc tiếp cận (angle):</strong> lý do cụ thể khiến một nhóm người quan tâm. Ví dụ: "ngày đầu ở Sài Gòn không cần thuê xe".</li><li><strong>Định dạng:</strong> cách kể góc đó. Ví dụ: video một cú quay đi bộ từ cổng khách sạn ra chợ.</li><li><strong>Biến thể:</strong> chi tiết thay đổi trong cùng một góc và định dạng: hook, ảnh bìa, câu mở đầu, nút kêu gọi.</li></ul>
<p>Lỗi phổ biến là thử hàng chục biến thể của cùng một góc rồi gọi đó là đa dạng. Thay màu nút không thay đổi lý do để quan tâm. Bước nhảy lớn đến từ đổi góc, bài 4 sẽ quay lại điểm này.</p>
<h4>Ba trục của ma trận</h4>
<p><strong>Trục 1, ai.</strong> Persona hoặc "công việc cần hoàn thành" (module 1.3). Càng cụ thể càng dễ viết: "cặp đôi Úc, 3 đến 4 đêm, lần đầu tới Sài Gòn" viết dễ hơn "khách quốc tế".</p>
<p><strong>Trục 2, động cơ.</strong> Bốn loại: nỗi đau cần tránh, kết quả mong muốn, bản sắc muốn thể hiện (người như tôi chọn nơi như thế này), và phản đối cần gỡ (nghe nói khu đó ồn).</p>
<p><strong>Trục 3, mức nhận biết.</strong> Eugene Schwartz, trong <em>Breakthrough Advertising</em> (1966), mô tả năm mức nhận biết của người xem; các nhãn ngắn dưới đây là cách giới làm nghề hay tóm lại, không phải nguyên văn sách (chưa kiểm chứng được với bản gốc). Đây là khung thực hành, không phải định luật khoa học, nhưng rất hữu ích để khỏi nói lệch chuyện:</p>
<table><tr><th>Mức nhận biết</th><th>Người xem đang nghĩ</th><th>Thông điệp cần</th><th>Ví dụ An Nhiên</th></tr>
<tr><td>Chưa biết vấn đề</td><td>Chưa nghĩ tới việc này</td><td>Câu chuyện, đồng cảm</td><td>"Bạn muốn ngày đầu ở Sài Gòn như thế nào?"</td></tr>
<tr><td>Biết vấn đề</td><td>Đang lo, chưa biết cách giải</td><td>Gọi tên nỗi lo, chỉ hướng</td><td>"Sợ lạc, sợ ồn, sợ chọn nhầm khu?"</td></tr>
<tr><td>Biết giải pháp</td><td>Đang so các lựa chọn</td><td>Điểm khác biệt</td><td>"Khách sạn nhỏ, có người lo cho bạn"</td></tr>
<tr><td>Biết sản phẩm</td><td>Đã biết An Nhiên, chưa đặt</td><td>Bằng chứng, lý do tin</td><td>Đánh giá thật, ảnh khách chụp</td></tr>
<tr><td>Sẵn sàng mua</td><td>Chỉ còn một nỗi lo cuối</td><td>Gỡ lo, quyền lợi đặt trực tiếp</td><td>Chính sách đổi phòng, quyền lợi đặt trực tiếp</td></tr></table>
<p>Dùng nhầm mức là lỗi rất phổ biến: đưa ưu đãi cho người chưa biết mình là ai, hoặc kể câu chuyện dài cho người đã sắp bấm đặt.</p>
<h4>Lấy chất liệu từ đâu</h4>
<ul><li><strong>Ngôn ngữ thật của khách:</strong> đánh giá trên sàn, Google và Tripadvisor, câu hỏi khách nhắn cho lễ tân, phỏng vấn (module 1.3). Cụm "walking distance to everything" xuất hiện nhiều lần trong đánh giá của An Nhiên, đáng dùng nguyên văn.</li><li><strong>Từ khoá và truy vấn tìm kiếm</strong> cho biết người ta thực sự hỏi gì.</li><li><strong>Quảng cáo của người khác:</strong> Meta Ad Library cho xem các quảng cáo đang chạy của bất kỳ trang nào; TikTok Creative Center cho xem quảng cáo nổi bật theo ngành và quốc gia cùng xu hướng âm thanh. Dùng để học cấu trúc và tìm khoảng trống, không để sao chép. Ad Library không cho biết quảng cáo có hiệu quả hay không, chỉ cho biết nó đang được chạy.</li></ul>
<h4>Nhân với định dạng, rồi chọn</h4>
<p>Mỗi ô của ma trận (ai, động cơ, mức nhận biết) có thể kể bằng nhiều định dạng: video người thật quay, trước và sau, so sánh, hướng dẫn, lời chứng thực, nhân viên kể chuyện, ảnh tĩnh nêu một lợi ích, băng chuyền. Đừng sản xuất hết. Chấm mỗi ô theo bốn tiêu chí, mỗi tiêu chí 1 đến 3 điểm:</p>
<ul><li><strong>Quy mô:</strong> có đủ người thuộc ô này không.</li><li><strong>Bằng chứng:</strong> có thấy ô này trong dữ liệu thật (đánh giá, tin nhắn, tìm kiếm) không.</li><li><strong>Khác biệt:</strong> đối thủ đã nói điều này chưa.</li><li><strong>Khả thi:</strong> sản phẩm thật sự làm được điều quảng cáo hứa không.</li></ul>
<p>Tiêu chí cuối quan trọng nhất với dịch vụ. Quảng cáo hứa điều khách sạn không làm được tạo ra đánh giá xấu, huỷ phòng và mất lòng tin, hậu quả tốn kém hơn một quảng cáo kém hiệu quả.</p>
<div class="case"><b>Tình huống: sáu ô được chọn của An Nhiên</b>
<p>Hai persona ưu tiên: cặp đôi Úc ở 3 đến 4 đêm (chủ yếu ở mức chưa biết hoặc biết vấn đề), cặp đôi Singapore (đã biết Sài Gòn, đang so sánh khách sạn nhỏ).</p>
<table><tr><th>Ai, mức nhận biết</th><th>Động cơ</th><th>Góc tiếp cận</th><th>Định dạng đầu tiên</th><th>Trụ</th></tr>
<tr><td>Cặp đôi Úc, chưa biết vấn đề</td><td>Nỗi đau: sợ ngày đầu rối và mệt</td><td>Ngày đầu ở Sài Gòn không cần thuê xe</td><td>Video một cú quay đi bộ từ cổng ra chợ Bến Thành</td><td>Đi bộ được tới mọi nơi</td></tr>
<tr><td>Cặp đôi Úc, biết vấn đề</td><td>Kết quả: ba ngày trọn vẹn, không phải tự lên kế hoạch</td><td>Có người vẽ sẵn lịch trình cho bạn</td><td>Video nhân viên phụ trách vẽ bản đồ</td><td>Có người lo cho bạn</td></tr>
<tr><td>Cặp đôi Singapore, biết giải pháp</td><td>Phản đối: Sài Gòn ồn</td><td>Sài Gòn ồn. Đây là điều chúng tôi làm về chuyện đó.</td><td>Ảnh tĩnh và video ngắn về phòng mặt trong, cam kết đổi phòng</td><td>Khoảng lặng giữa thành phố</td></tr>
<tr><td>Cặp đôi Singapore, biết giải pháp</td><td>Bản sắc: nơi có gu để kể lại</td><td>Hồ bơi tầng thượng chỉ dành cho khách lưu trú</td><td>Ảnh và video của chính khách, đã xin phép</td><td>Khoảng lặng giữa thành phố</td></tr>
<tr><td>Cả hai, biết sản phẩm</td><td>Phản đối: sàn có rẻ hơn không</td><td>Đặt trực tiếp được thêm gì</td><td>Ảnh tĩnh nêu quyền lợi, như nâng hạng phòng khi còn phòng</td><td>Có người lo cho bạn</td></tr>
<tr><td>Cả hai, sẵn sàng mua</td><td>Nỗi lo cuối: có đúng như ảnh không</td><td>Ba câu khách hỏi nhiều nhất trước khi đặt</td><td>Băng chuyền ba thẻ cho nhóm đã xem trang đặt phòng</td><td>Cả ba</td></tr></table>
<p>Hai điều kiện đi kèm. Góc thứ ba chỉ chạy khi phòng cách âm và chính sách đổi phòng đã vận hành thật, đúng như nguyên tắc ở module 1.3: thông điệp chỉ nói được điều sản phẩm đã làm được. Góc thứ năm chỉ nêu quyền lợi mà khách sạn cam kết bằng văn bản; không viết "giá tốt nhất" nếu giá trên sàn đôi khi thấp hơn.</p></div>
<div class="pitfall"><b>Sai lầm thường gặp</b><ul><li>Lập ma trận hàng trăm ô rồi không ô nào đủ ngân sách để thử.</li><li>Coi ma trận là sự thật. Mỗi ô là một giả thuyết cần kiểm tra.</li><li>Sao chép góc của đối thủ vì thấy họ chạy lâu. Chạy lâu có thể chỉ vì chưa ai xem lại.</li><li>Hứa trong quảng cáo điều mà trải nghiệm không giữ được.</li></ul></div>
<div class="think"><b>Dừng lại và tự hỏi</b><ol><li>Với mỗi persona, bạn viết được một câu nguyên văn khách từng nói về nỗi lo lớn nhất của họ không? Câu đó lấy từ đâu?</li><li>Quảng cáo gần nhất của bạn nhắm ở mức nhận biết nào? Có khớp với người đang xem không?</li><li>Trong sáu góc bạn chọn, góc nào sản phẩm của bạn chưa chắc làm được?</li></ol></div>`,

/* 3.5 bài 3 */
`<p>Người xem trên mạng xã hội không chọn xem bạn. Họ đang lướt nội dung của bạn bè và creator, và quảng cáo phải giành được vài giây đầu trước khi ngón tay lướt tiếp. Bài này chỉ cấu trúc một video quảng cáo làm được việc đó, cách ra nhiều biến thể rẻ từ một buổi quay, và những con số dùng để chẩn đoán.</p>
<h4>Quảng cáo khác video tự nhiên ở đâu</h4>
<p>Module 2.3 dạy cấu trúc hook, thân bài, kêu gọi cho nội dung tự nhiên, nơi mục tiêu là được xem và được theo dõi. Quảng cáo dùng cùng khung nhưng thêm hai gánh nặng: phải mang bằng chứng (người xem chưa tin bạn) và phải dẫn tới một hành động đo được (đặt phòng). Quy trình gồm năm phần:</p>
<ol><li><strong>Hook (0 đến 3 giây):</strong> khiến đúng người dừng lại.</li><li><strong>Vấn đề hoặc lợi ích:</strong> vì sao điều này quan trọng với họ.</li><li><strong>Minh hoạ:</strong> cho thấy, đừng chỉ nói.</li><li><strong>Bằng chứng:</strong> đánh giá thật, con số có nguồn, cảnh quay không dàn dựng.</li><li><strong>Kêu gọi:</strong> làm gì tiếp theo và vì sao nên làm bây giờ.</li></ol>
<p>Các nền tảng đưa ra hướng dẫn tương tự nhau. Google, cho video trên YouTube, dùng khung ABCD. Trang trợ giúp Google Ads hiện gọi là <em>Attention</em> (thu hút ngay từ đầu), <em>Branding</em> (đưa thương hiệu vào sớm và tự nhiên), <em>Connection</em> (kết nối bằng cảm xúc và câu chuyện), <em>Direction</em> (nói rõ bước tiếp theo); tài liệu cũ hơn ghi Attract, Brand, Connect, Direct. TikTok khuyến nghị quay dọc 9:16 và dùng phụ đề hoặc chữ trên màn hình; Meta khuyến nghị 9:16 cho Reels và giữ nội dung chính trong vùng an toàn. Cả hai đều muốn quảng cáo trông như nội dung gốc của nền tảng. Trang hướng dẫn của từng nền tảng thay đổi, hãy đọc bản hiện hành trước khi sản xuất.</p>
<h4>Hook: ba kiểu và một chức năng ẩn</h4>
<ul><li><strong>Gọi tên người xem hoặc nỗi lo:</strong> "Lần đầu tới Sài Gòn và sợ mọi thứ quá sức?"</li><li><strong>Đưa kết quả hoặc điều bất ngờ có bằng chứng:</strong> "Từ cổng khách sạn tới chợ Bến Thành: 5 phút đi bộ." (kèm đồng hồ trên màn hình)</li><li><strong>Phá kỳ vọng:</strong> nhân viên lễ tân cầm bản đồ giấy: "Đây là thứ duy nhất bạn cần mang theo, chúng tôi vẽ cho bạn."</li></ul>
<p>Chức năng ẩn: khi nền tảng nhắm rộng, <strong>hook là bộ lọc đối tượng</strong>. Hook gọi đúng "cặp đôi tới Sài Gòn ba đêm" khiến những người không phải đối tượng lướt qua, và tiết kiệm tiền cho người còn lại. Nhớ ngôn ngữ: với khách Úc và Singapore, hook, chữ trên màn hình và phụ đề nên bằng tiếng Anh; bản tiếng Việt dùng cho thị trường trong nước.</p>
<h4>Một kịch bản mẫu</h4>
<table><tr><th>Giây</th><th>Hình</th><th>Chữ và lời</th><th>Vai trò</th></tr>
<tr><td>0 đến 3</td><td>Quay từ trong ra cổng khách sạn, đồng hồ bắt đầu chạy</td><td>"Ben Thanh Market: 5 minutes on foot."</td><td>Hook</td></tr>
<tr><td>3 đến 12</td><td>Một cú quay liền đi bộ qua đường, đến cổng chợ; đồng hồ dừng ở thời gian thật</td><td>Phụ đề: "No taxi. No map apps."</td><td>Minh hoạ, lợi ích</td></tr>
<tr><td>12 đến 18</td><td>Màn hình đánh giá thật (đã xin phép), nhấn cụm trích</td><td>"Walking distance to everything."</td><td>Bằng chứng</td></tr>
<tr><td>18 đến 24</td><td>Nhân viên phụ trách nói với camera</td><td>"Book direct and message us. We will draw your walking plan."</td><td>Kêu gọi</td></tr></table>
<p>Điều cần giữ: thời gian đi bộ trên đồng hồ là thời gian đo thật, và quyền lợi nêu ở kêu gọi là quyền lợi khách sạn thật sự cung cấp.</p>
<h4>Một thân bài, nhiều hook</h4>
<p>Quay một lần, dựng nhiều bản. Đoạn từ giây 3 đến 24 giữ nguyên; quay ba hook khác nhau, mỗi hook khoảng ba giây, trong cùng một buổi. Chi phí quay thêm gần như bằng không, và khi thử bạn so được hook với nhau mà không đổi gì khác. Cũng quay sẵn cảnh dự phòng: bản dọc 9:16 là chính, thêm một đoạn cảnh rộng cho ảnh tĩnh và băng chuyền.</p>
<h4>Đo gì để hiểu, đo gì để quyết định</h4>
<table><tr><th>Chỉ số</th><th>Trả lời câu hỏi</th><th>Lưu ý</th></tr>
<tr><td>Tỷ lệ xem 3 giây (hook rate)</td><td>Hook có giữ được người xem không</td><td>Thường tính lượt xem 3 giây chia lượt hiển thị; tên và cách tính khác nhau giữa các nền tảng</td></tr>
<tr><td>Tỷ lệ xem tiếp (hold rate)</td><td>Thân bài có giữ chân không</td><td>Quy ước của giới thực hành, không phải chỉ số chính thức</td></tr>
<tr><td>CTR liên kết, chi phí mỗi lượt xem trang đặt phòng</td><td>Có kéo đúng người tới website không</td><td>Chỉ số trung gian</td></tr>
<tr><td>CPA, chi phí mỗi lượt đặt</td><td>Có sinh ra đặt phòng không</td><td>Chỉ số quyết định, nhưng cần đủ dữ liệu (bài 4)</td></tr></table>
<p>Hook rate cao mà CPA xấu thường có nghĩa hook hứa điều thân bài hoặc trang đặt phòng không giữ, hoặc hook thu hút sai người. Nguyên tắc: chỉ số trung gian giúp hiểu <em>vì sao</em>, chỉ số cuối quyết định <em>cái nào thắng</em>.</p>
<div class="case"><b>Tình huống: buổi quay hai giờ của An Nhiên</b>
<p>An Nhiên dành một buổi sáng quay cho trụ "đi bộ được tới mọi nơi": một thân bài như bảng trên, ba hook (gọi tên nỗi lo, kết quả có đồng hồ, bản đồ giấy) bằng tiếng Anh, một bản phụ đề tiếng Việt, và năm ảnh tĩnh tách từ cảnh quay. Người quay là nhân viên lễ tân, dùng điện thoại và một chân máy rẻ. Đánh giá nhắc tới trong bằng chứng được xin phép bằng tin nhắn trước khi dùng.</p>
<p>Kết quả: một buổi quay cho ba video, năm ảnh tĩnh và một đoạn dùng cho remarketing. Chi phí bằng giờ công của hai nhân viên. Bài 4 dùng bộ này để dựng kế hoạch thử.</p></div>
<div class="pitfall"><b>Sai lầm thường gặp</b><ul><li>Mở đầu bằng logo hoặc cảnh toàn khách sạn rồi mới tới nội dung.</li><li>Hook hứa điều thân bài không giao.</li><li>Quay ngang rồi cắt thành dọc, mất nửa khung hình.</li><li>Không có phụ đề hoặc chữ trên màn hình.</li><li>Dùng cảnh dàn dựng hoặc đồ hoạ làm đẹp để chứng minh điều có thể kiểm chứng ngoài đời, như thời gian đi bộ.</li><li>Đánh giá thành công theo lượt thích.</li></ul></div>
<div class="think"><b>Dừng lại và tự hỏi</b><ol><li>Hook của bạn lọc ra đúng đối tượng, hay thu hút bất kỳ ai?</li><li>Nếu tắt tiếng, người xem vẫn hiểu video trong 10 giây đầu không?</li><li>Bằng chứng trong quảng cáo có kiểm chứng được ngoài đời không?</li></ol></div>`,

/* 3.5 bài 4 */
`<p>Phần lớn creative test hỏng không phải vì ý tưởng dở mà vì thiết kế: đổi hai thứ cùng lúc, kết luận từ vài lượt chuyển đổi, hoặc dừng đúng hôm quảng cáo nào đó "đang dẫn". Bài này chỉ cách thiết kế một chuỗi thử đủ sạch để học được điều có thật, và đủ nhỏ để khách sạn 60 phòng chi nổi.</p>
<h4>Hai cấp độ thử, và thứ tự đúng</h4>
<ul><li><strong>Thử khái niệm:</strong> so các góc tiếp cận hoặc định dạng khác hẳn nhau.</li><li><strong>Thử lặp:</strong> trên khái niệm đã thắng, thử hook, tiêu đề, ảnh bìa, lời kêu gọi.</li></ul>
<p>Khái niệm đi trước vì thử có hiệu ứng lớn thì cần ít dữ liệu để thấy. Như bài về A/B ở module 2.5: dữ liệu cần tăng theo bình phương khi muốn phát hiện chênh lệch nhỏ hơn. Với một khách sạn chỉ có vài chục lượt đặt mỗi tháng, chỉ những khác biệt lớn mới phát hiện được, nên chọn thử những thứ có thể tạo khác biệt lớn.</p>
<h4>Vì sao nền tảng làm méo phép so sánh</h4>
<p>Đặt bốn quảng cáo trong cùng một nhóm quảng cáo, hệ thống phân phối thường dồn chi tiêu rất sớm cho một hoặc hai quảng cáo mà nó dự đoán là tốt. Điều đó có nghĩa hệ thống <em>dự đoán</em> như thế, chưa có nghĩa các quảng cáo còn lại kém. Chúng chưa nhận đủ cơ hội. Muốn so sánh công bằng, có hai cách:</p>
<ul><li><strong>Công cụ thử của nền tảng.</strong> Theo Meta, A/B test (làm trong Ads Manager hoặc công cụ Experiments) chia đối tượng để không ai thấy cả hai phiên bản, và bạn đổi một biến để so; Meta cũng khuyên dùng cùng ngân sách cho hai bên. Meta còn có tính năng creative testing trong chiến dịch đang chạy: chọn 2 đến 7 quảng cáo, đặt ngân sách thử chia đều cho các biến thể; trang trợ giúp hiện ghi nó chỉ hỗ trợ chiến lược Highest volume. Điều kiện này có thể đổi, hãy đọc trang hiện hành. TikTok có Split Test, chia đối tượng thành hai nhóm bằng nhau; trang trợ giúp của TikTok mô tả thử nghiệm được thiết kế với mức tin cậy 90% và chỉ chọn người thắng khi kết quả có ý nghĩa thống kê. Với Google, quảng cáo tìm kiếm thích ứng ghép tiêu đề và mô tả tự động nên nhiều thử nghiệm chạy ở cấp chiến dịch bằng Experiments. Điểm "Ad strength" của Google là gợi ý cải thiện bộ tài sản, không phải dự đoán hiệu quả, và không dùng trong xếp hạng đấu giá.</li><li><strong>Nhóm quảng cáo riêng, ngân sách cố định như nhau.</strong> Kém chặt hơn (đối tượng có thể chồng nhau, hệ thống vẫn tối ưu riêng từng nhóm) nhưng dùng được ở mọi nền tảng.</li></ul>
<h4>Ngưỡng chi tiêu: quy tắc thực hành và giới hạn thống kê</h4>
<p>Giới thực hành thường nói: đừng loại một quảng cáo trước khi nó chi ít nhất 1 đến 2 lần CPA mục tiêu. Đây là quy tắc kinh nghiệm, không phải thống kê. Với CPA 333.000đ, hai lần là 666.000đ, khoảng một đến hai lượt đặt: không đủ để biết gì. Dùng quy tắc này chỉ để cắt quảng cáo hiển nhiên hỏng (không ai nhấp), tuyệt đối không dùng để tuyên bố quảng cáo thắng.</p>
<div class="formula"><code>n ≈ 16 × p × (1 − p) ÷ δ²</code> (công thức gần đúng ở module 2.5; n là số mẫu mỗi nhóm, p là tỷ lệ hiện tại, δ là chênh lệch tuyệt đối muốn phát hiện)</div>
<h4>Kế hoạch thử cho ngân sách của An Nhiên</h4>
<p>(Số liệu minh hoạ.) CPM 50.000đ, CTR liên kết 1,2%, CVR 1,25%, tức CPC khoảng 4.167đ và CPA khoảng 333.000đ. Chia hai giai đoạn:</p>
<table><tr><th></th><th>Giai đoạn 1: sàng lọc khái niệm</th><th>Giai đoạn 2: kiểm chứng</th></tr>
<tr><td>Số nhánh và tiền</td><td>6 khái niệm × 3 triệu = 18 triệu</td><td>2 nhánh (người dẫn đầu và bản đang chạy) × 10 triệu = 20 triệu</td></tr>
<tr><td>Mỗi nhánh nhận</td><td>60.000 lượt hiển thị, khoảng 720 lượt nhấp</td><td>Khoảng 2.400 lượt nhấp, khoảng 30 lượt đặt</td></tr>
<tr><td>Chỉ số quyết định</td><td>Hook rate, CTR liên kết, chi phí mỗi lượt vào bước thanh toán</td><td>Chi phí mỗi lượt đặt</td></tr>
<tr><td>Chênh lệch nhỏ nhất phân biệt được</td><td>CTR chênh khoảng 0,18 điểm phần trăm (1,2% so với 1,38%)</td><td>CVR chênh khoảng 0,9 điểm phần trăm (1,25% lên khoảng 2,16%, tức hơn 70%)</td></tr>
<tr><td>Thời lượng</td><td>Khoảng 2 tuần</td><td>Ít nhất 2 đến 3 tuần, vì khách Úc thường đặt sau nhiều ngày cân nhắc</td></tr></table>
<p>Kiểm tra phép tính: 3.000.000 ÷ 50.000 × 1.000 = 60.000 lượt hiển thị; 60.000 × 1,2% = 720 nhấp; với n = 60.000, p = 1,2%: δ ≈ √(16 × 0,012 × 0,988 ÷ 60.000) ≈ 0,0018, tức 0,18 điểm. Giai đoạn 2: 10.000.000 ÷ 4.167 ≈ 2.400 nhấp; 2.400 × 1,25% = 30 lượt đặt; δ ≈ √(16 × 0,0125 × 0,9875 ÷ 2.400) ≈ 0,0091.</p>
<p>Tổng 38 triệu đồng, khoảng 12,7% một tháng ngân sách 300 triệu, và các lượt đặt trong thử nghiệm vẫn là doanh thu thật. Hai bài học trung thực từ bảng này. Một: ở giai đoạn 2, chỉ chênh lệch trên 70% mới phân biệt được với may rủi, nên quyết định chủ yếu dựa vào hướng và chi phí chọn sai, không phải bằng chứng chắc chắn. Hai: chọn người thắng từ sáu khái niệm ở giai đoạn 1 có xu hướng chọn cả người gặp may, và chỉ số trung gian chưa chắc dự đoán lượt đặt, nên giai đoạn 2 là bắt buộc.</p>
<h4>Quy tắc quyết định viết trước, và nhật ký học hỏi</h4>
<ul><li>Chênh lệch CPA ở giai đoạn 2 lớn (ví dụ trên 30%) theo hướng có lợi và nhánh mới đạt ít nhất khoảng 25 lượt đặt: chuyển sang chiến dịch chính, ghi rõ là "chưa chắc chắn".</li><li>Chênh lệch trong khoảng đó: coi là ngang nhau, giữ bản rẻ sản xuất hơn hoặc nhất quán với thương hiệu hơn.</li><li>Nhánh mới tệ hơn rõ: dừng, xem lại giả thuyết.</li></ul>
<p>Ngưỡng 30% là quy tắc kinh doanh (chi phí chọn sai nhỏ), không phải ngưỡng ý nghĩa thống kê. Mỗi thử nghiệm ghi vào <strong>nhật ký học hỏi</strong>: mã, giả thuyết, ô ma trận, cấu hình, chi tiêu, kết quả chính và phụ, quyết định, bài học và đường dẫn tới quảng cáo. Sau sáu tháng, đó là tài sản quý nhất của đội.</p>
<div class="pitfall"><b>Sai lầm thường gặp</b><ul><li>Thử đồng thời góc, định dạng và đối tượng, rồi không biết cái nào tạo ra chênh lệch.</li><li>Dừng ngay khi một nhánh "đang dẫn đầu" sau vài ngày.</li><li>Kết luận từ vài lượt đặt.</li><li>Để chi tiêu giữa các nhánh chênh nhau nhiều mà vẫn so CPA như thể công bằng.</li><li>Không ghi nhật ký, nên sáu tháng sau thử lại đúng điều đã thất bại.</li></ul></div>
<div class="think"><b>Dừng lại và tự hỏi</b><ol><li>Với CPA và ngân sách của bạn, mỗi nhánh thử sẽ có khoảng bao nhiêu lượt chuyển đổi? Chênh lệch nhỏ nhất bạn phân biệt được là bao nhiêu?</li><li>Quy tắc quyết định của bạn đã viết ra trước khi thử chưa?</li><li>Nếu kết quả không kết luận, bạn sẽ làm gì?</li></ol></div>`,

/* 3.5 bài 5 */
`<p>Mỗi quảng cáo có tuổi thọ. Đối tượng càng nhỏ và ngân sách càng lớn thì tuổi thọ càng ngắn, vì cùng những người đó thấy cùng một quảng cáo nhiều lần. Với doanh nghiệp nhắm vào một nhóm hẹp như cặp đôi Úc và Singapore tới Sài Gòn, hiện tượng này đến sớm. Bài này dạy phân biệt mỏi quảng cáo với các nguyên nhân khác, cách làm mới theo tầng, và nhịp sản xuất đủ nuôi chu trình thử.</p>
<h4>Vì sao quảng cáo mỏi</h4>
<p>Andrew Chen mô tả "Law of Shitty Clickthroughs": theo thời gian, tỷ lệ nhấp của mọi chiến lược marketing đều suy giảm. Ông nêu ba lực. Tính mới phai dần: người ta nhấp vì tò mò rồi học cách phớt lờ. Người đi đầu bị bắt chước: đối thủ thấy cái gì hiệu quả và làm theo. Và quy mô pha loãng chất lượng: những người phản ứng tốt nhất đến trước, càng mở rộng càng gặp người khó hơn. Ông cũng chỉ ra hệ quả: số liệu từ thử nghiệm nhỏ thường lạc quan hơn kết quả khi mở rộng, ảnh hưởng tới dự báo CAC và hoàn vốn (module 3.6).</p>
<h4>Mỏi hay một thứ khác</h4>
<p>CPA tăng không tự động có nghĩa quảng cáo mỏi. Dùng chuỗi CPM, CTR, CVR ở module 1.4 để tách:</p>
<table><tr><th>Quan sát</th><th>Nguyên nhân gợi ý</th><th>Cách kiểm</th></tr>
<tr><td>Frequency tăng, hook rate và CTR giảm dần, CPM ổn định</td><td>Mỏi sáng tạo</td><td>So với đợt đầu của chính quảng cáo; quảng cáo mới trong cùng nhóm có còn tốt không</td></tr>
<tr><td>CPM tăng ở mọi quảng cáo cùng lúc, frequency không đổi</td><td>Đấu giá nóng lên: mùa cao điểm, đối thủ</td><td>So với cùng kỳ năm trước; các nhóm khác của tài khoản</td></tr>
<tr><td>CTR ổn định, CVR giảm</td><td>Trang đặt phòng, giá, lỗi theo dõi</td><td>Kiểm tra trang trên thiết bị phổ biến (module 2.5); đối chiếu với hệ thống đặt phòng</td></tr>
<tr><td>Mọi quảng cáo trong cùng nhóm đều xấu đi, kể cả mới</td><td>Đối tượng bão hoà</td><td>Xem số người tiếp cận so với quy mô đối tượng</td></tr></table>
<p>(Số liệu minh hoạ.) Giả sử nhóm khách tiềm năng có thể tiếp cận là 400.000 người. Chi 30 triệu với CPM 50.000đ cho 600.000 lượt hiển thị, tiếp cận 240.000 người: frequency 2,5. Nếu nhân đôi ngân sách lên 60 triệu, 1,2 triệu lượt hiển thị chỉ tiếp cận thêm khoảng 90.000 người (tổng 330.000): frequency lên 3,6. Chi gấp đôi mà số người tiếp cận chỉ tăng 38%. Đây là lúc mỏi quảng cáo và lợi suất giảm dần gặp nhau (bài 2 của module 3.6).</p>
<h4>Làm mới theo tầng, từ rẻ đến đắt</h4>
<table><tr><th>Tầng</th><th>Thay đổi</th><th>Công sức</th><th>Khi nào</th></tr>
<tr><td>1. Hook</td><td>Giữ thân bài, thay vài giây đầu</td><td>Một buổi dựng</td><td>Hook rate giảm, thân bài vẫn ổn</td></tr>
<tr><td>2. Định dạng</td><td>Cùng góc, kể bằng cách khác (video sang băng chuyền, người thật sang ảnh tĩnh)</td><td>Một buổi quay nhỏ</td><td>Hook mới cũng chỉ cải thiện ngắn</td></tr>
<tr><td>3. Góc tiếp cận</td><td>Lý do mới để quan tâm, từ ô khác của ma trận</td><td>Nghiên cứu và quay lại</td><td>Cả nhóm góc cũ đã bão hoà</td></tr></table>
<p>Hai nguyên tắc. Một: có sẵn sáng tạo mới <em>trước</em> khi cái cũ mỏi, vì đợi hiệu suất rơi rồi mới sản xuất nghĩa là mất vài tuần chi tiền kém hiệu quả. Hai: quảng cáo từng thắng có thể quay lại sau vài tháng, khi nhóm đối tượng đã thay đổi. Đừng xoá, hãy lưu và ghi chú trong nhật ký.</p>
<h4>Nhịp sản xuất</h4>
<p>Nhịp sản xuất nên tỷ lệ với chi tiêu và với độ hẹp của đối tượng. Không có con số chung; hãy bắt đầu từ năng lực của đội rồi điều chỉnh theo tần suất xuất hiện dấu hiệu mỏi. Chu trình: nghiên cứu (đánh giá, tin nhắn, ma trận) → ý tưởng → sản xuất → thử (bài 4) → học (nhật ký) → lặp lại.</p>
<h4>Công cụ AI tạo sinh</h4>
<p>Công cụ AI giúp tạo nhanh nhiều biến thể ảnh, lời quảng cáo và đoạn dựng. Nó không thay thế insight và góc tiếp cận, và với khách sạn có một rủi ro riêng: ảnh phòng do AI tạo ra khiến khách kỳ vọng sai và dẫn tới đánh giá xấu. Quy định về công bố nội dung do AI tạo ra khác nhau theo nền tảng và quốc gia; chủ đề này được học ở Level 6.</p>
<div class="case"><b>Tình huống: tám tuần sau, video "5 phút tới chợ Bến Thành" bắt đầu mỏi</b>
<p>(Số liệu minh hoạ.) Video A ban đầu có CTR 1,2% và frequency 2,1. Tuần thứ tám: CTR 0,9%, frequency 3,4, CPM vẫn 50.000đ, CVR vẫn 1,25%. Đối chiếu bảng chẩn đoán: CPM và CVR không đổi, chỉ CTR và frequency xấu đi, kết luận là mỏi. CPA mới = 50.000 ÷ (1.000 × 0,009 × 0,0125) ≈ 444.000đ, tăng khoảng 33% so với 333.000đ.</p>
<p><strong>Hành động:</strong> không đổi đối tượng hay giá thầu. Tầng 1 trước: ghép thân bài cũ với hook thứ hai và thứ ba đã quay sẵn. Nếu hook mới chỉ cải thiện một hai tuần, chuyển sang tầng 2: băng chuyền ba thẻ từ cùng góc. An Nhiên lên lịch một buổi quay mỗi tháng cho một góc mới, mỗi buổi gồm một thân bài và ba hook, theo thứ tự ưu tiên của ma trận. Mọi quảng cáo mới qua cổng thử ở bài 4 trước khi nhận ngân sách lớn.</p></div>
<div class="pitfall"><b>Sai lầm thường gặp</b><ul><li>Thấy CPA tăng liền kết luận mỏi, không tách CPM, CTR, CVR.</li><li>Chờ đến khi quảng cáo chết mới nghĩ tới sản xuất.</li><li>Làm mới bằng cách đổi màu và font mà không đổi lý do để quan tâm.</li><li>Tăng ngân sách nhanh trên một quảng cáo duy nhất, đẩy frequency lên.</li><li>Dùng ảnh do AI tạo cho phòng và tiện nghi thật.</li></ul></div>
<div class="think"><b>Dừng lại và tự hỏi</b><ol><li>Quảng cáo đang chạy nhiều nhất của bạn có frequency bao nhiêu, và đã chạy bao lâu?</li><li>Nếu quảng cáo chủ lực hỏng vào tuần sau, bạn có thay thế sẵn sàng không?</li><li>Bạn có thể liệt kê các lần làm mới gần nhất ở tầng nào (hook, định dạng, góc)?</li></ol></div>`

];
COURSE.lectures['m3-6'] = [

/* 3.6 bài 1 */
`<p>Bảng điều khiển quảng cáo cho bạn một con số ROAS, sổ sách của khách sạn cho bạn một con số khác, và cả hai đều không trả lời câu hỏi mà chủ doanh nghiệp thật sự hỏi: nếu tắt quảng cáo này, tôi mất bao nhiêu tiền? Bài này tách ba cách nhìn hiệu quả, chỉ ra mỗi cách trả lời câu hỏi nào, và cho thấy một chiến dịch "ROAS 13,5" có thể đáng giá từ khoảng 17 đến khoảng 119 triệu đồng tuỳ giả định.</p>
<h4>ROAS nền tảng: mỗi nền tảng tự chấm điểm mình</h4>
<p>Mỗi nền tảng ghi nhận chuyển đổi theo cửa sổ và mô hình phân bổ riêng (module 3.3). Một lượt đặt phòng có thể được Google, Meta và email cùng nhận công; cộng ba báo cáo lại thường vượt doanh thu thật. Với khách sạn còn hai điểm nữa. Giá trị ghi nhận là giá trị lúc đặt, gồm cả lượt sau này huỷ. Và đó là doanh thu, chưa trừ chi phí biến đổi hay hoa hồng sàn. ROAS nền tảng vẫn rất có ích để so quảng cáo với quảng cáo, nhóm với nhóm trong cùng một nền tảng, không để tuyên bố doanh nghiệp lời hay lỗ.</p>
<h4>MER và chi phí bán hàng trên doanh thu</h4>
<p><strong>MER</strong> (marketing efficiency ratio, còn gọi blended ROAS) là tổng doanh thu chia tổng chi phí marketing. Nó không phụ thuộc phân bổ của nền tảng nào và khớp với sổ sách. Điểm yếu: không cho biết kênh nào tạo ra kết quả. Với khách sạn, nghịch đảo của MER là <strong>chi phí bán hàng trên doanh thu</strong>, và đây là cách so với sàn dễ nhất, vì hoa hồng 18% chính là chi phí bán hàng của kênh sàn. Muốn kênh trực tiếp đáng làm khi khách vốn sẽ đặt qua sàn, tổng chi phí marketing cho một lượt phải thấp hơn 18% doanh thu của lượt đó, tức ROAS thực tế cao hơn 1 ÷ 0,18 ≈ 5,56.</p>
<p>Tương tự, a16z, trong bài "16 Startup Metrics", phân biệt <strong>CAC hỗn hợp</strong> (tổng chi phí thu hút khách chia tổng khách mới ở mọi kênh, kể cả khách tự đến) và <strong>CAC trả phí</strong> (chi phí kênh trả phí chia số khách đến từ kênh đó). Bài viết nhận xét CAC hỗn hợp không cho biết chiến dịch trả phí chạy tốt thế nào, và CAC trả phí quan trọng hơn khi đánh giá khả năng mở rộng có lãi. Khách sạn có nhiều khách quay lại hoặc nghe giới thiệu sẽ có CAC hỗn hợp đẹp, che mất một CAC trả phí đang xấu đi.</p>
<h4>Tăng thêm: câu hỏi "nếu không có quảng cáo thì sao"</h4>
<p>Với mỗi lượt đặt phòng được quảng cáo ghi công, chỉ có ba khả năng thực sự đã xảy ra:</p>
<ol><li><strong>Khách vẫn đặt trực tiếp</strong> dù không có quảng cáo (ví dụ đã nhớ tên khách sạn): quảng cáo tạo ra 0 đồng.</li><li><strong>Khách đặt qua sàn</strong> nếu không thấy quảng cáo: quảng cáo chỉ chuyển kênh, giá trị là phần hoa hồng tiết kiệm, 810.000đ cho lượt trung bình.</li><li><strong>Khách không đặt ở đâu cả</strong>, phòng sẽ trống: giá trị là toàn bộ lợi nhuận đóng góp 3.375.000đ.</li></ol>
<p>Giá trị thật của một lượt đặt là trung bình có trọng số của ba khả năng đó. Tỷ lệ thực tế chỉ đo được bằng thử nghiệm có nhóm đối chứng (Level 5). Trong lúc chưa đo, hãy tính cả ba kịch bản và ra quyết định ở mức thận trọng.</p>
<div class="case"><b>Tình huống: một tháng của chiến dịch khách mới</b>
<p>(Số liệu minh hoạ.) Chiến dịch Meta nhắm cặp đôi Úc và Singapore chi 15 triệu đồng, được hệ thống ghi nhận 45 lượt đặt, mỗi lượt 4.500.000đ, tức CPA khoảng 333.000đ. Giả định huỷ 12%, nên số lượt lưu trú thực là 45 × 0,88 = 39,6. Giả định về tỷ lệ đối chứng: 10% khách vốn đặt trực tiếp, 60% vốn đặt qua sàn, 30% sẽ không đặt: giá trị mỗi lượt lưu trú thực là 0,3 × 3.375.000 + 0,6 × 810.000 + 0,1 × 0 = 1.012.500 + 486.000 = 1.498.500đ.</p>
<table><tr><th>Cách nhìn</th><th>Tính</th><th>Kết quả</th></tr>
<tr><td>ROAS nền tảng</td><td>45 × 4.500.000 = 202,5 triệu ÷ 15 triệu</td><td>13,5</td></tr>
<tr><td>ROAS sau huỷ</td><td>202,5 × 0,88 = 178,2 triệu ÷ 15 triệu</td><td>11,88</td></tr>
<tr><td>Lãi ròng nếu mọi khách vốn đặt qua sàn</td><td>39,6 × 810.000 = 32,08 triệu, trừ 15 triệu</td><td>khoảng +17,1 triệu</td></tr>
<tr><td>Lãi ròng với tỷ lệ 10/60/30</td><td>39,6 × 1.498.500 = 59,34 triệu, trừ 15 triệu</td><td>khoảng +44,3 triệu</td></tr>
<tr><td>Lãi ròng nếu mọi khách vốn không đặt, phòng trống</td><td>39,6 × 3.375.000 = 133,65 triệu, trừ 15 triệu</td><td>khoảng +118,7 triệu</td></tr></table>
<p>Cùng một ROAS 13,5 cho ra lãi từ 17 đến 119 triệu. Với từ khoá tên khách sạn, giả định ngược lại: 70% khách vốn đặt trực tiếp, 25% qua sàn, 5% không đặt. Giá trị mỗi lượt lưu trú thực chỉ là 0,05 × 3.375.000 + 0,25 × 810.000 = 168.750 + 202.500 = 371.250đ, bằng khoảng một phần tư so với chiến dịch khách mới. Một khoản chi thương hiệu trông tốt ở ROAS nền tảng có thể gần như không mang thêm gì. Cũng cần nhớ cả hai bộ tỷ lệ chỉ là giả định để minh hoạ.</p></div>
<h4>Dùng ba cách nhìn cùng nhau</h4>
<ul><li><strong>Quản trị doanh nghiệp</strong> bằng MER và chi phí bán hàng trên doanh thu, đối chiếu với lợi nhuận.</li><li><strong>Tối ưu trong kênh</strong> bằng số của nền tảng, chỉ để so sánh tương đối.</li><li><strong>Hiệu chỉnh cả hai</strong> bằng thử nghiệm tăng thêm khi quy mô chi tiêu đủ lớn để xứng đáng.</li></ul>
<div class="pitfall"><b>Sai lầm thường gặp</b><ul><li>Cộng ROAS của các nền tảng rồi so với doanh thu thật.</li><li>Dùng ROAS chiến dịch thương hiệu và remarketing để biện minh cho tăng ngân sách.</li><li>Quên rằng doanh thu nền tảng gồm cả lượt sau này huỷ.</li><li>Khi chưa đo được phần tăng thêm, lại chọn giả định lạc quan nhất làm cơ sở quyết định.</li><li>Báo cáo CAC hỗn hợp như thể đó là hiệu quả của quảng cáo.</li></ul></div>
<div class="think"><b>Dừng lại và tự hỏi</b><ol><li>Với kênh chi nhiều tiền nhất của bạn, bao nhiêu phần trăm khách vẫn sẽ mua nếu tắt kênh đó?</li><li>Con số hiệu quả bạn báo cáo hiện nay là của nền tảng, của sổ sách, hay đã hiệu chỉnh?</li><li>Nếu CAC hỗn hợp tốt hơn CAC trả phí nhiều, điều gì đang kéo trung bình xuống?</li></ol></div>`,

/* 3.6 bài 2 */
`<p>Scale ngân sách là quyết định đắt nhất trong paid media, mà hay được ra bằng con số sai: ROAS trung bình của cả chiến dịch. Đồng chi thêm không bao giờ hiệu quả bằng đồng đầu tiên. Bài này chỉ cách tìm điểm mà đồng chi thêm hết đáng, bằng ROAS biên (marginal ROAS).</p>
<h4>Vì sao lợi suất giảm dần</h4>
<p>Những đồng đầu tiên chạm tới người dễ đặt nhất: người vừa tìm khách sạn, người trong nhóm giống khách cũ. Khi chi thêm, hệ thống phải với tới người khó thuyết phục hơn và thường trả giá cao hơn để thắng đấu giá (module 3.1), đồng thời cùng một người thấy quảng cáo nhiều lần hơn (frequency). Kết quả: mỗi đồng thêm mua được ít lượt đặt hơn đồng trước.</p>
<div class="formula"><code>ROAS biên = Doanh thu tăng thêm ÷ Chi phí tăng thêm</code><br><code>CPA biên = Chi phí tăng thêm ÷ Số lượt đặt tăng thêm</code></div>
<h4>Đường cong chi tiêu của một chiến dịch</h4>
<p>(Số liệu minh hoạ.) Chiến dịch nhắm khách mới của An Nhiên, mỗi lượt đặt 4.500.000đ, tăng ngân sách từng bước 5 triệu đồng mỗi tháng:</p>
<table><tr><th>Chi (triệu)</th><th>Lượt đặt</th><th>CPA trung bình</th><th>ROAS trung bình</th><th>Lượt đặt thêm</th><th>CPA biên</th><th>ROAS biên</th></tr>
<tr><td>5</td><td>22</td><td>227.000đ</td><td>19,8</td><td>22</td><td>227.000đ</td><td>19,8</td></tr>
<tr><td>10</td><td>36</td><td>278.000đ</td><td>16,2</td><td>14</td><td>357.000đ</td><td>12,6</td></tr>
<tr><td>15</td><td>45</td><td>333.000đ</td><td>13,5</td><td>9</td><td>556.000đ</td><td>8,1</td></tr>
<tr><td>20</td><td>51</td><td>392.000đ</td><td>11,5</td><td>6</td><td>833.000đ</td><td>5,4</td></tr>
<tr><td>25</td><td>55</td><td>455.000đ</td><td>9,9</td><td>4</td><td>1.250.000đ</td><td>3,6</td></tr>
<tr><td>30</td><td>58</td><td>517.000đ</td><td>8,7</td><td>3</td><td>1.667.000đ</td><td>2,7</td></tr></table>
<p>Cách tính hai ví dụ: ở mức 25 triệu, ROAS trung bình = 55 × 4,5 ÷ 25 = 9,9. Bước từ 20 lên 25 triệu mua thêm 4 lượt đặt: doanh thu thêm 4 × 4,5 = 18 triệu cho 5 triệu chi thêm, ROAS biên = 3,6; CPA biên = 5.000.000 ÷ 4 = 1.250.000đ. Nhìn cột trung bình, chiến dịch ở mức 25 triệu vẫn "đẹp" (9,9). Cột biên cho thấy 5 triệu cuối đã kém hiệu quả hơn 5 triệu đầu hơn năm lần (3,6 so với 19,8).</p>
<h4>Điểm dừng phụ thuộc vào câu hỏi đối chứng</h4>
<p>Ngưỡng hoà vốn dưới đây tính trên cơ sở ROAS nền tảng (đã gồm lượt huỷ), dùng ba kịch bản của bài 1; cách tính chi tiết ở bài 3:</p>
<table><tr><th>Giả định về khách</th><th>ROAS biên hoà vốn</th><th>Bước cuối còn đáng chi</th><th>Dừng ở mức</th></tr>
<tr><td>Mọi khách vốn đặt qua sàn</td><td>khoảng 6,31</td><td>Bước lên 15 triệu (8,1)</td><td>15 triệu</td></tr>
<tr><td>Tỷ lệ 10/60/30</td><td>khoảng 3,41</td><td>Bước lên 25 triệu (3,6)</td><td>25 triệu</td></tr>
<tr><td>Mọi khách vốn không đặt, phòng trống</td><td>khoảng 1,52</td><td>Bước lên 30 triệu (2,7); bảng chưa cho thấy điểm dừng</td><td>30 triệu trở lên</td></tr></table>
<p>Bước lên 20 triệu có ROAS biên 5,4: lỗ nếu mọi khách vốn đặt qua sàn (5,4 nhỏ hơn 6,31), có lãi trong hai kịch bản còn lại. Bước lên 25 triệu có ROAS biên 3,6, chỉ hơn mức 3,41 một chút, và đường cong này là ước lượng nhiễu. Phản ứng hợp lý là không tin vào độ chính xác của số 3,6: dừng ở khoảng 20 triệu, đo lại, rồi mới thử lên tiếp. Ở góc độ vận hành, bước 20 lên 25 triệu mua thêm 4 lượt đặt, tức 3,52 lượt lưu trú thực, với giá 5.000.000 ÷ 3,52 ≈ 1.420.000đ mỗi lượt lưu trú, sát giá trị 1.498.500đ của kịch bản giữa.</p>
<h4>Ước lượng đường cong trong thực tế</h4>
<ul><li>Thay đổi ngân sách theo từng bước có chủ ý và đủ lâu để đọc kết quả, thay vì nhảy mạnh một lần. Mức tăng mỗi bước (ví dụ khoảng 20%) là quy tắc thực hành, không phải chuẩn; thay đổi lớn có thể đẩy hệ thống ra khỏi trạng thái đã học (module 3.3).</li><li>Ghi lại chi tiêu, lượt đặt, CPA theo tuần để vẽ đường cong cho từng kênh.</li><li>Cẩn thận nhiễu: mùa vụ, thay đổi sáng tạo, khuyến mãi đều làm lệch. Đường cong vẽ từ dữ liệu quan sát là xấp xỉ; muốn chắc hơn cần thử nghiệm tăng thêm theo vùng hoặc nhóm đối chứng (Level 5).</li></ul>
<h4>Phân bổ giữa các kênh</h4>
<p>Quy tắc: chuyển ngân sách từ kênh có ROAS biên thấp sang kênh có ROAS biên cao, cho tới khi ROAS biên giữa các kênh xấp xỉ nhau và bằng mức hoà vốn. Nghĩa là bạn so <em>đồng cuối</em> của mỗi kênh, không so mức trung bình. Một kênh nhỏ mới thử thường có ROAS biên cao ở những đồng đầu tiên (như hàng đầu của bảng trên), đó là lý do thử kênh mới với ngân sách nhỏ thường đáng làm.</p>
<div class="case"><b>Tình huống: quyết định ngân sách quý tới của An Nhiên</b>
<p>Chiến dịch khách mới đang chi 15 triệu với 45 lượt đặt (ROAS 13,5). Ban quản lý muốn nâng gấp đôi lên 30 triệu "vì ROAS vẫn tốt". Nhìn bảng: chi gấp đôi chỉ mang thêm 13 lượt đặt (từ 45 lên 58), ROAS biên cả đoạn là 13 × 4,5 ÷ 15 = 3,9, và đoạn cuối chỉ còn 2,7, dưới 3,41.</p>
<p><strong>Quyết định:</strong> nâng từ 15 lên 20 triệu trong tháng đầu, đo lại sau hai tuần, và dành thêm 5 triệu thử TikTok, nơi những đồng đầu có thể có ROAS biên cao hơn. Chỉ nâng tiếp khi ROAS biên đo được vẫn trên 3,41, và khi An Nhiên đã có cách ước lượng tỷ lệ khách vốn đặt qua sàn thay vì chỉ giả định. Cũng nhớ khách sạn chỉ có 60 phòng: chi thêm khi công suất đã gần đầy không mang thêm lợi nhuận.</p></div>
<div class="pitfall"><b>Sai lầm thường gặp</b><ul><li>Quyết định tăng ngân sách theo ROAS trung bình.</li><li>Nhìn đường cong cho một kênh và quên rằng giả định đối chứng quyết định điểm dừng.</li><li>Tăng ngân sách quá nhanh rồi gán mọi biến động cho "thuật toán".</li><li>Tin vào chính xác của một con số ROAS biên ước lượng từ vài tuần dữ liệu.</li><li>Dồn thêm tiền vào kênh chủ lực trong khi kênh nhỏ còn các đồng đầu rất rẻ.</li></ul></div>
<div class="think"><b>Dừng lại và tự hỏi</b><ol><li>ROAS biên của khoản chi tăng gần nhất của bạn là bao nhiêu? Bạn có đo nó không?</li><li>Nếu ROAS hoà vốn của bạn là 3, bạn sẽ dừng ở bước nào trong bảng trên?</li><li>Kênh nào của bạn có thể đang ở đoạn đầu của đường cong mà bạn chưa khai thác?</li></ol></div>`,

/* 3.6 bài 3 */
`<p>Chi phí thu một khách chỉ có nghĩa khi đặt cạnh giá trị khách đó mang lại, và giá trị đó là lợi nhuận, không phải doanh thu. Bài này xây mô hình lợi nhuận đóng góp cho một lượt đặt phòng, tính điểm hoà vốn đúng cho khách sạn (có tính huỷ và có tính phương án bán qua sàn), rồi nối với LTV, tỷ lệ LTV trên CAC và thời gian hoàn vốn. Đây là phần mở rộng trực tiếp của bài kinh tế đơn vị ở module 1.4.</p>
<h4>Lợi nhuận đóng góp của một lượt lưu trú</h4>
<p>Lượt đặt trung bình: 2,5 đêm × 1.800.000đ = 4.500.000đ. Chi phí biến đổi khoảng 25% doanh thu (dọn phòng, vật dụng, bữa sáng, phí thanh toán). Làm tròn CPA mỗi lượt lưu trú thực: 333.000 ÷ 0,88 ≈ 378.000đ.</p>
<table><tr><th>Khoản (đồng mỗi lượt lưu trú)</th><th>Qua sàn</th><th>Đặt trực tiếp</th></tr>
<tr><td>Doanh thu</td><td>4.500.000</td><td>4.500.000</td></tr>
<tr><td>Chi phí biến đổi (25%)</td><td>−1.125.000</td><td>−1.125.000</td></tr>
<tr><td>Hoa hồng sàn (18%)</td><td>−810.000</td><td>0</td></tr>
<tr><td>Lợi nhuận đóng góp trước marketing</td><td>2.565.000</td><td>3.375.000</td></tr>
<tr><td>Chi phí quảng cáo mỗi lượt lưu trú thực</td><td>0 (đã nằm trong hoa hồng)</td><td>−378.000</td></tr>
<tr><td>Lợi nhuận đóng góp sau marketing</td><td>2.565.000</td><td>2.997.000</td></tr></table>
<p>Lượt đặt trực tiếp qua quảng cáo giữ lại thêm 2.997.000 − 2.565.000 = 432.000đ so với bán qua sàn, khi khách vốn sẽ đặt qua sàn.</p>
<h4>Điểm hoà vốn của một khách sạn</h4>
<p>Module 1.4 cho: ROAS hoà vốn = 1 ÷ biên lợi nhuận trước marketing. Với biên 75% là 1,33. Công thức đó đúng khi phòng sẽ trống nếu không có khách và không có lượt huỷ. Hai điều chỉnh cho thực tế: nhân giá trị với 0,88 vì 12% lượt đặt huỷ (giả định thận trọng: phòng huỷ không được bán lại; thực tế nhiều khi bán lại được), và chọn đúng đối chứng.</p>
<table><tr><th>Đối chứng (nếu không có quảng cáo)</th><th>Giá trị mỗi lượt lưu trú</th><th>CPA hoà vốn mỗi lượt đặt (nhân 0,88)</th><th>ROAS hoà vốn (nền tảng)</th></tr>
<tr><td>Phòng trống</td><td>3.375.000</td><td>2.970.000</td><td>4.500.000 ÷ 2.970.000 ≈ 1,52</td></tr>
<tr><td>Tỷ lệ 10/60/30 (bài 1)</td><td>1.498.500</td><td>khoảng 1.319.000</td><td>khoảng 3,41</td></tr>
<tr><td>Khách vốn đặt qua sàn</td><td>810.000</td><td>712.800</td><td>4.500.000 ÷ 712.800 ≈ 6,31</td></tr>
<tr><td>Khách vốn đặt trực tiếp</td><td>0</td><td>0</td><td>không bao giờ hoà vốn</td></tr></table>
<p>CPA hiện tại khoảng 333.000đ thấp hơn mọi ngưỡng có giá trị dương, kể cả ngưỡng chặt nhất (712.800đ). Rủi ro không nằm ở chiến dịch khách mới mà ở những khoản chi mà đối chứng có thể là "khách vẫn đặt trực tiếp".</p>
<h4>LTV theo lợi nhuận đóng góp</h4>
<p>Trong "16 Startup Metrics", a16z định nghĩa giá trị vòng đời là giá trị hiện tại của lợi nhuận ròng tương lai từ khách, và cảnh báo rằng ước tính LTV theo doanh thu hoặc theo biên gộp sẽ cho giới hạn chi tiêu thu khách cao hơn mức thật; họ khuyên dùng biên đóng góp, sau khi trừ chi phí biến đổi gắn với khách. Với khách sạn, đó là lợi nhuận đóng góp ở bảng trên.</p>
<p>(Số liệu minh hoạ.) Giả sử 15% khách đặt trực tiếp quay lại trong hai năm và đặt trực tiếp lần nữa mà không tốn thêm tiền quảng cáo (như giả định ở module 1.4). Theo đối chứng thận trọng (khách vốn đặt qua sàn), LTV hai năm = 810.000 + 0,15 × 810.000 = 931.500đ. LTV : CAC = 931.500 ÷ 378.000 ≈ 2,46. Theo đối chứng "phòng trống", LTV = 3.375.000 × 1,15 = 3.881.250đ, tỷ lệ khoảng 10,3, một con số đẹp đến mức nên nghi ngờ.</p>
<p>Mốc LTV : CAC khoảng 3 : 1 và hoàn vốn dưới 12 tháng thường được dẫn từ David Skok (forEntrepreneurs), cho phần mềm theo thuê bao; bài của a16z không nêu mốc này. Coi chúng là kinh nghiệm của giới đầu tư trong một ngành, không phải định luật. Với khách sạn, chuẩn thực tế hơn là câu hỏi đơn giản: chi phí thu khách có được thu hồi từ chính lượt lưu trú đầu không.</p>
<h4>Thời gian hoàn vốn, và độ trễ đặt phòng</h4>
<p>Ở module 1.4: hoàn vốn = CAC ÷ lợi nhuận mỗi tháng từ một khách. Với khách sạn, lượt lưu trú đầu (810.000đ trở lên) đã vượt CAC 378.000đ, nên hoàn vốn ngay từ lần đầu. Nhưng tiền quảng cáo được chi lúc khách đặt, còn lợi nhuận về lúc khách lưu trú. (Số liệu minh hoạ.) Nếu độ trễ trung bình là 45 ngày, mỗi đồng chi hôm nay chỉ thu về sau khoảng bảy tuần, và có 12% rủi ro huỷ trong thời gian đó. Điều này quan trọng cho dòng tiền khi tăng ngân sách nhanh.</p>
<h4>Hai chế độ vận hành</h4>
<ul><li><strong>Có lãi ngay từ đơn đầu:</strong> CPA tối đa bằng giá trị lượt đầu theo đối chứng thận trọng. An Nhiên đang ở chế độ này.</li><li><strong>Dựa trên LTV:</strong> chỉ chấp nhận CPA vượt giá trị lượt đầu khi có dữ liệu khách quay lại theo nhóm đáng tin. An Nhiên mới bắt đầu thu email nên chưa có dữ liệu như vậy.</li></ul>
<div class="callout"><b>Cảnh giác:</b> LTV lạc quan là cách phổ biến nhất để biện minh cho CAC quá cao. Tính LTV bằng lợi nhuận đóng góp, trên nhóm khách thật theo thời gian (cohort), và giới hạn chân trời tính toán. Ghi chú tóm tắt bên dưới nhắc tới "biên lợi nhuận gộp". Với khách sạn và mọi ngành có chi phí biến đổi lớn ngoài giá vốn, hãy dùng lợi nhuận đóng góp; a16z cũng coi việc dùng biên gộp để tính LTV là lỗi thường gặp.</div>
<div class="pitfall"><b>Sai lầm thường gặp</b><ul><li>So CPA với doanh thu thay vì với lợi nhuận đóng góp.</li><li>Quên tính huỷ phòng khi so CPA với giá trị lượt lưu trú.</li><li>Chỉ dùng một đối chứng, thường là lạc quan nhất ("phòng sẽ trống").</li><li>Dùng LTV hai năm theo giả định khách quay lại không có dữ liệu.</li><li>Bỏ qua độ trễ giữa lúc chi tiền và lúc thu lợi nhuận.</li></ul></div>
<div class="think"><b>Dừng lại và tự hỏi</b><ol><li>Giá trị thật của một đơn hàng của bạn là bao nhiêu sau khi trừ mọi chi phí biến đổi và tỷ lệ huỷ, hoàn?</li><li>Phương án thay thế khi khách không mua qua quảng cáo của bạn là gì: không mua, mua ở kênh khác, hay mua trực tiếp?</li><li>Từ lúc bạn chi tiền đến lúc lợi nhuận về tài khoản là bao lâu?</li></ol></div>`,

/* 3.6 bài 4 */
`<p>Một ngân sách không có cơ sở là một con số đoán. Một ngân sách có cơ sở là chuỗi phép nhân đi ngược từ mục tiêu kinh doanh, mỗi mắt xích có giả định rõ ràng để kiểm tra lại. Bài này dựng dự báo 3 tháng cho An Nhiên từ mục tiêu nâng tỷ trọng đặt trực tiếp từ 22% lên 30%, kiểm tra chéo bằng công suất, ROAS biên và giá trị, rồi dạy cách điều tiết hằng tuần.</p>
<h4>Chuỗi tính ngược cho khách sạn</h4>
<div class="formula">Tỷ trọng mục tiêu → đêm phòng trực tiếp cần có → trừ mức hiện tại = đêm phòng tăng thêm → ÷ số đêm mỗi lượt = lượt lưu trú tăng thêm → trừ phần không cần media (cải thiện chuyển đổi, email, khách quay lại) = phần quảng cáo phải tạo → ÷ (1 − tỷ lệ huỷ) = lượt đặt gộp → ÷ CVR = số phiên cần → × CPC = ngân sách</div>
<p>Cơ sở: 60 phòng × 30 ngày × 68% công suất = 1.224 đêm phòng bán ra mỗi tháng (giả định không đổi). Hiện tại 22% là 269 đêm phòng trực tiếp. Mục tiêu theo đường lên dần: 24% tháng 1, 27% tháng 2, 30% tháng 3. Giả định 30% phần tăng đến từ cải thiện chuyển đổi trên website, email và khách quay lại (không cần thêm media), 70% cần quảng cáo. Số đêm mỗi lượt 2,5; huỷ 12%.</p>
<table><tr><th></th><th>Tháng 1</th><th>Tháng 2</th><th>Tháng 3</th></tr>
<tr><td>Tỷ trọng mục tiêu</td><td>24%</td><td>27%</td><td>30%</td></tr>
<tr><td>Đêm phòng trực tiếp (× 1.224)</td><td>293,8</td><td>330,5</td><td>367,2</td></tr>
<tr><td>Tăng so với mức nền 269,3</td><td>+24,5</td><td>+61,2</td><td>+97,9</td></tr>
<tr><td>Lượt lưu trú tăng thêm (÷ 2,5)</td><td>9,8</td><td>24,5</td><td>39,2</td></tr>
<tr><td>Phần cần quảng cáo (70%)</td><td>6,9</td><td>17,1</td><td>27,4</td></tr>
<tr><td>Lượt đặt gộp (÷ 0,88)</td><td>7,8</td><td>19,5</td><td>31,1</td></tr>
<tr><td>Số phiên cần thêm (÷ CVR 1,25%)</td><td>khoảng 620</td><td>khoảng 1.560</td><td>khoảng 2.490</td></tr></table>
<h4>Ba kịch bản cho chi phí</h4>
<p>(Số liệu minh hoạ.) Kịch bản thay đổi theo CTR và CVR của lưu lượng mới (module 1.4), CPM giữ 50.000đ: thận trọng CTR 1,0%, CVR 1,1%, CPA ≈ 455.000đ; cơ sở CTR 1,2%, CVR 1,25%, CPA ≈ 333.000đ; lạc quan CTR 1,4%, CVR 1,4%, CPA ≈ 255.000đ.</p>
<table><tr><th>Chi phí media (triệu)</th><th>Tháng 1</th><th>Tháng 2</th><th>Tháng 3</th><th>Cộng ba tháng</th></tr>
<tr><td>Thận trọng</td><td>3,5</td><td>8,9</td><td>14,1</td><td>26,5</td></tr>
<tr><td>Cơ sở</td><td>2,6</td><td>6,5</td><td>10,4</td><td>19,5</td></tr>
<tr><td>Lạc quan</td><td>2,0</td><td>5,0</td><td>7,9</td><td>14,9</td></tr></table>
<p>Ví dụ tháng 3: kịch bản cơ sở 31,1 × 333.000 ≈ 10,4 triệu; thận trọng 31,1 × 455.000 ≈ 14,1 triệu; lạc quan 31,1 × 255.000 ≈ 7,9 triệu. Các số được làm tròn một chữ số thập phân ở từng bước nên cộng lại có thể lệch vài chục nghìn đồng.</p>
<h4>Kiểm tra chéo</h4>
<ul><li><strong>Công suất:</strong> khoảng 2.490 phiên thêm mỗi tháng bằng khoảng 33% so với 7.500 phiên di động hiện có. Đây là mức tăng đáng kể, làm được nếu có đủ cặp đôi Úc và Singapore trong đối tượng (module 3.5 bài 5 về bão hoà).</li><li><strong>ROAS biên:</strong> 31 lượt đặt nằm ở đoạn đầu đường cong của bài 2 (khoảng 8 đến 9 triệu cho 31 lượt), nơi ROAS biên còn cao. Mục tiêu không đòi hỏi leo lên đoạn dốc.</li><li><strong>Giá trị:</strong> tháng 3, khoảng 98 đêm phòng chuyển từ sàn sang trực tiếp tiết kiệm 97,9 × 1.800.000 × 18% ≈ 31,7 triệu hoa hồng mỗi tháng, so với 8 đến 14 triệu media. Chỉ đúng nếu khách thật sự chuyển kênh, không phải khách vốn đặt trực tiếp.</li></ul>
<p>Kết luận bất ngờ: bản thân mục tiêu 30% cần ít tiền media mới hơn người ta tưởng. Vấn đề nằm ở chỗ khác: ngân sách 300 triệu hiện có (module 1.1) phần lớn dành cho phí, vị trí ưu tiên và khuyến mãi trên sàn cùng từ khoá tên khách sạn, và câu hỏi đáng hỏi là phần nào trong đó thật sự tạo ra đặt phòng mà không chạy cũng có (bài 1).</p>
<h4>Những điều phải đưa vào dự báo</h4>
<ul><li><strong>Độ trễ đặt phòng:</strong> tỷ trọng tính theo ngày lưu trú, nhưng chi tiêu hôm nay ra lượt lưu trú sau vài tuần. Cặp đôi Úc thường đặt sớm hơn. Theo dõi số lượt đặt trực tiếp cho các ngày sắp tới (pickup) như chỉ báo sớm.</li><li><strong>Mùa vụ:</strong> CPM, CVR và công suất đều đổi theo mùa. Dùng dữ liệu cùng kỳ năm trước thay vì giả định 68% quanh năm.</li><li><strong>Ba kịch bản,</strong> và lập kế hoạch tiền theo kịch bản thận trọng.</li></ul>
<h4>Điều tiết hằng tuần</h4>
<p>Mỗi tuần so chi tiêu và kết quả luỹ kế với kế hoạch. Mốc thực hành: lệch quá khoảng 10 đến 15% thì tìm nguyên nhân bằng chuỗi CPM, CTR, CVR; đừng đợi cuối tháng. Lệch nhỏ hơn thường là nhiễu, đặc biệt khi chỉ có vài chục lượt đặt mỗi tháng.</p>
<div class="case"><b>Tình huống: kế hoạch 3 tháng được duyệt</b>
<p>An Nhiên duyệt kế hoạch theo kịch bản thận trọng: dự trù 26,5 triệu media cho ba tháng, cộng 38 triệu cho chuỗi thử sáng tạo ở module 3.5. Song song, họ lên lịch một thử nghiệm giảm chi từ khoá thương hiệu ở một số tuần để đo phần "khách vốn đặt trực tiếp" (phương pháp ở Level 5). Kết quả mong đợi ở cuối tháng 3: nếu mọi giả định giữ, tỷ trọng 30%, tiết kiệm khoảng 31,7 triệu hoa hồng mỗi tháng. Nếu tháng 1 cho thấy CPA xấu hơn kịch bản thận trọng, kế hoạch dừng lại xem lại giả định thay vì tăng tiền.</p></div>
<div class="pitfall"><b>Sai lầm thường gặp</b><ul><li>Dự báo từ trên xuống ("tăng 8 điểm phần trăm thì chi bao nhiêu") mà không có chuỗi mắt xích.</li><li>Quên trừ phần không cần media, nên đòi ngân sách quá lớn.</li><li>Lấy CPA từ thử nghiệm nhỏ làm CPA khi mở rộng.</li><li>Không có kịch bản thận trọng.</li><li>Đợi cuối tháng mới so với kế hoạch.</li></ul></div>
<div class="think"><b>Dừng lại và tự hỏi</b><ol><li>Mục tiêu của bạn quy ra bao nhiêu đơn mỗi tháng? Đơn đó cần bao nhiêu lượt truy cập ở CVR hiện tại?</li><li>Giả định nào trong dự báo của bạn là yếu nhất? Dữ liệu nào sẽ kiểm tra được nó sớm nhất?</li><li>Bạn sẽ làm gì nếu tháng đầu CPA cao hơn kịch bản thận trọng?</li></ol></div>`,

/* 3.6 bài 5 */
`<p>Khi một kênh đang hiệu quả, câu hỏi tiếp theo luôn là làm sao có nhiều hơn. Hai con đường có logic khác nhau, rủi ro khác nhau, và mọi kênh đều có điểm mà đồng chi thêm không còn đáng. Bài này dạy cách chọn đường mở rộng, nhận diện các rủi ro tập trung trước khi chúng xảy ra, và báo cáo hằng tuần cho lãnh đạo bằng đúng các con số cần ra quyết định.</p>
<h4>Mở rộng dọc và mở rộng ngang</h4>
<ul><li><strong>Dọc:</strong> tăng ngân sách trên chiến dịch đang tốt, cho tới khi ROAS biên chạm mức hoà vốn (bài 2).</li><li><strong>Ngang:</strong> thêm sáng tạo và góc tiếp cận mới (module 3.5), kênh mới, thị trường mới, sản phẩm hoặc gói ưu đãi mới. Mở rộng ngang mở ra đường cong mới, trong đó những đồng đầu thường có ROAS biên cao.</li></ul>
<p>Khách sạn có thêm một giới hạn cứng: công suất. Với 60 phòng và 68% công suất, còn khoảng 576 đêm phòng trống mỗi tháng (1.800 trừ 1.224). Mục tiêu 22% lên 30% là thay đổi <em>cơ cấu</em> kênh bán, không phải thêm khách; khi công suất đã gần đầy, chi thêm vào thu hút khách chỉ có ý nghĩa nếu nó nâng giá phòng bình quân hoặc thay thế khách qua sàn. Khi đó mở rộng ngang theo hướng nâng giá trị (đặt dài đêm hơn, gói 3 đến 4 đêm, bán thêm dịch vụ) thường có lợi hơn mở rộng dọc.</p>
<h4>Mọi kênh đều suy giảm</h4>
<p>Law of Shitty Clickthroughs của Andrew Chen (module 3.5 bài 5) áp dụng cả ở tầm ngân sách: tính mới phai, đối thủ bắt chước, quy mô pha loãng chất lượng. Hệ quả cho dự báo: đừng ngoại suy CPA từ vài tuần thử nhỏ; số từ thử nhỏ thường lạc quan hơn kết quả khi mở rộng. Hãy lập kế hoạch theo kịch bản thận trọng (bài 4) và liên tục để dành một phần ngân sách cho kênh và góc tiếp cận mới.</p>
<h4>Rủi ro cần theo dõi</h4>
<table><tr><th>Rủi ro</th><th>Dấu hiệu</th><th>Giảm thiểu</th></tr>
<tr><td>Phụ thuộc một kênh bán (sàn)</td><td>78% đêm phòng qua sàn; thay đổi hoa hồng hay xếp hạng làm doanh thu rung lắc</td><td>Nâng dần tỷ trọng trực tiếp; thu email khách (module 2.4)</td></tr>
<tr><td>Phụ thuộc một nền tảng quảng cáo</td><td>Một tài khoản chiếm phần lớn đặt trực tiếp; bị khoá hoặc đổi chính sách là mất cả đợt</td><td>Có kênh thứ hai, email và SEO làm nền; tài khoản có nhiều người quản trị</td></tr>
<tr><td>Phụ thuộc từ khoá thương hiệu</td><td>Phần lớn đặt trực tiếp có điểm chạm cuối là tìm tên khách sạn; đối thủ hoặc sàn thường cũng mua từ khoá này</td><td>Đo phần tăng thêm (Level 5); không coi ROAS thương hiệu là thành tích</td></tr>
<tr><td>Phụ thuộc trả phí</td><td>Tỷ trọng doanh thu từ trả phí tăng, từ email và tìm kiếm tự nhiên giảm</td><td>Đầu tư vào kênh owned</td></tr>
<tr><td>Sai lệch đo lường</td><td>Tối ưu theo một con số không phản ánh giá trị tăng thêm; theo dõi mất do đồng ý cookie</td><td>Đối chiếu với hệ thống đặt phòng; kiểm tra định kỳ</td></tr></table>
<h4>Báo cáo hằng tuần cho lãnh đạo</h4>
<p>Báo cáo chỉ gồm kết quả (module 1.4): chi tiêu, doanh thu hoặc lượt đặt, một chỉ số hiệu quả gắn với lợi nhuận, mức độ so với kế hoạch, và ba việc sẽ làm tuần tới. Một trang. Với khách sạn nên có đủ: tỷ trọng đêm phòng trực tiếp so với kế hoạch, chi phí và CPA theo lượt lưu trú thực, tỷ lệ khách mới, và lợi nhuận đóng góp ước tính. Hằng tháng thêm chi phí bán hàng trên doanh thu phòng (quảng cáo cộng hoa hồng), nghịch đảo của MER ở bài 1.</p>
<div class="case"><b>Tình huống: báo cáo tuần 6 của An Nhiên</b>
<p>(Số liệu minh hoạ.) Chương trình chuyển khách sang đặt trực tiếp, kế hoạch cho tháng 2 là 27%:</p>
<table><tr><th>Chỉ số</th><th>Tuần này</th><th>Tuần trước</th><th>Ghi chú</th></tr>
<tr><td>Tỷ trọng đêm phòng trực tiếp (4 tuần gần nhất, theo ngày lưu trú)</td><td>24,6%</td><td>24,1%</td><td>Kế hoạch giữa tháng 25,5%; lệch khoảng 3,5%, trong ngưỡng</td></tr>
<tr><td>Chi quảng cáo cho chương trình</td><td>2.000.000đ</td><td>1.800.000đ</td><td>Đúng kế hoạch</td></tr>
<tr><td>Lượt đặt từ quảng cáo</td><td>6</td><td>5</td><td>Mẫu rất nhỏ</td></tr>
<tr><td>CPA mỗi lượt đặt</td><td>333.000đ</td><td>360.000đ</td><td>Dưới ngưỡng thận trọng 712.800đ</td></tr>
<tr><td>CPA mỗi lượt lưu trú thực (sau 12% huỷ)</td><td>378.000đ</td><td>409.000đ</td><td>Dưới 810.000đ hoa hồng tiết kiệm được</td></tr>
<tr><td>Tỷ lệ khách mới</td><td>5 trên 6</td><td>3 trên 5</td><td></td></tr>
<tr><td>Lợi nhuận đóng góp ước tính so với bán qua sàn</td><td>khoảng 2,28 triệu</td><td>khoảng 1,76 triệu</td><td>Đối chứng thận trọng nhất</td></tr></table>
<p>Cách tính hàng cuối: tuần này 6 × 0,88 = 5,28 lượt lưu trú × 810.000 = 4,28 triệu, trừ 2 triệu chi quảng cáo = khoảng 2,28 triệu. Tuần trước 5 × 0,88 = 4,4 × 810.000 = 3,56 triệu, trừ 1,8 triệu = khoảng 1,76 triệu.</p>
<p><strong>Ba việc tuần tới:</strong> (1) giữ nguyên ngân sách, không đọc quá nhiều vào 6 lượt đặt; (2) đưa hook thứ hai vào chạy song song để dành sẵn khi hook đầu mỏi; (3) rà tỷ lệ huỷ của các lượt đặt tuần trước để kiểm tra giả định 12%. <strong>Rủi ro:</strong> chưa có số đo phần tăng thêm của từ khoá thương hiệu, đang lên lịch thử.</p></div>
<div class="pitfall"><b>Sai lầm thường gặp</b><ul><li>Báo cáo chỉ gồm chi tiêu và ROAS nền tảng, không có lợi nhuận.</li><li>Báo cáo quá nhiều con số, lãnh đạo không biết xem cái nào.</li><li>Phản ứng với dao động của vài lượt đặt trong một tuần.</li><li>Bỏ qua rủi ro tập trung vì tuần này số vẫn đẹp.</li><li>Không có ba việc cụ thể ở cuối báo cáo.</li></ul></div>
<div class="think"><b>Dừng lại và tự hỏi</b><ol><li>Nếu kênh chủ lực của bạn biến mất trong một tuần, bao nhiêu phần trăm doanh thu mất theo?</li><li>Báo cáo tuần của bạn có con số nào gắn trực tiếp với lợi nhuận không?</li><li>Bạn đã dành ngân sách nào để thử góc tiếp cận hoặc kênh mới trong quý này chưa?</li></ol></div>`

];
