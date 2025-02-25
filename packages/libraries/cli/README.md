# Hive CLI (Command Line Interface)

A CLI util to manage and control your GraphQL Hive. You can perform
[schema-registry actions](https://docs.graphql-hive.com/features/schema-registry#actions-on-schemas)
on your Hive targets using the Hive CLI.

[![Version](https://img.shields.io/npm/v/@graphql-hive/cli.svg)](https://npmjs.org/package/@graphql-hive/cli)

## Installation

### NodeJS

If you are running a JavaScript/NodeJS project, you can install Hive CLI from the `npm` registry:

```
pnpm install -D @graphql-hive/cli
yarn add -D @graphql-hive/cli
npm install -D @graphql-hive/cli
```

> We recommend installing Hive CLI as part of your project, under `devDependencies`, instead of
> using a global installation.

### Binary

If you are running a non-JavaScript project, you can download the prebuilt binary of Hive CLI using
the following command:

```bash
curl -sSL https://graphql-hive.com/install.sh | sh
```

## Commands

<!-- commands -->

- [`hive config:delete KEY`](#hive-configdelete-key)
- [`hive config:get KEY`](#hive-configget-key)
- [`hive config:reset`](#hive-configreset)
- [`hive config:set KEY VALUE`](#hive-configset-key-value)
- [`hive help [COMMANDS]`](#hive-help-commands)
- [`hive operations:check FILE`](#hive-operationscheck-file)
- [`hive operations:publish FILE`](#hive-operationspublish-file)
- [`hive schema:check FILE`](#hive-schemacheck-file)
- [`hive schema:delete SERVICE`](#hive-schemadelete-service)
- [`hive schema:publish FILE`](#hive-schemapublish-file)
- [`hive update [CHANNEL]`](#hive-update-channel)
- [`hive whoami`](#hive-whoami)

## `hive config:delete KEY`

deletes specific cli configuration

```
USAGE
  $ hive config:delete KEY

ARGUMENTS
  KEY  config key

DESCRIPTION
  deletes specific cli configuration
```

_See code:
[dist/commands/config/delete.js](https://github.com/kamilkisiela/graphql-hive/blob/v0.20.2/dist/commands/config/delete.js)_

## `hive config:get KEY`

prints specific cli configuration

```
USAGE
  $ hive config:get KEY

ARGUMENTS
  KEY  config key

DESCRIPTION
  prints specific cli configuration
```

_See code:
[dist/commands/config/get.js](https://github.com/kamilkisiela/graphql-hive/blob/v0.20.2/dist/commands/config/get.js)_

## `hive config:reset`

resets local cli configuration

```
USAGE
  $ hive config:reset

DESCRIPTION
  resets local cli configuration
```

_See code:
[dist/commands/config/reset.js](https://github.com/kamilkisiela/graphql-hive/blob/v0.20.2/dist/commands/config/reset.js)_

## `hive config:set KEY VALUE`

updates specific cli configuration

```
USAGE
  $ hive config:set KEY VALUE

ARGUMENTS
  KEY    config key
  VALUE  config value

DESCRIPTION
  updates specific cli configuration
```

_See code:
[dist/commands/config/set.js](https://github.com/kamilkisiela/graphql-hive/blob/v0.20.2/dist/commands/config/set.js)_

## `hive help [COMMANDS]`

Display help for hive.

```
USAGE
  $ hive help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for hive.
```

_See code:
[@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.6/src/commands/help.ts)_

## `hive operations:check FILE`

checks operations against a published schema

```
USAGE
  $ hive operations:check FILE [--registry <value>] [--token <value>] [--require <value>]

ARGUMENTS
  FILE  Glob pattern to find the operations

FLAGS
  --registry=<value>    registry address
  --require=<value>...  [default: ] Loads specific require.extensions before running the command
  --token=<value>       api token

DESCRIPTION
  checks operations against a published schema
```

_See code:
[dist/commands/operations/check.js](https://github.com/kamilkisiela/graphql-hive/blob/v0.20.2/dist/commands/operations/check.js)_

## `hive operations:publish FILE`

saves operations to the store

```
USAGE
  $ hive operations:publish FILE [--registry <value>] [--token <value>] [--require <value>]

ARGUMENTS
  FILE  Glob pattern to find the operations

FLAGS
  --registry=<value>    registry address
  --require=<value>...  [default: ] Loads specific require.extensions before running the codegen and reading the
                        configuration
  --token=<value>       api token

DESCRIPTION
  saves operations to the store
```

_See code:
[dist/commands/operations/publish.js](https://github.com/kamilkisiela/graphql-hive/blob/v0.20.2/dist/commands/operations/publish.js)_

## `hive schema:check FILE`

checks schema

```
USAGE
  $ hive schema:check FILE [--service <value>] [--registry <value>] [--token <value>] [--forceSafe] [--github]
    [--require <value>]

ARGUMENTS
  FILE  Path to the schema file(s)

FLAGS
  --forceSafe           mark the check as safe, breaking changes are expected
  --github              Connect with GitHub Application
  --registry=<value>    registry address
  --require=<value>...  [default: ] Loads specific require.extensions before running the codegen and reading the
                        configuration
  --service=<value>     service name (only for distributed schemas)
  --token=<value>       api token

DESCRIPTION
  checks schema
```

_See code:
[dist/commands/schema/check.js](https://github.com/kamilkisiela/graphql-hive/blob/v0.20.2/dist/commands/schema/check.js)_

## `hive schema:delete SERVICE`

deletes a schema

```
USAGE
  $ hive schema:delete SERVICE [--registry <value>] [--token <value>] [--dryRun] [--confirm]

ARGUMENTS
  SERVICE  name of the service

FLAGS
  --confirm           Confirm deletion of the service
  --dryRun            Does not delete the service, only reports what it would have done.
  --registry=<value>  Address of the registry
  --token=<value>     API token

DESCRIPTION
  deletes a schema
```

_See code:
[dist/commands/schema/delete.js](https://github.com/kamilkisiela/graphql-hive/blob/v0.20.2/dist/commands/schema/delete.js)_

## `hive schema:publish FILE`

publishes schema

```
USAGE
  $ hive schema:publish FILE [--service <value>] [--url <value>] [--metadata <value>] [--registry <value>] [--token
    <value>] [--author <value>] [--commit <value>] [--github] [--force] [--experimental_acceptBreakingChanges]
    [--require <value>]

ARGUMENTS
  FILE  Path to the schema file(s)

FLAGS
  --author=<value>                      author of the change
  --commit=<value>                      associated commit sha
  --experimental_acceptBreakingChanges  (experimental) accept breaking changes and mark schema as valid (only if
                                        composable)
  --force                               force publish even on breaking changes
  --github                              Connect with GitHub Application
  --metadata=<value>                    additional metadata to attach to the GraphQL schema. This can be a string with a
                                        valid JSON, or a path to a file containing a valid JSON
  --registry=<value>                    registry address
  --require=<value>...                  [default: ] Loads specific require.extensions before running the codegen and
                                        reading the configuration
  --service=<value>                     service name (only for distributed schemas)
  --token=<value>                       api token
  --url=<value>                         service url (only for distributed schemas)

DESCRIPTION
  publishes schema
```

_See code:
[dist/commands/schema/publish.js](https://github.com/kamilkisiela/graphql-hive/blob/v0.20.2/dist/commands/schema/publish.js)_

## `hive update [CHANNEL]`

update the hive CLI

```
USAGE
  $ hive update [CHANNEL] [-a] [-v <value> | -i] [--force]

FLAGS
  -a, --available        Install a specific version.
  -i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
  -v, --version=<value>  Install a specific version.
  --force                Force a re-download of the requested version.

DESCRIPTION
  update the hive CLI

EXAMPLES
  Update to the stable channel:

    $ hive update stable

  Update to a specific version:

    $ hive update --version 1.0.0

  Interactively select version:

    $ hive update --interactive

  See available versions:

    $ hive update --available
```

_See code:
[@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v3.1.6/src/commands/update.ts)_

## `hive whoami`

shows information about the current token

```
USAGE
  $ hive whoami [--registry <value>] [--token <value>]

FLAGS
  --registry=<value>  registry address
  --token=<value>     api token

DESCRIPTION
  shows information about the current token
```

_See code:
[dist/commands/whoami.js](https://github.com/kamilkisiela/graphql-hive/blob/v0.20.2/dist/commands/whoami.js)_

<!-- commandsstop -->

## Configuration

### Environment Variables

You may set the `HIVE_TOKEN` environment variable while running the Hive CLI, in order to set it
globally.

### Config file (`hive.json`)

You can create a `hive.json` file to manage your Hive configuration, you may use the following JSON
keys:

```json
{
  "registry": "<HIVE_REGISTRY_URL_GRAPHQL_ENDPOINT>",
  "token": "<HIVE_REGISTRY_TOKEN>"
}
```
