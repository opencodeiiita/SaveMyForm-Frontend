import React from "react";

const createJSONSchema = (inputs) => {
  let JSONSchema = {
    type: "object",
    properties: {},
    isRequired: [],
  };
  inputs.forEach((input) => {
    JSONSchema.properties[input.name] = options[input.type];
    if (input.isRequired) {
      JSONSchema.isRequired.push(input.name);
    }
  });
  return JSONSchema;
};

const options = {
  email: { type: "string", format: "email" },
  checkbox: { type: "boolean" },
  color: {
    type: "string",
    pattern:
      "^#([da-f]{3}){1,2}$|^#([da-f]{4}){1,2}$|(rgb|hsl)a?((s*-?d+%?s*,){2}(s*-?d+%?s*,?s*)?)(,s*(0?.d+)?|1)?)",
  },
  date: { type: "string", format: "date" },
  "datetime-local": { type: "string", format: "date-time" },
  image: {
    type: "string",
    format: "uri",
  },
  hidden: { type: "boolean" },
  month: { type: "integer", minimum: 1, maximum: 12 },
  number: { type: "number" },
  radio: { type: "boolean" },
  range: { type: "number" },
  reset: { type: "boolean" },
  search: { type: "string" },
  tel: {
    type: "string",
    minLength: 10,
    maxLength: 20,
    pattern: "^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$",
  },
  text: { type: "string" },
  time: { type: "string", format: "time" },
  url: { type: "string", format: "uri" },
  week: { type: "number", minimum: 1, maximum: 53 },
  file: { type: "string", format:'uri },
  password: { type: "string" },
};

export default createJSONSchema;
