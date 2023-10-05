import * as notesApi from "./notes-api";

export const addNote = async (text) => {
	const data = await notesApi.addNote(text);
	return data;
};
