import React from 'react';
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Input from './components/Input/input'
import AutoComplete from './components/AutoComplete/autoComplete'
import Progress from './components/Progress/progress'
import './App.css'

function App() {

  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items }) => {
        console.log(items)
        return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
      })
  }

  return (
    <div className="App">
      <AutoComplete fetchSuggestions={handleFetch} />
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
      <Input />
      <Progress percent={20} />
    </div>
  );
}

export default App;
