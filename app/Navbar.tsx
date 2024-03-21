import React, { Key } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react"; // Import the Key type from React

export default function App() {
  const [selected, setSelected] = React.useState<Key>("photos" as Key); // Explicitly cast to Key type

  const handleSelectionChange = (key: Key) => {
    setSelected(key.toString()); // Convert Key to string if necessary
  };

  return (
    <div className="flex w-full flex-col">
      <div>
        <h1 className="mx-4 my-6">Toheeb Olawale RAJI</h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: "10px",
          marginBottom: "20px",
        }}
      >
        <Tabs
          aria-label="Options"
          onSelectionChange={handleSelectionChange}
          color="primary"
          variant="bordered"
        >
          <Tab key="about" title="About" />
          <Tab key="projects" title="Projects" />
          <Tab key="stack" title="Tech Stack" />
          <Tab key="contact" title="Contact" />
        </Tabs>
      </div>
      <div>
        <Card>
          <CardBody>
            {selected === "about" && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            )}
            {selected === "projects" && (
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            )}
            {selected === "stack" && (
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            )}
            {selected === "contact" && (
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
