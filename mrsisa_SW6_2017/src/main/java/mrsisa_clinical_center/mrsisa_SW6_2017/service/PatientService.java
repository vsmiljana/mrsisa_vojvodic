package mrsisa_clinical_center.mrsisa_SW6_2017.service;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Patient;

public interface PatientService {

	public Patient findOneByEmailAndPassword(String email, String password);
}
