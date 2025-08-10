import React, { useState } from 'react'
import { addNotes } from '../features/noteSlice';
import { useDispatch } from 'react-redux';

const AddNotes = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("Work");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && content) {
            dispatch(addNotes({ title, content, category }));
            setTitle("");
            setContent("");
        }
        else {
            alert("All fields are required ....!!!")
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                maxWidth: "400px",
                margin: "20px auto",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
            }}
        >
            <input
                type="text"
                placeholder='Title..'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                    padding: "8px",
                    fontSize: "16px",
                    borderRadius: "4px",
                    border: "1px solid #ccc"
                }}
            />
            <textarea
                placeholder='Enter Your Content'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={4}
                style={{
                    padding: "8px",
                    fontSize: "16px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    resize: "none"
                }}
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{
                    padding: "8px",
                    fontSize: "16px",
                    borderRadius: "4px",
                    border: "1px solid #ccc"
                }}
            >
                <option>Work</option>
                <option>Study</option>
                <option>Personal</option>
            </select>
            <button
                type="submit"
                style={{
                    padding: "10px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                }}
            >
                Add Note
            </button>
        </form>
    )
}

export default AddNotes
