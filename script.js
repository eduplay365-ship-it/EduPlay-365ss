document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // --- UI Authentication State ---
    function updateAuthUI() {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        const loginLink = document.querySelector('a[href="login.html"]');

        if (token && user) {
            if (loginLink) {
                loginLink.innerHTML = `<i class="fas fa-sign-out-alt"></i> <span data-i18n="logout">Logout</span> (${user.username})`;
                loginLink.href = '#';
                loginLink.id = 'logout-btn';
                loginLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    logout();
                });
            }
        }
    }

    window.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        alert('Logged out successfully');
        window.location.href = 'index.html';
    };

    updateAuthUI();

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target) && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        }
    });

    // Add active class to current nav item
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
    // Language Support
    const translations = {
        'en': {
            'home': 'Home',
            'login': 'Login',
            'settings': 'Settings',
            'help': 'Help',
            'welcome': 'Welcome to EduPlay 365',
            'math_title': 'Mathematics',
            'math_desc': 'Develops basic mathematical skills like counting, shapes, and simple operations.',
            'science_title': 'Language and Speech',
            'science_desc': 'Develops vocabulary, correct pronunciation, and communicative expression.',
            'geo_title': 'Social Skills',
            'geo_desc': 'Focuses on emotional intelligence, sharing, and social interaction.',
            'lit_title': 'Creative Thinking',
            'lit_desc': 'Inspires imagination, artistic expression, and innovative ideas.',
            'logic_title': 'Logical Thinking',
            'logic_desc': 'Strengthens reasoning, problem-solving, and critical thinking skills.',
            'lesson': 'Lesson',
            'video_lesson_desc': 'Explore the fundamentals in this interactive lesson. Perfect for preschool learning and development.',
            'login_header': 'Login',
            'email_label': 'Email',
            'password_label': 'Password',
            'signin_btn': 'Sign In',
            'register_header': 'Register',
            'username_label': 'Username',
            'no_account': "Don't have an account?",
            'already_account': 'Already have an account?',
            'signup_link': 'Sign Up',
            'login_link': 'Login',
            'signup_btn': 'Sign Up',
            'logout': 'Logout',
            'video_lessons': 'Video Lessons',
            'settings_header': 'Settings',
            'help_header': 'Help Center',
            'under_construction': 'This page is under construction.',
            'back_home': 'Back to Home',
            'help_about_title': 'What can this site do?',
            'help_about_p1': 'This website is designed to support preschool educational institutions and organize children\'s education more effectively through modern information technologies.',
            'help_about_p2': 'The platform collects various developmental, educational, and fun games for children, serving to increase their knowledge level, logical thinking, and activity. It also allows monitoring children\'s participation and task completion.',
            'help_about_p3': 'This website serves as a convenient and effective tool for educators to control and analyze the educational process, and for parents to monitor their children\'s development.',
            'help_contact_title': 'Contact',
            'help_tech_title': 'Technical Issues',
            'help_tech_desc': 'For bugs and errors',
            'help_game_title': 'Regarding Video Games',
            'help_game_desc': 'Suggestions and game functions',
            'help_footer_text': 'All requests will be reviewed as quickly as possible to resolve issues and further improve the website\'s operation.',
            'videos': 'Saved Videos',
            'videos_header': 'Your Video Library',
            'add_video_title': 'Add New Video',
            'video_file_label': 'Select Video File',
            'video_title_label': 'Video Title',
            'save_video_btn': 'Save Video',
            'save_to_library': 'Save to Library',
            'theme_title': 'Theme',
            'theme_desc': 'Switch between dark and light mode',
            'text_size_title': 'Text Size',
            'text_size_desc': 'Adjust the size of text on the screen',
            'reset_settings_btn': 'Reset to Default',
            'bg_tint_title': 'Background Tint',
            'bg_tint_desc': 'Change the color overlay of the background',
            'sidebar_color_title': 'Sidebar Color',
            'sidebar_color_desc': 'Customize the sidebar background color',
            'age_select_title': 'Select Your Age',
            'age_3_4': '3-4 years old',
            'age_5_6': '5-6 years old',
            'age_label': 'Age:',
            'start_page': 'Welcome',
            'get_certificate': 'Get Certificate',
            'poems': 'Poems',
            'documents': 'Documents',
            'games': 'Games',
            'cert_req_title': 'Requirements to obtain a certificate:',
            'cert_req_desc': 'To obtain a certificate, 50 test questions must be solved. Once all 50 test questions are fully completed, the certificate will be automatically generated and presented.',
            'start_test_btn': 'Start Test',
            'test_title': 'Assessment Test',
            'question': 'Question',
            'next_btn': 'Next',
            'finish_btn': 'Finish',
            'score': 'Score',
            'test_complete': 'Test Complete!',
            'correct_answers': 'Correct Answers',
            'total_questions': 'Total Questions',
            'result_message_excellent': 'Excellent! You earn a certificate!',
            'result_message_good': 'Good job! Keep practicing.',
            'result_message_retry': 'Try again to improve your score.',
            'get_cert_btn': 'Get Certificate'
        },
        'uz': {
            'home': 'Bosh sahifa',
            'login': 'Kirish',
            'settings': 'Sozlamalar',
            'help': 'Yordam',
            'welcome': 'EduPlay 365 ga xush kelibsiz',
            'math_title': 'Matematika',
            'math_desc': "Sanash, shakllar va oddiy arifmetik amallar kabi asosiy matematika ko'nikmalarini rivojlantiradi.",
            'science_title': 'Til va nutq',
            'science_desc': "So'z boyligi, to'g'ri talaffuz va nutqiy ifodani rivojlantiradi.",
            'geo_title': 'Ijtimoiy ko\'nikma',
            'geo_desc': "Hissiy intellekt, o'zaro ulashish va ijtimoiy muloqotga e'tibor qaratadi.",
            'lit_title': 'Ijodiy fikrlash',
            'lit_desc': "Tasavvur, badiiy ifoda va innovatsion g'oyalarni ilhomlantiradi.",
            'logic_title': 'Mantiqiy fikrlash',
            'logic_desc': "Mantiqiy fikrlash, muammolarni hal qilish va tanqidiy fikrlashni mustahkamlaydi.",
            'lesson': 'Dars',
            'video_lesson_desc': 'Ushbu interaktiv darsda asoslarni o\'rganing. Maktabgacha ta\'lim va rivojlanish uchun mukammal.',
            'login_header': 'Kirish',
            'email_label': 'Elektron pochta',
            'password_label': 'Parol',
            'signin_btn': 'Kirish',
            'register_header': "Ro'yxatdan o'tish",
            'username_label': 'Foydalanuvchi nomi',
            'no_account': "Hisobingiz yo'qmi?",
            'already_account': 'Hisobingiz bormi?',
            'signup_link': "Ro'yxatdan o'tish",
            'login_link': 'Kirish',
            'signup_btn': "Ro'yxatdan o'tish",
            'logout': 'Chiqish',
            'video_lessons': 'Video darslar',
            'settings_header': 'Sozlamalar',
            'help_header': 'Yordam Markazi',
            'under_construction': 'Bu sahifa tayyorlanmoqda.',
            'back_home': 'Bosh sahifaga qaytish',
            'help_about_title': 'Bu sayt nima qila oladi?',
            'help_about_p1': 'Ushbu veb-sayt maktabgacha bo‘lgan ta’lim muassasalari faoliyatini qo‘llab-quvvatlash hamda bolalar ta’lim-tarbiyasini zamonaviy axborot texnologiyalari orqali yanada samarali tashkil etish maqsadida ishlab chiqilgan.',
            'help_about_p2': 'Platformada bolalar uchun mo‘ljallangan turli xil rivojlantiruvchi, ta’limiy va qiziqarli o‘yinlar jamlangan bo‘lib, ular orqali bolalarning bilim darajasi, mantiqiy fikrlashi hamda faolligini oshirishga xizmat qiladi. Shuningdek, sayt orqali bolalarning o‘yin jarayonida ishtiroki va topshiriqlarni bajarish holatini kuzatish imkoniyati mavjud.',
            'help_about_p3': 'Mazkur veb-sayt pedagoglar va tarbiyachilar uchun ta’lim jarayonini nazorat qilish va tahlil etishda, ota-onalar uchun esa farzandlarining rivojlanish jarayonini kuzatishda qulay va samarali vosita hisoblanadi.',
            'help_contact_title': 'Bog\'lanish',
            'help_tech_title': 'Texnik masalalar',
            'help_tech_desc': 'Nosozliklar va xatoliklar bo‘yicha',
            'help_game_title': 'Video o‘yinlar bo\'yicha',
            'help_game_desc': 'Takliflar va o\'yin funksiyalari',
            'help_footer_text': 'Barcha murojaatlar imkon qadar tezkor tarzda ko‘rib chiqilib, muammolarni bartaraf etish hamda veb-sayt faoliyatini yanada takomillashtirish choralari ko‘riladi.',
            'videos': 'Saqlangan Videolar',
            'videos_header': 'Sizning Video Kutubxonangiz',
            'add_video_title': 'Yangi Video Qo\'shish',
            'video_file_label': 'Video Faylni Tanlang',
            'video_title_label': 'Video Nomi',
            'save_video_btn': 'Videoni Saqlash',
            'save_to_library': 'Kutubxonaga Saqlash',
            'theme_title': 'Mavzu',
            'theme_desc': 'Qorong\'i va yorug\' rejim o\'rtasida almashtirish',
            'text_size_title': 'Matn Hajmi',
            'text_size_desc': 'Ekrandagi matn hajmini sozlash',
            'reset_settings_btn': 'Oddiy holatga qaytarish',
            'bg_tint_title': 'Fon Rangi',
            'bg_tint_desc': 'Orqa fon rangini o\'zgartirish',
            'sidebar_color_title': 'Yon Panel Rangi',
            'sidebar_color_desc': 'Yon panel fon rangini o\'zgartirish',
            'age_select_title': 'Yoshingizni tanlang',
            'age_3_4': '3-4 yosh',
            'age_5_6': '5-6 yosh',
            'age_label': 'Yosh:',
            'start_page': 'Bosh sahifa',
            'get_certificate': 'Sertifikat olish',
            'poems': 'She\'rlar',
            'documents': 'Hujjatlar',
            'games': 'O\'yinlar',
            'cert_req_title': 'Siz sertifikatga ega bo‘lishingiz uchun quyidagi shartlar bajarilishi kerak:',
            'cert_req_desc': 'Sertifikatni olish uchun 50 ta test savolini yechish lozim. 50 ta test savollari to‘liq bajarilgandan so‘ng sertifikat avtomatik tarzda shakllantiriladi va taqdim etiladi.',
            'start_test_btn': 'Testni boshlash',
            'test_title': 'Baholash testi',
            'question': 'Savol',
            'next_btn': 'Keyingisi',
            'finish_btn': 'Yakunlash',
            'score': 'Natija',
            'test_complete': 'Test yakunlandi!',
            'correct_answers': 'To\'g\'ri javoblar',
            'total_questions': 'Jami savollar',
            'result_message_excellent': 'Ajoyib! Siz sertifikat oldingiz!',
            'result_message_good': 'Yaxshi! Yana mashq qiling.',
            'result_message_retry': 'Natijani yaxshilash uchun qaytadan urinib ko\'ring.',
            'get_cert_btn': 'Sertifikatni yuklab olish'
        },
        'ru': {
            'home': 'Главная',
            'login': 'Вход',
            'settings': 'Настройки',
            'help': 'Помощь',
            'welcome': 'Добро пожаловать в EduPlay 365',
            'math_title': 'Математика',
            'math_desc': 'Развивает основные математические навыки, такие как счет, фигуры и простые арифметические операции.',
            'science_title': 'Язык и речь',
            'science_desc': 'Развивает словарный запас, правильное произношение и речевую выразительность.',
            'geo_title': 'Социальные навыки',
            'geo_desc': 'Фокусируется на эмоциональном интеллекте, обмене и социальном взаимодействии.',
            'lit_title': 'Творческое мышление',
            'lit_desc': 'Вдохновляет воображение, художественное выражение и инновационные идеи.',
            'logic_title': 'Логическое мышление',
            'logic_desc': 'Укрепляет логику, решение проблем и навыки критического мышления.',
            'lesson': 'Урок',
            'video_lesson_desc': 'Изучите основы в этом интерактивном уроке. Идеально для дошкольного обучения и развития.',
            'login_header': 'Вход',
            'email_label': 'Эл. почта',
            'password_label': 'Пароль',
            'signin_btn': 'Войти',
            'logout': 'Выход',
            'video_lessons': 'Видеоуроки',
            'register_header': 'Регистрация',
            'username_label': 'Имя пользователя',
            'no_account': 'Нет аккаунта?',
            'already_account': 'Уже есть аккаунт?',
            'signup_link': 'Регистрация',
            'login_link': 'Вход',
            'signup_btn': 'Зарегистрироваться',
            'settings_header': 'Настройки',
            'help_header': 'Центр Помощи',
            'under_construction': 'Эта страница в разработке.',
            'back_home': 'На главную',
            'help_about_title': 'Что может этот сайт?',
            'help_about_p1': 'Этот веб-сайт разработан для поддержки деятельности дошкольных образовательных учреждений и более эффективной организации образования детей с использованием современных информационных технологий.',
            'help_about_p2': 'Платформа содержит различные развивающие, образовательные и развлекательные игры для детей, помогающие повысить их уровень знаний, логическое мышление и активность. Также есть возможность отслеживать участие детей и выполнение заданий.',
            'help_about_p3': 'Этот веб-сайт служит удобным и эффективным инструлом для педагогов и воспитателей в контроле и анализе учебного процесса, а также для родителей в наблюдении за развитием их детей.',
            'help_contact_title': 'Связь',
            'help_tech_title': 'Технические вопросы',
            'help_tech_desc': 'По ошибкам и неисправностям',
            'help_game_title': 'По видеоиграм',
            'help_game_desc': 'Предложения и функции игр',
            'help_footer_text': 'Все обращения будут рассмотрены в кратчайшие сроки для устранения проблем и дальнейшего совершенствования работы веб-сайта.',
            'videos': 'Сохраненные Видео',
            'videos_header': 'Ваша Видеобиблиотека',
            'add_video_title': 'Добавить Новое Видео',
            'video_file_label': 'Выберите Видеофайл',
            'video_title_label': 'Название Видео',
            'save_video_btn': 'Сохранить Видео',
            'save_to_library': 'Сохранить в Библиотеку',
            'theme_title': 'Тема',
            'theme_desc': 'Переключение между темным и светлым режимом',
            'text_size_title': 'Размер Текста',
            'text_size_desc': 'Настройка размера текста на экране',
            'reset_settings_btn': 'Сбросить по умолчанию',
            'bg_tint_title': 'Оттенок Фона',
            'bg_tint_desc': 'Изменить цветовой оттенок фона',
            'sidebar_color_title': 'Цвет Боковой Панели',
            'sidebar_color_desc': 'Настроить цвет фона боковой панели',
            'age_select_title': 'Выберите ваш возраст',
            'age_3_4': '3-4 года',
            'age_5_6': '5-6 лет',
            'age_label': 'Возраст:',
            'start_page': 'Приветствие',
            'video_lessons': 'Видеоуроки',
            'get_certificate': 'Получить сертификат',
            'poems': 'Стихи',
            'documents': 'Документы',
            'games': 'Игры',
            'cert_req_title': 'Требования для получения сертификата:',
            'cert_req_desc': 'Для получения сертификата необходимо решить 50 тестовых вопросов. После полного выполнения 50 тестовых вопросов сертификат будет автоматически сформирован и представлен.',
            'start_test_btn': 'Начать тест',
            'test_title': 'Оценочный тест',
            'question': 'Вопрос',
            'next_btn': 'Следующий',
            'finish_btn': 'Завершить',
            'score': 'Счет',
            'test_complete': 'Тест завершен!',
            'correct_answers': 'Правильные ответы',
            'total_questions': 'Всего вопросов',
            'result_message_excellent': 'Отлично! Вы получили сертификат!',
            'result_message_good': 'Хорошая работа! Продолжайте тренироваться.',
            'result_message_retry': 'Попробуйте еще раз, чтобы улучшить результат.',
            'get_cert_btn': 'Получить сертификат'
        }
    };

    const langSelect = document.getElementById('lang-select');

    // Make currentLang globally accessible
    window.currentLang = 'en';

    function updateLanguage(lang) {
        window.currentLang = lang;
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        localStorage.setItem('selectedLang', lang);
    }

    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            updateLanguage(e.target.value);
        });

        // Check local storage or default to en
        const savedLang = localStorage.getItem('selectedLang') || 'en';
        langSelect.value = savedLang;
        updateLanguage(savedLang);
    }

    // --- Settings Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const textSizeSlider = document.getElementById('text-size-slider');
    const textSizeValue = document.getElementById('text-size-value');

    // 1. Theme Logic
    function applyTheme(isLight) {
        if (isLight) {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }

    if (themeToggle) {
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        const isLight = savedTheme === 'light';
        themeToggle.checked = isLight;
        applyTheme(isLight);

        themeToggle.addEventListener('change', (e) => {
            const isLight = e.target.checked;
            applyTheme(isLight);
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    } else {
        // Apply theme on other pages (where toggle might not exist)
        const savedTheme = localStorage.getItem('theme');
        applyTheme(savedTheme === 'light');
    }

    // 2. Text Size/Scale Logic
    function applyTextSize(size) {
        // Option A: Zoom (simpler for full scaling)
        // document.body.style.zoom = size + '%';

        // Option B: REM scaling (better accessibility)
        document.documentElement.style.fontSize = size + '%';

        if (textSizeValue) {
            textSizeValue.textContent = size + '%';
        }
    }

    if (textSizeSlider) {
        // Load saved size
        const savedSize = localStorage.getItem('textSize') || '100';
        textSizeSlider.value = savedSize;
        applyTextSize(savedSize);

        textSizeSlider.addEventListener('input', (e) => {
            const size = e.target.value;
            applyTextSize(size);
            localStorage.setItem('textSize', size);
        });
    } else {
        // Apply size on other pages
        const savedSize = localStorage.getItem('textSize') || '100';
        applyTextSize(savedSize);
    }

    // 3. Sidebar Color Logic
    const sidebarColorPicker = document.getElementById('sidebar-color-picker');

    function applySidebarColor(color) {
        document.documentElement.style.setProperty('--sidebar-bg', color);
    }

    if (sidebarColorPicker) {
        // Load saved color
        // Default depends on theme, but we can just use the computed style if not saved, 
        // or let CSS handle specific defaults if localStorage is empty.
        const savedColor = localStorage.getItem('sidebarColor');

        if (savedColor) {
            sidebarColorPicker.value = savedColor;
            applySidebarColor(savedColor);
        }

        sidebarColorPicker.addEventListener('input', (e) => {
            const color = e.target.value;
            applySidebarColor(color);
            localStorage.setItem('sidebarColor', color);
        });
    } else {
        const savedColor = localStorage.getItem('sidebarColor');
        if (savedColor) {
            applySidebarColor(savedColor);
        }
    }



    // 4. Reset Settings Function
    window.resetSettings = function () {
        // Reset theme to dark
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.checked = false;
            document.body.classList.remove('light-mode');
            localStorage.removeItem('theme');
        }

        // Reset text size to 100%
        const textSizeSlider = document.getElementById('text-size-slider');
        if (textSizeSlider) {
            textSizeSlider.value = '100';
            applyTextSize('100');
            localStorage.removeItem('textSize');
        }

        // Reset sidebar color to default (#0f172a)
        const sidebarColorPicker = document.getElementById('sidebar-color-picker');
        if (sidebarColorPicker) {
            const defaultColor = '#0f172a';
            sidebarColorPicker.value = defaultColor;
            applySidebarColor(defaultColor);
            localStorage.removeItem('sidebarColor');
        }

        // Show confirmation feedback
        alert(translations[currentLang]['reset_settings_btn'] || 'Settings reset to default!');
    };

    // 5. Saved Videos Logic (localStorage)
    const videoGrid = document.getElementById('video-grid');

    // --- Backend Video Logic ---
    async function loadVideosBackend() {
        if (!videoGrid) return;

        const token = localStorage.getItem('token');
        if (!token) return loadVideos();

        try {
            const response = await fetch(`${API_URL}/videos`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.ok) {
                const videos = await response.json();
                renderVideos(videos, true);
            } else {
                console.error('Failed to load videos from backend');
                loadVideos();
            }
        } catch (err) {
            console.error('Backend load error:', err);
            loadVideos();
        }
    }

    function renderVideos(videos, isBackend = false) {
        if (!videoGrid) return;
        videoGrid.innerHTML = '';

        if (videos.length === 0) {
            videoGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No videos saved yet.</p>';
            return;
        }

        videos.forEach(video => {
            const card = document.createElement('div');
            card.className = 'video-card';

            const videoSrc = isBackend ? video.url : video.src;
            const videoId = isBackend ? video._id : video.id;

            const isYouTube = videoSrc.includes('youtube.com/embed/');
            const videoContent = isYouTube
                ? `<iframe src="${videoSrc}" frameborder="0" allowfullscreen style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;"></iframe>`
                : `<video src="${videoSrc}" poster="${video.poster || 'bg-mobile.jpg'}" preload="metadata" style="width: 100%; height: 100%; object-fit: cover;"></video>`;

            card.innerHTML = `
                <div class="video-wrapper ${isYouTube ? 'is-playing' : ''}" onclick="${isYouTube ? '' : 'toggleVideo(this)'}">
                    ${videoContent}
                    ${!isYouTube ? `
                    <div class="play-overlay">
                        <i class="fas fa-play"></i>
                    </div>` : ''}
                </div>
                <div class="video-info">
                    <div class="video-title">${video.title}</div>
                    <div class="video-desc">${video.description || ''}</div>
                    <button class="delete-video-btn" onclick="deleteVideo('${videoId}', ${isBackend})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            `;
            videoGrid.appendChild(card);
        });
    }

    // Function to save a video
    window.saveVideo = async function (title, description, src, poster) {
        const token = localStorage.getItem('token');

        // If logged in, save to backend
        if (token) {
            try {
                const finalPoster = poster || src.replace('.mp4', '.jpg');
                const response = await fetch(`${API_URL}/videos`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ title, description, url: src, poster: finalPoster })
                });

                if (response.ok) {
                    alert('Video saved to your cloud library!');
                } else {
                    const data = await response.json();
                    alert(data.message || 'Failed to save video to cloud');
                }
            } catch (err) {
                console.error('Save to backend error:', err);
                alert('Cloud save failed. Saving locally instead.');
                saveLocally(title, description, src, poster);
            }
        } else {
            saveLocally(title, description, src, poster);
        }
    };

    function saveLocally(title, description, src, poster) {
        const videos = JSON.parse(localStorage.getItem('savedVideos')) || [];
        if (videos.some(v => v.src === src)) {
            alert('This video is already in your library!');
            return;
        }
        const finalPoster = poster || src.replace('.mp4', '.jpg');
        const newVideo = {
            id: Date.now(),
            title: title,
            description: description,
            src: src,
            poster: finalPoster,
            savedAt: new Date().toLocaleDateString()
        };
        videos.push(newVideo);
        localStorage.setItem('savedVideos', JSON.stringify(videos));
        alert('Video saved to your local library!');
    }

    // Function to delete a video
    window.deleteVideo = async function (id, isBackend) {
        if (!confirm('Are you sure you want to delete this video?')) return;

        if (isBackend) {
            const token = localStorage.getItem('token');
            try {
                const response = await fetch(`${API_URL}/videos/${id}`, {
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${token}` }
                });

                if (response.ok) {
                    loadVideosBackend();
                } else {
                    alert('Failed to delete video from cloud');
                }
            } catch (err) {
                console.error('Delete from backend error:', err);
            }
        } else {
            let videos = JSON.parse(localStorage.getItem('savedVideos')) || [];
            videos = videos.filter(v => v.id !== parseInt(id));
            localStorage.setItem('savedVideos', JSON.stringify(videos));
            loadVideos();
        }
    };

    // --- Authentication Logic ---
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    const API_URL = 'http://localhost:5000/api';

    if (showRegister) {
        showRegister.addEventListener('click', (e) => {
            e.preventDefault();
            loginSection.style.display = 'none';
            registerSection.style.display = 'block';
        });
    }

    if (showLogin) {
        showLogin.addEventListener('click', (e) => {
            e.preventDefault();
            registerSection.style.display = 'none';
            loginSection.style.display = 'block';
        });
    }

    // Login Form Submit
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            try {
                const response = await fetch(`${API_URL}/users/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();
                if (response.ok) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    alert('Login successful!');
                    window.location.href = 'index.html';
                } else {
                    alert(data.message || 'Login failed');
                }
            } catch (err) {
                console.error('Login error:', err);
                alert('Connection error. Is the backend running?');
            }
        });
    }

    // Register Form Submit
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('reg-username').value;
            const email = document.getElementById('reg-email').value;
            const password = document.getElementById('reg-password').value;
            const ageGroup = document.getElementById('reg-age').value;

            try {
                const response = await fetch(`${API_URL}/users/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, email, password, ageGroup })
                });

                const data = await response.json();
                if (response.ok) {
                    alert('Registration successful! Please login.');
                    registerSection.style.display = 'none';
                    loginSection.style.display = 'block';
                } else {
                    alert(data.message || 'Registration failed');
                }
            } catch (err) {
                console.error('Registration error:', err);
                alert('Connection error. Is the backend running?');
            }
        });
    }

    // Load videos if we are on the videos page
    if (videoGrid) {
        const token = localStorage.getItem('token');
        if (token) {
            loadVideosBackend();
        } else {
            loadVideos(); // Fallback to local storage for guests
        }
    }

    // 6. Age Selection Modal Logic
    const ageModal = document.getElementById('age-modal');
    const ageDisplay = document.getElementById('age-display');

    // Function to show age selection modal
    function showAgeModal() {
        if (ageModal) {
            ageModal.style.display = 'flex';
        }
    }

    // Function to hide age selection modal
    function hideAgeModal() {
        if (ageModal) {
            ageModal.style.display = 'none';
        }
    }

    // Function to update age display
    function updateAgeDisplay(ageKey) {
        if (ageDisplay) {
            const ageText = translations[window.currentLang][ageKey];
            const ageLabel = translations[window.currentLang]['age_label'];
            ageDisplay.innerHTML = `<span data-i18n="age_label">${ageLabel}</span> <span data-i18n="${ageKey}">${ageText}</span>`;
        }
    }

    // Function to filter videos by age
    function filterVideosByAge(ageKey) {
        const videoCards = document.querySelectorAll('.video-card');
        if (videoCards.length === 0) return;

        videoCards.forEach(card => {
            const cardAge = card.getAttribute('data-age');
            if (!ageKey || cardAge === ageKey) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Make selectAge globally accessible
    window.selectAge = function (ageKey) {
        localStorage.setItem('selectedAge', ageKey);
        updateAgeDisplay(ageKey);
        filterVideosByAge(ageKey);
        hideAgeModal();
    };

    // Check if age is already selected
    const savedAge = localStorage.getItem('selectedAge');
    const isGamePage = window.location.pathname.includes('game-');

    if (isGamePage) {
        // Always show modal on game pages as requested
        showAgeModal();
        if (savedAge) {
            updateAgeDisplay(savedAge);
            filterVideosByAge(savedAge);
        }
    } else if (savedAge) {
        updateAgeDisplay(savedAge);
    } else {
        // Show modal on home page if no age selected
        showAgeModal();
    }

    // Update age display when language changes
    const originalUpdateLanguage = updateLanguage;
    updateLanguage = function (lang) {
        originalUpdateLanguage(lang);
        const savedAge = localStorage.getItem('selectedAge');
        if (savedAge) {
            updateAgeDisplay(savedAge);
        }
    };
});
