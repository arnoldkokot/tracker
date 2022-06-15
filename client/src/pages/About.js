import React from "react";
import { Timeline, StyledOcticon, PageLayout } from "@primer/react";
import { FlameIcon } from "@primer/octicons-react";

export default function About() {
  return (
    <PageLayout.Content>
      <Timeline>
        <Timeline.Item>
          <Timeline.Badge>
            <StyledOcticon icon={FlameIcon} />
          </Timeline.Badge>
          <Timeline.Body>League tracker v1.0.0</Timeline.Body>
        </Timeline.Item>
      </Timeline>
    </PageLayout.Content>
  );
}
