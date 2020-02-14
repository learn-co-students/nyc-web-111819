import sushis from './db';
const API = "http://localhost:3000/sushis"



const initialState = {
    sushis: [],
    eatenSushis: [],
    budget: 105,
    startIndex: 0
}

const EAT_SUSHI = 'EAT_SUSHI'
const FETCH_SUSHIS = 'FETCH_SUSHIS'
const NEXT_PAGE = 'NEXT_PAGE'

const nextPageHelper = (prevState) => {
    let nextIndex = prevState.startIndex + 4 
    if( nextIndex >= prevState.sushis.length ){
        nextIndex = 0
    }
    return nextIndex;
}

const fetchActionCreatorOLD = () => {
    return { type: FETCH_SUSHIS }
}

const fetchActionCreator = () => {
    return (dispatch) => {
        fetch(API)
        .then(res => res.json())
        .then(data => dispatch({ type: FETCH_SUSHIS, payload: data }))
    }
}


const reducer = (prevState=initialState, action) => {
    switch(action.type){
        case NEXT_PAGE:
            return {...prevState, startIndex: nextPageHelper(prevState)}
        case FETCH_SUSHIS:
            return {...prevState, sushis: payload}
        case EAT_SUSHI:
            console.log(action.payload)
            const { id, price, eaten } = action.payload;

            if(price <= prevState.budget && !eaten){  
                let newSushis = prevState.sushis.map(sushi => {  
                    if(sushi.id === id){  
                    sushi.eaten = true  
                    }
                    return sushi  
                })
                return {...prevState, 
                    sushis: newSushis,
                    eatenSushis: [...prevState.eatenSushis, id],
                    budget: prevState.budget - price
                }
            } else {
                return {...prevState}
            }
        default:
            return {...prevState}
    }
}

export {reducer, NEXT_PAGE, FETCH_SUSHIS, EAT_SUSHI};