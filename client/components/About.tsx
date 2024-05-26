import { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';

function About() {
  const listItems = [
    'Family time 🫂 - I love spending time with my family, especially my little nephew (Hunter 🤍) and of course Kit Kat 🐾(our fluffy cat)',
    'Fishing 🎣 - On a beautiful flat day, you\'ll find me out fishing for Gurny\'s with my partner',
    'Reformer 🧘🏻‍♀️ - Reformer pilates is my favourite way to get endorphins flowing in the morning!',
    'Walks 🌞 - A cruisy walk along the beachside or under the sun is my jam',
    'Reading 📚 - I mostly like diving into self development books but I\'m also now venturing into some romance',
    'Movies/TV Shows 🍿 - My all time favourite movies are the \'After\' series (Highly recommend if you love a drama/romance)',
    'Personal projects 👩🏻‍💻 - I currently spend a lot of free time working on personal projects to improve my coding skills',
    'Travelling 🏝️ - I\'ve been to Rarotonga (too many times), Aussie, and hope to go everywhere else!'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % listItems.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [listItems]);

  return (
    <>
      <Nav />
      <section>
        <h2 className='page-header'>About Me</h2>
        <div className="about-me">
          <p>
            I’m a Dev Academy graduate with a passion for Front-end Development. I love problem solving and am dedicated
            to continuous growth so tech seemed like the perfect place for me to be. I’m a very visual person hence my
            love for the front-end and have a background in customer support which has moulded my ability to understand
            how important user experience is.
          </p>
          <p>
            I'm passionate about working for a company that makes a difference and contributes to causes close to my
            heart such as animal welfare, women empowerment / getting more women into tech, women's refuge, and causes
            for the less fortunate. I believe in the power of technology to create positive change and am eager to be
            part of such impactful initiatives.
          </p>
        </div>
        <div className="about-me">
          <p className='hobbies'>
            When I'm not working, I enjoy spending my time indulging in...
          </p>
          <ul id='textList'>
            <li>
              <h1>{listItems[currentIndex].split(' - ')[0]}</h1>
              <p>{listItems[currentIndex].split(' - ')[1]}</p>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
