import cssClasses from './NewMeetupForm.module.css';

import Card from '../../UI/Card/Card';

import { useRef } from 'react';
function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();


    function submitHandler (event) {
        event.preventDefault();

        const title = titleInputRef.current.value;
        const imageUrl = imageInputRef.current.value;
        const address = addressInputRef.current.value;
        const description = descriptionInputRef.current.value;

        const data = {
            title: title,
            image: imageUrl,
            addres: address,
            description: description
        };

        props.onAddMeetup(data);
        
        
    }

    return (
        <Card>
            <form className={cssClasses.form} onSubmit={submitHandler}>
                <h2 className={cssClasses.heading}>Create New Meetup</h2>
                <hr />
                <div className={cssClasses.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div className={cssClasses.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={cssClasses.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id="address" ref={addressInputRef} />
                </div>
                <div className={cssClasses.control}>
                    <label htmlFor="description">Description</label>
                    <textarea required id="description" rows="5" ref={descriptionInputRef}></textarea>
                </div>
                <div className={cssClasses.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;