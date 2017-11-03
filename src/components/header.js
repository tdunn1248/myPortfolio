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
    <MenuItem primaryText="Contact" href='#contact'/>
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
        title="TD"
        style={{backgroundColor : 424242}}
      />
    )
  }
}
