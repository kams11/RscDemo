import React from 'react';
import './ComponentMasterTable.css'

const ComponentMasterTable = () => {
    
  return (
    <div className="cmtContainer">
        <table>
            <thead >
                <tr >
                    <th>List No</th>
                    <th>Component Type</th>
                    <th>Component Control No</th>
                    <th>Revision</th>
                    <th>CM Frenchise Key</th>
                    <th>CM Status</th>
                    <th>Content File</th>
                    <th>Alternate Reference No</th>
                    <th>CM CNN Source</th>
                    <th>CM CNN Change Order No</th>
                    <th>RSC Change Order No</th>
                    <th>Created By</th>
                    <th>Created On</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Dynamic Label</td>
                    <td>HD1345</td>
                    <td>A</td>
                    <td>BWI</td>
                    <td>CREATED</td>
                    <td>icon</td>
                    <td>852</td>
                    <td>ERP Number</td>
                    <td>16455</td>
                    <td>C-4552</td>
                    <td>Username</td>
                    <td>21 DEC 2022</td>
                </tr>
            </tbody>
            
        </table>
        <div style={{display:"inline-flex",columnGap:"20px",marginTop:"20px"}}>
                <div class="d-flex flex-row mb-3" >
                    <button class="btn btn-danger">DELETE</button>
                </div>
                <div class="flex-row-reverse" >
                    <button class="btn btn-primary"style={{marginRight:"20px"}}>SAVE</button>
                    <button class="btn btn-success">SAVE AND SUBMIT FOR APPROVAL</button>
                </div>
            </div>
    </div>
  )
}

export default ComponentMasterTable;