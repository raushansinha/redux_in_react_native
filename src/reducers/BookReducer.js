import { ADD_BOOK } from './../actions/types';
import { ListView } from 'react-native';

const initialState = [{
    id: 0,
    title: ''
}];

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_BOOK:
            return [...state, action.payload];
        default:
            return state;
    }
};