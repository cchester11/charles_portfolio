import React, { useState } from 'react';

const Contact = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const clearForm = () => {
    setUsername('')
    setEmail('')
    setComments('')
  };
  return (
    <div id="contact-form" className="container-fluid d-flex align-items-center flex-column mt-5 mb-5 p-5">
      <div id="user-contact" className="form-group flex-row">
        {/* <label htmlFor="usr">Name:</label> */}
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} className="form-control" id="usr" placeholder={"Username"} />
      </div>
      <div id="email-contact" className="form-group flex-row">
        {/* <label htmlFor="pwd">Email:</label> */}
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} className="form-control" id="pwd" placeholder={"Email"} />
      </div>
      <div id="comment-contact" className="form-group flex-row">
        {/* <label htmlFor="comment">Comment:</label> */}
        <textarea className="form-control" value={comments} onChange={event => setComments(event.target.value)} rows={5} id="comment" placeholder={"Comments"} />
      </div>
      <button onClick={clearForm} type="button">Submit</button>
    </div>
  )
};

export default Contact;
