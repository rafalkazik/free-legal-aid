import React from 'react';

function OrgBoard({ data, inputValue }) {
  const filterData = data.filter((value) => {
    const twoLangCityNames =
      value.city.toLowerCase().includes(inputValue.toLowerCase()) ||
      value.cityPl.toLowerCase().includes(inputValue.toLowerCase());
    return twoLangCityNames;
  });

  const showOrgs = filterData.map((org) => {
    return (
      <li key={org.id} className='org-list__org-item org-item'>
        <h3 className='org-item__content org-item__org-name'>{org.orgName}</h3>
        <p className='org-item__content org-item__org-adress'>{org.adress}</p>
        <p className='org-item__content org-item__org-email'>{org.email}</p>
        <p className='org-item__content org-item__org-phone'>{org.phone}</p>
        <p className='org-item__content org-item__org-coordinator'>
          {org.coordinator}
        </p>
      </li>
    );
  });

  return (
    <main className='org-board'>
      <ul className='org-board__org-list org-list'>{showOrgs}</ul>
    </main>
  );
}

export default OrgBoard;
