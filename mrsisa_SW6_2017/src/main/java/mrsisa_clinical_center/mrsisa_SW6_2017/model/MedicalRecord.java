package mrsisa_clinical_center.mrsisa_SW6_2017.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "medical_record")
public class MedicalRecord {

	@Id
	private Long id;
	@Column(name="blood_type", unique=false, nullable=false)
	private String bloodType;
	@Column(name="height", unique=false, nullable=false)
	private Double height;
	@Column(name="weight", unique=false, nullable=false)
	private Double weight;
	@Column(name="allergies", unique=false, nullable=false)
	private String allergies;
	@Column(name="dipotre", unique=false, nullable=false)
	private Double dioptre;
	
	@OneToOne(mappedBy = "medicalRecord")
	private Patient patient;
	
	public MedicalRecord() {}

	public MedicalRecord(Long id, String bloodType, Double height, Double weight, String allergies, Double dioptre) {
		this.id = id;
		this.bloodType = bloodType;
		this.height = height;
		this.weight = weight;
		this.allergies = allergies;
		this.dioptre = dioptre;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBloodType() {
		return bloodType;
	}

	public void setBloodType(String bloodType) {
		this.bloodType = bloodType;
	}

	public Double getHeight() {
		return height;
	}

	public void setHeight(Double height) {
		this.height = height;
	}

	public Double getWeight() {
		return weight;
	}

	public void setWeight(Double weight) {
		this.weight = weight;
	}

	public String getAllergies() {
		return allergies;
	}

	public void setAllergies(String allergies) {
		this.allergies = allergies;
	}

	public Double getDioptre() {
		return dioptre;
	}

	public void setDioptre(Double dioptre) {
		this.dioptre = dioptre;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}
	
	
	
}
