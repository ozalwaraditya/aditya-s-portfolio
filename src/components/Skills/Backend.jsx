import React from 'react';

const Backend = () => {
    const skills = [
        { name: "C#", level: "Intermediate" },
        { name: ".Net Development", level: "Basic" },
        { name: "SQL", level: "Intermediate" },
        { name: "Git", level: "Intermediate" },
    ];

    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Development</h3>

            <div className="skills__box">
                {/* First Column */}
                <div className="skills__group">
                    {skills.filter((_, index) => index % 2 === 0).map((skill, index) => (
                        <div className="skills__data" key={index}>
                            <i className="bx bx-badge-check"></i>
                            <div>
                                <h3 className="skills__name">{skill.name}</h3>
                                <span className="skills__level">{skill.level}</span>
                            </div>
                        </div>
                    ))}
                     {skills.filter((_, index) => index % 2 !== 0).map((skill, index) => (
                        <div className="skills__data" key={index}>
                            <i className="bx bx-badge-check"></i>
                            <div>
                                <h3 className="skills__name">{skill.name}</h3>
                                <span className="skills__level">{skill.level}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Backend;