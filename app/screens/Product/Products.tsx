import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Alert} from 'react-native';
//import styles from './styles';
//import AppStyles from "../../config/styles";
//import NavigationService from "../../../navigation/NavigationService";
//import {Button} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as basketActions from "../../store/actions/basketActions";
import {useDispatch} from "react-redux";

const Products: React.FC = () => {

    const [products, setProducts] = useState([
        {
            id: '1',
            name: 'Product 1 ',
            price: '3.9',
            description: 'Product description 1 ',
            image: 'https://url.com/image.jpg'
        },
        {
            id: '2',
            name: 'Product 2 ',
            price: '3.9',
            description: 'Product description 1 ',
            image: 'https://url.com/image.jpg'
        },
        {
            id: '3',
            name: 'Product 3 ',
            price: '3.9',
            description: 'Product description 1 ',
            image: 'https://url.com/image.jpg'
        },
        {
            id: '4',
            name: 'Product 4',
            price: '3.9',
            description: 'Product description 4 ',
            image: 'https://url.com/image.jpg'
        },
        {
            id: '5',
            name: 'Product 5',
            price: '3.9',
            description: 'Product description 4 ',
            image: 'https://url.com/image.jpg'
        },
        {
            id: '6',
            name: 'Product 5',
            price: '3.9',
            description: 'Product description 4 ',
            image: 'https://url.com/image.jpg'
        }
    ])
    const dispatch = useDispatch();

    const addToBasket = (item: object) => dispatch(basketActions.basketAddProduct(item));
    //const addToBasket = (item: object) => console.log(item);

    return (
        <View style={styles.container}>
            {
                products.map((item) => (
                        <TouchableOpacity key={item.id} onPress={() => addToBasket(item)}>
                            <View style={styles.productItem}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{backgroundColor: 'white', width: 50, height: 50, borderRadius: 5}}/>
                                    <View style={{padding: 5}}>
                                        <Text style={{color: 'white'}}>{item.name}</Text>
                                        <Text style={{color: 'white'}}>{item.description}</Text>
                                    </View>
                                </View>
                                <View style={{justifyContent: 'center'}}>
                                    <Ionicons name="arrow-up" size={20} color="white"/>
                                    <Ionicons name="arrow-down" size={20} color="white"/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                )
            }

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
    volkan: {},
});

export default Products;
