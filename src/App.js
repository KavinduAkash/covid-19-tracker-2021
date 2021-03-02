import React from 'react';
import './App.style.scss';
import { Row, Col } from 'reactstrap';
import TopCard from "./components/top-card/TopCard.component";
import TopCardSelect from "./components/top-card-select/topcardselect.component";
import {Input} from "semantic-ui-react";
import LiveCaseCountryCard from "./components/live-case-country-card/LiveCaseCountryCard.component";
import Linerchart from "./components/charts/Linerchart.component";
import MapComponent from "./components/map/Map.component";

class App extends React.Component{

  render() {
    return (
        <div className="app">
            <div className={'app__top'}>
                <div className={'header'}>
                    COVID 19 Live TRACKER <span className={'header-light'}>by kavinduakash.com</span>
                </div>
            </div>
            <div className={'app__content'}>
                <div id={'appcontent'} className={'content'}>
                    <div className={'card-panel'}>
                        <Row>
                            <Col sm={12} md={12} lg={3} xl={3}>
                                <TopCardSelect/>
                            </Col>
                            <Col sm={12} md={12} lg={3} xl={3}>
                                <TopCard index={1} title={'Coronavirus Cases'}/>
                            </Col>
                            <Col sm={12} md={12} lg={3} xl={3}>
                                <TopCard index={2} title={'Recovered'}/>
                            </Col>
                            <Col sm={12} md={12} lg={3} xl={3}>
                                <TopCard index={3} title={'Deaths'}/>
                            </Col>
                        </Row>
                    </div>
                    <div className={'data-view-panel'}>
                        <Row>
                            <Col sm={12} md={12} lg={8} xl={8}>
                                <div className={'world-case-map'}>
                                    <div className={'sub-title'}>
                                        Live cases by country
                                    </div>
                                    <MapComponent/>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <div className={'country-live-cases'}>
                                    <div className={'sub-title'}>
                                        Live cases by country
                                    </div>
                                    <div>
                                        <Input
                                            icon={{ name: 'search', circular: true, link: true }}
                                            placeholder='Search...'
                                        />
                                    </div>
                                    <div className={'country-live-case-list'}>
                                        <LiveCaseCountryCard/>
                                        <LiveCaseCountryCard/>
                                        <LiveCaseCountryCard/>
                                        <LiveCaseCountryCard/>
                                        <LiveCaseCountryCard/>
                                        <LiveCaseCountryCard/>
                                        <LiveCaseCountryCard/>
                                        <LiveCaseCountryCard/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className={'world-wide-new-cases'}>
                            <div className={'sub-title mg'}>
                                Worldwide new cases
                            </div>
                            <div className={'world-wide-new-cases-chart'}>
                                <Linerchart/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'app__footer'}>
                <div className={'footer'}>
                    COVID 19 Live TRACKER <span className={'footer-light'}>by kavinduakash.com</span>
                </div>
            </div>
        </div>
    )
  }
}

export default App;
