import React from 'react';
import './UserReportingTable1.css';

export const UserReportingTable1 = () =>{
  return(
    
        
        <div className="TObody">
        <form method="POST" >
            <table className='rTable'>
                <thead>
                    <tr>
                        <th>Sales Order Number</th>
                        <th scope="col">HU Number</th>
                        <th scope="col">Pick Order</th>
                        <th scope="col">Transform Order Number</th>
                        <th scope="col">Work Order Count</th>
                        <th scope="col">Transform Order Status</th>
                        <th scope="col">Created Date</th>
                        <th scope="col">Transformation Start Date And Time</th>
                        <th scope="col">Transformation End Date And Time</th>
                        <th scope="col">Total Transformation Time</th>
                        <th scope="col">Ship to Country</th>
                        <th scope="col">Work Station</th>
                        <th scope="col">Label Printer</th>
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
                  </tr>
                </tbody>
            </table>
            <div className='container'>
                <button className=' btn btn1'>Prev</button>
                <button className='btn btn2'>1</button>
                <button className='btn btn3'>2</button>
                <button className='btn btn4'>Next</button>
            </div>
    
  </form>

        </div>

    
    

  );
    
    }

export default UserReportingTable1;