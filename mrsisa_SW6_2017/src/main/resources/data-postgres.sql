-- clinical center
insert into clinical_center(id, name) values (1, 'Vojvodic Clinical Center');


-- clinics
INSERT INTO public.clinic(
	id, address, city, country, description, name, clinical_center_id)
	VALUES (10, 'Stephen Av. 30', 'Los Angeles', 'USA', 'We provide services of...', 'Deamedica Clinic', 1);

INSERT INTO public.clinic(
	id, address, city, country, description, name, clinical_center_id)
	VALUES (11, 'Jefferson St. 2', 'San Francisco', 'USA', 'We provide services of...', 'Intermedic Clinic', 1);

INSERT INTO public.clinic(
	id, address, city, country, description, name, clinical_center_id)
	VALUES (12, 'Bailey St. 118', 'Los Angeles', 'USA', 'We provide services of...', 'Health S Clinic', 1);

	
	
-- doctors
INSERT INTO public.doctor(id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, ends, start, clinic_id)
	VALUES (110, 'Larchmont Blvd 110', 'Los Angeles', 'USA', 'd_matthew@gmail.com','Matthew', 'Fisher', 'password', '5551111', '110110', 1080, 480, 10);

INSERT INTO public.doctor(
	id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, ends, start, clinic_id)
	VALUES (111, 'Miller St 20', 'San Francisco', 'USA', 'd_richard@gmail.com','Richard', 'Pines', 'password', '5551111', '111111', 960, 480, 11);

INSERT INTO public.doctor(
	id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, ends, start, clinic_id)
	VALUES (112, 'Santa Fe Ave 4', 'Los Angeles', 'USA', 'd_helen@gmail.com','Helen', 'Blunt', 'password', '5551111', '112112', 960, 480, 10);

INSERT INTO public.doctor(
	id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, ends, start, clinic_id)
	VALUES (113, 'Balboa Blvd 113', 'Los Angeles', 'USA', 'd_catharine@gmail.com','Catharine', 'Evans', 'password', '5551111', '113113', 960, 480, 10);

INSERT INTO public.doctor(
	id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, ends, start, clinic_id)
	VALUES (114, 'Fulton St', 'San Francisco', 'USA', 'd_stephen', 'Stephen', 'Phillips', 'password', '+5551029', '778798', 780, 480, 11);

INSERT INTO public.doctor(
	id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, ends, start, clinic_id)
	VALUES (115, 'Ocean Gate Av 13', 'Los Angeles', 'USA', 'd_angela', 'Angela', 'Wallace', 'password', '+5551030', '678798', 840, 480, 12);

INSERT INTO public.doctor(
	id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, ends, start, clinic_id)
	VALUES (116, '118th 5', 'Los Angeles', 'USA', 'd_louisa', 'Louisa', 'Green', 'password', '+5551031', '44849155', 960, 480, 12);

INSERT INTO public.doctor(
	id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, ends, start, clinic_id)
	VALUES (117, '256th 16', 'Los Angeles', 'USA', 'd_leonard', 'Leonard', 'Brooks', 'password', '+55510232', '177848', 780, 480, 12);

update doctor set start = 480;
update doctor set ends = 960;
	
-- appointment types
INSERT INTO public.appointment_type(
	id, duration, name, price)
	VALUES (1, 30, 'Gastroenterology', 120);

INSERT INTO public.appointment_type(
	id, duration, name, price)
	VALUES (4, 30, 'Hematology', 120);

INSERT INTO public.appointment_type(
	id, duration, name, price)
	VALUES (2, 30, 'Family Medicine', 80);

INSERT INTO public.appointment_type(
	id, duration, name, price)
	VALUES (3, 45, 'Orthopedy', 100);

INSERT INTO public.appointment_type(
	id, duration, name, price)
	VALUES (5, 60, 'Physical Therapy', 150);
	
	
	
-- appointment types - doctors
INSERT INTO public.appointment_type_doctor(
	appointment_type_id, doctor_id)
	VALUES (1, 110);

INSERT INTO public.appointment_type_doctor(
	appointment_type_id, doctor_id)
	VALUES (1, 111);

INSERT INTO public.appointment_type_doctor(
	appointment_type_id, doctor_id)
	VALUES (4, 110);

INSERT INTO public.appointment_type_doctor(
	appointment_type_id, doctor_id)
	VALUES (4, 111);
	
INSERT INTO public.appointment_type_doctor(
	appointment_type_id, doctor_id)
	VALUES (2, 112);

INSERT INTO public.appointment_type_doctor(
	doctor_id, appointment_type_id)
	VALUES (114, 4);

INSERT INTO public.appointment_type_doctor(
	doctor_id, appointment_type_id)
	VALUES (117, 3);

INSERT INTO public.appointment_type_doctor(
	doctor_id, appointment_type_id)
	VALUES (115, 3);

INSERT INTO public.appointment_type_doctor(
	doctor_id, appointment_type_id)
	VALUES (116, 5);

INSERT INTO public.appointment_type_doctor(
	appointment_type_id, doctor_id)
	VALUES (1, 112);	
	
INSERT INTO public.appointment_type_doctor(
	appointment_type_id, doctor_id)
	VALUES (1, 113);	

	
	
-- medications
INSERT INTO public.medication(id, name) VALUES (1, 'Paracetamol');
INSERT INTO public.medication(id, name) VALUES (2, 'Ibuprofen');
INSERT INTO public.medication(id, name) VALUES (3, 'Aspirin');
INSERT INTO public.medication(id, name) VALUES (4, 'Amoxicilin');
INSERT INTO public.medication(id, name) VALUES (5, 'Cephalexin');
INSERT INTO public.medication(id, name) VALUES (6, 'Erythromycin');
INSERT INTO public.medication(id, name) VALUES (7, 'Pantoprazole');
INSERT INTO public.medication(id, name) VALUES (8, 'Buscopan');
INSERT INTO public.medication(id, name) VALUES (9, 'Bromazepam');
INSERT INTO public.medication(id, name) VALUES (10, 'Valium');
INSERT INTO public.medication(id, name) VALUES (11, 'Enalapril');
INSERT INTO public.medication(id, name) VALUES (12, 'Nebivolol');
INSERT INTO public.medication(id, name) VALUES (13, 'Canesten');
INSERT INTO public.medication(id, name) VALUES (14, 'Chloramphenicol');
INSERT INTO public.medication(id, name) VALUES (15, 'Garamycin');



-- diagnoses
INSERT INTO public.diagnosis(id, name) VALUES (1, 'Gastritis');
INSERT INTO public.diagnosis(id, name) VALUES (2, 'Hypertension');
INSERT INTO public.diagnosis(id, name) VALUES (3, 'Angina Pectoris');
INSERT INTO public.diagnosis(id, name) VALUES (4, 'Myocardial Infarction');
INSERT INTO public.diagnosis(id, name) VALUES (5, 'Pityriasis Rosea');
INSERT INTO public.diagnosis(id, name) VALUES (6, 'Otitis Media');
INSERT INTO public.diagnosis(id, name) VALUES (7, 'Encephalitis');
INSERT INTO public.diagnosis(id, name) VALUES (8, 'Colitis');
INSERT INTO public.diagnosis(id, name) VALUES (9, 'Arthritis');
INSERT INTO public.diagnosis(id, name) VALUES (10, 'Laryngitis');
INSERT INTO public.diagnosis(id, name) VALUES (11, 'Infectious Mononucleosis');
INSERT INTO public.diagnosis(id, name) VALUES (12, 'Meningitis');
INSERT INTO public.diagnosis(id, name) VALUES (13, 'Hyperthyroidism');
INSERT INTO public.diagnosis(id, name) VALUES (14, 'Influenza');
INSERT INTO public.diagnosis(id, name) VALUES (15, 'Streptococcal pharyngitis');


-- change size of fields for descriptions
ALTER TABLE examination_report
ALTER COLUMN description type varchar(4000);

ALTER TABLE clinic
ALTER COLUMN description type varchar(2000);


-- hardcoding examination report and medical record for some patients
INSERT INTO public.medical_record( id, allergies, blood_type, dipotre, height, weight) VALUES (100, 'None', 'A', -1.5, 185, 80);
INSERT INTO public.medical_record( id, allergies, blood_type, dipotre, height, weight) VALUES (101, 'None', 'AB', 0, 162, 60);

INSERT INTO public.examination_report(id, description) VALUES (1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet laoreet est. Sed hendrerit maximus sem, sed molestie sapien volutpat eget. Aliquam efficitur aliquet nisl, vel sagittis ex. Proin tellus nisl, pharetra eget libero nec, pretium mollis odio. Aenean justo neque, commodo eu arcu sed, iaculis lacinia turpis. Aenean faucibus convallis orci ac ultricies. Donec vehicula massa nibh, eu tristique nisl cursus id. Aliquam erat volutpat. Vivamus ac quam viverra, pellentesque ligula molestie, bibendum nisi.');
INSERT INTO public.diagnosis_examination_report(examination_report_id, diagnosis_id) VALUES (1, 7);
INSERT INTO public.medication_examination_report(examination_report_id, medication_id) VALUES (1, 7);



-- patients
INSERT INTO patient(
	id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, clinical_center_id, medical_record_id)
	VALUES (1000, 'Street 24', 'Washington D.C.', 'USA', 'thomas@gmail.com', 'Thomas', 'Pierce', 'password', '+5551092', '12313231', 1, 100);
	
INSERT INTO patient(
	id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, clinical_center_id, medical_record_id)
	VALUES (142, 'Kentington Street 18', 'Cleveland', 'USA', 'sophie@gmail.com', 'Thomas', 'Pierce', 'password', '+5551221', '55515152', 1, 101);
	

-- appointments
INSERT INTO public.appointment(
	id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (1000, TO_DATE('29/08/2020', 'DD/MM/YYYY'), 720, 780, 4, 11, 111, 1, 1000);

	
INSERT INTO public.appointment(
	id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (1222222, TO_DATE('22/07/2020', 'DD/MM/YYYY'), 720, 780, 4, 11, 111, null, 1000);

INSERT INTO public.appointment(
	id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (125232, TO_DATE('6/7/2020', 'DD/MM/YYYY'), 720, 780, 5, 12, 116, null, 1000);


	
INSERT INTO public.appointment(
	id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (1222232, TO_DATE('10/12/2020', 'DD/MM/YYYY'), 720, 780, 5, 12, 116, null, 1000);




INSERT INTO public.appointment(
id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (9000, TO_DATE('28/09/2020', 'DD/MM/YYYY'), 720, 780, 4, 11, 111, null, null);

	INSERT INTO public.appointment(
id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (9001, TO_DATE('30/09/2020', 'DD/MM/YYYY'), 720, 780, 4, 11, 111, null, null);

INSERT INTO public.appointment(
id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (9002, TO_DATE('29/09/2020', 'DD/MM/YYYY'), 720, 780, 4, 11, 111, null, null);

INSERT INTO public.appointment(
id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (9003, TO_DATE('4/10/2020', 'DD/MM/YYYY'), 720, 780, 1, 10, 110, null, null);

INSERT INTO public.appointment(
id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (9004, TO_DATE('5/10/2020', 'DD/MM/YYYY'), 720, 780, 4, 10, 110, null, null);



INSERT INTO public.appointment(
id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (9005, TO_DATE('7/11/2020', 'DD/MM/YYYY'), 720, 780, 3, 12, 115, null, null);

INSERT INTO public.appointment(
id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (9006, TO_DATE('6/11/2020', 'DD/MM/YYYY'), 720, 780, 3, 12, 117, null, null);


	
	
	
-- ratings hardcoded
INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (1, 10, null, 1000, 4);
INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (2, 11, null, 1000, 4);
INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (3, 12, null, 1000, 5);

INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (4, 10, null, 142, 3);
INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (5, 11, null, 142, 5);
INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (6, 12, null, 142, 4);

INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (7, null, 110, 1000, 4);
INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (8, null, 111, 1000, 4);
INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (9, null, 110, 142, 3);
INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (10, null, 112, 142, 4); 

delete from rating where clinic_id=12; -- for testing
delete from rating where patient_id = 1000;	 -- so thomas could test all

	
-- for transactions
update patient set version=0;
update doctor set version = 0;
update appointment set version = 0;
update clinic set version = 0;
update clinical_center set version = 0;
update rating set version = 0;
update appointment_type set version = 0;
update medical_record set version = 0;
update medication set version = 0;
update rating set version = 0;
update diagnosis set version = 0;