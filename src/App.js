import React, { useEffect, useState } from 'react';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import OrgBoard from './components/OrgBoard';

function App() {
  const [orgs, setOrgs] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const orgsCollection = collection(db, 'organizations');

  useEffect(() => {
    const getOrgs = async () => {
      const data = await getDocs(orgsCollection);
      setOrgs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getOrgs();
  }, []);

  return (
    <section className='App'>
      <Header />
      <SearchBar
        data={orgs}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <OrgBoard data={orgs} inputValue={inputValue} />
    </section>
  );
}

export default App;
