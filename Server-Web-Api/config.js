module.exports ={
  'secret': 'thesecretkey',
  'database' :
      {
          database: 'LAB',
          user: 'lab',
          password: 'adminpwd!',
          host: 'localhost',
          port: 5000,
          ssl: true,
          max: 40, // set pool max size to 20
          min: 4, // set min pool size to 4
          idleTimeoutMillis: 1000, // close idle clients after 1 second
          connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
      }
}
