// import sendMessage from '../lib/utils/twilio.js';s
import Order from '../models/Order.js';
import dotenv from 'dotenv';
import sendMessage from '../lib/utils/twilio.js';
dotenv.config();


export default class OrderService {
  static async create(body){
    
    const order = await Order.insertOrder(body);
    await sendMessage(process.env.MY_NUMBER, `Your order of ${order.quantityOfItems} ${order.typeOfItem}s has shipped `);
    
    return order;
  }

  static async getOrderById(id){
    return Order.selectOrderById(id)
      .then(contents => contents);
  }

  static async updateOrder(id, body){
    const order = await Order.updateOrder(id, body);
    await sendMessage(process.env.MY_NUMBER, `Your order has changed to ${body.quantityOfItems} ${body.typeOfItem}`);
    return order;
  }

  static async deleteOrder(id){
    const order = await Order.deleteOrder(id);
    await sendMessage(process.env.MY_NUMBER, `Your order of ${order.quantityOfItems} ${order.typeOfItem} has been cancelled`);
    return order;
  }
}
