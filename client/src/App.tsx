import { useState } from "react";
import axios from "axios";

function App() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	async function sendData() {
		const res = await axios.post("http://localhost:3000", { username, password });
		console.log(res.data);
	}

	return (
		<div>
			<input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
			<input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
			<button onClick={sendData}>submit</button>
		</div>
	);
}

export default App;
