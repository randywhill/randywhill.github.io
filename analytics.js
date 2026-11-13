
/*
 * Shared Google Analytics configuration
 * G-KZ2Q915B37
 */

// Allow this browser to opt out of tracking.
const excludeAnalytics =
  localStorage.getItem('exclude_my_analytics') === 'true';

if (!excludeAnalytics) {
  // Load Google Analytics.
  const script = document.createElement('script');
  script.async = true;
  script.src =
    'https://www.googletagmanager.com/gtag/js?id=G-KZ2Q915B37';
  document.head.appendChild(script);

  // Initialize GA4.
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  gtag('js', new Date());
  gtag('config', 'G-KZ2Q915B37');
}
