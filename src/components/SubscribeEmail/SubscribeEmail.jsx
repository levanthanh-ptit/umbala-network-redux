import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SubscribeEmail.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onChangeEmail, sendEmail } from '../../redux/actions/EmailSubscriptionAction'

export class SubscribeEmail extends Component {

    static propTypes = {
        emailState: PropTypes.string,
        onChangeEmail: PropTypes.func,
        sendEmail: PropTypes.func,
        email: PropTypes.string,
    }
    

    onChangeEmail = (e) => {
        this.props.onChangeEmail(e.target.value)
    }
    sendEmail = () => {
        this.props.sendEmail();
    }

    render() {
        const emailState = this.props.emailState;
        return (
            <div className="subscribe-email" >
                <p className='subscribe-email__title'>
                    Get update from Umbala Network
                </p>
                <div id='subscription-form'
                    className='subscribe-email__email-input'
                >
                    <input id="subscription-email" className='subscribe-email__email-input__input'
                        name='email'
                        type='email'
                        placeholder="your@email.com"
                        onChange={(e) => this.onChangeEmail(e)}
                    />
                    <div className="subscribe-email__email-input__right-box">
                        {(emailState === 'notValid' || emailState === 'ready') && <div
                            className={'button' + (emailState === 'ready' ? '' : ' disable')}
                            onClick={this.sendEmail}
                            disabled={!this.props.emailState === 'notValid'}
                        >
                            <i className="input--arrow fas fa-arrow-right"></i>
                        </div>}
                        {( emailState === 'sending' 
                        || emailState === 'done'
                        || emailState === 'failure') && <div className={"circle" + (emailState === 'done' ? " load-complete" : "")}></div>}
                        {(emailState === 'done') && <div className="checkMarkBox">
                            <div className="checkMark" />
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        email: state.EmailSubscription.email,
        emailState: state.EmailSubscription.emailState,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        onChangeEmail,
        sendEmail,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeEmail)
