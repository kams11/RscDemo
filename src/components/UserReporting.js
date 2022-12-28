import React from 'react';
import './UserReporting.css';
import {IoMdSearch} from 'react-icons/io';
import {GrNotes} from 'react-icons/gr';
import {GiNotebook} from 'react-icons/gi';
import {SlNotebook} from 'react-icons/sl';
import { useState } from 'react';
import UserReportingTable1 from './UserReportingTable1';

const UserReporting = () => {
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
                 <div className="toReports"  style={{height:"60px",width:"60px",border:"2px solid rgba(247, 63, 8, 0.712)",borderRadius:"30px",marginLeft:"80px"}}><GrNotes style={{height:"50px"}}/></div> <br />
                 <p style={{textDecoration:"underline",paddingLeft:"40px",fontWeight:"600"}} >Transform Order Reports</p></a>
          </div>

          <div className="report2"> <a style={{textDecoration:"none",color:"white"}} href="/WorkOrderReports">
                  <div className="woReports" style={{height:"60px",width:"60px",border:"2px solid rgba(247, 63, 8, 0.712)",borderRadius:"30px",marginLeft:"80px"}}><GiNotebook style={{height:"55px"}}/></div> <br /> <p style={{paddingLeft:"40px"}} >Work Order Reports</p></a>
            </div>  
          
          <div className="report3">  <a style={{textDecoration:"none",color:"white"}} href="/DBRecord">
                  <div className="dbRecord" style={{height:"60px",width:"60px",border:"2px solid rgba(247, 63, 8, 0.712)",borderRadius:"30px",marginLeft:"80px"}}><SlNotebook style={{height:"50px"}}/></div> <br /> 
                  <p style={{paddingLeft:"40px"}}>Digital Batch Record</p></a>
          </div>
            
        </div>

        <div className="TObody" style={{display:"inline-flex"}}>
        <form method="GET" >
            
                    <tr>
                        <th>Transform Order Number</th>
                        <th>Sales Order Number</th>
                        <th>Work Station</th>
                        <th>Transformation Site</th>
                        <th>Transform Order Status</th>
                        <th>Ship to Country</th>
                        <th>Transformation Request</th>
                        <th>Data Created Range</th>
                    </tr>
                
                  <tr>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><select id="sites" name="sites">
                                <option value="111">Courcelles,Belgium</option>
                                <option value="222">Saab</option>
                                <option value="333">Fiat</option>
                                <option value="444">Audi</option>
                        </select></td>
                    <td><select id="status" name="status">
                                <option value="111"> <input type="checkbox" /> CANCEL</option>
                                <option value="222"><input type="checkbox" />COMPLETED</option>
                                <option value="333"><input type="checkbox" />CREATED</option>
                                <option value="444"><input type="checkbox" />IN-PROCESS</option>
                                <option value="444"><input type="checkbox" />ON-HOLD</option>
                        </select></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="date" onFocus="(this.type='date')" /></td>
                  </tr>
                
                
                
  </form>
  <br /> <br />
  
        </div>
        <div style={{marginTop:"20px",display:"block",justifyContent:"space-between"}}>
                <button className='searchbtn' onClick={toggleHandler1} ><IoMdSearch style={{marginBottom:"3px"}}/>SEARCH</button>
                <button className='clearbtn'>CLEAR</button>
                <br /><br /><br />
                {toggle?<UserReportingTable1 />:null} 
                </div>
        
    </section>
  )
}

export default UserReporting;