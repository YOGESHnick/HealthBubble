import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    // <div className="topbarContainer">
    //   <div className="topbarLeft">
    //     <span className="logo">HealthBubble</span>
    //   </div>
    //   <div className="topbarCenter">
    //     <div className="searchbar">
    //       <Search className="searchIcon" />
    //       <input
    //         placeholder="Search for friend, post or video"
    //         className="searchInput"
    //       />
    //     </div>
    //   </div>
    //   <div className="topbarRight">
    //     <div className="topbarLinks">
    //       <span className="topbarLink">Homepage</span>
    //       <span className="topbarLink">Timeline</span>
    //     </div>
    //     <div className="topbarIcons">
    //       <div className="topbarIconItem">
    //         <Person />
    //         <span className="topbarIconBadge">1</span>
    //       </div>
    //       <div className="topbarIconItem">
    //         <Chat />
    //         <span className="topbarIconBadge">2</span>
    //       </div>
    //       <div className="topbarIconItem">
    //         <Notifications />
    //         <span className="topbarIconBadge">1</span>
    //       </div>
    //     </div>
    //     <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
    //   </div>
    // </div>

    <nav className="navbar navbar-expand-lg mnc">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">HealthBubble</a>
        <button id="navbar-toggler" className="navbar-toggler try" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse top-links" id="navbarNav">
          <ul className="navbar-nav me-auto ms-auto px-2" style={{ textAlign: "center" }}>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search anything" aria-label="Search"></input>
          </form>
          <ul className="navbar-nav me-auto ms-auto px-2" style={{ textAlign: "center" }}>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">
              <div className="topbarIconItem">
                <Person />
                <span className="topbarIconBadge">1</span>
              </div>
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">
              <div className="topbarIconItem">
                <Chat />
                <span className="topbarIconBadge">2</span>
              </div>
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">
              <div className="topbarIconItem">
                <Notifications />
                <span className="topbarIconBadge">1</span>
              </div>
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">
              <div className="topbarIconItem">
                <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
              </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  //   <nav id="navbar" class="navbar navbar-expand-lg mnc py-lg-4 sticky-top ">
  //   <div class="container-fluid f">

  //     <a class="navbar-brand try" href="index.html"> HealthBubble </a>
  //     <button id="navbar-toggler" className="navbar-toggler try" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: '#ffc800' }}>
  //     <span class="navbar-toggler-icon"></span>
  //     </button>
  //     <div class="collapse navbar-collapse top-links" id="navbarNav">
  //       <ul class="navbar-nav ms-auto px-2 ">
  //         <li class="nav-item px-2">
  //           <a class="nav-link " aria-current="page" href="#top">Home</a>
  //         </li>
  //         <li class="nav-item px-2">
  //           <a class="nav-link" href="#photography">Photography</a>
  //         </li>
  //         <li class="nav-item px-2">
  //           <a class="nav-link" href="#events">Events</a>
  //         </li>
  //         <li class="nav-item px-2">
  //           <a class="nav-link" href="#about">About</a>
  //         </li>
  //         <li class="nav-item px-2">
  //           <a class="nav-link" href="#contact">Contact</a>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>

  );
}