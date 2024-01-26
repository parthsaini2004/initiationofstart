import React from 'react';
import '../googlebar/loginbar.css';
import googleimg from '../googlebar/flat-color-icons_google.png';

const Loginbar = () => {
    return (
        <>
            <div className="loginbar" id="loginbar">
         <div className="login-wrap">
    <div className="login-html">
      <input id="tab-1sign" type="radio" name="tabsign" className="sign-in" checked /><label for="tab-1sign" className="tabsign">Student</label>
      <input id="tab-2sign" type="radio" name="tabsign" className="sign-up" /><label for="tab-2sign" className="tabsign">Employer</label>
      
      
      <div className="login-form">
        <div className="sign-in-htm">
        <button className='googlebtn'>
        <div className="googlelogin">
            
            <div className="logingoogletext">Login with Google</div>
            <div className="googleimg"><img src={googleimg} alt="" /></div>
            
        </div>
        </button>
        <hr />
        
        <div className="or"> <button className="orbtn">OR</button></div>
        
          <div className="group">
            <label for="user" className="label">E-mail</label>
            <input id="user" type="text" className="input " />
          </div>
          <div className="group">
            <label for="pass" className="label">Password</label>
            <input id="pass" type="password" className="input" data-type="password" />
          </div>
          
          <div className="group">
            <input id="check" type="checkbox" className="check" checked />
            {/* <label for="check"><span className="icon"></span> Keep me Signed in</label> */}
          </div>
          <div className="foot-lnk">
            <a href="#forgot">Forgot Password?</a>
          </div>
          <div className="group">
            <input type="submit" className="button" value="Sign In" />
          </div>
          <div className="hr"></div>
          <div className="foot-lnk">
            <label for="tab-1sign"><a href="/signup">New Member?</a></label>
          </div>
          
        </div>
        <div className="sign-up-htm">
        <button className='googlebtn'>
        <div className="googlelogin">
            
            <div className="logingoogletext">Login with Google</div>
            <div className="googleimg"><img src={googleimg} alt="" /></div>
            
        </div>
        </button>
        <hr />
        
        <div className="or"> <button className="orbtn">OR</button></div>
        
          <div className="group">
            <label for="user" className="label">E-mail</label>
            <input id="user" type="text" className="input" />
          </div>
          
          <div className="group">
            <label for="pass" className="label">Password</label>
            <input id="pass" type="password" className="input" data-type="password" />
          </div>
          <div className="foot-lnk">
            <a href="#forgot">Forgot Password?</a>
          </div>
          
          {/* <div className="group">
            <label for="pass" className="label">Repeat Password</label>
            <input id="pass" type="password" className="input" data-type="password" />
          </div>
          <div className="group">
            <label for="pass" className="label">Email Address</label>
            <input id="pass" type="text" className="input" />
          </div> */}
          <div className="group">
            <input type="submit" className="button" value="Sign In" />
          </div>
          <div className="hr"></div>
          <div className="foot-lnk">
            <label for="tab-1sign"><a href="/signup">New Member?</a></label>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
         
             </>
    )
}

export default Loginbar