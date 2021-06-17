import { Router } from 'express';
import OrderService from '../services/OrderService.js';

export default Router()
  .post('/', async (req, res, next) => {
    try{
      return OrderService.create(req.body)
        .then(order => res.send(order));
    }
    catch(err){
      next(err);
    }
  });
