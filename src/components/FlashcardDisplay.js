import React from 'react';

function FlashcardDisplay({ flashcard, showingFront, onFlip }) {
  if (!flashcard) return <p>Loading...</p>;

  return (
    <div className="flashcard" onClick={onFlip}>
      <p>{showingFront ? flashcard.front : flashcard.back}</p>
      <p className="side-label">Side: {showingFront ? 'Front' : 'Back'}</p>
    </div>
  );
}

export default FlashcardDisplay;
