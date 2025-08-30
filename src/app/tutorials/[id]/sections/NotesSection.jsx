"use client";
import { useEffect, useState } from "react";

export default function NotesSection({ chapterId }) {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");

  const fetchNotes = async () => {
    const res = await fetch(`/api/notes?chapterId=${chapterId}`);
    if (res.ok) setNotes(await res.json());
  };

  useEffect(() => { fetchNotes(); }, [chapterId]);

  const addNote = async () => {
    if (!content.trim()) return;
    const res = await fetch("/api/notes", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ chapterId, content, userId:"demoUser", username:"Demo User" })
    });
    if (res.ok) {
      setContent("");
      fetchNotes();
    }
  };

  const delNote = async (id) => {
    await fetch(`/api/notes/${id}`, { method:"DELETE" });
    fetchNotes();
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-3">Notes</h2>

      <div className="flex gap-2 mb-4">
        <input
          className="input input-bordered w-full"
          placeholder="Write a note..."
          value={content}
          onChange={(e)=>setContent(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addNote}>Add</button>
      </div>

      <ul className="space-y-2">
        {notes.map((n)=>(
          <li key={n._id} className="border p-3 rounded flex items-center justify-between">
            <div>
              <p className="text-sm">{n.content}</p>
              <p className="text-xs text-gray-500">by {n.username}</p>
            </div>
            <button className="btn btn-ghost btn-sm" onClick={()=>delNote(n._id)}>Delete</button>
          </li>
        ))}
        {notes.length===0 && <p className="text-sm text-gray-500">No notes yet.</p>}
      </ul>
    </div>
  );
}
