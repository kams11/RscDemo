import React from 'react';
import {IoMdCloseCircleOutline} from 'react-icons/io';
import {BsFillInfoCircleFill} from 'react-icons/bs';

const ContentFileMissing = () => {
  return (
    <div className='contentFileMissing' style={{display:"grid",gridAutoRows:"30px 100px",margin:"18%",marginLeft:"35%",backgroundColor:"aliceblue",width:"fit-content",borderRadius:"4px"}}>
        <div style={{backgroundColor:"orange",borderRadius:"4px",color:"white",display:"inline-flex",justifyContent:"space-between",padding:"2px"}}>
          <div> <BsFillInfoCircleFill style={{cursor:"pointer"}}/></div>
          <div>Content File Missing </div>
          <div><IoMdCloseCircleOutline style={{cursor:"pointer"}}/></div>
           </div>
        <div style={{padding:"8px"}}>
        <p style={{fontSize:"16px"}}>Content file attachment is missing; do you want to attach?</p>
        <button class="btn btn-primary sm">Yes</button> <button class="btn btn-danger sm">No</button>
        </div>
        
    </div>
  )
}

export default ContentFileMissing;