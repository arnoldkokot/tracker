import React from "react";
import {
  Timeline,
  StyledOcticon,
  PageLayout,
  Pagehead,
  Text,
  Link,
} from "@primer/react";
import { IssueClosedIcon } from "@primer/octicons-react";

export default function About() {
  return (
    <>
      <PageLayout.Content>
        <Pagehead sx={{ fontSize: "4", fontWeight: "bold" }}>
          League tracker
        </Pagehead>
        <Text>
          League tracker provides insight to League of Legends players about
          thier game performance, match history, and ranked ladder via Riot API.
        </Text>
        <Timeline sx={{ marginTop: "5" }}>
          <Timeline.Item>
            <Timeline.Badge sx={{ bg: "success.emphasis" }}>
              <StyledOcticon
                icon={IssueClosedIcon}
                sx={{ color: "fg.onEmphasis" }}
              />
            </Timeline.Badge>
            <Timeline.Body>June 16, 2022, Version 2.0.0 released</Timeline.Body>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Badge sx={{ bg: "success.emphasis" }}>
              <StyledOcticon
                icon={IssueClosedIcon}
                sx={{ color: "fg.onEmphasis" }}
              />
            </Timeline.Badge>
            <Timeline.Body>May 30, 2022, League tracker released</Timeline.Body>
          </Timeline.Item>
          {/* Jul 15, 2021 prototype */}
        </Timeline>
      </PageLayout.Content>
      <PageLayout.Footer sx={{ fontFamily: "mono", paddingTop: "5" }}>
        <Link href="https://arnoldkokot.com" target="_blank">
          Created by Arnold Kokot
        </Link>
      </PageLayout.Footer>
    </>
  );
}
