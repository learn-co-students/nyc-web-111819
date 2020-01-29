import React from 'react'; // gets you babel

class BathroomCard extends React.Component {

    state = {
        commentsOpen: false
    }


    toggleComments = () => {
        this.setState({ commentsOpen: !this.state.commentsOpen })
    }

    render() {
        return (
            <div className="bathroom-card">
                <img alt="possibly gross toilet" style={{height: '100px', width: '100px'}} src={this.props.image}/>
                <div className="bathroom-info">
                    <div>Location: {this.props.name}</div>
                    <div>Requires Passcode</div>
                    <div>Rating: {this.props.rating} / 5</div>
                    <button onClick={this.toggleComments}>{this.state.commentsOpen ? "Hide" : "Show"} Comments</button>
                    {this.state.commentsOpen 
                        ? <div className="comment-parent">
                            some comments
                        </div>
                        : null }
                    <div>Type: {this.props.type}</div>
                </div>
            </div>
        )
    }
}

export default BathroomCard;
