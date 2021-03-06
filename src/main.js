import Vue from 'vue'
import App from './App.vue'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

// Paste your endpoint for the Simple API here.
// Info: https://github.com/graphcool-examples/vue-apollo-instagram-example#2-create-graphql-api-with-graphcool
const networkInterface = createNetworkInterface({ uri: 'http://localhost:60000/simple/v1/cjcs7hpxf0004010346f8wy2o'});

const apolloClient = new ApolloClient({
  networkInterface,
})

// Install the vue plugin
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

// Start the app
new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App)
})
