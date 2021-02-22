import React from 'react';
import '../sass/job.scss'


const Job = ({job, onFilterClick}) => {
    // const [jobItem, setJob] = useState(job);
    // const toggleFeatured = () => setJob(prev => {return {...prev, featured: !prev.featured}});
    // console.log(jobItem);
    // }
    const selectFilter = (event) => {
        
        return onFilterClick(event.target.innerHTML);
    };
    // const jobLogo = require('../img/photosnap.svg');
    const jobLogo = require('../img/' + job.logo);
    
    return (
        
        <div className={`job ${job.featured ? 'job_featured': ''}`}>
            <div className="job__logo"><img src={jobLogo.default} alt=""/></div>
            <div className="job__container">
            <div className="job__company">
                <h3>{job.company}</h3>
                {job.new&&<span className='new'>NEW!</span>}
                {job.featured&&<span className='featured'>FEATURED</span>}
            </div>
            <div className="job__position">{job.position}</div>
            <div className="job__details">
                <div>{job.postedAt}</div>
                <div>{job.contract}</div>
                <div>{job.location}</div>
            </div>
            </div>
            
            <div className="job__tags">
                <div className="job__tag"  onClick={selectFilter}>{job.role}</div>
                <div className="job__tag"  onClick={selectFilter}>{job.level}</div>
                {job.languages?.map((language, index) => <div key={index} className="job__tag"  onClick={selectFilter}>{language}</div>)}
                {job.tools?.map((tool, index )=> <div key={index} className="job__tag" onClick={selectFilter}>{tool}</div>)}
            </div>
        </div>
    )
}


export default Job;
