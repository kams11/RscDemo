import React from 'react';
import './UserReporting.css';
import {IoMdSearch} from 'react-icons/io';
import { useState } from 'react';
import UserReportingTable1 from './UserReportingTable1';

const TOReports = () => {
  const [toggleT1,setToggleT1] = useState(false);
  const toggleHandlerT1 =()=>{
    setToggleT1(!toggleT1);
  }

  return (
        <>

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
  
        </div>

        
        <div style={{marginTop:"20px",display:"block",justifyContent:"space-between"}}>
          
          
          
                <button className='searchbtn' onClick={toggleHandlerT1} ><IoMdSearch style={{marginBottom:"3px"}}/>SEARCH</button>
                <button className='clearbtn'>CLEAR</button>
        </div>
        <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
        {toggleT1?<UserReportingTable1 />:null}
        </div>
        </>
  )
}

export default TOReports;