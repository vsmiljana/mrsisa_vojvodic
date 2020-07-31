package mrsisa_clinical_center.mrsisa_SW6_2017.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Patient;
import mrsisa_clinical_center.mrsisa_SW6_2017.repository.PatientRepository;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.PatientService;

@Service
public class PatientImpl implements PatientService {

	@Autowired
	private PatientRepository rep;
	
	@Override
	public Patient findOneByEmailAndPassword(String email, String password) {
		return rep.findOneByEmailAndPassword(email, password);
	}

}
