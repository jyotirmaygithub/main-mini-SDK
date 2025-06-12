import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// 🆕 Function you want to trigger
const triggerAction = () => {
  console.log("🚀 runned the trigger function in backend!");
};

// 🆕 Route to trigger the function
app.post('/api/trigger', (_req, res) => {
  triggerAction();
  res.json({ message: 'response from backend' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
