import { combineReducers} from 'redux';

export const details = (state = {data:[], show:false}, action) => {
    switch (action.type) {
      case 'FETCH_DATA':
        return {
         data: action.details,
         show: true,
        }
      case 'CLEAR_DATA':
        return {};
      default:
        return state;
    }
  };
  
const reducers = combineReducers({ details });
export default reducers;
