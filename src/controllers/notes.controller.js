const Note = require("../models/note.model");
const NoteModel = require("../models/note.model");

// get all notes list
exports.getNotesList = (req, res)=>{
    //console.log("here all note list");
    NoteModel.getAllNotes((err, notes)=>{
        console.log("We are here");
        if(err)
        res.send(err);
        console.log("Notes", notes);
        res.send(notes);
    });
};

// get note by id
exports.getNotesByID = (req, res)=>{
    //console.log("We are here by id");
    NoteModel.getNoteByID(req.params.id, (err, note)=>{
        if(err)
        res.send(err);
        console.log("Note", note);
        res.send(note);
    })
};

// create new employee
exports.createNewNote = (req, res)=>{
    console.log("req data", req.body);
    const noteReqData = new NoteModel(req.body);
    //check null
    if(req.body.concrutor === Object && Object.keys(req.body).length === 0){
        res.sen(400).send({success: false, message: "Please fill all fields"});
    }else{
        NoteModel.createNote(noteReqData, (err, note)=>{
            if (err)
            res.send(err);
            res.json({status: true, message: 'Note created successfully', data: note.insertId});
        });
    }
}

// update note
exports.updateNote = (req, res)=>{
    const noteReqData = new NoteModel(req.body);
    //check null
    if(req.body.concrutor === Object && Object.keys(req.body).length === 0){
        res.sen(400).send({success: false, message: "Please fill all fields"});
    }else{
        NoteModel.updateNote(req.params.id, noteReqData, (err, note)=>{
            if (err)
            res.send(err);
            res.json({status: true, message: 'Note update successfully'});
        });
    }
}

// delete note
exports.deleteNote = (req, res)=>{
    NoteModel.deleteNote(req.params.id, (err, note)=>{
        if(err)
        res.send(err)
        res.json({success: true, message: "Note deleted successfully"});
    })
}