import React, { useState } from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { connect } from 'react-redux'
import firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Profile(props) {
    const { currentUser, posts } = props;
    const onLogOut = () => {
        firebase.auth().signOut()
    }
    return (
        <View style={styles.container}>
            <View style={styles.infocontainer}>
                <Text style={{fontSize : 28}}>
                    {currentUser.name}
                </Text>

            </View>

            <View>
                <TouchableOpacity
                onPress={() => onLogOut()}
        style={{ backgroundColor: '#5dc4f0', borderRadius : 20, width : 250, height : 50, alignItems : 'center', 
        justifyContent : 'center', margin : 10}}>
             <Text style={{color : '#ffffff'}}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps = (store) => ({
    currentUser : store.userState.currentUser,
    posts : store.userState.posts
})

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        justifyContent : 'center',
        flex : 1,
        marginTop : 40
    },
    infocontainer : {
        margin : 20,
        fontSize : 40
    },
    postcontainer : {
        flex : 1
    }
})

export default connect(mapStateToProps, null)(Profile);