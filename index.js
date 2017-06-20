import camelize from 'camelize';

export default types => () => next => (action) => {
  const { type, ...rest } = action;

  if (!types.includes(type)) return next(action);
  const camelized = camelize(rest);
  return next({ type, ...camelized });
};
