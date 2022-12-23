import React, { useState } from 'react';
import '../components/ComponentMaster.css'
import ComponentMasterTable from './ComponentMasterTable';
import Navbar2 from './navbar2';

const ComponentMaster = () => {
  const [toggle,setToggle] = useState(false);
  const toggleHandler =()=>{
    setToggle(!toggle);
  }
  return (
    <>
    <section className="mainbody">
    < Navbar2 />
    
    <div className="app-container" >
    
      <table>
        <thead style={{background:"none",border:"none"}}>
          <tr style={{display:"inline-flex",gap:"20px"}}>
            <th>*Component Type</th>
            <th>*Component Control No</th>
            <th style={{paddingRight:"70px"}}>*Revision</th>
          </tr> <br />
          <tr style={{display:"inline-flex",gap:"2px"}}>
          <input type="text" name='dyanamicLabel' required="required" placeholder='Dynamic Label'
                />
                <input type="text" name='componentControlNo' required="required" placeholder='Component Control No'/>
                <input type="text" name='revision'  required="required" placeholder='Revision'/> 
          </tr>
        </thead>

        
        <br />
        <tbody>
            {/* operations */}
            <tr>
        <div class="d-flex flex-row-reverse mb-3" style={{width:"100%",marginLeft:"99%",columnGap:"4px"}}>
        <button class="btn btn-danger p-2" type="submit">RESET</button>
        <button class="btn btn-primary p-2" type="submit">DISPLAY</button>
        <button class="btn btn-warning p-2" type="submit">CHANGE</button>
        <button class="btn btn-success p-2" onClick={toggleHandler} type="submit">CREATE</button>
        </div> 
        </tr>
        </tbody>
      </table>
      
      
    </div>
    {toggle?<ComponentMasterTable />:null} 
    </section> 
    

    
    </>    
  )
}

export default ComponentMaster;