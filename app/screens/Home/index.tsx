import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
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
            <Image source={require('../../assets/froundesk_logo.png')}
                   style={{
                       width: 300,
                       height: 200,
                       marginTop: 30
                       //borderWidth: 1,
                       //borderColor: 'white'
                   }}/>
            <View style={{alignItems: 'flex-start', marginTop: 15}}>
                <TouchableOpacity onPress={() => goBarcodeRead()}>
                    <View style={{
                        backgroundColor: '#6e65c0',
                        width: 250,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                        transform: [{ rotate: "-14deg" }]
                    }}>
                        <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>Read QR Barcode</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => console.log("asd")}>
                    <View style={{
                        backgroundColor: '#6e65c0',
                        width: 250,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 5,
                        borderRadius: 30,
                        transform: [{ rotate: "-14deg" }]

                    }}>
                        <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>Active Sessions</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => console.log("asd")}>
                    <View style={{
                        backgroundColor: '#6e65c0',
                        width: 250,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 5,
                        borderRadius: 30,
                        transform: [{ rotate: "-14deg" }]
                    }}>
                        <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>My Orders</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => console.log("asd")}>
                    <View style={{
                        backgroundColor: '#6e65c0',
                        width: 250,
                        height: 50,
                        marginTop: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                        transform: [{ rotate: "-14deg" }]
                    }}>
                        <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>Profile</Text>
                    </View>
                </TouchableOpacity>

             {/*   <Button icon="login" mode="outlined" onPress={goBarcodeRead}>
                    Notifications
                </Button>
                <Button icon="logout" mode="outlined" onPress={onLogout}>
                    Çıkış
                </Button>*/}
            </View>
        </View>
    );
};

export default Home;
