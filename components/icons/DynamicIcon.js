import Mail from "./Mail";
import Phone from "./Phone";
import Twitter from "./Twitter";

const Components = {
  twitter: Twitter,
  mail: Mail,
  phone: Phone,
};

const DynamicIcon = ({ type }) => {
  if (typeof Components[type] !== "undefined") {
    const Component = Components[type];
    return <Component />;
  }
  return null;
};

export default DynamicIcon;
