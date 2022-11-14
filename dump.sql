--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: heroku_ext; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA heroku_ext;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Filme; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Filme" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    stream character varying(255) NOT NULL,
    category character varying(255) NOT NULL,
    watched boolean NOT NULL,
    note character varying
);


--
-- Name: public.Filme_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."public.Filme_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: public.Filme_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."public.Filme_id_seq" OWNED BY public."Filme".id;


--
-- Name: Filme id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Filme" ALTER COLUMN id SET DEFAULT nextval('public."public.Filme_id_seq"'::regclass);


--
-- Data for Name: Filme; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."Filme" VALUES (1, 'a volta dos que não foram', 'Netflix', 'comedia', true, NULL);
INSERT INTO public."Filme" VALUES (4, 'volta dos que não foram pt4', 'Netflix', 'comedy', false, NULL);
INSERT INTO public."Filme" VALUES (7, 'volta dos que não foram pt12', 'Netflix', 'comedy', false, NULL);
INSERT INTO public."Filme" VALUES (6, 'volta dos que não foram pt11', 'Netflix', 'comedy', true, NULL);
INSERT INTO public."Filme" VALUES (8, 'volta dos que não foram pt12', 'AmazonPrime', 'comedy', false, NULL);
INSERT INTO public."Filme" VALUES (9, 'volta dos que não foram pt12', 'AmazonPrime', 'Drama', false, NULL);
INSERT INTO public."Filme" VALUES (11, 'volta dos que não foram pt16', 'Netflix', 'Drama', true, 'todos esse filmes são iguais');
INSERT INTO public."Filme" VALUES (16, 'volta dos que não foram pt23', 'Netflix', 'amor', true, 'todos esse filmes são iguais');


--
-- Name: public.Filme_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."public.Filme_id_seq"', 16, true);


--
-- Name: Filme Filme_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Filme"
    ADD CONSTRAINT "Filme_pk" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

