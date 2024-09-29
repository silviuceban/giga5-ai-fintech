// @mui material components
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import team1 from "assets/images/avatar1.png";
import team2 from "assets/images/avatar2.png";
import team3 from "assets/images/avatar3.png";
import team4 from "assets/images/avatar4.png";
// Images
import profile1 from "assets/images/profile-1.png";
import profile2 from "assets/images/profile-2.png";
import profile3 from "assets/images/profile-3.png";
import pc1 from "assets/images/pc.jpg";
import tour1 from "assets/images/tour.jpg";
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import Footer from "examples/Footer";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import Welcome from "../profile/components/Welcome/index";
import CarInformations from "./components/CarInformations";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <VuiBox mt={5} mb={3}>
        <Grid
          container
          spacing={3}
          sx={({ breakpoints }) => ({
            [breakpoints.only("xl")]: {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
          })}
        >
          <Grid
            item
            xs={12}
            xl={4}
            xxl={3}
            sx={({ breakpoints }) => ({
              minHeight: "400px",
              [breakpoints.only("xl")]: {
                gridArea: "1 / 1 / 2 / 2",
              },
            })}
          >
            <Welcome />
          </Grid>
          <Grid
            item
            xs={12}
            xl={5}
            xxl={6}
            sx={({ breakpoints }) => ({
              [breakpoints.only("xl")]: {
                gridArea: "2 / 1 / 3 / 3",
              },
            })}
          >
            <CarInformations />
          </Grid>
          <Grid
            item
            xs={12}
            xl={3}
            xxl={3}
            sx={({ breakpoints }) => ({
              [breakpoints.only("xl")]: {
                gridArea: "1 / 2 / 2 / 3",
              },
            })}
          >
            <ProfileInfoCard
              hideBlocks
              title="Goal information"
              description="I want to buy a reliable and modern car, preferably a mid-size SUV with excellent fuel efficiency and advanced safety features. Ideally, it should have a powerful engine, spacious interior, and cutting-edge technology like a touchscreen display, adaptive cruise control, and lane-keeping assistance. I’m looking for a model that’s known for durability, low maintenance costs, and a comfortable ride for both city driving and long road trips."
              info={{
                goal: "Mercedes GLB",
                price: "$ 59000",
                // email: "mark@simmmple.com",
                // location: "United States",
              }}
              social={[
                {
                  link: "https://999.md/ro/87875646",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/creativetim",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/creativetimofficial/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
            />
          </Grid>
        </Grid>
      </VuiBox>
      <Grid container spacing={3} mb="30px">
        <Grid item xs={12} xl={3} height="100%">
          <PlatformSettings />
        </Grid>
        <Grid item xs={12} xl={9}>
          <Card>
            <VuiBox display="flex" flexDirection="column" height="100%">
              <VuiBox display="flex" flexDirection="column" mb="24px">
                <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                  Current Goals
                </VuiTypography>
                <VuiTypography color="text" variant="button" fontWeight="regular">
                  Your list of goals
                </VuiTypography>
              </VuiBox>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={profile2}
                    label="goal #2"
                    title="Buy a car"
                    description="Equipped with the latest technology and safety features. With good engine and design."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW GOAL DESCRIPTION",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={pc1}
                    label="goal #12"
                    title="Buy PC"
                    description="Purchase a powerful, modern PC equipped with the latest high-performance components."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW GOAL DESCRIPTION",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={tour1}
                    label="goal #3"
                    title="Vacancy Tour"
                    description="Explore the charm of Europe with a guided tour through its most iconic cities."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW GOAL DESCRIPTION",
                    }}
                  />
                </Grid>
              </Grid>
            </VuiBox>
          </Card>
        </Grid>
      </Grid>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
