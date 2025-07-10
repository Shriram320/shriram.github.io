import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './styles.css';

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  });
  const [text, setText] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (text.trim() === '') return;
    setNotes([{ id: Date.now(), content: text }, ...notes]);
    setText('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div>
      <h1>📝 Smart Notes</h1>
      <textarea
        placeholder="Write your note here in Markdown..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={addNote}>Add Note</button>
      <div>
        {notes.map(note => (
          <div key={note.id} className="note">
            <div dangerouslySetInnerHTML={{ __html: marked(note.content) }}></div>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;