package mrsisa_clinical_center.mrsisa_SW6_2017.dto;

import mrsisa_clinical_center.mrsisa_SW6_2017.model.Medication;

public class MedicationDto {

	private String name;

	public MedicationDto() {}
	
	public MedicationDto(String name) {
		this.name = name;
	}
	
	public MedicationDto(Medication m) {
		this.name = m.getName();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
}
