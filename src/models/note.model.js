var dbConn = require('../../config/db.config');

var Note = function(veriler){
    this.konu = veriler.konu;
    this.detay = veriler.detay;
    this.tamam = veriler.tamam;
    this.kategori = veriler.kategori;
};

// get all notes
Note.getAllNotes = (result) => {
    dbConn.query("SELECT * FROM veriler", (err, res)=>{
        if(err){
            console.log("Error while fetching notes", err);
            result(null, err);
        }else{
            console.log('Notes fetched successfully');
            result(null, res);
        }
    })
}

// get note by id
Note.getNoteByID = (id, result)=>{
    dbConn.query("SELECT * FROM veriler WHERE id=?", id, (err, res)=>{
        if(err){
            console.log("Error while fetching note by id", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
}

// create new note
Note.createNote = (noteReqData, result)=>{
    dbConn.query('INSERT INTO veriler SET ? ', noteReqData, (err, res)=>{
        if(err){
            console.log("Error while inserting data");
            result(null, err);
        }else{
            console.log("Note created successfully");
            result(null, res);
        }
    })
}

// update note
Note.updateNote = (id, noteReqData, result)=>{
    dbConn.query('UPDATE veriler SET konu=?, detay=?, tamam=?, kategori=? WHERE id=?', 
    [noteReqData.konu, noteReqData.detay, noteReqData.tamam, noteReqData.kategori,id], (err, res)=>{
        if (err) {
            console.log("Error while updating");
        }else{
            console.log("Note updated successfully");
            result(null, res);
        }
    });
}


// delete note
Note.deleteNote = (id, result)=>{
    dbConn.query("DELETE FROM veriler WHERE id = ?", [id], (err, res)=>{
        if(err){
            console.log("Error while deleted");
        }else{
            console.log("Note deleted successfully");
            result(null, res);
        }
    });
}

module.exports = Note;