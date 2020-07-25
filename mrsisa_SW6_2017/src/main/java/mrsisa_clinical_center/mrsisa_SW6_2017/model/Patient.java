package mrsisa_clinical_center.mrsisa_SW6_2017.model;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "patient")
public class Patient extends User {

	@ManyToOne
	@JoinColumn(name = "clinic_id")
	private Clinic clinic;
	
	@OneToOne
    @JoinColumn(name = "medical_record_id")
	private MedicalRecord medicalRecord;
	
	@OneToMany(mappedBy = "patient")
	private Set<Appointment> appointments;
	
}
