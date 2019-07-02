import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Delete extends React.Component {
constructor(){
  super();
  this.state={id:''};
  this.onClick = this.onClick.bind(this);
  this.delete = this.delete.bind(this);
}
componentDidMount() {
    this.setState({
      id: this.props.todo._id
    })
  }
onClick(e){
     this.delete(this);
    }
delete(e){
    axios.get('/delete?id='+e.state.id)
      .then(function(response) {
          
    });
}
render(){
  return (
    <button onClick={this.onClick}>
     <Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
                  <span></span>
         </Link>
         </button> 
  )
 }
}
export default Delete;