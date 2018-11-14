import React, { Component } from 'react'

import Image from '../assets/img/post-13.jpg'

class Article extends Component {
  render() {
    return(
      <div className="post post-row">
        <a className="post-img" href="blog-post.html">
          <img src={Image} alt="" />
        </a>
        <div className="post-body">
          <h3 className="post-title">
            <a href="blog-post.html">
              Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.
            </a>
          </h3>
          <ul className="post-meta">
            <li><a href="author.html">John Doe</a></li>
            <li>20 April 2018</li>
          </ul>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
        </div>
      </div>
    )
  }
}

export default Article
