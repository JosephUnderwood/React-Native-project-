import { useState } from 'react';
import { CAMPSITES } from '../shared/campsites';
import DirectoryScreen from './DirectoryScreen';

// Setting up main somponent, which we will do as a function component using an arrow function
// in our component function, we are setting up a state variable, to hold our campsite array data
// since this is a list of campsites, we will name the state variable campsites,and by convention the function for setting this variable will be named setCampsites 
// we will pass the CAMPSITES array to the useState hook to initalise the campsites state variable equal to the array imported from the shared folder 

const Main = () => {
    const [campsites, setCampsites] = useState(CAMPSITES);

    // for now the main component will return the directory screen as its only componenet
    // and we will pass it a single prop called campsites that is equal to our state variable campsites
    return <DirectoryScreen campsites={campsites} />;
}

export default Main;