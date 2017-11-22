import React, { Component } from 'react';
import Header from './header'
import Footer from './footer'
import FooterHeart from './footer-heart'
import HomePageBackground from './homepage'
import GoogleMap from './google_map'
import Projects from './projects'
import GridListExampleSingleLine from './stack-logos'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ProjectsHeader from './projects-header'
import {blueGrey500} from 'material-ui/styles/colors'
import Section from './section'
import Item from './item'

const style = {
  gridList: {
    backgroundColor: blueGrey500
  }

}

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
        <div id='app' className='app'>
          <Header  />
          <HomePageBackground />
          <GridListExampleSingleLine style={style.gridList}/>
          <ProjectsHeader />
          <Section >
            <Projects />
          </Section>
          <Section>
            <GoogleMap />
          </Section>
          <Footer />
          <FooterHeart />
        </div>
      </MuiThemeProvider>
    );
  }
}
