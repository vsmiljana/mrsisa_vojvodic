package mrsisa_clinical_center.mrsisa_SW6_2017.service.impl;

import java.util.Date;
import java.util.List;

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

	@Override
	public List<Appointment> findByPatientId(Long id) {
		// TODO Auto-generated method stub
		return rep.findByPatientId(id);
	}

	@Override
	public List<Appointment> findByDate(Date date) {
		// TODO Auto-generated method stub
		return rep.findByDate(date);
	}
}
