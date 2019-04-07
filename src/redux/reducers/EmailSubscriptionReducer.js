import {
    SEND_EMAIL_BEGIN,
    SEND_EMAIL_SUCCESS,
    SEND_EMAIL_FAILURE,
    ON_CHANGE_EMAIL,
    validateEmail
} from '../actions/EmailSubscriptionAction'
const initialState = {
    email: '',
    emailState: 'notValid',
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ON_CHANGE_EMAIL: {
            let { email } = payload;
            let emailState = validateEmail(email)?'ready':'notValid';

            return {
                email: email,
                emailState: emailState
            }
        }
        case SEND_EMAIL_BEGIN: {
            return {
                ...state,
                emailState: 'sending'
            }
        }
        case SEND_EMAIL_SUCCESS: {
            return {
                ...state,
                emailState: 'done'
            }
        }
        case SEND_EMAIL_FAILURE: {
            return {
                ...state,
                emailState: 'failure'
            }
        }
        default:
            return state
    }
}
