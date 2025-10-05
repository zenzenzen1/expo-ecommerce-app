const Notification = require('../models/Notification');

exports.getAllNotifications = async (req, res) => {
  const notifications = await Notification.find();
  res.json(notifications);
};

exports.createNotification = async (req, res) => {
  const note = new Notification(req.body);
  await note.save();
  res.status(201).json(note);
};

exports.deleteNotification = async (req, res) => {
  const result = await Notification.findByIdAndDelete(req.params.id);
  if (!result) return res.status(404).json({ message: 'Notification not found' });
  res.json({ message: 'Notification deleted' });
};
