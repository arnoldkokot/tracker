import React from "react";
import { Box, Avatar, ActionList, Text } from "@primer/react";
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
      alignItems="stretch"
    >
      <Box width={12} bg="danger.subtle" mr={3} />

      <Box flexGrow={1}>
        <Box display="flex" alignItems="center">
          <Avatar
            size={40}
            src="http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/Aatrox.png"
          />
          <Text as="p" fontWeight="bold" ml={2}>
            10 / 1 / 0
          </Text>
        </Box>
        <Box display="flex" sx={{ gap: "2px" }}>
          <Avatar
            square
            src="http://ddragon.leagueoflegends.com/cdn/12.7.1/img/item/1001.png"
            size={30}
          />
          <Avatar
            square
            src="http://ddragon.leagueoflegends.com/cdn/12.7.1/img/item/1001.png"
            size={30}
          />
          <Avatar
            square
            src="http://ddragon.leagueoflegends.com/cdn/12.7.1/img/item/1001.png"
            size={30}
          />
          <Avatar
            square
            src="http://ddragon.leagueoflegends.com/cdn/12.7.1/img/item/1001.png"
            size={30}
          />
          <Avatar
            square
            src="http://ddragon.leagueoflegends.com/cdn/12.7.1/img/item/1001.png"
            size={30}
          />
          <Avatar
            square
            src="http://ddragon.leagueoflegends.com/cdn/12.7.1/img/item/1001.png"
            size={30}
          />
          <Avatar
            square
            src="http://ddragon.leagueoflegends.com/cdn/12.7.1/img/item/1001.png"
            size={30}
          />
        </Box>
      </Box>

      <Box display="flex">
        <ActionList>
          <ActionList.Item as={Link} to="/summoner/Player 1">
            <ActionList.LeadingVisual>
              <Avatar src="http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/Aatrox.png" />
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
