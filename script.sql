CREATE USER ruiz_envios_user WITH PASSWORD 'admin123';
CREATE DATABASE ruiz_envios_db OWNER ruiz_envios_user;

\c ruiz_envios_db

ALTER SCHEMA public OWNER TO ruiz_envios_user;
GRANT ALL ON SCHEMA public TO ruiz_envios_user;
GRANT CREATE ON SCHEMA public TO ruiz_envios_user;

ALTER DEFAULT PRIVILEGES FOR USER ruiz_envios_user IN SCHEMA public
GRANT ALL ON TABLES TO ruiz_envios_user;

ALTER DEFAULT PRIVILEGES FOR USER ruiz_envios_user IN SCHEMA public
GRANT ALL ON SEQUENCES TO ruiz_envios_user;

ALTER DEFAULT PRIVILEGES FOR USER ruiz_envios_user IN SCHEMA public
GRANT ALL ON FUNCTIONS TO ruiz_envios_user;