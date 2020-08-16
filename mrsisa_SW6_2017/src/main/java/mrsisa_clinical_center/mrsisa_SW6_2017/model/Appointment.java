package mrsisa_clinical_center.mrsisa_SW6_2017.model;

import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "appointment")
public class Appointment {

	@Id
	private Long id;
	@Column(name="start", unique=false, nullable=false)
	private Integer start;
	@Column(name="ends", unique=false, nullable=false)
	private Integer end;
	@Column(name="date", unique=false, nullable=false)
	private Date date;
	
	@ManyToOne
	@JoinColumn(name = "patient_id")
	private Patient patient;
	
	@ManyToOne
	@JoinColumn(name = "doctor_id", referencedColumnName = "id")
	private Doctor doctor;
	
	@ManyToOne
	@JoinColumn(name = "clinic_id")
	private Clinic clinic;
	
	@ManyToOne
	@JoinColumn(name = "appointment_type_id")
	private AppointmentType appointmentType;
	
	@OneToOne
	@JoinColumn(name = "examination_report_id")
	private ExaminationReport examinationReport;
	
	
	
	public Appointment() {}

	public Appointment(Long id, Integer start, Integer end, Date date) {
		this.id = id;
		this.start = start;
		this.end = end;
		this.date = date;
	}

	public Appointment(Long id, Integer start, Integer end, Date date, Patient patient, Doctor doctor, Clinic clinic,
			AppointmentType appointmentType) {
		super();
		this.id = id;
		this.start = start;
		this.end = end;
		this.date = date;
		this.patient = patient;
		this.doctor = doctor;
		this.clinic = clinic;
		this.appointmentType = appointmentType;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getStart() {
		return start;
	}

	public void setStart(Integer start) {
		this.start = start;
	}

	public Integer getEnd() {
		return end;
	}

	public void setEnd(Integer end) {
		this.end = end;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public Clinic getClinic() {
		return clinic;
	}

	public void setClinic(Clinic clinic) {
		this.clinic = clinic;
	}

	public AppointmentType getAppointmentType() {
		return appointmentType;
	}

	public void setAppointmentType(AppointmentType appointmentType) {
		this.appointmentType = appointmentType;
	}

	public ExaminationReport getExaminationReport() {
		return examinationReport;
	}

	public void setExaminationReport(ExaminationReport examinationReport) {
		this.examinationReport = examinationReport;
	}
	
}
