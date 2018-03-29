import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import map from 'lodash/map';

import Icon from '../Base/Icon';
import flex from '../../styles/mixins/flex';

const links = [
  {
    icon: 'language',
    route: '/languages',
    title: 'Languages',
  },
  {
    icon: 'code',
    route: '/projects',
    title: 'Projects',
  },
];

const TabBar = () => (
  <header>
    <nav>
      <ul style={styles.wrapper}>
        {map(links, link => (
          <li style={styles.link}>
            <Icon name={link.icon} />
            <Link to={link.route} style={styles.linkText}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default TabBar;

const styles = {
  wrapper: {
    ...flex({alignX: 'between'}),
    paddingLeft: 0,
    padding: 10,
  },
  link: {
    listStyleType: 'none',
    fontFamily: "'Oswald', sans-serif",
    fontSize: 14,
  },
  linkText: {
    color: 'black',
  },
};
