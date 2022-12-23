import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">Right Stage Customization</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="d-flex flex-row mb-3 " id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <a class="nav-link active text-light" aria-current="page" href="#">Work OrderExecution</a>
        </li>
         <li class="nav-item">
           <a class="nav-link active text-light" href="#">Verification</a>
         </li>
         <li class="nav-item">
           <a class="nav-link active text-light" href="#">RSC Workflow Inbox</a>
         </li>
         <li class="nav-item">
         <a class="nav-link active text-light" href="#">Set Location</a>
         </li>
         <li class="nav-item">
           <a class="nav-link active text-light" href="#">  Username</a>
         </li>
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar;