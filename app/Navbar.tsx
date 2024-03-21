import React, { Key } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react"; // Import the Key type from React
import Hero from "./Home.tsx/Hero";
import Contact from "./Home.tsx/Contact";
import Stack from "./Home.tsx/Stack";

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
          marginRight: "20px",
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
          <Tab key="stack" title="Tech Stack" />
          <Tab key="projects" title="Projects" />
          <Tab key="contact" title="Contact" />
        </Tabs>
      </div>
      <div>
        <Card className="rounded-xl mx-8 my-6">
          <CardBody className="">
            {selected === "about" && (
              <div className="">
                <Hero />
              </div>
            )}
            {selected === "stack" && (
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            )}
            {selected === "projects" && <Stack />}
            {selected === "contact" && (
              <div className="">
                <Contact />
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
