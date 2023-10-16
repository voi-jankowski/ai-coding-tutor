// dependencies
const { OpenAI } = require("langchain/llms/openai");
const inquirer = require("inquirer");
require("dotenv").config();

const { PromptTemplate } = require("langchain/prompts");

// Creates and stores a wrapper for the OpenAI package along with basic configuration
const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
  model: "gpt-3.5-turbo",
});

console.log({ model });

// Uses the instantiated OpenAI wrapper, model, and makes a call based on input from inquirer
const promptFunc = async (input) => {
  try {
    const res = await model.call(input);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

// Initialization function that uses inquirer to prompt the user and returns a promise. It takes the user input and passes it through the call method
const init = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Ask a coding question:",
      },
    ])
    .then((inquirerResponse) => {
      promptFunc(inquirerResponse.name);
    });
};

// Instantiation of a new object called "prompt" using the "PromptTemplate" class
const prompt = new PromptTemplate({
  template:
    "You are a javascript expert and will answer the user’s coding questions thoroughly as possible.\n{question}",
  // Input variables are defined here, it is an array of strings, so we can set multiple input variables
  inputVariables: ["question"],
});

// Calls the initialization function and starts the script
init();
