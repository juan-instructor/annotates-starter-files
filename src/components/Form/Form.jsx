import './Form.css';
import FormNote from './FormNote/FormNote.jsx';
import { useState } from 'react';

const Form = ({ handleNewNote }) => {
  const [shouldAddNotes, setShouldAddNotes] = useState(false);

  return (
    <div className='form'>
      {
        !shouldAddNotes
          ? <button className='btn btn--add' onClick={() => setShouldAddNotes(!shouldAddNotes)}>Add a new note</button>
          : <FormNote handleNewNote={handleNewNote} handleFormVisibility={setShouldAddNotes} />
      }
    </div>
  );
};

export default Form;
