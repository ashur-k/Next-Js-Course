// /api/new-meetup // Sending request to this URL
// Only Post request will trigger this code
import { MongoClient } from 'mongodb';

async function handler(req, res) {
  // the req object is need for incoming request
  // res for sending back the response

  if (req.method === 'POST') {
    const data = req.body;

    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      'mongodb+srv://ashur:12341234@cluster0.dllo5.mongodb.net/meetups?retryWrites=true&w=majority'
      );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({message: 'Meetup inserted!'});

  }
}

export default handler;

// root
// r00tUser

// got from toutorial
// mongodb+srv://<username>:<password>@cluster0.ntrwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// copy pasted from mongodb
// mongodb+srv://<username>:<password>@cluster0.dllo5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority