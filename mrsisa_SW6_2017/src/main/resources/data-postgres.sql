--insert into public.person(id, name, pass) values (16, 'jovana', 'lozinka');

--insert into clinical_center(id, name) values (1, 'Smiljana Vojvodic Clinical Center');

--update patient
--set clinical_center_id = 1;
/*
--INSERT INTO public.clinic(
--	id, address, city, country, description, name, clinical_center_id)
--	VALUES (10, 'Stephen Av. 30', 'Los Angeles', 'USA', 'We provide services of...', 'Clinic for Internal Medicine', 1);

--	INSERT INTO public.clinic(
--	id, address, city, country, description, name, clinical_center_id)
--	VALUES (11, 'Jefferson St. 2', 'San Francisco', 'USA', 'We provide services of...', 'Clinic for Ophthalmology and ORL', 1);

--	INSERT INTO public.clinic(
--	id, address, city, country, description, name, clinical_center_id)
--	VALUES (12, 'Bailey St. 118', 'Los Angeles', 'USA', 'We provide services of...', 'Family Medicine Clinic', 1);
*/

	/*
INSERT INTO public.doctor(id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, ends, start, clinic_id)
	VALUES (110, 'Larchmont Blvd 110', 'Los Angeles', 'USA', 'd_matthew@gmail.com','Matthew', 'Fisher', 'password', '5551111', '110110', 10, 16, 10);

INSERT INTO public.doctor(
	id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, ends, start, clinic_id)
	VALUES (111, 'Miller St 20', 'San Francisco', 'USA', 'd_richard@gmail.com','Richard', 'Pines', 'password', '5551111', '111111', 9, 17, 11);

INSERT INTO public.doctor(
	id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, ends, start, clinic_id)
	VALUES (112, 'Santa Fe Ave 4', 'Los Angeles', 'USA', 'd_helen@gmail.com','Helen', 'Blunt', 'password', '5551111', '112112', 9, 12, 10);

INSERT INTO public.doctor(
	id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, ends, start, clinic_id)
	VALUES (113, 'Balboa Blvd 113', 'Los Angeles', 'USA', 'd_catharine@gmail.com','Catharine', 'Evans', 'password', '5551111', '113113', 8, 16, 10);

	*/

--ALTER TABLE appointment_type
--ALTER COLUMN duration double;

/*
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
*/	


/*
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
	appointment_type_id, doctor_id)
	VALUES (3, 113);	

INSERT INTO public.appointment_type_doctor(
	appointment_type_id, doctor_id)
	VALUES (5, 113);	
*/

/*
delete from appointment a where a.id=1;
delete from appointment a where a.id=2;

INSERT INTO public.appointment(
	id, date, ends, start, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (1, TO_DATE('17/12/2020', 'DD/MM/YYYY'), 10, 11, 1, 10, 110, null, null);


INSERT INTO public.appointment(
	id, date, ends, start, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (2, TO_DATE('18/12/2020', 'DD/MM/YYYY'), 10, 11, 4, 10, 110, null, null);
*/
/*
INSERT INTO public.appointment(
	id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (4, TO_DATE('21/12/2020', 'DD/MM/YYYY'), 720, 780, 4, 10, 110, null, null);

INSERT INTO public.appointment(
	id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (5, TO_DATE('22/12/2020', 'DD/MM/YYYY'), 720, 780, 4, 11, 111, null, null);
*/

/*
INSERT INTO public.appointment(
	id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (6, TO_DATE('24/12/2020', 'DD/MM/YYYY'), 720, 780, 4, 11, 111, null, null);
*/
/*
update appointment set start=600;
update appointment set ends=660;
update appointment set patient_id=null where id=1 or id=2 or id=3;
*/
update doctor set start=480;
update doctor set ends=960;

/*
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
*/

/*
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
*/
ALTER TABLE examination_report
ALTER COLUMN description type varchar(4000);

ALTER TABLE clinic
ALTER COLUMN description type varchar(2000);


/*
INSERT INTO public.appointment(
	id, date, ends, start, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (10000, TO_DATE('18/12/2020', 'DD/MM/YYYY'), 10, 11, 4, 10, 110, null, null);
	
INSERT INTO public.appointment(
	id, date, ends, start, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (11000, TO_DATE('16/10/2020', 'DD/MM/YYYY'), 10, 11, 4, 10, 110, null, null);

INSERT INTO public.appointment(
	id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (12000, TO_DATE('22/12/2020', 'DD/MM/YYYY'), 720, 780, 4, 11, 111, null, null);
*/

/*INSERT INTO public.examination_report(id, description) VALUES (1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet laoreet est. Sed hendrerit maximus sem, sed molestie sapien volutpat eget. Aliquam efficitur aliquet nisl, vel sagittis ex. Proin tellus nisl, pharetra eget libero nec, pretium mollis odio. Aenean justo neque, commodo eu arcu sed, iaculis lacinia turpis. Aenean faucibus convallis orci ac ultricies. Donec vehicula massa nibh, eu tristique nisl cursus id. Aliquam erat volutpat. Vivamus ac quam viverra, pellentesque ligula molestie, bibendum nisi.');
*/


/*
INSERT INTO public.appointment(
	id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (8, TO_DATE('24/12/2020', 'DD/MM/YYYY'), 720, 780, 4, 11, 111, null, null);
*/

/*
update appointment set start=860 where id=8;
update appointment set ends=890 where id=8;
update appointment set patient_id = 142 where id=8;
update appointment set start=510  where id=7;
update appointment set ends=540  where id=7;
update appointment set patient_id=142 where id=6;
	*/

/*
update clinic set name='Deamedica Clinic' where id=10;
update clinic set name='Intermedic Clinic' where id=11;
update clinic set name='Health S Clinic' where id=12;
*/

/*
INSERT INTO public.appointment(
	id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (10102, TO_DATE('24/12/2020', 'DD/MM/YYYY'), 720, 780, 4, 11, 111, null, null);

INSERT INTO public.appointment(
	id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (10103, TO_DATE('22/10/2020', 'DD/MM/YYYY'), 720, 780, 4, 11, 111, null, null);
*/

--update appointment set start = 720, ends=780 where id=10000 or id=11000;


--delete from appointment;

--update clinical_center set name='Vojvodic Clinical Center' where id=1;

/*
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
*/

delete from appointment;

--delete from appointment_type_doctor where appointment_type_id = 3 or appointment_type_id = 5;

/*
INSERT INTO public.appointment_type_doctor(
	doctor_id, appointment_type_id)
	VALUES (114, 4);*/

/*
INSERT INTO public.appointment_type_doctor(
	doctor_id, appointment_type_id)
	VALUES (117, 3);

INSERT INTO public.appointment_type_doctor(
	doctor_id, appointment_type_id)
	VALUES (115, 3);

INSERT INTO public.appointment_type_doctor(
	doctor_id, appointment_type_id)
	VALUES (116, 5);*/

	
/*
INSERT INTO public.appointment(
	id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (10104, TO_DATE('24/12/2020', 'DD/MM/YYYY'), 720, 780, 4, 11, 111, null, null);
*/	

--INSERT INTO public.examination_report_diagnosis(diagnosis_id, examination_report_id) VALUES (7, 1);

--INSERT INTO public.diagnosis_examination_report(examination_report_id, diagnosis_id) VALUES (1, 7);

--drop table examination_report_diagnosis;
--drop table examination_report_medication;

--INSERT INTO public.medication_examination_report(examination_report_id, medication_id) VALUES (1, 7);

UPDATE public.appointment SET examination_report_id=1, date=TO_DATE('24/7/2020', 'DD/MM/YYYY') WHERE id=189;

--INSERT INTO public.medical_record( id, allergies, blood_type, dipotre, height, weight) VALUES (100, 'None', 'A', -1.5, 185, 80);

UPDATE public.patient SET medical_record_id=100 WHERE id=1000;
--INSERT INTO public.medical_record( id, allergies, blood_type, dipotre, height, weight) VALUES (101, 'None', 'AB', 0, 162, 60);
UPDATE public.patient SET medical_record_id=101 WHERE id=33;


INSERT INTO public.appointment(
	id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (1000, TO_DATE('22/08/2020', 'DD/MM/YYYY'), 720, 780, 4, 11, 111, 1, 1000);



/*INSERT INTO public.appointment(
	id, date, start, ends, appointment_type_id, clinic_id, doctor_id, examination_report_id, patient_id)
	VALUES (1000, TO_DATE('22/08/2020', 'DD/MM/YYYY'), 720, 780, 4, 11, 111, null, 1000);
*/
--INSERT INTO public.rating(id, duration, clinic_id, doctor_id, patient_id) VALUES (1, ?, ?, ?, ?);
/*INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (1, 10, null, 1000, 4);
INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (2, 11, null, 1000, 4);
INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (3, 12, null, 1000, 5);

INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (4, 10, null, 142, 3);
INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (5, 11, null, 142, 5);
INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (6, 12, null, 142, 4);*/

/*
INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (7, null, 110, 1000, 4);
INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (8, null, 111, 1000, 4);
INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (9, null, 110, 142, 3);
INSERT INTO public.rating(id, clinic_id, doctor_id, patient_id, rating) VALUES (10, null, 112, 142, 4); */

delete from rating where clinic_id=12;

delete from rating where patient_id = 1000;

/*
INSERT INTO public.appointment_type_doctor(
	appointment_type_id, doctor_id)
	VALUES (1, 112);	
	
INSERT INTO public.appointment_type_doctor(
	appointment_type_id, doctor_id)
	VALUES (1, 113);	
*/	
	
--INSERT INTO patient(
--	id, address, city, country, email, first_name, last_name, password, phone_number, social_security_number, clinical_center_id, medical_record_id)
--	VALUES (1000, 'Street 24', 'Washington D.C.', 'USA', 'thomas@gmail.com', 'Thomas', 'Pierce', 'password', '0651234567', '12313231', null, null);