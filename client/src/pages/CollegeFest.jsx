import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Fade,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const collegeFestFunctions = [
  "Cultural Night",
  "Technical Events",
  "Sports Events",
  "Workshops",
  "Inauguration",
  "DJ Night",
  "Food Fest",
  "Closing Ceremony",
];

const services = [
  { name: "Stage Setup", img: "/images/Hero.jpg" },
  { name: "Sound System", img: "/images/Hero.jpg" },
  { name: "Lighting", img: "/images/Hero.jpg" },
  { name: "Catering", img: "/images/Hero.jpg" },
  { name: "Security", img: "/images/Hero.jpg" },
  { name: "Photography", img: "/images/Hero.jpg" },
  { name: "Volunteer Support", img: "/images/Hero.jpg" },
  { name: "Transportation", img: "/images/Hero.jpg" },
  { name: "Decorations", img: "/images/Hero.jpg" },
];

const CollegeFestEvent = () => {
  const [selected, setSelected] = useState({});
  const [selectAll, setSelectAll] = useState({});

  const toggleService = (func, service) => {
    setSelected((prev) => {
      const current = prev[func] || [];
      return {
        ...prev,
        [func]: current.includes(service)
          ? current.filter((s) => s !== service)
          : [...current, service],
      };
    });
  };

  const toggleSelectAll = (func) => {
    setSelectAll((prev) => {
      const isSelected = prev[func];
      return {
        ...prev,
        [func]: !isSelected,
      };
    });

    setSelected((prev) => {
      const updatedSelected = { ...prev };
      if (selectAll[func]) {
        updatedSelected[func] = [];
      } else {
        updatedSelected[func] = services.map((service) => service.name);
      }
      return updatedSelected;
    });
  };

  const handleSubmit = () => {
    console.log("Selected College Fest Package:", selected);
    alert("College Fest package selected! Check console for data.");
  };

  return (
    <div
      className="p-6 bg-gradient-to-br from-pink-50 to-purple-100 min-h-screen mt-14"
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#6a1b9a" }}
      >
        🎉 Customize Your College Fest Events 🎉
      </Typography>

      {collegeFestFunctions.map((func, index) => (
        <Fade in={true} timeout={700 + index * 200} key={func}>
          <Card
            sx={{
              mt: 4,
              padding: 2,
              boxShadow: 6,
              borderRadius: 4,
              backgroundColor: "#ffffffd9",
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "#8e24aa", fontWeight: "600" }}
              >
                {func}
              </Typography>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectAll[func] || false}
                    onChange={() => toggleSelectAll(func)}
                    color="primary"
                  />
                }
                label="Select All"
              />

              <Grid container spacing={3}>
                {services.map((service) => (
                  <Grid item xs={12} sm={6} md={4} key={service.name}>
                    <Card
                      onClick={() => toggleService(func, service.name)}
                      sx={{
                        cursor: "pointer",
                        border: selected[func]?.includes(service.name)
                          ? "3px solid #ab47bc"
                          : "1px solid #e0e0e0",
                        transition: "0.3s",
                        borderRadius: 3,
                        boxShadow: selected[func]?.includes(service.name)
                          ? 6
                          : 2,
                        transform: selected[func]?.includes(service.name)
                          ? "scale(1.02)"
                          : "scale(1)",
                      }}
                    >
                      <CardContent>
                        <img
                          src={service.img}
                          alt={service.name}
                          style={{
                            width: 50,
                            height: 50,
                            objectFit: "cover",
                            marginBottom: 10,
                            borderRadius: "50%",
                          }}
                        />
                        <Typography
                          variant="body1"
                          align="center"
                          sx={{ fontWeight: 500 }}
                        >
                          {service.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Fade>
      ))}

      <div className="mt-8 text-center">
        <Button
          variant="contained"
          size="large"
          onClick={handleSubmit}
          sx={{
            mt: 4,
            background: "linear-gradient(to right, #8e24aa, #d81b60)",
            color: "white",
            paddingX: 4,
            paddingY: 1.5,
            borderRadius: 3,
            fontWeight: "bold",
            '&:hover': {
              background: "linear-gradient(to right, #6a1b9a, #c2185b)",
            },
          }}
        >
          Confirm Package
        </Button>
      </div>
    </div>
  );
};

export default CollegeFestEvent;