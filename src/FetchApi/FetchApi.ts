import { User } from "@prisma/client";

class FetchApi {

  static function getCurrentUser(): User {
    return fetch('http://localhost:3000/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer `,
      },
    })
  }
}
