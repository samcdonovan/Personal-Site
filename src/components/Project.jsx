import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Project(props) {
    /*
    
                                <Carousel.Item className="item">
                                    <img
                                        className="d-block"
                                        src="img/projects/sentiment1.png"
                                        alt="First slide"
                                    />
    
                                    <Carousel.Caption>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="item">
                                    <img
                                        className="d-block"
                                        src="img/projects/sentiment2.png"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="item">
                                    <img
                                        className="d-block"
                                        src="img/projects/sentiment4.png"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                */
    const bgType = props.id % 2 === 0 ? "1" : "2";
    return (
        <div className="container-fluid">
            <div className={"project justify-content-center bg-" + bgType}>

                <h2 className="section-title">{props.title}</h2>
                <hr className="separator" />
                <div className="row">
                    {props.images === undefined ? null :
                        <div className={"col-md-6" + (bgType === "1" ? " order-1" : " order-2")}>

                            <Carousel controls={false} variant="dark">
                                {props.images.map((image, index) => {
                                    return (
                                        <Carousel.Item className="item">
                                            <img
                                                className="d-block"
                                                src={image.src}
                                                alt={props.title + " slide " + index}
                                            />
                                            <Carousel.Caption className="caption">
                                                <p className="caption-text">{image.caption}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>)
                                })}
                            </Carousel>
                        </div>
                    }

                    <div className={"col-" + (props.images === undefined ? "lg-12" : "md-6") + (bgType === "1" ? " order-2" : " order-1")}>
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
                    </div>
                </div>
                <a href={props.link} className="proj-link" target="_blank">
                    <i className="fa-brands fa-github fa-5x" alt="github logo"></i>
                </a>
            </div>
        </div>
    );
}