require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const medicineRoutes = require('./routes/medicineRoutes');
const symptomRoutes = require('./routes/symptomRoutes');
const prescriptionRoutes = require('./routes/prescriptionRoutes');
const orderRoutes = require('./routes/orderRoutes');
const profileRoutes = require('./routes/profileRoutes');
const articleRoutes = require('./routes/articleRoutes');
const reminderRoutes = require('./routes/reminderRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const consultationRoutes = require('./routes/consultationRoutes');
const emergencyRoutes = require('./routes/emergencyRoutes');

const app = express();
connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '4mb' }));
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Wellcare Pharmacy API is running.',
    compliance: 'Frontend suggestions are informational and require licensed review before real-world medical use.'
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/medicines', medicineRoutes);
app.use('/api/symptoms', symptomRoutes);
app.use('/api/prescriptions', prescriptionRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/reminders', reminderRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/consultations', consultationRoutes);
app.use('/api/emergency', emergencyRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'wellcare-pharmacy.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Wellcare Pharmacy server running on port ${PORT}`));
