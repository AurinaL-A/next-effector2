import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useUnit } from "effector-react";
import { charactersStore } from "@/store/charactersStore";
import { getCharacterFx } from "@/api/character";
import { useEffect } from "react";
import Header from "@/components/Header/header";
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

export default function Home() {

  const characters = useUnit({
    characters: charactersStore,
    getCharactersFx: getCharacterFx,
  });

  useEffect(()=>{
    characters.getCharactersFx();
  },
  [characters.getCharactersFx])

  const locations = useUnit({
    locations: locationsStore,
    getlocationFx: getLocationsFx,
  });

  useEffect(()=>{
    locations.getlocationFx();
  },
  [locations.getlocationFx])

  return (
    <>
      <Panel>
      <Group title="Rick and Morty Characters">
        <CardGrid size="l">
          {characters.characters.map((character: any) => (
            <Card key={character.id} style={{ padding: "20px" }}>
              <Div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <Avatar
                  src={character.image}
                  size={80}
                  style={{ marginRight: "20px" }}
                />
                <div>
                  <Title level="2" style={{ marginBottom: "10px" }}>
                    {character.name}
                  </Title>
                  <Text style={{ marginBottom: "5px" }} >
                    {`Status: ${character.status}`}</Text>
                  <Text
                    style={{ marginBottom: "5px" }}
                  >{`Species: ${character.species}`}</Text>
                  <Text>{`Gender: ${character.gender}`}</Text>
                </div>
              </Div>
            </Card>
          ))}
        </CardGrid>
      </Group>
      </Panel>
    </>
  );
}
