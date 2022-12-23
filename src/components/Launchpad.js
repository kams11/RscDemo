import React from 'react';
import '../components/Launchpad.css'
import Navbar from './navbar';

const Launchpad = () => {
  return (
    <>
    <section className="mainbody">
    <Navbar/>
        <div className="blockContainer">
            <div className="DataCockpit"> <h4>DataCockpit</h4>
                <div className="DataCockpitList">
                    <li><a href="/pageUnderMaintenance">Master Data</a></li>
                    <li><a href="/pageUnderMaintenance">Product Master Upload</a></li>
                    <li><a href="/ComponentMaster">Component Master</a></li>
                    <li><a href="/pageUnderMaintenance">Component Assignment</a></li>
                    <li><a href="/pageUnderMaintenance">Component Configuration List</a></li>
                    <li><a href="/pageUnderMaintenance">Component Repository Bulk Upload</a></li>
                    <li><a href="/pageUnderMaintenance">CR Assignment TEST APP</a></li>
                </div>
                <img src="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-talking-office-worker-cartoon-png-material-image_1193434.jpg" alt="" />
             </div>
            <div className="ProductTransformation"><h4>ProductTransformation</h4> 
            <div className="ProductTransformationList">
                    <li><a href="/pageUnderMaintenance">Work Order Execution</a></li>
                    <li><a href="/pageUnderMaintenance">Verification</a></li>
                    <li><a href="/pageUnderMaintenance">User Reporting</a></li>
                    <li><a href="/pageUnderMaintenance">Create Transformation Order</a></li>
                    <li><a href="/pageUnderMaintenance">Display TO / Work Order</a></li>
                    <li><a href="/pageUnderMaintenance">Cancel TO / Work Order</a></li>
                </div>
                <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-hand-drawn-cartoon-meeting-room-meeting-office-staff-white-collar-elite-png-image_4045092.jpg" alt="" />
            </div>
            <div className="Configuration"><h4>Configuration</h4>
            <div className="ConfigurationList">
                    <li><a href="/pageUnderMaintenance">Set Location</a></li>
                    <li><a href="/pageUnderMaintenance">Table Viewer</a></li>
                    <li><a href="/pageUnderMaintenance">Config Maintenance</a></li>
                    <li><a href="/pageUnderMaintenance">Error Handler Report</a></li>
                    <li><a href="/pageUnderMaintenance">Audit Log</a></li>
                    <li><a href="/pageUnderMaintenance">Error Configuration</a></li>
                    <li><a href="/pageUnderMaintenance">Qlik Reporting</a></li>
                </div>
                <img src="https://png.pngtree.com/element_pic/00/16/12/1558521fcda917a.jpg" alt="" />
            </div>
        </div>
    </section>
    </>
  )
}

export default Launchpad;