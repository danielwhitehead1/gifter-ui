import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import { BrowserRouter as Router } from 'react-router-dom';
import config from './config';
import './index.css';
import 'react-notifications/lib/notifications.css';
import App from './Views/App/App';
import * as serviceWorker from './serviceWorker';

Amplify.configure({
	Auth: {
		mandatorySignIn: true,
		region: config.cognito.REGION,
		userPoolId: config.cognito.USER_POOL_ID,
		identityPoolId: config.cognito.IDENTITY_POOL_ID,
		userPoolWebClientId: config.cognito.APP_CLIENT_ID
	},
	API: {
		endpoints: [
			{
				name: 'prod-gifter-api',
				endpoint: config.apiGateway.URL,
				region: config.apiGateway.REGION
			}
		]
	}
});

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));

serviceWorker.unregister();
