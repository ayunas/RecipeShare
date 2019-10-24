import React from 'react';
import {View, Text} from 'react-native';
import {Card, Button, Image, ThemeProvider} from 'react-native-elements';

const Recipe = props => {

    const flexWidth = () => Math.floor(1 + Math.random()*3) //generates a random integer from 1 - 3
    
    return (
        <View style={{flex: 2, alignItems: 'center'}}>
            <Card title="Recipe Card">
                <Text>{props.name}</Text>
                <Image 
                    source={{uri : "https://fakeimg.pl/200x200/?text=sample recipe"}}
                    style={{width: 200, height: 200 }}
                />
                <Button title="Details"/>
            </Card>
        </View>
    )
}

export default Recipe;
