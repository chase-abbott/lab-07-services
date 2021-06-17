import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('adds a new order and sends a text message to micky', async () => {
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
});
