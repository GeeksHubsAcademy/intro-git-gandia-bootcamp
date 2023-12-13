export const validate = (type, value) => {

    switch(type){

        case 'email':
        case 'e-mail':
        case 'correo':
        case 'correo electronico':
        case 'mail':
        case 'imail':
        case 'imeil':

            if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value) ) {
                return "Invalid e-mail format";
            } else {
                return "";
            }

        case 'password':
        case 'password2':
        case 'contraseña':
        case 'secreto':
        case 'contrasenya':
        case 'secret':

            if(value.length < 8) {
                return "Mínimum 8 characters"
            } else {


                return ""
            }

        default: 
            console.log(type)



    }

}