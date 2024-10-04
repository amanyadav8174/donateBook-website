import { useState, useEffect } from 'react';

const useUserData = () => {
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
    books: [],
  });

  // Load user data from local storage on initial render
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData')) || { name: '', phone: '', email: '', books: [] };
    setUserData(storedData);
  }, []);

  // Save user data to local storage whenever userData changes
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  return [userData, setUserData];
};

export default useUserData;
