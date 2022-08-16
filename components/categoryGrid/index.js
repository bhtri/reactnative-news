import React, { useEffect } from 'react'
import { View } from 'react-native'

import styles from './styles'
import ProductGrid from '../productGrid'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticleWithCategoryID } from '../../store/slices/article';
import { useNavigation } from '@react-navigation/native';
import TitleCategory from '../titleCategory';


export default CategoryGrid = ({ title, categoryId }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const articleData = useSelector(state => state.Article.article);

    useEffect(() => {
        dispatch(fetchArticleWithCategoryID({ id: categoryId, limit: 4 }));
    }, []);

    const articleInCategory = articleData?.filter((item) => item.category_id === categoryId);

    return (
        <View style={styles.container}>
            <TitleCategory title={title} categoryId={categoryId} />
            {
                articleInCategory.length !== 0 && (
                    <View style={styles.box}>
                        <View style={styles.boxProduct}>
                            <ProductGrid data={articleInCategory[0]} />
                            <ProductGrid data={articleInCategory[1]} />
                        </View>
                        <View style={styles.boxProduct}>
                            <ProductGrid data={articleInCategory[2]} />
                            <ProductGrid data={articleInCategory[3]} />
                        </View>
                    </View>
                )
            }
        </View>
    )
}
