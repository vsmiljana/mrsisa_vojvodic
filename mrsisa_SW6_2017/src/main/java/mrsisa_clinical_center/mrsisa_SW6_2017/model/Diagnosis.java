package mrsisa_clinical_center.mrsisa_SW6_2017.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Version;

@Entity
@Table(name = "diagnosis")
public class Diagnosis {

	@Id
	private Long id;
	@Column(name="name", unique=true, nullable=false)
	private String name;
	
	@ManyToMany
    @JoinTable(name = "diagnosis_medication", 
      joinColumns = @JoinColumn(name = "medication_id", referencedColumnName = "id"), 
      inverseJoinColumns = @JoinColumn(name = "diagnosis_id", 
      referencedColumnName = "id"))
	private Set<Medication> medications;
	
	@ManyToMany(mappedBy = "diagnoses")
	private Set<ExaminationReport> examinationReports;
	
	@Version
	private Long version;
	
	public Diagnosis() {}

	public Diagnosis(Long id, String name) {
		this.id = id;
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<Medication> getMedications() {
		return medications;
	}

	public void setMedications(Set<Medication> medications) {
		this.medications = medications;
	}

	public Set<ExaminationReport> getExaminationReports() {
		return examinationReports;
	}

	public void setExaminationReports(Set<ExaminationReport> examinationReports) {
		this.examinationReports = examinationReports;
	}	
	
	public Long getVersion() {
		return version;
	}

	public void setVersion(Long version) {
		this.version = version;
	}
	
	
}
