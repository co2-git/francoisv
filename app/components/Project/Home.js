import React, {PureComponent} from 'react';
import map from 'lodash/map';

import projects from '../../../data/projects.json';
import Page from '../Base/Page';
import Project from './Project';

const Projects = () => (
  <Page title="Projects">
    <div>
      {map(projects, project => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  </Page>
);

export default Projects;

const styles = {
  container: {
    margin: 10,
  },
};
