package mrsisa_clinical_center.mrsisa_SW6_2017.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Clinic;
import mrsisa_clinical_center.mrsisa_SW6_2017.repository.ClinicRepository;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.ClinicService;

@Service
public class ClinicImpl implements ClinicService {

	@Autowired
	ClinicRepository rep;
	
	@Override
	public List<Clinic> doSomething() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Clinic> findAll() {
		// TODO Auto-generated method stub
		return rep.findAll();
	}

}
