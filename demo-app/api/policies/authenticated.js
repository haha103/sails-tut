module.exports = function (req, res, ok) {
  if (req.session.authenticated) {
    return ok();
  } else {
    var err = [{
      name: 'Login Required',
      message: 'You must be signed in.'
    }];

    req.session.flash = { err: err };
    res.redirect('/session/new');
    return;
  }
};
