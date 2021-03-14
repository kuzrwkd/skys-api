import express, { Request, Response, NextFunction } from 'express'

const router = express.Router()

/* GET users listing. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  res.send('{"id":1,"name":"hiroki", "age": 32}')
})

export default router
