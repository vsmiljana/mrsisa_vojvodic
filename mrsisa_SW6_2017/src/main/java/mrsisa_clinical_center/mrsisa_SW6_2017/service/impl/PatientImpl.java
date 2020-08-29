package mrsisa_clinical_center.mrsisa_SW6_2017.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Patient;
import mrsisa_clinical_center.mrsisa_SW6_2017.repository.PatientRepository;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.PatientService;

@Service
@Transactional(readOnly=true)
public class PatientImpl implements PatientService {

	@Autowired
	private PatientRepository rep;
	
	@Override
	public Patient findOneByEmailAndPassword(String email, String password) {
		return rep.findOneByEmailAndPassword(email, password);
	}

	
	@Override
	public Patient findOneByEmailOrSocialSecurityNumber(String email, String ssn) {
		return rep.findOneByEmailOrSocialSecurityNumber(email, ssn);
	}

	@Transactional(readOnly=false)
	@Override
	public void registerPatient(Patient patient) {
		rep.save(patient);
		
	}

	@Transactional(readOnly=false)
	@Override
	public void updatePatient(String firstName, String lastName, String email) {
		rep.updatePatient(firstName, lastName, email);
		
	}

	@Transactional(readOnly=false)
	@Override
	public void updatePatient(String email, String firstName, String lastName, String address, String city,
			String country, String phoneNumber) {
		rep.updatePatient(email, firstName, lastName, address, city, country, phoneNumber);
		
	}

	@Transactional(readOnly=false)
	@Override
	public void setNewPassword(Long id, String newPassword) {
		rep.setNewPassword(id, newPassword);
		
	}

}
