<template>

    <div class="app">
        <div class="container">
            <ul>
                <li v-for="(erro, index) of errors" :key="index">
                    campo <b>{{erro.field}}</b> - {{erro.defaultMessage}}
                </li>
            </ul>
            <div class="content-grid">
                <div class="section-banner">
                    <img class="section-banner-icon" src="./assets/img/members-icon.png" alt="members-icon" />
                    <p class="section-banner-title">AGENDA DE CONTATOS</p>
                    <p class="section-banner-text">Todos os registros</p>
                </div>
                <form @submit.prevent="salvar">
                    <div class="section-filters-bar v2">
                        <div class="form-item split medium">
                            <div class="form-input small active">
                                <label for="events-search">NOME</label>
                                <input type="text" id="events-search" v-model="contact.nome" />
                            </div>
                            <div class="form-input small active">
                                <label for="events-search">TELEFONE</label>
                                <input type="text" id="events-search" v-model="contact.telefone" />
                            </div>
                            <div class="form-input small active">
                                <label for="events-search">E-MAIL</label>
                                <input type="text" id="events-search" v-model="contact.email" />
                            </div>

                            <div class="form-select">
                                <label for="events-search">SEXO</label>
                                <select id="stream-filter-count" v-model="contact.sexo">
                                    <option value="">SELECIONE UMA OPÇÃO</option>
                                    <option value="MASCULINO">MASCULINO</option>
                                    <option value="FEMININO">FEMININO</option>
                                </select>
                            </div>

                            <button class="button secondary popup-event-creation-trigger"><i class="fa fa-send"></i></button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="content-grid">
                <div class="grid grid-3-3-3 centered">
                    <div class="user-preview" v-for="contact of contacts" :key="contact.id">
                        <figure class="user-preview-cover liquid">
                        </figure>
                        <div class="user-preview-info">
                            <div class="user-short-description">
                                <a class="user-short-description-avatar user-avatar medium" href="#">
                                    <img class="hexagon-image-82-90" src="./assets/img/05.jpg" />
                                </a>
                                <p class="user-short-description-title"><a href="#">{{ contact.nome }}</a></p>
                                <p class="user-short-description-text"><a href="#">{{ contact.telefone }} - {{ contact.email }} - {{ contact.sexo }}</a></p>
                            </div>
                            <div class="social-links small">
                                <button class="social-link small twitter" @click="editar(contact)">
                                    <i class="fa fa-pencil"></i>
                                </button>
                                <button class="social-link small instagram" @click="remover(contact)">
                                    <i class="fa fa-trash-alt"></i>
                                </button>
                            </div>
                            <div class="user-preview-actions">
                                <a href='' target="_blank" class="button secondary"><i class="fa fa-phone-volume"></i> Ligar</a>
                                <a href='' target="_blank" class="button primary"><i class="fa fa-whatsapp"></i> WhatsApp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Contact from './services/contacts'
    import swal from 'sweetalert';

    export default {
        name: 'app',
        data() {
            return {
                contact: {
                    id: '',
                    nome: '',
                    telefone: '',
                    email: '',
                    sexo: ''
                },
                contacts: [],
                errors: []
            }
        },

        mounted() {
            this.listar()
        },

        methods: {

            listar() {
                    Contact.listar().then(resposta => {
                        this.contacts = resposta.data
                    }).catch(e => {
                        console.log(e)
                    })
                },

                salvar() {

                    if (!this.contact.id) {

                        Contact.salvar(this.contact).then(resposta => {
                            this.contact = {}
                            swal("Bom Trabalho!", "Ação realizada com sucesso.", "success");
                            this.listar()
                            this.errors = {}
                        }).catch(e => {
                            this.errors = e.response.data.errors
                        })

                    } else {

                        Contact.atualizar(this.contact).then(resposta => {
                            this.contact = {}
                            this.errors = {}
                            swal("Bom Trabalho!", "Ação realizada com sucesso.", "success");
                            this.listar()
                        }).catch(e => {
                            this.errors = e.response.data.errors
                        })

                    }

                },

                editar(contact) {
                    this.contact = contact
                },

                remover(contact) {

                    Contact.apagar(contact).then(resposta => {
                        this.listar();
                        swal("Bom Trabalho!", "Ação realizada com sucesso.", "success");
                        this.errors = {}
                    }).catch(e => {
                        this.errors = e.response.data.errors
                    })

                }
        }

    }
</script>

<style>
    @import 'global.css';
</style>