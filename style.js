import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonWrapper: {
        width: "45%",
        marginVertical: 20
    },
    rowAroundCenterFlex: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    },
    heading: {
        fontSize: 28,
        textAlign: "center",
        marginTop: 13,
        color: "green"
    },
    input: {
        fontSize: 22,
        color: "red",
        padding: 10,
        borderColor: "black",
        borderWidth: 2,
        width: "97%",
        borderRadius: 4
    },
    grid: {
        width: 120,
        backgroundColor: "blue",
        height: 120,
        fontSize: 22,
        color: "white",
        textAlignVertical: "center",
        textAlign: "center",
        borderRadius: 4
    }
})