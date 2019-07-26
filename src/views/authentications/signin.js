import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export class SigninPage extends Component {
  constructor(props) {
    super(props);

    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }


  submitHandler = async (event) => {
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    const response = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/auth/sign_in',
      data: JSON.stringify({
        email: email,
        password: password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if(res.status !== 200 && res.status !== 201) {
        throw new Error('Failed!');
      }
      return res
    }).then(resData => {
      console.log(resData);
    }).catch(err => {
      console.log(err)
    });
    console.log(response)
  }

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
                    ចូលប្រើប្រាស់
                </h5>
                  <form action="" className="login-form" onSubmit={this.submitHandler}>
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
                    <div className="form-actions">
                      <button type="submit" className="btn btn-block btn-primary btn-lg">ចូលប្រើប្រាស់</button>
                    </div>
                    <div className="m--align-center mt-2">
                      <NavLink to="/signup" className="m-link">បង្កើតគណនីឥឡូវនេះ</NavLink>
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

export default SigninPage;
