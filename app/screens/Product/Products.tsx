import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as basketActions from "../../store/actions/basketActions";
import * as productActions from "../../store/actions/productActions";
import {useDispatch, useSelector} from "react-redux";
import productList from "../../services/productApi";

const Products: React.FC = () => {

    // @ts-ignore
    const dispatch = useDispatch();

    const addToBasket = (item: object) => dispatch(basketActions.basketAddProduct(item));

    const productStore = useSelector((state: any) => state.productReducer);

    useEffect(() => {
          productList()
              .then(res => res.data.products.results)
              .then(r => {
                  dispatch(productActions.getProducts(r))
              })
    }, []);

    return (
        <ScrollView style={styles.container}>
            {
                productStore.products.map((item: any) => (
                        <TouchableOpacity key={item.id} onPress={() => addToBasket(item)}>
                            <View style={styles.productItem}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{backgroundColor: 'white', width: 50, height: 50, borderRadius: 5}}/>
                                    <View style={{padding: 5}}>
                                        <Text style={{color: 'white'}}>{item.name}</Text>
                                        <Text style={{color: 'white'}}>{item.price}</Text>
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

        </ScrollView>
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

export default Products;
