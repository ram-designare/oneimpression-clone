import React, { FC, useState } from "react";
import { FormField } from "../Form/FormField";
import { Button } from "../Button/Button";
import { contactFormApi } from "../../services/ContactFormService";

interface ContactFormProps {
  closeForm?: () => unknown;
}
export const ContactForm: FC<ContactFormProps> = ({ closeForm }) => {
  const userTitle = [
    { name: "Brand" },
    { name: "Agency" },
    { name: "Creator" },
  ];
  const budgetOptions = [
    { name: "2 lakhs to 5 lakhs" },
    { name: "10 lakhs to 20 lakhs" },
    { name: "20 lakhs to 50 lakhs" },
    { name: "50 lakhs to 1 Cr" },
    { name: "1 Cr to 5 Cr" },
    { name: "5 Cr +" },
  ];
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [isApiLoading, setIsApiLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [inputValidation, setInputValidation] = useState(false);
  const [userDetails, setUserDetails] = useState<any>({
    name: "",
    email: "",
    phone: "",
    clientType: "",
    agencyName: "",
    details: "",
    budget: "",
  });

  const handleSubmit = async () => {
    setIsApiLoading(false);
    setApiError(null);
    setError(false);
    if (
      userDetails.name &&
      userDetails.email &&
      userDetails.phone &&
      userDetails.clientType &&
      userDetails.agencyName &&
      userDetails.details &&
      userDetails.budget
    ) {
      setInputValidation(false);
      setIsApiLoading(true);
      try {
        // const bodyData = {
        //     ...userDetails
        // };
        const response = await contactFormApi(userDetails);
        setIsApiLoading(false);
        setSubmitted(true);
      } catch (err: any) {
        setError(err);
      }
    } else {
      setIsApiLoading(false);
      setError(true);
      setInputValidation(true);
    }
  };
  const handleChange = (e: any, prop: any) => {
    setUserDetails({
      ...userDetails,
      [prop]: e.target.value,
    });
  };
  console.log(userDetails);
  return (
    <form
      onSubmit={handleSubmit}
      className="w-screen lg:w-[700px] h-screen mx-auto bg-white rounded-lg overflow-y-scroll"
    >
      <div className="flex flex-col gap-6 px-8 py-6">
        <div className="flex flex-col gap-2 mb-8">
          <img className="w-[36px]" src="/images/phone.svg"></img>
          <p className="text-2xl font-bold">Schedule Demo</p>
          <p className="text-xl font-normal">
            Get a campaign proposal within 24 hours
          </p>
        </div>
        <FormField
          title="Your Name"
          type="text"
          placeholder="Enter Your Name"
          onChange={(e: any) => handleChange(e, "name")}
        />
        <FormField
          title="Your Company Email"
          placeholder="Enter Your Email"
          type="text"
          onChange={(e: any) => handleChange(e, "email")}
        />
        <FormField
          title="Mobile No."
          type="phone"
          placeholder="Enter Your Phone"
          onChange={(e: any) => handleChange(e, "phone")}
        />
        <FormField
          title="You are:"
          type="dropdown"
          placeholder="Select"
          listElements={userTitle}
          onChange={(e: any) => handleChange(e, "clientType")}
        />
        <FormField
          title="Agency Name"
          type="text"
          placeholder="Enter Agency Name"
          onChange={(e: any) => handleChange(e, "agencyName")}
        />
        <FormField
          title="Provide Details"
          type="text"
          placeholder="eg. enter details here"
          onChange={(e: any) => handleChange(e, "details")}
        />
        <FormField
          placeholder="Select Budget"
          title="Budget Option"
          type="dropdown"
          listElements={budgetOptions}
          onChange={(e: any) => handleChange(e, "budget")}
        />
        <div className=" flex gap-4 items-start justify-start">
          <label className="flex pt-1">
            <input type="checkbox" />
          </label>

          <p className="select-none text-sm md:text-base">
          By proceeding, you hereby agree that you have read, acknowledged, understood, accepted and consented to the website’s <span className="font-medium text-[#30C0b7]">Privacy Policy</span> and <span className="font-medium text-[#30C0b7]">Terms of Service.</span>
          </p>
        </div>
        <Button
          onClick={handleSubmit}
          text="Request Callback"
          bgColor="bg-[#30B8C0] mx-auto"
          textColor="white"
        ></Button>
      </div>
    </form>
  );
};
