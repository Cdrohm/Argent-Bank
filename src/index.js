import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './components/Router';
import store from './utils/store'
import { Provider } from 'react-redux'
import "./style/index.css"
import { faCircleUser, faSignOut, faArrowLeft } from '@fortawesome/free-solid-svg-icons' //fontawesome?
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesome?

// Global FontAwesome icons library
library.add(faCircleUser, faSignOut, faArrowLeft)

// App router(createRoot) and Redux Store Provider
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
            <Router tab="home" />
    </Provider>
);
