import type { CollapsableProps } from '../models';
const Collapse = ({ title, listOfItems, singleItem }: CollapsableProps) => {
  return (
    <div className=' w-full flex justify-center sm:justify-start   '>
      <div className='collapse collapse-arrow bg-base-300  border my-4 w-4/5 sm:w-1/3 '>
        <input type='checkbox' />
        <div className='collapse-title text-lg font-semibold'>
          {title ?? ''}
        </div>
        <div className='collapse-content   border-t-2 border-primary'>
          <div className='overflow-auto max-h-44'>
            {listOfItems && listOfItems.length > 0 ? (
              listOfItems.map((item, idx) => (
                <p key={idx} className=' pr-2 my-2'>
                  {listOfItems.length - 1 === idx ? `${item}` : `${item}, `}
                </p>
              ))
            ) : (
              <p>{singleItem}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
