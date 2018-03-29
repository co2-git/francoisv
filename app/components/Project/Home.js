import React, {PureComponent} from 'react';
import map from 'lodash/map';

import projects from '../../../data/projects.json';
import Title from '../Base/Title';
import Project from './Project';

const Projects = () => (
  <div style={styles.container}>
    <Title>Projects</Title>
    <div>
      {map(projects, project => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  </div>
);

export default Projects;

const styles = {
  container: {
    margin: 10,
  },
};
