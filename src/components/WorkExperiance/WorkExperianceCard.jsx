import React from 'react'
import "./WorkExperianceCard.css"

const monthes = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

const monthDiff = (startDate,endDate)=>{
    console.log(startDate);
    console.log(endDate)
    let  monthsCount = 12 - startDate.getMonth();
    monthsCount += endDate.getMonth();
    monthsCount += (endDate.getFullYear() - startDate.getFullYear()) * 12 - 12;
    let yearsCount =0
    while (monthsCount >= 12){
        yearsCount += 1
        monthsCount -= 12;
    }
    
    return {yearsCount,monthsCount};
}

const WorkExperianceCard = (props) => {
    const {job} = props
    const startDate = new Date(job.startDate);
    const endDate = job.endDate ? new Date(job.endDate) : "";
    const duration = monthDiff(startDate, endDate || new Date());
    const startDateString =  monthes[startDate.getMonth()] + " " + startDate.getFullYear()
    const endDateString =  (endDate === "") ? "present" : (monthes[endDate.getMonth()] + " " + endDate.getFullYear())
    console.log(duration)
    return (
        <div className="Work__Experiance__Card">
            <h3>{job.jobTitle}</h3>
            <h4>{job.company+" . "+job.type}</h4>
            <pre className="Wrok__Experienc__details">{job.details}</pre>
            <pre>{startDateString} - {endDateString}  <pre>{duration.yearsCount + " yrs " + duration.monthsCount + " mos"} </pre></pre>
            <h5>{job.country}</h5>
        </div>
    )
}

export default WorkExperianceCard
