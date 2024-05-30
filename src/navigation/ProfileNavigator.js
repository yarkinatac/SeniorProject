import ProfileScreen from '../screens/profile/ProfileScreen';
import PetProfile from "../screens/profile/PetProfile"
import PetProfileEdit from '../screens/profile/PetProfileEdit';
import ProfileMyPets from "../screens/profile/ProfileMyPets"
import ProfileFavPets from '../screens/profile/ProfileFavPets';
import ProfileSettings from "../screens/profile/ProfileSettings"
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../screens/auth/LandingPage';
import PetInformation from '../screens/petScreen/PetInformation';


const ProfileStack = createStackNavigator();


function ProfileNavigator(){
    return(
        <ProfileStack.Navigator  screenOptions={{ headerShown: false }}>
        <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen}/>
        <ProfileStack.Screen name="PetProfile" component={PetProfile}/>
        <ProfileStack.Screen name="PetProfileEdit" component={PetProfileEdit}/>
        <ProfileStack.Screen name="ProfileMyPets" component={ProfileMyPets}/>
        <ProfileStack.Screen name="ProfileFavPets" component={ProfileFavPets}/>
        <ProfileStack.Screen name="ProfileSettings" component={ProfileSettings}/>
        <ProfileStack.Screen name="LandingPage" component={LandingPage}/>
        <ProfileStack.Screen name="PetInformation" component={PetInformation}/>

      </ProfileStack.Navigator>
    )
}

export default ProfileNavigator;