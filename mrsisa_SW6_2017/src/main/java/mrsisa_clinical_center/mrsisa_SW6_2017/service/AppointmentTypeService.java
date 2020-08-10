package mrsisa_clinical_center.mrsisa_SW6_2017.service;

import java.util.List;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.AppointmentType;


public interface AppointmentTypeService {

	List<AppointmentType> findAll();

	List<AppointmentType> findAllByNameAsc();

}
