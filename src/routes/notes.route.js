const express = require('express');
const router = express.Router();

const NotesController = require('../controllers/notes.controller');

// get all notes 
router.get('/', NotesController.getNotesList);

// get note by id
router.get('/:id', NotesController.getNotesByID);

// create new note
router.post('/', NotesController.createNewNote);

// update note
router.put('/:id', NotesController.updateNote);

// delete note
router.delete("/:id", NotesController.deleteNote);

module.exports = router;