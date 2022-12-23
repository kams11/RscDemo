import React from 'react';
import {IoIosNotificationsOutline} from 'react-icons/io'
import {FaQuestion} from 'react-icons/fa'
import {AiOutlinePoweroff} from 'react-icons/ai';

const Navbar2 = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-danger"style={{height:"50px"}}>
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">ʝօհղʂօղ-ʝօհղʂօղ</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div style={{marginLeft:"25%"}} class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">component configuration list</a>
        </li>
        </ul>
    </div>    
    <div class="d-flex flex-row mb-3 " id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#"> <h6 style={{paddingTop:"5px"}}>Welcome, Username</h6> </a>
        </li>
        <li class="nav-item" style={{paddingTop:"5px"}}>
          <IoIosNotificationsOutline style={{marginTop:"5px",width:"fit-content",height:"30px"}}/>
          <FaQuestion style={{marginTop:"5px",width:"fit-content",height:"25px"}}/>
          <AiOutlinePoweroff style={{marginTop:"5px",width:"fit-content",height:"30px"}}/>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

        
        
    </>
  )
}

export default Navbar2;