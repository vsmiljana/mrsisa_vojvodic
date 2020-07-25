package mrsisa_clinical_center.mrsisa_SW6_2017.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Person;
import mrsisa_clinical_center.mrsisa_SW6_2017.repository.PersonRepository;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.PersonService;

@Service
public class PersonImpl implements PersonService {
	
	@Autowired
	private PersonRepository rep;

	@Override
	public void addPerson(Person person) {
		rep.save(person);
	}

}
