import { corsHeaders } from './configuration';

export const handler = async () => {
  console.log('Handing Call to Get / ');

  const cakes = [
    { name: 'Strawberry Cake 🍓', sugar: 33, taste: 2 },
    { name: 'Apple And Mint 🍏🍎', sugar: 23, taste: 1 },
    { name: 'Toffee And Chocolate Cake', sugar: 43, taste: 27 },
    { name: 'MarshMellow Melt Cake', sugar: 173, taste: 30 },
    { name: 'Rainbow Cake', sugar: 17, taste: 28 },
  ];

  return {
    headers: corsHeaders,
    body: JSON.stringify(cakes),
  };
};

export default {};
