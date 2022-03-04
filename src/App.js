import React, { useEffect, useState } from 'react';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import './styles/App.css';
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
      <div className='App__top'>
        <Header />
        <SearchBar
          data={orgs}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
      <div className='App__board'>
        <OrgBoard data={orgs} inputValue={inputValue} />
      </div>
    </section>
  );
}

export default App;
