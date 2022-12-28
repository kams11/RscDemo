import React from 'react';
import "./UserReportingTable2.css";

export const UserReportingTable2 = () =>{
  return(
    <section className='userReports'>
        <div className="URtitile">
             <h5>Total Records : 202</h5>
        </div>
        <br />
        <div className="TObody">
        <form method="POST" >
            <table style={{marginLeft:"12%"}}>
                <thead>
                    <tr>
                        <th>Product Number</th>
                        <th scope="col">Variety Code</th>
                        <th scope="col">Batch Number</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Work Order Number</th>
                        <th scope="col">Transform Order Number</th>
                        <th scope="col">Work Order Status</th>
                        <th scope="col">Unit of Measurement</th>
                        <th scope="col">Created Date</th>
                        <th scope="col">Transformation Request</th>
                        <th scope="col">GTIN</th>
                        <th scope="col">Product Description</th>
                        <th scope="col">Label Printer</th>
                        <th scope="col">Network Printer</th>
                        <th scope="col">WO Execution Operator Name</th>
                        <th scope="col">WO Execution Start Date And Time</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                  </tr>
                  <tr>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                  </tr>
                </tbody>
            </table>
            
    
  </form>

        </div>

    </section>
    
    

  );
    
    }

export default UserReportingTable2;