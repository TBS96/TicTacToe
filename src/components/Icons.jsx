import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Icons = ({name}) => {
    switch(name)
    {
        case 'circle':
            return <Icon name='circle-thin' size={51} color='green' />
        case 'cross':
            return <Icon name='times' size={51} color='red' />
        default:
            return <Icon name='eye' size={51} color='orange' />
    }
}

export default Icons
