"use client";
import { useState } from "react";
import ReactPlayer from "react-player";

export default function SubjectDetailsClient({ subjectData }) {
  const [currentChapter, setCurrentChapter] = useState(subjectData.chapters[0]);
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");

  const addNote = () => {
    if (!noteInput.trim()) return;
    setNotes([...notes, { id: Date.now(), text: noteInput }]);
    setNoteInput("");
  };

  const editNote = (id, newText) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, text: newText } : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* LEFT SIDE */}
      <div className="lg:col-span-8">
        <div className="rounded-lg overflow-hidden shadow-md">
          <ReactPlayer
            url={currentChapter.videoUrl}
            width="100%"
            height="400px"
            controls
          />
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold">
            Chapter {currentChapter.chapterNo}: {currentChapter.chapterTitle}
          </h2>

          {/* Notes Section */}
          <div className="mt-6">
            <h3 className="font-bold mb-2">Notes</h3>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                className="input input-bordered flex-1"
                value={noteInput}
                onChange={(e) => setNoteInput(e.target.value)}
                placeholder="Write your note..."
              />
              <button onClick={addNote} className="btn btn-success">
                Add
              </button>
            </div>

            <ul className="space-y-2">
              {notes.map((note) => (
                <li
                  key={note.id}
                  className="p-2 border rounded flex justify-between items-center"
                >
                  <span>{note.text}</span>
                  <div className="flex gap-2">
                    <button
                      className="btn btn-xs btn-outline"
                      onClick={() => {
                        const newText = prompt("Edit your note:", note.text);
                        if (newText) editNote(note.id, newText);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-xs btn-error"
                      onClick={() => deleteNote(note.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (Chapter List) */}
      <div className="lg:col-span-4">
        <div className="bg-base-100 rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-4">Chapters</h3>
          <ul className="space-y-2">
            {subjectData.chapters.map((ch) => (
              <li key={ch.id}>
                <button
                  onClick={() => setCurrentChapter(ch)}
                  className={`w-full text-left p-2 rounded-md hover:bg-green-100 ${
                    currentChapter.id === ch.id
                      ? "bg-green-200 font-bold"
                      : ""
                  }`}
                >
                  Chapter {ch.chapterNo}: {ch.chapterTitle}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}