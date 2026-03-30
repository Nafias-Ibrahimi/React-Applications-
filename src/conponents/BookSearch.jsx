

import React, { useState, useEffect } from 'react'

export default function BookSearch() {
  const [books, setBooks] = useState(['math','pashto','dari', 'tarekh']);
  const [search, setSearch] = useState('');
  const [filterBooks, setFilterBooks] = useState([]);
  const [newbooks, setNewBooks] = useState('');
  const [editeBooks, setEditeBooks] = useState(null);
  const [editeValue, setEditeValue] = useState('');

  const handleSearch = () => {
    if (search.trim() === '') {
      setFilterBooks(books);
    } else {
      let searchedBooks = books.filter((book) =>
        book.toLowerCase().includes(search.toLowerCase())
      );
      setFilterBooks(searchedBooks);
    }
  };

  // add new Books
  const handleAddBook = () => {
    if (newbooks.trim() !== '') {
      setBooks([...books, newbooks]);
      setNewBooks(''); 
    }
  };

  // delete books
  const handleDeleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  // edit books
  const handleEditeBook = (index) => {
    setEditeBooks(index);
    setEditeValue(books[index]);
  };

  // save the edited book
  const handleSaveEditebook = () => {
    const updatedBooks = [...books];
    updatedBooks[editeBooks] = editeValue;
    setBooks(updatedBooks);
    setEditeBooks(null);
    setEditeValue('');
  };

  useEffect(() => {
    handleSearch();
  }, [search, books]);

  return (
    <>
      <h1>Book Management System</h1>
      <input
        type="text"
        placeholder="search books here"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* add new book */}
      <div>
        <input
          type="text"
          placeholder="add new book"
        
          onChange={(e) => setNewBooks(e.target.value)}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>

      {/* list books */}
      <div>
        {filterBooks.length > 0 ? (
          <div>
            {filterBooks.map((book, index) => (
              <div key={index}>
                {editeBooks === index ? (
                  <>
                    <input
                      type="text"
                      value={editeValue}
                      onChange={(e) => setEditeValue(e.target.value)}
                    />
                    <button onClick={handleSaveEditebook}>Save</button>
                  </>
                ) : (
                  <>
                    <h3>{index + 1} - {book}</h3>
                    <button onClick={() => handleEditeBook(index)}>Edit</button>
                    <button onClick={() => handleDeleteBook(index)}>Delete</button>
                  </>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div>Book not found</div>
        )}
      </div>
    </>
  );
}
