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
	@JoinColumn(name = "clinical_center_id")
	private ClinicalCenter clinicalCenter;
	
	@OneToOne
    @JoinColumn(name = "medical_record_id")
	private MedicalRecord medicalRecord;
	
	@OneToMany(mappedBy = "patient")
	private Set<Appointment> appointments;
	
	@OneToMany(mappedBy = "patient")
	private Set<Rating> ratings;
	
	public Patient() {}
	
	public Patient(Long id, String email, String password, String firstName, String lastName, String phoneNumber,
			String address, String city, String country, String socialSecurityNumber) {
		super(id, email, password, firstName, lastName, phoneNumber, address, city, country, socialSecurityNumber);
	}

	public ClinicalCenter getClinicalCenter() {
		return clinicalCenter;
	}

	public void setClinicalCenter(ClinicalCenter clinicalCenter) {
		this.clinicalCenter = clinicalCenter;
	}

	public MedicalRecord getMedicalRecord() {
		return medicalRecord;
	}

	public void setMedicalRecord(MedicalRecord medicalRecord) {
		this.medicalRecord = medicalRecord;
	}

	public Set<Appointment> getAppointments() {
		return appointments;
	}

	public void setAppointments(Set<Appointment> appointments) {
		this.appointments = appointments;
	}

	public Set<Rating> getRatings() {
		return ratings;
	}

	public void setRatings(Set<Rating> ratings) {
		this.ratings = ratings;
	}
	
	
}
