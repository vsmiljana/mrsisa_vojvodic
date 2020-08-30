package mrsisa_clinical_center.mrsisa_SW6_2017.service.impl;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityExistsException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Appointment;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.AppointmentType;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Patient;
import mrsisa_clinical_center.mrsisa_SW6_2017.repository.AppointmentRepository;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.AppointmentService;

@Service
@Transactional(readOnly=true)
public class AppointmentImpl implements AppointmentService {

	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private AppointmentRepository rep;

	// repeatable read because it is an update action, serializable on scheduling new
	@Transactional(readOnly=false, isolation = Isolation.REPEATABLE_READ, propagation = Propagation.REQUIRES_NEW)
	@Override
	public boolean scheduleAppointment(Long appointmendId, Patient patient) {
		logger.info("> scheduleAppointent");
		Appointment appt = rep.findOneById(appointmendId);
		if (appt.getPatient() == null) {
			rep.scheduleAppointment(appointmendId, patient);
			logger.info("< scheduleAppointment");
			return true;
		}
		else {
			logger.info("< EntityExistsException");
			return false;
		}
		
		
	}

	@Override
	public List<Appointment> findByPatientId(Long id) {
		return rep.findByPatientId(id);
	}

	@Override
	public List<Appointment> findByDate(Date date) {
		return rep.findByDate(date);
	}

	@Override
	public List<Appointment> findAllByDoctorId(Long id) {
		return rep.findAllByDoctorId(id);
	}

	@Override
	public List<Appointment> findAllByDoctorIdAndPatientIdIsNull(Long id) {
		return null;
	}

	@Override
	public List<Appointment> findAllByDoctorIdAndDate(Long id, Date date) {
		return rep.findAllByDoctorIdAndDate(id, date);
	}

	@Transactional(readOnly=false, isolation = Isolation.SERIALIZABLE, propagation = Propagation.REQUIRES_NEW)
	@Override
	public boolean save(Appointment a) {
		Appointment appt = rep.findOneByDoctorIdAndDateAndStart(a.getDoctor().getId(), a.getDate(), a.getStart());
		
		if (appt == null) {
			rep.save(a);
			return true;
		}
		else {
			return false;
		}
		
	}

	@Override
	public List<Appointment> findByPatientIdOrderByDateAsc(Long id) {
		// TODO Auto-generated method stub
		return rep.findByPatientIdOrderByDateAsc(id);
	}

	@Override
	public List<Appointment> findByPatientIdAndDateBeforeOrderByDateDesc(Long id, Date date) {
		// TODO Auto-generated method stub
		return rep.findByPatientIdAndDateBefore(id, date);
	}

	@Override
	public Appointment findById(Long apptId) {
		// TODO Auto-generated method stub
		return rep.getOne(apptId);
	}

	@Transactional(readOnly=false, isolation = Isolation.SERIALIZABLE, propagation = Propagation.REQUIRES_NEW)
	@Override
	public boolean makeAppointmentRegular(Appointment a) {
		Appointment appt = rep.findOneByDoctorIdAndDateAndStart(a.getDoctor().getId(), a.getDate(), a.getStart());
		if (appt == null) {
			rep.save(a);
			return true;
		}
		else {
			return false;
		}
	}

	
}
