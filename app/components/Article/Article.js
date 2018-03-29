import React, {PureComponent} from 'react';
import Markdown from 'react-markdown';

export default class Article extends PureComponent {
  state = {article: null, error: null};
  componentDidMount = () => {
    const {article} = this.props.match.params;
    this.read(article);
  };
  render = () =>  (
    <section style={{margin: 20, fontSize: 16, lineHeight: 2}}>
      {!this.state.article && <div>Loading article</div>}
      {this.state.article && <Markdown source={this.state.article} />}
    </section>
  );
  read = async (article) => {
    const response = await fetch(`/article/${article}`);
    const md = await response.text();
    this.setState({article: md});
  };
}
