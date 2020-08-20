package mrsisa_clinical_center.mrsisa_SW6_2017.dto;

public class PasswordChangeDto {
	
	private String oldPassword;
	private String newPassword;
	
	public PasswordChangeDto() {}
	
	public PasswordChangeDto(String oldPassword, String newPassword) {
		super();
		this.oldPassword = oldPassword;
		this.newPassword = newPassword;
	}

	public String getOldPassword() {
		return oldPassword;
	}
	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	
	

}
