import users from '../controllers/users';

module.exports = function(app) {

  // users Routes
  app.route('/users')
    .get(users.list());

    // users Routes
  app.route('/users/create')
  .post(users.create())
};