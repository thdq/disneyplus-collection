import BaseContainer from "./components/base/Container";
import NewDisney from "./components/NewDisney";
import Recommended from "./components/Recommend";

export default function Root() {
  return (
    <BaseContainer>
      <NewDisney />
      <Recommended />
    </BaseContainer>
  );
}
