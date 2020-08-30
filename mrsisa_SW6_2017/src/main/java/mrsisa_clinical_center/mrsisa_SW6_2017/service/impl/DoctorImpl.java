package mrsisa_clinical_center.mrsisa_SW6_2017.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import mrsisa_clinical_center.mrsisa_SW6_2017.dto.AppointmentTimeDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Appointment;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.AppointmentType;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Doctor;
import mrsisa_clinical_center.mrsisa_SW6_2017.repository.DoctorRepository;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.DoctorService;
import utils.AppointmentComparator;

@Service
@Transactional(readOnly = true)
public class DoctorImpl implements DoctorService {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private DoctorRepository rep;

	@Override
	public List<Doctor> findAllByAppointmentTypes(AppointmentType apptType) {
		logger.info("> findAllByAppointmentTypes");
		List<Doctor> doctors = rep.findAllByAppointmentTypes(apptType);
		logger.info("< findAllByAppointmentTypes");
		return doctors;
	}

	@Override
	public List<AppointmentTimeDto> makeSchedule(List<Appointment> appointments, Integer duration, Integer start, Integer end) {
		
		List<AppointmentTimeDto> starts = new ArrayList<AppointmentTimeDto>();	// list of starts of appointments
		
		int pause = 10;
		
		Collections.sort(appointments, new AppointmentComparator());
		
		
		if (appointments.size() == 0) {
			starts.addAll(fitAppointments(start, end, duration, pause));
			return starts;
		}
		
		
		int timeStart = start;
		int timeEnd;
		for (int i = 0; i <= appointments.size()-1; i++) {
			timeEnd = appointments.get(i).getStart();
			
			starts.addAll(fitAppointments(timeStart, timeEnd, duration, pause));
			
			if (appointments.get(i).getPatient() == null) {		// if patient is null, the appointment is predefined and free
				//starts.add(new AppointmentTimeDto((long)(appointments.get(i).getStart()),  //not to mix predefined with regulars
				//		(long)(appointments.get(i).getEnd())));	// so this is a valid start of appointment and will be returned
			}
		
			timeStart = appointments.get(i).getEnd() + pause;
		}
		
		// add apointments from the end of last prescheduled to the end of doctor's working hours	
		starts.addAll(fitAppointments(appointments.get(appointments.size()-1).getEnd() + pause, end, duration, pause));
		return starts;
		
	}

	private List<AppointmentTimeDto> fitAppointments(Integer start, Integer end, Integer duration, Integer pause) {

		List<AppointmentTimeDto> list = new ArrayList<AppointmentTimeDto>();	// list of starts of appointments
		int time = start;
		while ((time + duration) <= end) {	// while an appointment can be fit 
			list.add(new AppointmentTimeDto((long)(time), (long)(time + duration)));					// add start
			time += duration + pause;		// next fit time for an appointment is old start + duration of appt + break
		}
		return list; 
	}

	@Override
	public List<Doctor> findAllByClinicId(Long id) {
		logger.info("> findAllByClinicId");
		List<Doctor> doctors = rep.findAllByClinicId(id);
		logger.info("< findAllByClinicId");
		return doctors;
	}

	@Override
	public Doctor findById(Long doctorId) {
		logger.info("> findById");
		Doctor doctor = rep.findOneById(doctorId);
		logger.info("< findById");
		return doctor;
	}

	@Override
	public Doctor findOneByEmailOrSocialSecurityNumber(String email, String ssn) {
		logger.info("> findOneByEmailOrSocialSecurityNumber");
		Doctor doctor = rep.findOneByEmailOrSocialSecurityNumber(email, ssn);
		logger.info("< findOneByEmailOrSocialSecurityNumber");
		return doctor;
	}
	
}
