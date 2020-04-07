import { StyleSheet } from "react-native"




export const colors = {
    darkBg: "#222",
    lighBg: "#333",
    darkHl: "#666",
    lightHL: "#888",
    pink: "#ea3372",
    text: "#fff",
    textSec: "#aaa"
}

export const gs = StyleSheet.create({
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: 'space-between',

    },
    center: {
        alignItems: "center",
        justifyContent: "center"
    }
})

