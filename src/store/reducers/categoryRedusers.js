const defaulState =[];

const LOAD_CATEGORY = 'LOAD_CATEGORY';

export const loadCategoryAction = categories => ({ type: LOAD_CATEGORY, payload: categories});

export const categoryReduser = ( state = defaulState, action) =>{

    if(action.type === LOAD_CATEGORY){
        return action.payload
    }


    return state 
}