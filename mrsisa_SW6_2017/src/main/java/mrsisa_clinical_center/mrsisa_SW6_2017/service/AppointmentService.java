package mrsisa_clinical_center.mrsisa_SW6_2017.service;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Patient;

public interface AppointmentService {

	void scheduleAppointment(Long appointmendId, Patient patient);

}
