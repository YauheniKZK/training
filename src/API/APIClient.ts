import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client/core"
import { createApolloProvider } from '@vue/apollo-option'

const httpLink = createHttpLink({
    uri: "https://nekxion-dev-mscp.nekxion-infra.com/graphql",
})

// Create the apollo client
const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
})

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})

export default apolloProvider
