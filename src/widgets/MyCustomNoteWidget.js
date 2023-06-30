import React, { useState } from 'react';

const NoteWidget = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');

    const handleNoteChange = (e) => {
        setNewNote(e.target.value);
    };

    const handleNoteSubmit = (e) => {
        e.preventDefault();
        if (newNote.trim() !== '') {
            setNotes([...notes, newNote]);
            setNewNote('');
        }
    };

    const handleNoteDelete = (index) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(index, 1);
        setNotes(updatedNotes);
    };

    return (
        <div>
            <h2>Note Widget</h2>
            <form onSubmit={handleNoteSubmit}>
                <input type="text" value={newNote} onChange={handleNoteChange} placeholder="Enter a new note" />
                <button type="submit">Add Note</button>
            </form>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>
                        {note}
                        <button onClick={() => handleNoteDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NoteWidget;
