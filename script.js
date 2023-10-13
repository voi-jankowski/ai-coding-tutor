// dependencies
const { OpenAI } = require("langchain/llms/openai");
require("dotenv").config();

// Creates and stores a wrapper for the OpenAI package along with basic configuration
const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
  model: "gpt-3.5-turbo",
});

console.log({ model });
