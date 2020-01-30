import React from 'react'; 
// import ImageName from './hog-imgs/' ===> getting images from src folder

const imgHelper = (name) => {
    return '/hog-imgs/' + name.toLowerCase().split(' ').join('_') + '.jpg'
}

class HogCard extends React.Component{
    state = {
        viewDetails: false
    }

    handleClick = () => {
        this.setState({ viewDetails: !this.state.viewDetails})
    }

    render(){
        return (
            <div className="pigTile" onClick={this.handleClick}>
                <h3>{this.props.name}</h3>
                <img alt="piggy pig pig" src={imgHelper(this.props.name)}/>
                {this.state.viewDetails 
                    ? <div className="hog-details">
                        <div>Weight: {this.props.weight}</div>
                        <div>Specialty: {this.props.specialty}</div>
                        <div>{this.props.greased ? 'Greased' : 'Not Greased'}</div>
                        <div>Highest Honor: {this.props['highest medal achieved']}</div>
                      </div> 
                    : null}
            </div>
        )
    }

}

export default HogCard;