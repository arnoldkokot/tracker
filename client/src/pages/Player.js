import React from "react";
import { PageLayout, Avatar, Box, Button, Heading, Text } from "@primer/react";
import profileIcon from "../assets/profileIcon.jpg";
import platinum from "../assets/platinum.webp";

export default function Player() {
  return (
    <PageLayout>
      <PageLayout.Header sx={{ display: "flex", gap: "24px" }}>
        <Avatar src={profileIcon} alt="Player profile icon" square size={100} />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
        >
          <Heading>Deithy</Heading>
          <Button>Refresh</Button>
        </Box>
      </PageLayout.Header>
      <PageLayout.Pane position="start">
        {/* First ranked emblem */}
        <Box bg="canvas.subtle" borderRadius={6} p={2} mb={2}>
          <Text fontWeight="bold" fontSize={1}>
            Ranked Solo
          </Text>
          <Box display="flex" alignItems="center">
            <Avatar src={platinum} size={72} />
            <Box>
              <Text as="p" fontWeight="bold" fontSize={3} m={0}>
                Platinum 1
              </Text>
              <Text as="p" fontSize={1} m={0}>
                54 LP
              </Text>
            </Box>
          </Box>
        </Box>
        {/* Second ranked emblem */}
        <Box bg="canvas.subtle" borderRadius={6} p={2}>
          <Box display="flex" justifyContent="space-between">
            <Text fontWeight="bold" fontSize={1}>
              Ranked Flex
            </Text>
            <Text fontWeight="bold" fontSize={1}>
              Unranked
            </Text>
          </Box>
        </Box>
      </PageLayout.Pane>
      <PageLayout.Content>
        <p>Content</p>
      </PageLayout.Content>
      <PageLayout.Footer>{/* FOOTER */}</PageLayout.Footer>
    </PageLayout>
  );
}
