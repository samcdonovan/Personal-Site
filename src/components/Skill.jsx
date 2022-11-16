
export default function Skill(props) {
    return (
        <div className="skill-row">
            <img className={props.imgPos} src={props.src} alt={props.alt} />
            <h3 className="sub-title">{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}