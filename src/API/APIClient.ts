import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client/core"

const httpLink = createHttpLink({
    uri: "https://nekxion-dev-mscp.nekxion-infra.com/graphql",
})

// Create the apollo client
const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
})

export default apolloClient
