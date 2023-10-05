import { Button } from "react-bootstrap";
import { checkToken } from "../../utilities/users-service";
import debug from "debug";
import AddNote from "../../components/Notes/AddNote";
import NotesHistory from "../../components/Notes/NotesHistory";
import { useState } from "react";

const log = debug("mern:pages:NotesPage");

export default function NotesPage() {
	const [notes, setNotes] = useState(null);

	const createNote = (notes) => setNotes(notes);

	const handleCheckToken = async () => {
		const expDate = await checkToken();
		log(expDate);
	};
	return (
		<>
			{notes ? <></> : <h1>No Notes Yet!</h1>}
			<AddNote setNotes={createNote} />
			<NotesHistory />
			<Button onClick={handleCheckToken}>Verify Login</Button>
		</>
	);
}
