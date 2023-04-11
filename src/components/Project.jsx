import { React, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/components/Project.module.css';

export default function Project(props) {

    const [isScreenSmall, setIsScreenSmall] = useState();

    useEffect(function mount() {
        setIsScreenSmall(window.innerWidth < 1200);
        function getSize() {
            let size = window.innerWidth;
            if (size <= 1200)
                setIsScreenSmall(true);
            else
                setIsScreenSmall(false);
        }

        window.addEventListener("resize", getSize);

        return function unMount() {
            window.removeEventListener("resize", getSize);
        };
    });

    const bgType = props.id % 2 === 0 ? "1" : "2";

    return (
        <div className={"hidden-y container-fluid" + (
            props.type === "main" ? " " + styles['main-proj'] + "col-sm-12"
                : " " + styles['other-proj'] + " col-sm-6")}>
            <div className={styles['project'] + " justify-content-center " + styles['bg-' + bgType]}>

                <h2 className="section-title">{props.title}</h2>
                <hr className="separator" />
                <div className="row">
                    {props.images === undefined ? null :
                        <div className={"col-md-6" + (isScreenSmall ? "" : (bgType === "1" ? " order-1" : " order-2"))}>

                            <Carousel controls={false} variant="dark">
                                {props.images.map((image, index) => {
                                    return (
                                        <Carousel.Item key={index} className={styles['item']}>
                                            <img
                                                className="d-block"
                                                src={image.src}
                                                alt={props.title + " slide " + index}
                                            />
                                            <Carousel.Caption className={styles['caption']}>
                                                <p className={styles['caption-text']}>{image.caption}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>)
                                })}
                            </Carousel>
                        </div>
                    }

                    <div className={"col-" + (props.images === undefined ? "lg-12" : "md-6") +
                        (isScreenSmall ? "" : (bgType === "1" ? " order-2" : " order-1"))}>
                        <div className="row">
                            <div className={"col-" + (props.technologies === undefined ? "lg-12" : (props.type === "other" ? "6" : "md-12"))}>

                                <h3 className="sub-title">Languages:</h3>

                                <div className={styles['languages']}>
                                    {props.languages.map((language) => {
                                        return <span key={language.lang} className={"badge " + styles[language.type]}>{language.lang}</span>;
                                    })}
                                </div>
                            </div>

                            {props.technologies === undefined ? null :
                                <div className={"col-" + (props.type === "other" ? "6" : "md-12")}>
                                    <h3 className="sub-title">Technologies / Frameworks:</h3>
                                    <div className={styles['technologies']}>
                                        {props.technologies.map((technology) => {
                                            return <span key={technology.tech} className={"badge " + styles[technology.type]}>{technology.tech}</span>;
                                        })}
                                    </div>
                                </div>
                            }
                        </div>
                        <div className={styles['description' + (props.technologies === undefined ? "-notech" : null)]}>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
                <a href={props.link} className={styles['proj-link']} target="_blank">
                    <i className="fa-brands fa-github fa-5x" alt="github logo"></i>
                </a>
            </div>
        </div>
    );
}