const MainFooter = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  return (
    <section>
      <div className='text-center'>
        <p>Created by Greg Petropoulos</p>
        <p>copyright 2021-{currentYear}</p>
      </div>
    </section>
  );
};

export default MainFooter;
