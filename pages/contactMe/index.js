import BaselinePlaceholder from "../../app/src/Components/BaselinePlaceholder";
import { commonStrings } from "../../app/src/util/strings";

export default function ContactMe({ strings = commonStrings }) {
  return (
    <BaselinePlaceholder
      title={strings.contact_me}
      message="Contact options will be added after a privacy-safe contact flow is approved."
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
