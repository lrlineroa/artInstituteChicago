import EventDetailsScreen from "@events/framework/presentation/screens/EventDetailst.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@types";
import EventsScreen from "../modules/events/framework/presentation/screens/Events.screen";


const Stack = createNativeStackNavigator<RootStackParamList>();
function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Events" component={EventsScreen}/>
            <Stack.Screen name="EventDetails" component={EventDetailsScreen}/>
        </Stack.Navigator>
    )
}

export default RootStack;