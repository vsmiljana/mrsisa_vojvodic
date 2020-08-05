package mrsisa_clinical_center.mrsisa_SW6_2017.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Appointment;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Patient;
import mrsisa_clinical_center.mrsisa_SW6_2017.repository.AppointmentRepository;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.AppointmentService;

@Service
public class AppointmentImpl implements AppointmentService {

	@Autowired
	private AppointmentRepository rep;

	@Override
	public void scheduleAppointment(Long appointmendId, Patient patient) {
		rep.scheduleAppointment(appointmendId, patient);
		
	}
}
