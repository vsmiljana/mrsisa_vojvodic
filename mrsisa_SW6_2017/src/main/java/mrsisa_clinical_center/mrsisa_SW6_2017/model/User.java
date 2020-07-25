package mrsisa_clinical_center.mrsisa_SW6_2017.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class User {
	
	@Id
	private Long id;
	@Column(name="email", unique=true, nullable=false)
	private String email;
	@Column(name="password", unique=false, nullable=false)
	private String password;
	@Column(name="first_name", unique=false, nullable=false)
	private String firstName;
	@Column(name="last_name", unique=false, nullable=false)
	private String lastName;
	@Column(name="phone_number", unique=false, nullable=false)
	private String phoneNumber;
	@Column(name="address", unique=false, nullable=false)
	private String address;
	@Column(name="city", unique=false, nullable=false)
	private String city;
	@Column(name="country", unique=false, nullable=false)
	private String country;
	@Column(name="social_security_number", unique=true, nullable=false)
	private String socialSecurityNumber;
	
	public User() {}

	public User(Long id, String email, String password, String firstName, String lastName, String phoneNumber,
			String address, String city, String country, String socialSecurityNumber) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.city = city;
		this.country = country;
		this.socialSecurityNumber = socialSecurityNumber;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
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

	public String getSocialSecurityNumber() {
		return socialSecurityNumber;
	}

	public void setSocialSecurityNumber(String socialSecurityNumber) {
		this.socialSecurityNumber = socialSecurityNumber;
	}
	
	
}
