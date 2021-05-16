const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
const {id} = req.params;
const user = await usersService.getById(id);
res.json(User.toResponse(user));
})

router.route('/').post(async (req, res) => {
  const userInfo = req.body
  const createdUser = await usersService.createUser(userInfo);
  res.json(User.toResponse(createdUser));
});

router.route('/:id').put(async (req, res) => {
  const {id} = req.params;
  const userInfo = req.body;
  const updatedUser = await usersService.updateUser(id,userInfo);
  res.json(User.toResponse(updatedUser));
});

router.route('/:id').delete(async (req, res) => {
  const {id} = req.params;
  await usersService.deleteUser(id);
  res.json();
});

module.exports = router;
