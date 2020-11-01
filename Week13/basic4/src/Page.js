import React , {Component } from "react";
import "./stylesheet/styleTransition.css";


class Page extends Component{
	render(){
		return(
			<section className="page">
				{this.props.children}
			</section>
		)
	}
}

export default Page;
