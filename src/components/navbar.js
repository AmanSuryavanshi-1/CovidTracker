import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import Covid from './covid/covid';
import './navbar.css';


export default function navbar(props) {
  return (
<nav>
      <ul>
        <li>
          <Link className="nav" to="/">Covid Live </Link>
        </li>
        <li>
          <Link className="nav-link" to="/statewiseData/statewise">{props.Statewise}StateWise Data</Link>
        </li>
      </ul>
 </nav>
  )
}
