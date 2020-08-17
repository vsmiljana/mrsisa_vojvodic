package mrsisa_clinical_center.mrsisa_SW6_2017.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Appointment;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.AppointmentType;
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

	@Override
	public List<Appointment> findAllByDoctorId(Long id) {
		// TODO Auto-generated method stub
		return rep.findAllByDoctorId(id);
	}

	@Override
	public List<Appointment> findAllByDoctorIdAndPatientIdIsNull(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Appointment> findAllByDoctorIdAndDate(Long id, Date date) {
		// TODO Auto-generated method stub
		return rep.findAllByDoctorIdAndDate(id, date);
	}

	@Override
	public void save(Appointment a) {
		rep.save(a);
		
	}

	@Override
	public List<Appointment> findByPatientIdOrderByDateAsc(Long id) {
		// TODO Auto-generated method stub
		return rep.findByPatientIdOrderByDateAsc(id);
	}

	@Override
	public List<Appointment> findByPatientIdAndDateBefore(Long id, Date date) {
		// TODO Auto-generated method stub
		return rep.findByPatientIdAndDateBefore(id, date);
	}

	@Override
	public Appointment findById(Long apptId) {
		// TODO Auto-generated method stub
		return rep.getOne(apptId);
	}

	
}
