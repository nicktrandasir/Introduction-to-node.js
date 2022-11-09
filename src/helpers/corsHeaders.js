const cors = (res) => {
  //разрешить домену
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  //для кук
  res.setHeader('Access-Control-Allow-Credentials', true);
  //GET и POST по умолч.не нужно, но RTK Query шлет специфич-е заголовки
  res.setHeader('Access-Control-Allow-Methods', "POST, PUT, DELETE, OPTIONS");
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};
module.exports = cors;