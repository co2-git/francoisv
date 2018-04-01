import React, {PureComponent} from 'react';
import Markdown from 'react-markdown';
import Gist from 'react-gist';

export default class Article extends PureComponent {
  state = {article: null, error: null};
  componentDidMount = () => {
    const {article} = this.props.match.params;
    this.read(article);
  };
  render = () =>  (
    <section style={{margin: 20, fontSize: 16, lineHeight: 2}}>
      {!this.state.article && <div>Loading article</div>}
      {this.state.article && (
        <Markdown
          escapeHtml={false}
          renderers={{
            link: props => {
              if (/^https:\/\/gist\.github\.com\//.test(props.href)) {
                const id = props.href.replace(/^https:\/\/gist\.github\.com\/(.+)\/(.+)\.js$/, '$2');
                return <Gist id={id} />;
              }
              return <a href={props.href} target="_blank">{props.children}</a>;
            }
          }}
          source={this.state.article}
        />
      )}
    </section>
  );
  read = async (article) => {
    const response = await fetch(`/article/${article}`);
    const md = await response.text();
    this.setState({article: md});
  };
}
