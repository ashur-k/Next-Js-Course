import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta 
                    name="description" 
                    content={props.meetupData.description}
                />
            </Head>        
            <hr />
            <h2 style={{textAlign:'center', color:'#77002e'}}>{props.meetupData.title}</h2>
            <hr/>
            <MeetupDetail
                image={props.meetupData.image}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />         
        </Fragment>
        
    );
}

// page is pregenreated during the built process
export async function getStaticPaths() {

    const client = await MongoClient.connect(
        'mongodb+srv://ashur:12341234@cluster0.dllo5.mongodb.net/meetups?retryWrites=true&w=majority'
        );
    const db = client.db();
  
    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, { _id:1 }).toArray();
    
    //console.log("MEETUPS", meetups)
    
    client.close();


    return {
        fallback: 'blocking',
        paths: meetups.map((meetup )=> ({ 
            params: { meetupId: meetup._id.toString() },
         })),
        };       
    }


export async function getStaticProps(context) {
    // fetch data for a single meetup
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(
        'mongodb+srv://ashur:12341234@cluster0.dllo5.mongodb.net/meetups?retryWrites=true&w=majority'
        );
    const db = client.db();
  
    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId),
    });
    
    //console.log("MEETUPS", meetups)
    
    client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        }
    }
}

export default MeetupDetails;

// getStaticPAths is a function that we need to export in page if we have dynamic data