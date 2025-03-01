import React from 'react';

const CloudNative = () => {
    const skills = [
        { name: "Shell Scripting", level: "Intermediate" },
        { name: "Linux", level: "Intermediate" },
        { name: "Amazon EC2", level: "Intermediate" },
        { name: "Lambda Fn", level: "Intermediate" }
    ];

    return (
        <div className="skills__content">
            <h3 className="skills__title">Cloud Native</h3>

            <div className="skills__box">
                {/* First Column */}
                <div className="skills__group">
                    {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
                        <div className="skills__data" key={index}>
                            <i className="bx bx-badge-check"></i>
                            <div>
                                <h3 className="skills__name">{skill.name}</h3>
                                <span className="skills__level">{skill.level}</span>
                            </div>
                        </div>
                    ))}
                     {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
                        <div className="skills__data" key={index}>
                            <i className="bx bx-badge-check"></i>
                            <div>
                                <i class="fa-solid fa-lambda"></i>
                                <h3 className="skills__name">{skill.name}</h3>
                                <span className="skills__level">{skill.level}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second Column */}
                <div className="skills__group">
                   
                </div>
            </div>
        </div>
    );
}

export default CloudNative;
