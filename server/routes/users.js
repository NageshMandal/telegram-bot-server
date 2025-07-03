const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.patch('/block/:id', async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { blocked: true });
  res.json({ message: 'User blocked' });
});

router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});
  
// PATCH /users/:id - update user fields (like subscribed or blocked)
router.patch('/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body, // accepts { subscribed: true }, { blocked: false }, etc.
        { new: true }
      );
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  });
  
module.exports = router;
