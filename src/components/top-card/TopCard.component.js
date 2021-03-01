import React from 'react';
import './topcard.style.scss';
import Covid19Icon1 from '../../assets/topcard-panel/covid19-1.png';
import Covid19Icon2 from '../../assets/topcard-panel/covid19-2.png';
import Covid19Icon3 from '../../assets/topcard-panel/covid19-3.png';

class TopCard extends React.Component{
    render() {
        let index = this.props.index;
        let title = this.props.title;
        return(
            <div className={'topcard'}>
                <div className={'topcard__image'}>
                    {
                        index===1?<img src={Covid19Icon1} alt=""/>:index===2?<img src={Covid19Icon2} alt=""/>:index===3?<img src={Covid19Icon3} alt=""/>:null
                    }
                </div>
                <div  className={'topcard__data'}>
                    <div className={'data_title'}>{title}</div>
                    <div className={'data_value'}>25,792</div>
                    <div className={'data_desc'}>{0}{" "}Total</div>
                </div>
            </div>
        )
    }
}

export default TopCard;