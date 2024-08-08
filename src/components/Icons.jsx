import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Icons = ({name}) => {
    switch(name)
    {
        case 'circle':
            return <Icon name='circle' size={40} color='green' />
        case 'cross':
            return <Icon name='xmark' size={40} color='red' />
        default:
            return <Icon name='eye' size={40} color='orange' />
    }
}

export default Icons