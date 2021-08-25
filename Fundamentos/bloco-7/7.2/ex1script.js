const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone ${order.phoneNumber}, R. ${order.address.street}, N: ${order.address.number}, AP: ${order.address.apartment}`)

}

customerInfo(order);

const orderModifier = (order) => {
  let newOrder = {
    name: 'Luiz Silva',
    order:{
      pizza: {
        muzzarella: {
          amount: 1,
          price: 20,
        },
        calabresa: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
    },
    payment: {
      total: '50,00',
    },
  };
  Object.assign(order, newOrder);
  console.log(`Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e ${Object.values(order.order.drinks.coke)[0]} é R$ ${order.payment.total}`);
}

orderModifier(order);
