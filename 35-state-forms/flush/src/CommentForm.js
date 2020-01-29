import React from 'react'; // gets you babel

let initialState = {
    comment: "",
    stars: "1"
}

class CommentForm extends React.Component {
    state = initialState
    
    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    handleSubmit = (e) => {
        // how do we get it to the list of comments
        // how do we update average?!?
        e.preventDefault();

        fetch('http://localhost:3000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                body: this.state.comment,
                rating: parseInt(this.state.stars),
                bathroomId: this.props.bathroomId
            })
        })
            .then(res => res.json())
            .then(data => {
                this.setState(initialState)
                this.props.handleAddReview(data)
            })

        // BUTTTTTTT how do we get the comment and rating back to the bathroom card??!?!??!?!?!?

        //this.state ==> all our info!!!

        // mod3 ==> read the inputs and put them in an object 
        // post fetch request 
    }
    
    render(){ 
        // console.log('STATE ME', this.state)
        return (
            <form onSubmit={this.handleSubmit} className="new-comment-form">
                <input 
                    name="comment"
                    value={this.state.comment}
                    onChange={this.handleChange} 
                    placeholder="Add your thoughts here..."/>
                <label>
                    How many stars?
                    <select value={this.state.stars} name="stars" onChange={this.handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default CommentForm;

// handleCommentChange = (e) => {
//     console.log(e.target.name)
//     this.setState({ comment: e.target.value })
// }

// handleStarChange = (e) => {
//     console.log(e.target.name)
//     console.log(e.target.value)
//     this.setState({ stars: parseInt(e.target.value) })
// }


// mod 3 ==> mod 4 translation
// once you submit, in JS you'd do form.reset()
// to clear now we'll set state back to initial state 

// we're not gonna persist to backend yet
// buttttt when we submit, how do we get the comment into the comment list??? <=== we'll do this 


// onChange={event => this.handleCommentChange(event)}
// onChange={this.handleCommentChange}


// PARKING LOT ==> SELECTING ONE