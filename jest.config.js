module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test-utils/fileTransformer.js',
  },
  moduleDirectories: ['node_modules', 'test-utils', __dirname],
  coveragePathIgnorePatterns: ['node-modules', './public'],
};
