import { WarningMessage } from "components";
import { Link } from "react-router-dom";
import { ROUTES } from "router";

export const NotFound = () => {
  return (
    <WarningMessage
      title={<>👷🏻‍♂️ Page not found.</>}
      message={
        <>
          Unfortunately, this page does not exist. Please check your URL or
          return to the&nbsp;
          <Link to={ROUTES.HOME}>Home Page</Link>.
        </>
      }
    />
  );
};
