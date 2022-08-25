import { useState } from 'react';
import { View } from 'react-native';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import { CAMPSITES } from '../shared/campsites';
import DirectoryScreen from './DirectoryScreen';

// Setting up main somponent, which we will do as a function component using an arrow function
// in our component function, we are setting up a state variable, to hold our campsite array data
// since this is a list of campsites, we will name the state variable campsites,and by convention the function for setting this variable will be named setCampsites 
// we will pass the CAMPSITES array to the useState hook to initalise the campsites state variable equal to the array imported from the shared folder 

const Main = () => {
    const [campsites, setCampsites] = useState(CAMPSITES);
    const [selectedCampsiteId, setSelectedCampsiteId] = useState();

    // for now the main component will return the directory screen as its only componenet
    // and we will pass it a single prop called campsites that is equal to our state variable campsites

    // adding in campsite info screen - we want to show below the directory, but in react since each componenet must only return one parent tag, we can wrap both the directoryscreen and the campsite infoscreen in a view tag
    // when we wrote the campsiteinfoscreen componenet, it is expecting a single prop named campsite to be passed to it so it knows what campsite to render
    // how do we know what campsite data to pass into the prop - we have an array of campsites stored in the campsites state variable that we can use to filter out only the campsite that the user has selected
    // we do that by filtering for a campsite that matches the id of a selected campsite id
    // since the filter method returns an array, and we know this will be an array with only one item in it, we can just return the 0 index from the filtered array
    // to define a seledcted campsite id variable for holding the id of a campsite the user clicked on, we will add another useState hook to create a selected campsite id state variable and also the set selected campsite id function for updating the value saved in selected campsite id
    // we put this just below the other useState hook for campsites 
    // we left the argument empty for useState which will initialise the selected campsite id with undefined

    // we now need a way to set the selected campsite id from the directory, but the directory is inside the directory screen compnenet in another file and we are in the main component
    // we need a way for the directory screen to tell the main component, that one of the campsites has been clicked on, and to pass us the id of the selected campsite
    // we can do this by setting a prop equal to a custom call back function,inside the directory screen tag we can add a prop called onPress, this will be equal to an arrow function that recieves the campsite id that was clicked as the only parameter
    // using this id when call the setSelectedCamspite id function to to update the selected campsite id state variable with the new value 
    // next updated directoryscreen to call custom callback function whenever a campsite is clicked

    return (
        <View style={{ flex: 1 }}>
            <DirectoryScreen
                campsites={campsites}
                onPress={(campsiteId) => setSelectedCampsiteId(campsiteId)}
            />
            <CampsiteInfoScreen
                campsite={
                    campsites.filter(campsite => campsite.id === selectedCampsiteId)[0]
                }
            />
        </View>
    )
}

export default Main;