import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const jobsTypes = ["Full-time" , "Part-time" , "Freelance" , "Internship"]

const Welcome = () => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState(jobsTypes[0])
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Radu</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job!</Text>

      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
          style={styles.searchInput}
          placeholder="Search for jobs"
          value=''
          onChange={()=>{}}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image source={icons.search} style={styles.searchBtnImage} resizeMode='contain'/>
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList data={jobsTypes} renderItem={
          ({item}) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)} onPress={()=>{
              setActiveJobType(item)
              router.push(`/search/${item}`)
            }}>
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity>
          )
        }
        keyExtractor={item => item}
        contentContainerStyle={{columnGap: SIZES.small}}
        horizontal
        />
      </View>
    </View>
  )
}

export default Welcome