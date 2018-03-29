import React, {PureComponent} from 'react';
import map from 'lodash/map';

import projects from '../../../data/projects.json';
import Title from '../Base/Title';
import Section from '../Base/Section';
import flex from '../../styles/mixins/flex';
import Icon from '../Base/Icon';

export default class Project extends PureComponent {
  render = () => (
    <div style={styles.container}>
      <Title>Projects</Title>
      <div>
        {map(projects, project => (
          <div key={project.name}>
            <Section style={styles.projectHeader}>
              <h3 style={{flexGrow: 2}}>{project.name}</h3>
              <Section style={styles.projectLinks}>
                {project.links.github && (
                  <a href={project.links.github} target="_blank">
                    <Icon name="github" />
                  </a>
                )}
                {project.links.npm && (
                  <a href={project.links.npm} target="_blank">
                    npm
                  </a>
                )}
              </Section>
            </Section>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: 10,
  },
  projectHeader: {
    ...flex({direction: 'row', alignY: 'center', alignX: 'between'}),
  },
  projectLinks: {
    ...flex({direction: 'row', alignY: 'center'}),
  },
};
