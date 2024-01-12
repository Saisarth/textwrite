// src/App.js
import React, { useState } from 'react';
import TextWritePage from './textwrite.js';
import './App.css';

const fonts = [
  'Arial, sans-serif',
  'Helvetica, sans-serif',
  'Georgia, serif',
  'Times New Roman, serif',
  'Courier New, monospace',
  'Verdana, sans-serif',
  'Tahoma, sans-serif',
  'Impact, sans-serif',
  'Comic Sans MS, cursive',
  'Palatino, serif',
];

function App() {
  const [userText, setUserText] = useState('');
  const [textColor, setTextColor] = useState('#333');
  const [highlightColor, setHighlightColor] = useState('#e91e63');
  const [selectedFont, setSelectedFont] = useState('Arial, sans-serif');

  const handleTextChange = (text) => {
    setUserText(text);
  };

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const handleHighlightColorChange = (e) => {
    setHighlightColor(e.target.value);
  };

  const styles = {
    body: {
      backgroundColor: '#f0f0f0',
      color: textColor,
      fontFamily: selectedFont,
      textAlign: 'center',
      padding: '20px',
      maxWidth: '600px',
      margin: 'auto',
    },
    h1: {
      color: '#009688',
    },
    p: {
      fontSize: '18px',
      lineHeight: '1.6',
      marginBottom: '20px',
    },
    highlightText: {
      color: highlightColor,
      fontWeight: 'bold',
    },
    input: {
      margin: '10px',
      padding: '5px',
      fontSize: '16px',
      width: '100%',
      boxSizing: 'border-box',
    },
    select: {
      margin: '10px',
      padding: '5px',
      fontSize: '16px',
      width: '100%',
      boxSizing: 'border-box',
    },
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>Colorful Text Page</h1>

      <input
        type="text"
        placeholder="Enter text"
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
        style={styles.input}
      />

      <input
        type="color"
        value={textColor}
        onChange={handleTextColorChange}
        style={styles.input}
      />

      <select
        value={selectedFont}
        onChange={handleFontChange}
        style={styles.select}
      >
        {fonts.map((font, index) => (
          <option key={index} value={font}>
            {font}
          </option>
        ))}
      </select>

      <input
        type="color"
        value={highlightColor}
        onChange={handleHighlightColorChange}
        style={styles.input}
      />

      <TextWritePage onTextChange={handleTextChange} />

      <p style={styles.p}>
        {userText.length > 0 ? (
          userText
        ) : (
          'sample text'
        )}
      </p>

      <p style={styles.p}>
        This is a <span style={styles.highlightText}>highlighted text</span>.
      </p>
    </div>
  );
}

export default App;
