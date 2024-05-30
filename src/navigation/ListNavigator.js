import ProfileScreen from '../screens/profile/ProfileScreen';
import PetProfile from "../screens/profile/PetProfile"
import PetProfileEdit from '../screens/profile/PetProfileEdit';
import ProfileMyPets from "../screens/profile/ProfileMyPets"
import ProfileFavPets from '../screens/profile/ProfileFavPets';
import ProfileSettings from "../screens/profile/ProfileSettings"
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../screens/auth/LandingPage';
import PetInformation from '../screens/petScreen/PetInformation';


const Stack = createStackNavigator();


function ListNavigator(){
    return(
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ProfileMyPets" component={ProfileMyPets}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        <Stack.Screen name="PetProfile" component={PetProfile}/>
        <Stack.Screen name="PetProfileEdit" component={PetProfileEdit}/>
        <Stack.Screen name="ProfileFavPets" component={ProfileFavPets}/>
        <Stack.Screen name="ProfileSettings" component={ProfileSettings}/>
        <Stack.Screen name="LandingPage" component={LandingPage}/>
        <Stack.Screen name="PetInformation" component={PetInformation}/>

      </Stack.Navigator>
    )
}

export default ListNavigator;