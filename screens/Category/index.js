import React, { useEffect } from 'react'
import { ScrollView, View, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native';

import styles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllArticleWithCategoryID } from '../../store/slices/article';
import { ProductColumn } from '../../components';


export default CategoryScreen = (props) => {
    const route = useRoute();
    const dispatch = useDispatch();

    const articleData = useSelector(state => state.Article.allArticle);

    useEffect(() => {
        dispatch(fetchAllArticleWithCategoryID({ id: route.params.categoryId }));
    }, []);

    const showProduct = ({ item }) => {
        return (
            <ProductColumn data={item} />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={articleData}
                renderItem={showProduct}
                keyExtractor={(item) => item.id.toString()}
            />
            <ScrollView>
            </ScrollView>
        </View>
    )
}
