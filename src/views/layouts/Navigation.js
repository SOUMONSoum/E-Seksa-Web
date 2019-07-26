import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <NavLink to="/" className="navbar-brand">
              សិក្សាជាមួយខ្ញុំ
            </NavLink>
            <button 
                  className="navbar-toggler" 
                  type="button" data-toggle="collapse" 
                  data-target="#navbarSupportedContent" 
                  aria-controls="navbarSupportedContent" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/home">
                  <i className="fas fa-home"></i>  ទំព័រដើម</NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/events">ព្រឹត្តិការណ៍ទាំងអស់</NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/about">អំពីខ្ញុំ</NavLink>
                </li>
              </ul>
              <ul className="navbar-nav ml">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/login">
                  <i className="fas fa-sign-in-alt"></i> ចូលប្រើប្រាស់</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default Navigation

