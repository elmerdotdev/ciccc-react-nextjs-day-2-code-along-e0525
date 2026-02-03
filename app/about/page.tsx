import { Metadata } from 'next';
import Counter from '../components/Counter';

export const metadata: Metadata = {
  title: 'About Us | My App',
  description: 'This is the about page.',
};

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <Counter />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque quae
        delectus? Ab ad fugit dolorem dolore impedit. Dignissimos,
        exercitationem? Eos assumenda eum sunt cumque culpa, architecto,
        deserunt perspiciatis itaque minima dolores rem ad, perferendis vero
        quidem est voluptates id? Nisi quae veniam, amet atque alias molestias
        assumenda recusandae delectus qui eligendi voluptatibus quam.
        Perferendis totam minus delectus laboriosam natus numquam ab, eligendi
        quidem, cum enim dolorum quibusdam ipsum provident, repellat facere
        sapiente rem nemo quae illum tempore assumenda sequi. Molestias illum
        laboriosam fugiat ducimus minima, voluptates libero amet, accusantium
        nisi eius maxime praesentium! Culpa provident voluptatibus
        necessitatibus eius unde.
      </p>
    </div>
  );
};

export default About;
