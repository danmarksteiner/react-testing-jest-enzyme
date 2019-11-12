import { actionTypes } from "../actions";

/**
 * @function successReducer
 * @param {array} state - Array of guessed words.
 * @param {object} actrion - action to be reduced.
 * @returns {bollean} - new success state.
 */
export default (state=false, action) => {
    switch(action.type) {
        case (actionTypes.CORRECT_GUESS):
            return true;
        default:
        return state;
    }
}