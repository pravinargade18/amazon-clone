import ReactDOM from 'react-dom/client'
import "slick-carousel/slick/slick.css"; 

import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store/store.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store} >
    <App />
  </Provider>
  // </React.StrictMode>,
);
