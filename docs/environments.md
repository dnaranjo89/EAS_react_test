We use the `NODE_ENV` and `REACT_APP_ENV` environment variables to define the environment where the app will be running.

NOTE: These environment variables **MUST BE SET AT BUILD AND RUN TIME** (so they are available in the server and client)

## The server environment
#### NODE_ENV
We rely on the `NODE_ENV` environmental variable to decide the type of server that we will be starting.
If NODE_ENV == `production` a production-like server is used. Technically it will be the same
if NODE_ENV != `production` a development server is used. This server is not meant to be used in production as it's watching the files for changes, doing hot reloading, etc

Possible values:
 - `production`
 - anything else


## The App environment
#### REACT_APP_ENV
We rely on the `REACT_APP_ENV` environmental variable to decide which [config file](../../../config) will be used. This translates into using some decision such whether Google should index pages or which account the analytics events should be sent.

Possible values:
 - `production` (used in https://echaloasuerte.com)
 - `staging` (use in https://dev.echaloasuerte.com)
 - `local` (used when running locally)
 - `test` (used when running unit and integration tests)
