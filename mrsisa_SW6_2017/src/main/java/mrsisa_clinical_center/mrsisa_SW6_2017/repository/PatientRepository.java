package mrsisa_clinical_center.mrsisa_SW6_2017.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Patient;

 
public interface PatientRepository extends JpaRepository<Patient, Long>{
	
	// ova se mora vako zvati jer je repozitorijumova
	public Patient findOneByEmailAndPassword(String email, String password);
	
	public Patient findOneByEmailOrSocialSecurityNumber(String email, String ssn);
	
	@Transactional
	@Modifying
	@Query("update Patient p set p.firstName = ?1, p.lastName = ?2 where p.email = ?3")
	void updatePatient(String firstname, String lastname, String email);

	
	@Transactional
	@Modifying
	@Query("update Patient p set p.firstName = ?2, p.lastName = ?3,"
			+ "p.address = ?4, p.city = ?5, p.country = ?6, p.phoneNumber = ?7 where p.email = ?1")
	public void updatePatient(String email, String firstName, String lastName, String address, String city,
			String country, String phoneNumber);
	
	@Transactional
	@Modifying
	@Query("update Patient p set p.password = ?2 where p.id = ?1")
	public void setNewPassword(Long id, String newPassword);

}
