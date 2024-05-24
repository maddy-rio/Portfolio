import Nav from './Nav'
import Footer from './Footer'

  

function Contact() {

  
//   function handleSubmit(event) {
//     event.preventDefault();
  
//     emailjs.sendForm('service_co61l7f', 'template_jvtxwbm', event.target, 'w5N7m0Zq4jOQsPjZO')
//     .then((result) => {
//       alert('Email successfully sent.', result.text);
//       window.location.reload();
// })
// .catch((error) => {
//   alert('Something went wrong!', error.text);
//   window.location.reload();
// });
//   }


    return (
        <>
          <Nav />
           <section>
           <h1 className="page-header">Let's connect</h1>
           <p>Whether you want to chat about my projects, build something together, or combine forces to make more of a difference in the world, please fill out the form below. I'd love to hear from you!   </p>
           <form className="contact-form" >
      <input type="name" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required></textarea>
      <button type="submit" >Submit</button>
    </form>
           </section>

<Footer/>
      

</>
);
}

export default Contact
