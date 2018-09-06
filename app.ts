import loader from './lib/loader';

export default function(app) {
  if (app.config.typeorm.app) {
    loader(app);
  }
}
