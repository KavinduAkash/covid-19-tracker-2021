import React from 'react';
import './topcardselect.style.scss';
import Globle from "../../assets/topcard-panel/globle.png";
import { Select } from 'semantic-ui-react'

class TopCardSelect extends React.Component {
    render() {
        let countryOptions = this.props.data;
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