import React from 'react'
import Grandchild from './Grandchild'

class Child extends React.Component {

  // constructor(){
  //   super()

  //   console.log('CONSTRUCT CHILD')
  // }

  // componentDidMount() {
  //   console.log('DIDMOUNT CHILD')
  // }

//   componentDidUpdate(){
//     console.log('DIDUPDATE CHILD')
// }

  componentWillUnmount(){
    console.log('UNMOUNTING CHILD')
  }

  render(){
    // console.log('RENDER CHILD')

    return (
      <div className="box">
        <p>Child</p>
        <Grandchild name="grandchild"/>
      </div>
    );
  }
}

export default Child 