import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import CommentInput from "../components/CommentInput";
import CommentItem from "../components/CommentItem";

export function HomeScreen({ route, navigation }) {
  //deklaracija state varjable
  const [comment, setComment] = useState([]);

  //uzima vrijednost koju smo unijeli u textInput i dodaje istu u niz, dodjeljuje id (generirani) i value (vrijednost koju upišemo u textInput)
  const addCommentHandler = (commentTitle) => {
    setComment((currentComment) => [
      ...currentComment,
      { id: Math.random().toString(), value: commentTitle },
    ]);
  };

  //uzima id vrijednosti na koju smo kliknuli i briše tu vrijednost iz niza
  const removeCommentHandler = (commentId) => {
    setComment((currentComment) => {
      return currentComment.filter((comment) => comment.id !== commentId);
    });
  };




  function handleHomePress() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>


      <View style={styles.Osoba}>


        <View style={styles.Row1}>

          <Image
            style={styles.SlikaOsobe}
            source={require('../assets/ja.jpg')}
          />
        </View>

        <View style={styles.Row1}>
          <View style={styles.Text1} >

            <Text style={styles.TextStyle}>
              Vladimir-Saša
            </Text>
            <Text style={styles.TextStyle}>
              SIlika
            </Text>
            <Text style={styles.TextStyle}>
              Vsilika@ffos.hr
            </Text>
          </View>


        </View>




      </View>


<View style={styles.Osoba}>

<View style={styles.Text1} >

<Text style={styles.TextStyle}>
FFOS
</Text>
<Text style={styles.TextStyle}>
Srednja škola Davor Milas
</Text>
<Text style={styles.TextStyle}>
Osnovna škola Antuna Mihanovića
</Text>
</View>

</View>







    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  SlikaOsobe: {
    width: 150,
    height: 150,


  },

  Osoba: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    paddingBottom: 20,
  },
  Text1:{
    padding: 25,
  },
  TextStyle:{
    fontSize: 20,
  },

});
