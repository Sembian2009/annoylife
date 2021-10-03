import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Landing ({navigation}) {
    return (
        <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
            <TouchableOpacity
                        onPress={() => navigation.navigate("Register")}
                        style={{ backgroundColor: '#5dc4f0',
                        borderRadius : 20, 
                        width : 250, height : 50, 
                        alignItems : 'center', 
                        justifyContent : 'center', margin : 10}}>
                            <Text style={{color : '#ffffff'}}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                        style={{backgroundColor: '#5dc4f0',
                        borderRadius : 20, 
                        width : 250, height : 50, 
                        alignItems : 'center', 
                        justifyContent : 'center', margin : 10}}>
                            <Text style={{color : '#ffffff'}}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}
