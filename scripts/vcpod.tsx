import * as React from 'react';
import {render} from 'react-dom';

import Root from './Root';

const dom = document.querySelector('#app');
if (dom) {
	render(<Root />, dom);
}
