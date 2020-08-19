package mrsisa_clinical_center.mrsisa_SW6_2017.service;

import java.util.List;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Rating;

public interface RatingService {

	List<Rating> findAllByClinicId(Long id);

	Rating findOneByPatientIdAndDoctorId(Long id, Long id2);

	Rating findOneByPatientIdAndClinicId(Long id, Long id2);

}
