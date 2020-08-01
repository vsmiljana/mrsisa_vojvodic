package mrsisa_clinical_center.mrsisa_SW6_2017.dto;

public class RegisterUserDto {
	
	private String email;
	private String password;
	private String firstName;
	private String lastName;
	private String ssn;
	private String phoneNumber;
	private String address;
	private String city;
	private String country;
	
	public RegisterUserDto() {}
	
	public RegisterUserDto(String email, String password, String firstName, String lastName, String ssn,
			String phoneNumber, String address, String city, String country) {
		super();
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.ssn = ssn;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.city = city;
		this.country = country;
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
	public String getSsn() {
		return ssn;
	}
	public void setSsn(String ssn) {
		this.ssn = ssn;
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
	

}
