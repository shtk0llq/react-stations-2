import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Thread from "./components/Thread";

function App() {
	const baseUrl = "https://railway.bulletinboard.techtrain.dev";
	const [threads, setThreads] = useState([]);

	useEffect(() => {
		async function fetchThread() {
			try {
				const response = await fetch(`${baseUrl}/threads`);
				const data = await response.json();
				setThreads(data);
			} catch (error) {
				console.error("エラー:", error);
			}
		}

		fetchThread();
	}, []);

	return (
		<>
			<Header />

			<Thread threads={threads} />
		</>
	);
}

export default App;
