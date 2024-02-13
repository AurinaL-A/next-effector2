import React from 'react'
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useUnit } from "effector-react";
import { useEffect } from "react";
import {
  Panel,
  Group,
  CardGrid,
  Card,
  Div,
  Avatar,
  Title,
  Text,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { locationsStore } from "@/store/locationsStore";
import { getLocationsFx } from "@/api/locations";

const inter = Inter({ subsets: ["latin"] });



const ForeverPage: React.FC = () => 

<Panel>
<Group title="Rick and Morty Characters">
  <CardGrid size="l">
    {locations.locations.map((locations: any) => (
      <Card key={locations.id} style={{ padding: "20px" }}>
        <Div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div>
            <Title level="2" style={{ marginBottom: "10px" }}>
              {locations.name}
            </Title>
            <Text style={{ marginBottom: "5px" }} >
              {`Status: ${locations.status}`}</Text>
            <Text
              style={{ marginBottom: "5px" }}
            >{`Species: ${locations.species}`}</Text>
            <Text>{`Gender: ${locations.gender}`}</Text>
          </div>
        </Div>
      </Card>
    ))}
  </CardGrid>
</Group>
</Panel>

const locations = useUnit({
  locations: locationsStore,
  getlocationFx: getLocationsFx,
});

useEffect(()=>{
  locations.getlocationFx();
},
[locations.getlocationFx])



export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000)
  })
  return { props: {} }
}

export default ForeverPage
