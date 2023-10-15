import { Slot } from "expo-router"
import { View } from "react-native"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faEllipsis, faClone, faArrowUpRightFromSquare, faBell, faCube, faWallet, faClock, faGear, faCompass } from "@fortawesome/free-solid-svg-icons"
library.add(faEllipsis, faClone, faArrowUpRightFromSquare, faBell, faCube, faWallet, faClock, faGear, faCompass)
import { Tab, createTheme, ThemeProvider } from "@rneui/themed"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import Arrows from "../assets/arrows.svg"

const Layout = () => {
  const bottomTheme = createTheme({
    components: {
      Tab: {
        titleStyle: {
          color: "#0376c9",
        },
        indicatorStyle: {
          display: "none",
        },
      },
    },
  })

  return (
    <View className="flex-1 pt-10 h-full justify-between">
      <Slot />

      <View className="bg-slate-200 pt-2">
        <ThemeProvider theme={bottomTheme}>
          <Tab>
            <Tab.Item>
              <FontAwesomeIcon icon="wallet" size={18} color={"#444"} />
            </Tab.Item>
            <Tab.Item>
              <FontAwesomeIcon icon="clock" size={18} color={"#444"} />
            </Tab.Item>
            <Tab.Item>
              <Arrows width={26} height={26} style={{ marginTop: -4 }} />
            </Tab.Item>
            <Tab.Item>
              <FontAwesomeIcon icon="compass" size={18} color={"#444"} />
            </Tab.Item>
            <Tab.Item>
              <FontAwesomeIcon icon="gear" size={18} color={"#444"} />
            </Tab.Item>
          </Tab>
        </ThemeProvider>
      </View>
    </View>
  )
}

export default Layout
