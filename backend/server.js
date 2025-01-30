const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/api/send-email', async (req, res) => {
    const { name, email, message } = req.body;
    if(!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required.." });
    }

    try{
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }
        });

        const mailOptions = {
            from: email,
            to: process.env.RECEIVER_EMAIL,
            subject: `New message from PORTFOLIO contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Mail sent Successfully..!' });
    } catch (error) {
        res.status(500).json({ message: "Failed to send Message.." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});

