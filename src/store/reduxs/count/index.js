import {ADD,JIAN} from '../actions-type'
export default function countReducer(state=1,actions){
    switch(actions.type){
        case ADD:
            return state+actions.data
        case JIAN:
            return state-actions.data
            default:
			return state
    }
}