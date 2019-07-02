import React from 'react';
import logo from './logo.svg';
import './App.css';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'react',
      password: '',
      success: '',
      init: 1
    }
  }

  handleChange = (e) => {
    var {id, value} = e.target;
    this.setState({[id] : value})
  }

  onSubmit = (e) => {
    let success = this.state.userName == 'react' ? 1 : 0
    this.setState({success, init: 0})
    console.log('submitted')
  }

  backToHome = () => {
    let state = {
      userName: 'react',
      password: '',
      success: '',
      init: 1
    }
    this.setState(state)
  }
  render() {
    console.log('state', this.state)
    return (
      <div className="App">
        <div className="main flex-container">
          <h1>Welcome To Sapient</h1>
          {this.state.init ? 
          
            <div className="login">
              <label>User Name:</label>
              <input type="text" id="userName" value={this.state.userName} onChange={this.handleChange}></input><br />
              <label>Password:</label>
              <input type="password" id="password" value={this.state.password} onChange={this.handleChange}></input><br />
              <button type="submit" onClick={this.onSubmit}>Submit</button>
            </div>
           :
            <div>
              <label className={this.state.success ? 'success' : 'error'}>{this.state.success ? 'Login successfully' : 'credentials are mismatch'}</label>
              <button className='btn-submit' type="submit" onClick={this.backToHome}>Home</button>
            </div> 
          
          }
        </div>
      </div>
    )
  }
}

export default Welcome;
