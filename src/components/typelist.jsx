import React from 'react';

const TypeList = ({ title, options, link }) => {

  return (
    <div className="type">
      <li>{title}</li>
      {options.map((option, index) => (
        <li key={index}>{option}</li>
      ))}
      <li><a href="#">{link}</a></li>
    </div>
  );
};

export default TypeList;
