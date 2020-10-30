import React from "react";

import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";

export const MyCardComponent = props => {
	return (
		<Card>
			<Card.Img variant="top" src={props.imgUrl} />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>
					<p>{props.country}</p>
					<p>{props.city}</p>
				</Card.Text>
				<Button variant="primary" onClick={() => {}}>
					Más info
				</Button>
			</Card.Body>
		</Card>
	);
};

MyCardComponent.propTypes = {
	imgUrl: PropTypes.string,
	name: PropTypes.string,
	country: PropTypes.string,
	city: PropTypes.string,
	description: PropTypes.string
};
