import * as React from 'react';
import Snackbar from 'material-ui/Snackbar';

class SnackbarContainer extends React.PureComponent {
	render() {
		return (
			<Snackbar open={true} message={"hoge"} />
		);
	}
}

export default SnackbarContainer;
