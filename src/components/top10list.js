import React, {Component} from 'react'

class Top10List extends Component {
  static defaultProps = {
    title: 'City',
    list: [
      '서울', '부산', '대구'
    ]
  }

  render() {
    return (
      <div className="sidebar-box">
        <h6 className="heading-uppercase">
          Top 10 {this.props.title}
        </h6>
        <ul className="list-category">
          {this.props.list.map((e) => {
            return (<li key={e}><a  href={e[1]}>{e[0]}<span>{e[2]}</span></a></li>)
          })}
        </ul>
      </div>
    )
  }
}

export default Top10List
