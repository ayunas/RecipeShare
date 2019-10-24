import React from 'react';
import samples from '../assets/samplerecipes.json'
import {ScrollView, Text, View} from 'react-native';
import Recipe from './Recipe';
// import {Card, Image, Button} from 'react-native-elements';


const RecipeList = () => {
    // console.log('sample recipes json', samples);
    
    return (
        <ScrollView>
            <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center'}}>
            {samples.map( (recipe,i) => <Recipe key={i} recipe={recipe} />)}
            </View>
        </ScrollView>
    )
}

export default RecipeList;


