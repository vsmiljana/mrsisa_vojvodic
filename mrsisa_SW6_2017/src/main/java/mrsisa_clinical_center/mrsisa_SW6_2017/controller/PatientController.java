package mrsisa_clinical_center.mrsisa_SW6_2017.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import mrsisa_clinical_center.mrsisa_SW6_2017.dto.LoginUserDto;
import mrsisa_clinical_center.mrsisa_SW6_2017.model.Patient;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.PatientService;

@RestController
@RequestMapping("/login")
public class PatientController {
	
	private PatientService patientService;
	
	public PatientController(PatientService patientService) {
		this.patientService = patientService;
	}
	
	@PostMapping()
	public void login(@RequestBody LoginUserDto userDto) throws Exception {
		Patient patient = patientService.findOneByEmailAndPassword(userDto.getEmail(), userDto.getPassword());
		if (patient == null) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Invalid email and password combination.");
		}
	}
	
	//login(LoginUserDto )
	//Patient korisnik = service.findOneByEmailAndPassword
	//if null
	//throw
	//else sve ok predje na homepage

}
