package mrsisa_clinical_center.mrsisa_SW6_2017.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Clinic;
import mrsisa_clinical_center.mrsisa_SW6_2017.repository.ClinicRepository;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.ClinicService;


@Service
@Transactional(readOnly=true)
public class ClinicImpl implements ClinicService {

	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	ClinicRepository rep;

	@Override
	public List<Clinic> findAll() {
		logger.info("> findAll");
		List<Clinic> clinics = rep.findAll();
		logger.info("< findAll");
		return clinics;
	}

	@Override
	public Clinic findByName(String name) {
		logger.info("> findByName");
		Clinic clinic = rep.findOneByName(name);
		logger.info("< findByName");
		return clinic;
	}

	@Override
	public Clinic findById(Long id) {
		logger.info("> findById");
		Clinic clinic = rep.findOneById(id);
		logger.info("< findById");
		return clinic;
	}

}
