import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import { connect } from 'react-redux';
import { NEXT_PAGE } from '../reducer';

function SushiContainer(props) {
  let displayedSushi = props.sushis.slice(props.startIndex, props.startIndex + 4) 

  return (
    <Fragment>
      <div className="belt">
        {displayedSushi.map(sushi => <Sushi key={sushi.id} {...sushi} eatSushi={props.eatSushi}/>)}
        <MoreButton updateIndex={props.nextPage}/>
      </div>
    </Fragment>
  )
}

const msp = (state) => ({ startIndex: state.startIndex})

const mdp = (dispatch) => ({ nextPage: () => dispatch({ type: NEXT_PAGE })})

export default connect(msp, mdp)(SushiContainer);