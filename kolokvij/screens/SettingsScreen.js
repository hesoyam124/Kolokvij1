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

export function SettingsScreen({ route, navigation }) {
  function handleHomePress() {
    navigation.navigate("Home");
  }


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





  return (
    <View style={styles.container}>






    <View style={styles.gameCommentsJubotron}>
      <CommentInput onAddComment={addCommentHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={comment}
        renderItem={(itemData) => (
          <CommentItem
            id={itemData.item.id}
            onDelete={removeCommentHandler}
            title={itemData.item.value}
          />
        )}
      />
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



  gameCommentsJubotron: {
    flex: 1,
  },
});
