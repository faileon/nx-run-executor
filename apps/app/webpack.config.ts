import packageJson from './package.json';

export default (config) => {
  console.log('PackageJson version', packageJson.version);
  return config;
};
