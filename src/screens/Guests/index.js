import React, {useState} from 'react';
import {View, Text, FlatList, Button, Pressable} from 'react-native';
import styles from '../Home/styles';

const GuestList = (props) => {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    return (
        <View>
        <View style ={styles.row} >
            <View style = {}>
                <Text style = {{fontWeight: 'bold'}}>Adults</Text>
                <Text style = {{color: '#8d8d8d'}}>Ages above 13</Text>

            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable onPress= {()=> Math.max(setAdults(adults - 1),0)} style = {styles.button}> <Text style={{fontSize: 20, color: '#474747'}}>-</Text> </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>
            <Pressable onPress = {() => setAdults(adults + 1)} style = {styles.button}><Text style={{fontSize: 20, color: '#474747'}}>+</Text> </Pressable>
            </View>

        </View>

        <View style ={styles.row} >
            <View style = {}>
                <Text style = {{fontWeight: 'bold'}}>Children</Text>
                <Text style = {{color: '#8d8d8d'}}>Ages 2-12</Text>

            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable onPress= {()=> Math.max(setChildren(children - 1),0)} style = {styles.button}> <Text style={{fontSize: 20, color: '#474747'}}>-</Text> </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>
            <Pressable onPress = {() => setChildren(children + 1)} style = {styles.button}><Text style={{fontSize: 20, color: '#474747'}}>+</Text> </Pressable>
            </View>

        </View>

        <View style ={styles.row} >
            <View style = {}>
                <Text style = {{fontWeight: 'bold'}}>Infants</Text>
                <Text style = {{color: '#8d8d8d'}}>Ages below 2</Text>

            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable onPress= {()=> Math.max(setInfants(infants - 1),0)} style = {styles.button}> <Text style={{fontSize: 20, color: '#474747'}}>-</Text> </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{infants}</Text>
            <Pressable onPress = {() => setInfants(infants + 1)} style = {styles.button}><Text style={{fontSize: 20, color: '#474747'}}>+</Text> </Pressable>
            </View>

        </View>
        </View>
    );
}

export default GuestList;