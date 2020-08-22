package mrsisa_clinical_center.mrsisa_SW6_2017.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.AppointmentRegScheduleDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.AppointmentScheduleDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.AppointmentTimeDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.ClinicDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.ClinicsSetupDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.DiagnosisDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.DoctorDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.ExaminationReportDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.LoginUserDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.MedicalRecordDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.MedicationDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.PasswordChangeDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.PastAppointmentDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.RatingDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.RegisterUserDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.SearchAppointmentDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.SearchClinicsResultDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.SearchDoctorsResultDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Appointment;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.AppointmentType;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Clinic;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Diagnosis;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Doctor;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.ExaminationReport;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.MedicalRecord;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Medication;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Patient;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Rating;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.AppointmentService;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.AppointmentTypeService;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.ClinicService;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.DoctorService;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.PatientService;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.RatingService;

@RestController
@RequestMapping("/usr")
public class PatientController {
	
	@Autowired
	private HttpSession session;
	
	private PatientService patientService;
	
	private ClinicService clinicService;
	
	private AppointmentService appointmentService;
	
	private AppointmentTypeService appointmentTypeService;
	
	private DoctorService doctorService;
	
	private RatingService ratingService;
	
	
	
	public PatientController(PatientService patientService, ClinicService clinicService, AppointmentService appointmentService,
			AppointmentTypeService appointmentTypeService, DoctorService doctorService, RatingService ratingService) {
		this.patientService = patientService;
		this.clinicService = clinicService;
		this.appointmentService = appointmentService;
		this.appointmentTypeService = appointmentTypeService;
		this.doctorService = doctorService;
		this.ratingService = ratingService;
		
	}
	
	
	
	@PostMapping("/login")
	public void login(@RequestBody LoginUserDto userDto) throws Exception {
		Patient patient = patientService.findOneByEmailAndPassword(userDto.getEmail(), userDto.getPassword());
		if (patient == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Invalid username or password!");
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
		Doctor doctor = doctorService.findOneByEmailOrSocialSecurityNumber(userDto.getEmail(), userDto.getSsn());
		if (patient != null || doctor != null) {
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
			//throw new ResponseStatusException()
		}
		
		List<ClinicDto> clinicsDto = new ArrayList<ClinicDto>();
		
		List<Clinic> clinics = clinicService.findAll();
		for (Clinic c: clinics) {
			
			List<Rating> ratings = ratingService.findAllByClinicId(c.getId());
			System.out.println(ratings.size());
			double sum = ratings.stream().mapToInt(rating -> rating.getRating()).sum();
			int votes = ratings.size();
			double average = sum/votes;
			clinicsDto.add(new ClinicDto(c.getId(), c.getName(), c.getDescription(), c.getAddress(), c.getCity(), c.getCountry(), average, votes));
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
	
	
	
	@GetMapping("/clinicsPage")
	public ClinicsSetupDto getClinicsAndAppointmentTypes() {
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		
		ArrayList<ClinicDto> clinicsDto = new ArrayList<ClinicDto>();
		
		ArrayList<Clinic> clinics = (ArrayList<Clinic>) clinicService.findAll();
		for (Clinic c: clinics) {
			
			List<Doctor> doctors = doctorService.findAllByClinicId(c.getId());
			List<String> appointmentNames = getAppointmentsDoctorsCanPerform(doctors);
			
			List<Rating> ratings = ratingService.findAllByClinicId(c.getId());
			System.out.println(ratings.size());
			double sum = ratings.stream().mapToInt(rating -> rating.getRating()).sum();
			int votes = ratings.size();
			double average = sum/votes;
			ClinicDto cDto = new ClinicDto(c.getId(), c.getName(), c.getDescription(), c.getAddress(), c.getCity(), c.getCountry(), average, votes);
			cDto.setAppointmentNames(appointmentNames);
			clinicsDto.add(cDto);
		}
		
		List<AppointmentType> appointmentTypes = appointmentTypeService.findAllByNameAsc();
		ArrayList<String> appointments = new ArrayList<String>();
		
		for (AppointmentType type: appointmentTypes) {
			appointments.add(type.getName());
		}
		
		
		
		ClinicsSetupDto setup = new ClinicsSetupDto(clinicsDto, appointments);
		return setup;
		///return clinics;
	}
	
	
	@GetMapping("/current")
	public RegisterUserDto getCurrentUser() {
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		
		Patient patient = (Patient) session.getAttribute("currentUser");
		
		RegisterUserDto user = new RegisterUserDto(patient.getEmail(), null, patient.getFirstName(), patient.getLastName(),
				patient.getSocialSecurityNumber(), patient.getPhoneNumber(), patient.getAddress(), patient.getCity(), patient.getCountry());
		
		return user;
		///return clinics;
	}
	
	
	@PutMapping("/editProfileInfo")
	public void editProfileInfo(@RequestBody RegisterUserDto user) {	// ili da ne bude void
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		Patient patient = (Patient) session.getAttribute("currentUser");
		//System.out.println(patientId);
		//System.out.println(appt.getAppointmentId());
		
		System.out.println("*****************\n********\n" + user.getEmail() + user.getFirstName() + user.getLastName());
		String firstName = user.getFirstName();
		String lastName = user.getLastName();
		String address = user.getAddress();
		String city = user.getCity();
		String country = user.getCountry();
		String phoneNumber = user.getPhoneNumber();
	
		patient.setAddress(address);
		patient.setFirstName(firstName);
		patient.setLastName(lastName);
		patient.setCity(city);
		patient.setCountry(country);
		patient.setPhoneNumber(phoneNumber);
		//appointmentService.scheduleAppointment(appt.getAppointmentId(), patient);
		patientService.updatePatient(patient.getEmail(), firstName, lastName, address, city, country, phoneNumber);
		//System.out.println("ima apojentmentova: " + patient.getAppointments().size());
		return;
		///return clinics;
	}
	
	@PutMapping("/changePassword")
	public String changePassword(@RequestBody PasswordChangeDto passwordChange) {	// ili da ne bude void
		
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		Patient patient = (Patient) session.getAttribute("currentUser");
	
		String oldPassword = passwordChange.getOldPassword();
		System.out.println("*\n*\n*\n" + oldPassword + " " + patient.getPassword());
		if (!oldPassword.equals(patient.getPassword())) {
			//return "Incorrect old password";
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Incorrect current password!");
			
		}
		String newPassword = passwordChange.getNewPassword();
		
		patientService.setNewPassword(patient.getId(), newPassword);
		
		return "";
		///return clinics;
	}
	
	
	// srediti datume
	
	
	// po imenu klinike upcoming preshceduled appointmentse
	@RequestMapping(value = "/appointments/{name}", method=RequestMethod.GET)
	@ResponseBody
	public List<AppointmentDto> getPredefinedAppointmentsOfClinic(@PathVariable("name") String name) {
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		
		Clinic c = clinicService.findByName(name);
		
		List<AppointmentDto> appointments = new ArrayList<AppointmentDto>();
		
		for (Appointment a: c.getAppointments()) {
			if (a.getPatient() == null) {	// i ako je datum poslije danas
				appointments.add(new AppointmentDto(a.getId(), a.getDate(), a.getStart(), a.getEnd(), a.getDoctor().getFirstName() + " " + a.getDoctor().getLastName(),
						a.getAppointmentType().getName(), a.getAppointmentType().getPrice(), a.getClinic().getName(), 
						a.getClinic().getAddress()));
			}
		}
		return appointments;
		
		//for (Appointment a: c.getAppointments()) {
		//	appointments.add(new AppointmentDto(a.getId(), a.getDate(), a.getStart(), a.getEnd(), a.getDoctor().getFirstName() + a.getDoctor().getLastName(),
		//			a.getAppointmentType().getName(), a.getAppointmentType().getPrice()));
		//}
		//System.out.println(appointments.size());
		//return appointments;
		
	}
	
	// po id-ju klinike upcoming appointmentse
	@RequestMapping(value = "/appointmentsById/{id}", method=RequestMethod.GET)
	@ResponseBody
	public List<AppointmentDto> getPredefinedAppointmentsOfClinicById(@PathVariable("id") Long id) {
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		
		Clinic c = clinicService.findById(id);
		
		List<AppointmentDto> appointments = new ArrayList<AppointmentDto>();
		
		
		
		for (Appointment a: c.getAppointments()) {
			
			Long dateLong = a.getDate().getTime();
			System.out.println(a.getDate());
			if (a.getPatient() == null) {
				appointments.add(new AppointmentDto(a.getId(), dateLong, a.getStart(), a.getEnd(), a.getDoctor().getFirstName() + " " + a.getDoctor().getLastName(),
						a.getAppointmentType().getName(), a.getAppointmentType().getPrice(), a.getClinic().getName(), 
						a.getClinic().getAddress()));
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
	
	
	@RequestMapping(value = "/doctors/{clinicId}", method=RequestMethod.GET)
	@ResponseBody
	public SearchDoctorsResultDto getDoctorsOfClinic(@PathVariable("clinicId") Long id) {
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		
		//Clinic c = clinicService.findById(id);
			
		List<Doctor> doctors = doctorService.findAllByClinicId(id);
		
		List<DoctorDto> doctorsDto = new ArrayList<DoctorDto>(); 
		
		for (Doctor d: doctors) {
			List<Rating> ratings = ratingService.findAllByDoctorId(d.getId());
			double sum = ratings.stream().mapToInt(rating -> rating.getRating()).sum();
			int votes = ratings.size();
			double rating = sum/votes;
			doctorsDto.add(new DoctorDto(d.getId(), d.getFirstName(), d.getLastName(), rating, votes));		
		}
		
		List<String> appointmentNames = getAppointmentsDoctorsCanPerform(doctors);
		
		Clinic c = clinicService.findById(id);
		
		ClinicDto clinicDto = new ClinicDto(c.getId(), c.getName(), c.getDescription(), c.getAddress(), c.getCity(),
				c.getCountry(), appointmentNames);
		
		SearchDoctorsResultDto result = new SearchDoctorsResultDto(clinicDto, doctorsDto);
		
		return result;
		
	}
	
	
	private List<String> getAppointmentsDoctorsCanPerform(List<Doctor> doctors) {
		HashSet<String> apptTypesSet = new HashSet<String>();
		for (Doctor d: doctors) {
			if (d.getAppointmentTypes().isEmpty()) {
				continue;
			}
			for (AppointmentType at: d.getAppointmentTypes()) {
				apptTypesSet.add(at.getName());
			}
		}
		List<String> apptTypesList = new ArrayList<String>(apptTypesSet);
		return apptTypesList;
	}



	@PostMapping("/appointments/scheduleRegular")
	public void scheduleRegular(@RequestBody AppointmentRegScheduleDto appt) {
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		
		if (checkAppointment(appt) == false) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Bad request body!");
		}
		
		Patient p = (Patient) session.getAttribute("currentUser");
		int start = appt.getStart();
		int end = appt.getEnds();
		Date date = new Date(appt.getDate());
		Doctor d = doctorService.findById(appt.getDoctorId());
		Clinic c = d.getClinic();
		AppointmentType at = appointmentTypeService.findByName(appt.getAppointmentName());
		Double price = at.getPrice();
		long id = (long) (Math.random() * 1000);
		
		Appointment a = new Appointment(id, start, end, date, p, d, c, at);
		appointmentService.save(a);
		
		return;
	}

	public boolean checkAppointment(AppointmentRegScheduleDto appt) {
		return true;
	}

	@PutMapping("/appointments/bookAnAppt")
	public void scheduleAppointment(@RequestBody AppointmentScheduleDto appt) {	// ili da ne bude void
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		System.out.println("MOZEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
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
		
		//List<Appointment> appointments = appointmentService.findByPatientId(p.getId());
		List<Appointment> appointments = appointmentService.findByPatientIdOrderByDateAsc(p.getId());
		
		Date now = new Date();
		
		SimpleDateFormat format = new SimpleDateFormat("HH:mm");

		for (Appointment a: appointments) {
			
			Long dateLong = a.getDate().getTime();
			
			Date today0 = new Date();
			System.out.println(a.getDate());
			Date apptExactTime = formatTimeDateMins(a.getDate(), a.getStart());
			//System.out.println(now +  " to je sad, a formatirano je: " + apptExactTime);
			if (apptExactTime.after(now)) {
				//if (a.getEnd() > today0.getMinutes()) {
				upcomingAppointments.add(new AppointmentDto(a.getId(), dateLong, a.getStart(), a.getEnd(), a.getDoctor().getFirstName() + " " + a.getDoctor().getLastName(),
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
	
	
	private Date formatTimeDateMins(Date date, Integer start) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.set(Calendar.HOUR_OF_DAY, start/60);
		cal.set(Calendar.MINUTE, start%60);
		cal.set(Calendar.SECOND,0);
		cal.set(Calendar.MILLISECOND,0);
		return cal.getTime();	
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
	
	
	
	@PutMapping("/searchApptsClinic")
	public SearchClinicsResultDto searchAppointment(@RequestBody SearchAppointmentDto search) {	// ili da ne bude void
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		
		List<Object> objects = doSearch(search);
		
		List<ClinicDto> clinicsDto = (List<ClinicDto>) objects.get(0);
		AppointmentDto appt = new AppointmentDto(search.getDate(), search.getAppointmentName());
		
		SearchClinicsResultDto result = new SearchClinicsResultDto(appt, clinicsDto);
		
		//clinicsDto.addAll((List<ClinicDto>) objects.get(0));
		
		//@SuppressWarnings("unchecked")
		//List<DoctorDto> doctorsDto = (List<DoctorDto>) objects.get(1);
		
		//System.out.println("Name: " + apptName + ", date: " + date);
		
		//List<Appointment> appointments = appointmentService.findByDate(date);
		/*
		for (DoctorDto d: doctorsDto) {
			System.out.println(d.getFirstName() + " " + d.getLastName());
			for (AppointmentTimeDto atd: d.getAvailableAppointments()) {
				System.out.println("pocetak minuta: " + atd.getStart());
				
				System.out.println(atd.getStart()/60 + ":" + atd.getStart()%60);
			}
		}*/
		
		
		//System.out.println(appointments.size());
		
		
		return result; 	// vratiti i cijenu
		
		//return null;
		///return clinics;
	}
	
	
	@PutMapping("/searchApptsOneClinic")
	public SearchDoctorsResultDto searchAppointmentOneClinic(@RequestBody SearchAppointmentDto search) {	// ili da ne bude void
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		
		List<Object> objects = doSearch(search);
		
		List<Doctor> doctors = (List<Doctor>) objects.get(1);
		List<DoctorDto> doctorsDto = (List<DoctorDto>) objects.get(2);
		List<String> appointmentNames = getAppointmentsDoctorsCanPerform(doctors);
		Double price = (Double) objects.get(3);
		
		
		AppointmentDto appt = new AppointmentDto(search.getDate(), search.getAppointmentName());
		Clinic c = clinicService.findById(search.getClinicId());
		ClinicDto clinicDto = new ClinicDto(c.getId(), c.getName(), c.getDescription(), c.getAddress(), c.getCity(),
				c.getCountry(),price, appointmentNames);
		SearchDoctorsResultDto result = new SearchDoctorsResultDto(appt, clinicDto, doctorsDto);
		
		return result; 	// vratiti i cijenu
	
	}
	
	
	
	@PutMapping("/searchApptsClinic2")
	public List<ClinicDto> searchAppointmentClinics(@RequestBody SearchAppointmentDto search) {	// ili da ne bude void
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		
		System.out.println("seatch appointment clinic");
		
		List<Object> objects = doSearch(search);
		
		//List<DoctorDto> doctorsDto = (List<DoctorDto>) objects.get(1);
		
		//return doctorsDto; 	// vratiti i cijenu
		List<ClinicDto> clinicsDto = (List<ClinicDto>) objects.get(0);
		return clinicsDto;
	
	}
	
	
	public List<Object> doSearch(SearchAppointmentDto search){
		
		Long clinicId = search.getClinicId();
		
		System.out.println("clinic id " + clinicId);
		
		if (clinicId == null) {
			clinicId = -1l;
		}
		
		
		String apptName = search.getAppointmentName();
		
		System.out.println("*************apt name**********" + apptName);
		
		AppointmentType apptType = appointmentTypeService.findByName(apptName);
		
		Double price = apptType.getPrice();
		
		List<Doctor> doctors = doctorService.findAllByAppointmentTypes(apptType);
		System.out.println("--\n---\n--"+ doctors.size() + "--\n---\n" + clinicId + "\n---");
		
		
		Long milliseconds = search.getDate();
		
		Date date = adjustDate(milliseconds);
		
		HashSet<Clinic> clinics = new HashSet<Clinic>();
		
		ArrayList<DoctorDto> doctorsDto = new ArrayList<DoctorDto>();
		ArrayList<Doctor> doctors2 = new ArrayList<Doctor>();
		
		for (Doctor d: doctors) {
			System.out.println(d.getId() + " " + d.getEmail());
			List<Appointment> appointments = appointmentService.findAllByDoctorIdAndDate(d.getId(), date);
			List<AppointmentTimeDto> appointmentStarts = doctorService.makeSchedule(appointments, apptType.getDuration(), d.getStart(), d.getEnd());
			if (appointmentStarts.size() > 0) {
				clinics.add(d.getClinic());
				if (d.getClinic().getId().equals(clinicId)) {	// if we are searching only the doctors of a certain clinic
					List<Rating> ratings = ratingService.findAllByDoctorId(d.getId());
					double sum = ratings.stream().mapToInt(rating -> rating.getRating()).sum();
					int votes = ratings.size();
					double rating = sum/votes;
					doctorsDto.add(new DoctorDto(d.getId(), d.getFirstName(), d.getLastName(), appointmentStarts, rating, votes));
					doctors2.add(d);
				}
			}
			
			System.out.println(appointmentStarts);
			
		}
		
		List<ClinicDto> clinicsDto = new ArrayList<ClinicDto>();
		
		for (Clinic c: clinics) {
			
			
			List<Rating> ratings = ratingService.findAllByClinicId(c.getId());
			System.out.println(ratings.size());
			double sum = ratings.stream().mapToInt(rating -> rating.getRating()).sum();
			int votes = ratings.size();
			double average = sum/votes;
			
			List<Doctor> doctorsClinic = doctorService.findAllByClinicId(c.getId());
			List<String> appointmentNames = getAppointmentsDoctorsCanPerform(doctorsClinic);
			ClinicDto cDto = new ClinicDto(c.getId(), c.getName(), c.getDescription(), c.getAddress(), c.getCity(), c.getCountry(), price, average, votes);
			cDto.setAppointmentNames(appointmentNames);
			clinicsDto.add(cDto);
		}
		
		List<Object> clinicsDoctors = new ArrayList<Object>();
		clinicsDoctors.add(clinicsDto);
		clinicsDoctors.add(doctors2);
		clinicsDoctors.add(doctorsDto);	
		clinicsDoctors.add(price);
		
		return clinicsDoctors;
	}
	
	
	//login(LoginUserDto )
	//Patient korisnik = service.findOneByEmailAndPassword
	//if null
	//throw
	//else sve ok predje na homepage
	
	
	// u past appts
	
	@GetMapping("/record")
	public MedicalRecordDto getRecord() {
		
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		
		Patient p = (Patient) session.getAttribute("currentUser");
		MedicalRecord md = p.getMedicalRecord();
		
		if (md == null) {
			return null;
		}
		
		Date date = new Date();
		date = adjustDate(date.getTime());
		
		List<Appointment> pastAppointments = appointmentService.findByPatientIdAndDateBefore(p.getId(), date);
		
		List<PastAppointmentDto> pastAppointmentsDto = new ArrayList<PastAppointmentDto>();
		
		for (Appointment a: pastAppointments) {
			PastAppointmentDto paDto = new PastAppointmentDto(a);
			Doctor d = a.getDoctor();
			List<Rating> ratings = ratingService.findAllByDoctorId(d.getId());
			
			System.out.println("doktor " + d.getEmail());
			System.out.println("ima ocjena " + ratings.size());
			for (Rating r: ratings) {
				System.out.println(r.getRating());
			}
			
			
			double sum = ratings.stream().mapToInt(rating -> rating.getRating()).sum();
			int votes = ratings.size();
			double rating = sum/votes;
			DoctorDto dDto = new DoctorDto(d.getId(), d.getFirstName(), d.getLastName(), rating, votes);
			paDto.setDoctorDto(dDto);
			Clinic c = a.getClinic();
			List<Rating> ratings2 = ratingService.findAllByClinicId(c.getId()); 	// sa a.getRatings() ne znam sta dobijem?
			double sum2 = ratings2.stream().mapToInt(rating2 -> rating2.getRating()).sum();
			int votes2 = ratings2.size();
			double rating2 = sum2/votes2;
			ClinicDto cDto = new ClinicDto(c.getId(), c.getName(), c.getAddress(), c.getCity(), c.getCountry(), rating2, votes2);
			paDto.setClinicDto(cDto);
		
			Rating ratingOfDoctor = ratingService.findOneByPatientIdAndDoctorId(p.getId(), d.getId());
			Rating ratingOfClinic = ratingService.findOneByPatientIdAndClinicId(p.getId(), c.getId());
			System.out.println("***************\n" + cDto.getName() + " a doktor " + d.getFirstName());
			System.out.println(ratingOfDoctor);
			System.out.println(ratingOfClinic);
			if (ratingOfDoctor == null) {
				paDto.setHisDoctorRating(0);
			}
			else {
				paDto.setHisDoctorRating(ratingOfDoctor.getRating());
			}
			if (ratingOfClinic == null) {
				paDto.setHisClinicRating(0);
			}
			else {
				paDto.setHisClinicRating(ratingOfClinic.getRating());
			}
			
			pastAppointmentsDto.add(paDto);
		}
		
		MedicalRecordDto record = new MedicalRecordDto(md, pastAppointmentsDto);
		
		return record;
	}
	
	@RequestMapping(value = "/pastAppointmentReport/{id}", method=RequestMethod.GET)
	@ResponseBody
	public ExaminationReportDto getExamReport(@PathVariable("id") Long apptId) {
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		Appointment appt = appointmentService.findById(apptId);
		ExaminationReport er = appt.getExaminationReport();
		
		if (er == null) {
			System.out.println("yes examination report is null");
			return null;
		}
		
		Set<Diagnosis> diagnoses = er.getDiagnoses();
		Set<Medication> medications = er.getMedications();
		List<DiagnosisDto> diagnosesDto = new ArrayList<DiagnosisDto>();
		List<MedicationDto> medicationsDto = new ArrayList<MedicationDto>();
		for (Diagnosis d: diagnoses) {
			diagnosesDto.add(new DiagnosisDto(d));
		}
		for (Medication m: medications) {
			medicationsDto.add(new MedicationDto(m));
		}
		
		ExaminationReportDto erDto = new ExaminationReportDto(er.getDescription(), diagnosesDto, medicationsDto);
		
		return erDto;
	}
	
	
	@GetMapping("/pastAppointments")
	public List<PastAppointmentDto> dobijProslePreglede(){
		
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		
		Patient p = (Patient) session.getAttribute("currentUser");
		Date date = new Date();
		date = adjustDate(date.getTime());
		
		List<Appointment> pastAppointments = appointmentService.findByPatientIdAndDateBefore(p.getId(), date);
		
		List<PastAppointmentDto> pastAppointmentsDto = new ArrayList<PastAppointmentDto>();
		
		for (Appointment a: pastAppointments) {
			PastAppointmentDto paDto = new PastAppointmentDto(a);
			if (a.getExaminationReport() == null ) {
				continue;
			}
			ExaminationReport er = a.getExaminationReport();
			Set<Diagnosis> diagnoses = er.getDiagnoses();
			Set<Medication> medications = er.getMedications();
			List<DiagnosisDto> diagnosesDto = new ArrayList<DiagnosisDto>();
			List<MedicationDto> medicationsDto = new ArrayList<MedicationDto>();
			for (Diagnosis d: diagnoses) {
				diagnosesDto.add(new DiagnosisDto(d));
			}
			for (Medication m: medications) {
				medicationsDto.add(new MedicationDto(m));
			}
			
			ExaminationReportDto erDto = new ExaminationReportDto(er.getDescription(), diagnosesDto, medicationsDto);
			//paDto.setExaminationReport(erDto);
			pastAppointmentsDto.add(paDto);
		}
		
		return pastAppointmentsDto;
	}
	
	@PostMapping("/rateDoctor")
	public void rateDoctor(@RequestBody RatingDto rating) {
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		
		if (!checkRatingDto(rating, "doctor")) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Bad request!");
		}
		
		Patient p = (Patient) session.getAttribute("currentUser");
		
		Long doctorId = rating.getId();
		
		Rating r = ratingService.findOneByPatientIdAndDoctorId(p.getId(), doctorId);
		
		if (r != null) { 	// conflict
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Already rated!");
		}
		else {
			Doctor d = doctorService.findById(doctorId);
			Long id = generateLong();
			Rating userRating = new Rating(id, d, null, p, rating.getRating());
			ratingService.save(userRating);
		}
		
	}
	
	@PostMapping("/rateClinic")
	public void rateClinic(@RequestBody RatingDto rating) {
		if (session.getAttribute("currentUser") == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not logged in!");
		}
		
		if (!checkRatingDto(rating, "clinic")) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Bad request!");
		}
		
		Patient p = (Patient) session.getAttribute("currentUser");
		
		Long clinicId = rating.getId();
		
		Rating r = ratingService.findOneByPatientIdAndClinicId(p.getId(), clinicId);
		
		if (r != null) { 	// conflict
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Already rated!");
		}
		else {
			Clinic c = clinicService.findById(clinicId);
			Long id = generateLong();
			Rating userRating = new Rating(id, null, c, p, rating.getRating());
			ratingService.save(userRating);
		}
		
	}
	
	
	private boolean checkRatingDto(RatingDto rating, String string) {
		return true;
	}


	public long generateLong() {
	    long leftLimit = 1L;
	    long rightLimit = 1000000L;
	    long generatedLong = leftLimit + (long) (Math.random() * (rightLimit - leftLimit));
	    return generatedLong;
	}
	
	public Date adjustDate(Long ms) {
		Date date = new Date(ms);
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.set(Calendar.HOUR_OF_DAY,0);
		cal.set(Calendar.MINUTE,0);
		cal.set(Calendar.SECOND,0);
		cal.set(Calendar.MILLISECOND,0);
		return cal.getTime();	
	}

}
