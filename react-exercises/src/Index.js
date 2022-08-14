// Create a new index.js file within the src folder and render the App component using the ReactDOM.render method

import {createRoot} from 'react-dom/client';
import { App } from './App';
import './index.css';
import Root from './Root';

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<Root />);