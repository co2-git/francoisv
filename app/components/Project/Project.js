import React from 'react';

import Section from '../Base/Section';
import Icon from '../Base/Icon';
import flex from '../../styles/mixins/flex';
import border from '../../styles/mixins/border';
import margin from '../../styles/mixins/margin';

const Project = ({project}) => (
  <div style={styles.container}>
    <Section style={styles.header}>
      <h3 style={{flexGrow: 2}}>{project.name}</h3>
      <Section style={styles.links}>
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
);

export default Project;

const styles = {
  container: {
    ...margin({vertical: 4}),
    ...border({width: 1}),
    padding: 10,
    borderRadius: 4,
  },
  header: {
    ...flex({direction: 'row', alignY: 'center', alignX: 'between'}),
  },
  links: {
    ...flex({direction: 'row', alignY: 'center'}),
  },
};
