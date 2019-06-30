import React from 'react';
import PropTypes from 'prop-types';
import './post-header.scss';

const PostHeader = (props) => {
  const { avatar, author, date } = props;
  return (
    <div className="post-header">
      <div className="image" style={{ backgroundImage: `url(${avatar})` }} />
      <div className="post-header-content">
        <h4>{author}</h4>
        <p>{date}</p>
      </div>
    </div>
  );
};

PostHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default PostHeader;
