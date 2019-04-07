export function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function sendEmail(email) {
    return dispatch => {
        dispatch(sendEmailBegin());
        return fetch('https://umbala.network/subscribe_umbala_network', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
            })
        }).then((response) => {
            if (response.ok) {
                dispatch(sendEmailSuccess())
            } else {
                throw new Error(response.statusText);
                
            }
        }).catch((error) => dispatch(sendEmailFailure(error))
        );
    }
}

export const SEND_EMAIL_BEGIN = 'SEND_EMAIL_BEGIN'
export const SEND_EMAIL_SUCCESS = 'SEND_EMAIL_SUCCESS'
export const SEND_EMAIL_FAILURE = 'SEND_EMAIL_FAILURE'
export const ON_CHANGE_EMAIL = 'ON_CHANGE_EMAIL'

export const sendEmailBegin = () => ({
  type: SEND_EMAIL_BEGIN
})
export const sendEmailSuccess = () => ({
  type: SEND_EMAIL_SUCCESS,
})
export const sendEmailFailure = error => ({
  type: SEND_EMAIL_FAILURE,
  payload : {error}
})
export const onChangeEmail = (email) => ({
  type: ON_CHANGE_EMAIL,
  payload: {email: email}
})

