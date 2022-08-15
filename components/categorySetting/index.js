import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Switch } from 'react-native-paper';
import { COLORS, SELECT_STYLES } from '../../contains';
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles'

export default CategorySetting = ({ data }) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [valueCheck, setValueCheck] = useState('');
    const settingData = useSelector(state => state.Setting.home);
    const item = settingData?.find(item => item.id === data.id);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    useEffect(() => {
        item?.status && setIsSwitchOn(true)
        setValueCheck(item?.type)
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data.name}</Text>
            <RNPickerSelect
                style={{
                    inputIOS: styles.inputIOS,
                    inputAndroid: styles.inputAndroid
                }}
                Icon={() => <View />}
                onValueChange={(value) => setValueCheck(value)}
                items={SELECT_STYLES.option}
                useNativeAndroidPickerStyle={false}
                value={valueCheck}
                placeholder={SELECT_STYLES.default}
            />
            <Switch
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
                color={COLORS.primary}
            />
        </View>
    )
}

