import Meetups from '../components/Meetups/Meetups';
const DUMMY_DATA = [
    {
        id: 'm-1',
        title: 'React JS Meetup',
        image: 'https://digitalnovascotia.com/wp-content/uploads/2021/09/React.png',
        address: 'Room # 11, Malibu Street, Newyork',
        description: 'This is the first ReactJS Meetup at Newyork'
    },
    {
        id: 'm-2',
        title: 'Java Development Meetup',
        image: 'https://www.symphony-solutions.eu/wp-content/uploads/sites/6/2021/09/Java-meetup-1024x435.png',
        address: 'Room # 12, Malibu Street, Newyork',
        description: 'This is the Java Development Meetup at Newyork. In this meetup we will have different Java Developers who will share their experience with Java'
    },
    {
        id: 'm-3',
        title: 'Python Meetup',
        image: 'https://www.starttech.vc/wp-content/uploads/2019/02/athens-python-users-meetup.jpg',
        address: 'Room # 13, Malibu Street, Newyork',
        description: 'This is the Python Meetup at Newyork. In this meetup different Python Developers who will share their experience'
    },
    {
        id: 'm-4',
        title: 'NodeJS Meetup',
        image: 'https://res.cloudinary.com/devncode/image/upload/v1579406983/production_devncode/event/1579406981982.jpg',
        address: 'Room # 14, Malibu Street, Newyork',
        description: 'This is the NodeJS Meetup at Newyork. In this meetup we will have different NodeJS Developers who will share their experience with NodeJs'
    },
];
function AllMeetups() {
    return (
        <section>
            <h1>All Meetups</h1>
            <ul>
            <Meetups meetups={DUMMY_DATA} />
            </ul>
        </section>

    );
}

export default AllMeetups;