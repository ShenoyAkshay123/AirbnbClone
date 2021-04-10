import {Dimensions, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode:'cover',
        justifyContent:'center',
        
        
    },
    title: {
        fontSize: 75,
        fontWeight:'bold',
        color:'white',
        width: '70%',
        marginLeft: 20,
    },
    button: {
        backgroundColor: 'white',
        color: 'white',
        borderRadius: 10,
        width: 200,
        height: 35,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    searchButton: {
        backgroundColor: 'white',
        color: 'white',
        borderRadius: 30,
        width: Dimensions.get('screen').width - 20,
        height: 60,
        marginHorizontal: 10,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: 20,
        zIndex: 100,
        elevation: 50 //for android
    
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
    }

});

export default styles;