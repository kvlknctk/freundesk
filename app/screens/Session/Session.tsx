import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
//import styles from './styles';
//import AppStyles from "../../config/styles";
//import NavigationService from "../../../navigation/NavigationService";
//import {Button} from 'react-native-paper';
//import * as basketActions from "../../store/actions/basketActions";
import {useDispatch, useSelector} from "react-redux";
import * as sessionActions from "../../store/actions/sessionActions";

interface IStateSession {
    sessionReducer: any;
}
const Session: React.FC = () => {


    const dispatch = useDispatch();

    const sessionStore = useSelector((state: IStateSession) => state.sessionReducer);
    //const discardDesk = (item: object) => console.log(item);
    const discardDesk = () => dispatch(sessionActions.discardDesk());

    return (
        <View style={styles.container}>
            <Text style={{color:'white'}}>
                Desk Title :
                {sessionStore.qrcode}
            </Text>

            <TouchableOpacity onPress={() => discardDesk()} >
                <Text style={{color: 'white', fontSize: 35}}>Discard Desk</Text>
            </TouchableOpacity>
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
