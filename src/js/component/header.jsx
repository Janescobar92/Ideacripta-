import React, { Fragment } from "react";

import Card from "react-bootstrap/Card";

import Jumbotron from "react-bootstrap/Jumbotron";

import Button from "react-bootstrap/Button";

export const MyJumbotron = () => {
	return (
		<Fragment>
			<div className="bg-text">
				<h1 className="headerTitle">Ideacripta</h1>
			</div>
			<Jumbotron className="jumbotron d-flex justify-content-center align-items-center" />
		</Fragment>
	);
};
