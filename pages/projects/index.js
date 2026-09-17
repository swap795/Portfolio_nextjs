import BaselinePlaceholder from "../../app/src/Components/BaselinePlaceholder";
import { commonStrings } from "../../app/src/util/strings";

export default function Projects({ strings = commonStrings }) {
  return (
    <BaselinePlaceholder
      title={strings.projects}
      message="Project details will be added during the portfolio redesign."
    />
  );
}

export async function getStaticProps() {
  return {
    props: {
      strings: commonStrings,
    },
  };
}
