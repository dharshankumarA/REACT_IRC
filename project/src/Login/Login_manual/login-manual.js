import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class LoginManual extends Component {
  render() {
    return (
      <div className='half-width white-bg'>
        <h4>Login Manually</h4>
        <br/>
        <form action="">
          <div className='form-group'>
            <input type="text" className='form-control' placeholder='Email'/>
          </div>
          <div className='form-group'>
            <input type="password" className='form-control' placeholder='Password'/>
          </div>
          <Link to='/'><button type="submit" className='btn btn-primary right-btn'>Log in</button></Link>
        </form>
      </div>
    );
  }
}

export default LoginManual;
