import {
    http
}
from './config'

export default {

    salvar: (contact) => {
        return http.post('contacts', contact);
    },

    atualizar: (contact) => {
        return http.put('contacts', contact);
    },

    listar: () => {
        return http.get('contacts')
    },

    apagar: (contact) => {
        return http.delete(`contacts/${contact.id}`, {
            data: contact
        })
    }

}