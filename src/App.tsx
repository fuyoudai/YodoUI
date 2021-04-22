import React from 'react';
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Input from './components/Input/input'
import AutoComplete from './components/AutoComplete/autoComplete'
import Progress from './components/Progress/progress'
import Upload from './components/Upload/upload'
import Icon from './components/Icon/icon'
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
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        name="fileName"
        multiple
        drag
      >
        <Icon icon="upload" size="5x" theme="secondary" />
        <br/>
        <p>拖动上传</p>
      </Upload>
    </div>
  );
}

export default App;
