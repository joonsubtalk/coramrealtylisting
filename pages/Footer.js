import React, { useState } from 'react';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__flexbox">
                <div className="footer__left">
                    <h3 className="footer__header">CORAM REALTY AND INVESTMENT, INC.</h3>
                    <ul className="footer__infoList">
                        <li className="footer__infoItem">3800 Foothill Blvd #B, La Crescenta CA 91214</li>
                        <li className="footer__infoItem"><a className="c-footer_telephone" href="tel:+8183307770">818-330-7770</a></li>
                        <li className="footer__infoItem"><a className="c-footer_email" href="mailto:info@coramrealty.com">info@coramrealty.com</a></li>
                        <li className="footer__infoItem">CALBRE#2057052</li>
                    </ul>
                </div>
                <div className="footer__right">
                    <h3 className="footer__header">Connect With Us</h3>
                    <ul className="footer__social">
                        <li className="footer__item">
                            <a href="https://www.facebook.com/coramgroup/">
                                <img className="footer__icon" src={'/img/realty-icons-2.svg'} alt="facebook" />
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="https://www.instagram.com/coramgroup/">
                                <img className="footer__icon" src={'/img/realty-icons-1.svg'} alt="instagram" />
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="https://www.yelp.com/biz/coram-design-center-la-crescenta">
                                <img className="footer__icon" src={'/img/realty-icons-3.svg'} alt="yelp" />
                            </a>
                        </li>
                        <li className="footer__item">
                            <a className="" href="mailto:info@coramrealty.com" target="_top">
                                <img className="footer__icon" src={'/img/coramrealty-icons-01.svg'} alt="email" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__legal">
                <div className="footer__flexbox">
                    <div className="footer__legal-text">
                        <div className="footer__copyright">
                            &copy; 2020 - Coram Realty and Investment, Inc. All Rights Reserved.
                        </div>
                        <div className="footer__vision">
                            Build Your Vision. Mt 6:33
                        </div>
                    </div>
                </div>
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
                .footer {
                    background-color: #f7f7f7;
                    font-size: 14px;
                    font-family: "AzoSans", serif;
                }
                .footer__address {
                    line-height: 1.5em;
                    font-style: normal;
                }
                a, a:hover, a:active, a:visited {
                    color: #231f20 !important;
                    text-decoration: none;
                }

                .footer__header {
                    text-align: center;
                    color: #231f20 !important;
                }

                .footer__connect {
                    text-align: center;
                    flex: 0 0 50%;
                }
                .footer__flex {
                    display: flex;
                    flex-flow: wrap;
                }
                .footer__address-info {
                    flex: 0 0 50%;
                }
                @media (max-width: 769px) {
                    .footer__address-info {
                        text-align: center;
                    }
                }
                .footer__icon {
                    width: 50px;
                    height: 50px;
                }
                .footer__icon:hover {
                    cursor: pointer;
                }
                @media (min-width: 769px) and (max-width: 1279px ) {
                    .footer__icon {
                        width: 37.5px;
                        height: 37.5px;
                    }
                }
                .footer__legal {
                    background-color: #e5e5e5;
                    padding: 1em 0;
                }
                .footer__info {
                    background-color: #f7f7f7;
                    padding: 1em 0;
                }
                .footer__connection {
                    display: flex;
                    flex-flow: wrap;
                    line-height: 1.5em;
                }
                @media (max-width: 769px) {
                    .footer__connection {
                        flex-direction: column;
                    }
                }
                .footer__legal-text {
                    display: flex;
                    flex-flow: wrap;
                    line-height: 1.5em;
                    width: 100%;
                }
                @media (max-width: 769px) {
                    .footer__legal-text {
                        flex-direction: column;
                    }
                }
                .footer__social {
                    display: flex;
                    justify-content: space-between;
                    padding-left: 0;
                    margin: 0 0 2.5em;
                }
                @media (max-width: 769px) {
                    .footer__social {
                        justify-content: space-around;
                        margin-bottom: 3em;
                    }
                }
                .footer__copyright {
                    flex: 1 0 50%;
                    text-align: left;
                }
                @media (max-width: 769px) {
                    .footer__copyright {
                        text-align: center;
                    }
                }
                .footer__vision {
                    flex: 1 0 50%;
                    text-align: center;
                }
                .footer__top {
                    display: flex;
                    justify-content: space-between;
                    padding: 2em 0;
                    flex: 1;
                }
                @media (max-width: 769px) {
                    .footer__top  {
                        flex-direction: column;
                        padding: 2em 0;
                    }
                }
                .footer__social {
                    width: 50%;
                    margin: 0 auto;
                }
                .footer__item {
                    list-style: none;
                }
                .footer__infoList {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    padding: 0;
                }
                @media (max-width: 769px) {
                    .footer__infoList {
                        margin-top: 4em;
                        text-align: center;
                    }
                }
                .footer__infoItem {
                    list-style: none;
                    padding-right: 1em;  
                }
                @media (max-width: 769px) {
                    .footer__infoItem {
                        margin-right: 0;
                    }
                }
                .footer__left {
                    display: inline-block;
                    width: 50%;
                    margin: 1em 0;
                    border-right: 2px solid #e5e5e5;
                }
                @media (max-width: 769px) {
                    .footer__left {
                        width: 100%;
                        border-right: none;
                    }
                }
                .footer__right {
                    display: inline-block;
                    width: 50%;
                    margin: 1em 0;
                }
                @media (max-width: 769px) {
                    .footer__right {
                        width: 100%;
                    }
                }
                .footer__flexbox {
                    display: flex;
                    width: 1170px;
                    margin: 0 auto;
                    width: 100%;
                    flex-direction: column;
                }
                @media (min-width: 769px) and (max-width: 1279px ) {
                    .footer__flexbox {
                        width: 750px;
                        flex-direction: row;
                    }
                }
                @media (min-width: 1280px) {
                    .footer__flexbox {
                        width: 900px;
                        flex-direction: row;
                    }
                }
            `}</style>
        </footer>
    )
}

export default Footer
