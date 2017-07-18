import {_} from 'lodash';

let Profile = require('../models/profileModel');

exports.params = function(req, res, next, id) {
  Profile.findById(id)
    .populate('account')
    .exec()
    .then(function(profile) {
      if (!profile) {
        next(new Error('no profile with that id found...'));
      } else {
        req.profile = profile;
        next();
      }
    }, function(err) {
      next(err);
    })
};

exports.get = function(req, res, next) {
  Profile.find()
    .populate('account')
    .exec()
    .then(function(profiles) {
      let userProfile = profiles.filter(function(profile) {
        return ('' + profile.account._id ===  '' + req.user._id);
      });
      res.json(userProfile);
    }, function(err) {
      next(err);
    })
};

exports.post = function(req, res, next) {
  let newProfile = req.body;

  Profile.create(newProfile)
    .then(function(profile) {
      res.json(profile);
    }, function(err) {
      next(err);
    });
};