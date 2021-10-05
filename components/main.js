import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchUser, fetchUserDailyBlog} from '../redux/actions/index'
import FeedScreen from './main/BlogFeed';
import ProfileScreen from './main/Profile';
import { NavigationContainer } from '@react-navigation/native';
import BlogFeed from './main/BlogFeed';
  

const Tab = createMaterialBottomTabNavigator();
const EmptyScreen = () => {
    return(null)
}

export class main extends Component {
    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchUserDailyBlog();
    }
    render() {
        return (
            <><Tab.Navigator initialRouteName="Feed" labeled={false}>
                <Tab.Screen name="Feed" component={BlogFeed}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home-circle" color={color} size={26} />
                        )
                    }} />
                {/*Add*/}
                <Tab.Screen name="AddContainer" component={EmptyScreen}
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Add");
                        }
                    })}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="plus-circle" color={color} size={26} />
                        )
                    }} />
                {/*Profile*/}
                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="person-circle" color={color} size={26} />
                        )
                    }} />
            </Tab.Navigator>
  </>
        )
    }
}
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser, fetchUserDailyBlog}, dispatch)

export default connect(mapStateToProps, mapDispatchProps) (main);
