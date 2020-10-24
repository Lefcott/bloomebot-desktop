export default langCode =>
  ({
    es: {
      register: 'Registro',
      email: 'Email',
      name: 'Nombre',
      surname: 'Apellido',
      password: 'Contraseña',
      confirmPassword: 'Confirmar Contraseña',
      alreadyHaveAnAccount: '¿Ya tenés una cuenta?',
      login: 'Iniciar Sesión',
      createAccount: 'Crear Cuenta',
      loggingIn: 'Iniciando sesión...',
      userCreatedTitle: 'Usuario creado',
      userCreatedMessage: 'El usuario fue creado correctamente!',
      errors: {
        general_1: 'Hubo un error al intentar',
        general_2: 'crear el usuario',
        emailAlreadyExists: 'Ya existe un usuario con ese email.',
        badEmailFormat: 'El formato del email es incorrecto.',
        emptyName: 'El nombre es muy corto.',
        emptySurname: 'El apellido es muy corto.',
        passwordsMustMatch: 'Las contraseñas deben coincidir.',
        passwordLen: 'La contraseña debe contener entre 4 y 100 caracteres.'
      }
    },
    en: {
      register: 'Register',
      email: 'Email',
      name: 'Name',
      surname: 'Surname',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      alreadyHaveAnAccount: 'Already have an account?',
      login: 'Login',
      createAccount: 'Create Account',
      loggingIn: 'Logging in...',
      userCreatedTitle: 'User created',
      userCreatedMessage: 'User was created successfully',
      errors: {
        general_1: 'There was an error trying to',
        general_2: 'create the user',
        emailAlreadyExists: 'That email is already used.',
        badEmailFormat: 'Incorrect email format.',
        emptyName: 'Name too short.',
        passwordsMustMatch: 'Passwords must match.',
        emptySurname: 'Name too short.',
        passwordLen: 'The password must contain between 4 and 100 characters.'
      }
    }
  }[langCode]);
