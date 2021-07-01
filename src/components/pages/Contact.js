import React from 'react';

const Contact = () => (
  <div id="contact-form" className="container-fluid d-flex justify-content-around align-items-center flex-column mt-5 mb-5 p-5">
    <div classname="form-group flex-row">
      {/* <label htmlFor="usr">Name:</label> */}
      <input type="text" classname="form-control" id="usr" placeholder={"Username"}/>
    </div>
    <div classname="form-group flex-row">
      {/* <label htmlFor="pwd">Email:</label> */}
      <input type="password" classname="form-control" id="pwd" placeholder={"Email"} />
    </div>
    <div classname="form-group flex-row">
      {/* <label htmlFor="comment">Comment:</label> */}
      <textarea classname="form-control" rows={5} id="comment" defaultValue={""} placeholder={"Comments"}/>
    </div>
    <button type="submit">Submit</button>
  </div>
);

export default Contact;
