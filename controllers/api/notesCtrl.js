const Note = require("../../models/Note");

const create = async (req, res) => {
	try {
		const newNote = await Note.create({
			text: req.body.text,
			user: req.user._id,
		});

		res.status(201).json(newNote);
	} catch (error) {
		res.status(500).json({ error });
	}
};

module.exports = {
	create,
};
