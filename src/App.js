import React from 'react';
import './App.style.scss';

class App extends React.Component{

  render() {
    return (
        <div className="app">
            <div className={'app__top'}>
                <div className={'header'}>
                    COVID 19 Live TRACKER <span className={'header-light'}>by kavinduakash.com</span>
                </div>
            </div>
        </div>
    )
  }
}

export default App;
