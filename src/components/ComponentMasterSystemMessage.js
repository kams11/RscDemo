import React from 'react';
import {IoMdCloseCircleOutline} from 'react-icons/io';

const ComponentMasterSystemMessage = () => {
  return (
    <div className='CmsMessage' style={{display:"grid",gridAutoRows:"30px 60px",margin:"20%",marginLeft:"39%",backgroundColor:"rgb(238, 216, 216)",width:"360px",borderRadius:"4px"}}>
        <div style={{backgroundColor:"green",borderRadius:"4px",color:"white",display:"inline-flex",justifyContent:"space-between",padding:"3px"}}>
          <div></div>
          <div>Component Master System Message</div>
          <div><IoMdCloseCircleOutline style={{cursor:"pointer"}}/></div>

           </div>
        <div style={{padding:"5%"}}>
        <p style={{fontSize:"12px"}}>Component Master Saved and Submitted for Approval</p>
        </div>
        
    </div>
  )
}

export default ComponentMasterSystemMessage;