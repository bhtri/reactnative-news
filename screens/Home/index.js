import React, { useEffect } from 'react'
import { View, ScrollView, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles'
import { CategoryColumn, CategoryGrid } from '../../components'
import { fetchCategory } from '../../store/slices/category';

export default HomeScreen = () => {
    const dispatch = useDispatch();
    const categoryData = useSelector(state => state.Category.category);
    const showHome = useSelector(state => state.Setting.home);

    useEffect(() => {
        dispatch(fetchCategory());
    }, [showHome]);

    const showCategoryHome = ({ item }) => {
        const categoryItem = categoryData?.find(category => category.id === item.id)

        return (
            item.status && categoryItem && (
                item.type === 'grid'
                    ? <CategoryGrid title={categoryItem.name} categoryId={categoryItem.id} />
                    : <CategoryColumn title={categoryItem.name} categoryId={categoryItem.id} />
            )
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={showHome}
                renderItem={showCategoryHome}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}
