import "./Logo.css";
import logo from '../../assets/images/4918050.jpg'
import React from "react";

export default function Logo(props) {
	return <aside className="logo">
		<img src={logo} alt="logo" />
	</aside>;
}
