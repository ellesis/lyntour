import React, {Component} from 'react'

class TopBar extends Component {
  render(){
    return (
      <header id="header">
        <div id="nav">
          <div id="nav-top">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div id="nav-search">
                    <form>
                      <input className="input" name="search" placeholder="Enter your search..."/>
                      <button className="search-btn"><i className="fa fa-search"></i></button>
                    </form>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="nav-logo">
                    <a href="index.html" className="logo">
                      <h1>LynTour</h1>
                    </a>
                  </div>
                </div>
                <div className="col-md-5">
                  <ul className="nav-menu">
                    <li><a href="#">Trends</a></li>
                    <li><a href="#">Destinations</a></li>
                    <li><a href="#">Sign In</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default TopBar
