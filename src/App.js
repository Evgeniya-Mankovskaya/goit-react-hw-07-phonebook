import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactList from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import Section from "./components/Section/Section";
import Filter from "./components/Filter/Filter";

const App = () => {
  return (
    <>
      <Container>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </Container>
      <ToastContainer position="top-center" />
    </>
  );
};

export default App;
