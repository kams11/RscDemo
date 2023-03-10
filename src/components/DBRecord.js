import React from 'react';
import './UserReporting.css';
import { useState } from 'react';
import DBRecordTable from './DBRecordTable';

const DBRecord = () => {
  const [toggleT3,setToggleT3] = useState(false);
  const toggleHandler3 =()=>{
    setToggleT3(!toggleT3);
  }

  return (
    <>
        
        <div className="TObody" style={{display:"inline-flex"}}>
        <form method="GET" >
            
                    <tr>
                        <th>Work Order Number</th>
                    </tr>
                
                  <tr>
                    <td><input type="text" /></td>
                    
                  </tr>
                
                
                
  </form>
  
        </div>
        <div style={{marginTop:"20px",display:"block",justifyContent:"space-between"}}>
                <button className='searchbtn' onClick={toggleHandler3} >EXECUTE</button>
                <button className='clearbtn'>CLEAR</button>
        </div>
        <div style={{width:"100%",display:"block",justifyContent:"center"}}>
        {toggleT3?<DBRecordTable/>:null}
        </div>
        
    </>
  )
}

export default DBRecord;