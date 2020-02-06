import React from 'react'; // gets you babel
import CommentForm from './CommentForm';

class BathroomCard extends React.Component {

    renderBathroomInfo = () => {
        const { reviews, location, id, type} = this.props;
        let rating = reviews.map(review => review.rating).reduce((a, b) => (a + b), 0) / reviews.length
        
        return (
            <>
                <div className="page-info">
                    <div><strong>Location:</strong> {location}</div>
                    <div><strong>Rating:</strong> {rating ? `${rating} / 10` : "No ratings yet"}</div>
                    <div><strong>Type:</strong> {type}</div>
                    <hr style={{marginTop: '50px'}}/>
                    <div className="comment-parent">
                        <h3>Comments</h3>
                        {reviews.map((review, ind) => <div key={ind}>{review.body}<span>{"⭐️".repeat(review.rating)}</span></div>)}
                    </div>
                    <hr style={{marginTop: '50px'}}/>
                    <CommentForm bathroomId={this.props.id} handleAddReview={this.props.handleAddReview}/>
                </div>
            </>
        )
    }

    render() {
        return (
            <div className="bathroom-page">
                <span alt="back-btn" className="back-btn">⏪</span>
                <img alt="possibly gross toilet" src={this.props.image}/>
                {this.renderBathroomInfo()}
                
            </div>
        )
    }
}

export default BathroomCard;
