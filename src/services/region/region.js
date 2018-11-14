import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import TopBar from '../../components/topbar'
import Footer from '../../components/footer'
import Top10List from '../../components/top10list'
import ImageBanner from '../../components/image_banner'
import MainPost from '../../components/main_post'
import TagCloud from '../../components/tag_cloud'
import Article from '../../components/article'

class _Region extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    //ranks of countries with axios
    axios.get('/api/ranks.json?query=country')
      .then((response) => {
        //alert(JSON.stringify(response.data))
        this.props.update_toplist('1','country', response.data)
      })

    //ranks of city
    axios.get('/api/ranks.json?query=city')
      .then((response) => {
        //alert(JSON.stringify(response.data))
        this.props.update_toplist('2','city', response.data)
      })
  }

  render() {
    return(
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <TopBar/>
        <ImageBanner/>

        <div className="section">
          <div className="container">

            <MainPost/>

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
                <br/>
                <Top10List
                  title={this.props.second_toplist.title}
                  list={this.props.second_toplist.list}
                />
              </div>
              <div className="col-md-8">
                <TagCloud/>
                <Article />

                <div className="section-row loadmore text-center">
                  <a href="#" className="primary-button">Load More</a>
                </div>

              </div>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    )
  }
}

//-----------------------------
const mapStoreToProps = (store) => {
  //debugger
  return {
    first_toplist:store.region_reducer.toplists[1],
    second_toplist:store.region_reducer.toplists[2]
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
  }
})
const Region = connect(mapStoreToProps, mapActionToProps)(_Region)
export default Region
