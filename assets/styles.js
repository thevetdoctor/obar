import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    homeScreen: {
        backgroundColor: "#E5E5E5",
        width: "100%",
        height: "100%",
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: "center",
    },
    homeScreenTitle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#fff"
    },
    homeBackgroundImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute"
    }
});

export default styles;