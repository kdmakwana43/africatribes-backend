import { Box, H2, Text, theme } from "@adminjs/design-system";
import { ApiClient } from "adminjs";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const api = new ApiClient();

  useEffect(() => {
    api
      .getDashboard()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Dashboard API error:", error);
      });
  }, []);

  return (
    <Box variant="grey" padding="xl">
      <H2 mb="xl">Welcome to the Admin Dashboard</H2>

      {/* <Box display="flex" flexWrap="wrap" gap="lg">
        {data &&
          Object.entries(data).map(([key, value]) => (
            <Box
              key={key}
              width={["100%", "calc(50% - 20px)", "calc(33.33% - 20px)", "calc(25% - 20px)"]} // responsive: 1-col, 2-col, 3-col, 4-col
              height={270}
              bg="white"
              boxShadow="card"
              borderRadius="xl"
              padding="lg"
              margin="10px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
            >
              <Text fontSize={20} fontWeight="semi-bold" mb={38}>
                {key}
              </Text>
              <Text fontSize={40} fontWeight="bold" color={theme.colors.primary100}>
                {value}
              </Text>
            </Box>
          ))}
      </Box> */}
    </Box>
  );
};

export default Dashboard;
