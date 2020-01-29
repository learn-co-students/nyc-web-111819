import React from 'react'
import Child from './Child'

class Parent extends React.Component {

    state = {
        clicked: true,
        color: 'black'
    }


    render(){
        // console.log('RENDERING PARENT')
        return (
            <div className="box" style={{color: this.state.color}}>
                <button onClick={() => {}}>Click</button>
                <p>Parent</p>
                <Child name="child"/>
            </div>
        );

    }
}


export default Parent;