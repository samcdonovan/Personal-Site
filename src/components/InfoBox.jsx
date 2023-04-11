import styles from '../styles/components/InfoBox.module.css';

export default function InfoBox(props) {
    return (
        <div className={styles['info-box'] + " col-lg-3 col-sm-6 hidden-x"}>
            <img className={props.imgPos} src={props.src} alt={props.alt} />
            <p>{props.title}</p>
        </div>
    );
}