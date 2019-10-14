import React, { Component } from 'react';
import Project from './project';
import { Link } from 'react-router-dom';

import './sidebar.css';

class Sidebar extends Component {

  state = {}

  render() {

    return (

      <div class="sidebar">


        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <a className="fa fa-line-chart" href="#about"> Dashboard</a>

        <div className="dropdown">

          < a href="/hujh" className="fa fa-pencil-square-o"> Projects  <i className="fa fa-caret-down"></i></ a>

          <div className="dropdown-content">

            <a className="dtext" href="/project">Create New Project</a>

            <a className="dtext" href="/projectlist">Project List</a>

          </div>

        </div>



        <div >

          <a className=" fa fa-wrench" href="/defect"> Defects</a>

        </div>

        <br></br>





        <div className="dropdown">

          <a href className="fa fa-users"> Users <i className="fa fa-caret-down"></i></a>

          <div className="dropdown-content">

            <a href="/sud">Profile</a>

            <a href="/cdcf">Privilages</a>

            <a href="/dff">Experience</a>

          </div>



        </div>





        <div className="dropdown">

          <a href="/gdfg" className="fa fa-gear"> Settings</a>

        </div>



      </div>



    );

  }

}



export default Sidebar;
