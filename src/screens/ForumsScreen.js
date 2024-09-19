import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width } = Dimensions.get('window'); // Get screen width

export default function ForumsScreen({ navigation }) {
  const [isSearching, setIsSearching] = useState(false); // State to control visibility of search bar
  const [searchQuery, setSearchQuery] = useState('');    // State to hold the search input

  // Sample forum data (replace this with your backend data)
  const forums = [
    { id: '1', title: 'Mental Health Awareness', tags: ['Mental Health', 'Awareness', 'Support', 'Community'], timeFrame: '3d ago' },
    { id: '2', title: 'Stress Management Tips', tags: ['Stress', 'Wellness'], timeFrame: '5d ago' },
    { id: '3', title: 'Therapy Resources', tags: ['Therapy', 'Resources'], timeFrame: '1w ago' },
    { id: '4', title: 'Coping Mechanisms', tags: ['Coping', 'Mechanisms', 'Therapy'], timeFrame: '2w ago' },
    { id: '5', title: 'Self-Care Strategies', tags: ['Self-Care', 'Strategies', 'Wellness'], timeFrame: '1m ago' },
    { id: '6', title: 'Mindfulness Techniques', tags: ['Mindfulness', 'Techniques'], timeFrame: '1w ago' },
    { id: '7', title: 'Healthy Relationships', tags: ['Relationships', 'Healthy'], timeFrame: '2d ago' },
    { id: '8', title: 'Anxiety Reduction', tags: ['Anxiety', 'Reduction'], timeFrame: '4d ago' },
    { id: '9', title: 'Depression Support', tags: ['Depression', 'Support'], timeFrame: '6d ago' },
    { id: '10', title: 'Sleep Hygiene', tags: ['Sleep', 'Hygiene'], timeFrame: '8d ago' },
  ];

  const handleSearch = () => {
    console.log(`Searching for: ${searchQuery}`); // Handle your search logic here
    setIsSearching(false);
    setSearchQuery('');
  };

  // Function to render each forum item
  const renderForumItem = ({ item }) => {
    // Get the first two tags and calculate how many tags are left
    const visibleTags = item.tags.slice(0, 2);
    const remainingTagsCount = item.tags.length - visibleTags.length;

    return (
      <View style={styles.forumContainer}>
        <Text style={styles.forumTitle}>{item.title}</Text>
        <View style={styles.metaContainer}>
          <Text style={styles.timeFrame}>{item.timeFrame}</Text>
          <View style={styles.tagContainer}>
            {visibleTags.map((tag, index) => (
              <Text key={index} style={styles.tag}>{tag}</Text>
            ))}
            {remainingTagsCount > 0 && (
              <Text style={styles.tag}>{`${remainingTagsCount}+`}</Text>  // Display remaining tags count
            )}
          </View>
        </View>
        <TouchableOpacity style={styles.visitButton} onPress={() => console.log(`Visiting forum: ${item.title}`)}>
          <Ionicons name="arrow-forward-outline" size={16} color="white" style={styles.visitIcon} />
          <Text style={styles.visitButtonText}>Visit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Greeting and Subtext */}
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Forums</Text>
          <Text style={styles.subText}>Connect, Discuss, and Support</Text>
        </View>

        {/* Icons for Add and Search */}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('SelfAssessment')}>
            <Ionicons name="add-circle-outline" size={32} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsSearching(!isSearching)}>
            <Ionicons name="search-outline" size={32} color="black" style={styles.icon} />
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
        data={forums}  // Show all forums
        keyExtractor={(item) => item.id}
        renderItem={renderForumItem}
        style={styles.forumsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff', // Set background color for better contrast
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
  subText: {
    fontSize: 14,
    color: '#6c757d',
    marginTop: 5,
    flexShrink: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
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
