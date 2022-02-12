const initialstate = {
  user: {
    name: '',
    login:'',
    email: '',
    password: '',
    faculty_id:'',
    surname:'',
    phone:'',
  },
  loggeduser:{
    login:"",
    password:""
  },
  changePassData:{
    old_password:"",
    new_password:"",
    repeat_password:""
  },
  changePhoneData:{
    phone:""
  },
  changeEmailData:{
    email:""
  }
  
}

export const reducer = (state=initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case "REG_FORM_VALS":
      return {
        ...state,
        user:{
          ...state.user,
        [payload.target.name]:payload.target.value

        }
      }
    case "LOG_FORM_VALS":
      return {
        ...state,
        loggeduser:{
          ...state.loggeduser,
        [payload.target.name]:payload.target.value
        }
      }
    case "CHANGE_PASSWORD":
      return {
        ...state,
        changePassData:{
          ...state.changePassData,
        [payload.target.name]:payload.target.value
        }
      }
    case "CHANGE_PHONE":
      console.log(payload)
      return {
        ...state,
        changePhoneData:{
          ...state.changePhoneData,
        [payload.target.name]:payload.target.value
        }
      }
    case "CHANGE_EMAIL":
      console.log(payload)
      return {
        ...state,
        changeEmailData:{
          ...state.changeEmailData,
        [payload.target.name]:payload.target.value
        }
      }
    case 'CLEAR_EMAIL':
      return {
        ...state,
        changeEmailData:{
          ...state.changeEmailData,
          email:''
        }
      }
    case 'CLEAR_PHONE':
      return {
        ...state,
        changePhoneData:{
          phone:""
        }
      }
    case 'CLEAR_PASS':
      console.log('clear')
      return {
        ...state,
        changePassData:{
          old_password:"",
          new_password:"",
          repeat_password:""
        }
      }
    case "CLEAR_LOGIN":
      return {
        ...state,
        loggeduser:{
          login:"",
          password:""
        }
      } 
    case "CLEAR_REG":
      return {
        ...state,
        user:{
          name: '',
          login:'',
          email: '',
          password: '',
          faculty_id:'',
          surname:'',
          phone:''
        }
      } 
    default:
      return state;
  }
  
}