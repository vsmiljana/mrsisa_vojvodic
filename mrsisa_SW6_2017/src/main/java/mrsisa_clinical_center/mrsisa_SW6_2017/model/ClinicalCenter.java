package mrsisa_clinical_center.mrsisa_SW6_2017.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "clinical_center")
public class ClinicalCenter {

	@Id
	private long id;
	@Column(name="name", unique=true, nullable=false)
	private String name;
	
	@OneToMany(mappedBy = "clinicalCenter")
	private Set<Clinic> clinics;

	@OneToMany(mappedBy = "clinicalCenter")
	private Set<Patient> patients;
	
	public ClinicalCenter() {}
	
	public ClinicalCenter(long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}	
	
}
