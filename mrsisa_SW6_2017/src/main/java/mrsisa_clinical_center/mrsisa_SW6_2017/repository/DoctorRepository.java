package mrsisa_clinical_center.mrsisa_SW6_2017.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.AppointmentType;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

	List<Doctor> findAllByAppointmentTypes(AppointmentType apptType);

	List<Doctor> findAllByClinicId(Long id);

	Doctor findOneById(Long doctorId);

	Doctor findOneByEmailOrSocialSecurityNumber(String email, String ssn);

}
