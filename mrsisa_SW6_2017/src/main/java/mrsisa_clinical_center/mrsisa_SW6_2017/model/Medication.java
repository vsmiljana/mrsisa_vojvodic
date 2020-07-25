package mrsisa_clinical_center.mrsisa_SW6_2017.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "medication")
public class Medication {

	@Id
	private Long id;
	@Column(name="name", unique=true, nullable=false)
	private String name;
	
	@ManyToMany(mappedBy = "medications")
	private Set<Diagnosis> diagnoses;
	
	public Medication() {}

	public Medication(Long id, String name) {
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
	
}
