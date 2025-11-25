import Form from '../Form/Form';
import Notes from '../Notes/Notes';
import { useState } from 'react';

const Annotates = () => {
  const [notes, setNotes] = useState([]);

  // console.log(notes);

  const addNewNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    const noteToDeleteId = id;

    const newNotes = notes.filter(({ id }) => {
      return noteToDeleteId !== id;
    });

    setNotes(newNotes);
  };
  return (
    <div>
      <div style={{
        height: '10px',
        marginBlock: '1rem',
        borderRadius: 'var(--border-radius-sm)',
        backgroundColor: 'var(--clr-accent)',
      }}></div>
      <Notes notes={notes} handleNoteDelete={deleteNote} />
    </div>
  );
};

export default Annotates;
