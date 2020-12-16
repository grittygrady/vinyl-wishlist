const inDev = process.env.NODE_ENV === 'development'

export default {
  API_ENDPOINT: inDev ? 'http://localhost:8000/api' : 'https://lit-mesa-39960.herokuapp.com/api'
}
