import NewMeetupForm from "../components/Meetups/NewMeetupForm/NewMeetupForm";
import {useHistory} from 'react-router-dom';

function NewMeetup() {
    const history = useHistory();

    function addMeetupHandler(meetupData) {
        fetch("https://reactprojects-74b70-default-rtdb.firebaseio.com/meetup.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(()=> {
            history.replace('/');
        });

    }

    return (
        <section>
            <h1>New Meetup Page</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
        
    );
}

export default NewMeetup;