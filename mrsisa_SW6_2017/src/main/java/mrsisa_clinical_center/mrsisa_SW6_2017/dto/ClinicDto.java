package mrsisa_clinical_center.mrsisa_SW6_2017.dto;

import java.util.List;

public class ClinicDto {
	
	private Long id;
	private String name;
	private String description;
	private String address;
	private String city;
	private String country;
	private Double price;
	private List<String> appointmentNames;
	private Double rating;
	private Integer votes;
	
	

	public ClinicDto() {}	

	public ClinicDto(String name, String description, String address, String city, String country) {
		super();
		this.name = name;
		this.description = description;
		this.address = address;
		this.city = city;
		this.country = country;
	}

	public ClinicDto(Long id, String name, String description, String address, String city, String country) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.address = address;
		this.city = city;
		this.country = country;
	}

	public ClinicDto(Long id, String name, String description, String address, String city, String country,
			Double price) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.address = address;
		this.city = city;
		this.country = country;
		this.price = price;
	}
	

	public ClinicDto(Long id, String name, String description, String address, String city, String country,
			Double price, List<String> appointmentNames) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.address = address;
		this.city = city;
		this.country = country;
		this.price = price;
		this.appointmentNames = appointmentNames;
	}
	
	public ClinicDto(Long id, String name, String description, String address, String city, 
			String country, List<String> appointmentNames) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.address = address;
		this.city = city;
		this.country = country;
		this.appointmentNames = appointmentNames;
	}
	
	

	public ClinicDto(Long id, String name, String description, String address, String city, String country,
			Double rating, Integer votes) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.address = address;
		this.city = city;
		this.country = country;
		this.rating = rating;
		this.votes = votes;
	}

	
	
	public Double getRating() {
		return rating;
	}

	public void setRating(Double rating) {
		this.rating = rating;
	}

	public Integer getVotes() {
		return votes;
	}

	public void setVotes(Integer votes) {
		this.votes = votes;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}
	
	public List<String> getAppointmentNames() {
		return appointmentNames;
	}

	public void setAppointmentNames(List<String> appointmentNames) {
		this.appointmentNames = appointmentNames;
	}
}
