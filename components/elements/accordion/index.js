import React from 'react';
export default (props) => {
  const data = props?.data;
  return (
    <div className="faq_container">
      <div className="faq_header">
        <h1>{props.label}</h1>
        <div className="faq_details">{props.details}</div>
      </div>
    </div>
  );
};
