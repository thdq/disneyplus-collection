import BaseContainer from "./components/base/Container";
import NewDisney from "./components/NewDisney";
import Recommended from "./components/Recommend";
import Trending from "./components/Trending";
import Original from "./components/Original";
import { useEffect } from "react";

export default function Root() {
  useEffect(() => {
    window.addEventListener(
      "@disneyplus/event/focus-on-collection",
      ({ detail }: CustomEventInit) => {
        document.querySelector(`.collection-${detail.name}`).scrollIntoView();
      }
    );
  }, []);

  return (
    <BaseContainer>
      <NewDisney />
      <Recommended />
      <Trending />
      <Original />
    </BaseContainer>
  );
}
