import { StyleSheet, Button, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

export default function Dashboard ({navigation}) {
    return (
        <View>
            <Button title="Fire Extinguishers List" onPress={()=>navigation.navigate("List")}/>
                <View style={styles.grid}> 
                    <TouchableOpacity onPress={()=>navigation.navigate("List")} style={styles.button}>
                        <Text>Fire extinguishers registered</Text>
                        <Text>0 registered</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate("List")} style={styles.button}>
                        <Text>Issues</Text>
                        <Text>0 issues</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate("List")} style={styles.button}>
                        <Text>Requests</Text>
                        <Text>0 requests</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate("Settings")} style={styles.button}>
                        <Text>Manage my Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate("List")} style={styles.button}>
                        <Text>Add new extinguisher</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    button: {
        
        backgroundColor: '#EBE4DD',
        color: '#353637',
        fontWeight: "700",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flexDirection: "column",
        padding: 5,
        margin: 5,
      },

    grid: {
        flex: 2,
        marginHorizontal: "auto",
        width: 150,
    },
})