package mrsisa_clinical_center.mrsisa_SW6_2017.service;

import java.util.Date;
import java.util.List;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Appointment;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.AppointmentType;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Patient;

public interface AppointmentService {

	void scheduleAppointment(Long appointmendId, Patient patient);

	List<Appointment> findByPatientId(Long id);

	List<Appointment> findByDate(Date date);

	List<Appointment> findAllByDoctorId(Long id);

	List<Appointment> findAllByDoctorIdAndPatientIdIsNull(Long id);

	List<Appointment> findAllByDoctorIdAndDate(Long id, Date date);



}
