import cssClasses from './Card.module.css';
function Card(props) {
    return (
        <div className={cssClasses.card}>
            {props.children}
        </div>
    );
}
export default Card;