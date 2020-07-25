package mrsisa_clinical_center.mrsisa_SW6_2017.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Person {
	
	@Id
	private Long id;
	private String name;
	private String pass;
	
	public Person() {}
	
	public Person(Long id, String name, String pass) {
		this.id = id;
		this.name = name;
		this.pass = pass;
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
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	
}
