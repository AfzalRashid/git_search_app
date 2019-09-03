import React,{Component} from 'react';
export class Searchform extends Component
{
    render()
    {
        return(
<div>
    <form onSubmit={this.handleForm}>
        <input type = "search"  ref = "username" onChange ={this.handleChange}/>
        <button>Submit</button>

    </form>
</div>
        );
    }
handleForm = event =>{
    event.preventDefault();
    let username = this.refs.username.value
    console.log(username);
    this.props.fetchSearchp(username);
    
}
// handleChange = e =>{
    
//     {      this.setState(
//     {
//      searchtext : e.target.value  
//     }
// )
// }

// }
}
