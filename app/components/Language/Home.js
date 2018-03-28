import React, {PureComponent} from 'react';
import map from 'lodash/map';
import range from 'lodash/range';
import filter from 'lodash/filter';

import Section from '../Base/Section';
import languages from '../../../data/languages.json';
import Icon from '../Base/Icon';
import flex from '../../styles/mixins/flex';
import border from '../../styles/mixins/border';
import * as fonts from '../../styles/vars/fonts';

export default class Language extends PureComponent {
  state = {
    languages: [...languages],
    search: '',
  };
  render = () => (
    <Section style={styles.container}>
      <Section style={styles.header}>
        <h1 style={styles.title}>Languages</h1>
        <input
          onChange={this.onChangeSearch}
          placeholder="Search languages"
          style={styles.input}
          type="text"
          value={this.state.search}
        />
      </Section>
      {map(this.state.languages, language => (
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
        </Section>
      ))}
    </Section>
  );
  onChangeSearch = (event) => {
    const {value} = event.target;
    if (!value) {
      this.setState({search: value, languages: [...languages]});
    } else {
      this.setState({
        languages: filter(
          languages,
          language => new RegExp(value, 'i').test(language.name)
        ),
        search: value,
      });
    }
  };
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
  header: {
    ...flex({direction: 'row', alignY: 'center'}),
  },
  input: {
    flexGrow: 2,
    fontSize: 22,
    lineHeight: 1.5,
    padding: 2,
    marginLeft: 25,
  },
};
