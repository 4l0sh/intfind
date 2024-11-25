import React, { Fragment } from 'react';
import M from 'materialize-css';

const Test = () => {
  return (
    <Fragment>
      <nav>
        <div class='nav-wrapper'>
          <a href='#!' class='brand-logo center'>
            Logo
          </a>
          <ul class='left hide-on-med-and-down'>
            <li>
              <a href='sass.html'>Sass</a>
            </li>
            <li>
              <a href='badges.html'>Components</a>
            </li>
            <li class='active'>
              <a href='collapsible.html'>JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Test;
