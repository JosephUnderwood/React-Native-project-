import { StyleSheet, Text, View, Alert, PanResponder } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { baseUrl } from '../../shared/baseUrl';
import * as Animatable from 'react-native-animatable'

// Set up a function component named RenderCampsite, instead of passing this function the props parameter,  destructure the campsite property that we are passing in from the campsite info screen
// the render campsite componenet is going to use what is called conditional rendering, which means it will use a condition to decide what it will render
// we are first going to check if the campsite prop is null or undefined which we can do by using if (campsite) which will return false if it is equal to null or undefined, if truthy it will execute the code 
// if executes we want to return a card using the card we imported with a prop of container style set equal to padding 0
// card source = image 
// Showing text over imsgae - we can do by nesting some code inbetween opening and closing of card.image using view tag with a style prop

const RenderCampsite = (props) => {
    const { campsite } = props;

    const isLeftSwipe = ({ dx }) => dx < -200;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderEnd: (e, gestureState) => {
            console.log('pan responder end', gestureState);
            if (isLeftSwipe(gestureState)) {
                Alert.alert(
                    'Add Favorite',
                    'Are you sure you wish to add' + campsite.name + 'to favorites?',
                    [
                        {
                            text: 'Cancel',
                            style: 'cancel',
                            onPress: () => console.log('Cancel Pressed')
                        },
                        {
                            text: 'OK',
                            onPress: () =>
                                props.isFavorite
                                    ? console.log('Already set as a favorite')
                                    : props.markFavorite()
                        }
                    ],
                    { cancelable: false }
                );
            }
        }
    })

    if (campsite) {
        return (
            <Animatable.View
                animation='fadeInDownBig'
                duration={2000}
                delay={1000}
                {...panResponder.panHandlers}
            >
                <Card containerStyle={StyleSheet.cardContainer}>
                    <Card.Image source={{ uri: baseUrl + campsite.image }}>
                        <View style={{ justifyContent: 'center', flex: 1 }}>
                            <Text style={styles.cardText}>
                                {campsite.name}
                            </Text>
                        </View>
                    </Card.Image>
                    <Text style={{ margin: 20 }}>{campsite.description}</Text>
                    <View style={styles.cardRow}>
                        <Icon
                            name={props.isFavorite ? 'heart' : 'heart-o'}
                            type='font-awesome'
                            color='#f50'
                            raised
                            reverse
                            onPress={() =>
                                props.isFavorite
                                    ? console.log('Already set as a favorite')
                                    : props.markFavorite()}
                        />
                        <Icon
                            name='pencil'
                            type='font-awesome'
                            color='#5637DD'
                            raised
                            reverse
                            onPress={() => props.onShowModal()}
                        />
                    </View>
                </Card>
            </Animatable.View>
        );
    }
    // if returns false we just want to return an empty view, important to always return something from the componenet, if it returns nothing it will cause an error
    return <View />;
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 20
    },
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    cardText: {
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 20,
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }
});



export default RenderCampsite;