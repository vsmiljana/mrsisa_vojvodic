package mrsisa_clinical_center.mrsisa_SW6_2017.service;

import java.util.List;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Clinic;

public interface ClinicService {

	public List<Clinic> doSomething();
	
	public List<Clinic> findAll();

	public Clinic findByName(String name);

	public Clinic findById(Long id);
	
}
