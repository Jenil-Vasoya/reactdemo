import React, { Component } from 'react'

class Form extends Component {
 
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //         username : '',
    //         password : ''
    //   }
    // }

    handleSubmitData = (event) => {
        event.preventDefault();
      
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
      
        alert(`Username: ${username}\nPassword: ${password}`);
      }
      
    
    
    
      componentDidMount()
      {
        console.log("cddef")
      }
  render() {
    console.log("a")
    return (
      <form onSubmit={this.handleSubmitData}>
        <div>
            <input type='text' id='username'></input>
            <input type='text' id="password"></input>
            <button type='submit'>Submit</button>
        </div>
      </form>
    )
  }
}

export default Form

    