import Hero from './components/Hero';
import Section from './components/Section';

function Home() {
  return (
    <>
      <Hero />
      <Section Title='Popular' />
      <Section Title='New' />
    </>
  );
}

export default Home;

//Get Popular and New items and pass down through props
