package mrsisa_clinical_center.mrsisa_SW6_2017.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Person;

public interface PersonRepository extends JpaRepository<Person, Long>{

}
