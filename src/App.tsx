import React from 'react';
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import './App.css'

function App() {
  return (
    <div className="App">
      <Button size="large" className="custom">按钮</Button>
      <Button buttonType="primary" size="small" autoFocus>按钮</Button>
      <header className="App-header">
        <Menu>
          <MenuItem>link1</MenuItem>
          <MenuItem>link2</MenuItem>
          <MenuItem>link3</MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
