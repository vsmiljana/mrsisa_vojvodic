package mrsisa_clinical_center.mrsisa_SW6_2017.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import mrsisa_clinical_center.mrsisa_SW6_2017.dto.AppointmentDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.AppointmentScheduleDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.ClinicDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.LoginUserDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.RegisterUserDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Appointment;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Clinic;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Doctor;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Patient;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.AppointmentService;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.ClinicService;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.PatientService;

@RestController
@RequestMapping("/usr")
public class PatientController {
	
	@Autowired
	private HttpSession session;
	
	private PatientService patientService;
	
	private ClinicService clinicService;
	
	private AppointmentService appointmentService;
	
	public PatientController(PatientService patientService, ClinicService clinicService, AppointmentService appointmentService) {
		this.patientService = patientService;
		this.clinicService = clinicService;
		this.appointmentService = appointmentService;
	}
	
	
	
	@PostMapping("/login")
	public void login(@RequestBody LoginUserDto userDto) throws Exception {
		Patient patient = patientService.findOneByEmailAndPassword(userDto.getEmail(), userDto.getPassword());
		if (patient == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Invalid email and password combination.");
		}
		session.setAttribute("currentUser", patient);
	}
	
	
	@PostMapping("/register")
	public void register(@RequestBody RegisterUserDto userDto) throws Exception {
		
		// ovo mi treba u setup registration.html a ne ovde jer ovde je vec svasta nesto unio u formu omg
		if (session.getAttribute("currentUser") != null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "User already loged in!");
		}
		
		Patient patient = patientService.findOneByEmailOrSocialSecurityNumber(userDto.getEmail(), userDto.getSsn());
		if (patient != null) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email or Social Security Number not unique.");
		}
		Long id = (long) (Math.random() * 1000);
		patient = new Patient(id, userDto.getEmail(), userDto.getPassword(), userDto.getFirstName(), userDto.getLastName(),
				userDto.getPhoneNumber(), userDto.getAddress(), userDto.getCity(), userDto.getCountry(), userDto.getSsn());
		
		patientService.registerPatient(patient);
		session.setAttribute("currentUser", patient);
		
	}
	
	@GetMapping("/checkIfLogged")
	public LoginUserDto checkIfLogged() {
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		
		Patient p = (Patient) session.getAttribute("currentUser");
		System.out.println(p.getFirstName());
		System.out.println("da da ulogovan je");
		//return new ResponseEntity<>(session.getAttribute("currentUser"), HttpStatus.OK); 
		//return "p";
		return new LoginUserDto(p.getEmail(), "nebitno");
	}
	

	@GetMapping("/clinics")
	public List<ClinicDto> getClinics() {
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		
		List<ClinicDto> clinicsDto = new ArrayList<ClinicDto>();
		
		List<Clinic> clinics = clinicService.findAll();
		for (Clinic c: clinics) {
			clinicsDto.add(new ClinicDto(c.getName(), c.getDescription(), c.getAddress(), c.getCity(), c.getCountry()));
		}
		Clinic c = clinics.get(0);
		System.out.println("Doktora: " + c.getDoctors().size());
		
		for (Doctor d: c.getDoctors()) {
			System.out.println(d.getEmail());
		}
		
		System.out.println("Ima ih " + clinics.size());
		return clinicsDto;
		///return clinics;
	}
	
	
	@RequestMapping(value = "/appointments/{name}", method=RequestMethod.GET)
	@ResponseBody
	public void getPredefinedAppointmentsOfClinic(@PathVariable("name") String name) {
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		
		Clinic c = clinicService.findByName(name);
		
		List<AppointmentDto> appointments = new ArrayList<AppointmentDto>();
		
		for (Appointment a: c.getAppointments()) {
			if (a.getPatient() == null) {
				appointments.add(new AppointmentDto());
			}
		}
		
		
		//for (Appointment a: c.getAppointments()) {
		//	appointments.add(new AppointmentDto(a.getId(), a.getDate(), a.getStart(), a.getEnd(), a.getDoctor().getFirstName() + a.getDoctor().getLastName(),
		//			a.getAppointmentType().getName(), a.getAppointmentType().getPrice()));
		//}
		//System.out.println(appointments.size());
		System.out.println(appointments.size());
		
	}
	
	
	@RequestMapping(value = "/appointmentsById/{id}", method=RequestMethod.GET)
	@ResponseBody
	public List<AppointmentDto> getPredefinedAppointmentsOfClinicById(@PathVariable("id") Long id) {
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		
		Clinic c = clinicService.findById(id);
		
		List<AppointmentDto> appointments = new ArrayList<AppointmentDto>();
		
		for (Appointment a: c.getAppointments()) {
			if (a.getPatient() == null) {
				appointments.add(new AppointmentDto(a.getId(), a.getDate(), a.getStart(), a.getEnd(), a.getDoctor().getFirstName() + a.getDoctor().getLastName(),
						a.getAppointmentType().getName(), a.getAppointmentType().getPrice()));
			}
		}
		
		
		//for (Appointment a: c.getAppointments()) {
		//	appointments.add(new AppointmentDto(a.getId(), a.getDate(), a.getStart(), a.getEnd(), a.getDoctor().getFirstName() + a.getDoctor().getLastName(),
		//			a.getAppointmentType().getName(), a.getAppointmentType().getPrice()));
		//}
		//System.out.println(appointments.size());
		System.out.println(appointments.size());
		return appointments;
		
	}
	
	

	@PutMapping("/appointments/bookAnAppt")
	public void scheduleAppointment(@RequestBody AppointmentScheduleDto appt) {	// ili da ne bude void
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		Patient patient = (Patient) session.getAttribute("currentUser");
		//System.out.println(patientId);
		System.out.println(appt.getAppointmentId());
		
		appointmentService.scheduleAppointment(appt.getAppointmentId(), patient);
		
		//System.out.println("ima apojentmentova: " + patient.getAppointments().size());
		return;
		///return clinics;
	}
	
	@GetMapping("/getUpcomingAppointments")
	public List<AppointmentDto> getUpcomingAppointments() {
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		
		Patient p = (Patient) session.getAttribute("currentUser");
		System.out.println(p.getFirstName());
		System.out.println("da da ulogovan je");
		List<AppointmentDto> upcomingAppointments = new ArrayList<AppointmentDto>();
		
		List<Appointment> appointments = appointmentService.findByPatientId(p.getId());
		
		Date now = new Date();
		
		SimpleDateFormat format = new SimpleDateFormat("HH:mm");

		
		
		String dateString = format.format( new Date()   );
		Date date = new Date();
		try {
			date = format.parse ( "2009-12-31" );
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			;
		}  
		
		for (Appointment a: appointments) {
			
			Date today0 = new Date();
			System.out.println(a.getDate());
			if (a.getDate().after(now)) {
				//if (a.getEnd() > today0.getMinutes()) {
				upcomingAppointments.add(new AppointmentDto(a.getId(), a.getDate(), a.getStart(), a.getEnd(), a.getDoctor().getFirstName() + a.getDoctor().getLastName(),
						a.getAppointmentType().getName(), a.getAppointmentType().getPrice(), a.getClinic().getName(), 
						a.getClinic().getAddress()));
				//	}
				}
			}
		
		System.out.println("Upcoming appointments: " + upcomingAppointments.size());
		
		//return new ResponseEntity<>(session.getAttribute("currentUser"), HttpStatus.OK); 
		//return "p";
		return upcomingAppointments;
	}
	
	
	@PostMapping("/logOut")
	public void logOut() {	// ili da ne bude void
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		session.invalidate();
		//System.out.println("ima apojentmentova: " + patient.getAppointments().size());
		return;
		///return clinics;
	}
	
	
	
	//login(LoginUserDto )
	//Patient korisnik = service.findOneByEmailAndPassword
	//if null
	//throw
	//else sve ok predje na homepage

}
