import React from 'react';
import './navbar.css';
import { appConfig } from '../../config';

export default () => {
    return (
        <React.Fragment>
            <nav className="navbar fixed-top navbar-expand-sm navbar-dark navbar-component-top navbar-style">
                <button className="navbar-brand btn btn-unstyled navbar-btn-style">{appConfig.Title}<span className="secondary-title"> - {appConfig.SubTitle}</span></button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button type="button" className="btn btn-unstyled navbar-btn-style"
                                    data-toggle="modal" data-target="#infoModal">
                                About <span className="fa fa-info-circle"></span></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-unstyled navbar-btn-style"
                                    data-toggle="modal" data-target="#themeModal">Map Themes
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
}
