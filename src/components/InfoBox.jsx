
export default function InfoBox(props) {
    return (
        <div className="info-box col-lg-3">
            <img className={props.imgPos} src={props.src} alt={props.alt} />
            <h3 className="sub-title">{props.title}</h3>
        </div>
    );
}