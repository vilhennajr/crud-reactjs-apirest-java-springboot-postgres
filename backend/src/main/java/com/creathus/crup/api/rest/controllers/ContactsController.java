package com.creathus.crup.api.rest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.creathus.crup.api.rest.models.Contacts;
import com.creathus.crup.api.rest.repository.ContactsRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value = "/api-rest")
@Api(value = "API REST - Contacts")
@CrossOrigin(origins = "*")
public class ContactsController {
	
	@Autowired
	ContactsRepository contactsRepository;
	
	/*/DEFININDO AS ROTAS DOS METODOS HTTP/*/
	
	//ROTA PARA LISTAR TODOS OS CONTATOS DA AGENDA > findAll
	@GetMapping("/contacts")
	@ApiOperation(value="List Contacts")
	public List<Contacts> selectAllRegisters(){
		return contactsRepository.findAll();
	}
	
	//ROTA PARA LISTAR UM CONTATO EXPECIFICO DA AGENDA > findById
	@GetMapping("/contacts/{id}")
	@ApiOperation(value="List One Contact")
	public Contacts selectOneRegister(@PathVariable(value = "id") long id){
		return contactsRepository.findById(id);
	}
	
	//ROTA PARA CRIAR UM CONTATO NA AGENDA > save
	@PostMapping("/contacts")
	@ApiOperation(value="Create Contact")
	public Contacts createRegister(@RequestBody Contacts contacts) {
		return contactsRepository.save(contacts);
	}
	
	//ROTA PARA DELETAR CONTATO NA AGENDA > delete
	@DeleteMapping("/contacts/{id}")
	@ApiOperation(value="Delete Contact")
	public void deleteRegister(@PathVariable(value = "id") long id) {
		contactsRepository.deleteById(id);
	}
	
	//ROTA PARA ATUALIZAR UM CONTATO NA AGENDA > save
	@PutMapping("/contacts")
	@ApiOperation(value="Put Contact")
	public Contacts putRegister(@RequestBody Contacts contacts) {
		return contactsRepository.save(contacts);
	}

}
