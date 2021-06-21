import React, { useState, createContext } from 'react'
import { Courses_list, ProjectsData, skills, workExperience } from "./data"

export const dataContext = createContext()

const DataProvider = (props) => {
    const [data, setdata] = useState({Courses_list,ProjectsData,skills,workExperience});
    return <dataContext.Provider value={[data, setdata]}> {props.children} </dataContext.Provider>;
};

export default DataProvider