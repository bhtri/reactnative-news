import React, { useEffect } from 'react'
import { View, ScrollView } from 'react-native'
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
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                <CategoryColumn />
                <CategoryGrid />
            </ScrollView>
        </View>
    )
}
