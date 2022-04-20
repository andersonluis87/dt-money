import React from 'react';
import { createRoot  } from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import { App }  from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Lazer',
          amount: 150,
          type: 'deposit',
          category: 'lazer',
          createdAt: new Date('2022-03-12T03:24:00'),
        },
        {
          id: 2,
          title: 'Alimentação',
          amount: 100,
          type: 'withdraw',
          category: 'alimentação',
          createdAt: new Date('2022-04-01T15:24:00'),
        },
        {
          id: 3,
          title: 'Aluguel',
          amount: 1300,
          type: 'withdraw',
          category: 'casa',
          createdAt: new Date('2022-04-10T12:23:00'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'
    
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = {
        id: Math.floor(Math.random() * 100),
        createdAt: new Date(),
        ...JSON.parse(request.requestBody)
      }

      return schema.create('transaction', data)
    })
  }
})

const container = document.getElementById('root')
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
