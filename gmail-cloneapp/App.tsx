import React from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const emails = [
  {
    id: "1",
    sender: "Nancy Quiros",
    subject: "Inscríbete en el curso 'Evaluación de Red…",
    time: "12:11",
  },
  {
    id: "2",
    sender: "Zenva",
    subject: "Godot 4.4 Mini-Degree at Zenva",
    time: "09:56",
  },
  {
    id: "3",
    sender: "The Hack",
    subject: "Vale do Silício, psicodélicos e espiritualidad…",
    time: "08:06",
  },
  {
    id: "4",
    sender: "Steam Store",
    subject: "Você vendeu um item no Mercado da Com…",
    time: "26 de mar.",
  },
  {
    id: "5",
    sender: "Equipe Notion",
    subject: "Notion para equipes",
    time: "25 de mar.",
  },
  {
    id: "6",
    sender: "GitHub",
    subject: "[GitHub] Your Dependabot alerts for the w…",
    time: "25 de mar.",
  },
  {
    id: "7",
    sender: "Zenva",
    subject: "Build Godot Editor Plugins",
    time: "25 de mar.",
  },
];

const EmailItem = ({ sender, subject, time }) => (
  <View style={{ flexDirection: "row", padding: 10, borderBottomWidth: 1, borderBottomColor: "#333" }}>
    <Ionicons name="person-circle" size={40} color="#ccc" style={{ marginRight: 10 }} />
    <View style={{ flex: 1 }}>
      <Text style={{ color: "white", fontWeight: "bold" }}>{sender}</Text>
      <Text style={{ color: "#bbb" }}>{subject}</Text>
    </View>
    <Text style={{ color: "#bbb" }}>{time}</Text>
  </View>
);

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#303030", paddingTop: 40 }}>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10, backgroundColor: '#424242', borderRadius: 30, marginHorizontal: 10 }}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <TextInput
          placeholder="Pesquisar no e-mail"
          placeholderTextColor="#bbb"
          style={{ flex: 1, marginLeft: 10, color: "white", backgroundColor: "#424242", padding: 8, borderRadius: 5 }}
        />
        <FontAwesome5 name="user-circle" size={24} color="white" />
      </View>
      <Text style={{ color: "#bbb", padding: 10 }}>Atualizações</Text>
      <FlatList
        data={emails}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EmailItem {...item} />}
      />
      <View style={{ position: "absolute", bottom: 20, left: 20, flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#555",
            borderRadius: 20,
            paddingVertical: 10,
            paddingHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="mail" size={24} color="white" />
          <View style={{ backgroundColor: "#E53935", borderRadius: 10, paddingHorizontal: 6, marginLeft: -10, marginTop: -10 }}>
            <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>99+</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: 20,
            backgroundColor: "#555",
            borderRadius: 20,
            paddingVertical: 10,
            paddingHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          
          
           <Ionicons name="videocam" size={24} color="white" />

          
          <View>
            
          </View>
        </TouchableOpacity>

      </View>
      
    </View>
  );
}
