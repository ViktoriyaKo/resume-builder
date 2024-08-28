import type { CodegenConfig } from '@graphql-codegen/cli';
require('dotenv').config();

const config: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
  documents: ['src/packages/**/graphql/**/*.graphql', 'src/graphql/*.graphql'],
  generates: {
    'schema.json': {
      plugins: ['introspection'],
    },
    './src/graphql/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
