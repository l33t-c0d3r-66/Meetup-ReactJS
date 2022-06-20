import cssClasses from './MeetupItems.module.css';
import Card from '../../UI/Card/Card';
function MeetupItem(props) {
    return (
       <li className={cssClasses.item}>
        <Card>
            <div className={cssClasses.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={cssClasses.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={cssClasses.actions}>
                <button>Add to Favorite</button>
            </div>
        </Card>
       </li>
    );
}

export default MeetupItem;