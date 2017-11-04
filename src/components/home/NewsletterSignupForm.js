import React, { Component } from 'react';
import './NewsletterSignupForm.css';


class NewsletterSignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
    };

    this.onEmailChange = this.onInputChange.bind(this, 'email');
    this.onFirstNameChange = this.onInputChange.bind(this, 'firstName');
  }

  onInputChange(name, event) {
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    return (
      <div className='newsletter'>
        <div className='newsletter-intro'>
          <p>I'm on a worldwide excursion.</p>
          <p>
            Join a <a href="http://us15.campaign-archive1.com/home/?u=d19fa80c86cc4e9017baf4f4b&id=46d31d866a">weekly newsletter</a> recounting
            my travels, focused on building experiences and improving myself.
          </p>
        </div>

        <form
          className='newsletter-form'
          method='post'
          action='//jwn.us15.list-manage.com/subscribe/post?u=d19fa80c86cc4e9017baf4f4b&amp;id=46d31d866a'
          name='mc-embedded-subscribe-form'
          target='_blank'
          rel='noopener'
          noValidate
        >
          <div>
            <input
              className='newsletter-form-email-input'
              type='email'
              name='EMAIL'
              placeholder='Email'
              value={this.state.email}
              onChange={this.onEmailChange}
            />
          </div>

          <div>
            <input
              className='newsletter-form-first-name-input'
              type='text'
              name='FNAME'
              placeholder='First name'
              value={this.state.firstName}
              onChange={this.onFirstNameChange}
            />
          </div>

          {/* From MailChimp: do not remove this or risk form bot signups */}
          <input
            className='hidden-bot-input'
            type='text'
            name='b_d19fa80c86cc4e9017baf4f4b_46d31d866a'
            tabIndex='-1'
            value=''
          />

          <input
            className='newsletter-form-subscribe-button'
            type='submit'
            value='Subscribe'
            name='subscribe'
          />
        </form>
      </div>
    );
  }
}

export default NewsletterSignupForm;
