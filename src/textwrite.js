// src/TextWritePage.js
import React, { useState } from 'react';

const TextWritePage = ({ onTextChange }) => {
  const [userText, setUserText] = useState('');
  const [textColor, setTextColor] = useState('#333');
  const [highlightColor, setHighlightColor] = useState('#e91e63');

  const handleTextChange = (e) => {
    setUserText(e.target.value);
    onTextChange(e.target.value);
  };

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const handleHighlightColorChange = (e) => {
    setHighlightColor(e.target.value);
  };

  return (
    <div>
      <h2>Text Writing Area</h2>

      <textarea
        placeholder="Write your text here..."
        value={userText}
        onChange={handleTextChange}
        style={{ width: '100%', height: '200px', fontSize: '16px', margin: '10px' }}
      />

      <label>
        Text Color:
        <input
          type="color"
          value={textColor}
          onChange={handleTextColorChange}
          style={{ marginLeft: '10px' }}
        />
      </label>

      <label>
        Highlight Color:
        <input
          type="color"
          value={highlightColor}
          onChange={handleHighlightColorChange}
          style={{ marginLeft: '10px' }}
        />
      </label>
    </div>
  );
};

export default TextWritePage;
