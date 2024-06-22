import React, { FC, PropsWithChildren } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    })
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
