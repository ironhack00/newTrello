

const initialState = {
   nota: [],
   column: []
}

function rootReducer(state = initialState, action ){
    switch ( action.type ){

        case 'CREARNOTA':
            return {
                ...state,
                nota: [...state.nota, action.payload]
            };

        case 'CREARPRIMERCOLUMNA':
        return {
            ...state,
            column: [...state.column, {}]
        };

        default:
            return state;
    
    }
    
}

export default rootReducer;




