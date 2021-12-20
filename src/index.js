import React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from 'components/App';
import Root from 'Root';

ReactDom.render(
	<Root>
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<App />} />
			</Routes>
		</BrowserRouter>
	</Root>,
	document.querySelector('#root')
);
