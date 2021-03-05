import React from 'react';
import './App.style.scss';
import { Row, Col } from 'reactstrap';
import TopCard from "./components/top-card/TopCard.component";
import TopCardSelect from "./components/top-card-select/topcardselect.component";
import {Input} from "semantic-ui-react";
import LiveCaseCountryCard from "./components/live-case-country-card/LiveCaseCountryCard.component";
import Linerchart from "./components/charts/Linerchart.component";
import MapComponent from "./components/map/Map.component";
import axios from "axios";

class App extends React.Component{

    state={
      countries: [],
      countries_details: [],
      searchable_text: "",

      //top-card
      tc_today_corona_cases: 0,
      tc_today_recovered: 0,
      tc_today_deaths: 0,
      tc_corona_cases: 0,
      tc_recovered: 0,
      tc_deaths: 0,

      last_30_days_deaths_details: null
    };

    componentDidMount() {
        this.getCountries();
        this.getCountriesDetails();
        this.getGlobalHistoryDetails();
    }

    getCountries = () => {
        axios.get('https://disease.sh/v3/covid-19/countries').then(res=>{
            console.log(res);
            if(res.status===200) {
                let data = res.data;
                let countries_list = [];
                if(data) {
                    let obj_st = {
                        key: -1,
                        value: "global",
                        text: "Global",
                    };
                    countries_list.push(obj_st);

                    data.map((result, i)=>{
                       let obj = {
                           key: i,
                           value: result.countryInfo.iso3,
                           text: result.country,
                       };
                       countries_list.push(obj);
                    });
                }
                this.setState({
                    countries: countries_list
                });
            }
        }).catch(err=>{
            console.log(err);
        });
    };
    getCountriesDetails = () => {
        axios.get('https://disease.sh/v3/covid-19/countries').then(res=>{
            if(res.status===200) {
                let data = res.data;
                let countries_list = [];
                if(data) {
                    data.map((result, i)=>{
                       countries_list.push(result);
                    });
                }

                this.setState({
                    countries_details: countries_list
                });
            }
        }).catch(err=>{
            console.log(err);
        });
    };

    callDateByCountryIso3 = (iso3) => {
        if(iso3 === "global") {
            axios.get(`https://disease.sh/v3/covid-19/all`).then(res => {
                if (res.status === 200) {
                    let data = res.data;
                    if (data) {
                        this.setState({
                            tc_today_corona_cases: data.todayCases,
                            tc_today_recovered: data.todayRecovered,
                            tc_today_deaths: data.todayDeaths,
                            tc_corona_cases: data.cases,
                            tc_recovered: data.recovered,
                            tc_deaths: data.deaths,
                        })
                    }
                }
            }).catch(err => {
                console.log(err);
            });
        } else {
            axios.get(`https://disease.sh/v3/covid-19/countries/${iso3}?strict=true`).then(res => {
                if (res.status === 200) {
                    let data = res.data;
                    if (data) {
                        this.setState({
                            tc_today_corona_cases: data.todayCases,
                            tc_today_recovered: data.todayRecovered,
                            tc_today_deaths: data.todayDeaths,
                            tc_corona_cases: data.cases,
                            tc_recovered: data.recovered,
                            tc_deaths: data.deaths,
                        })
                    }
                }
            }).catch(err => {
                console.log(err);
            });
        }
    };

    getGlobalHistoryDetails = () => {
        axios.get(`https://disease.sh/v3/covid-19/historical/all?lastdays=30`).then(res=>{
            if(res.status===200) {
                let data = res.data;
                if(data) {
                    this.setState({
                        last_30_days_deaths_details: data.deaths
                    });
                }
            }
        }).catch(err=>{
            console.log(err);
        });
    };

    filterLiveCasesByCountries = e => {
        let value = (e.target.value).toLowerCase();
        this.setState({
            searchable_text: value
        });
    };

    render() {
        let {countries, countries_details, tc_corona_cases, tc_deaths, tc_recovered, tc_today_corona_cases, tc_today_deaths, tc_today_recovered, last_30_days_deaths_details} = this.state;

        let cases = {
            today: tc_today_corona_cases,
            total: tc_corona_cases
        };
        let recovered = {
            today: tc_today_recovered,
            total: tc_recovered
        };
        let deaths = {
            today: tc_today_deaths,
            total: tc_deaths
        };

        let countries_search = [];
        if(this.state.searchable_text !== "" && this.state.searchable_text !== null && this.state.searchable_text !== undefined) {
            countries_search = [];
            if(countries_details.length !== 0) {
                countries_details.map((e,i)=>{
                    let pattern = new RegExp('^'+this.state.searchable_text);
                    let r = pattern.test((e.country).toLowerCase());
                    if(r) {
                        countries_search.push(e);
                    }
                });
            }
        } else {
            countries_search = countries_details
        }

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
                                    <TopCardSelect data={countries} action={this.callDateByCountryIso3}/>
                                </Col>
                                <Col sm={12} md={12} lg={3} xl={3}>
                                    <TopCard index={1} title={'Coronavirus Cases'} data={cases} />
                                </Col>
                                <Col sm={12} md={12} lg={3} xl={3}>
                                    <TopCard index={2} title={'Recovered'} data={recovered} />
                                </Col>
                                <Col sm={12} md={12} lg={3} xl={3}>
                                    <TopCard index={3} title={'Deaths'} data={deaths} />
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
                                                onChange={this.filterLiveCasesByCountries}
                                            />
                                        </div>
                                        <div className={'country-live-case-list'}>
                                            {
                                                countries_search.map((result, i) => <LiveCaseCountryCard key={i} data={result}/>)
                                            }
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className={'world-wide-new-cases'}>
                                <div className={'sub-title mg'}>
                                    Last 30 days death cases
                                </div>
                                <div className={'world-wide-new-cases-chart'}>
                                    <Linerchart data={last_30_days_deaths_details}/>
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
