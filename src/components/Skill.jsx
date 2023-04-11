import styles from '../styles/components/Skill.module.css';

export default function Skill(props) {
    return (
        <div className={styles['skill-row'] + " hidden-x"}>
            <img className={props.imgPos} src={props.src} alt={props.alt} />
            <h3 className="sub-title">{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}