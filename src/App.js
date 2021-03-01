import React from 'react';
import './App.style.scss';
import { Row, Col } from 'reactstrap';

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
                <div className={'content'}>
                    <Row>
                        <Col sm={12} md={12} lg={8} xl={8}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea facere fugit itaque modi perspiciatis qui quo tenetur? Dolorum ex itaque nemo odio odit omnis, quasi, quod, reiciendis ullam vero voluptatibus.
                        </Col>
                        <Col sm={12} md={12} lg={4} xl={4}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aut corporis, dolorem fuga laudantium magni praesentium quam reiciendis rem repellendus sit tempore vel. Aliquam ducimus et nemo tenetur velit.
                        </Col>
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
