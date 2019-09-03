import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Searchform} from './components/Searchform';
import Profiles from './components/Profile';
class App extends Component {
  constructor()
  {
super();
this.state={ 
  searchtext: 'FaizenRashid',
  data: ''
}
}

fetchSearch = username =>{
  let url= `https://api.github.com/search/users?q=${username}`;
  console.log(url);
  fetch(url)
  .then(res=>{res.json()
  .then(data=>{
    console.log(data)
    this.setState({
      data:data
    })
  })}
  ).catch(error=>console.log('OOPs'+error));
  }


componentDidMount()
{
  this.fetchSearch(this.state.searchtext);
}

  render(){
    return(
    <div className="App">
<Header/>
<Searchform fetchSearchp={this.fetchSearch}/>
<Profiles data={this.state.data}/>
     </div>
  )
  ;
}
}
export default App;
