import React from 'react';
import { View, FlatList, StyleSheet, StatusBar } from 'react-native';
import { ListItem, Avatar,Button } from '@rneui/themed';

const chats = [
  {
    name: 'Shayla',
    avatar: 'path_to_shayla_avatar',
    subtitle: 'There\'s a park near my house',
    time: '11:30'
  },
  {
    name: 'Lucy',
    avatar: 'path_to_lucy_avatar',
    subtitle: 'I loved getting to meet Spice',
    time: '13:51'
  },
  {
    name: 'Mari',
    avatar: 'path_to_mari_avatar',
    subtitle: 'What a cute dog!!!',
    time: '13:51'
  },
  {
    name: 'Joan',
    avatar: 'path_to_joan_avatar',
    subtitle: 'How does Saturday sound?',
    time: '13:51'
  }
];

const ChatsHome = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <ListItem.Swipeable
            bottomDivider
            rightContent={(reset) => (
              <Button
                title="Delete"
                icon={{ name: 'delete', color: 'white' }}
                buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                onPress={() => reset()}
              />
            )}
          >
            <Avatar rounded source={{ uri: item.avatar }} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
            <ListItem.Content right>
              <ListItem.Subtitle style={styles.time}>{item.time}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem.Swipeable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  time: {
    fontSize: 12,
    color: 'grey',
  }
});

export default ChatsHome;
