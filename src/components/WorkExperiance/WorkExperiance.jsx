import React, { useContext } from 'react'
import WorkExperianceCard from './WorkExperianceCard'
import { dataContext } from '../../DataContext'
import "./WorkExperiance.css"
const WorkExperiance = () => {
    const [data, setContextData] = useContext(dataContext);
    const workExperience = data.workExperience;
    return (
        <section id="work__experience">
            <div className="content-section ">
                <h2>Work Experience</h2>
                <div className="section-container">
                    {
                        workExperience.map((job) => {
                            console.log(job.id);
                            return (<WorkExperianceCard key={job.id} job={job} />);
                        })
                    }
                </div>
            </div>
        </section>


    )
}

export default WorkExperiance
