import React, {Component} from 'react'

class Footer extends Component {
  render(){
    return (

      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="footer-bottom row">

              <div className="col-md-6 col-md-push-6">
                <ul className="footer-nav">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="#">Trends</a></li>
                  <li><a href="#">Destinations</a></li>
                </ul>
              </div>

              <div className="col-md-6 col-md-pull-6">
                <div className="footer-copyright">
                  <a href="index.html" target="_blank">LynTour</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
