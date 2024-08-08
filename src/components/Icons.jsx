import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Icons = ({name}) => {
    switch(name)
    {
        case 'circle':
            return <Icon name='circle-thin' size={50} color='green' />
        case 'cross':
            return <Icon name='times' size={50} color='red' />
        default:
            return <Icon name='eye' size={50} color='orange' />
    }
}

export default Icons