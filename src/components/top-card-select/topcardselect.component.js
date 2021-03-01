import React from 'react';
import './topcardselect.style.scss';
import Globle from "../../assets/topcard-panel/globle.png";
import { Select } from 'semantic-ui-react'

const countryOptions = [
    { key: 'af', value: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', text: 'Australia' },
    { key: 'at', value: 'at', text: 'Austria' },
    { key: 'az', value: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', text: 'Benin' },
];

class TopCardSelect extends React.Component {
    render() {
        return(
            <div className={'topcardselect'}>
                <div className={'topcardselect__image'}>
                    <img src={Globle} alt=""/>
                </div>
                <div  className={'topcardselect__data'}>
                    <div className={'data_title'}>Location</div>
                    <div className={'data_select'}>
                        <Select placeholder='Select a location' options={countryOptions} />
                    </div>
                    <div className={'data_desc'}>Please, select your location</div>
                </div>
            </div>
        )
    }
}

export default TopCardSelect;