import React from 'react';
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
// import './App.css'

function App() {
  return (
    <div className="App">
      <Button size="large" className="custom">按钮</Button>
      <Button buttonType="primary" size="small" autoFocus>按钮</Button>
      <header className="App-header">
        <Menu>
          <MenuItem>link1</MenuItem>
          <SubMenu title="title">
            <MenuItem>link2-1</MenuItem>
            <MenuItem>link2-2</MenuItem>
          </SubMenu>
          <MenuItem>link3</MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
