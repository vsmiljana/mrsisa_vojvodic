package mrsisa_clinical_center.mrsisa_SW6_2017.service;

import java.util.List;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Appointment;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.AppointmentType;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Doctor;

public interface DoctorService {

	List<Doctor> findAllByAppointmentTypes(AppointmentType apptType);

	List<Integer> makeSchedule(List<Appointment> appointments, Integer duration, Integer start, Integer end);

}
