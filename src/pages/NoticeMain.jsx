import React from 'react';
import '../styles/notice.css';

function NoticeMain(props) {
  return (
    <div className='notice'>
      <h5>{props.title}</h5>
      <p className='noticeDate'>{props.date}</p>
      <p>{props.content}</p>
    </div>
  );
}

export default NoticeMain;
