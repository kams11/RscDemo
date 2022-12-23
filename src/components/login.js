import React from 'react';
import "../components/login.css";
import workers from '../components/workers.png'
import {FiLogIn} from 'react-icons/fi';

const Login = () => {
  return (
    <>
    <section className="mainbody">

      {/* signin block */}
      <div className="signin" >
          {/* alert */}
        <h6 > ALERT:DO NOT OPEN MORE THAN ONE BROWSER SESSION AT A TIME FOR PERFORMING TRANSACTIONS</h6>
        {/* login components */}
        <div className="loginContainer">
            {/* left login part/image */}
            <div className="loginFrame1">
                <img className='loginImage' src={workers} alt="" />
            </div>
            {/* right login part/form  */}
            <div className="loginFrame1">

              {/* login form */}
    <form className='loginForm'>
      <h4> <FiLogIn style={{marginBottom:"3px"}}/> Sign in to view your account</h4>
    <div class="g-3">
    <input type="text" name='username' class="form-control" id="username" aria-describedby="usernameHelp" placeholder='username'/>
    </div>
  <div class="g-3">
    <input type="password" name='password' class="form-control" id="exampleInputPassword1" placeholder='password'/>
  </div>

  {/* country */}
  <div class="dropdown" name='country'>
  <button class="btn g-3 btn-secondary dropdown-toggle form-control" type="button" data-bs-toggle="dropdown" aria-expanded="true">
    Country
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

{/* language */}
<div class="dropdown" name='language'>
  <button class="btn g-3 btn-secondary dropdown-toggle form-control" type="button" data-bs-toggle="dropdown" aria-expanded="true">
    Language
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">English</a></li>
    <li><a class="dropdown-item" href="#">Espanol</a></li>
    <li><a class="dropdown-item" href="#">Deustche</a></li>
  </ul>
</div >
<div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/> Remember me
    <a style={{textDecoration:"none",marginLeft:"60px"}} href="#">forgot password</a>
  </div>
<div class="g-3">
  <button type="submit" class="btn btn-primary form-control">LOGIN</button>
  </div>
</form>
</div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Login;