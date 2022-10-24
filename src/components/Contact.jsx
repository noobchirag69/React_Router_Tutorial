import React from 'react'

export const Contact = () => {
  return (
    <div className="contact"> 
        <h1>Get in Touch</h1>      
        <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="name@example.com"/>
            <textarea placeholder="Type your message..."></textarea>
            <button>Send</button>
        </form>
    </div>
  )
}
