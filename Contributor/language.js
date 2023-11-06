// Định nghĩa các bản dịch cho từng ngôn ngữ
const translations = {
    vi: {
      language: "Vietnamese",
    },
    en: {
      language: "English",
    },
    ja: {
      language: "Japanese",
    },
    fr: {
      language: "French",
    },
  };
  
  // Mặc định sử dụng ngôn ngữ tiếng Anh
  let currentLanguage = 'en';
  
  // Cập nhật nội dung dựa trên ngôn ngữ
  function updateContent(language) {
    const translation = translations[language];
    document.getElementById('languageText').textContent = translation.language;
  }
  
  // Gán sự kiện click cho các ngôn ngữ
  document.getElementById('vi').addEventListener('click', () => {
    currentLanguage = 'vi';
    updateContent(currentLanguage);
  });
  
  document.getElementById('en').addEventListener('click', () => {
    currentLanguage = 'en';
    updateContent(currentLanguage);
  });
  
  document.getElementById('ja').addEventListener('click', () => {
    currentLanguage = 'ja';
    updateContent(currentLanguage);
  });
  
  document.getElementById('fr').addEventListener('click', () => {
    currentLanguage = 'fr';
    updateContent(currentLanguage);
  });
  
  // Tải ngôn ngữ mặc định
  updateContent(currentLanguage);