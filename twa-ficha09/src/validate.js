import { z } from 'zod'

export const fieldErrors = (zodError) =>
  Object.fromEntries(
    Object.entries(z.flattenError(zodError).fieldErrors).map(([field, msgs]) => [
      field,
      msgs[0],
    ])
  )

export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body ?? {})
  if (!result.success) {
    return res.status(400).json({ errors: fieldErrors(result.error) })
  }
  req.body = result.data
  next()
}