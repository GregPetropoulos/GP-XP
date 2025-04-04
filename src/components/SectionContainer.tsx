import type { PropsWithChildren } from 'react';

const SectionContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className={'flex flex-col w-full my-4  max-w-4xl'}>{children}</div>
  );
};

export default SectionContainer;
