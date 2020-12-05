import React, { Component } from 'react';

class Contact extends Component {

    state = {
        busy : false,
        sent : false,
        recieved : false
    }

    connectedHandler = (evt) => {
        const url = `/php/email.php`;
        this.setState({busy : true, recieved: false, sent: false,});
        evt.preventDefault();

        const conDom = document.querySelector('.connected');

        const success="Thanks for considering Coram Realty for your needs! Your message was sent successfully and we will reach out to you as soon as possible.";
        const error="Looks like some inputs weren't readable by our mail-bot. Please help our mail-bot by reviewing the highlighted fields and submitting again.";


        let data = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type : 'connect',
                fname : conDom.querySelector('.js-fname').value,
                lname : conDom.querySelector('.js-lname').value,
                email : conDom.querySelector('.js-email').value,
                phone : conDom.querySelector('.js-phone').value,
                help : conDom.querySelector('.js-help').value
            })
        }

        fetch(url, data)
            .then((responseJson) => {
                if (responseJson.status === 404) {
                    throw new Error('Error: Message Not sent.');
                }
                this.setState({sent : true, busy: false, recieved: true});
                document.querySelector('.connected__feedback').innerHTML = success;
            })
            .catch((error) => {
                this.setState({sent : false, busy: false, recieved: true});
                document.querySelector('.connected__feedback').innerHTML = error;
            });
    }

    render() {
        return (
            <div id="contact" className="connected">
                <div className="connected__container">
                    <div className="connected__header">
                        <div className="connected__title">
                            Get connected
                        </div>
                        <div className="connected__subTitle">
                            Contact us to schedule a private consultation and discuss your next real estate steps
                        </div>
                    </div>
                    <form onSubmit={this.connectedHandler}>
                        <fieldset className="connected__sectionFieldset u-basePaddingBottom">
                            <div className="connected__sectionHeader">
                                Tell us about your needs
                            </div>
                            <div className="connected__row">
                                <div className="connected__col">
                                    <input className="connected__inputdom js-fname" type="text" id="con-fname" name="con-fname" placeholder="First Name" />
                                </div>
                                <div className="connected__col">
                                    <input className="connected__inputdom js-lname" type="text" id="con-lname" name="con-lname" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="connected__row">
                                <div className="connected__col">
                                    <input className="connected__inputdom js-email" type="email" id="con-email" name="con-email" placeholder="Email address" />
                                </div>
                                <div className="connected__col">
                                    <input className="connected__inputdom js-phone" type="text" id="tel" name="con-phone" placeholder="PHONE NUMBER" />
                                </div>
                            </div>

                            <div className="connected__rowfull">
                                How can we help?<br />
                                <textarea className="connected__inputtext js-help" id="con-help" type="text" name="con-help"></textarea>
                            </div>
                            <div className="connected__disclaimer">* Your information will never be shared with any third party.</div>
                            <input className={`connected__submit ${this.state.busy ? 'connected__sending' : ''}`} type="submit" value={`${this.state.busy ? 'Sending...' : 'Contact Us'}`} disabled={this.state.recieved} />
                        </fieldset>
                    </form>
                </div>
                <div className="o-container">
                    <div className={`connected__feedback js-feedback ${this.state.recieved ? 'connected__reveal' : null}`}></div>
                </div>
                <style jsx>{`
                    @font-face {
                        font-family: "AzoSans";
                        src: url("/fonts/AzoSans-Medium.ttf");
                        src: url('/fonts/AzoSans-Medium.eot');
                        src: url('/fonts/AzoSans-Medium.eot?#iefix') format('embedded-opentype'),
                            url('/fonts/AzoSans-Medium.woff') format('woff'),
                            url('fonts/AzoSans-Medium.ttf') format('truetype'),
                            url('fonts/AzoSans-Medium.svg') format('svg');
                        font-style: normal;
                        font-weight: 400;
                        font-display: swap;
                    }
                    @font-face {
                        font-family: "AzoSans";
                        src: url("/fonts/AzoSans-Bold.ttf");
                        src: url('/fonts/AzoSans-Bold.eot');
                        src: url('/fonts/AzoSans-Bold.eot?#iefix') format('embedded-opentype'),
                            url('/fonts/AzoSans-Bold.woff') format('woff'),
                            url('fonts/AzoSans-Bold.ttf') format('truetype'),
                            url('fonts/AzoSans-Bold.svg') format('svg');
                        font-style: normal;
                        font-weight: 500;
                        font-display: swap;
                    }
                    .connected {
                        background-color: #fff;
                        padding-bottom: 4em;
                        font-size: 14px;
                        font-family: "AzoSans", serif;
                    }
                    .connected__row {
                        display: flex;
                    }
                    @media (max-width: 769px) {
                        .connected__row {
                            flex-direction: column;
                        }
                    }
                    .connected__rowfull {
                        text-align: left;
                        margin-bottom: 1.5em;
                    }
                    .connected__col {
                        flex: 1 0 30%;
                        margin-bottom: 1.5em;
                        text-align: left;
                    }
                    .connected__col:first-child {
                        margin-right: 2em;
                    }
                    .connected__col:first-child {
                        margin-right: 2em;
                    }
                    @media (max-width: 769px) {
                        .connected__col:first-child {
                            margin-right: 0em;
                        }
                    }
                    .connected__inputtext {
                        border: none;
                        width: 100%;
                        padding: 1em;
                        background-color: #eaeaea;
                        box-sizing: border-box;
                        text-transform: uppercase;
                        height: 10em;
                    }
                    .connected__inputdom {
                        border: none;
                        width: 100%;
                        padding: 1em;
                        background-color: #eaeaea;
                        box-sizing: border-box;
                        text-transform: uppercase;
                    }

                    .connected__header {
                        width: 100%;
                        padding: 5em 0em 2em;
                        flex-direction: column;
                    }
                    .connected__disclaimer {
                        text-align: center;
                    }
                    .connected__title {
                        color: #84d0d2;
                        font-weight: bold;
                        text-transform: uppercase;
                        text-align: center;
                        font-size: 1.25em;
                    }
                    .connected__subTitle {
                        font-weight: bold;
                        text-transform: uppercase;
                        text-align: center;
                        padding: .75em 2em;
                    }
                    .connected__subText {
                        text-align: center;
                    }
                    .connected__sectionFieldset {
                        border: 1px solid #84d0d2;
                        text-align: center;
                        position: relative;
                        padding: 2em;
                        margin: 0 0 2em;
                        text-transform: uppercase;
                    }
                    .connected__sectionHeader {
                        position: absolute;
                        color: #84d0d2;
                        background-color: #fff;
                        padding: 0 1em;
                        top: -0.5em;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    @media (max-width: 769px) {
                        .connected__sectionHeader {
                            width: 18em;
                        }
                    }
                    .connected__label {
                        text-transform: uppercase;
                        text-align: left;
                        margin-bottom: 1.5em;
                        width: 100%;
                        padding: 0 1em;
                    }
                    .connected__label:last-child {
                        margin-bottom: 0;
                    }
                    .connected__labelHalf {
                        text-transform: uppercase;
                        text-align: left;
                        margin-bottom: 1.5em;
                        width: 100%;
                        flex: 1 0 50%;
                    }
                    .connected__labelHalf:last-child {
                        margin-bottom: 0;
                    }
                    .connected__label--full {
                        display: flex;
                        justify-content: space-between;
                    }
                    .connected__label--thirds {
                        display: flex;
                        justify-content: space-between;
                    }
                    @media (max-width: 769px) {
                        .connected__sectionHeader {
                            flex-direction: column;
                        }
                    }
                    .connected__label--half {
                        display: flex;
                        justify-content: space-between;
                    }
                    @media (max-width: 769px) {
                        .connected__label--half {
                            flex-direction: column;
                        }
                    }
                    .connected__dropdownContainer {
                        position: relative;
                    }
                    .connected__dropdown {
                        width: 100%;
                        padding: 1em 4em 1em 2em;
                        border: 1px solid #eaeaea;
                        background-color: #eaeaea;
                        height: 3.5em;
                        appearance: none;
                        text-transform: uppercase;
                    }
                    .connected__triangle {
                        position: absolute;
                        pointer-events: none;
                        width: 0; 
                        height: 0; 
                        border-left: 7px solid transparent;
                        border-right: 7px solid transparent;
                        border-top: 7px solid #2f2f2f;
                        font-size: 1em;
                        line-height: 0;
                        right: 0em;
                        bottom: 0em;
                        transform: translate(-1.5em, -1.3em);
                        z-index: 999;
                    }
                    .connected__dropdownItem {
                        padding: 1em 0;
                    }
                    .connected__inputText {
                        width: 100%;
                        border: none;
                        background-color: #eaeaea;
                        height: 3.5em;
                        text-transform: uppercase;
                    }
                    .connected__inputTextArea {
                        width: 100%;
                        padding: 1em 4em 1em 2em;
                        border: none;
                        background-color: #eaeaea;
                        height: 10em;
                        text-transform: none;
                    }
                    .connected__container {
                        width: 900px;
                        margin: 0 auto;
                    }
                    @media (max-width: 899px) {
                        .connected__container {
                            width: 100%;
                        }
                    }
                    .connected__submit {
                        padding: 1.5em 5em;
                        position: absolute;
                        bottom: -2.5em;
                        left: 50%;
                        transform: translateX(-50%);
                        border: 1px solid #84d0d2;
                        color: #84d0d2;
                        background-color: #fff;
                        font-weight: bold;
                        text-transform: uppercase;
                    }
                    .connected__submit:hover:enabled { 
                        color: #f7f7f7;
                        background-color: #84d0d2;
                        cursor: pointer;
                    }
                    .connected__sending {
                        cursor: progress;
                    }
                    .connected__feedback {
                        display: none;
                        margin-top: 5em;
                        padding: 2em;
                        background-color: #b1d7f7;
                    }
                    .connected__reveal {
                        display: block;
                    }
                    select::-ms-expand { 
                        display: none;
                    }
                    @media screen and (min-width:0) {
                        select {
                            background:none;
                            padding: 5px;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default Contact;
