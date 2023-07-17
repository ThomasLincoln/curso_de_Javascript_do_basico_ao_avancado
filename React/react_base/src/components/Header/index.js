import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="">
        <FaHome size={24} />
      </a>
      <a href="">
        <FaUserAlt />
      </a>
      <a href="">
        <FaSignInAlt />
      </a>
    </Nav>
  );
}
