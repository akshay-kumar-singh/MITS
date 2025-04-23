const nodemailer = require('nodemailer');

const sendEmailToVendors = async (req, res) => {
  const { vendors, userEmail, eventName } = req.body;

  if (!vendors || !Array.isArray(vendors) || !userEmail) {
    return res.status(400).json({ message: "Invalid request body." });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail
      pass: process.env.EMAIL_PASS  // App-specific password
    }
  });

  try {
    // 1️⃣ Send emails to vendors
    for (const vendor of vendors) {
      const mailOptions = {
        from: `"MITS Event Organizer" <${process.env.EMAIL_USER}>`,
        to: vendor.email,
        subject: `Booking Confirmation - ${vendor.function}`,
        text: `Dear ${vendor.service},

You are confirmed for the "${vendor.function}" function.

Package Tier: ${vendor.tier}

Please prepare accordingly. For any queries, reach out to the event organizer.

Thanks,
Team MITS`
      };

      await transporter.sendMail(mailOptions);
    }

    // 2️⃣ Send confirmation to the user
    const confirmationEmail = {
      from: `"MITS Event Organizer" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: `Your Event "${eventName}" is Confirmed`,
      text: `Dear User,

Your booking for the "${eventName}" event has been confirmed with the following vendors:

${vendors.map(v => `- ${v.service} for ${v.function} (Tier: ${v.tier})`).join('\n')}

We’ll keep in touch for further updates. Thank you for choosing MITS.

Regards,
MITS Team`
    };

    await transporter.sendMail(confirmationEmail);

    return res.status(200).json({ message: 'Emails successfully sent to vendors and user.' });

  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ message: 'Failed to send emails.', error: error.message });
  }
};

module.exports = { sendEmailToVendors };
