import { Text, View, StyleSheet, TouchableHighlight } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { useState } from "react"
import { Tab, Button, createTheme, ThemeProvider } from "@rneui/themed"
import { Dropdown } from "react-native-element-dropdown"
import EtherSvg from "../assets/Ethereum.svg"
import Avatar from "../assets/avatar.svg"
import Fox from "../assets/Fox.svg"

const Home = () => {
  const [value1, setValue1] = useState("1")
  const [value2, setValue2] = useState("1")
  const [index, setIndex] = useState(0)
  const data_1 = [
    { label: "Ethereum Main Network", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
  ]
  const data_2 = [
    { label: "Account 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
  ]
  const customTheme = createTheme({
    components: {
      Tab: {
        titleStyle: {
          color: "#0376c9",
        },
        indicatorStyle: {
          backgroundColor: "#0376c9",
        },
      },
    },
  })

  return (
    <View className="px-4">
      <View className="flex flex-row justify-between items-center">
        <Fox width={26} height={26} />
        <View className="w-4/5  items-center">
          <Dropdown
            style={styles.dropdown}
            data={data_1}
            maxHeight={300}
            labelField="label"
            valueField="value"
            value={value1}
            onChange={(item) => {
              setValue1(item.value)
            }}
            renderLeftIcon={() => <EtherSvg width={30} height={30} />}
          />
        </View>
        <FontAwesomeIcon icon="cube" size={20} color={"rgb(12 74 110)"} />
      </View>
      <View className="mb-4 mt-8 rounded-md p-2 border-slate-200 border-solid border-2">
        <Dropdown
          data={data_2}
          maxHeight={300}
          labelField="label"
          valueField="value"
          value={value2}
          onChange={(item) => {
            setValue2(item.value)
          }}
          renderLeftIcon={() => <Avatar width={40} height={40} style={{ marginRight: 12 }} />}
        />
        <View style={styles.separator} />
        <View className="h-8 mt-1 flex flex-row justify-between">
          <View className="flex flex-row">
            <Text className="font-semibold mr-3 mt-1">Adresse:</Text>
            <TouchableHighlight>
              <View className="bg-sky-200 p-1 px-2 rounded-lg text-xs flex flex-row">
                <Text className="text-sky-900 text-xs mr-2">0xF766...1995</Text>
                <View className="my-1">
                  <FontAwesomeIcon icon="clone" size={10} color={"rgb(12 74 110)"} />
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View className="mt-1 mr-2">
            <FontAwesomeIcon icon="ellipsis" />
          </View>
        </View>
      </View>
      <ThemeProvider theme={customTheme}>
        <Tab value={index} onChange={setIndex}>
          <Tab.Item>Jetons</Tab.Item>
          <Tab.Item>NFT</Tab.Item>
        </Tab>
      </ThemeProvider>
      <View className="mt-4 flex flex-row justify-between">
        <Text className="text-4xl">$0</Text>
        <Button
          type="outline"
          buttonStyle={{
            borderRadius: 20,
            padding: 10,
            paddingHorizontal: 16,
          }}
          onPress={() => console.log("Portefeuille")}
        >
          <View className="flex flex-row justify-between items-center">
            <Text className="mr-2 text-sm text-sky-800">Portefeuille</Text>
            <FontAwesomeIcon icon="arrow-up-right-from-square" size={14} color={"rgb(12 74 110)"} />
          </View>
        </Button>
      </View>

      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row" style={{ marginLeft: -16 }}>
          <EtherSvg width={60} height={60} />
          <View className="mt-4">
            <Text>Ethereum</Text>
            <Text className="text-slate-500">0 ETH</Text>
          </View>
        </View>
        <Text className="text-xl">$0.00</Text>
      </View>

      <Text className="font-bold w-full text-center my-2">Ajouter un crypto-actif pour commencer</Text>
      <Button
        title="Achetez ETH"
        onPress={() => console.log("Achetez ETH")}
        buttonStyle={{
          borderRadius: 20,
          backgroundColor: "#0376c9",
          padding: 10,
        }}
      />
      <View className="flex flex-row justify-between m-3">
        <Text className="text-xs">Vous ne voyez pas votre jeton?</Text>
        <Text className="text-xs text-sky-800">Importez des jetons</Text>
      </View>
      <View className="bg-orange-100 p-4 rounded-lg border-solid border-orange-200 border-2 mb-8">
        <View className="flex flex-row justify-start">
          <FontAwesomeIcon icon="bell" size={14} />
          <Text className="text-xs font-bold ml-2">Protégez votre portefeuille</Text>
        </View>
        <View className="flex flex-row justify-end mt-3">
          <Text className="text-xs text-sky-800 mr-3">Me le rappeler plus tard</Text>
          <Text className="text-xs text-sky-800 font-bold">Protégez le portefeuille</Text>
        </View>
      </View>

      <Button
        title="Open SumSub SDK... in progress"
        onPress={() => console.log("launchSNSMobileSDK")}
        buttonStyle={{
          borderRadius: 20,
          backgroundColor: "#ccc",
          padding: 10,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  dropdown: {
    marginHorizontal: 60,
    height: 30,
    padding: 12,
    paddingLeft: 6,
    backgroundColor: "#eee",
    borderRadius: 12,
    color: "#666",
    width: 250,
  },
  separator: {
    marginVertical: 14,
    borderBottomColor: "#999",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})

export default Home
