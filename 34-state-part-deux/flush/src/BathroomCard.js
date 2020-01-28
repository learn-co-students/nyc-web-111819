import React from 'react'; // gets you babel

// function BathroomCard(props) 
// reference props as props.location.name
// functional components cool for presentation components
// if you need state (tuesday) or lifecycle (friday) you HAVE TO USE CLASS COMPONENT

class BathroomCard extends React.Component {
    // ES5 version
    // constructor(){
    //     super();

    //     this.state = {
    //         commentsOpen: false
    //     }

    //     this.calculateAverage = this.calculateAverage.bind(this)
    // }

    state = {
        commentsOpen: false
    }

    // calculateAverage = () => {
    //     // because this is an arrow and bound, THISSS is the instance 
    // }

    toggleComments = () => {
        //this.state.commentsOpen = !this.state.commentsOpen // NO NO NO NO NO MUTATION
        this.setState({ commentsOpen: !this.state.commentsOpen },
            () => {
                console.log('INSIDE CALLBACK', this.state)
            }) // setState triggers re-render

        // and is asynchronous 

        // console.log('toggling comments', this.state.commentsOpen)
    }

    /**
     * onClick={this.toggleComments} // just pass the reference when 
     * 
     * how toggleComments is defined 
     * toggleComments = (event) => { someBehavior! }   OR    toggleComments = () => { someBehavior! }
     * 
     * 
     */

    //  exploreEvent = (event) => {
    //     event.persist()
    //     console.log(event)
    //  }



    render() { // dynamic location name and rating #
        console.log('STATE', this.state)
        return (
            <div className="bathroom-card">
                <img alt="possibly gross toilet" style={{height: '100px', width: '100px'}}src="https://images-na.ssl-images-amazon.com/images/I/61b3Njw7WXL._AC_SX522_.jpg"/>
                <div>Location: {this.props.location.name}</div>
                <div>Requires Passcode</div>
                <div>Rating: {this.props.location.rating} / 5</div>
                <button onClick={this.toggleComments}>{this.state.commentsOpen ? "Hide" : "Show"} Comments</button>
                {this.state.commentsOpen 
                    ? <div className="comment-parent">
                        <h1>Comments</h1>
                        <div className="comment-container">
                            <p> Reaaaal Dirty </p>
                            <p> Never any paper towels </p>
                            <p> I always manage to get in without a passcode. </p>
                        </div>
                    </div>
                    : null }
                <div>Type: Gender Neutral</div>
            </div>
        )
    }
}

export default BathroomCard;
// export { BathroomCard, someOtherThingINeedToExport };  ===> named export 