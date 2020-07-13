import React from 'react';
import './App.css';


class App extends React.Component{

constructor() {
  super();

  this.state= {
    email: "",
    password: "",
    FormComplete: false

  };
}

onEmailChange = (event) => {

  this.setState({

email: event.target.value

  })

}

onPasswordChange = (event) => {

  this.setState({
    Password: event.target.value
  })
}

handleFromSubmission = (e) => {
  e.preventDefault();
  this.setState({
    FormComplete : true
  })
  console.log("Form is Submitted")
}


render(){
  return(
    <div>
    <h1> form user input </h1>
    <form className = "Login-form">
      <label>Email</label>
      <input
      type = "email"
      placeholder="enter email"
      value={this.state.email}
      onChange={this.onEmailChange}

      />
      <label>Password</label>
      <input
      type = "password"
      placeholder="password"
      value={this.state.Password}
      onChange={this.onPasswordChange}
      />
      <button
      type="submit"
      onClick={this.handleFormSubmission}
      >
        submit
      </button>

      {this.state.FormComplete === true ? 
      (<h2>Please go to login</h2>) : (null)
} 

    </form>
    </div>
  )
}

}


export default App;
