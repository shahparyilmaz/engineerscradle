import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Myform=()=>{
  const url='https://api.postalpincode.in/pincode/'
  const [login,setLogin]=useState({loginemail:'',loginpassword:''})
  const [signup,setSignup]=useState({fullname:'',phone1:'',signupemail:'',signuppassword:'',
                                      phone2:'',address:'',pincode:'',city:'',district:''})
  const setDistrictCity=async(pin)=>{
    try{
      const response=await fetch(url+pin);
      const users=await response.json();
      const dist=users[0].PostOffice[0].District
      const cit=users[0].PostOffice[0].Region
      setSignup({...signup,pincode:pin,city:cit,district:dist})
    }
    catch{
      //setSignup({...signup,city:'',district:''})
      const dist=''
      const cit=''
      setSignup({...signup,pincode:pin,city:cit,district:dist})
    }
  }
  const LogInChange=(e)=>{
    const field=e.target.name
    const input=e.target.value
    setLogin({...login,[field]:input})
  }
  const LoginSubmit=(e)=>{
    e.preventDefault();
    setLogin({loginemail:'',loginpassword:''})
  }
  const SignUpChange=(e)=>{
    const field=e.target.name
    const input=e.target.value
    setSignup({...signup,[field]:input})
    if(field=='pincode'){
      setDistrictCity(input)
    }
  }
  const SignupSubmit=(e)=>{
    e.preventDefault();
    setSignup({fullname:'',phone1:'',signupemail:'',signuppassword:'',
               phone2:'',address:'',pincode:'',city:'',district:''})
  }
  const goToLogin=(e)=>{
    e.preventDefault();
    document.getElementById('signupForm').style['display'] = "none";
    document.getElementById('loginForm').style['display'] = "flex";
    document.getElementById('loginoption').classList.add('selected-login')
    document.getElementById('signupoption').classList.remove('selected-signup')
  }
  const goToSignup=(e)=>{
    e.preventDefault();
    document.getElementById('loginForm').style['display'] = "none";
    document.getElementById('signupForm').style['display'] = "flex"; 
    document.getElementById('loginoption').classList.remove('selected-login')
    document.getElementById('signupoption').classList.add('selected-signup')
  }
  return (
    <>
      <div className="flex-div">
        <article className="forms">
          <div className="headings">
            <span id="loginoption" onClick={goToLogin} className="selected-login">Login</span>
            <span id="signupoption" onClick={goToSignup} >Signup</span>
          </div>
          <div id="loginForm" className='login-form'>
            <form>
              <div className="login-input-div">
                <label htmlFor='loginemail'>Email id : </label>
                <div className="input-div">
                  <input 
                  className="login-input" 
                  type="text" 
                  id="loginemail" 
                  name="loginemail" 
                  value={login.loginemail} 
                  onChange={LogInChange}
                  />
                </div>
              </div>
              <div className="login-input-div">
                <div className="forgotpass"><a href="#">Forgot password?</a></div>
                <label htmlFor='loginpassword'>Password : </label>
                <div className="input-div">
                <input 
                className="login-input" 
                type="password" 
                id="loginpassword" 
                name="loginpassword" 
                value={login.loginpassword} 
                onChange={LogInChange}
                />
                </div>
              </div>
              <div className="button-div">
                <button onClick={LoginSubmit} className="submitbtn" type="submit">Sign In</button>
              </div>
            </form>
          </div>
          <div id="signupForm" className='signup-form'>
            <form>
              <div className="signupform-grid">
                <div className="signup-input-div">
                  <label htmlFor='fullname'>Full Name </label>
                  <div className="input-div">
                    <input 
                    className="signup-input" 
                    type="text" 
                    id="fullname" 
                    name="fullname" 
                    value={signup.fullname} 
                    onChange={SignUpChange}
                    />
                  </div>
                </div>
                <div className="signup-input-div">
                  <div className="signup-input-div">
                  <label htmlFor='phone1'>Phone Number </label>
                  <div className="input-div">
                    <input 
                    className="signup-input" 
                    type="text" 
                    id="phone1" 
                    name="phone1" 
                    value={signup.phone1} 
                    onChange={SignUpChange}
                    />
                  </div>
                </div>
                </div>
                <div className="signup-input-div item3">
                  <div className="signup-input-div">
                  <label htmlFor='signupemail'>Email id </label>
                  <div className="input-div">
                    <input 
                    className="signup-input" 
                    type="text" 
                    id="signupemail" 
                    name="signupemail" 
                    value={signup.signupemail} 
                    onChange={SignUpChange}
                    />
                  </div>
                </div>
                </div>
                <div className="signup-input-div">
                  <div className="signup-input-div">
                  <label htmlFor='signuppassword'>Password </label>
                  <div className="input-div">
                    <input 
                    className="signup-input" 
                    type="text" 
                    id="signuppassword" 
                    name="signuppassword" 
                    value={signup.signuppassword} 
                    onChange={SignUpChange}
                    />
                  </div>
                </div>
                </div>
                <div className="signup-input-div">
                  <div className="signup-input-div">
                  <label htmlFor='phone2'>Phone Number </label>
                  <div className="input-div">
                    <input 
                    className="signup-input" 
                    type="text" 
                    id="phone2" 
                    name="phone2" 
                    value={signup.phone2} 
                    onChange={SignUpChange}
                    />
                  </div>
                </div>
                </div>
                <div className="signup-input-div">
                  <div className="signup-input-div">
                  <label htmlFor='address'>Address </label>
                  <div className="input-div">
                    <input 
                    className="signup-input" 
                    type="text" 
                    id="address" 
                    name="address" 
                    value={signup.address} 
                    onChange={SignUpChange}
                    />
                  </div>
                </div>
                </div>
                <div className="signup-input-div">
                  <div className="signup-input-div">
                  <label htmlFor='pincode'>Pincode </label>
                  <div className="input-div">
                    <input 
                    className="signup-input" 
                    type="text" 
                    id="pincode" 
                    name="pincode" 
                    value={signup.pincode} 
                    onChange={SignUpChange}
                    />
                  </div>
                </div>
                </div>
                <div className="signup-input-div">
                  <div className="signup-input-div">
                  <label htmlFor='city'>City </label>
                  <div className="input-div">
                    <input 
                    disabled
                    className="signup-input" 
                    type="text" 
                    id="city" 
                    name="city" 
                    value={signup.city} 
                    onChange={SignUpChange}
                    />
                  </div>
                </div>
                </div>
                <div className="signup-input-div">
                  <div className="signup-input-div">
                  <label htmlFor='district'>District </label>
                  <div className="input-div">
                    <input 
                    disabled 
                    className="signup-input" 
                    type="text" 
                    id="district" 
                    name="district" 
                    value={signup.district} 
                    onChange={SignUpChange}
                    />
                  </div>
                </div>
                </div>
              </div>
              <div className="button-div">
                <button onClick={SignupSubmit} className="submitbtn" type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </article>
      </div>
    </>
  )
}
ReactDOM.render(
  <Myform/>,document.getElementById('root')
);

