import React from 'react'
import Parent from './Parent'

class LifeCycleApp extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show })
  }

  render(){
    return (
      <div>
        <button onClick={this.toggleShow}>SHOW/HIDE</button>
        {this.state.show && <Parent name="parent"/>}

      </div>
    )
  }
}

export default LifeCycleApp; 