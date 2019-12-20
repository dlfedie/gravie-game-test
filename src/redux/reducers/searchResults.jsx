import { combineReducers } from 'redux';


const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCH_RESULTS':
            return action.payload;
        default:
            return state;
    }
};

// below was just dummy data for pre-populating the reducer. 
// {
// name: 'Metroid Prime', deck: 'Take control of Samus Aran in her first 3D adventure as she battles the Space Pirates on Tallon IV while uncovering the mysterious disappearance of its inhabitants.', image: {
//     small_url: 'https://www.giantbomb.com/api/image/scale_small/2550128-primeclean.jpg'
// }, platforms: [] }

export default combineReducers({
    searchReducer,
});
