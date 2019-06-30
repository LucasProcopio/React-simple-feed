import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = (props) => {
  const { text } = props;
  return <div className="header">{text}</div>;
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
