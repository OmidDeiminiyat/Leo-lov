import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import style from './cookie.module.scss';

const Cookie = () => {
  const [cookieConsent, setCookieConsent] = useState(Cookies.get('cookieConsent'));
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    if (cookieConsent === 'accepted') {
      enableGoogleAnalytics();
    } else {
      disableGoogleAnalytics();
    }
  }, [cookieConsent]);

  const enableGoogleAnalytics = () => {
    setAnalyticsEnabled(true);
    console.log('Google Analytics Enabled');
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-XHG58XMGTD'); 
  };

  const disableGoogleAnalytics = () => {
    setAnalyticsEnabled(false);
    console.log('Google Analytics Disabled');
    window['G-XHG58XMGTD'] = true; 
  };

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 });
    setCookieConsent('accepted');
  };

  const handleDeny = () => {
    Cookies.set('cookieConsent', 'denied', { expires: 365 });
    setCookieConsent('denied');
  };

  return (
    <div className={style.Cookie} >
      {!cookieConsent && (
        <div className="cookie-consent">
          <p>We use cookies to improve your experience. Do you accept the use of cookies for analytics?</p>
          <button onClick={handleAccept}>Accept</button>
          <button onClick={handleDeny}>Deny</button>
        </div>
      )}

      {cookieConsent === 'accepted' && analyticsEnabled && (
        <p>Google Analytics is enabled and tracking.</p>
      )}

      {cookieConsent === 'denied' && (
        <p>You have denied cookie consent for Google Analytics. Tracking is disabled.</p>
      )}
    </div>
  );
};

export default Cookie;
