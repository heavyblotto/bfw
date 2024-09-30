import "next-auth"

declare module "next-auth" {
  interface User {
    id: string
    username: string | null  // Change this line
    email?: string | null
  }

  interface Session {
    user: User
  }
}