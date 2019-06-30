import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header/Header';
import Post from './components/Post/Post';

import './style.scss';

class App extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        avatar: '/images/avatar1.png',
        author: 'Arrow',
        date: 'há 2 horas',
        body:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed asperiores alias repellat aliquid odit quisquam quos sapiente, beatae cum? Saepe deleniti neque, quibusdam officia ipsam fuga aut culpa? Ex, id?',
      },
      {
        id: 2,
        avatar: '/images/avatar2.png',
        author: 'Random woman 1',
        date: 'há 4 meses',
        body:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed asperiores alias repellat aliquid odit quisquam quos sapiente, beatae cum? Saepe deleniti neque, quibusdam officia ipsam fuga aut culpa? Ex, id?',
      },
      {
        id: 3,
        avatar: '/images/avatar3.png',
        author: 'Random woman 2',
        date: 'há 1 semana',
        body:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed asperiores alias repellat aliquid odit quisquam quos sapiente, beatae cum? Saepe deleniti neque, quibusdam officia ipsam fuga aut culpa? Ex, id?',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
        <Header text="LucasBook" />
        <Post posts={posts} />
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
