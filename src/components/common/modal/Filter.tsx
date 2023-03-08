import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Button,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { FC, useState, useRef, useEffect } from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import ModalWrapper from "./ModalWrapper";
import RadioButton from "../RadioButton/RadioButton";
import rootStore from "../../../store/Store";
import { observer } from "mobx-react";
import Btn from "../Btn";
import { Anim } from "../Animation";
import CustomeCategory from "./FilterCategory";
import Spiner from "../../../assets/image/spinner.svg";
import CustomeText from "./../CustomeText";

const Sort: Array<{ value: string; label: string }> = [
  { value: "name", label: "نام" },
  { value: "cost", label: "قیمت" },
  { value: "students", label: "فروش" },
  { value: "date", label: "تاریخ" },
  { value: "capacity", label: "ظرفیت" },
];

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SortArr: Array<{ value: string; label: string }> = [
  { value: "asc", label: "بالا به پایین" },
  { value: "dsc", label: "پایین به بالا" },
];
const SeacrArr: Array<{ value: string; label: string }> = [
  { value: "Course", label: "نام دوره" },
  { value: "Teacher", label: "نام معلم" },
];

const Filter: FC<Props> = ({ visible, setVisible }) => {
  const filteringStore = rootStore.filteringStore[0];
  const GetfilteringStore = rootStore.getFilteringData()[0];
  const IncreseLeft = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (GetfilteringStore.isOn) {
      Anim(IncreseLeft, 24, 300, 0);
    } else {
      Anim(IncreseLeft, 0, 300, 0);
    }
  }, [GetfilteringStore.isOn]);
  useEffect(() => {
    if (!visible) {
      filteringStore.SetSubmit();
    }
  }, [visible]);
  const [CostLabel, SetCost] = useState([0, 0]);
  const [CapacityLabel, SetCapacity] = useState([0, 0]);
  useEffect(() => {
    SetCost(GetfilteringStore.Cost);
    SetCapacity(GetfilteringStore.Capacity);
  }, []);
  return (
    <>
      <ModalWrapper setVisible={setVisible} visible={visible}>
        <>
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Btn
              Vstyle={{
                width: 45,
                height: 20,
                borderRadius: 50,
                backgroundColor: "white",
                alignSelf: "flex-end",
                borderWidth: 1,
                borderColor: "#cecece",
                justifyContent: "center",
                paddingHorizontal: 2,
              }}
              Tstyle={{ display: "none" }}
              Press={() => {
                filteringStore.SetOnOff(!GetfilteringStore.isOn);
              }}
            >
              <Animated.View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: GetfilteringStore.isOn ? "#4F91FF" : "#ccc",
                  borderRadius: 15,
                  marginLeft: IncreseLeft,
                }}
              />
            </Btn>
            <View
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
            >
              <Btn
                Tstyle={{ display: "none" }}
                Vstyle={{ marginLeft: 10 }}
                Press={() => {
                  filteringStore.SetClear();
                  SetCost([0, GetfilteringStore.max]);
                  SetCapacity([0, GetfilteringStore.maxCapacity]);
                }}
              >
                <Spiner fill={"#4F91FF"} width={20} />
              </Btn>
              <Btn
                Tstyle={{
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  fontSize: 50,
                  height: 20,
                  lineHeight: 50,
                  transform: [{ rotate: "45deg" }],
                  color: "#E44",
                }}
                Vstyle={{}}
                Press={() => setVisible(false)}
                title="+"
              />
            </View>
          </View>
          <CustomeCategory
            arr={Sort}
            title="مرتب سازی"
            check={GetfilteringStore.Sort}
            SetCheck={filteringStore.SetSort}
          />
          <View style={{ marginBottom: 8 }}>
            <CustomeText
              myStyle={{
                fontSize: 15,
                color: "#707070",
                marginVertical: 10,
              }}
            >
              جستجو بر اساس :
            </CustomeText>
            <RadioButton
              array={SeacrArr}
              check={GetfilteringStore.SearchOption}
              SetCheck={filteringStore.SetSearchOp}
            />
          </View>
          <View>
            <CustomeText
              myStyle={{
                fontSize: 15,
                color: "#707070",
                marginVertical: 10,
              }}
            >
              ترتیب :
            </CustomeText>
            <RadioButton
              array={SortArr}
              check={GetfilteringStore.SortDirection}
              SetCheck={filteringStore.SetSortDir}
            />
          </View>
          <View
            style={{
              width: "100%",
              borderWidth: 1,
              borderColor: "#E3E6E8",
              marginVertical: 20,
            }}
          />
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          >
            <CustomeText myStyle={{ fontSize: 15, color: "#707070" }}>
              محدوده قیمت
            </CustomeText>

            <View style={{ flexDirection: "row" }}>
              <CustomeText>{CostLabel[0].toFixed()}</CustomeText>
              <CustomeText myStyle={{ marginLeft: 10 }}>
                {CostLabel[1].toFixed()}
              </CustomeText>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MultiSlider
              isMarkersSeparated={true}
              values={[
                parseInt(GetfilteringStore.Cost[0].toFixed()),
                parseInt(GetfilteringStore.Cost[1].toFixed()),
              ]}
              min={0}
              max={GetfilteringStore.max}
              sliderLength={220}
              onValuesChange={(val) => {
                SetCost([val[0], val[1]]);
              }}
              step={1000}
              onValuesChangeFinish={(val) => {
                filteringStore.SetCost([val[0], val[1]]);
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          >
            <CustomeText myStyle={{ fontSize: 15, color: "#707070" }}>
              محدوده قیمت
            </CustomeText>

            <View style={{ flexDirection: "row" }}>
              <CustomeText>{CapacityLabel[0].toFixed()}</CustomeText>
              <CustomeText myStyle={{ marginLeft: 10 }}>
                {CapacityLabel[1].toFixed()}
              </CustomeText>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MultiSlider
              isMarkersSeparated={true}
              values={[
                parseInt(GetfilteringStore.Capacity[0].toFixed()),
                parseInt(GetfilteringStore.Capacity[1].toFixed()),
              ]}
              min={0}
              max={GetfilteringStore.maxCapacity}
              onValuesChange={(val) => SetCapacity(val)}
              onValuesChangeFinish={(val) => {
                filteringStore.SetCapacity(val);
              }}
              sliderLength={220}
            />
          </View>

          <View
            style={{
              width: "100%",
              borderWidth: 1,
              borderColor: "#E3E6E8",
              marginVertical: 20,
            }}
          />

          <CustomeText
            myStyle={{
              fontSize: 12,
              color: "rgb(120,120,120)",
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            *در هنگام تغییرات، فیلترینگ اعمال نمیشود*
          </CustomeText>
        </>
      </ModalWrapper>
    </>
  );
};

export default observer(Filter);

const styles = StyleSheet.create({});
