import React, {PureComponent} from 'react';
import map from 'lodash/map';
import range from 'lodash/range';

import Section from '../Base/Section';
import languages from '../../../data/languages.json';
import Icon from '../Base/Icon';
import flex from '../../styles/mixins/flex';
import border from '../../styles/mixins/border';
import * as fonts from '../../styles/vars/fonts';

export default class Language extends PureComponent {
  render = () => (
    <Section style={styles.container}>
      <h1 style={styles.title}>Knowledge</h1>
      {map(languages, language => (
        <Section style={styles.language}>
          <div style={styles.languageName}>{language.name}</div>
          <div style={styles.stars}>
            {map(range(0, language.level), number => (
              <Icon name="star" />
            ))}
            {map(range(0, (5 - language.level)), number => (
              <Icon name="star-empty" />
            ))}
          </div>
          <div>{language.years} years of experience</div>
        </Section>
      ))}
    </Section>
  );
}

const styles = {
  container: {
    margin: 6,
  },
  language: {
    ...flex({direction: 'row', alignY: 'center'}),
    ...border({width: 1}),
    padding: 10,
    margin: '4px 0',
    borderRadius: 3,
  },
  languageName: {
    fontWeight: 'bold',
    fontFamily: fonts.family.title,
    fontSize: fonts.size.pageTitle,
  },
  title: {
    fontWeight: 'bold',
    fontFamily: fonts.family.title,
    fontSize: 24,
  },
  stars: {
    padding: 8,
  },
};
