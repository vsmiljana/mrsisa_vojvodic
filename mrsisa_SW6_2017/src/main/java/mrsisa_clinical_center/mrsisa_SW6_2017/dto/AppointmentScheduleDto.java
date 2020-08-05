package mrsisa_clinical_center.mrsisa_SW6_2017.dto;

public class AppointmentScheduleDto {

	private Long appointmentId;
	
	public AppointmentScheduleDto() {
		super();
	}

	public AppointmentScheduleDto(Long appointmendId) {
		super();
		this.appointmentId = appointmendId;
	}

	public Long getAppointmentId() {
		return appointmentId;
	}

	public void setAppointmentId(Long appointmendId) {
		this.appointmentId = appointmendId;
	}
	
	
}
