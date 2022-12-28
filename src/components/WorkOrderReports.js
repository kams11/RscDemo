import React from 'react';
import './UserReporting.css';
import {IoMdSearch} from 'react-icons/io';
import {MdOutlineNoteAlt} from 'react-icons/md';
import {GiNotebook} from 'react-icons/gi';
import {SlNotebook} from 'react-icons/sl';
import { useState } from 'react';
import UserReportingTable2 from './UserReportingTable2';

const WorkOrderReports = () => {
  const [toggle,setToggle] = useState(false);
  const toggleHandler1 =()=>{
    setToggle(!toggle);
  }

  return (
    <section className='userReports' style={{height:"100vh",width:"100%"}}>
        <div className="URtitle">
             <h2>USER <span style={{color:"red"}}>REPORTING</span> </h2>
        </div>

        <div className="reports" >

        <div className='report1'> <a style={{textDecoration:"none",color:"white"}} href="/UserReporting">
                 <div className="toReports"  style={{height:"60px",width:"60px",border:"2px solid rgba(247, 63, 8, 0.712)",borderRadius:"30px",marginLeft:"80px"}}><MdOutlineNoteAlt style={{height:"50px"}}/></div> <br />
                 <p style={{paddingLeft:"50px"}} >Transform Order Reports</p></a>
          </div>

          <div className="report2"> <a style={{textDecoration:"none",color:"white"}} href="/WorkOrderReports">
                  <div className="woReports" style={{height:"60px",width:"60px",border:"2px solid rgba(247, 63, 8, 0.712)",borderRadius:"30px",marginLeft:"80px"}}><GiNotebook style={{height:"55px"}}/></div> <br /> <p style={{textDecoration:"underline",paddingLeft:"50px",fontWeight:"600"}} >Work Order Reports</p></a>
            </div>  
          
          <div className="report3">  <a style={{textDecoration:"none",color:"white"}} href="/DBRecord">
                  <div className="dbRecord" style={{height:"60px",width:"60px",border:"2px solid rgba(247, 63, 8, 0.712)",borderRadius:"30px",marginLeft:"80px"}}><SlNotebook style={{height:"50px"}}/></div> <br /> 
                  <p style={{paddingLeft:"50px"}}>Digital Batch Record</p></a>
          </div>
            
        </div>

        <div className="TObody" style={{display:"inline-flex"}}>
        <form method="GET" >
            
                    <tr>
                        <th>Transformation Site</th>
                        <th>Transform Order Number</th>
                        <th>Ship to Country</th>
                        <th>Work Order Status</th>
                        <th>Work Order Number</th>
                        <th>Date Created</th>
                        <th>Work Station</th>
                        <th>Product Number</th>
                    </tr>
                
                  <tr>
                    
                  <td><select id="sites" name="sites">
                                <option value="111">Courcelles,Belgium</option>
                                <option value="222">Saab</option>
                                <option value="333">Fiat</option>
                                <option value="444">Audi</option>
                        </select></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><select id="status" name="status">
                                <option value="111"> <input type="checkbox" /> CANCEL</option>
                                <option value="222"><input type="checkbox" />COMPLETED</option>
                                <option value="333"><input type="checkbox" />CREATED</option>
                                <option value="444"><input type="checkbox" />IN-PROCESS</option>
                                <option value="444"><input type="checkbox" />ON-HOLD</option>
                        </select></td>
                    <td><input type="text" /></td>
                    <td><input type="date" onFocus="(this.type='date')" /></td> 
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    
                  </tr>
                
                
                
  </form>
  <br /> <br />
  
        </div>
        <div style={{marginTop:"20px",display:"block",justifyContent:"space-between"}}>
                <button className='searchbtn' onClick={toggleHandler1} ><IoMdSearch style={{marginBottom:"3px"}}/>SEARCH</button>
                <button className='clearbtn'>CLEAR</button>
                <br /><br /><br />
                {toggle?<UserReportingTable2 />:null} 
                </div>
        
    </section>
  )
}



export default WorkOrderReports;