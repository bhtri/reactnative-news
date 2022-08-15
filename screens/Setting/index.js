import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';


import styles from './styles';
import { CategorySetting } from '../../components'

export default SettingScreen = (props) => {
    const categoryData = useSelector(state => state.Category.category);

    const showSetting = ({ item }) => {
        return (
            <CategorySetting data={item} />
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>Danh mục</Text>
                {
                    categoryData.length !== 0 && (
                        <FlatList
                            data={categoryData}
                            renderItem={showSetting}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    )
                }

            </View>
        </View>
    )
}
