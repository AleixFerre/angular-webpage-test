const magicAPILink = 'https://magic-api-production.up.railway.app/api/catabot';

export const environment = {
  production: true,
  root: '/catabot-v2-dev',
  api: {
    stats: `${magicAPILink}/stats`,
    commands: `${magicAPILink}/commands`,
  },
};
