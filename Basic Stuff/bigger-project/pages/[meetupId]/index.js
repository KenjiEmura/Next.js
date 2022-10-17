import { useRouter } from "next/router";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const dummy_image_url =
  "https://wiki.uzed.com.br/assets/images/1200px-Wikipedia-logo-v2.svg_.png";

const MeetupDetails = () => {
  const router = useRouter();
  return (
    <MeetupDetail
      image={dummy_image_url}
      title={"A First Meetup"}
      address={"Some Street 6, Some City"}
      decription={"The meetup description"}
    />
  );
};

export default MeetupDetails;
