import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';


describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('adds a new order and sends a text message to me', async () => {
    const order = {
      typeOfItem: 'apples',
      quantityOfItems: 100,
      itemCategory: 'fruit'
    };

    return request(app)
      .post('/api/v1/orders')
      .send(order)
      .then(response => {
        expect(response.body).toEqual({ id: '1',   typeOfItem: 'apples', quantityOfItems: 100, itemCategory: 'fruit' });
      });

  });

  it('gets an order from the database by it\'s id', async() => {
    const order = {
      typeOfItem: 'apples',
      quantityOfItems: 100,
      itemCategory: 'fruit'
    };

    request(app)
      .post('/api/v1/orders')
      .send(order)
      .then(response => request(app).get(`/api/v1/orders/${response.body.id}`))
      .then(response => {
        expect(response.body).toEqual({ id: '1',   typeOfItem: 'apples', quantityOfItems: 100, itemCategory: 'fruit' });
      })
      .catch(err => console.log(err));

  });
});
