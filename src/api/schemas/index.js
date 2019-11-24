import * as Joi from '@hapi/joi'
import {
  ContainerTypes,
  // Use this as a replacement for express.Request
  ValidatedRequest,
  // Extend from this to define a valid schema type/interface
  ValidatedRequestSchema,
  // Creates a validator that generates middlewares
  createValidator
} from 'express-joi-validation'

const validator = createValidator({ passError: true })

const validate = { 
  params: (inputSchema) => {
      return validator.params(Joi.object(inputSchema(Joi)))
  },
  body: (inputSchema) => {
      return validator.body(Joi.object(inputSchema(Joi)))
  },
  query: (inputSchema) => {
      return validator.query(Joi.object(inputSchema(Joi)))
  },
}

export default validate;