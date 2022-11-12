import { Flex } from "@chakra-ui/react";
import { LeftContainer } from "./components/LeftBox/LeftContainer";
import RightContainer from './components/RightBox/RightContainer';

function App() {
  return (
    <Flex>
      <div><LeftContainer /></div>
      <div style={{width:"3px",height:"600px","background-color":"gray",marginLeft:"10px"}}></div>
      <div><RightContainer /></div>
    </Flex>
  );
}

export default App;
