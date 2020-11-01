import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import styles from './styles';
import NavigationService from "../../../navigation/NavigationService";
import * as sessionActions from "../../../store/actions/sessionActions";
import {useDispatch} from "react-redux";

const ReadBarcode: React.FC = () => {
    const [read, setRead] = useState(false);
    const dispatch = useDispatch();

    /* const readedBarcode = (e) => {
         NavigationService.navigate('BarcodeCompleted')
         setRead(true);
     };*/
    const readedBarcode = (item: any) => {
        NavigationService.navigate('BarcodeCompleted');
        dispatch(sessionActions.readDeskBarcode(item.qrcode, {}));
        setRead(true);
    };

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <View style={{alignItems: 'center',}}>
                    <View style={{
                        alignItems: 'center',
                        backgroundColor: '#6e65c0',
                        height: 150,
                        width: 210,
                        justifyContent: 'center',
                        borderTopRightRadius: 25,
                        borderTopLeftRadius: 25,
                    }}>
                        <Image source={require('../../../assets/readbarcode.png')}
                               style={{
                                   width: 80,
                                   height: 90,
                               }}/>
                        <Text style={{color: 'white', textAlign: 'center', padding: 5}}>
                            Please read the barcode on your desk or request it from the business you are visiting.
                        </Text>
                    </View>
                </View>
                {
                    read ? <View>
                        <Text>Barcode Readed, Redirecting...</Text>
                    </View> : <RNCamera
                        captureAudio={false}
                        style={{
                            height: 310,
                            borderRadius: 10,
                            borderWidth: 15,
                            borderColor: '#6e65c0'
                        }}
                        onBarCodeRead={(e) => readedBarcode(e)}>
                    </RNCamera>
                }
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity onPress={() => readedBarcode({qrcode: 'masa1', desk: {title: 'MASA 1'}})}>
                        <View style={{padding: 20, marginTop: 10}}>
                            <Text style={{color: 'white', fontSize: 20}}>Simulation</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => NavigationService.navigate('Home')}>
                        <View style={{padding: 20, marginTop: 10}}>
                            <Text style={{color: 'white', fontSize: 20}}>Cancel</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};

export default ReadBarcode;
