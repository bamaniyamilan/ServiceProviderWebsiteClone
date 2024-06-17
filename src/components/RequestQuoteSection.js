import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const QuoteCard = styled(Card)(({ theme }) => ({
  height: "100%",
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const RequestQuoteSection = () => {
  return (
    <Box component="section" sx={{ backgroundColor: "#f8f9fa", py: 15 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid sx={{ display: "flex" }} item xs={12} sm={6}>
            <QuoteCard>
              <Typography sx={{
                color: "#5B6674",
                fontFamily: "sans-serif",
                letterSpacing: "3.5px"
              }} variant="h6" align="left" gutterBottom>Contact us</Typography>
              <Typography
                variant="h5"
                align="left"
                gutterBottom
                sx={{ fontWeight: "bold" }} >
                Request A Quote
              </Typography>
              <Typography sx={{ marginTop: 5 }} variant="body1" align="left" gutterBottom>
                At Aelum, we leverage IT security and automation to help you. If
                you have any questions or need help, feel free to contact our
                team or call{" "}
                <strong className="color-main">
                  <i className="fa fa-phone"></i>{" "}
                  <a
                    className="phone-track"
                    href="tel:+918209254248"
                    onClick={() => { }}
                  >
                    +91 820-9254-248
                  </a>
                </strong>
              </Typography>
              <CardContent>
                <img
                  src="https://aelumconsulting.com/wp-content/uploads/2024/05/contact-us.webp"
                  alt="Connect With Aelum's ServiceNow Consultant"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "400px",
                    marginBottom: 20,
                  }}
                />
              </CardContent>
            </QuoteCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <QuoteCard>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                      <InputLabel htmlFor="name">Name</InputLabel>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="name"
                        name="name"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                      <InputLabel htmlFor="company-name">Company Name</InputLabel>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="company-name"
                        name="company-name"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                      <InputLabel htmlFor="email">Email</InputLabel>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        name="email"
                        type="email"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                      <InputLabel htmlFor="phone">Phone</InputLabel>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="phone"
                        name="phone"
                        type="tel"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth required>
                      <InputLabel htmlFor="service-now-select">
                        Which ServiceNow services do you need?
                      </InputLabel>
                      <Select
                        labelId="service-now-select-label"
                        id="service-now-select"
                        fullWidth
                        label="Which ServiceNow services do you need?"
                      >
                        <MenuItem value="ServiceNow Consulting">
                          ServiceNow Consulting
                        </MenuItem>
                        <MenuItem value="ServiceNow Implementation">
                          ServiceNow Implementation
                        </MenuItem>
                        <MenuItem value="ServiceNow Microassessment">
                          ServiceNow Microassessment
                        </MenuItem>
                        <MenuItem value="ServiceNow Support">
                          ServiceNow Support
                        </MenuItem>
                        <MenuItem value="ServiceNow Application development">
                          ServiceNow Application development
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth required>
                      <InputLabel htmlFor="message">Your Message</InputLabel>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="message"
                        name="message"
                        multiline
                        rows={4}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 5, mb: 12, backgroundColor: '#0a9b97' }}
                >
                  Get A Free Quote
                </Button>
              </CardContent>
            </QuoteCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RequestQuoteSection;
