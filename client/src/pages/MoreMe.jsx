import { Link } from 'react-router-dom';
import Corps from '../assets/images/desktop/corps.jpeg';

const MoreMe = () => {
  return (
    <div className='hero min-h-screen'>
      <img src={Corps} alt='Marines' />
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>
            Hi I am still working on this page
          </h1>
          <p className='mb-5'>
            A bit more on me, I was honored to serve in the U.S. Marines
          </p>
          <Link to='/'>
            <button className='btn btn-primary'>Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoreMe;
