//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.jsx";
import { SecondsCounter } from "./component/SecondsCounter";

//render your react application
const start = Date.now();

setInterval(() => {
	const millis = Date.now() - start;

	let count = Math.floor(millis / 1000);

	ReactDOM.render(
		<SecondsCounter seconds={count} />,
		document.querySelector("#app")
	);
}, 1000);
