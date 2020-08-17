package mrsisa_clinical_center.mrsisa_SW6_2017.dto;

import java.util.List;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.ExaminationReport;

public class ExaminationReportDto {

	private String description;
	private List<DiagnosisDto> diagnoses;
	private List<MedicationDto> medications;
	
	public ExaminationReportDto() {
		super();
	}

	public ExaminationReportDto(String description, List<DiagnosisDto> diagnoses, List<MedicationDto> medications) {
		super();
		this.description = description;
		this.diagnoses = diagnoses;
		this.medications = medications;
	}

	public ExaminationReportDto(ExaminationReport examinationReport) {
		this.description = examinationReport.getDescription();
		
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<DiagnosisDto> getDiagnoses() {
		return diagnoses;
	}

	public void setDiagnoses(List<DiagnosisDto> diagnoses) {
		this.diagnoses = diagnoses;
	}

	public List<MedicationDto> getMedications() {
		return medications;
	}

	public void setMedications(List<MedicationDto> medications) {
		this.medications = medications;
	}
	
}
