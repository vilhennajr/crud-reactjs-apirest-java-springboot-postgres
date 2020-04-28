import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'
import swal from 'sweetalert';

import membersIcon from '../../assets/img/members-icon.png';
import imgAvatar from '../../assets/img/05.jpg';

const baseUrl = 'http://localhost:8080/api-rest/contacts'
const initialState = {
    contacts: { id: '', nome: '', telefone: '', email: '', sexo: '' },
    list: []
}

export default class ContactsCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ contacts: initialState.contacts })
    }

    save() {
        const contacts = this.state.contacts
        const method = contacts.id ? 'put' : 'post'
        const url = contacts.id ? `${baseUrl}` : baseUrl
        axios[method](url, contacts)
            .then(resp => {
                const list = this.getUpdatedList(resp.data);
                console.log(resp.data);

                swal("Bom Trabalho!", "Ação realizada com sucesso.", "success");

                this.setState({ contacts: initialState.contacts, list })
            })
    }

    getUpdatedList(contacts, add = true) {
        const list = this.state.list.filter(u => u.id !== contacts.id)
        if(add) list.unshift(contacts)
        return list
    }

    updateField(event) {
        const contacts = { ...this.state.contacts }
        contacts[event.target.name] = event.target.value
        this.setState({ contacts })
    }

    renderForm() {
        return (

            <div className="form">

                <div className="content-grid">
                    <div className="section-banner">
                        <img className="section-banner-icon" src={membersIcon} alt="members-icon" />
                    
                        <p className="section-banner-title">AGENDA DE CONTATOS</p>
                    
                        <p className="section-banner-text">Todos os registros</p>
                    </div>

                    <div className="section-filters-bar v2">
                        <div className="form-item split medium">

                        <div className="form-input small active">
                        <label for="events-search">NOME</label>
                        <input type="text" id="events-search" name="nome"
                                value={this.state.contacts.nome}
                                onChange={e => this.updateField(e)} />
                        </div>

                        <div className="form-input small active">
                        <label for="events-search">TELEFONE</label>
                        <input type="text" id="events-search" name="telefone"
                                value={this.state.contacts.telefone}
                                onChange={e => this.updateField(e)} />
                        </div>

                        <div className="form-input small active">
                        <label for="events-search">E-MAIL</label>
                        <input type="text" id="events-search" name="email"
                                value={this.state.contacts.email}
                                onChange={e => this.updateField(e)} />
                        </div>

                        <div className="form-select">
                            <label for="stream-filter-count">SEXO</label>
                            <select id="stream-filter-count" name="sexo"
                                value={this.state.contacts.sexo}
                                onChange={e => this.updateField(e)} >
                            <option value="">SELECIONE UMA OPÇÃO</option>
                            <option value="MASCULINO">MASCULINO</option>
                            <option value="FEMININO">FEMININO</option>
                            </select>
                            <svg className="form-select-icon icon-small-arrow">
                            <use href="#svg-small-arrow" />
                            </svg>
                        </div>
                    
                        <button onClick={e => this.save(e)} className="button secondary popup-event-creation-trigger"><i className="fa fa-send"></i></button>

                        </div>
                    </div>
                
                </div>
               
            </div>
        )
    }

    load(contacts) {
        this.setState({ contacts })
    }

    remove(contacts) {
        axios.delete(`${baseUrl}/${contacts.id}`).then(resp => {
            const list = this.getUpdatedList(contacts, false);

            swal("Bom Trabalho!", "Ação realizada com sucesso.", "success");

            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <div className="content-grid">
                <div className="grid grid-3-3-3 centered">{this.renderRows()}</div>
            </div>
            
        )
    }

    renderRows() {
        return this.state.list.map(contacts => {
            return (

                <div className="user-preview" key={contacts.id}>
                    <figure className="user-preview-cover liquid">
                    
                    </figure>
                
                    <div className="user-preview-info">
                    <div className="user-short-description">

                        <a className="user-short-description-avatar user-avatar medium" href="#">
                            <img className="hexagon-image-82-90" src={imgAvatar} />
                        </a>
                
                        <p className="user-short-description-title"><a href="#">{contacts.nome}</a></p>
                
                        <p className="user-short-description-text"><a href="#">{contacts.telefone} - {contacts.email} - {contacts.sexo}</a></p>

                    </div>
                    
                    <div className="social-links small">

                        <button className="social-link small twitter"
                            onClick={() => this.load(contacts)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="social-link small instagram"
                            onClick={() => this.remove(contacts)}>
                            <i className="fa fa-trash-alt"></i>
                        </button>

                    </div>

                    <div className="user-preview-actions">
                        <a href={'tel:55'+contacts.telefone} target="_blank" className="button secondary"><i className="fa fa-phone-volume"></i> Ligar</a>
                
                        <a href={'https://api.whatsapp.com/send?phone=55'+contacts.telefone} target="_blank" className="button primary"><i className="fa fa-whatsapp"></i> WhatsApp</a>
                    </div>
                    </div>
                </div>
                
            )
        })
    }
    
    render() {
        return (
            <Main>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}