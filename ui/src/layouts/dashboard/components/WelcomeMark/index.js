import React from "react";

import { Card, Icon } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { setOpenConfigurator, useVisionUIController } from "context";

import gif from "assets/images/cardimgfree.jpg";
import gif2 from "assets/images/cardimagefree2.jpg";

const WelcomeMark = () => {
  const [controller, dispatch] = useVisionUIController();
  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, true);

  return (
    <Card
      sx={() => ({
        height: "340px",
        py: "32px",
        backgroundImage: `url(${gif2})`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
      })}
    >
      <VuiBox height="100%" display="flex" flexDirection="column" justifyContent="space-between">
        <VuiBox>
          <VuiTypography color="text" variant="button" fontWeight="regular" mb="12px">
            Welcome back,
          </VuiTypography>
          <VuiTypography color="white" variant="h3" fontWeight="bold" mb="18px">
            Mark Johnson
          </VuiTypography>
          <VuiTypography color="text" variant="h6" fontWeight="regular" mb="auto">
            Glad to see you again!
            <br /> Ask me anything.
          </VuiTypography>
        </VuiBox>
        <VuiTypography
          component="a"
          href="#"
          variant="button"
          color="white"
          fontWeight="regular"
          sx={{
            mr: "5px",
            display: "inline-flex",
            alignItems: "center",
            cursor: "pointer",

            "& .material-icons-round": {
              fontSize: "1.125rem",
              transform: `translate(2px, -0.5px)`,
              transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
            },

            "&:hover .material-icons-round, &:focus  .material-icons-round": {
              transform: `translate(6px, -0.5px)`,
            },
          }}
        >
          <span onClick={() => handleCloseConfigurator()} style={{ fontSize: "28px" }}>
            Take advise!
          </span>
          <Icon sx={{ fontWeight: "bold", ml: "5px" }}>arrow_forward</Icon>
        </VuiTypography>
      </VuiBox>
    </Card>
  );
};

export default WelcomeMark;
