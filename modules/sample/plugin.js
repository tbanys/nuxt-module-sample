
const moduleOptions = <%= serialize(options) %>;

export default (ctx, inject) => {
  const { pathName } = moduleOptions;

  inject('pathName', pathName)
};
