import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb'
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg',
        address: '65 Josh Town 555PPP',
        description: 'This is First Meetup',
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://besthqwallpapers.com/img/original/107927/munich-german-city-landmark-munich-cityscape-summer.jpg',
        address: '66 Josh Town 555PPP',
        description: 'This is First Meetup',
    },
    {
        id: 'm3',
        title: 'A Third Meetup',
        image: 'https://www.wandering-bird.com/wp-content/uploads/2019/08/biggest-christmas-market-europe-munich-1024x683.jpg',
        address: '67 Josh Town 555PPP',
        description: 'This is First Meetup',
    },
    {
        id: 'm4',
        title: 'A Fourth Meetup',
        image: 'https://www.photofancy.de/bundles/app/images/products/opengraph/og_muenchen.jpg',
        address: '68 Josh Town 555PPP',
        description: 'This is First Meetup',
    },
    {
        id: 'm5',
        title: 'A Fifth Meetup',
        image: 'https://www.muenchen.de/rathaus/.imaging/mte/lhm/teaser-big-image/dam/Home/Stadtverwaltung/Direktorium/Muenchner-Originale/Fotos_allg/Kapitel_1/jcr:content/Kapitel_1.jpg',
        address: '69 Josh Town 555PPP',
        description: 'This is First Meetup',
    },
];

function HomePage(props){

    return (
        <Fragment>
            <Head>
                <title>Meetups</title>
                <meta 
                    name="description" 
                    content="Appplication made by following Next JS react Meetups"
                />
            </Head>
            <hr />
            <h2 style={{textAlign:'center', color:'#77002e'}}>HOME PAGE</h2>
            <hr/>
            <MeetupList meetups={props.meetups} />
        </Fragment>
        
        )
}

export async function getStaticProps() {
    //fetch data from an api
    const client = await MongoClient.connect(
        'mongodb+srv://ashur:12341234@cluster0.dllo5.mongodb.net/meetups?retryWrites=true&w=majority'
        );
    const db = client.db();
  
    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();
    console.log("MEETUPS", meetups)
    client.close();

    return{
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            })),
        },
        // it makes page regenrate 10 sec
        // if they are requests are coming  
        revalidate:10 
    };
}


export default HomePage;

// export async function getServerSideProps(context) {
//     // fetch data from an API
//     const req = context.req;
//     const res = context.res;

//     return {
//         props:{
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }


