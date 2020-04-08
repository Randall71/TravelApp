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
    sectionContainer: {
        paddingVertical: 24,
        paddingHorizontal: 32,
        marginBottom: 8,
        backgroundColor: colors.darkBg
    },
    sectionTitle: {
        fontWeight: "700",
        color: colors.text,
        fontSize: 15
    },
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
    },
    title: {
        fontSize: 30,
        color: colors.text,
    },
    divider: {
        borderBottomColor: "#444",
        borderBottomWidth: 1,
        marginVertical: 24
    }
})

