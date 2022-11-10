import React from 'react'
import { connect } from 'react-redux';

const Counter = () => {
  return (
    <div>
        <span>counter:{this.props.counter}</span>
    <br/>
    <br/>
    <br/>
    <button onClick={this.props.increment}>Inc</button>
    <button onClick={this.props.decrement}>dec</button>
    <button onClick={this.props.reset}>res</button>
    </div>
  )
}


const mapStateToProps = (state) => {
    return  {
      counter: state.counter
    }
  }


  const mapDispatchtoProps = (dispatch) => {
    return {
      increment: () => dispatch ({type: 'INCREMENT' } ),
      decrement: () => dispatch ({type: 'DECREMENT' } ),
      reset: () => dispatch ({type: 'RESET' } ),
    }
  }

  
export default connect(mapStateToProps, mapDispatchtoProps)(Counter);