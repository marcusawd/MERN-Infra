import debug from "debug";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import NotesPage from "../NotesPage/NotesPage";

const log = debug("mern:src:App");
localStorage.debug = "mern:*";

log("Start app");

export default function App() {
	const [user, setUser] = useState(null);

	const updateUser = (user) => setUser(user);

	return (
		<main className="App">
			{user ? (
				<>
					<NavBar user={user} setUser={updateUser} />
					<Routes>
						<Route path="/" element={<NotesPage />} />
					</Routes>
				</>
			) : (
				<AuthPage setUser={updateUser} />
			)}
		</main>
	);
}
