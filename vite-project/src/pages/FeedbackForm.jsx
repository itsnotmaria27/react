import React, { useState } from 'react';
import FeedbackFormPortal from '../components/FeedbackFormPortal';
import "./style.css";

const FeedbackForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Отправленные данные:', { name, feedback });
    closeForm(); 
  };

  return (
    <>
      <div className="page-container">
        <button onClick={openForm}>Отправить отзыв</button>
      </div>
  
      <FeedbackFormPortal isOpen={isFormOpen} onClose={closeForm}>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Ваше имя:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите ваше имя"
              required
            />
          </label>
  
          <label>
            Ваш отзыв:
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Напишите ваш отзыв"
              rows="4"
              cols="50"
              required
            />
          </label>
  
          <div>
            <button type="submit">Отправить</button>
            <button type="button" className="secondary" onClick={closeForm}>
              Отмена
            </button>
          </div>
        </form>
      </FeedbackFormPortal>
    </>
  );
};

export default FeedbackForm;