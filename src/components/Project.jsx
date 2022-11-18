import React from 'react';

export default function Project(props) {
    return (
        <div className="container-fluid">
            <div className={"project justify-content-center bg-" + (props.id % 2 === 0 ? "1" : "2")}>

                <h2 className="section-title">{props.title}</h2>
                <hr className="separator" />

                <div className="row">
                    <div className={"col-" + (props.technologies === undefined ? "lg-12" : "md-6")}>

                        <h3 className="sub-title">Languages:</h3>

                        <div className="languages">
                            {props.languages.map((language) => {
                                return <span key={language.lang} className={"badge " + language.type}>{language.lang}</span>;
                            })}
                        </div>
                    </div>

                    {props.technologies === undefined ? null :
                        <div className="col-md-6">
                            <h3 className="sub-title">Technologies / Frameworks:</h3>
                            <div className="technologies">
                                {props.technologies.map((technology) => {
                                    return <span key={technology.tech} className={"badge " + technology.type}>{technology.tech}</span>;
                                })}
                            </div>
                        </div>
                    }
                </div>
                <div className="description">
                    <p>{props.description}</p>
                </div>
                <a href={props.link} className="proj-link" target="_blank">
                    <i className="fa-brands fa-github fa-5x" alt="github logo"></i>
                </a>
            </div>
        </div>
    );
}