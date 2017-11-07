import React, { Component } from 'react'
// import NavBar from './navbar'
import AppBar from 'material-ui/AppBar';
import lightBlue800 from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Menu from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Divider from 'material-ui/Divider'

const Logged = () => (
  <IconMenu
    iconButtonElement={
      <IconButton><Menu color='white'/></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Home" />
    <MenuItem primaryText="Projects" href='#projects' />
    <Divider />
    <MenuItem primaryText="Contact / Resume" href='#contact'/>
  </IconMenu>
);

Logged.muiName = 'IconMenu';

export default class Header extends Component {
  render() {
    return (
      // <navbarInstance />
      <AppBar
        className='app-bar'
        showMenuIconButton={false}
        iconElementRight={<Logged />}
        iconElementLeft={null}
        title='Thomas Dunn'
        style={{backgroundColor : 424242}}
      />
    )
  }
}
