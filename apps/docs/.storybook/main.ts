module.exports = {
  refs: [
    {
      title: 'Admin',
      url: process.env.NODE_ENV === 'development' ? 'http://localhost:6006/' : 'admin/'
    },
    {
      title: 'Landing',
      url: process.env.NODE_ENV === 'development' ? 'http://localhost:9009/' : 'landing/'
    }
  ]
};
