import React from 'react'

class Grandchild extends React.Component {

  // constructor(){
  //   super()

  //   console.log('CONSTRUCT GRANDCHILD')
  // }

  // componentDidMount() {
  //   console.log('DIDMOUNT GRANDCHILD')
  // }

  // componentDidUpdate(){
  //   console.log('DIDUPDATE GRANDCHILD')
  // }

  componentWillUnmount(){
    console.log('UNMOUNTING GRANDCHILD')
  }

  render(){
    // console.log('RENDER GRANDCHILD')
    return (
      <div className="box">
        <p>Grandchild</p>
      </div>
    );
  }
}

export default Grandchild 


// UNMOUNTING GRANDCHILD
// UNMOUNTING CHILD
// UNMOUNTING PARENT


// UNMOUNTING PARENT
// UNMOUNTING CHILD
// UNMOUNTING GRANDCHILD


// UNMOUNTING CHILD
// UNMOUNTING PARENT
// UNMOUNTING GRANDCHILD


// CONSTRUCT PARENT
// CONSTRUCT CHILD
// CONSTRUCT GRANDCHILD

// CONSTRUCT PARENT
// RENDER PARENT
// CONSTRUCT CHILD
// RENDER CHILD
// CONSTRUCT GRANDCHILD
// RENDER GRANDCHILD

// CONSTRUCT PARENT
// RENDER PARENT
// CONSTRUCT CHILD
// RENDER CHILD
// CONSTRUCT GRANDCHILD
// RENDER GRANDCHILD
// DIDMOUNT GRANDCHILD
// DIDMOUNT CHILD
// DIDMOUNT PARENT


// RENDER PARENT
// RENDER CHILD
// RENDER GRANDCHILD
// DIDUPDATE GRANDCHILD
// DIDUPDATE CHILD
// DIDUPDATE PARENT

