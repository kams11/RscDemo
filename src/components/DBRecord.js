import React from 'react';
import './UserReporting.css';
import {MdOutlineNoteAlt} from 'react-icons/md';
import {GiNotebook} from 'react-icons/gi';
import {SlNotebook} from 'react-icons/sl';
import { useState } from 'react';
import DBRecordTable from './DBRecordTable';

const DBRecord = () => {
  const [toggle,setToggle] = useState(false);
  const toggleHandler1 =()=>{
    setToggle(!toggle);
  }

  return (
    <section className='userReports'>
        <div className="URtitle">
             <h2>USER <span style={{color:"red"}}>REPORTING</span> </h2>
        </div>

        <div className="reports" >

          <div className='report1'> <a style={{textDecoration:"none",color:"white"}} href="/UserReporting">
                 <div className="toReports"  style={{height:"60px",width:"60px",border:"2px solid rgba(247, 63, 8, 0.712)",borderRadius:"30px",marginLeft:"80px"}}><MdOutlineNoteAlt style={{height:"50px"}}/></div> <br />
                 <p style={{paddingLeft:"50px"}} >Transform Order Reports</p></a>
          </div>

          <div className="report2"> <a style={{textDecoration:"none",color:"white"}} href="/WorkOrderReports">
                  <div className="woReports" style={{height:"60px",width:"60px",border:"2px solid rgba(247, 63, 8, 0.712)",borderRadius:"30px",marginLeft:"80px"}}><GiNotebook style={{height:"55px"}}/></div> <br /> <p style={{paddingLeft:"50px"}} >Work Order Reports</p></a>
            </div>  
          
          <div className="report3">  <a style={{textDecoration:"none",color:"white"}} href="/DBRecord">
                  <div className="dbRecord" style={{height:"60px",width:"60px",border:"2px solid rgba(247, 63, 8, 0.712)",borderRadius:"30px",marginLeft:"80px"}}><SlNotebook style={{height:"50px"}}/></div> <br /> 
                  <p style={{textDecoration:"underline",paddingLeft:"50px",fontWeight:"600"}}>Digital Batch Record</p></a>
          </div>
            
        </div>

        <div className="TObody" style={{display:"inline-flex"}}>
        <form method="GET" >
            
                    <tr>
                        <th>Work Order Number</th>
                    </tr>
                
                  <tr>
                    <td><input type="text" /></td>
                    
                  </tr>
                
                
                
  </form>
  <br /> <br />
  
        </div>
        <div style={{marginTop:"20px",display:"block",justifyContent:"space-between"}}>
                <button className='searchbtn' onClick={toggleHandler1} >EXECUTE</button>
                <button className='clearbtn'>CLEAR</button>
                <br /><br /><br />
                {toggle?<DBRecordTable />:null} 
                </div>
        
    </section>
  )
}

export default DBRecord;