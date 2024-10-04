import React from 'react';

const BookForm = ({ newBook, handleNewBookChange, handleSaveNewBook }) => {
  return (
    <div className="new-book-form">
      <h3>Add New Book</h3>
      <input type="text" name="booktitle" value={newBook.booktitle} placeholder="Title" onChange={handleNewBookChange} />
      <input type="text" name="author" value={newBook.author} placeholder="Author" onChange={handleNewBookChange} />
      <input type="text" name="genre" value={newBook.genre} placeholder="Genre" onChange={handleNewBookChange} />
      <input type="text" name="yop" value={newBook.yop} placeholder="Year" onChange={handleNewBookChange} />
      <input type="text" name="isbn" value={newBook.isbn} placeholder="ISBN" onChange={handleNewBookChange} />
      <button onClick={handleSaveNewBook}>Save</button>
    </div>
  );
};

export default BookForm;
