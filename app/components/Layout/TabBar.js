import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import map from 'lodash/map';
import {connect} from 'react-redux';

import Icon from '../Base/Icon';
import flex from '../../styles/mixins/flex';
import * as fonts from '../../styles/vars/fonts';

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
  {
    icon: 'tags',
    route: '/articles',
    title: 'Articles',
  },
];

const TabBar = ({top}) => (
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

const selector = state => ({top: state.UI.scrollTop});

export default connect(selector)(TabBar);

const styles = {
  wrapper: {
    ...flex({alignX: 'between'}),
    paddingLeft: 0,
    padding: 10,
  },
  link: {
    listStyleType: 'none',
    fontFamily: "'Oswald', sans-serif",
    fontSize: fonts.size.linkTitle,
  },
  linkText: {
    color: 'black',
    textDecoration: 'none',
  },
};
