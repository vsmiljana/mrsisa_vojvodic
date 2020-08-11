package mrsisa_clinical_center.mrsisa_SW6_2017.dto;

public class SearchAppointmentDto {

	private String appointmentName;
	
	private Long date;
	
	private Long clinicId;
	
	public SearchAppointmentDto() {
		super();
	}

	public SearchAppointmentDto(String appointmentName, Long date) {
		super();
		this.appointmentName = appointmentName;
		this.date = date;
	}
	
	public SearchAppointmentDto(String appointmentName, Long date, Long clinicId) {
		super();
		this.appointmentName = appointmentName;
		this.date = date;
		this.clinicId = clinicId;
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

	public Long getClinicId() {
		return clinicId;
	}

	public void setClinicId(Long clinicId) {
		this.clinicId = clinicId;
	}
	
}
