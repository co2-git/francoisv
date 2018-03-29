import React from 'react';
import map from 'lodash/map';
import {Link} from 'react-router-dom';
import kebabCase from 'lodash/kebabCase';

import articles from '../../../data/articles.json';

const Articles = () => (
  <section>
    <div>Articles</div>
    {map(articles, article => (
      <div key={article.title}>
        <Link
          to={`/articles/${kebabCase(article.title)}`}
          style={{color: 'black'}}
        >
          {article.title}
        </Link>
      </div>
    ))}
  </section>
);

export default Articles;
