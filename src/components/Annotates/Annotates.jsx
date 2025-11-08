import Form from '../Form/Form';
import Notes from '../Notes/Notes';
import { useState } from 'react';

// NOTE: lifting up state. We need to setup the state in Annotates component
// as both noteForm will set the state of notes
// and Notes will render the current notes
// We can use contextApi from React or Redux to manage large contexts.
// These are known as context stores. We'll learn about it in the future.
const Annotates = () => {
  const [notes, setNotes] = useState([]);

  // console.log(notes);

  const addNewNote = (note) => {
    setNotes([...notes, note]);
  };

  // NOTE: prop drilling all the way to Note component -> can become messy really quick!
  // but there will be old codebases that use this!
  // Usage of contextApi or Redux which are tools to handle state more maneagable
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
