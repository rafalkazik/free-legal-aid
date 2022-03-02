import React from 'react';

function OrgBoard({ data, inputValue }) {
  //   const [filteredData, setFilteredData] = useState([]);

  const filterData = data.filter((value) => {
    const twoLangCityNames =
      value.city.toLowerCase().includes(inputValue.toLowerCase()) ||
      value.cityPl.toLowerCase().includes(inputValue.toLowerCase());
    return twoLangCityNames;
    // if (inputValue === '') {
    //   setFilteredData([]);
    // } else {
    //   setFilteredData(filterData);
    // }
  });

  const showOrgs = filterData.map((org) => {
    return (
      <li key={org.id}>
        <h1>{org.orgName}</h1>
        <h2>{org.email}</h2>
        <h2>{org.phone}</h2>
      </li>
    );
  });

  const sortedOrgs = showOrgs.sort((a, b) => b - a);

  return (
    <>
      <ul>{sortedOrgs}</ul>
    </>
  );
}

export default OrgBoard;
