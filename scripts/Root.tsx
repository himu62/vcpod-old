import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const style = {
	minWidth:        '100vw',
	minHeight:       '100vh',
	backgroundColor: darkBaseTheme.palette.canvasColor,
};

class Root extends React.PureComponent {
	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
				<div className="root" style={style}></div>
			</MuiThemeProvider>
		);
	}
}

export default Root;
