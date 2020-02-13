let initialState = {
    likes: 0,
    text: 'sup homies',
    darkMode: false,
    thangs: ['b', 'a', 'n', 'a', 'n', 'a', 's']
}

let reducer = (prevState=initialState, action) => {
    switch(action.type){
        case 'LIKE':
         return {...prevState, likes: prevState.likes + 1 }
        case 'DISLIKE':
          return {...prevState, likes: prevState.likes - 1 }
        case 'TOGGLE':
          return {...prevState, darkMode: !prevState.darkMode }
        case 'CHANGE_TEXT':
          return {...prevState, text: action.payload }
        case 'ADD_TEXT':
          return {
            ...prevState, 
            text: '',
            thangs: [prevState.text, ...prevState.thangs]
        }
        default:
            return {...prevState}
    }
}

export default reducer;