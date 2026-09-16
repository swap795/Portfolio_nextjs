import Head from "next/head";
import Home from "../app/src/Components/Home";
import TimeLine from "../app/src/Components/TimeLine";
import {
  commonStrings as commonStringsBundle,
  homeStrings as homeStringsBundle,
  strings as mainStringsBundle,
} from "../app/src/util/strings";
import { timelineData as timelineDataBundle } from "../app/src/util/portfolioData";

export default function Index({
  mainStrings = mainStringsBundle,
  homeStrings = homeStringsBundle,
  commonStrings = commonStringsBundle,
  timelineData = timelineDataBundle,
}) {
  return (
    <div>
      <Head>
        <title>{mainStrings.app_title}</title>
        <meta name="description" content="Swapnil Thapa's Portfolio WebSite." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Home strings={homeStrings} />
        <TimeLine strings={commonStrings} timelineEvents={timelineData} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      mainStrings: mainStringsBundle,
      homeStrings: homeStringsBundle,
      commonStrings: commonStringsBundle,
      timelineData: timelineDataBundle,
    },
  };
}
