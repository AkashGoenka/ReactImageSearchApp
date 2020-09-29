import React from 'react';

class ImageCard extends React.Component{
	constructor(props){
		super(props);
		this.state = {spans:0};
		this.imageRef = React.createRef();
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height/10);
		this.setState({spans});
	}

	componentDidMount(){
		this.imageRef.current.addEventListener('load',this.setSpans);
	}

	render(){
		const {alt_description, urls } = this.props.image;
		return (
			<div style={{gridRowEnd:`span ${this.state.spans}`}}><img src={urls.regular} alt={alt_description} ref={this.imageRef }/></div>
		);
	}
}

export default ImageCard;