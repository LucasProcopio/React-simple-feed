import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from '../PostHeader/PostHeader';

import './post.scss';

const Post = (props) => {
  const { posts } = props;
  return (
    <React.Fragment>
      {posts.map(post => (
        <div className="post" key={post.id}>
          <PostHeader avatar={post.avatar} author={post.author} date={post.date} />
          <div className="post-body">{post.body}</div>
        </div>
      ))}
    </React.Fragment>
  );
};

Post.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Post;
