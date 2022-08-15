import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'
import ProductColumn from '../productColumn'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticleWithCategoryID } from '../../store/slices/article'


export default CategoryColumn = ({ title, categoryId }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const articleData = useSelector(state => state.Article.article);

    useEffect(() => {
        dispatch(fetchArticleWithCategoryID({ id: categoryId, limit: 4 }));
    }, []);

    const articleInCategory = articleData?.filter((item) => item.category_id === categoryId);

    const changeCategory = () => {
        navigation.push('CategoryScreen', {
            name: title,
            categoryId: categoryId,
        });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={changeCategory} style={styles.title}>
                <Text style={styles.titleText}>{title}</Text>
            </TouchableOpacity>
            {
                articleInCategory.length !== 0 && (
                    <View style={styles.box}>
                        <ProductColumn data={articleInCategory[0]} />
                        <ProductColumn data={articleInCategory[1]} />
                    </View>
                )
            }
        </View>
    )
}
