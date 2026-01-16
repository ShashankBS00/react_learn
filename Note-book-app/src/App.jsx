import React, { useState } from 'react'

const App = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() || description.trim()) {
      const newNote = {
        id: Date.now(),
        title: title,
        description: description,
      };
      setNotes([...notes, newNote]);
      setTitle("");
      setDescription("");
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 to-purple-600 p-8 shadow-lg">
        <h1 className="text-4xl font-bold">📝 My Notes</h1>
        <p className="text-gray-200 mt-2">Create, manage and organize your notes</p>
      </div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-8 p-8">
        {/* Left Section - Form */}
        <form onSubmit={submitHandler} className="lg:w-1/3">
          <div className="bg-white bg-opacity-95 text-gray-800 rounded-2xl p-8 shadow-2xl sticky top-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Add New Note</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Note Title</label>
                <input
                  type="text"
                  placeholder="Enter note title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Note Description</label>
                <textarea
                  placeholder="Enter note details..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 h-32 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105 mt-6"
              >
                ✓ Add Note
              </button>
            </div>
          </div>
        </form>

        {/* Right Section - Notes Display */}
        <div className="lg:w-2/3">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Your Notes</h2>
            <p className="text-gray-400">{notes.length} note{notes.length !== 1 ? 's' : ''} created</p>
          </div>

          {notes.length === 0 ? (
            <div className="bg-linear-to-br from-gray-700 to-gray-800 rounded-2xl p-12 text-center border-2 border-dashed border-gray-600">
              <p className="text-2xl text-gray-400">📭 No notes yet</p>
              <p className="text-gray-500 mt-2">Create your first note to get started!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notes.map((note) => (
                <div 
                  key={note.id} 
                  className="bg-linear-to-br from-yellow-400 to-yellow-500 text-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col justify-between h-64 group"
                >
                  <div className="overflow-hidden">
                    <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-gray-900 transition">
                      {note.title}
                    </h3>
                    <p className="text-sm line-clamp-5 opacity-90">
                      {note.description}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => deleteNote(note.id)}
                    className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    🗑️ Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
