import i18n from 'i18next';

const showCookieBanner = () =>
  window.addEventListener('load', () => {
    window.cookieconsent.initialise({
      palette: {
        popup: {
          background: '#4caf50',
          text: '#000000de',
        },
        button: {
          background: '#afed71',
        },
      },
      content: {
        message: i18n.t('CookieBanner:basic_info'),
        dismiss: i18n.t('CookieBanner:got_it'),
        link: i18n.t('CookieBanner:learn_more'),
        href: '/privacy-policy',
      },
    });
  });

export default showCookieBanner;
