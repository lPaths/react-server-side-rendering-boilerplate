import React, { Component } from 'react'
import { enquireScreen } from 'enquire-js'

import './less/antMotionStyle.less'

import TopNavigation from './TopNavigation'
import Banner from './Banner'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import Footer from './Footer'

let isMobile
enquireScreen(b => {
  isMobile = b
})

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile
    }
  }

  componentDidMount () {
    enquireScreen(b => {
      this.setState({ isMobile: !!b })
    })
  }

  render () {
    const { isMobile } = this.state
    return (
      <div
        className='templates-wrapper'
        ref={d => { this.dom = d }}
      >
        <TopNavigation isMobile={isMobile} />
        <Banner />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <Footer />
      </div>
    )
  }
}

export default Landing
