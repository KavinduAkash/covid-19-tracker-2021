import React from 'react';
import './liveCaseCountryCard.style.scss';

class LiveCaseCountryCard extends React.Component {
    render() {
        let data = this.props.data;
        console.log("Name: ", data.country);
        return(
            <div className={'live-case-country-card'}>
                <div className={'country-details'}>
                    <div>
                        <img src={data.countryInfo.flag} alt="" width={40}/>
                    </div>
                    <div>{data.country}</div>
                </div>
                <div className={'country-value'}>{data.cases}</div>
            </div>
        )
    }
}

export default LiveCaseCountryCard;