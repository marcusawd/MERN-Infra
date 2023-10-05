import sendRequest from "./send-request";

const BASE_URL = "/api/notes";

export const addNote = (text) => {
	return sendRequest(BASE_URL, "POST", text);
};
