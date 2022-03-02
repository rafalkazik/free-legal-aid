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
    // e.target.city.value = '';
    return updatedInputValue;
  };

  return (
    <section>
      <form onSubmit={findByCity}>
        <input
          type='text'
          name='city'
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}

export default SearchBar;
