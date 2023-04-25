class User {
  constructor(fullname, email, password) {
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log('Login realizado com sucesso!')
    } else {
      console.log('Falha ao realizar o login. Email ou senha incorretos')
    }
  }
}

const magna = new User('Magna', 'magna@email.com', '1234')

magna.login('magna@email.com', '4321')
magna.login('magna@email.com', '1234')
