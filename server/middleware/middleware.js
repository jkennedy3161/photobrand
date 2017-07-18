import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import override from 'method-override';

module.exports = ((app, express) => {
  app.use(morgan('dev'));
  app.use(express.static('client'));
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.use(cors());
  app.use(override());
});