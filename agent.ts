import loader from './lib/loader';

export default function(app) {
  if (app.config.typeorm.agnet) {
    loader(app);
  }
}
