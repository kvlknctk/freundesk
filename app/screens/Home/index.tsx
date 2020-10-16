import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

import {useDispatch} from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import NavigationService from "../../navigation/NavigationService";

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const onLogout = () => dispatch(loginActions.logOut());
    const goBarcodeRead = () => NavigationService.navigate('ReadBarcode');

    return (
        <View style={styles.container}>
            <Button icon="logout" mode="outlined" onPress={goBarcodeRead}>
                Masaya Otur
            </Button>
            <Button icon="logout" mode="outlined" onPress={onLogout}>
                Çıkış
            </Button>
        </View>
    );
};

export default Home;
