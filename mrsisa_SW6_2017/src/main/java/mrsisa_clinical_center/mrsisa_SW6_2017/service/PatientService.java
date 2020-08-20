package mrsisa_clinical_center.mrsisa_SW6_2017.service;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Patient;

public interface PatientService {

	public Patient findOneByEmailAndPassword(String email, String password);
	
	public Patient findOneByEmailOrSocialSecurityNumber(String email, String ssn);

	public void registerPatient(Patient patient);

	public void updatePatient(String firstName, String lastName, String email);

	public void updatePatient(String email, String firstName, String lastName, String address, String city,
			String country, String phoneNumber);

	public void setNewPassword(Long id, String newPassword);
}
