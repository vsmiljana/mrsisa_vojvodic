package mrsisa_clinical_center.mrsisa_SW6_2017.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Rating;

public interface RatingRepository extends JpaRepository<Rating, Long> {

	List<Rating> findAllByClinicId(Long id);

	Rating findOneByPatientIdAndDoctorId(Long id, Long id2);

	Rating findOneByPatientIdAndClinicId(Long id, Long id2);

}
