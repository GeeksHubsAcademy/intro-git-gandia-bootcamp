import { Ionicons } from "@expo/vector-icons"


export const navOptions = (nav) => {

    return {
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: 'black'
        },
        headerRight: () =>(
            <Ionicons
            name="menu"
            size={32}
            color="white"
            onPress={()=>nav.toggleDrawer()}
            />
        ),
        headerTitleAlign: "center",
}
}
