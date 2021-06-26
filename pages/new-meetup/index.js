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
                <title>Add a new Meetup</title>
                <meta 
                    name="description" 
                    content="Add you own meetups and create amazing neteorking opportunities"
                />
            </Head>
            <hr/>
            <h2 style={{textAlign:'center', color:'#77002e'}}>ADD NEW MEETUP PAGE</h2>
            <hr/>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Fragment>
        

    ) 
}

export default NewMeetupPage