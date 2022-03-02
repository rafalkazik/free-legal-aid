import React from 'react';

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
        <input
          type='text'
          name='city'
          value={inputValue}
          onChange={handleChange}
          className='form__input'
          placeholder='search by city'
        />
      </form>
    </section>
  );
}

export default SearchBar;
