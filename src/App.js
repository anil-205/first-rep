import React from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';

class ATM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      error: false,
      noOfNotes: []
    }
  }

  handleOnChange = (e) => {
    var {id, value} = e.target;
    this.setState({[id]: parseInt(value), error: false})
  }

  handleSubmit = (e) => {
    var amount = this.state.amount;
    let notes = [100, 50, 20, 10, 5, 2, 1];
    let noOfNotes = [];
    notes.map((item, index) => {
      if(amount > 0) {
        let value = parseInt(amount/item);
        amount = amount - value * item;
        noOfNotes.push(value)
      }
    })
    this.setState({noOfNotes})
  }

  render() {
    return (
      <div className="flex-container">
        <div className="welcome">
          <h1>Welcome To ATM</h1>
          Enter Money:
          <input type="number" className="form-control" id="amount" value={this.state.amount} onChange={this.handleOnChange} required></input>
          
          <br />
          <button type="submit" className="btn-submit" onClick={this.handleSubmit}>Submit</button>
        </div>
        <div className="details">
            <ul className="list">
              <li className="list-item">{this.state.noOfNotes[0]} 100 notes</li>
              <li className="list-item">{this.state.noOfNotes[1]} 50 notes</li>
              <li className="list-item">{this.state.noOfNotes[2]} 20 notes</li>
              <li className="list-item">{this.state.noOfNotes[3]} 10 notes</li>
              <li className="list-item">{this.state.noOfNotes[4]} 5 notes</li>
              <li className="list-item">{this.state.noOfNotes[5]} 2 notes</li>
              <li className="list-item">{this.state.noOfNotes[6]} 1 notes</li>
            </ul>
        </div>
      </div>
    )}
}

const mapStateToProps = (state) => {
  return {
    
  }
}

function mapDispatchToProps (dispatch) {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ATM);
