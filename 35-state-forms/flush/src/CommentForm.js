import React from 'react'; // gets you babel

class CommentForm extends React.Component {
    render(){ 
        return (
            <form className="new-comment-form">
                <input placeholder="Add your thoughts here..."/>
                <label>
                    How many stars?
                    <select>
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
                <button>Submit</button>
            </form>
        )
    }
}

export default CommentForm;