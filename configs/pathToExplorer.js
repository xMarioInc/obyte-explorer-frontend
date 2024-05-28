const getPathToExplorer = () => {
  if(import.meta.env.VITE_DEV_PATH) {
    return import.meta.env.VITE_PATH_TO_DEV_SERVER;
  }
  
  return import.meta.env.VITE_TESTNET ? 'https://testnetexplorer.obyte.org' : 'https://explorer.obyte.org';
}

export const pathToExplorer = getPathToExplorer();
