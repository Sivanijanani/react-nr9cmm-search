import React, { Component } from 'react';
import { render } from 'react-dom';
import Names from './Names';
import Detail from './Detail';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      name :'',
      total_count : 0
    };
  }

  searchNames(){
    const URL=`https://api.github.com/search/users?q=`;
    fetch(`${URL}${this.state.name}`,{method:"GET"})
    .then(response=>response.json())
    .then(json=>{
      let {items,total_count}=json;
      this.setState({items});
      console.log(this.state.items,"Your search returned "+total_count);
    })
  }

  render() {
    return (
      <div>
      <h2>Candidate Search page</h2>
      <input type="text" onChange={event => this.setState({name:event.target.value})}></input>
      <input type="button" onClick={()=>this.searchNames()} value='Search'></input>
        <Names  items={this.state.items} />       
      </div>
    );
  }
}

render(<BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/detail" component={Detail} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));
