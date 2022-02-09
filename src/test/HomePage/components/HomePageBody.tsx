import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import CardItem from "../../CardItem/CardItem";
import { fetchAvatar } from "../../service/charachter.slice";

export default function HomePageBody() {
  const count = useSelector((state: RootState) => state.counter.avatar);
  const { results } = count;
  const dispachEvent = useDispatch();
  const [filterValeu, setFilter] = useState([]);

  useEffect(() => {
    dispachEvent(fetchAvatar());
  }, []);
  console.log("here", count);

  const filter = (filterType: string) => {
    let filterData = [];
    if ((filterType = "Male")) {
      filterData = results.filter((ele) => ele.gender == filterType);
      setFilter(filterData);
    } else {
      filterData = results.filter((ele) => ele.gender == filterType);
      setFilter(filterData);
    }
  };

  const renderData = (records) => {
    return records?.map((ele) => {
      return <CardItem ele={ele} />;
    });
  };

  return (
    <HStack w="100%" h="90%">
      <Box w="10%" bg="teal" h="90%">
        {/* <VStack h="100%"> */}
        <Button onClick={() => filter("Male")}>MAle</Button>
        <Button onClick={() => filter("Female")}>Female</Button>
        {/* </VStack> */}
      </Box>
      <Box w="90%">
        {renderData(filterValeu.length > 0 ? filterValeu : results)}
      </Box>
    </HStack>
  );
}
