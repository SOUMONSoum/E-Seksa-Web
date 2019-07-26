import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.nameEl = React.createRef();
    this.phoneNumberEl = React.createRef();
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
    this.confirmationPasswordEl = React.createRef();
  }


  submitHandler = async (event) => {
    event.preventDefault();
    const name = this.nameEl.current.value;
    const phone_number = this.phoneNumberEl.current.value;
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;
    const confirmation_password = this.confirmationPasswordEl.current.value;

    if (email.trim().length === 0 || password.trim().length === 0 || name.trim().length === 0 || phone_number.trim().length === 0 || confirmation_password.trim().length === 0) {
      return;
    }

    const response = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/auth/sign_up',
      data: JSON.stringify({
        name: name,
        phone_number: phone_number,
        email: email,
        password: password,
        confirmation_password: confirmation_password
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed!');
      }
      return res
    }).then(resData => {
      console.log(resData);
    }).catch(err => {
      console.log(err)
    });
    console.log(response)
  };

  render() {
    return (
      <React.Fragment>
        <section className="section-padding">
          <div className="row">
            <div className="col-lg-5 col-md-8 col-sm-7 mx-auto">
              <div className="card">
                <div className="logo mx-auto mt-4">
                  <NavLink to="/">
                    <h2>រៀន និងសិក្សា</h2>
                  </NavLink>
                </div>
                <div className="m-divider"></div>
                <div className="card-body">
                  <h5 className="card-title mb-4 text-center">
                    បង្កើតគណនីឥឡូវនេះ
                </h5>
                  <form action="" className="signup-form" onSubmit={this.submitHandler}>
                    <div className="form-group">
                      <label htmlFor={this.nameEl}>ឈ្មោះ</label>
                      <input
                        type="text"
                        id="name"
                        ref={this.nameEl}
                        className="form-control"
                        placeholder="ឈ្មោះរបស់អ្នក..."
                        required />
                    </div>
                    <div className="form-group">
                      <label htmlFor={this.phoneNumberEl}>លេខទូរស័ព្ទ</label>
                      <input
                        type="text"
                        id="phone_number"
                        ref={this.phoneNumberEl}
                        className="form-control"
                        placeholder="លេខទូរស័ព្ទរបស់អ្នក..."
                        required />
                    </div>
                    <div className="form-group">
                      <label htmlFor={this.emailEl}>អុីម៉ែល</label>
                      <input
                        type="email"
                        id="email"
                        ref={this.emailEl}
                        className="form-control"
                        placeholder="អុីម៉ែលរបស់អ្នក..."
                        required />
                    </div>
                    <div className="form-group">
                      <label htmlFor={this.passwordEl}>លេខសម្ងាត់</label>
                      <input
                        type="password"
                        id="password"
                        ref={this.passwordEl}
                        className="form-control"
                        placeholder="លេខសម្ងាត់របស់អ្នក..."
                        required />
                    </div>
                    <div className="form-group">
                      <label htmlFor={this.confirmationPasswordEl}>បញ្ជាក់លេខសម្ងាត់</label>
                      <input
                        type="password"
                        id="confirmation_password"
                        ref={this.confirmationPasswordEl}
                        className="form-control"
                        placeholder="បញ្ជាក់លេខសម្ងាត់របស់អ្នក..."
                        required />
                    </div>
                    <div className="form-actions">
                      <button type="submit" className="btn btn-block btn-primary btn-lg">បង្កើតគណនីឥឡូវនេះ</button>
                    </div>
                    <div className="m--align-center mt-2">
                      <NavLink to="/login" className="m-link">ចូលប្រើប្រាស់</NavLink>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default SignupPage;
