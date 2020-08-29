package mrsisa_clinical_center.mrsisa_SW6_2017.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Version;

@Entity
@Table(name = "doctor")
public class Doctor extends User {

	@Column(name="start", unique=false, nullable=false)
	private Integer start;
	@Column(name="ends", unique=false, nullable=false)
	private Integer end;
	
	@ManyToOne
	@JoinColumn(name = "clinic_id")
	private Clinic clinic;
	
	
	@OneToMany(mappedBy = "doctor")
	private Set<Appointment> appointments;
	
	@ManyToMany
	@JoinTable(name = "appointment_type_doctor", 
		      joinColumns = @JoinColumn(name = "doctor_id", referencedColumnName = "id"), 
		      inverseJoinColumns = @JoinColumn(name = "appointment_type_id", 
		      referencedColumnName = "id"))
	private Set<AppointmentType> appointmentTypes;
	
	@OneToMany(mappedBy = "doctor")
	private Set<Rating> ratings;
	
	
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

	public Clinic getClinic() {
		return clinic;
	}

	public void setClinic(Clinic clinic) {
		this.clinic = clinic;
	}

	public Set<Appointment> getAppointments() {
		return appointments;
	}

	public void setAppointments(Set<Appointment> appointments) {
		this.appointments = appointments;
	}

	public Set<AppointmentType> getAppointmentTypes() {
		return appointmentTypes;
	}

	public void setAppointmentTypes(Set<AppointmentType> appointmentTypes) {
		this.appointmentTypes = appointmentTypes;
	}

	public void setStart(Integer start) {
		this.start = start;
	}

	public void setEnd(Integer end) {
		this.end = end;
	}

	public Set<Rating> getRatings() {
		return ratings;
	}

	public void setRatings(Set<Rating> ratings) {
		this.ratings = ratings;
	}
	

	
}
