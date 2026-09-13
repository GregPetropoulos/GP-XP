const Stats = () => {
  return (
    <div className='stats stats-vertical md:stats-horizontal shadow'>
      <div className='stat'>
        <div className='stat-title'>Apps</div>
        <div className='stat-value'>7</div>
        <div className='stat-desc'>React Native production apps shipped</div>
      </div>

      <div className='stat'>
        <div className='stat-title'>Users</div>
        <div className='stat-value'>200,000+</div>
        <div className='stat-desc'>Largest single-app audience</div>
      </div>

      <div className='stat'>
        <div className='stat-title'>
          CVE (Common Vulnerabilities and Exposures)
        </div>
        <div className='stat-value'>70</div>
        <div className='stat-desc'>Remediated on a production IoT mobile app</div>
      </div>
    </div>
  );
};

export default Stats;
