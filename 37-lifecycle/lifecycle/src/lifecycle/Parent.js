import React from 'react'
import Child from './Child'

class Parent extends React.Component {

    state = {
        clicked: true,
        color: 'black'
    }
    
    // constructor(){
    //     super()
        
    //     console.log('CONSTRUCT PARENT')
    // }

    componentDidMount() {
        // console.log('DIDMOUNT PARENT')
        /** fetches (flushes) ==> will set state 
         * any kind of timer 
         * subscriptions  ==> a la slack channel listening for new messages
         */
    }


    componentWillUnmount(){
        console.log('UNMOUNTING PARENT')
        /**
         * save the props... ==> auto save
         * stop anything we started in didMount ie timers, subscriptions, etc.
         */
    }

    componentDidUpdate(prevProps, prevState){
        // console.log('DIDUPDATE PARENT')
        if(this.state.color === 'black') {
            this.setState({ color: 'red' })
        } 

        /**
         * slack example
         * ==> if my this.props.channelId !== prevProps.channelId
         * unsubscribe to previous room, subscribe to new room, all that jazz
         */

    }

    toggleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }


    render(){
        // console.log('RENDER PARENT')
        return (
            <div className="box" style={{color: this.state.color}}>
                <button onClick={this.toggleClick}>Click</button>
                <p>Parent</p>
                <Child name="child"/>
            </div>
        );

    }
}


export default Parent;