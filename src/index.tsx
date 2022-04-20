import React from 'react';
import { createRoot  } from 'react-dom/client';
import { createServer } from 'miragejs'
import { App }  from './App';

createServer({
  routes() {
    this.namespace = 'api'
    
    this.get('/transactions', () => {
      return [
        { 
          id: 1,
          title: 'Transaction 1',
          amount: 100,
          type: 'deposit',
          category: 'food',
          createdAt: new Date()
        },
        { 
          id: 2,
          title: 'Transaction 2',
          amount: 1000,
          type: 'income',
          category: 'salary',
          createdAt: new Date()
        }

      ]
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
