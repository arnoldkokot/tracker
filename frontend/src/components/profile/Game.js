import React from "react";
import { Box, Avatar, ActionList } from "@primer/react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Box
      borderColor="border.default"
      borderWidth={1}
      borderStyle="solid"
      borderRadius={2}
      mb={2}
      display="flex"
      alignItems="center"
    >
      <Box width={12} alignSelf="stretch" bg="danger.subtle" mr={3}></Box>

      <Box flexGrow={1}>Game Data</Box>

      <Box display="flex">
        <ActionList>
          <ActionList.Item as={Link} to="/summoner/Player 1">
            <ActionList.LeadingVisual>
              <Avatar src="https://github.com/mona.png" />
            </ActionList.LeadingVisual>
            Player 1
          </ActionList.Item>
          <ActionList.Item>
            <ActionList.LeadingVisual>
              <Avatar src="https://github.com/mona.png" />
            </ActionList.LeadingVisual>
            Player 2
          </ActionList.Item>
          <ActionList.Item>
            <ActionList.LeadingVisual>
              <Avatar src="https://github.com/mona.png" />
            </ActionList.LeadingVisual>
            Player 3
          </ActionList.Item>
          <ActionList.Item>
            <ActionList.LeadingVisual>
              <Avatar src="https://github.com/mona.png" />
            </ActionList.LeadingVisual>
            Player 4
          </ActionList.Item>
          <ActionList.Item>
            <ActionList.LeadingVisual>
              <Avatar src="https://github.com/mona.png" />
            </ActionList.LeadingVisual>
            Player 5
          </ActionList.Item>
        </ActionList>

        <ActionList>
          <ActionList.Item>
            <ActionList.LeadingVisual>
              <Avatar src="https://github.com/mona.png" />
            </ActionList.LeadingVisual>
            Player 6
          </ActionList.Item>
          <ActionList.Item>
            <ActionList.LeadingVisual>
              <Avatar src="https://github.com/mona.png" />
            </ActionList.LeadingVisual>
            Player 7
          </ActionList.Item>
          <ActionList.Item>
            <ActionList.LeadingVisual>
              <Avatar src="https://github.com/mona.png" />
            </ActionList.LeadingVisual>
            Player 8
          </ActionList.Item>
          <ActionList.Item>
            <ActionList.LeadingVisual>
              <Avatar src="https://github.com/mona.png" />
            </ActionList.LeadingVisual>
            Player 9
          </ActionList.Item>
          <ActionList.Item>
            <ActionList.LeadingVisual>
              <Avatar src="https://github.com/mona.png" />
            </ActionList.LeadingVisual>
            Player 10
          </ActionList.Item>
        </ActionList>
      </Box>
    </Box>
  );
};
