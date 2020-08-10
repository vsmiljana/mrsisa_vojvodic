package mrsisa_clinical_center.mrsisa_SW6_2017.dto;

import java.util.List;

public class DoctorDto {
	
	private String firstName;
	private String lastName;
	private Double rating;
	private List<AppointmentTimeDto> availableAppointments;
	
	public DoctorDto() {
		
	}
	
	public DoctorDto(String firstName, String lastName, Double rating, List<AppointmentTimeDto> availableAppointments) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.rating = rating;
		this.availableAppointments = availableAppointments;
	}
	
	public DoctorDto(String firstName, String lastName, List<AppointmentTimeDto> availableAppointments) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.availableAppointments = availableAppointments;
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

	public Double getRating() {
		return rating;
	}

	public void setRating(Double rating) {
		this.rating = rating;
	}

	public List<AppointmentTimeDto> getAvailableAppointments() {
		return availableAppointments;
	}

	public void setAvailableAppointments(List<AppointmentTimeDto> availableAppointments) {
		this.availableAppointments = availableAppointments;
	}
	
}
