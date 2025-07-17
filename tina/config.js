import { defineConfig } from 'tinacms';
import schema from './schema.js';

const branch =
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    'main';

export default defineConfig({
    branch,

    clientId: process.env.TINA_PUBLIC_CLIENT_ID,
    token: process.env.TINA_TOKEN,

    build: {
        outputFolder: 'admin',
        publicFolder: 'public',
    },
    media: {
        tina: {
            mediaRoot: '',
            publicFolder: 'public',
        },
    },
    schema,
});
