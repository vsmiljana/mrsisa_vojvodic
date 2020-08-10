package mrsisa_clinical_center.mrsisa_SW6_2017.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "clinic")
public class Clinic {
	
	@Id
	private Long id;
	@Column(name="name", unique=true, nullable=false)
	private String name;
	@Column(name="address", unique=false, nullable=false)
	private String address;
	@Column(name="city", unique=false, nullable=false)
	private String city;
	@Column(name="country", unique=false, nullable=false)
	private String country;
	@Column(name="description", unique=false, nullable=true)
	private String description;

	@ManyToOne
	@JoinColumn(name = "clinical_center_id")
	private ClinicalCenter clinicalCenter;
	
	@OneToMany(mappedBy = "clinic")
	private Set<Doctor> doctors;
	
	@OneToMany(mappedBy = "clinic")
	private Set<Appointment> appointments;
	
	public Clinic() {}

	public Clinic(Long id, String name, String address, String city, String country, String description) {
		this.id = id;
		this.name = name;
		this.address = address;
		this.city = city;
		this.country = country;
		this.description = description;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public ClinicalCenter getClinicalCenter() {
		return clinicalCenter;
	}

	public void setClinicalCenter(ClinicalCenter clinicalCenter) {
		this.clinicalCenter = clinicalCenter;
	}

	public Set<Doctor> getDoctors() {
		return doctors;
	}

	public void setDoctors(Set<Doctor> doctors) {
		this.doctors = doctors;
	}

	public Set<Appointment> getAppointments() {
		return appointments;
	}

	public void setAppointments(Set<Appointment> appointments) {
		this.appointments = appointments;
	}

	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		if (obj == this) { 
            return true; 
        } 
  
        /* Check if o is an instance of Complex or not 
          "null instanceof [type]" also returns false */
        if (!(obj instanceof Clinic)) { 
            return false; 
        } 
          
        // typecast o to Complex so that we can compare data members  
        Clinic c = (Clinic) obj; 
          
        // Compare the data members and return accordingly  
        return this.id == c.id; 
	}
}
