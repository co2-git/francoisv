import React from 'react';
import map from 'lodash/map';
import {Link} from 'react-router-dom';
import kebabCase from 'lodash/kebabCase';

import articles from '../../../data/articles.json';
import Page from '../Base/Page';
import Icon from '../Base/Icon';
import flex from '../../styles/mixins/flex';
import * as fonts from '../../styles/vars/fonts';

const Articles = () => (
  <Page title="Articles">
    {map(articles, article => (
      <div key={article.title}>
        <Link
          to={`/articles/${kebabCase(article.title)}`}
          style={{color: 'black', fontSize: fonts.size.linkTitle, textDecoration: 'none'}}
        >
          {article.title}
        </Link>
        <div style={styles.tags}>
          {map(article.tags, tag => (
            <div key={tag} style={styles.tag}>
              <Icon name="tag" />
              <a href="">{tag}</a>
            </div>
          ))}
        </div>
      </div>
    ))}
  </Page>
);

export default Articles;

const styles = {
  tags: {
    ...flex({direction: 'row', alignY: 'center', wrap: true}),
    padding: 10,
  },
  tag: {
    ...flex({direction: 'row', alignY: 'center'}),
    padding: 5,
  },
};
