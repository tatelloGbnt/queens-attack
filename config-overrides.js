module.exports = {
  webpack: (config, env) => {
    if (env === 'development') {
      config.module.rules.push({
        test: /\.(js|jsx|.styl)$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      });
  
      config.module.rules = config.module.rules.map(rule => {
        if (rule.oneOf) {
          rule.oneOf.map(oneOfRule => {
            if (
              oneOfRule.loader &&
                oneOfRule.loader.indexOf('babel-loader') !== -1
            ) {
              if (oneOfRule.hasOwnProperty('options')) {
                if (oneOfRule.options.hasOwnProperty('sourceMaps')) {
                  oneOfRule.options.sourceMaps = true;
                }
              }
            }
          });
        }
        return rule;    
      });
    }
  
    return config;
  },
};