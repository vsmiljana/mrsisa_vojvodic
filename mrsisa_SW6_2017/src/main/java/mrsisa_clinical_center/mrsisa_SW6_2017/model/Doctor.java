package mrsisa_clinical_center.mrsisa_SW6_2017.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "doctor")
public class Doctor extends User {

	@Column(name="start", unique=false, nullable=false)
	private Integer start;
	@Column(name="end", unique=false, nullable=false)
	private Integer end;
	
	@ManyToOne
	@JoinColumn(name = "clinic_id")
	private Clinic clinic;
	
	@OneToMany(mappedBy = "doctor")
	private Set<Appointment> appointments;
	
	@ManyToMany
	@JoinTable(name = "doctors_appointment_types", 
		      joinColumns = @JoinColumn(name = "appointment_type_id", referencedColumnName = "id"), 
		      inverseJoinColumns = @JoinColumn(name = "doctor_id", 
		      referencedColumnName = "id"))
	private Set<AppointmentType> appointmentTypes;
	
	public Doctor() {}
	
	public Doctor(Long id, String email, String password, String firstName, String lastName, String phoneNumber,
			String address, String city, String country, String socialSecurityNumber, int start, int end) {
		super(id, email, password, firstName, lastName, phoneNumber, address, city, country, socialSecurityNumber);
		this.start = start;
		this.end = end;
	}
	public Integer getStart() {
		return start;
	}
	public void setStart(int start) {
		this.start = start;
	}
	public Integer getEnd() {
		return end;
	}
	public void setEnd(int end) {
		this.end = end;
	}
	
}
