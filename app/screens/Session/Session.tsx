import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
//import styles from './styles';
//import AppStyles from "../../config/styles";
//import NavigationService from "../../../navigation/NavigationService";
//import {Button} from 'react-native-paper';
//import * as basketActions from "../../store/actions/basketActions";
import { useSelector} from "react-redux";

interface IStateSession {
    sessionReducer: any;
}
const Session: React.FC = () => {


    //const dispatch = useDispatch();

    const sessionStore = useSelector((state: IStateSession) => state.sessionReducer);
    //const addToBasket = (item: object) => console.log(item);

    return (
        <View style={styles.container}>
            <Text style={{color:'white'}}>
                {sessionStore.qrcode}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    login: {
        padding: 8
    },
    productItem: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#575757',
        margin: 5

    },
    preview: {},
});

export default Session;
