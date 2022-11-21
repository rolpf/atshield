import { Button, View } from "react-native";

export default function List ({navigation}) {
    return (
        <View>
        <Button title="dashboard" onPress={()=>navigation.navigate("Dashboard")} />

        </View>
    )
}