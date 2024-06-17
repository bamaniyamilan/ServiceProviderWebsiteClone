import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { FaPhoneSquare, FaEnvelopeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#283c3d", color: "white", py: 4 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems="center"
              justifyContent="space-between"
              mb={4}
            >
             <Box mb={{ xs: 2, sm: 0 }} display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
            {/* Phone Section */}
            <Box
                mr={3}
                display="flex"
                alignItems="center"
                mb={{ xs: 2, sm: 0 }}
            >
                <FaPhoneSquare />
                <Link
                    href="tel:+918209254248"
                    onClick={() => {
                        window.gtag &&
                            window.gtag("event", "Phone call", {
                                event_category: "call",
                                event_action: "click",
                                event_label: "+91-8209254248",
                            });
                    }}
                    color="inherit"
                    ml={1}
                    underline="none"
                >
                    +91-8209254248
                </Link>
            </Box>
            {/* Email Section */}
            <Box display="flex" alignItems="center">
                <FaEnvelopeSquare />
                <Link
                    href="mailto:connect@aelumconsulting.com"
                    color="inherit"
                    ml={1}
                    underline="none"
                >
                    connect@aelumconsulting.com
                </Link>
            </Box>
        </Box>
              <Box
                component="form"
                action="https://aelumconsulting.com/?na=s"
                method="post"
                display="flex"
                alignItems="center"
              >
                <input type="hidden" name="nr" value="widget-minimal" />
                <TextField
                  type="email"
                  required
                  name="ne"
                  placeholder="Email"
                  variant="outlined"
                  size="small"
                  sx={{ mr: 1, backgroundColor: "white", borderRadius: 1 }}
                />
                <Button style={{backgroundColor : "#0A9B97"}} type="submit" variant="contained" color="primary">
                  Subscribe
                </Button>
              </Box>
            </Box>
            <div>
              <hr style={{ borderColor: "1px solid black" }} />
            </div>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box mb={4}>
              <Box mb={2}>
                <picture>
                  <source
                    srcSet="https://aelumconsulting.com/wp-content/webp-express/webp-images/uploads/2024/04/aelumlogowhite-1.png.webp"
                    type="image/webp"
                  />
                  <img
                    src="https://aelumconsulting.com/wp-content/uploads/2024/04/aelumlogowhite-1.png"
                    alt="logo"
                    width="150"
                    height="auto"
                  />
                </picture>
              </Box>
              <Typography variant="body1" style={{color:"#FFFFFFB3"}}>
                Aelum Consulting is a premier ServiceNow implementation partner
                which combines transformation capabilities with a
                customer-centric approach. We are providing end-to-end solutions
                around ServiceNow ITSM Process, ServiceNow Implementation,
                Consulting, Software development, and support. We have extensive
                experience in designing empirical processes for our valuable
                customers that can reduce their Operating Costs. We are{" "}
                <Link
                  href="https://www.servicenow.com/partners/partner-finder/aelum-consulting-pvt-ltd.html"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: "#0a9b97", fontWeight: 800 }}
                >
                  Certified ServiceNow Premier Partner
                </Link>
                . We are using ServiceNow to create great Employee experiences
                and unlock productivity.
              </Typography>
              <Box mt={2} display="flex" gap={2}>
                <picture>
                  <source
                    srcSet="https://aelumconsulting.com/wp-content/webp-express/webp-images/uploads/2021/11/iso2013-1.png.webp"
                    type="image/webp"
                  />
                  <img
                    src="https://aelumconsulting.com/wp-content/uploads/2021/11/iso2013-1.png"
                    alt="ISO 2013"
                    width="100"
                    height="100"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="https://aelumconsulting.com/wp-content/webp-express/webp-images/uploads/2021/11/iso2015-1.png.webp"
                    type="image/webp"
                  />
                  <img
                    src="https://aelumconsulting.com/wp-content/uploads/2021/11/iso2015-1.png"
                    alt="ISO 2015"
                    width="100"
                    height="100"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="https://aelumconsulting.com/wp-content/webp-express/webp-images/uploads/2022/03/badgewhite.png.webp"
                    type="image/webp"
                  />
                  <img
                    src="https://aelumconsulting.com/wp-content/uploads/2022/03/badgewhite.png"
                    alt="servicenow badge"
                    width="100"
                    height="100"
                  />
                </picture>
              </Box>
            </Box>
          </Grid>
          <Grid style={{ display: "flex" }} item xs={12} md={4} >
            <Box mb={4}>
              <Typography style={{ marginBottom: "20px" }} variant="h6" gutterBottom>
                Services
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0 }}>
                <li style={{ marginBottom: "10px" }}>
                  <Link style={{color:"#FFFFFFB3"}}
                    href="https://aelumconsulting.com/servicenow/"
                    color="inherit"
                    underline="hover"
                  >
                    Service Now
                  </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Link style={{color:"#FFFFFFB3"}}
                    href="https://aelumconsulting.com/it-workflows/"
                    color="inherit"
                    underline="hover"
                  >
                    IT Workflows
                  </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Link style={{color:"#FFFFFFB3"}}
                    href="https://aelumconsulting.com/creator-workflows/"
                    color="inherit"
                    underline="hover"
                  >
                    Creator Workflows
                  </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Link style={{color:"#FFFFFFB3"}}
                    href="https://aelumconsulting.com/customer-workflows/"
                    color="inherit"
                    underline="hover"
                  >
                    Customer Workflows
                  </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Link style={{color:"#FFFFFFB3"}}
                    href="https://aelumconsulting.com/employee-workflows/"
                    color="inherit"
                    underline="hover"
                  >
                    Employee Workflows
                  </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Link style={{color:"#FFFFFFB3"}}
                    href="https://aelumconsulting.com/product-engineering/"
                    color="inherit"
                    underline="hover"
                  >
                    Product Engineering
                  </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Link style={{color:"#FFFFFFB3"}}
                    href="https://aelumconsulting.com/digital-transformation/"
                    color="inherit"
                    underline="hover"
                  >
                    Digital Transformation
                  </Link>
                </li>
              </Box>
            </Box>
            <Box style={{ marginLeft: "50px" }} mb={4}>
              <Typography style={{ marginBottom: "20px" }} variant="h6" gutterBottom>
                Company
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0 }}>
                <li style={{ marginBottom: "10px" }}>
                  <Link style={{color:"#FFFFFFB3"}}
                    href="https://aelumconsulting.com/popular-blogs/"
                    color="inherit"
                    underline="hover"

                  >
                    Blog
                  </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Link style={{color:"#FFFFFFB3"}}
                    href="https://aelumconsulting.com/career/"
                    color="inherit"
                    underline="hover"
                  >
                    Career
                  </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Link style={{color:"#FFFFFFB3"}}
                    href="https://aelumconsulting.com/about-us/"
                    color="inherit"
                    underline="hover"
                  >
                    About us
                  </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Link style={{color:"#FFFFFFB3"}}
                    href="https://aelumconsulting.com/our-team/"
                    color="inherit"
                    underline="hover"
                  >
                    Our Team
                  </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Link style={{color:"#FFFFFFB3"}}
                    href="https://aelumconsulting.com/contact-us/"
                    color="inherit"
                    underline="hover"
                  >
                    Contact us
                  </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Link style={{color:"#FFFFFFB3"}}
                    href="https://aelumconsulting.com/privacy-policy/"
                    color="inherit"
                    underline="hover"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Link style={{color:"#FFFFFFB3"}}
                    href="https://aelumconsulting.com/cookie-policy/"
                    color="inherit"
                    underline="hover"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ borderColor: "#333" }} />
            <Box textAlign="left" pt={2}>
              <Typography variant="body2" style={{color:"#FFFFFFB3"}}>
                ©2024{" "}
                <Link 
                  href="https://aelumconsulting.com/"
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                >
                  Aelum Consulting
                </Link>
                , All Rights Reserved.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
