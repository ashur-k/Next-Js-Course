import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const router = useRouter()

    async function addMeetupHandler(enteredMeetupData) {
        
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json(); 
        console.log(data);
        router.push('/')
    }

    return (
        <Fragment>
            <Head>
                <title>Add a ne Meetup</title>
                <meta 
                    name="description" 
                    content="Add you own meetups and create amazing neteorking opportunities"
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Fragment>
        

    ) 
}

export default NewMeetupPage