import React, {useState} from 'react'
import {View, TextInput, Button, Text, Card} from 'react-native'
import firebase from 'firebase/app';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { render } from 'react-dom';
require("firebase/firestore")
require("firebase/firebase-storage")

export default function Add({navigation}) {
    const [story, setStory] = useState("");
    const [title, setTitle] = useState("");
    const uploadStoryDailyBlog = () => {
        firebase.firestore()
        .collection('DailyBlog')
        .add({
            title,
            story,
            creation: firebase.firestore.FieldValue.serverTimestamp()
        }).then((function () {
            navigation.popToTop()
        }))
    }
    return (
        <View style={{flex : 1, alignItems : 'center'}}>
            <TextInput
                style={{textAlign : 'center',
                justifyContent : 'center',height : 50, width:300,
                borderWidth : 2,
                borderRadius : 15,
            margin : 10}} 
                multiline={true}
                placeholder="Write the title here!"
                onChangeText = {(title) => setTitle(title)}
                maxLength={30}
            />
            <TextInput
                style={{textAlign : 'center',
                justifyContent : 'center',height : 260, width:300,
                borderWidth : 2,
                borderRadius : 22,
            margin : 10}} 
                multiline={true}
                placeholder="Write your story! How was your day?"
                onChangeText = {(story) => setStory(story)}
                maxLength={600}
                minValue={10}
            />
       <TouchableOpacity
        onPress={() => uploadStoryDailyBlog()}
        style={{ backgroundColor: '#5dc4f0', borderRadius : 20, width : 250, height : 50, alignItems : 'center', 
        justifyContent : 'center', margin : 10}}>
             <Text style={{color : '#ffffff'}}>Blog It!</Text>
      </TouchableOpacity>
      
        </View>
    )
}
