import React from 'react'; // gets you babel
import CommentForm from './CommentForm';

class BathroomCard extends React.Component {

    state = {
        commentsOpen: false,
        count: 0
    }

    toggleComments = () => {
        // functional setState
        this.setState((prevState) => ({ commentsOpen: !prevState.commentsOpen }))
    }

    // toggleComments = () => {
    //     this.setState({ commentsOpen: !this.state.commentsOpen }, 
    //         () => console.log(this.state) // "then" callback to setState
    //     )
    // }

    // consoleState = () 

    increaseCount = (basketType) => {
        this.setState({ count: this.state.count + 1 }) 
        this.setState(prevState => ({ count: prevState.count + 1 })) 
        this.setState(prevState => ({ count: prevState.count + 1 })) 
        this.setState(prevState => ({ count: prevState.count + 1 })) 
    }

    renderBathroomInfo = () => {
        const { reviews, location, id, type} = this.props;
        let rating = reviews.map(review => review.rating).reduce((a, b) => (a + b), 0) / reviews.length
        
        return (
            <>
                <div className="bathroom-info" onClick={this.increaseCount}>
                    <div>Location: {location}</div>
                    <div>Requires Passcode</div>
                    <div>Rating: {rating ? `${rating} / 10` : "No ratings yet"}</div>
                    <button onClick={this.toggleComments}>{this.state.commentsOpen ? "Hide" : "Show"} Comments</button>
                    {this.state.commentsOpen 
                        ? <div className="comment-parent">
                            {reviews.map(review => <div>{review.body}<span>{"⭐️".repeat(review.rating)}</span></div>)}
                        </div>
                        : null }
                    <div>Type: {type}</div>
                </div>
            </>
        )
    }

    render() {
        console.log(this.state)
        return (
            <div className="bathroom-card">
                <img alt="possibly gross toilet" style={{height: '100px', width: '100px'}} src={this.props.image}/>
                {this.renderBathroomInfo()}
                <CommentForm bathroomId={this.props.id} handleAddReview={this.props.handleAddReview}/>
            </div>
        )
    }
}

export default BathroomCard;
