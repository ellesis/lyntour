import React, { Component } from 'react'

import Image from '../assets/img/post-12.jpg'

class MainPost extends Component {
  render() {
    return(
      <div className="row main-post">
        <div className="col-md-2 main-post-img">
          <img src={Image} alt="" />
        </div>
        <div className="col-md-2 main-post-img">
          <img src={Image} alt="" />
        </div>
        <div className="col-md-2 main-post-img">
          <img src={Image} alt="" />
        </div>

        <div className="col-md-6">
          <div className="post-body">
            <h3 className="post-title"><a href="blog-post.html">Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.</a></h3>
            <ul className="post-meta">
              <li><a href="author.html">John Doe</a></li>
              <li>20 April 2018</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MainPost
