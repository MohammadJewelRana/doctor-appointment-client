import React, { useEffect, useState } from 'react';

const useDoctors = () => {

    
    const [doctor, setDoctor] = useState([]);
    const [doctorsDataLoading, setDoctorsDataLoading] = useState(true);

    useEffect( ()=>{
        fetch('doctorData.json')
        .then(res=>res.json())
        .then(data=> {
            setDoctor(data)
            setDoctorsDataLoading(false)
        })
    } ,[])

    return [doctor,doctorsDataLoading];

};

export default useDoctors;