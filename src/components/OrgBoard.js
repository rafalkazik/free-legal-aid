import React from 'react';
import '../styles/OrgBoard.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

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
        <header className='org-item__header-wrapper'>
          <div className='org-item__org-name'>
            <h3 className='org-item__content org-item__org-name-text'>
              {org.orgName}
            </h3>
          </div>

          <div className='org-item__city-content city-content'>
            <div className='city-content__icon'>
              <LocationOnOutlinedIcon />
            </div>

            <div className='city-content__city-name city-name'>
              <p className='city-name__text'>{org.city}</p>
            </div>
          </div>
        </header>

        <div className='org-item__org-data-content'>
          <div className='org-data-content-wrapper__adress'>
            <p className='org-item__content--title org-item__org-adress'>
              adress:
            </p>
            <p className='org-item__content org-item__org-adress'>
              {org.adress}
            </p>
          </div>

          <div className='org-data-content-wrapper__email'>
            <p className='org-item__content--title org-item__org-email'>
              email:
            </p>
            <p className='org-item__content org-item__org-email'>{org.email}</p>
          </div>

          <div className='org-data-content-wrapper__phone'>
            <p className='org-item__content--title org-item__org-phone'>
              phone:
            </p>
            <p className='org-item__content org-item__org-phone'>{org.phone}</p>
          </div>

          <div className='org-data-content-wrapper__coordinator'>
            <p className='org-item__content--title org-item__org-coordinator'>
              coordinator:
            </p>
            <p className='org-item__content org-item__org-coordinator'>
              {org.coordinator}
            </p>
          </div>
        </div>
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
