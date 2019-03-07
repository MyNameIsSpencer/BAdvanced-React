// import React from 'react';     // <<< next.js will take care of importing React for us

// class Home extends React.Component {
//   render () {
//     return <h1> Hey! </h1>
//   }
// }

// import Link from 'next/link';

import Items from '../components/Items';

const Home =  props => (
  <div>
    <Items page={parseFloat(props.query.page) || 1} />
  </div>
);

export default Home
