# Example 
## How to use **Web3** with **Create react app** with webpack5  
### (react-scripts: ^5.0.0)


## 1. Install additional dependencies

```bash
yarn add -D node-polyfill-webpack-plugin
yarn add -D react-app-rewired
```

## 2. Copy [config-overrides.js](https://github.com/npwork/create-react-app-with-webpack5/blob/main/config-overrides.js) to your project (next to package.json)

## 3. Replace `scripts` block in your `package.json`

```
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
```

What is changed?
**react-scripts** -> **react-app-rewired**
