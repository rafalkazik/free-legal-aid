import React, { useEffect } from 'react';
// import { db } from '../firebase-config';
// import { collection, getDocs } from 'firebase/firestore';

function OrgItem(props) {
  //   const [orgs, setOrgs] = useState([]);
  //   const orgsCollection = collection(db, 'organizations');

  useEffect(() => {
    console.log('elo');
  }, []);

  //   const getOrgs = async () => {
  //     const data = await getDocs(orgsCollection);
  //     setOrgs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getOrgs();

  //   const showOrgs = orgs.map((org) => {
  //     return (
  //       <div>
  //         <h1>{org.orgName}</h1>
  //         <h2>{org.email}</h2>
  //         <h2>{org.phone}</h2>
  //       </div>
  //     );
  //   });

  return (
    <li>
      <h2>{props.orgName}</h2>
    </li>
  );
}

export default OrgItem;
