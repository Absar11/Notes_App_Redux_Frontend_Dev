import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../features/noteSlice';

const NoteList = () => {
    const dispatch = useDispatch();
    const { allNotes, filterCategory } = useSelector((state) => state.notes);

    const filtered = filterCategory === "All"
        ? allNotes
        : allNotes.filter(note => note.category === filterCategory);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px'
        }}>
            {filtered.length === 0 ? (
                <p style={{ fontStyle: 'italic', color: '#666' }}>No notes to display.</p>
            ) : (
                filtered.map(note => (
                    <div key={note.id} style={{
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '16px',
                        marginBottom: '16px',
                        width: '100%',
                        maxWidth: '500px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h3 style={{
                            marginBottom: '8px',
                            fontSize: '20px',
                            color: '#333'
                        }}>
                            {note.title} <span style={{ fontSize: '14px', color: '#777' }}> [{note.category}]</span>
                        </h3>
                        <p style={{ marginBottom: '12px', color: '#555' }}>{note.content}</p>
                        <button
                            onClick={() => dispatch(deleteNote(note.id))}
                            style={{
                                padding: '6px 12px',
                                backgroundColor: '#dc3545',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default NoteList;
