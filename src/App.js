import React, { useState } from 'react';
import './styles/App.css';
import InputField from './components/InputField';
import BookForm from './components/BookForm';
import BookTable from './components/BookTable';
import useUserData from './hooks/useUserData';

function App() {
  const [userData, setUserData] = useUserData();
  const [error, setError] = useState({ name: '', phone: '', email: '' });
  const [isEditing, setIsEditing] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newBook, setNewBook] = useState({
    booktitle: '',
    author: '',
    genre: '',
    yop: '',
    isbn: ''
  });
  const [editingData, setEditingData] = useState({
    booktitle: '',
    author: '',
    genre: '',
    yop: '',
    isbn: ''
  });

  // Input validation for name, phone, and email
  const validateInputs = () => {
    let isValid = true;
    let errors = { name: '', phone: '', email: '' };

    if (userData.name.trim() === '') {
      errors.name = 'Name is required';
      isValid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!userData.phone.match(phoneRegex)) {
      errors.phone = 'Enter a valid 10-digit phone number';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userData.email.match(emailRegex)) {
      errors.email = 'Enter a valid email address';
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  // Handle adding a new book
  const handleAddBook = () => {
    if (validateInputs()) {
      setShowAddForm(true); // Show the add book form
    }
  };

  const handleSaveNewBook = () => {
    if (newBook.booktitle && newBook.author && newBook.genre && newBook.yop && newBook.isbn) {
      const bookToAdd = {
        sno: userData.books.length + 1, // Auto-incremented number
        booktitle: newBook.booktitle,
        author: newBook.author,
        genre: newBook.genre,
        yop: newBook.yop,
        isbn: newBook.isbn
      };
      const updatedBooks = [...userData.books, bookToAdd];
      setUserData({ ...userData, books: updatedBooks });
      setShowAddForm(false); // Hide the add book form
      setNewBook({ booktitle: '', author: '', genre: '', yop: '', isbn: '' }); // Clear the form
    }
  };

  const handleEdit = (sno) => {
    setIsEditing(sno);
    const bookToEdit = userData.books.find(book => book.sno === sno);
    setEditingData(bookToEdit);
  };

  const handleSave = (sno) => {
    const updatedBooks = userData.books.map(book => {
      if (book.sno === sno) {
        return { ...book, ...editingData };
      }
      return book;
    });
    setUserData({ ...userData, books: updatedBooks });
    setIsEditing(null);
  };

  const handleDelete = (sno) => {
    const updatedBooks = userData.books.filter(book => book.sno !== sno);
    setUserData({ ...userData, books: updatedBooks });
  };

  const handleInputChange = (e) => {
    setEditingData({ ...editingData, [e.target.name]: e.target.value });
  };

  const handleNewBookChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  return (
    <div className="donate-book-page">
      <header>
        <h1>DONATE A BOOK</h1>
        <InputField
          id="name"
          label="NAME:"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          placeholder="Enter name"
          error={error.name}
        />
        <InputField
          id="phone"
          label="PHONE:"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
          placeholder="Enter phone"
          error={error.phone}
        />
        <InputField
          id="email"
          label="EMAIL:"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          placeholder="Enter email"
          error={error.email}
        />
      </header>

      <button className="add-book-button" onClick={handleAddBook}>+</button>

      {/* Show form for adding new book */}
      {showAddForm && (
        <BookForm
          newBook={newBook}
          handleNewBookChange={handleNewBookChange}
          handleSaveNewBook={handleSaveNewBook}
        />
      )}

      <BookTable
        books={userData.books}
        isEditing={isEditing}
        editingData={editingData}
        handleInputChange={handleInputChange}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleSave={handleSave}
      />
    </div>
  );
}

export default App;
