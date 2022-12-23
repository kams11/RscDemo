import React from 'react';
import {IoMdCloseCircleOutline} from 'react-icons/io';

const SelectPdf = () => {
  return (
    <div className='Select Pdf' style={{display:"grid",gridAutoRows:"30px 120px",margin:"20%",marginLeft:"39%",backgroundColor:"rgb(238, 216, 216)",width:"fit-content",borderRadius:"4px"}}>
        <div style={{backgroundColor:"red",borderRadius:"4px",color:"white",display:"inline-flex",justifyContent:"space-between",padding:"3px"}}>
          <div></div>
          <div> Content File Missing</div>
          <div><IoMdCloseCircleOutline style={{cursor:"pointer"}}/></div>

           </div>
        <div style={{padding:"10%"}}>
        <input type="file" name="file" id="" accept="pdf/*" required/>
        <button class="btn btn-success sm " style={{marginLeft:"80%",paddingBottom:"10px"}}> save</button>
        </div>
        
    </div>
  )
}

export default SelectPdf;