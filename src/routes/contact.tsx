import { createFileRoute } from '@tanstack/react-router';
import PageTitle from '../components/PageTitle';

export const Route = createFileRoute('/contact')({
  component: ContactComponent
});

function ContactComponent() {
  const handleEmail = () => {
    window.location.href = `mailto:${import.meta.env.VITE_USER_EMAIL}?subject=Portfolio Contact&body=Hi Greg, I found your portfolio and wanted to send a message...`;
  };
  return (
    <>
      <PageTitle title='Contact' />
      <div className='justify-center h-screen text-center'>
        <p className='w-full text-center m-3'>
          Dead simple contact. no forms...
        </p>
        <button
          className='btn bg-white text-black border-[#e5e5e5]'
          onClick={handleEmail}>
          <svg
            aria-label='Email icon'
            width='16'
            height='16'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <g
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='2'
              fill='none'
              stroke='black'>
              <rect width='20' height='16' x='2' y='4' rx='2'></rect>
              <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
            </g>
          </svg>
          Send an Email
        </button>
        {/*TODO  ANIMATION HERE */}
      </div>
    </>
  );
}
