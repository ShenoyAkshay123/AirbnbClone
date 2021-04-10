import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 15,
    },
    container: {
        margin: 20
    },
    oldAmt: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through'

    },
    totalAmt: {
        color: '#5b5b5b',
        textDecorationLine: 'underline'
    },
    prices : {
        fontSize: 18,
        marginVertical: 10
    },
    newAmt: {
        fontWeight: 'bold'

    },
    description: {
        fontSize: 18,
        lineHeight: 26,

    },
    bedText: {
        marginVertical: 10,
        fontSize: 14,
        color: '#5b5b5b'
    }

});

export default styles;