// Generated by CoffeeScript 1.10.0
(function() {
  var Users;

  Users = (function() {
    function Users() {}

    Users.prototype.upload = function(req, res) {
      if (req.body.id) {
        return req.file('file').upload({
          dirname: '../public/uploads/'
        }, function(err, files) {
          if (err) {
            return res.serverError(err);
          }
          return User.findOne({
            id: req.body.id
          }).exec(function(err, user) {
            var error, path, pathComponents;
            pathComponents = files[0].fd.split('/');
            pathComponents.pop();
            pathComponents.pop();
            path = pathComponents.join("/");
            if (user.image !== '/images/user.png') {
              try {
                require('fs').unlinkSync(path + user.image);
              } catch (error) {
                console.log('problemas al borrar imagen antigua');
              }
            }
            return true;
          });
        });
      }
    };

    return Users;

  })();

  module.exports = Users;

}).call(this);