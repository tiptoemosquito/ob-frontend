import React from 'react';
import { Link } from 'react-router-dom';

const Theater = (props) => {
    return (
      <li>
          <Link to={`/theaters/${props.theater.id}`}>{props.theater.name}</Link>
      </li>
    )
}

export default Theater;