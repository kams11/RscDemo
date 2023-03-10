import React from 'react';
import './UserReporting.css';
import {IoMdSearch} from 'react-icons/io';
import { useState } from 'react';
import UserReportingTable2 from './UserReportingTable2';

const WorkOrderReports = () => {
  const [toggleT2,setToggleT2] = useState(false);
  const toggleHandlerT2 =()=>{
    setToggleT2(!toggleT2);
  }

  return (
    <>
        
        <div className="TObody" style={{display:"block",width:"100%"}}>
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
                <button className='searchbtn' onClick={toggleHandlerT2} ><IoMdSearch style={{marginBottom:"3px"}}/>SEARCH</button>
                <button className='clearbtn' onClick={toggleHandlerT2}>CLEAR</button>
                
        </div>
        <div style={{display:"block",justifyContent:"center",paddingBottom:"20px",padding:"6px"}}>
        {toggleT2?<UserReportingTable2 />:null} 
        </div>
        
    </>
  )
}



export default WorkOrderReports;