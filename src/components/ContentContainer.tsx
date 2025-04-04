import type { PropsWithChildren } from 'react';

const ContentContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex justify-center px-2.5 sm:px-5 flex-wrap'>
      {children}
    </div>
  );
};

export default ContentContainer;
