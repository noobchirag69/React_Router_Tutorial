import React from 'react'

export const Contact = () => {
  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Your Name" />
        <label>Email</label>
        <input type="email" placeholder="name@example.com" />
        <label>Message</label>
        <textarea placeholder="Type your message..."></textarea>
        <button>Send</button>
      </form>
    </div>
  )
}
