CREATE TABLE IF NOT EXISTS BLUE_PROJECT (
	ID bigint PRIMARY KEY NOT NULL AUTO_INCREMENT,
	ID_USER bigint NOT NULL,
	STATUS int NOT NULL DEFAULT 0,
	PRIORITY int DEFAULT NULL,
	NAME varchar(256) NOT NULL,
	NAME_CODE varchar(256) DEFAULT NULL,
	NAME_EXTENDED varchar(256) DEFAULT NULL,
	NAME_CUSTOMIZED varchar(256) DEFAULT NULL,
	SUBPROJECT_OF bigint DEFAULT NULL,
	START_DATE date DEFAULT NULL,
	END_DATE date DEFAULT NULL,
	COLOR varchar(50) DEFAULT NULL,
	COLOR_ROW varchar(50) DEFAULT NULL,
	INSERT_DATE timestamp NOT NULL DEFAULT current_timestamp,
	UPDATE_DATE timestamp ON UPDATE current_timestamp,
	CONSTRAINT PROJECT_NAME UNIQUE (ID_USER, NAME),
	FOREIGN KEY(ID_USER) REFERENCES BLUE_REGUSER(ID)
);