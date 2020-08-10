package mrsisa_clinical_center.mrsisa_SW6_2017.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.AppointmentType;
import mrsisa_clinical_center.mrsisa_SW6_2017.repository.AppointmentTypeRepository;
import mrsisa_clinical_center.mrsisa_SW6_2017.service.AppointmentTypeService;

@Service
public class AppointmentTypeImpl implements AppointmentTypeService {

	@Autowired
	private AppointmentTypeRepository rep;

	@Override
	public List<AppointmentType> findAll() {
		// TODO Auto-generated method stub
		return rep.findAll();
	}

	@Override
	public List<AppointmentType> findAllByNameAsc() {
		// TODO Auto-generated method stub
		return rep.findAll();
	}

	@Override
	public AppointmentType findByName(String apptName) {
		// TODO Auto-generated method stub
		return rep.findByName(apptName);
	}
	
}
