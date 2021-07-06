import React from 'react';

const Contact = () => (
  <div id="contact-form" className="container-fluid d-flex align-items-center flex-column mt-5 mb-5 p-5">
    <div id="user-contact" className="form-group flex-row">
      {/* <label htmlFor="usr">Name:</label> */}
      <input type="text" className="form-control" id="usr" placeholder={"Username"}/>
    </div>
    <div id="email-contact" className="form-group flex-row">
      {/* <label htmlFor="pwd">Email:</label> */}
      <input type="password" className="form-control" id="pwd" placeholder={"Email"} />
    </div>
    <div id="comment-contact" className="form-group flex-row">
      {/* <label htmlFor="comment">Comment:</label> */}
      <textarea className="form-control" rows={5} id="comment" defaultValue={""} placeholder={"Comments"}/>
    </div>
    <button type="submit">Submit</button>
  </div>
);

export default Contact;
