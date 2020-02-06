import React from 'react'; // gets you babel

class BathroomCard extends React.Component {

    renderBathroomInfo = () => {
        const { reviews, location, id, type} = this.props;
        let rating = reviews.map(review => review.rating).reduce((a, b) => (a + b), 0) / reviews.length
        
        return (
            <>
                <div className="bathroom-info" onClick={this.increaseCount}>
                    <div><strong>Location:</strong> {location}</div>
                    <div><strong>Rating:</strong> {rating ? `${rating} / 10` : "No ratings yet"}</div>
                    <div><strong>Type:</strong> {type}</div>
                </div>
            </>
        )
    }

    render() {
        return (
            <div className="bathroom-card" onClick={() => this.props.selectBathroom(this.props.id)}>
                <img alt="possibly gross toilet" style={{height: '100px', width: '100px'}} src={this.props.image}/>
                {this.renderBathroomInfo()}
            </div>
        )
    }
}

export default BathroomCard;
