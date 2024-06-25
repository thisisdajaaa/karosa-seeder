import Joi from 'joi';
import dotenv from 'dotenv';
dotenv.config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
  CONNECTION_STR: Joi.string()
    .default('postgresql://postgres:password@db:5432/db'),
}).unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

interface IEnvironment{
  connectionString: string;
}

export const env: IEnvironment = {
  connectionString: envVars.CONNECTION_STR,
};
