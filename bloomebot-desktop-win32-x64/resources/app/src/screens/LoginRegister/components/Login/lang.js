export default langCode =>
  ({
    es: {
      login: 'Iniciar Sesión',
      email: 'Email',
      password: 'Contraseña',
      dontHaveAnAccount: '¿No tenés una cuenta?',
      register: 'Registrate',
      access: 'Acceder',
      loggingIn: 'Iniciando sesión...',
      errors: {
        general_1: 'Hubo un error al intentar',
        general_2: 'iniciar sesión',
        invalidCredentials: 'Usuario o contraseña incorrectos.',
        badEmailFormat: 'El formato de email es inválido.',
        passwordLen: 'La contraseña debe tener entre 4 y 100 caracteres.'
      }
    },
    en: {
      login: 'Login',
      email: 'Email',
      password: 'Password',
      dontHaveAnAccount: "Don't have an account?",
      register: 'Register',
      access: 'Login',
      loggingIn: 'Logging in...',
      errors: {
        general_1: 'There was an error trying to',
        general_2: 'log in',
        invalidCredentials: 'Invalid username or password.',
        badEmailFormat: 'Incorrect email format.',
        passwordLen: 'The password must contain between 4 and 100 characters.'
      }
    }
  }[langCode]);
