import React from "react";

const layout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  return <>{children}</>;
};

export default layout;
