import Meetups from '../components/Meetups/Meetups';
import { useEffect, useState } from 'react';
import Spinner from '../components/UI/Spinner/Spinner';

function AllMeetups() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        fetch("https://reactprojects-74b70-default-rtdb.firebaseio.com/meetup.json")
        .then(response => {
            return response.json();
        }).then(data => {
            const meetups = [];
            for(let key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                }
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    }, []);


    if(isLoading) {
        return (
            <section>
                <Spinner />
            </section>
        );
    }

    return (
        <section>
            <h1 style={{textAlign: 'center'}}>All Meetups</h1>
            <ul>
            <Meetups meetups={loadedMeetups} />
            </ul>
        </section>

    );
}

export default AllMeetups;