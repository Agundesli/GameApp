import React from 'react';
import { Text, View, Image } from 'react-native';

const GameDetailScreen = ({ navigation, route }: any) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{route.params?.title}</Text>
            <Image
                source={route.params?.image}
                style={{
                    height: 200,
                    width: 200,
                    borderRadius: 50,
                    marginBottom: 10,
                    marginTop: 10,
                }} />
            <Text>{route.params?.subtitle}</Text>
        </View>

    )
}

export default GameDetailScreen;