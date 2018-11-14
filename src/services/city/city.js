import React, { Component } from 'react'
import TopBar from '../../components/topbar'
import Footer from '../../components/footer'

class City extends Component {
  render() {
    return(
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <TopBar/>


        <Footer/>
      </div>
    )
  }
}

export default City
