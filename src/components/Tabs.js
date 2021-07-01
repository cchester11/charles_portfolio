import React from 'react';

function Tabs(props) {
  const tabs = ['About', 'Projects', 'Resume', 'Contact']
  return (
    <ul className="nav nav-tabs navbar">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a 
          href={'#' + tab.toLowerCase()}
          onClick={() => {
            props.handlePageChange(tab)
          }}
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  )
};

export default Tabs;