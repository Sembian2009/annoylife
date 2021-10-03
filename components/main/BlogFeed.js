import React, { useState, useCallback} from 'react'
import { StyleSheet, View, Text, FlatList, Button} from 'react-native'
import { connect } from 'react-redux'
import firebase from 'firebase';

const wait = timeout => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  };

  
function Feed(props) {
    const { currentUser, posts } = props;
    
    return (
        <View style={styles.container}>
                <View style={styles.infocontainer}>
                    <Text style={{ fontSize: 28 }}>
                        Daily Blog
                    </Text>
                </View>
                <View style={styles.postcontainer}>
                    <FlatList
                        numColumns={1}
                        horizontal={false}
                        data={posts}
                        renderItem={({ item }) => (
                            <View style={styles.textcontainer}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.text}>{item.story}</Text>
                            </View>
                        )} />
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
        flex : 1,
        marginTop : 40,
        alignItems : 'center'
    },
    infocontainer : {
        margin : 20,
        fontSize : 40
    },
    postcontainer : {
        flex : 1
    },
    text : {
        justifyContent:'center',
        textAlign : 'center',
        padding : 10
    },
    title: {
        fontSize:30,
        fontWeight:'bold',
        padding:5
    },
    textcontainer : {
        justifyContent : 'center',
        height : 320, 
        width:310, 
        borderWidth : 2,
        borderRadius : 22,
        margin : 7
    },
})

export default connect(mapStateToProps, null)(Feed);