import express from 'express'

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('{"id":1,"name":"hiroki"}');
});

export default router;
