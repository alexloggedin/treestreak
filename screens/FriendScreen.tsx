import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    KeyboardAvoidingView,
} from 'react-native';

import { Text, SearchBar } from 'react-native-elements';
import FriendList from './components/FriendList'


class FriendScreen extends React.Component<any, any>{
    state = {
        query: '',
    };

    render() {
        const { query }: { query: string } = this.state;

        //TODO: Stop unsafe Regex from crashing app
        let list = Friends.filter( friend => {
            const se = new RegExp(query,"i");
            return friend.username.match(se)
        });
    
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView style={{flex:1}}>
                <View>
                    <Text h1>
                        Friends
                 </Text>
                    <SearchBar
                        lightTheme={true}
                        placeholder="Search Friends..."
                        onChangeText={(query: string) => (this.setState({ query }))}
                        value={query}
                    />
                    </View>
                    <FriendList friendList={list} />
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}
export default FriendScreen;

interface Friend {
    username: string,
    streak: number,
    avatar_url: string,
    id: number
}

const Friends: (Friend)[] = [
    {
        username: "YungYush",
        streak: 20,
        avatar_url: "https://pbs.twimg.com/profile_images/1057422177966809088/424ClgkB_400x400.jpg",
        id: 0
    },
    {
        username: "LilKev",
        streak: 40,
        avatar_url: "http://currents.sweetwaterschools.org/files/2018/06/HTH-KEVIN-LONGORIA.Stanford.VAL_-225x300.jpg",
        id: 1
    },
    {
        username: "Serg",
        streak: 5,
        avatar_url: "https://undergrad.stanford.edu/sites/undergrad/files/styles/quote_image_2x/public/sergioromero_0.png",
        id: 2
    },
    {
        username: "Colin",
        streak: 4,
        avatar_url: "https://aminoo.bio/images/colin.png",
        id: 3
    },
    {
        username: "Thanos",
        streak: 100,
        avatar_url: "https://i.ytimg.com/vi/N2YTmooNR8E/maxresdefault.jpg",
        id: 4
    },
    {
        username: "Thor",
        streak: 57,
        avatar_url: "https://image.cnbcfm.com/api/v1/image/104819285-thor.jpg?",
        id: 5
    },
    {
        username: "Stark2343",
        streak: 7,
        avatar_url: "https://www.pinkvilla.com/files/iron-man-phase-4_0.jpg",
        id: 6
    },
    {
        username: "Cap",
        streak: 25,
        avatar_url: "https://i.pinimg.com/564x/9b/76/75/9b767505f5a5df3df348a898ba4ae8bb.jpg",
        id: 7
    },
    {
        username: "Bucky",
        streak: 15,
        avatar_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mv5bmjmwmdi3mzg0m15bml5banbnxkftztgwntqwmdm0mteat-v1-1576179598.jpg?",
        id: 8
    },
    {
        username: "Bruce",
        streak: 9,
        avatar_url: "https://vignette.wikia.nocookie.net/ironman/images/f/f9/7c51a6800b4fd5e22fbb34311d0052734f995765.jpg",
        id: 9
    },
    {
        username: "Loki",
        streak: 0,
        avatar_url: "https://gamespot1.cbsistatic.com/uploads/screen_kubrick/1582/15828986/3569420-loki%20hed%201.jpg",
        id: 10
    }
]

const styles = StyleSheet.create({
    container:{
        width: '95%',
        flex: 1,
        alignSelf: "center"
    }
  
  })