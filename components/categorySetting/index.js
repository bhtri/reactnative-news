import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Switch } from 'react-native-paper';
import { COLORS, SELECT_STYLES } from '../../contains';
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles'
import { SettingHome } from '../../store/slices/setting'

export default CategorySetting = ({ data }) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [valueCheck, setValueCheck] = useState('');
    const settingData = useSelector(state => state.Setting.home);
    const item = settingData?.find(item => item.id === data.id);
    const dispatch = useDispatch();

    useEffect(() => {
        item?.status && setIsSwitchOn(true)
        setValueCheck(item?.type)
    }, []);

    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn);
        dispatch(SettingHome({
            id: data.id,
            type: valueCheck,
            status: !isSwitchOn,
        }));
    }

    const checkValue = (value) => {
        if (value) {
            setValueCheck(value);
            dispatch(SettingHome({
                id: data.id,
                type: value,
                status: isSwitchOn,
            }));
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data.name}</Text>
            <RNPickerSelect
                style={{
                    inputIOS: styles.inputIOS,
                    inputAndroid: styles.inputAndroid
                }}
                Icon={() => <View />}
                onValueChange={checkValue}
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

