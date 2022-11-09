module.exports = (req, res) => {
  res.send = (data) => {
      res.writeHead(200, {
        //Для запросов кроме GET хедерсы таким способом не работают (разобраться потом)
        // 'Access-Control-Allow-Origin': 'http://localhost:3000',
        // 'Access-Control-Allow-Credentials': true,
        // 'Access-Control-Allow-Methods': 'POST, PUT, DELETE, OPTIONS',
        // 'Access-Control-Allow-Headers': 'Content-Type',
      })
    res.end(JSON.stringify(data))
  }
}