package mrsisa_clinical_center.mrsisa_SW6_2017.dto;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Diagnosis;

public class DiagnosisDto {

	private String name;

	public DiagnosisDto() {}
	
	public DiagnosisDto(String name) {
		this.name = name;
	}
	
	public DiagnosisDto(Diagnosis d) {
		this.name = d.getName();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
	
}
