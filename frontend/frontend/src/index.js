// // // import React from 'react';
// // // import ReactDOM from 'react-dom';
// // // import './index.css';
// // // import App from './App';
// // // import * as serviceWorker from './serviceWorker';

// // // ReactDOM.render(
// // //   <React.StrictMode>
// // //     <App />
// // //   </React.StrictMode>,
// // //   document.getElementById('root')
// // // );

// // // serviceWorker.unregister();
// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import App from './App';
// // import { Provider } from 'react-redux';
// // import { legacy_createStore } from 'redux';
// // import Reducer from './stag/confi/reducer'
// // import * as serviceWorker from './serviceWorker';

// // const store=legacy_createStore(Reducer)
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <Provider store={store}>
// //      <App />
// //   </Provider>
// // );
// // serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { Provider } from 'react-redux';
// import { legacy_createStore } from 'redux';
// import Reducer from './stag/confi/reducer';
// import * as serviceWorker from './serviceWorker';

// const store=legacy_createStore(Reducer)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//      <App />
//   </Provider>
// );
// serviceWorker.unregister();


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import Reducer from './stag/confi/reducer'
import 'bootstrap/dist/css/bootstrap.min.css';

const store=legacy_createStore(Reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <App/>
  </Provider>
);



