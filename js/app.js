import { initRouter } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  // Register Service Worker for PWA / Offline functionality
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(() => console.log('Service Worker Registered Successfully.'))
      .catch((err) => console.error('Service Worker Registration Failed:', err));
  }

  // Initialize Dark Mode
  initDarkMode();

  // Initialize Application Router
  initRouter();
});

function initDarkMode() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('learnpware_theme') || 'light';

  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = '☀️ Light';
  } else {
    document.documentElement.removeAttribute('data-theme');
    toggleBtn.textContent = '🌙 Dark';
  }

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('learnpware_theme', 'light');
      toggleBtn.textContent = '🌙 Dark';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('learnpware_theme', 'dark');
      toggleBtn.textContent = '☀️ Light';
    }
  });
}