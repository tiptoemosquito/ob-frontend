import React from 'react';
import { Link } from 'react-router-dom';

const Production = (props) => {
    return (
      <li>
          <Link to={`/productions/${props.production.id}`}>{props.production.title}</Link>
      </li>
    )
}

export default Production;