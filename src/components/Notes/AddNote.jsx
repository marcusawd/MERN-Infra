import { Button, Form } from "react-bootstrap";
import debug from "debug";
import { addNote } from "../../utilities/notes-service";

const log = debug("mern:Notes:AddNote");

export default function AddNote({ setNotes }) {
	const handleSubmit = async (e) => {
		e.preventDefault();

		const noteText = e.target.elements.noteText.value;
		log(noteText);
		const notes = await addNote({ text: noteText });
		log(notes);
	};

	return (
		<Form className="mb-3" onSubmit={handleSubmit}>
			<Form.Label>Fill in a new Note</Form.Label>
			<Form.Control as="textarea" rows={3} name="noteText" />
			<Button variant="primary" type="submit">
				Add Note
			</Button>
		</Form>
	);
}
