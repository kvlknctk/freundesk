import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {setIsDarkTheme} from "../../../store/actions/themeActions";
import AppStyles from "../../../config/styles";
import NavigationService from "../../../navigation/NavigationService";
//import NavigationService from "../../../navigation/NavigationService";

const BarcodeCompleted: React.FC = () => {

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Image source={require('../../../assets/success.png')}
                       style={{
                           width: 120,
                           height: 150,
                           marginTop: 10
                           //borderWidth: 1,
                           //borderColor: 'white'
                       }}/>
                <Text style={{color: 'white', fontSize: 25, textAlign: 'center', marginTop: 10}}>Session Created, You
                    can order product or call server service.</Text>
                <View style={{}}>
                    <Text style={{color: 'white'}}>Your Desk No :  17 </Text>
                </View>
                <TouchableOpacity onPress={() => NavigationService.navigate('Products')}>
                    <View style={{
                        backgroundColor: AppStyles.color.COLOR_PRIMARY,
                        padding: 10,
                        width: 200,
                        height: 50,
                        borderRadius: 10,
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <Text style={{color: 'white', fontSize: 25}}>Start Order</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BarcodeCompleted;
