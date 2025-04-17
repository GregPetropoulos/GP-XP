
const Footer = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  return (
    <footer className="w-full flex justify-center bg-linear-to-b from-base to-base-300 shadow-sm ">
      <div className='text-center m-4 mt-9'>
        <p>Created by Greg Petropoulos</p>
        <p>copyright 2021-{currentYear}</p>
      </div>
    </footer>
  );
};



export default Footer