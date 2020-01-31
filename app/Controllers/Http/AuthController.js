'use strict'

const User = use('App/Models/User');

class AuthController {
    async register({ request, auth, response }) {
        const { username, email, password } = request.post()
        let user = new User()
        user.username = username
        user.email = email
        user.password = password

        await user.save()
        let accessToken = await auth.generate(user)
        return response.json({ user, accessToken })
    }

    async login({ request, auth, response }) {
        const email = request.input("email")
        const password = request.input("password");
        try {
            if (await auth.attempt(email, password)) {
                let user = await User.findBy('email', email)
                let accessToken = await auth.generate(user)
                return response.json({ "user": user, "access_token": accessToken })
            }

        }
        catch (e) {
            return response.status(401).json({ message: 'Bad credentials' })
        }
    }

    async checkLogin({ auth, response }) {
       try {
        return await auth.getUser()
       } catch (error) {
           return response.status(401).json({ message: 'You must login first' })
       }
    }

}

module.exports = AuthController
