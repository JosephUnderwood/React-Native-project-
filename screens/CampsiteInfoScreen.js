import RenderCampsite from '../features/campsites/RenderCampsite';

// set up the function component as an arrow function set equal to a constant named CampsiteInfoScreen
// passing in one parameter of props into the arrow function
// set up  return statement returning a single self-closing tag of RenderCampsite, passing it a single prop called campsite equal to props.campsite.
// right now what the camspiteinfoscreen is doing is using a render campsite component to pass it a prop for what to render
// Eventually be expanding what the campsite info screen does and it will actually be it's own screen
const CampsiteInfoScreen = (props) => {
    return <RenderCampsite campsite={props.campsite} />;

}

export default CampsiteInfoScreen;