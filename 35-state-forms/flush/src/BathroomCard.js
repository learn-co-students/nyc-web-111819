import React from 'react'; // gets you babel
import CommentForm from './CommentForm';

class BathroomCard extends React.Component {

    state = {
        commentsOpen: false
    }


    toggleComments = () => {
        this.setState({ commentsOpen: !this.state.commentsOpen })
    }

    renderBathroomInfo = () => {
        const { reviews, name, id, type} = this.props;
        let rating = reviews.map(review => review.rating).reduce((a, b) => (a + b), 0) / reviews.length
        
        return (
            <div className="bathroom-info">
                <div>Location: {name}</div>
                <div>Requires Passcode</div>
                <div>Rating: {rating ? `${rating} / 5` : "No ratings yet"}</div>
                <button onClick={this.toggleComments}>{this.state.commentsOpen ? "Hide" : "Show"} Comments</button>
                {this.state.commentsOpen 
                    ? <div className="comment-parent">
                        {reviews.map(review => <div>{review.body}<span>{"⭐️".repeat(review.rating)}</span></div>)}
                    </div>
                    : null }
                <div>Type: {type}</div>
            </div>
        )
    }

    render() {
        return (
            <div className="bathroom-card">
                <img alt="possibly gross toilet" style={{height: '100px', width: '100px'}} src={this.props.image}/>
                {this.renderBathroomInfo()}
                <CommentForm />
            </div>
        )
    }
}

export default BathroomCard;
