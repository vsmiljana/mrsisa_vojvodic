package mrsisa_clinical_center.mrsisa_SW6_2017.dto;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Appointment;

public class PastAppointmentDto extends AppointmentDto {
	
	private ExaminationReportDto examinationReport;
	private Integer hisDoctorRating;
	private Integer hisClinicRating;
	
	public PastAppointmentDto() {}
	

	public PastAppointmentDto(Long id, Long dateLong, int start, int end, String doctor, String appointmentName,
			Double price, String clinicName, String clinicAddress) {
		super(id, dateLong, start, end, doctor, appointmentName, price, clinicName, clinicAddress);
		this.examinationReport = null;
	}



	public PastAppointmentDto(Appointment a) {
		super(a);
	}


	public ExaminationReportDto getExaminationReport() {
		return examinationReport;
	}

	public void setExaminationReport(ExaminationReportDto examinationReport) {
		this.examinationReport = examinationReport;
	}


	public Integer getHisDoctorRating() {
		return hisDoctorRating;
	}


	public void setHisDoctorRating(Integer hisDoctorRating) {
		this.hisDoctorRating = hisDoctorRating;
	}


	public Integer getHisClinicRating() {
		return hisClinicRating;
	}


	public void setHisClinicRating(Integer hisClinicRating) {
		this.hisClinicRating = hisClinicRating;
	}
	
	
	
}
