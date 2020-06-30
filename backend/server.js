'use strict';

const express = require('express');

const kukacRoute = express.Router();

kukacRoute.get('/', (req, res, next) => {
    res.send('@');
    next();
  }, (req, res, next) => {
    console.log('Http keres tortent a kukacra');
    next();
});

kukacRoute.get('/sok', (req, res, next) => {
  res.send('@@@');
  next();
});


const app = express();

function numberModel(divisor, cb) {
  if (divisor === 0) {
    cb(new Error('na! ne legyel nulla'));
  } else {
    setTimeout(() => cb(null, Math.random() / divisor), 500);
  }
}

async function numberModelAsync(divisor) {
  if (divisor === 0) {
    throw new Error('ne!');
  }
  await new Promise((res) => setTimeout(res, 500));
  return Math.random() / divisor;
}

app.use(async (req, res, next) => {
  try {
    const number = await numberModelAsync(Number(req.query.number));
    res.send(ReactDOMServer.renderToString(<Comp number={number} />));
    next();
    console.log(123);
  } catch(e) {
    next(e);
  }
});

/*
app.use((req, res, next) => {
  numberModel(Number(req.query.number), (err, number) => {
    if (err) {
      next(err);
      return;
    }
  //  res.send('hello: ' + number);
    next();
  });
});
*/

app.use((req, res, next) => {
  console.log('he?');
  next();
});

app.use((err, req, res, next) => {
  res.status(500).send('megdoglend');
  console.log(err);
  console.log("ajjajj");
  next();
});

app.use('/kukac', kukacRoute);

app.use((req, res, next) => {
  console.log('last thing');
  next();
})

app.listen(8080);



