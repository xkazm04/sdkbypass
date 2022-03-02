
## Development - Add a new chain (EVM)

### 1. Pull repository

```console
$ git clone https://github.com/tatumio/tatum-js.git && cd tatum-js
```

### 2. Install root dependencies

```console
$ yarn
```

### 3. Install dependencies & build in subpackages

```console
$ yarn bootstrap
```

### 4. Add chain to the core package

Add chain constant to the `packages/tatum-core/src/model/request/Currency.ts`.

### 5. Create a subpackage

Following command will generate whole structure (files and directories), download dependencies and build subpackage.

```console
$ yarn add:chain
```

As a template is used `templates` directory.

### 6. Update rest - TODO

- Estimate gas fee - `packages/tatum-{{slug}}/src/transaction/super.ts`.
- Derivation path - `packages/tatum-{{slug}}/src/constants.ts`.
- Update all in `packages/tatum, packages/tatum-defi, packages/tatum-ledger`.

### Clean all node_modules in subpackages - in case of problems with dependency

```console
$ yarn clean:all
```

### Publish alpha version

We are using Github actions for publishing to NPM registry. Github action is defined in .github/workflows. Use this command only if Github action dont work!

```console
$ yarn lerna publish prerelease --yes --no-verify-access
```