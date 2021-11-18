import React from "react";
import { SecondsCounter } from "./SecondsCounter";
//include images into your bundle

//create your first component
export function Home() {
	return <SecondsCounter seconds={3010} />;
}
