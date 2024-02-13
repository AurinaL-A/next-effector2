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
import { episodeStore } from '@/store/episodeStore';
import { getEpisodeFx } from '@/api/episode';


const inter = Inter({ subsets: ["latin"] });



const Episode: React.FC = () => 

<Panel>
<Group title="Rick and Morty Characters">
  <CardGrid size="l">
    {episode.episode.map((episode: any) => (
      <Card key={episode.id} style={{ padding: "20px" }}>
        <Div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          
          <div>
            <Title level="2" style={{ marginBottom: "10px" }}>
              {episode.name}
            </Title>
            <Text style={{ marginBottom: "5px" }} >
              {`Air_date: ${episode.air_date}`}</Text>
            <Text
              style={{ marginBottom: "5px" }}
            >{`episode: ${episode.episode}`}</Text>
            
          </div>
        </Div>
      </Card>
    ))}
  </CardGrid>
</Group>
</Panel>

const episode = useUnit({
  episode: episodeStore,
  getepisodeFx: getEpisodeFx,
});

useEffect(()=>{
  episode.getepisodeFx();
},
[episode.getepisodeFx])



export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000)
  })
  return { props: {} }
}

export default Episode
