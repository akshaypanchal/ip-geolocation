import React from 'react';


class SearchBox extends React.Component{
	constructor(){
		super();
	}

	render(){

		return(

				<input type="text" placeholder="Enter your IP Address here" id="seachbox"  />

			);
	}
}



export default SearchBox;