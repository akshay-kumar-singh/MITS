import React from "react";
import { Button, Card, CardContent, Typography, Grid } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { selectedServices, totalCost, weddingFunctions } = location.state || {};

  if (!selectedServices || !totalCost || !weddingFunctions || !Array.isArray(weddingFunctions)) {
    return (
      <Typography variant="h6" color="error" align="center" sx={{ mt: 10 }}>
        Data missing or invalid. Please go back and try again.
      </Typography>
    );
  }

  const handlePayment = () => {
    alert("Proceeding to payment...");
    navigate("/payment-success");
  };

  return (
    <div className="min-h-screen p-6 pt-20 bg-gradient-to-br from-pink-50 to-purple-100">
      <Typography variant="h3" align="center" sx={{ fontWeight: "bold", color: "#9c27b0", mb: 5 }}>
        Payment Details
      </Typography>

      <div className="mb-10">
        <Card sx={{ borderRadius: "20px", boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" sx={{ color: "#9c27b0", fontWeight: "bold" }}>
              Wedding Package Details
            </Typography>

            {weddingFunctions.map((func, index) => {
              const servicesForFunc = selectedServices?.[func] || [];

              return (
                <div key={index} className="mt-4">
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                    {func}
                  </Typography>
                  <Grid container spacing={2}>
                    {servicesForFunc.length > 0 ? (
                      servicesForFunc.map((service, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                          <Card sx={{ borderRadius: "12px", boxShadow: 1 }}>
                            <img
                              src={service.img}
                              alt={service.name}
                              className="w-full h-40 object-cover rounded-t-xl"
                            />
                            <CardContent>
                              <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                                {service.name}
                              </Typography>
                              <Typography variant="body2">{service.description}</Typography>
                              <Typography variant="body2" sx={{ mt: 1 }}>
                                Vendor Type: {} <br />
                                Price: ₹{totalCost}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))
                    ) : (
                      <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                        No services selected for this function.
                      </Typography>
                    )}
                  </Grid>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Total Cost: ₹{totalCost}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handlePayment}
            sx={{
              bgcolor: "#9c27b0",
              color: "white",
              fontWeight: "bold",
              py: 2,
              px: 6,
              borderRadius: "12px",
              boxShadow: 6,
              ":hover": { bgcolor: "#7b1fa2", boxShadow: 8 },
              mt: 2,
            }}
          >
            Proceed to Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
