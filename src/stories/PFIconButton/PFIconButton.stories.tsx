import React from "react";
import PFIconButton from "../../foundation/PFIconButton/PFIconButton";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default {
  title: "Foundation/PFIconButton",
  component: PFIconButton,
};

export const Default = () => {
  return (
    <PFIconButton
      icon={<FaFacebookSquare />}
      ariaLabel="facebook button"
      onClick={() => {}}
    />
  );
};

export const InstaIconButton = () => {
  return <PFIconButton icon={<FaInstagram />} ariaLabel="insta button" />;
};

export const TwitterIconButton = () => {
  return <PFIconButton icon={<FaTwitter />} ariaLabel="insta button" />;
};

export const LinkedInIconButton = () => {
  return <PFIconButton icon={<FaLinkedin />} ariaLabel="insta button" />;
};
