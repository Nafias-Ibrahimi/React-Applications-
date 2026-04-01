

// import React, { useState, useEffect } from 'react'

// export default function BookSearch() {
//   const [books, setBooks] = useState(['math','pashto','dari', 'tarekh']);
//   const [search, setSearch] = useState('');
//   const [filterBooks, setFilterBooks] = useState([]);
//   const [newbooks, setNewBooks] = useState('');
//   const [editeBooks, setEditeBooks] = useState(null);
//   const [editeValue, setEditeValue] = useState('');

//   const handleSearch = () => {
//     if (search.trim() === '') {
//       setFilterBooks(books);
//     } else {
//       let searchedBooks = books.filter((book) =>
//         book.toLowerCase().includes(search.toLowerCase())
//       );
//       setFilterBooks(searchedBooks);
//     }
//   };

//   // add new Books
//   const handleAddBook = () => {
//     if (newbooks.trim() !== '') {
//       setBooks([...books, newbooks]);
//       setNewBooks(''); 
//     }
//   };

//   // delete books
//   const handleDeleteBook = (index) => {
//     const updatedBooks = books.filter((_, i) => i !== index);
//     setBooks(updatedBooks);
//   };

//   // edit books
//   const handleEditeBook = (index) => {
//     setEditeBooks(index);
//     setEditeValue(books[index]);
//   };

//   // save the edited book
//   const handleSaveEditebook = () => {
//     const updatedBooks = [...books];
//     updatedBooks[editeBooks] = editeValue;
//     setBooks(updatedBooks);
//     setEditeBooks(null);
//     setEditeValue('');
//   };

//   useEffect(() => {
//     handleSearch();
//   }, [search, books]);

//   return (
//     <>
//       <h1>Book Management System</h1>
//       <input
//         type="text"
//         placeholder="search books here"
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* add new book */}
//       <div>
//         <input
//           type="text"
//           placeholder="add new book"
        
//           onChange={(e) => setNewBooks(e.target.value)}
//         />
//         <button onClick={handleAddBook}>Add Book</button>
//       </div>

//       {/* list books */}
//       <div>
//         {filterBooks.length > 0 ? (
//           <div>
//             {filterBooks.map((book, index) => (
//               <div key={index}>
//                 {editeBooks === index ? (
//                   <>
//                     <input
//                       type="text"
//                       value={editeValue}
//                       onChange={(e) => setEditeValue(e.target.value)}
//                     />
//                     <button onClick={handleSaveEditebook}>Save</button>
//                   </>
//                 ) : (
//                   <>
//                     <h3>{index + 1} - {book}</h3>
//                     <button onClick={() => handleEditeBook(index)}>Edit</button>
//                     <button onClick={() => handleDeleteBook(index)}>Delete</button>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div>Book not found</div>
//         )}
//       </div>
//     </>
//   );
// }

import { useEffect, useState } from "react";
// import "./App.css";

function App() {
  const [books, setBooks] = useState([
    { id: 1, name: "java" },
    { id: 2, name: "python" },
    { id: 3, name: "javascript" },
    { id: 4, name: "Ml" },
  ]);
  const [search, setSearch] = useState("");
  const [filterBooks, setFilterBooks] = useState([]);
  const [newBook, setNewBook] = useState("");
  const [editId, setEditId] = useState("");
  const [editName, setEdtiName] = useState("");

  const handleSearch = () => {
    if (search.trim() === "") {
      setFilterBooks(books);
    } else {
      let searchedBooks = books.filter((book) =>
        book.name.toLowerCase().includes(search.toLowerCase()),
      );
      setFilterBooks(searchedBooks);
    }
  };

  // const handleAddNewBook = (e) => {
  //   e.preventDefault();
  //   setBooks([...books, newBook]);
  //   setNewBook("");
   
  // };
  const handleAddNewBook = (e) => {
  e.preventDefault();

  if (newBook.trim() === "") return;

  const newBookObj = {
    id: Date.now(),
    name: newBook.trim(),
  };

  setBooks([...books, newBookObj]);
  setNewBook("");
};

  const handleEdit = (id, name) => {
    setEditId(id);
    setEdtiName(name);
  };

  const handleDelete = (id) => {
    let newListBook = books.filter((book) => book.id !== id);
    setBooks(newListBook)
  };

  const handleCancle = () => {
    setEditId(null)
    setEdtiName('')
  };

  const handleSave = () => {
    if(editName.trim() !== ''){
      let newListBook = books.map((book) =>
        book.id === editId ? {...book, name:editName.trim()} : book,
      )
      setBooks(newListBook)
      setEditId(null)
      setEdtiName('')
    }
  };

  useEffect(() => {
    handleSearch();
  }, [search, books]);


  return (
    <div>
      <div>
        <h1>Book Managment System</h1>
      </div>
      <div>
        <form onSubmit={handleAddNewBook}>
          <input
            type="text"
            placeholder="enter new book"
            value={newBook}
            onChange={(e) => setNewBook(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <hr />
      <input
        type="text"
        placeholder="search books here"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={{marginTop:'20px'}}>
        {filterBooks.length > 0 ? (
          <div>
            {filterBooks.map((book, index) => (
              <div key={index}>
                {editId == book.id ? (
                  <div>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEdtiName(e.target.value)}
                    />

                    <button onClick={handleSave}>save</button>
                    <button onClick={handleCancle}>cancle</button>
                  </div>
                ) : (
                  <div>
                    <h1>
                      {index + 1} - {book.name}
                    </h1>
                    <button onClick={() => handleEdit(book.id, book.name)}>
                      edit
                    </button>
                    <button onClick={() => handleDelete(book.id)}>
                      delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div>Book not found</div>
        )}
      </div>
    </div>
  );
}

export default App;
