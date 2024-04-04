

const initialState = {
   nota: []
}

function rootReducer(state = initialState, action ){
    switch ( action.type ){

        case 'CREARNOTA':
            return {
                ...state,
                nota: [...state.nota, action.payload]
            };

        default:
            return state;
    
    }
    
}

export default rootReducer;




