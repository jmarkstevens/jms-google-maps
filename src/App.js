import React  from 'react';
import ReactDom  from 'react-dom';
import {Provider} from 'react-redux';

import AppCtrl from './components/app.ctrl';
import AppStore from './store/App.Store';

class App extends React.Component {
  render() {
    return (
      <Provider store={AppStore}>
        <AppCtrl />
      </Provider>
    );
  }
}

export default App;
