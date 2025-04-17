import type { PropsWithChildren } from 'react';

const ContentContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex justify-center px-5 sm:px-10 '>
      <div className='flex flex-col w-full items-center  max-w-4xl'>

      {children}
      </div>
    </div>
  );
};

export default ContentContainer;
