import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { FeaturedProjects, AllProjects } from './components/Projects' 
import './scss/_styles.scss';
import './scss/nav.scss';
import './scss/home.scss';
import './scss/about.scss';
import './scss/contact.scss';
import './scss/projects.scss';

ReactDOM.render(<App />, document.getElementById('root'));
