package mrsisa_clinical_center.mrsisa_SW6_2017.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "examination_report")
public class ExaminationReport {

	@Id
	private Long id;
	@Column(name="description", unique=false, nullable=false)
	private String description;
	
	@OneToOne(mappedBy = "examinationReport")
	private Appointment appointment;
	
	@ManyToMany
    @JoinTable(name = "diagnosis_examination_report", 
      joinColumns = @JoinColumn(name = "examination_report_id", referencedColumnName = "id"), 
      inverseJoinColumns = @JoinColumn(name = "diagnosis_id", 
      referencedColumnName = "id"))
	private Set<Diagnosis> diagnoses;
	
	@ManyToMany
	@JoinTable(name = "medication_examination_report", 
    	joinColumns = @JoinColumn(name = "examination_report_id", referencedColumnName = "id"), 
    	inverseJoinColumns = @JoinColumn(name = "medication_id", 
    	referencedColumnName = "id"))
	private Set<Medication> medications;
	
	
	public ExaminationReport() {}

	public ExaminationReport(Long id, String description) {
		this.id = id;
		this.description = description;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Appointment getAppointment() {
		return appointment;
	}

	public void setAppointment(Appointment appointment) {
		this.appointment = appointment;
	}

	public Set<Diagnosis> getDiagnoses() {
		return diagnoses;
	}

	public void setDiagnoses(Set<Diagnosis> diagnoses) {
		this.diagnoses = diagnoses;
	}

	public Set<Medication> getMedications() {
		return medications;
	}

	public void setMedications(Set<Medication> medications) {
		this.medications = medications;
	}
	
	
	
}
