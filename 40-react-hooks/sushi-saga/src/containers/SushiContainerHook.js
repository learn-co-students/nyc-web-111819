import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

//   state = {
//     startIndex: 0
//   }

//   updateIndex = () => {
//     let nextIndex = this.state.startIndex + 4 
//     if( nextIndex >= this.props.sushis.length ){
//       nextIndex = 0
//     }
//     this.setState({ startIndex: nextIndex })
//   }


function SushiContainer(props) {

    let startIndex = 0,
        displayedSushi = props.sushis.slice(startIndex, startIndex + 4),
        updateIndex = () => {};
   
    return (
      <Fragment>
        <div className="belt">
          {displayedSushi.map(sushi => <Sushi key={sushi.id} {...sushi} eatSushi={props.eatSushi}/>)}
          <MoreButton updateIndex={updateIndex}/>
        </div>
      </Fragment>
    )
}

export default SushiContainer