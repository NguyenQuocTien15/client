
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartScreen} from '../screens';
import CheckOutScreen from '../screens/checkout/CheckOutScreen';
import MyOrders from '../screens/order/MyOrders';

const Stack = createNativeStackNavigator();
const CartNavigator = () => {
  
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CheckOut"
          component={CheckOutScreen}
          options={{headerTitle: 'Check Out'}}></Stack.Screen>
       
      </Stack.Navigator>
    </>
  );
};

export default CartNavigator;
