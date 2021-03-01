import React from 'react';
import './topcard.style.scss';
import Covid19Icon1 from '../../assets/topcard-panel/covid19-1.png';
import Covid19Icon2 from '../../assets/topcard-panel/covid19-2.png';
import Covid19Icon3 from '../../assets/topcard-panel/covid19-3.png';

class TopCard extends React.Component{
    render() {
        return(
            <div className={'topcard'}>
                <div className={'topcard__image'}>
                    <img src={Covid19Icon1} alt=""/>
                </div>
                <div  className={'topcard__data'}>
                    <div className={'data_title'}>Total Corona Cases</div>
                    <div className={'data_value'}>25,792</div>
                </div>
            </div>
        )
    }
}

export default TopCard;