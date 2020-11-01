import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, LogBox} from 'react-native';
import styles from './styles';
import NavigationService from "../../navigation/NavigationService";
import * as loginActions from "../../store/actions/loginActions"
import {useDispatch, useSelector} from "react-redux";

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const goBarcodeRead = () => NavigationService.navigate('ReadBarcode');
    const goActiveSession = () => NavigationService.navigate('Session');
    const goProducts = () => NavigationService.navigate('Products');
    const logout = () => dispatch(loginActions.logOut());
    const loginStore = useSelector((state: any) => state.loginReducer);
    const seanceStore = useSelector((state: any) => state.sessionReducer);


    useEffect(() => {
        LogBox.ignoreLogs(['Remote debugger']);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/froundesk_logo.png')}
                   style={{
                       width: 300,
                       height: 200,
                       marginTop: 30
                   }}/>
            <View style={{alignItems: 'flex-start', marginTop: 15,}}>
                <View>
                    {
                        seanceStore.qrcode ? <TouchableOpacity onPress={() => goActiveSession()}>
                                <View style={{
                                    backgroundColor: 'aquamarine',
                                    width: 250,
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 5,
                                    borderRadius: 30,
                                    transform: [{rotate: "-14deg"}]
                                }}>
                                    <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>Active Sessions</Text>
                                </View>
                            </TouchableOpacity> :
                            <TouchableOpacity onPress={() => goBarcodeRead()}>
                                <View style={{
                                    backgroundColor: '#6e65c0',
                                    width: 250,
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 30,
                                    transform: [{rotate: "-14deg"}]
                                }}>
                                    <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>Read QR
                                        Barcode</Text>
                                </View>
                            </TouchableOpacity>
                    }


                    <TouchableOpacity onPress={() => goProducts()}>
                        <View style={{
                            backgroundColor: '#6e65c0',
                            width: 250,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 5,
                            borderRadius: 30,
                            transform: [{rotate: "-14deg"}]
                        }}>
                            <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>Katalog</Text>
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
                            transform: [{rotate: "-14deg"}]
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
                            transform: [{rotate: "-14deg"}]
                        }}>
                            <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>Profile</Text>
                        </View>
                    </TouchableOpacity>

                    {
                        loginStore.isLoggedIn && <TouchableOpacity onPress={() => logout()}>
                            <View style={{
                                backgroundColor: '#8c1b1b',
                                width: 250,
                                height: 50,
                                marginTop: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 30,
                                transform: [{rotate: "-14deg"}]
                            }}>
                                <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>Logout</Text>
                            </View>
                        </TouchableOpacity>
                    }


                </View>

                <View style={{
                    backgroundColor: '#6e65c0',
                    flex: 1,
                    width: 250,
                    marginTop: 100,
                    borderRadius: 25
                }}>
                    {/*<Text>alt</Text>*/}
                </View>

            </View>
        </View>
    );
};

export default Home;
