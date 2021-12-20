import tv4 from 'tv4';
import stateSchema from 'middleware/stateSchema';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ dispatch, getState }) => next => action => {
    next(action);
    
    if(!tv4.validate(getState(), stateSchema)) {
        console.log('Warning invalid state schema')
    }
} 