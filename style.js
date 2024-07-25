import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        rowGap: 20
    },
    radioWrapper: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10
    },
    radioOutBox: {
        height: 35,
        width: 35,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    radioText: {
        fontSize: 25,
        color: "black"
    },
    radio: {
        height: 27,
        width: 27,
        borderRadius: 50,
        backgroundColor: "black"
    }
})