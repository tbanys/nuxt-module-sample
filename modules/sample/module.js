import path from 'path';

// helper method
const consoleObjectKeys = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  };
};

export default function(moduleOptions) {
  // this - access all nuxtjs options

  const { pathName } = moduleOptions;

  this.extendRoutes(routes => {
    routes.push({
      name: 'items',
      path: `/${pathName}`,
      component: '~/modules/sample/pages/items.vue'
    });
    routes.push({
      name: 'item',
      path: `/${pathName}/:id`,
      component: '~/modules/sample/pages/_id.vue'
    });
  });

  this.addPlugin({
    src: path.resolve(__dirname, './plugin.js'),
    options: {
      pathName,
    },
  });

  this.addPlugin({
    src: path.resolve(__dirname, './storePlugin.js'), 
  });
}