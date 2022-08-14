import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTSIZE } from '../../contains'

const height = Dimensions.get('window').height - 180

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: COLORS.background,
        paddingVertical: 20
    },
    box: {
        backgroundColor: COLORS.white,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    title: {
        color: COLORS.settingTitle,
        fontSize: FONTSIZE.h1,
        fontWeight: 'bold',
        marginBottom: 30
    }
})
