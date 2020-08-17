package mrsisa_clinical_center.mrsisa_SW6_2017.dto;

import java.util.List;

public class MedicalRecordDto {

	private Long id;
	private String bloodType;
	private Double height;
	private Double weight;
	private String allergies;
	private Double dioptre;
	private List<PastAppointmentDto> pastAppointments;
	
	public MedicalRecordDto() {
		super();
	}

	public MedicalRecordDto(Long id, String bloodType, Double height, Double weight, String allergies, Double dioptre,
			List<PastAppointmentDto> pastAppointments) {
		super();
		this.id = id;
		this.bloodType = bloodType;
		this.height = height;
		this.weight = weight;
		this.allergies = allergies;
		this.dioptre = dioptre;
		this.pastAppointments = pastAppointments;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBloodType() {
		return bloodType;
	}

	public void setBloodType(String bloodType) {
		this.bloodType = bloodType;
	}

	public Double getHeight() {
		return height;
	}

	public void setHeight(Double height) {
		this.height = height;
	}

	public Double getWeight() {
		return weight;
	}

	public void setWeight(Double weight) {
		this.weight = weight;
	}

	public String getAllergies() {
		return allergies;
	}

	public void setAllergies(String allergies) {
		this.allergies = allergies;
	}

	public Double getDioptre() {
		return dioptre;
	}

	public void setDioptre(Double dioptre) {
		this.dioptre = dioptre;
	}

	public List<PastAppointmentDto> getPastAppointments() {
		return pastAppointments;
	}

	public void setPastAppointments(List<PastAppointmentDto> pastAppointments) {
		this.pastAppointments = pastAppointments;
	}
	
}
