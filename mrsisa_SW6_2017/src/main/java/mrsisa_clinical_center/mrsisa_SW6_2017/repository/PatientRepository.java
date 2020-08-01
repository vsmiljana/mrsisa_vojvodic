package mrsisa_clinical_center.mrsisa_SW6_2017.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Patient;

 
public interface PatientRepository extends JpaRepository<Patient, Long>{
	
	// ova se mora vako zvati jer je repozitorijumova
	public Patient findOneByEmailAndPassword(String email, String password);
	
	public Patient findOneByEmailOrSocialSecurityNumber(String email, String ssn);

}
