import express from 'express';
import ejs from 'ejs';

const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = new Date().getDay();
  console.log(`current day name: ${daysOfWeek[currentDay]}`);
  if (currentDay === 0 || currentDay === 6) {
    res.render('index.ejs', {dayType: 'weekend', advice: 'Enjoy your weekend!'});
    } else {
    res.render('index.ejs', {dayType: 'weekday', advice: 'Have a productive week!'});
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

