import axios from 'axios';


export const createNote = ( payload )=>{
    console.log('llegamos a actions', payload)
    return{
        type: 'CREARNOTA',
        payload: payload
    }
};

export const crearPrimerColumna = ()=>{
    return{
        type: 'CREARPRIMERCOLUMNA',
    }
};

