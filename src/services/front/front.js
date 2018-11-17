import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import TopBar from '../../components/topbar'
import Footer from '../../components/footer'
import Top10List from '../../components/top10list'
import MainBanner from '../../components/main_banner'
import DesPost from '../../components/des_post'

class _Front extends Component {
  constructor(props){
    super(props)
    this.state = {
      url:'https://lyntour.com'
    }
  }

  componentDidMount(){
    //ranks of countries with axios
    axios.get(this.state.url + '/api/ranks.json?depth=2')
      .then((response)=>{
        //console.log(response)
        this.props.update_toplist('1','country', response.data)
      })
      .catch((error)=>{
        console.log(error)
      })

    //ranks of city
    axios.get(this.state.url + '/api/ranks.json?depth=3')
      .then((response)=>{        
        this.props.update_toplist('2','city', response.data)
      })
      .catch((error)=>{
        console.log(error)
      })

    //ranks of attractions
    axios.get(this.state.url + '/api/ranks.json?depth=4')
      .then((response)=>{        
        this.props.update_toplist('3','attraction', response.data)
      })
      .catch((error)=>{
        console.log(error)
      })


    axios.get(this.state.url + '/api/posts.json')
      .then((response) => {
        //alert(JSON.stringify(response.data))
        this.props.update_posts(response.data)
      })

    axios.get(this.state.url + '/api/items.json?limit=4')
      .then((response) => {
        //alert(JSON.stringify(response.data))
        //this.props.update_posts(response.data)
      })
  }

  render(){
    return (
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">

        <TopBar/>

        <div className="section">
          <div className="container">
            <div id="hot-post" className="row hot-post">

              <div className="col-md-8 hot-post-left">
                <MainBanner
                  heightSize='full'
                  post={this.props.first_post}
                />
              </div>

              <div className="col-md-4 hot-post-right">
                <MainBanner
                  heightSize='half'
                  post={this.props.second_post}
                />
                <MainBanner
                  heightSize='half'
                  post={this.props.third_post}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <DesPost
                  post = {this.props.topdes1}
                />
              </div>
              <div className="col-md-3">
                <DesPost
                  post = {this.props.topdes2}
                />
              </div>
              <div className="col-md-3">
                <DesPost
                  post = {this.props.topdes3}
                />
              </div>
              <div className="col-md-3">
                <DesPost
                  post = {this.props.topdes4}
                />
              </div>

            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <Top10List
                  title={this.props.first_toplist.title}
                  list={this.props.first_toplist.list}
                />
              </div>
              <div className="col-md-4">
                <Top10List
                  title={this.props.second_toplist.title}
                  list={this.props.second_toplist.list}
                />
              </div>
              <div className="col-md-4">
                <Top10List
                  title={this.props.third_toplist.title}
                  list={this.props.third_toplist.list}
                />
              </div>
            </div>
          </div>
        </div>

        <Footer/>

      </div>
    )
  }
}

const make_three_articles = (posts) => {
  const keys = Object.keys(posts)

  return {
    a1: posts[keys[0]],
    a2: posts[keys[1]],
    a3: posts[keys[2]]
  }
}

//-----------------------------

const mapStoreToProps = (store) => {
  const {a1, a2, a3} = make_three_articles(store.front_reducer.posts)

  return {
    first_post: a1,
    second_post: a2,
    third_post: a3,
    topdes1:store.front_reducer.topdes[1],
    topdes2:store.front_reducer.topdes[2],
    topdes3:store.front_reducer.topdes[3],
    topdes4:store.front_reducer.topdes[4],
    first_toplist:store.front_reducer.toplists[1],
    second_toplist:store.front_reducer.toplists[2],
    third_toplist:store.front_reducer.toplists[3]
  }
}

const mapActionToProps = (dispatch) => ({
  update_toplist(id, query, data) {
    dispatch ({
      type: 'UPDATE_TOPLIST',
      payload: {
        id:id,
        title: query,
        data: data
      }
    })
  },
  update_posts(data) {
    dispatch ({
      type: 'UPDATE_POSTS',
      payload:data
    })
  },
  update_top_destinations(data) {
    dispatch ({
      type: 'UPDATE_TOP_DEST'
    })
  }
})

const Front = connect(mapStoreToProps, mapActionToProps)(_Front)
export default Front
