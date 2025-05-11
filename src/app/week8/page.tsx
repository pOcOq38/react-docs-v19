"use client";

import Accordion from "./components/Accordion";
import AddField from "./components/AddField";
import FeedbackForm from "./components/FeedbackForm";
import Form from "./components/Form";
import Menu from "./components/Menu";
import NameForm from "./components/NameForm";
import TravelPlan from "./components/TravelPlan";

export default function week8() {
  return (
    <>
      <Form />
      <AddField />
      <FeedbackForm />
      <NameForm />
      <Menu />
      <TravelPlan />
      <Accordion />
    </>
  );
}
