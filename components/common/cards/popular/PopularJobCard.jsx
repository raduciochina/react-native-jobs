import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)} onPress={handleCardPress}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default PopularJobCard