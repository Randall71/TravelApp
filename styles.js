import { StyleSheet } from "react-native"


export const colors = {
    darkBg: "#222",
    lighBg: "#333",
    darkHl: "#666",
    lightHL: "#888",
    pink: "#ea3372",
    text: "#fff",
    textSec: "#aaa",
    orange:  "#F97878"
}

export const gs = StyleSheet.create({
    sectionContainer: {
        paddingVertical: 20,
        paddingHorizontal: 32,
        marginBottom: 8,
        backgroundColor: colors.lighBg
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
    subTitle:{
        fontWeight: "600",
        textTransform: "uppercase",
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: 15,
        letterSpacing: 1
    },
    divider: {
        borderBottomColor: "#444",
        borderBottomWidth: 1,
        marginVertical: 24
    },
    absoluteFull:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.pink,
        borderRadius: 100
    }

})

