const Stats = () => {
  return (
    <div className='stats stats-vertical md:stats-horizontal shadow'>
      <div className='stat'>
        <div className='stat-title'>Apps</div>
        <div className='stat-value'>7</div>
        <div className='stat-desc'>React Native Mobile Apps</div>
      </div>

      <div className='stat'>
        <div className='stat-title'>Users</div>
        <div className='stat-value'>5 Million</div>
        <div className='stat-desc'>Estimated</div>
      </div>

      <div className='stat'>
        <div className='stat-title'>
          CVE (Common Vulnerabilities and Exposures)
        </div>
        <div className='stat-value'>20,000</div>
        <div className='stat-desc'>Resolved</div>
      </div>
    </div>
  );
};

export default Stats;
