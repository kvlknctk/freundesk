import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import NavigationService from "../../navigation/NavigationService";

const Home: React.FC = () => {
    const goBarcodeRead = () => NavigationService.navigate('ReadBarcode');
    const goActiveSession = () => NavigationService.navigate('Session');
    const goProducts = () => NavigationService.navigate('Products');

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/froundesk_logo.png')}
                   style={{
                       width: 300,
                       height: 200,
                       marginTop: 30
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

                <TouchableOpacity onPress={() => goActiveSession()}>
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

                <TouchableOpacity onPress={() => goProducts()}>
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
