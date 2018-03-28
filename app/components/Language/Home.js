import React, {PureComponent} from 'react';
import map from 'lodash/map';
import range from 'lodash/range';
import filter from 'lodash/filter';
import orderBy from 'lodash/orderBy';

import Section from '../Base/Section';
import languages from '../../../data/languages.json';
import Icon from '../Base/Icon';
import flex from '../../styles/mixins/flex';
import border from '../../styles/mixins/border';
import * as fonts from '../../styles/vars/fonts';

export default class Language extends PureComponent {
  state = {
    languages: orderBy(languages, ['name'], ['asc']),
    search: '',
    orderBy: 'name',
    order: 'asc',
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
      <Section style={styles.filters}>
        <Icon name="filter" />
        <Section style={styles.filtersWrapper}>
          <Section style={styles.nameFilter}>
            <h4
              onClick={() => {
                this.setState({
                  languages: orderBy(this.state.languages, ['name'], ['asc']),
                  orderBy: 'name',
                  order: 'asc',
                });
              }}
            >
              Name
            </h4>
            {this.state.orderBy === 'name' && (
              <Icon
                name={this.state.order === 'asc' ? 'down-dir' : 'up-dir'}
                onClick={() => {
                  const order = this.state.order === 'asc' ? 'desc' : 'asc';
                  const _languages = orderBy(this.state.languages, ['name'], [order]);
                  this.setState({order, languages: _languages});
                }}
              />
            )}
          </Section>
          <Section style={styles.nameFilter}>
            <h4
              onClick={() => {
                this.setState({
                  languages: orderBy(this.state.languages, ['level'], ['desc']),
                  orderBy: 'level',
                  order: 'desc',
                });
              }}
            >
              Level
            </h4>
            {this.state.orderBy === 'level' && (
              <Icon
                name={this.state.order === 'desc' ? 'down-dir' : 'up-dir'}
                onClick={() => {
                  const order = this.state.order === 'desc' ? 'asc' : 'desc';
                  const _languages = orderBy(this.state.languages, ['level'], [order]);
                  this.setState({order, languages: _languages});
                }}
              />
            )}
          </Section>
        </Section>
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
  filters: {
    ...flex({direction: 'row', alignY: 'center', alignX: 'between'}),
    color: '#666',
  },
  filtersWrapper: {
    ...flex({direction: 'row', alignY: 'center', alignX: 'between'}),
    flexGrow: 2,
    margin: '0 10px',
  },
  nameFilter: {
    ...flex({direction: 'row', alignY: 'center'}),
  },
};
