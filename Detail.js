import React , { Component }from 'react';

class Detail extends Component{

  render(){
    console.log(this.props.location.state);
   // let result = this.props.location.state;
     let { login, id, score, url, avatar_url } = this.props.location.state;
    return(
      <div>
      ID:
       {
          id
       }
      
    </div>);
  }
}

export default Detail;