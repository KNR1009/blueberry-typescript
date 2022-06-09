import type { NextPage } from "next";
// 第2章
import { Basic } from "../src/components/02_BasicGrammarAndTypes";
import { ObjectType } from "../src/components/03_ObjectType";

const Home: NextPage = () => {
  return (
    <>
      {/* <Basic></Basic> */}
      <ObjectType />
    </>
  );
};

export default Home;
