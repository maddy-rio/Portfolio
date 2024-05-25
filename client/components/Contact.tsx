import Nav from './Nav'
import Footer from './Footer'
import emailjs from 'emailjs-com';

  

function Contact() {

  
  function handleSubmit(event: React.FormEvent<HTMLFormElement> ) {
    event.preventDefault();
  
    emailjs.sendForm('service_p4a3rn1', 'template_8m3epo5', event.currentTarget, 'w5N7m0Zq4jOQsPjZO')
    .then((result) => {
      alert('Email successfully sent.\n' + result.text);
      window.location.reload();
    })
.catch((error) => {
  alert('Something went wrong!\n' + error.text);
  window.location.reload();
});
  }


    return (
        <>
          <Nav />
           <section className='contact'>
           <h1 className="page-header">Let's connect</h1>
           <p >Whether you want to chat about my projects, build something together, or combine forces to make more of a difference in the world, please fill out the form below. I'd love to hear from you!   </p>
           <form className="contact-form" onSubmit={handleSubmit}>
      <input type="name" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required></textarea>
      <button type="submit" >Submit form</button>
    </form>
           </section>

<Footer/>
      

</>
);
}

export default Contact
