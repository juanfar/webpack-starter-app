import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './index.scss';
import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading';
import 'bootstrap';

library.add(faSpinner);
dom.watch();

const heading = new Heading();
const hwb = new HelloWorldButton();
hwb.render();
heading.render('hello-world');
