import React, {useState} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {globalStyles} from '../styles/global'

export default function Home ({navigation}) {

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
    return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>
            Home screen
        </Text>
        <Button title="go to review dets" onPress={onPressHandler}/>
    </View>
    )
}