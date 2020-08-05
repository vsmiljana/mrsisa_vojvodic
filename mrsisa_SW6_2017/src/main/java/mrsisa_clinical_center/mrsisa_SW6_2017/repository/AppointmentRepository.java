package mrsisa_clinical_center.mrsisa_SW6_2017.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Appointment;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Patient;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

	//@Modifying
	//@Query(value="update appointment set patient_id=?2 where a.id=?1", nativeQuery=true)
	//public void scheduleAppointment(Long appointmendId, Long patientId);
	
	@Transactional
	@Modifying
	@Query("update Appointment a set a.patient=?2 where a.id=?1")
	public void scheduleAppointment(Long appointmendId, Patient patient);

	public List<Appointment> findByPatientId(Long id);
	
	
//	@Modifying
//	@Query("update User u set u.firstname = ?1, u.lastname = ?2 where u.id = ?3")
//	void setUserInfoById(String firstname, String lastname, Integer userId);

}
