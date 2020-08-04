package mrsisa_clinical_center.mrsisa_SW6_2017.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import mrsisa_clinical_center.mrsisa_SW6_2017.dto.ClinicDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.LoginUserDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.dto.RegisterUserDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Clinic;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Doctor;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Patient;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.ClinicService;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.PatientService;

@RestController
@RequestMapping("/usr")
public class PatientController {
	
	@Autowired
	private HttpSession session;
	
	private PatientService patientService;
	
	private ClinicService clinicService;
	
	public PatientController(PatientService patientService, ClinicService clinicService) {
		this.patientService = patientService;
		this.clinicService = clinicService;
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
	
	
	
	//login(LoginUserDto )
	//Patient korisnik = service.findOneByEmailAndPassword
	//if null
	//throw
	//else sve ok predje na homepage

}
