import './FormNote.css';
import * as z from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Errors from '../Errors/Errors.jsx';

const FormNote = ({ handleNewNote, handleFormVisibility }) => {
  return (
    <div className='note-form'>
      <div className='note-form__close-btn-wrapper'>
        <button className='btn' onClick={() => handleFormVisibility(wasVisible => !wasVisible)}>X</button>
      </div>
      {/* NOTE: new in React for server components and calling functions on the server */}
      {/* <form action={handleFormAction}></form> */}
      <form onSubmit={handleFormSubmit}>
        <legend className="visually-hidden">Add a new note form</legend>
        {
          shouldDisplayErrors ? <Errors errors={noteFormErrors} /> : ''
        }
        <div>
          {/* NOTE: Reusable form components in case we have multiple forms in our app */}
          <p className='note-form__input'>
            <label>
              <span aria-hidden='true'>Title*</span>
              <span className='visually-hidden'>add note title. Note this field is required</span>
              {/* NOTE: controlled vs uncontrolled inputs */}
              {/* https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable */}
              {/* By passing the `value` prop we indicate to react we want to controll this input */}
              {/* and not the default browser behaviour. So, we need to tell react how the value should be updated. */}
              <input
                // type=""
                name="title"
                type="text"
                placeholder='Enter a note title'
                value={noteForm.title}
                onChange={handleNoteFormChange}
              />
            </label>
          </p>
          <p className='note-form__input'>
            <label>
              <span>Priority</span>
              {/* NOTE: we passed the prop 'value' -> making the select input controlled! */}
              {/* we need to update react on how to update this value; otherwise, it won't update anything! */}
              {/* https://react.dev/reference/react-dom/components/select#select */}
              <select
                // value=""
                name="priority"
                value={noteForm.priority}
                onChange={handleNoteFormChange}
              >
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>
            </label>
          </p>
          <p className='note-form__input'>
            <label>
              <span>Category</span>
              <select
                name="category"
                value={noteForm.category}
                onChange={handleNoteFormChange}
              >
                <option value="family">family</option>
                <option value="work">work</option>
                <option value="personal">personal</option>
              </select>
            </label>
          </p>
          <p className='note-form__input'>
            <label>
              <span aria-hidden='true'>Description*</span>
              <span className='visually-hidden'>Add note description. Note that this is required</span>
              <textarea
                name="description"
                placeholder='Enter a note description'
                value={noteForm.description}
                onChange={handleNoteFormChange}
              ></textarea>
            </label>
          </p>
        </div>
        <button className='btn note-form__btn-enter' type="submit">Enter note</button>
      </form >
    </div>
  );
};

export default FormNote;
