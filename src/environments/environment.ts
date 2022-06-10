// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const magicAPILink = 'http://localhost:3000/api/catabot';

export const environment = {
  production: false,
  root: '',
  api: {
    stats: `${magicAPILink}/stats`,
    commands: `${magicAPILink}/commands`,
  },
};
