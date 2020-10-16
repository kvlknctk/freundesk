import React from 'react';
import {View, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';
import styles from './styles';

const ReadBarcode: React.FC = () => {

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.volkan}>Masanızda bulunan ya da Garson tarafından size verilen
                    barkodu okutunuz.</Text>
                <RNCamera
                    captureAudio={false}
                    style={{
                        //flex: 1,
                        height: 350,
                        width: 350,
                    }}
                    onBarCodeRead={(e) => console.log(e)}
                    onGoogleVisionBarcodesDetected={(e) => console.log(e)}
                >
                </RNCamera>
            </View>
        </View>
    );
};

export default ReadBarcode;
