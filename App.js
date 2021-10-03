import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase/app';
//android-banner interstrial : ca-app-pub-1254577763523465/8072511347
//android-banner ads : ca-app-pub-1254577763523465/1096039456
const firebaseConfig = {
  apiKey: "AIzaSyDHKn1XQ7Epqhf8K2d2V42vA-YzlWSIOno",
  authDomain: "annoylife.firebaseapp.com",
  projectId: "annoylife",
  storageBucket: "annoylife.appspot.com",
  messagingSenderId: "809485695432",
  appId: "1:809485695432:web:c313088438a817b8daa8fd",
  measurementId: "G-V82VS64520"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/Auth/Landing'
import Main from './components/main'
import  { Login } from './components/Auth/Login'
import Register from './components/Auth/Register';
import AddScreen from './components/main/Add';

const Stack = createStackNavigator();
const store = createStore(rootReducer, applyMiddleware(thunk))

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      loaded : false,
      loggedIn : false
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
    if(!user) {
      this.setState ({
        loggedIn : false,
        loaded : true
      })
    } else {
      this.setState ({
        loggedIn : true,
        loaded : true
      })
    }})
  }

  render() {
    const {loggedIn, loaded} = this.state;
    if(!loaded) {
      return (
        <View style={{flex : 1, justifyContent : 'center'}}>
          <Text>Loading</Text>
        </View>
      );
    }
    if(!loggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown : false}}/>
          <Stack.Screen name="Register" component={Register}/>
          <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator> 
      </NavigationContainer>
    );
    }

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} options={{headerShown : false}}/>
            <Stack.Screen name="Add" component={AddScreen} navigation={this.props.navigation}/>
          </Stack.Navigator> 
        </NavigationContainer>
      </Provider>
      );
  }
}