package mrsisa_clinical_center.mrsisa_SW6_2017.dto;

public class SearchAppointmentDto {

	private String appointmentName;
	
	private Long date;
	
	public SearchAppointmentDto() {
		super();
	}

	public SearchAppointmentDto(String appointmentName, Long date) {
		super();
		this.appointmentName = appointmentName;
		this.date = date;
	}

	public String getAppointmentName() {
		return appointmentName;
	}

	public void setAppointmentName(String appointmentName) {
		this.appointmentName = appointmentName;
	}

	public Long getDate() {
		return date;
	}

	public void setDate(Long date) {
		this.date = date;
	}
	
}
