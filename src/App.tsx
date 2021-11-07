import BaseContainer from "./components/base/Container";
import NewDisney from "./components/NewDisney";

export default function Root() {
  return (
    <BaseContainer>
      <NewDisney />
      <div />
    </BaseContainer>
  );
}
