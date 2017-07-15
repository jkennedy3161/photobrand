import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import override from 'method-override';

module.exports = ((app, express) => {
  app.use(morgan('dev'));
  app.use(express.static('client'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(override());
});