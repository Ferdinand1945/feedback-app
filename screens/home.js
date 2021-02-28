import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Modal, Keyboard } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {globalStyles} from '../styles/global';
import  Card  from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home ({navigation}) {
    const [modalOpen, setModalOpen] = useState(false)

    const onPressHandler =()=>{
        //navigation.navigate('ReviewDetails')
        navigation.push('ReviewDetails')
    }
    const [reviews, setReviews] = useState([
        {title: 'Zelda, Breach of the ', rating: 5, body: 'Hola zzeldfa riene un vojudj', key: '1' },
        {title: 'Zelda, ewedwed of the ', rating: 2, body: 'Hola zzeldfa riene un vojudj', key: '2' },
        {title: 'Zelda, Brfrdd2each of the ', rating: 3, body: 'Hola zzeldfa riene un vojudj', key: '3' },
        {title: 'Zelda,ee ', rating: 5, body: 'Hola zzeldfa riene un vojudj', key: '4' }
    ])

    const addReview =(review)=>  {
        review.key = Math.random().toString();
        setReviews((currentReviews)=>{
            return [review, ...currentReviews]
        });
        setModalOpen(false)
    }
    return (
    <View style={globalStyles.container}>

        <Modal visible={modalOpen}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{...styles.modalContent, ...globalStyles.container}}>
                <MaterialIcons 
                    name='close'
                    size={24}
                    style={{...styles.modalToggle, ...styles.modalClose}}
                    onPress={()=> setModalOpen(false)}
                />
                <ReviewForm addReview={addReview} />               
            </View>
        </TouchableWithoutFeedback>
        </Modal>
        <MaterialIcons 
            name='add'
            style={styles.modalToggle}
            size={24}
            onPress={()=> setModalOpen(true)}

        />

        <FlatList
            data={reviews}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails', item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )}
        />
        
    </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
    },
    modalToggle: {
        marginBottom:10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 30,
        marginBottom:0
    }
})