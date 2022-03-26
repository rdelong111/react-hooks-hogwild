import React, {useState} from "react";
import Nav from "./Nav";
import NewHog from "./NewHog";
import Hogs from "./Hogs";
import hogs from "../porkers_data";

function App() {
	const [allHogs, changeHogs] = useState(hogs);

	function handleHogSubmit(newHog) {
		changeHogs([...allHogs, newHog]);
	}

	return (
		<div className="App">
			<Nav />
			<NewHog onHogSubmit={handleHogSubmit} />
			<br />
			<Hogs hogs={allHogs} />
		</div>
	);
}

export default App;
