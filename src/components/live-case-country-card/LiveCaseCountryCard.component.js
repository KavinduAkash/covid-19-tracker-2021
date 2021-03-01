import React from 'react';
import './liveCaseCountryCard.style.scss';

class LiveCaseCountryCard extends React.Component {
    render() {
        return(
            <div className={'live-case-country-card'}>
                <div className={'country-details'}>
                    <div>image</div>
                    <div>Sri Lanka</div>
                </div>
                <div className={'country-value'}>2256</div>
            </div>
        )
    }
}

export default LiveCaseCountryCard;