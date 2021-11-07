import BaseContainer from "./components/base/Container";
import NewDisney from "./components/NewDisney";
import Recommended from "./components/Recommend";
import Trending from "./components/Trending";

export default function Root() {
  return (
    <BaseContainer>
      <NewDisney />
      <Recommended />
      <Trending />
    </BaseContainer>
  );
}
