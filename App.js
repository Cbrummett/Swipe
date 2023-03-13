import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Profile">
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="CreateAPost" component={CreateAPost} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}
function Profile({ navigation }) {
  return(
    <View>
      <Text>This is the profile page</Text>
    </View>
  )
}

function CreateAPost({ navigation }) {
  return(
    <View>
      <Text>This is the Create a Post page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
