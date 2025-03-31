import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/contact')({
  component: ContactComponent
});
const emailQueryParam ='subject=Portfolio Contact&body=Hi Greg, I found your portfolio and wanted to send a message...'
function ContactComponent() {
  const handleEmail = () => {
    window.location.href = `mailto:${import.meta.env.VITE_USER_EMAIL}?${emailQueryParam}`;
  };
  return (
      <div className ='flex flex-col  min-h-screen items-center justify-center  flex-wrap '>
        <p className=' text-center  w-full mb-8 '>
          Dead simple contact. no forms...
        </p>
        <button
          // className='btn bg-white text-black border-[#e5e5e5]'
          className='btn btn-primary rounded-2xl'
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
  );
}
