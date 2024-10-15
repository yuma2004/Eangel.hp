document.addEventListener('DOMContentLoaded', () => {
  // ダークモードのトグル
  const themeToggle = document.getElementById('theme-toggle');
  const logo = document.getElementById('logo');
  const header = document.getElementById('header');

  // ダークモードの初期化
  if (
    localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
    themeToggle.innerHTML = '<i data-lucide="sun" class="w-5 h-5 text-yellow-400"></i>';
  } else {
    themeToggle.innerHTML = '<i data-lucide="moon" class="w-5 h-5 text-gray-800 dark:text-gray-200"></i>';
  }

  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
      themeToggle.innerHTML = '<i data-lucide="sun" class="w-5 h-5 text-yellow-400"></i>';
    } else {
      localStorage.setItem('theme', 'light');
      themeToggle.innerHTML = '<i data-lucide="moon" class="w-5 h-5 text-gray-800 dark:text-gray-200"></i>';
    }
    lucide.replace();
  });

  // スクロール検知によるヘッダー背景色変更
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('bg-teal-400', 'shadow-md');
      header.classList.remove('bg-transparent');
    } else {
      header.classList.remove('bg-teal-400', 'shadow-md');
      header.classList.add('bg-transparent');
    }
    lucide.replace();
  });

  // モバイルメニューのトグル
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    lucide.replace();
  });

  // FAQのトグル
  const faqToggles = document.querySelectorAll('.faq-toggle');

  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const answer = toggle.nextElementSibling;
      const icon = toggle.querySelector('i');

      answer.classList.toggle('hidden');
      icon.setAttribute('data-lucide', answer.classList.contains('hidden') ? 'chevron-down' : 'chevron-up');
      lucide.replace();
    });
  });

  // パララックス効果の実装
window.addEventListener('scroll', function() {
  const parallaxSections = document.querySelectorAll('.parallax-section');
  parallaxSections.forEach(function(section) {
    let scrollPosition = window.scrollY;
    section.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
  });
});


  // Swiperの初期化
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  // AOSの初期化
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
  });

  // Lucide Iconsの再配置
  lucide.replace();
});