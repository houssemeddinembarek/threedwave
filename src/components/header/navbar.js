import React,{useEffect, useState} from 'react';
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [titleClasse, setTitleClasse] = useState("title");
  const [y, setY] = useState(0);


  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y < window.scrollY) {
      setTitleClasse('style');
    }else if (window.scrollY === 0){
      setTitleClasse('title');
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, []);

  return (
    <div>
      <header className="fixed-top main-header header-white transparent  with-side-panel-ico" id="waituk-main-header" onScroll={()=> {
          setTitleClasse('style');
          console.log("sflkgnnslkgnvsrkmnv");
          }}>
        <div id="nav-section" >
          <div className="bottom-header container-fluid mega-menus" id="mega-menus">
            <nav className="navbar navbar-toggleable-md no-border-radius no-margin mega-menu-multiple" id="navbar-inner-container">
              <form action="mega-menu-5.html" id="top-search" className="no-margin top-search">
                <div className="form-group no-margin">
                  <input className="form-control no-border" id="search_term" name="search_term" placeholder="Type & Press Enter" type="text" />
                </div>
              </form>
              <button type="button" className="navbar-toggler navbar-toggler-left" data-toggle="collapse" data-target="#mega-menu">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand mr-auto m-sm-auto" href="/">
                {/* <img src={img} className='styleImage' alt="3Dwave" width={170} height={50}/> */}
                <h3 className={titleClasse} id='title'>3D wave</h3>
              </a>
              <div className="collapse navbar-collapse flex-row-reverse" id="mega-menu">
                <ul className="nav navbar-nav">
                  <li className="dropdown" data-animation="fadeIn">
                    <a className="dropdown-toggle"  href="/" > Home </a>
                  </li>
                  {/* <li className="dropdown" data-animation="fadeIn">
                    <NavLink className="dropdown-toggle" data-toggle="dropdown" to="/actualities" data-title="Home"> Actualities </NavLink>
                  </li> */}
                  {/* <li className="dropdown" data-animation="fadeIn">
                    <NavLink className="dropdown-toggle" data-toggle="dropdown" to="/challenge" data-title="Home"> Challenges </NavLink>
                  </li> */}
                  <li className="dropdown dropdown-full-width-g" data-animation="fadeIn">
                    <NavLink className="dropdown-toggle" data-toggle="dropdown" to="/digitalapplication" data-title="Pages">Digital Applications </NavLink>
                  </li>
                  <li>
                    <NavLink to="/industrial"> Industrial </NavLink>
                  </li>
                  <li>
                    <NavLink to="/3dscaning"> 3d scanning </NavLink>
                  </li>
                  <li>
                    <NavLink to="/ourservices"> Our services </NavLink>
                  </li>
                  <li>
                    <NavLink to="/aboutus"> About Us </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact"> Contact </NavLink>
                  </li> 
                </ul>
              </div>
              {/* <div className="navbar-pos-search with-side-panel">
                <NavLink href="#" className="x-search x-search-trigger navbar-link"><i className="custom-icon-search"></i></NavLink>
                <NavLink href="#" className="x-search icon-close-round navbar-link"><i className="icon-line-cross"></i></NavLink>
              </div> */}
              {/* <div className="nav-trigger navbar-pos-search overlay-trigger">
                <NavLink href="#" className="navbar-link"><i className="icon-sort-1"></i></NavLink>
              </div> */}
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar