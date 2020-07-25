package mrsisa_clinical_center.mrsisa_SW6_2017.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "appointment_type")
public class AppointmentType {
	
	@Id
	private Long id;
	@Column(name="name", unique=true, nullable=false)
	private String name;
	@Column(name="duration", unique=false, nullable=false)
	private Integer duration;
	@Column(name="price", unique=false, nullable=false)
	private Double price;
	
	@OneToMany(mappedBy = "appointmentType")
	private Set<Appointment> appointments;

    @ManyToMany(mappedBy = "appointmentTypes")
	private Set<Doctor> doctors;
	
	public AppointmentType() {}

	public AppointmentType(Long id, String name, Integer duration, Double price) {
		this.id = id;
		this.name = name;
		this.duration = duration;
		this.price = price;
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

	public Integer getDuration() {
		return duration;
	}

	public void setDuration(Integer duration) {
		this.duration = duration;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}
	
}
