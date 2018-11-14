import React, { Component } from 'react'
import noimg from '../assets/img/no-image-available.png'

export default class MainBanner extends Component {
  state = {
    image: noimg
  }

  handleImageError = () => {
    this.setState({
      image: noimg
    })
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.post !== this.state.post) {
      this.setState({ image: nextProps.post.image })
    }
  }

  render() {
    return(
      <div className="post post-thumb">
        <a className= "hot-post-img" href={this.props.post.url}>
          <img style={{minHeight: 100}} src={this.state.image} onError={this.handleImageError}/>
        </a>
        <div className="post-body">
          <div className="post-category">
            <a href={this.props.post.category_url}>
              {this.props.post.category}
            </a>
          </div>
          <h3 className="post-title">
            <a href={this.props.post.url}>{this.props.post.title}</a>
          </h3>
          <ul className="post-meta">
            <li><a href={this.props.post.blogger_url}>{this.props.post.blogger}</a></li>
            <li>{this.props.post.date}</li>
          </ul>
        </div>
      </div>
    )
  }
}
