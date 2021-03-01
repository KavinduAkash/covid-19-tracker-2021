import React from 'react';
import './App.style.scss';
import { Row, Col } from 'reactstrap';
import TopCard from "./components/top-card/TopCard.component";
import TopCardSelect from "./components/top-card-select/topcardselect.component";

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
                    <Row>
                        {/*<Col sm={12} md={12} lg={8} xl={8}>*/}
                        {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea facere fugit itaque modi perspiciatis qui quo tenetur? Dolorum ex itaque nemo odio odit omnis, quasi, quod, reiciendis ullam vero voluptatibus.*/}
                        {/*</Col>*/}
                        {/*<Col sm={12} md={12} lg={4} xl={4}>*/}
                        {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aut corporis, dolorem fuga laudantium magni praesentium quam reiciendis rem repellendus sit tempore vel. Aliquam ducimus et nemo tenetur velit.*/}
                        {/*</Col>*/}
                    </Row>
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
