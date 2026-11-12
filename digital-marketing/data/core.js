/* Khung dữ liệu khoá học. Các file level*.js, resources.js, glossary.js nạp dữ liệu vào đây. */
window.COURSE = {
  meta: {
    title: 'Growth Path',
    reviewed: '12/11/2026',
    passRate: 0.7
  },
  levels: [],   // mỗi level*.js push 1 level
  lectures: {}, // bài giảng đầy đủ theo module: { 'm1-1': [html bài 1, html bài 2, ...] } (lectures*.js)
  res: {},      // thư viện tài liệu, khoá học (resources.js)
  certs: [],    // lộ trình chứng chỉ gợi ý (resources.js)
  glossary: []  // thuật ngữ (glossary.js)
};
