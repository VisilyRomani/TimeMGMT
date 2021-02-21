// import React from 'react';

function Project(data){

    // let [proj_name, proj_data] = ["1", "2"];
    // console.log(data.data[0][0].proj_name);
    let proj;
    console.log(data.data)
    if (data.data[0] === undefined && data.data[0] == undefined){
        console.log("undef");
        proj = "udnef";    
    }else{
        console.log(data.data[0])
        
        // console.log(data.data[0][0].proj_name)
        // proj = data.data[0][0].proj_name;
    }

    return(
        <div>
            <h1>{proj}</h1>
        </div>
    )
}

export default Project;