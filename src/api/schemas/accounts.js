export const CreateSchema = f => ({
  email: f.string(),
  username: f.string(),
  password: f.string().required(),
  accountType: f.string().valid('USER')
})


export const LoginSchema = f => ({
  email: f.string(),
  username: f.string(),
  password: f.string().required(),
})


export const ReadSchema = f => ({
  id: f.string().length('account-'.length + 12).required()
})

