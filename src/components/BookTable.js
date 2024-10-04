import React from 'react';

const BookTable = ({ books, isEditing, editingData, handleInputChange, handleEdit, handleDelete, handleSave }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>S. No.</th>
          <th>Book Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Year of Publication</th>
          <th>ISBN</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.sno}>
            <td>{book.sno}</td>
            <td>
              {isEditing === book.sno ? (
                <input
                  type="text"
                  name="booktitle"
                  value={editingData.booktitle}
                  onChange={handleInputChange}
                />
              ) : (
                book.booktitle
              )}
            </td>
            <td>
              {isEditing === book.sno ? (
                <input
                  type="text"
                  name="author"
                  value={editingData.author}
                  onChange={handleInputChange}
                />
              ) : (
                book.author
              )}
            </td>
            <td>
              {isEditing === book.sno ? (
                <input
                  type="text"
                  name="genre"
                  value={editingData.genre}
                  onChange={handleInputChange}
                />
              ) : (
                book.genre
              )}
            </td>
            <td>
              {isEditing === book.sno ? (
                <input
                  type="text"
                  name="yop"
                  value={editingData.yop}
                  onChange={handleInputChange}
                />
              ) : (
                book.yop
              )}
            </td>
            <td>
              {isEditing === book.sno ? (
                <input
                  type="text"
                  name="isbn"
                  value={editingData.isbn}
                  onChange={handleInputChange}
                />
              ) : (
                book.isbn
              )}
            </td>
            <td>
              {isEditing === book.sno ? (
                <button onClick={() => handleSave(book.sno)}>Save</button>
              ) : (
                <>
                  <button className="edit-btn" onClick={() => handleEdit(book.sno)}>✎</button>
                  <button className="delete-btn" onClick={() => handleDelete(book.sno)}>✖</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
