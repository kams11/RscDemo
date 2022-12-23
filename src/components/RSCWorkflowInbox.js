import React from 'react';
import './RSCWorkflowInbox.css'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {FaQuestion} from 'react-icons/fa'
import {AiOutlinePoweroff} from 'react-icons/ai';
import {GrNotes} from 'react-icons/gr';
import {GiNotebook} from 'react-icons/gi';
import {SlNotebook} from 'react-icons/sl';

const RSCWorkflowInbox = () => {
  return (
    <> <section>
    <nav class="navbar navbar-expand-lg bg-danger"style={{height:"50px"}}>
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">ʝօհղʂօղ-ʝօհղʂօղ</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div style={{marginLeft:"25%"}} class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#" style={{paddingLeft:"90px"}}>RSC Workflow Inbox</a>
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
</section>
<section className="workflowInbox">
    <div className="componentsBody" style={{width:"100%",display:"inline-flex",justifyContent:"left",paddingTop:"20px"}}>
            <div className="componentMaster" style={{height:"60px",width:"60px",border:"2px solid blue",borderRadius:"30px",marginLeft:"80px"}}><GrNotes style={{height:"50px"}}/></div>
            <div className="componentAssignment" style={{height:"60px",width:"60px",border:"2px solid blue",borderRadius:"30px",marginLeft:"80px"}}><GiNotebook style={{height:"55px"}}/></div>
            <div className="PT SITE Readiness" style={{height:"60px",width:"60px",border:"2px solid blue",borderRadius:"30px",marginLeft:"80px"}}><SlNotebook style={{height:"50px"}}/></div>
    </div>
</section>
<section className='wfiTable'>
  <div style={{padding:"20px"}}>
  <table >
    <thead >
      <tr>
        <th>Component Type</th>
        <th>Component Control No</th>
        <th>Revision</th>
        <th>CM Franchise Key</th>
        <th>Alternate Reference No</th>
        <th>CM CNN Change Order No</th>
        <th>RSC Change Order No</th>
        <th>Changed By</th>
      </tr>
      
    </thead>
    <tbody>
    <tr>
        <td><input type="text" /></td>
        <td><input type="text" /></td>
        <td><input type="text" /></td>
        <td><input type="text" /></td>
        <td><input type="text" /></td>
        <td><input type="text" /></td>
        <td><input type="text" /></td>
        <td><input type="text" /></td>
      </tr>
    </tbody>
    
    
        
        
    
  </table>
  </div>
  <div class="d-flex flex-row-reverse mb-3" style={{width:"100%",paddingRight:"50px",columnGap:"4px"}}>
        <button class="btn btn-danger p-2" type="submit">RESET</button>
        <button class="btn btn-success p-2"  type="submit">SEARCH</button>
        </div> 
</section>

</>
  )
}

export default RSCWorkflowInbox;