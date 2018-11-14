import React, { Component } from 'react'

class DesPost extends Component {
  render() {
    return(
      <div>
        <div className="section-title">
          <h2 className="title">{this.props.post.title}</h2>
        </div>
        <div className="post">
          <a className="post-img" href="blog-post.html">
            <img src={this.props.post.img} alt=""/>
          </a>
          <div className="post-body">
            <div className="post-category">
              <a href="category.html">{this.props.post.category}</a>
            </div>
            <h3 className="post-title">
              <a href="blog-post.html">
                {this.props.post.title}
              </a>
            </h3>
            <ul className="post-meta">
              <li><a href="author.html">{this.props.post.author}</a></li>
              <li>{this.props.post.date}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DesPost
