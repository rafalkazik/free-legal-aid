import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/SearchBar.css';

function SearchBar({ inputValue, setInputValue }) {
  const handleChange = (e) => {
    const city = e.target.value;
    setInputValue((prevValue) => {
      return city;
    });
  };

  const findByCity = (e) => {
    e.preventDefault();
    let updatedInputValue = setInputValue(inputValue);
    return updatedInputValue;
  };

  return (
    <section className='search-bar'>
      <form onSubmit={findByCity} className='search-bar__form form'>
        <div className='form__wrapper'>
          <div className='form__icon'>
            <SearchIcon />
          </div>
          <input
            type='text'
            name='city'
            value={inputValue}
            onChange={handleChange}
            className='form__input'
            placeholder='search by city'
          />
        </div>
      </form>
    </section>
  );
}

export default SearchBar;
