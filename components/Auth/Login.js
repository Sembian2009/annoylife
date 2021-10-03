import React , {Component } from 'react';
import { StyleSheet ,View, Button, TextInput, Text } from 'react-native';
import firebase from "firebase";
import { TouchableOpacity } from 'react-native-gesture-handler';
import 'firebase/database';
import 'firebase/firestore';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
        }
        this.onLogin = this.onLogin.bind(this)
    }
    onLogin() {
        const {email, password} = this.state;
        try {
            firebase.auth().signInWithEmailAndPassword(email, password);
          } catch (error) {
            alert(error);
          }
    }
    render() {
        return (
            <View style={{flex : 1, justifyContent : 'center' ,alignItems : 'center'}}>
                <TextInput             
                placeholder="email"
                onChangeText={(email) => this.setState({email})}
                style={{textAlign : 'center',
                height : 40, width:300,
                borderWidth : 2,
                borderRadius : 22,
                margin:6}} 
                />
                <TextInput
                style={{textAlign : 'center',
                height : 40, width:300,
                borderWidth : 2,
                borderRadius : 22,
                margin:6}} 
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
                />
                <TouchableOpacity
                        onPress={() => this.onLogin()}
                        style={{ backgroundColor: '#5dc4f0',
                        borderRadius : 20, 
                        width : 250, height : 50, 
                        alignItems : 'center', 
                        justifyContent : 'center', margin : 10}}>
                            <Text style={{color : '#ffffff'}}>Login</Text>
                </TouchableOpacity>
            </View>
        )
        
        
    }

}

export default Login
