import React, { useEffect, useState } from 'react';
import '../styles/Stats.css';

const max = [1254, 45, 40];
const increments = [25, 1, 1];
const speed = 20;
function Stats() {	
	const [valueOne, setValue] = useState(0);
	const [valueTwo, setValueTwo] = useState(0);
	const [valueThree, setValueThree] = useState(0);

	const counter = () => {
		setTimeout(() => {
			if (valueOne + increments[0] < max[0])
				setValue(valueOne + increments[0]);
			if (valueTwo < max[1])
				setValueTwo(valueTwo + increments[1]);
			if (valueThree  < max[2])
				setValueThree(valueThree + increments[2]);
		}, speed);
	};

	useEffect(() => { counter() }, [valueOne, valueTwo, valueThree]);

	return (
	<div class="stats">
		<div class="item">
			<div class="numb"> + <span> {valueOne} </span></div>
			<div class="txtContent"> COMPLETED<br/>PROJECTS </div>
		</div>
		<div class="item">
			<div class="numb"> + <span> {valueTwo} </span></div>
			<div class="txtContent"> PROFESSIONAL<br/>EMPLOYEES </div>
		</div>
		<div class="item">
			<div class="numb"> + <span> {valueThree} </span></div>
			<div class="txtContent"> BUSINES<br/>EMPLOYEES </div>
		</div>
	</div>
	)
}
export default Stats;