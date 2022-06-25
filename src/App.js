import React, {useState} from 'react';
import './App.css';

function App () {
  const date = new Date();
	const [seconds, setSeconds] = useState(date.getSeconds());
	const [minutes, setMinutes] = useState(date.getMinutes());
	const [hours, setHours] = useState(date.getHours());
	const [day, setDay] = useState(date.getDate());
	const [month, setMonth] = useState(date.getMonth() + 1);
	const [year, setYear] = useState(date.getFullYear());

	// Updates the time state
	const updateClock = () => {
		const now = new Date();
		if (now.getSeconds().toString().length === 1) {
			setSeconds('0' + now.getSeconds());
		} else {
			setSeconds(now.getSeconds());
		}
		if (now.getMinutes().toString().length === 1) {
			setMinutes('0' + now.getMinutes());
		} else {
			setMinutes(now.getMinutes());
		}
		if (now.getHours().toString().length === 1) {
			setHours('0' + now.getHours());
		} else {
			setHours(now.getHours());
		}
		if (now.getDate().toString().length === 1) {
			setDay('0' + now.getDate());
		} else{
			setDay(now.getDate());
		} if (now.getMonth().toString().length === 1) {
			setMonth('0' + now.getMonth() + 1);
		} else {
			setMonth(now.getMonth());
		}
		setYear(now.getFullYear());
	}

	// Runs the updateClock() function every second
	const setClock = () => {
		updateClock();
		setTimeout(() => {
			setClock();
		}, 1000);
	}

	// Runs the setClock() function anytime the window loads and reloads thepage once
	window.onload = function () {
		setClock();
    if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
    }
	}

	return (
		<div className='App'>
			<div className='title'>
				<h3>QWERTY THOUGHTS</h3>
			</div>
			<div className='digital'>
				<div className='date'>
					<h2>Day - Month - Year</h2>
					<div>
						<span>{day}</span>
						<span>-</span>
						<span>{month}</span>
						<span>-</span>
						<span>{year}</span>
					</div>
				</div>
				<div className='time'>
					<h2>Hrs - Min - Secs</h2>
					<div>
						<span>{hours}</span>
						<span>-</span>
						<span>{minutes}</span>
						<span>-</span>
						<span>{seconds}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;