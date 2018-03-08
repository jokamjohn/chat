import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const Application = () => (
    <MuiThemeProvider>
      <Provider store={store}>
        <App/>
      </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(<Application/>, document.getElementById('root'));
registerServiceWorker();
