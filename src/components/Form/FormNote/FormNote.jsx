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

              <input
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
