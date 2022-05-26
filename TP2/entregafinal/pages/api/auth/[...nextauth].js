import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"

//All requests to /api/auth/* (signIn, callback, signOut, etc.) will automatically be handled by NextAuth.js.

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: 'Iv1.92adc9ea80158b29',
      clientSecret: '7c12779fb0ae70cfea7e24a70c91517a47a78be0',
    }),
    // ...add more providers here
  ],

 /*  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest), En nuestro caso la home sin favoritos.
  },

  adapter: TypeORMLegacyAdapter({
    type: 'mysql',
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DB,
    synchronize: false
  }),

  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    }
  }, */
})