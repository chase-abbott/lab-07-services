import pool from '../lib/utils/pool.js';

export default class Order {
  id;
  typeOfItem;
  quantityOfItems;
  itemCategory;

  constructor(row){
    this.id = row.id;
    this.typeOfItem = row.type_of_item;
    this.quantityOfItems = row.quantity_of_items;
    this.itemCategory = row.item_category;
  }

  static async insertOrder({ typeOfItem, quantityOfItems, itemCategory }){
    const { rows } = await pool.query(`
    INSERT INTO orders (type_of_item, quantity_of_items, item_category) VALUES ($1, $2, $3) RETURNING *`
    , [typeOfItem, quantityOfItems, itemCategory]);
   
    return new Order(rows[0]);
  }

}

