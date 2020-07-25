package mrsisa_clinical_center.mrsisa_SW6_2017.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Person;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.PersonService;

@RestController
@RequestMapping("kc/person")
public class PersonController {
	
	@Autowired
	private PersonService personService;
	
	public PersonController(PersonService personService) {
		this.personService = personService;
	}
	
	@PostMapping()
	public void receiveReq(@RequestBody Person person) {
		personService.addPerson(person);
	}
}
