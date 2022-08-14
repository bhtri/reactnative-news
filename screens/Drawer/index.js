import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native';
import { Drawer } from 'react-native-paper';


import styles from './styles'
import { IMAGES, COLORS } from '../../contains'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default DrawerContent = (props) => {
    const navigation = useNavigation()
    const [active, setActive] = useState('Home')

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerBox}>
                    <Image style={styles.img} source={IMAGES.avatar} />
                </View>
                <Text style={styles.headerTitle}>ZendVN NEWS</Text>
            </View>
            <DrawerContentScrollView style={styles.body}>
                <DrawerItem
                    focused={active == 'Home' ? true : false}
                    activeTintColor={COLORS.primary}
                    icon={({ color, size }) => (
                        <Ionicons name={'ios-home-outline'} size={size} color={color} />
                    )}
                    label="Trang chủ"
                    onPress={() => {
                        setActive('Home')
                        navigation.navigate('Home')
                    }}
                />
                <DrawerItem
                    focused={active == "Gold" ? true : false}
                    activeTintColor={COLORS.primary}
                    icon={({ color, size }) => (
                        <Ionicons name={'ios-podium-outline'} size={size} color={color} />
                    )}
                    label="Giá vàng"
                    onPress={() => {
                        setActive('Gold')
                        navigation.navigate('Gold')
                    }}
                />
                <DrawerItem
                    focused={active == "Coin" ? true : false}
                    activeTintColor={COLORS.primary}
                    icon={({ color, size }) => (
                        <Ionicons name={'ios-pulse-outline'} size={size} color={color} />
                    )}
                    label="Giá coin"
                    onPress={() => {
                        setActive('Coin')
                        navigation.navigate('Coin')
                    }}
                />
                <DrawerItem
                    focused={active == "Setting" ? true : false}
                    activeTintColor={COLORS.primary}
                    icon={({ color, size }) => (
                        <Ionicons name={'ios-settings-outline'} size={size} color={color} />
                    )}
                    label="Cài đặt"
                    onPress={() => {
                        setActive('Setting')
                        navigation.navigate('Setting')
                    }}
                />
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <Text style={styles.bottomDrawerSectionText}>@CopyRight ZendVN</Text>
            </Drawer.Section>
        </View>
    );
}
