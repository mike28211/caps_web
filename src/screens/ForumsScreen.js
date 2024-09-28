import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet, Dimensions, Modal, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RootLayout } from '../navigation/RootLayout';

const { width } = Dimensions.get('window'); // Get screen width

export const ForumsScreen = ({ navigation }) => {
  // State declarations
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [forums, setForums] = useState([
    { id: '1', title: 'Mental Health Awareness', timeFrame: '2h ago', tags: ['Support', 'Awareness'] },
    { id: '2', title: 'Stress Management', timeFrame: '5h ago', tags: ['Stress', 'Self-care'] },
  ]);

  // Modal state for adding forums
  const [modalVisible, setModalVisible] = useState(false);
  const [newForumTitle, setNewForumTitle] = useState('');
  const [newForumContent, setNewForumContent] = useState('');
  const [newForumTags, setNewForumTags] = useState([]);
  const [tagInput, setTagInput] = useState('');

  // Function to filter forums based on search query
  const handleSearch = () => {
    if (searchQuery) {
      const filteredForums = forums.filter((forum) =>
        forum.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setForums(filteredForums);
    } else {
      setForums([
        { id: '1', title: 'Mental Health Awareness', timeFrame: '2h ago', tags: ['Support', 'Awareness'] },
        { id: '2', title: 'Stress Management', timeFrame: '5h ago', tags: ['Stress', 'Self-care'] },
      ]);
    }
  };

  // Function to render each forum item
  const renderForumItem = ({ item }) => (
    <View style={styles.forumContainer}>
      <Text style={styles.forumTitle}>{item.title}</Text>
      <View style={styles.metaContainer}>
        <Text style={styles.timeFrame}>{item.timeFrame}</Text>
        <View style={styles.tagContainer}>
          {item.tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>{tag}</Text>
          ))}
        </View>
      </View>
      <TouchableOpacity
        style={styles.visitButton}
        onPress={() => navigation.navigate('ForumDetails', { forumId: item.id, forumTitle: item.title })}
      >
        <Ionicons name="arrow-forward" size={18} color="white" style={styles.visitIcon} />
        <Text style={styles.visitButtonText}>Visit Forum</Text>
      </TouchableOpacity>
    </View>
  );

  // Function to handle adding a new forum
  const handleAddForum = () => {
    if (!newForumTitle || !newForumContent) {
      Alert.alert('Error', 'Please provide a title and content for the forum.');
      return;
    }

    const newForum = {
      id: String(forums.length + 1),
      title: newForumTitle,
      timeFrame: 'Just now',
      tags: newForumTags,
    };
    setForums([newForum, ...forums]);
    setModalVisible(false);
    setNewForumTitle('');
    setNewForumContent('');
    setNewForumTags([]);
    setTagInput('');
  };

  // Function to add a tag
  const handleAddTag = () => {
    if (tagInput && !newForumTags.includes(tagInput)) {
      setNewForumTags([...newForumTags, tagInput]);
      setTagInput('');
    }
  };

  // Function to remove a tag
  const handleRemoveTag = (tagToRemove) => {
    setNewForumTags(newForumTags.filter(tag => tag !== tagToRemove));
  };

  return (
    <RootLayout navigation={navigation} screenName="Forums">
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Text style={styles.greeting}>Forums</Text>
            <Text style={styles.subText}>Connect, Discuss, and Support</Text>
          </View>

          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.addForumButton} onPress={() => setModalVisible(true)}>
              <Ionicons name="add-circle-outline" size={24} color="white" />
              <Text style={styles.addForumButtonText}> Add Forum</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsSearching(!isSearching)}>
              <Ionicons name="search-outline" size={32} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar (conditionally rendered) */}
        {isSearching && (
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search forums..."
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
              onSubmitEditing={handleSearch}
            />
          </View>
        )}

        {/* List of Forums (showing all items) */}
        <FlatList
          data={forums}
          keyExtractor={(item) => item.id}
          renderItem={renderForumItem}
          style={styles.forumsList}
        />

        {/* Modal for Adding New Forum */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Create a New Forum</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Title"
                value={newForumTitle}
                onChangeText={setNewForumTitle}
              />
              <TextInput
                style={styles.modalInput}
                placeholder="Content"
                value={newForumContent}
                onChangeText={setNewForumContent}
                multiline
              />
              <View style={styles.tagContainer}>
                {newForumTags.map((tag, index) => (
                  <View key={index} style={styles.tagItem}>
                    <Text style={styles.tag}>{tag}</Text>
                    <TouchableOpacity onPress={() => handleRemoveTag(tag)}>
                      <Ionicons name="close-circle" size={16} color="red" />
                    </TouchableOpacity>
                  </View>
                ))}
                <TextInput
                  style={styles.tagInput}
                  placeholder="Add a tag"
                  value={tagInput}
                  onChangeText={setTagInput}
                  onSubmitEditing={handleAddTag}
                />
              </View>
              <TouchableOpacity style={styles.submitButton} onPress={handleAddForum}>
                <Text style={styles.submitButtonText}>Create Forum</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </RootLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  greeting: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  addForumButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7129F2',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  addForumButtonText: {
    color: '#fff',
    marginLeft: 5,
  },
  subText: {
    fontSize: 14,
    color: '#6c757d',
    marginTop: 5,
    flexShrink: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  searchContainer: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  searchInput: {
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
  },
  forumsList: {
    marginTop: 20,
  },
  forumContainer: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  forumTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',  // Spread out timeFrame and tags
    alignItems: 'center',
    marginBottom: 10,
  },
  timeFrame: {
    fontSize: 12,
    color: '#6c757d',
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',  // Align tags to the right
  },
  tag: {
    backgroundColor: '#B9A2F1',
    color: 'white',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginLeft: 5,  // Margin to separate tags from each other
    fontSize: 10,  // Smaller font for the tags
  },
  visitButton: {
    flexDirection: 'row', // Align the icon and text in a row
    alignItems: 'center', // Ensure both are vertically aligned
    alignSelf: 'flex-start',
    backgroundColor: '#7129F2',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  visitIcon: {
    marginRight: 5,  // Adds space between the icon and text
  },
  visitButtonText: {
    color: 'white',
    fontSize: 14,
  },
});
