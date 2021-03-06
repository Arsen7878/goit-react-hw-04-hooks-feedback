import React from 'react';
import PropTypes from 'prop-types';
import c from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={c.title}>{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
