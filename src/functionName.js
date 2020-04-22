import { corsHeaders } from './configuration';

export const handler = async (event, context) => {
  console.log('I Ran!');
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context));

  return {
    headers: corsHeaders,
    body: JSON.stringify({ cake: 'good' }),
  };
};

export default {};
