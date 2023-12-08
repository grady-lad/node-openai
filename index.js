import OpenAi from 'openai';
import 'dotenv/config';

const openAi = new OpenAi({ apiKey: process.env.OPENAI_API_KEY });

console.log(process.env.OPENAI_API_KEY);

const results = await openAi.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: [
    {
      role: 'system',
      content:
        'You are an AI assistant, answer any questions to the best of your ability',
    },

    { role: 'user', content: 'Hi' },
  ],
});

console.log(results);
