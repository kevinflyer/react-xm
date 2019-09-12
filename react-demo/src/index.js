import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import {createStore} from 'redux';
import rootReducer from './project/redux/reducers/index';
import {Provider} from 'react-redux';
import Routes from './project/routes';
import * as serviceWorker from './serviceWorker';

//第一步 创建store
const store = createStore(rootReducer);
ReactDOM.render(<Provider store = {store}><Routes />
    </Provider>, document.getElementById('root'));
//Provider是提供器，让store对象以参数属性传递到每一个组件

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
