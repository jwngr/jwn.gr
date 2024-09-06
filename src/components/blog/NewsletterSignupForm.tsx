import React, {useState} from 'react';

import './NewsletterSignupForm.css';

import {Urls} from '../../lib/urls';

export const NewsletterSignupForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="newsletter-form-wrapper">
      <p className="newsletter-form-text">
        Subscribe to new posts by email or <a href={Urls.forRss()}>RSS</a>
      </p>

      {/* Note: This form does not work locally on Safari. */}
      <form
        className="newsletter-form"
        method="post"
        action="//jwn.us15.list-manage.com/subscribe/post?u=d19fa80c86cc4e9017baf4f4b&amp;id=46d31d866a"
        name="mc-embedded-subscribe-form"
        target="_blank"
        rel="noopener"
        noValidate
      >
        <input
          className="newsletter-email-input"
          type="email"
          name="EMAIL"
          placeholder="your@email.com"
          value={email}
          onChange={handleEmailChange}
        />

        {/* From MailChimp: do not remove this or risk form bot signups */}
        <input
          className="newsletter-hidden-bot-input"
          type="hidden"
          name="b_d19fa80c86cc4e9017baf4f4b_46d31d866a"
          tabIndex={-1}
          value=""
          readOnly
        />

        <input
          className="newsletter-subscribe-button"
          type="submit"
          value="Subscribe"
          name="subscribe"
        />
      </form>
    </div>
  );
};
