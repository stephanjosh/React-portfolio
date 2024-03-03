import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Stephan!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar
        size="2xl"
        name="Stephan"
        src="https://scontent.fnbo11-1.fna.fbcdn.net/v/t39.30808-6/375061533_261655620155555_1510686651190963850_n.jpg?stp=c52.0.206.206a_dst-jpg_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeGpiJic5JXd4orbhJ6N6c7ClJOxBrNWEzWUk7EGs1YTNeVhjmBtzMBYcms5a_6RrTfrM9dSQW-vU6Jeui_lUqGj&_nc_ohc=ZlK3-36uz0oAX-VcB3B&_nc_ht=scontent.fnbo11-1.fna&oh=00_AfD0zOQhIDBY33YV53h2HeWje-az3IT02xI9oS1TY95Oog&oe=6592E974"
      />
      <p>{greeting}</p>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
