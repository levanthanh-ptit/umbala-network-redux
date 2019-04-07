import React, { Component } from 'react';
import './App.scss';
import SubscribeEmail from './components/SubscribeEmail/SubscribeEmail'
import Footer from './components/Footer/Footer'
import { Provider } from 'react-redux'
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <SubscribeEmail />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;