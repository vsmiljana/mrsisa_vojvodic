package mrsisa_clinical_center.mrsisa_SW6_2017.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.AppointmentType;

public interface AppointmentTypeRepository extends JpaRepository<AppointmentType, Long> {

	List<AppointmentType> findAll();

}
