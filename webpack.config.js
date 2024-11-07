const path = require('path');

module.exports = {
	resolve: {
		alias: {
			react: path.resolve(__dirname, 'node_modules/react'),
			'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
			'custom-modal-react-component': path.resolve(__dirname, '../custom-modal-react-component/dist')
		}
	}	  
};