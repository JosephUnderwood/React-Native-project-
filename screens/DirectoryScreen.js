import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

// Create the directory screen arrow function passing in props as the only parameter

const DirectoryScreen = (props) => {
    // the function we pass to the flatlist render item prop will get passed with specefic fields when it is called by the flatlist 
    // one of those fields is named item, and it contains the current item in the array we want to render
    // when a function gets called with an object and we want to grab specefic fields from that object we can use object destructuring in the parameter list to do that
    // we can desturcture the item property like below, something we have not seen before is renaming the items we destructure,below we renamed item to campsite 
    // inside our function body, we will set up a return to render out list item
    // think as the ListItem as similar to the list item in html, and we are using it to render each campsite from the flatlist 
    // inside the listItem we nest other componenet so tconfigure how the list item renders
    // Avatar componenet for displaying the campsite image data, we do this by passing it a prop of source = campsite.image. 
    // Then we can use the rounded prop to make the image appear as a circle 
    // ListItem.content - defines our main content displayed in the list

    // onpress - we want to call our custom callback function that we are passing through props called onpress everytime one of the list items gets clicked on
    //  we can do this by using the built-in on press prop for the Listitem componenet
    // ListItem has a prop defined as onPress already so has to be called that, however like our custom callback function the list items press prop also gets passed a function that gets called whenever it receives an onpress event from the user  

    const renderDirectoryItem = ({ item: campsite }) => {
        return (
            <ListItem onPress={() => props.onPress(campsite.id)}>
                <Avatar source={campsite.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{campsite.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {campsite.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    }

    // set up a return statement, and inside we will set up our Flatlist component passing in 3 props, data render item and key extractor
    // data - must be in the form of an array that the flat list will use to render items from, we will pass it our array of campsite data which we are getting from the prop.campsites that we passed in from the main componenet
    // render item - will be in the form of a special rendering function as defined in the flatlist documentation, for clarity we won't write this function here, we will set it equal to render directory item and write it above our return statement in a moment
    // key extractor - the key extractor prop also needs to be set equal to a function but instead of creating a variable for it, we'll write on inline with an arrow function. This arrow function should return a unique value that the flatlist will use to add a key to  each item in the list (similar to react for when we would ever return list items from a loop with the map method)  
    // key extractor continued - we can do this by returning the id of each campsite as a string as shown below 
    // lastly we are setting up the renderDirectoryItem function back above

    return (
        <FlatList
            data={props.campsites}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />

    )

}

export default DirectoryScreen;