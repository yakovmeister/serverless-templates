import type { AWS } from '@serverless/typescript';

import hello from './src/handlers/postHello';
import index from './src/handlers/getIndex';

const serverlessConfiguration: AWS = {
  service: 'aws-typescript',
  useDotenv: true,
  frameworkVersion: '2',
  variablesResolutionMode: '20210219',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: [
    'serverless-webpack',
    'serverless-offline'
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      IDK: '${self:service}'
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { index, hello },
};

module.exports = serverlessConfiguration;
