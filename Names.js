import React , { Component }from 'react';
import {   BrowserRouter as Router,  Switch,  Route,Link } from "react-router-dom";


class Names extends Component{
  constructor(props){
    super(props);
    this.state={
      item:{},
      isVisible:false
    }
  }

  loadDetails(item){
    console.log("load");
    this.setState({item});
    console.log(item.login);
   // <Route path='/detail' render={(props) => <Detail item={this.state.item}/>}/>


  }

render(){
  return(
    <div> 
    {
      this.props.items.map((item,index) => {
        return(<div key={index}>
        {item.login}        
        <img src={item.avatar_url} onClick={()=>this.loadDetails(item)}/> 
          <Link
          to={{
            pathname:'/detail',
            state:{
              id:item.id,
              name:item.login
            }
          }
          }
          >
           {item.login}
          </Link>
        </div>)
    }
    )}
    </div>
    
  );
}
}

export default Names;

