import Order from '../models/Order.js';
import sendMessage from '../lib/utils/twilio.js';

export default class OrderService {
  static async create(body){
    
    const order = await Order.insertOrder(body);
    await sendMessage(process.env.MY_NUMBER, `Your order of ${order.quantityOfItems} ${order.typeOfItem} has shipped `);
    
    return order;
  }
}
