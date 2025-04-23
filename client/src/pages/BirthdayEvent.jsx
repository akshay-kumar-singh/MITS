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

const birthdayFunctions = [
  "Cake Cutting",
  "Games & Activities",
  "Decorations",
  "DJ & Music",
  "Food & Drinks",
  "Guest Arrangements",
];

const services = [
  { name: "Venue", img: "/images/Hero.jpg" },
  { name: "Catering", img: "/images/Hero.jpg" },
  { name: "Photographer/Videographer", img: "/images/Hero.jpg" },
  { name: "Decoration", img: "/images/Hero.jpg" },
  { name: "Sound & DJ", img: "/images/Hero.jpg" },
  { name: "Party Favors", img: "/images/Hero.jpg" },
  { name: "Games & Activities", img: "/images/Hero.jpg" },
  { name: "Cake", img: "/images/Hero.jpg" },
  { name: "Return Gifts", img: "/images/Hero.jpg" },
];

const BirthdayEvent = () => {
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
      const allServices = services.map((service) => service.name);
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
    console.log("Selected Birthday Package:", selected);
    alert("Birthday package selected! Check console for data.");
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
        sx={{ fontWeight: "bold", color: "#f57c00" }}
      >
        🎉 Create Your Birthday Party Package 🎉
      </Typography>

      {birthdayFunctions.map((func, index) => (
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
                sx={{ color: "#fb8c00", fontWeight: "600" }}
              >
                {func}
              </Typography>

              {/* Checkbox for Select All */}
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
                          ? "3px solid #f57c00"
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
            background: "linear-gradient(to right, #fb8c00, #ff7043)",
            color: "white",
            paddingX: 4,
            paddingY: 1.5,
            borderRadius: 3,
            fontWeight: "bold",
            '&:hover': {
              background: "linear-gradient(to right, #f57c00, #ff5722)",
            },
          }}
        >
          Confirm Package
        </Button>
      </div>
    </div>
  );
};

export default BirthdayEvent;
