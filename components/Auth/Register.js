import React , {Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import firebase from "firebase";
import { TouchableOpacity } from 'react-native-gesture-handler';
import 'firebase/database';
import 'firebase/firestore';

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
            name : ''
        }
        this.onSignUp = this.onSignUp.bind(this)
    }
    onSignUp() {
        const {email, password, name} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            firebase.firestore().collection("users")
            .doc(firebase.auth().currentUser.uid)
            .set({
                name,
                email
            })
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <View style={{flex : 1, justifyContent : 'center' ,alignItems : 'center'}}>
                <TextInput
                style={{textAlign : 'center',
                height : 40, width:300,
                borderWidth : 2,
                borderRadius : 22,
                margin:6}} 
                placeholder="name(not for display)"
                onChangeText={(name) => this.setState({name})}
                />
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
                        onPress={() => this.onSignUp()}
                        style={{ backgroundColor: '#5dc4f0',
                        borderRadius : 20, 
                        width : 250, height : 50, 
                        alignItems : 'center', 
                        justifyContent : 'center', margin : 10}}>
                            <Text style={{color : '#ffffff'}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
        
        
    }

}

export default Register
